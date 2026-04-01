# Database & Auth Architecture

## Decision

Both the landing site (unerr-web-landing) and the main platform (kap10-server) share a **single Supabase PostgreSQL database** in us-east-1, isolated via PostgreSQL schemas.

## Why one database?

- Simpler infrastructure — one Supabase project to manage, monitor, and back up
- Lower cost — no second database instance
- Shared connection string — `SUPABASE_DB_URL` is the same for both apps
- PostgreSQL schemas provide the same isolation guarantees as separate databases (separate tables, indexes, constraints) without the operational overhead

## Schema Layout

```
Supabase PostgreSQL (us-east-1)
├── public          ← kap10-server: Better Auth tables (user, session, account, etc.)
├── unerr           ← kap10-server: App tables (repos, pipelines, workspaces, etc.)
├── landing          ← unerr-web-landing: Better Auth tables + waitlist + admin orgs
└── extensions       ← Supabase: pgvector, etc.
```

| Schema | Owner App | Tables | Purpose |
|--------|-----------|--------|---------|
| `public` | kap10-server | `user`, `session`, `account`, `verification`, `organization`, `member`, `invitation` | Platform user auth (developers using unerr) |
| `unerr` | kap10-server | `Repo`, `PipelineRun`, `ApiKey`, `Workspace`, `EntityEmbedding`, etc. | Product data — repos, indexing, intelligence |
| `landing` | unerr-web-landing | `user`, `session`, `account`, `verification`, `organization`, `member`, `invitation`, `waitlist` | Admin auth (internal team) + marketing waitlist |

## How Auth Isolation Works

Both apps use Better Auth, but with completely independent auth systems:

### kap10-server (platform users)

```typescript
// lib/auth/auth.ts — uses raw pg Pool
const connectionString = dbUrl + "?options=-c%20search_path%3Dpublic"
const pool = new Pool({ connectionString })
// Better Auth creates tables in public schema: public.user, public.session, etc.
```

### unerr-web-landing (admin users)

```prisma
// prisma/schema.prisma — uses Prisma multiSchema
datasource db {
  provider = "postgresql"
  schemas  = ["landing"]
}

model User {
  @@schema("landing")   // → landing.user
}
```

### Session isolation

Each app has its own `BETTER_AUTH_SECRET`:
- kap10-server: `BETTER_AUTH_SECRET` → signs platform user sessions
- unerr-web-landing: different `BETTER_AUTH_SECRET` → signs admin sessions

A session cookie from one app **cannot** be used on the other — the signature won't validate.

## Migrations

### unerr-web-landing (this repo)

Uses **Prisma Migrate**:

```bash
# Development: generate migration file + apply
pnpm prisma migrate dev --name add_some_column

# Production: applied automatically on Fly.io deploy
# fly.toml: release_command = "npx prisma migrate deploy"
```

Migration files live in `prisma/migrations/` and must be committed to git. Fly runs `prisma migrate deploy` as a release command before starting the new container.

### kap10-server

Uses its own migration strategy (separate from this repo). See kap10-server's docs.

## Environment Variables

Both apps use the same connection string:

```bash
# Same value in both .env.local files and deployment configs
SUPABASE_DB_URL=postgresql://postgres.[project-ref]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
```

The schema separation is handled at the application level, not the connection level.

## Verifying isolation

```sql
-- See all schemas
SELECT schema_name FROM information_schema.schemata
WHERE schema_name IN ('public', 'unerr', 'landing');

-- See tables per schema
SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_schema IN ('public', 'unerr', 'landing')
ORDER BY table_schema, table_name;

-- Count users per schema (independent user pools)
SELECT 'public' as schema, count(*) FROM public."user"
UNION ALL
SELECT 'landing', count(*) FROM landing."user";
```

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Accidentally running kap10-server migrations on landing schema | Each app's Prisma schema explicitly declares its schemas. `prisma migrate deploy` only touches declared schemas. |
| Connection pool exhaustion (two apps, one DB) | kap10-server uses `max: 2` on auth pool. Landing site has minimal traffic. Supabase pooler handles the rest. |
| Schema name collision | `public`, `unerr`, `landing` are distinct. Table names like `user` are qualified by schema (`landing.user` vs `public.user`). |
| Shared DB goes down | Both apps go down. Acceptable tradeoff — simpler than managing two databases. Supabase provides automatic backups. |
