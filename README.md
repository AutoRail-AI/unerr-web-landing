# unerr Web Landing

Landing page and marketing site for the [unerr](https://unerr.dev) platform — code intelligence for AI coding agents. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime | React 19, TypeScript (strict mode) |
| Styling | Tailwind CSS v4, CVA + tailwind-merge |
| Components | shadcn/ui, Framer Motion, GSAP |
| Auth | Better Auth (email/password + Google OAuth) |
| Database | Supabase PostgreSQL via Prisma (`landing` schema) |
| Deployment | Fly.io (Docker, `iad` region) |
| CI/CD | GitHub Actions (Blacksmith runners) |
| Testing | Vitest + Playwright |
| Fonts | Space Grotesk (headings), Inter (body), JetBrains Mono (code) |

> Billing, analytics, error tracking, email, AI agents, and job queues are handled by the main app at `app.unerr.dev` (kap10-server). This repo is intentionally lightweight — marketing pages + auth + waitlist.

## Quick Start

```bash
corepack enable
pnpm install
cp .env.example .env.local   # fill in your values
pnpm prisma db push           # create landing schema tables
pnpm dev                      # http://localhost:3000
```

### Prerequisites

- Node.js >= 20
- pnpm (via Corepack)
- Supabase project (PostgreSQL)

## Environment Variables

Create `.env.local` from `.env.example`:

### Required

```bash
SUPABASE_DB_URL=postgresql://...          # Supabase connection string
BETTER_AUTH_SECRET=your-32-char-secret    # openssl rand -base64 32
BETTER_AUTH_URL=http://localhost:3000
```

### Optional

```bash
GOOGLE_CLIENT_ID=...                      # Google OAuth
GOOGLE_CLIENT_SECRET=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_UNERR_APP_SERVER=http://localhost:3001
```

That's it. No Stripe, Redis, PostHog, Sentry, OpenAI, or Resend keys needed — those integrations live in kap10-server.

## Project Structure

```
app/
├── (marketing)/          # Landing, pricing, OSS, legal pages (dark theme)
│   ├── page.tsx          # Home / landing page
│   ├── pricing/          # Pricing page
│   ├── oss/              # OSS Guardian page
│   └── legal/            # Privacy policy, terms of service
├── (auth)/               # Login, register, verify-email
├── (admin)/              # Admin controls for main app
└── api/                  # API routes (auth, health, waitlist)

components/
├── marketing/            # Landing page sections
│   ├── hero-section.tsx          # GSAP word reveal + product preview
│   ├── hero-product-preview.tsx  # Interactive app preview (orchestrator)
│   ├── preview/                  # Split preview components
│   │   ├── nav-rail.tsx          # NavRail (mirrors real product)
│   │   ├── focus-bar.tsx         # FocusBar breadcrumb
│   │   ├── overview-view.tsx     # Overview tab
│   │   ├── issues-view.tsx       # Issues tab (Linear-style)
│   │   └── docs-view.tsx         # Atlas/Docs tab (3-column)
│   ├── bento-grid.tsx            # Feature grid with hover animations
│   ├── metrics-bar.tsx           # Animated number tickers
│   ├── problem-section.tsx       # Before/after comparison
│   ├── how-it-works.tsx          # 3-step tutorial
│   ├── pricing-preview.tsx       # OSS + Pro pricing cards
│   ├── oss/                      # OSS Guardian components
│   └── pricing/                  # Pricing page components
├── ui/                   # shadcn/ui components
│   └── magic/            # Animated components (border-beam, ripple, etc.)
└── onboarding/           # Onboarding flow

lib/
├── auth/                 # Better Auth config
├── db/prisma.ts          # Prisma client (landing schema)
└── types/                # TypeScript types

prisma/
└── schema.prisma         # Prisma schema (multiSchema: "landing")

styles/
└── tailwind.css          # Design tokens
```

## Database & Auth Architecture

Both this landing site and the main app (kap10-server) share a **single Supabase PostgreSQL database** (us-east-1) but are fully isolated via PostgreSQL schema separation:

| App | Postgres Schema | Auth Users | Purpose |
|-----|----------------|------------|---------|
| **kap10-server** | `public` + `unerr` | Platform users (developers) | Main product — code intelligence |
| **unerr-web-landing** | `landing` | Admin users (internal team) | Marketing site + admin dashboard |

### How isolation works

- **kap10-server** uses `pg` Pool with `search_path=public`, so Better Auth creates `public.user`, `public.session`, etc.
- **unerr-web-landing** uses Prisma with `multiSchema` preview feature. Every model has `@@schema("landing")`, so Better Auth creates `landing.user`, `landing.session`, etc.
- Each app has its own `BETTER_AUTH_SECRET` — session cookies are not interchangeable between apps.
- Same `SUPABASE_DB_URL` connection string, different schemas, zero table conflicts.

### Migrations

Migrations are managed via Prisma Migrate. On Fly.io deploys, `prisma migrate deploy` runs automatically as a release command.

```bash
# Development: create a new migration
pnpm prisma migrate dev --name describe_the_change

# Production: applied automatically via fly.toml release_command
# Manual: pnpm prisma migrate deploy
```

Migration files live in `prisma/migrations/` and must be committed to git.

## Design System

Shared with kap10-server. Substrate Dark aesthetic.

- **Color budget:** 90% neutral, 10% purposeful
- **Accent:** Violet (`#8B5CF6`) — sole accent color
- **Cyan:** `#22D3EE` — functional only (live data indicators)
- **Tokens:** Semantic only (`bg-background`, `text-foreground`, `text-accent`) — never raw hex
- **Marketing utilities:** `text-gradient`, `text-lit`, `bg-accent-fade`, `glass-card`

## Commands

```bash
pnpm dev                # Dev server (Turbopack)
pnpm build              # Production build
pnpm start              # Start production server
pnpm lint               # ESLint
pnpm lint:fix           # ESLint with auto-fix
pnpm prettier           # Check formatting
pnpm prettier:fix       # Fix formatting
pnpm test               # Vitest
pnpm test:watch         # Watch mode
pnpm test:coverage      # With coverage
pnpm e2e:headless       # Playwright E2E tests
pnpm storybook          # Storybook on port 6006
```

## Deployment

Deployed to **Fly.io** via GitHub Actions with manual deploy approval.

```
Push to main → Build Docker image → Manual approval → Deploy to Fly.io
```

- **App:** `unerr-web`
- **Region:** `iad` (Virginia — colocated with Supabase us-east-1)
- **URL:** `https://unerr-web.fly.dev`

### Fly secrets (runtime)

```bash
flyctl secrets set \
  SUPABASE_DB_URL="postgresql://..." \
  BETTER_AUTH_SECRET="$(openssl rand -base64 32)" \
  BETTER_AUTH_URL="https://unerr-web.fly.dev" \
  --app unerr-web
```

Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` when ready to enable Google sign-in.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full setup guide.

## Documentation

- [docs/DATABASE_ARCHITECTURE.md](docs/DATABASE_ARCHITECTURE.md) — Database schema isolation, auth separation, migrations
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Deployment guide (Fly.io, Docker, CI/CD)
- [docs/FEATURES.md](docs/FEATURES.md) — Feature documentation
- [docs/ui_ux/brand.md](docs/ui_ux/brand.md) — Brand identity, color palette, typography
- [docs/ui_ux/UI_UX_GUIDE.md](docs/ui_ux/UI_UX_GUIDE.md) — Design system reference
- [docs/ui_ux/LANDING_PAGE_BLUEPRINT.md](docs/ui_ux/LANDING_PAGE_BLUEPRINT.md) — Landing page specs
- [ARCHITECTURE.md](ARCHITECTURE.md) — System architecture
- [CLAUDE.md](CLAUDE.md) — AI coding assistant instructions
