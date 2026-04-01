# unerr Web Landing

Landing page and marketing site for the [unerr](https://unerr.dev) platform — code intelligence for AI coding agents. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime | React 19, TypeScript (strict mode) |
| Styling | Tailwind CSS v4, CVA + tailwind-merge |
| Components | shadcn/ui, Framer Motion, GSAP |
| Auth | Better Auth (admin-only, email/password + Google OAuth) |
| Database | Supabase PostgreSQL via Prisma (`landing` schema) |
| Analytics | PostHog (cookieless, reverse-proxied via `/ingest`) |
| Deployment | Fly.io (Docker, `iad` region) |
| CI/CD | GitHub Actions (Blacksmith runners) — single `ci.yml` workflow |
| Domain | `unerr.dev` via Cloudflare DNS → Fly.io |
| Testing | Vitest + Playwright |
| Fonts | Space Grotesk (headings), Inter (body), JetBrains Mono (code) |

> Billing, error tracking, email, AI agents, and job queues are handled by the main app at `app.unerr.dev` (kap10-server). This repo is intentionally lightweight — marketing pages + waitlist + admin auth.

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
- Supabase project (PostgreSQL, us-east-1)

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
NEXT_PUBLIC_POSTHOG_KEY=phc_...           # PostHog analytics
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

No Stripe, Redis, Sentry, OpenAI, or Resend keys needed — those live in kap10-server.

## Project Structure

```
app/
├── (marketing)/          # Landing, pricing, OSS, legal pages (dark theme)
│   ├── page.tsx          # Home / landing page
│   ├── pricing/          # Pricing page (6 tiers from product docs)
│   ├── oss/              # OSS Guardian page
│   └── legal/            # Privacy policy, terms of service
├── (auth)/               # Login, register (admin-only, not user-facing)
├── (admin)/              # Admin controls for main app
└── api/                  # API routes (auth, health, waitlist)

components/
├── marketing/            # Landing page sections
│   ├── hero-section.tsx          # GSAP word reveal + product preview
│   ├── hero-product-preview.tsx  # Interactive app preview (orchestrator)
│   ├── preview/                  # Split preview components (Phase 19/20 spec)
│   │   ├── nav-rail.tsx          # NavRail (9 tabs, 3 groups)
│   │   ├── focus-bar.tsx         # FocusBar breadcrumb
│   │   ├── overview-view.tsx     # Overview tab (HealthPulseStrip + cards)
│   │   ├── issues-view.tsx       # Issues tab (Linear-style, 44px rows)
│   │   └── docs-view.tsx         # Atlas tab (3-column layout)
│   ├── tracked-section.tsx       # PostHog section visibility tracking
│   ├── waitlist-dialog.tsx       # Waitlist modal (all CTAs funnel here)
│   ├── pricing/                  # Pricing page components
│   └── oss/                      # OSS Guardian components
├── ui/                   # shadcn/ui components
│   └── magic/            # Animated components (border-beam, ripple, etc.)
└── onboarding/           # Onboarding flow

lib/
├── analytics/            # PostHog client + server + events + hooks
├── auth/                 # Better Auth config (admin-only)
├── db/prisma.ts          # Prisma client (landing schema)
└── types/                # TypeScript types

prisma/
├── schema.prisma         # Prisma schema (multiSchema: "landing")
└── migrations/           # Prisma Migrate files (committed to git)
```

## Database & Auth Architecture

Both this landing site and the main app (kap10-server) share a **single Supabase PostgreSQL database** (us-east-1) with schema-level isolation:

| App | Postgres Schema | Auth Users | Purpose |
|-----|----------------|------------|---------|
| **kap10-server** | `public` + `unerr` | Platform users (developers) | Main product |
| **unerr-web-landing** | `landing` | Admin users (internal team) | Marketing + waitlist |

Each app has its own `BETTER_AUTH_SECRET` — sessions are not interchangeable. Same `SUPABASE_DB_URL`, different schemas, zero conflicts.

See [docs/DATABASE_ARCHITECTURE.md](docs/DATABASE_ARCHITECTURE.md) for full details.

### Migrations

```bash
pnpm prisma migrate dev --name describe_the_change   # development
# Production: runs automatically via fly.toml release_command
```

## Analytics (PostHog)

PostHog is initialized via `instrumentation-client.ts` and reverse-proxied through `/ingest` (configured in `next.config.ts`). Cookieless, GDPR-friendly (`persistence: "memory"`).

### Events tracked

| Event | Trigger |
|-------|---------|
| `page_time_spent` | Page unmount / tab switch |
| `page_scroll_depth` | 25/50/75/100% milestones |
| `section_viewed` | Section enters viewport (hero, metrics, problem, how-it-works, features, pricing, cta) |
| `pricing_cta_clicked` | Pricing tier button click |
| `pricing_billing_toggled` | Monthly/annual toggle |
| `preview_tab_changed` | Hero preview tab switch |
| `preview_repo_selected` | Hero preview repo dropdown |
| `waitlist_dialog_opened` | Waitlist modal opens |
| `waitlist_form_submitted` | Waitlist form submitted |
| `waitlist_joined` | Server-side DB insert |

## Pricing (MVP)

All CTAs funnel to the **waitlist dialog** — no direct login/register for public users.

6 tiers from product docs: Free Trial, OSS Guardian ($0 forever), Pro ($20/mo), Pro+ ($35/mo), Startup ($30/seat/mo), Enterprise (custom). See `docs/product/REVENUE_PROJECTIONS.md` for full pricing strategy.

## Commands

```bash
pnpm dev                # Dev server (Turbopack)
pnpm build              # Production build
pnpm start              # Start production server
pnpm lint               # ESLint
pnpm lint:fix           # ESLint with auto-fix
pnpm test               # Vitest
pnpm test:watch         # Watch mode
pnpm storybook          # Storybook on port 6006
```

## Deployment

Deployed to **Fly.io** via a single GitHub Actions workflow (`ci.yml`):

```
Push to main → Test (lint + typecheck + tests) → Build Docker image → Manual approval → Deploy
```

- **App:** `unerr-web`
- **Region:** `iad` (Virginia — colocated with Supabase us-east-1)
- **Domain:** `unerr.dev` (Cloudflare DNS → Fly.io)
- **Docker base:** `node:22-bookworm-slim` (3-stage build)

### Fly secrets (runtime)

```bash
flyctl secrets set \
  SUPABASE_DB_URL="postgresql://..." \
  BETTER_AUTH_SECRET="$(openssl rand -base64 32)" \
  BETTER_AUTH_URL="https://unerr.dev" \
  --app unerr-web
```

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full setup including custom domain + Cloudflare config.

## Documentation

- [docs/DATABASE_ARCHITECTURE.md](docs/DATABASE_ARCHITECTURE.md) — Database schema isolation, auth separation, migrations
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Deployment guide (Fly.io, Docker, CI/CD, Cloudflare custom domain)
- [docs/FEATURES.md](docs/FEATURES.md) — Feature documentation
- [docs/product/](docs/product/) — Product strategy, pricing, growth playbooks
- [docs/ui_ux/brand.md](docs/ui_ux/brand.md) — Brand identity, color palette, typography
- [docs/ui_ux/UI_UX_GUIDE.md](docs/ui_ux/UI_UX_GUIDE.md) — Design system reference
- [docs/ui_ux/LANDING_PAGE_BLUEPRINT.md](docs/ui_ux/LANDING_PAGE_BLUEPRINT.md) — Landing page specs
- [CLAUDE.md](CLAUDE.md) — AI coding assistant instructions
