# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**unerr Web Landing** — Landing page and promotional site for the unerr platform (code intelligence for AI coding agents). Also serves admin-related controls for the main app at `../kap10-server/`. Built with Next.js 16, React 19, Tailwind CSS v4 (Substrate Dark + Violet accent), and shadcn/ui.

The main product codebase lives at `../kap10-server/` — this repo shares the same design system, brand assets, and marketing components.

## Commands

```bash
pnpm dev                    # Dev server (Turbopack)
pnpm build                  # Production build
pnpm lint                   # ESLint
pnpm lint:fix               # ESLint with auto-fix
pnpm prettier               # Check formatting
pnpm prettier:fix           # Fix formatting
pnpm test                   # Run all Vitest tests
pnpm test -- path/to/file   # Run a single test file
pnpm test:watch             # Watch mode
pnpm test:coverage          # With coverage
pnpm e2e:headless           # Playwright E2E tests
pnpm storybook              # Start Storybook on port 6006
```

## Architecture

### Route Groups
- `app/(marketing)/` — Landing page, pricing, OSS, legal pages. Always dark theme (Substrate Dark). Has its own layout with SiteHeader, SiteFooter, ScrollProgressBar.
- `app/(auth)/` — Login, register, verify-email. Admin-only — not user-facing. All public CTAs go to the waitlist dialog.
- `app/(admin)/` — Admin controls for the main app.
- `app/api/` — API routes (auth, health, waitlist).

### MVP Waitlist Flow
All user-facing CTAs (pricing, OSS, hero) open the **waitlist dialog** (`components/marketing/waitlist-dialog.tsx`) which persists to Supabase via `/api/waitlist`. No public login/register. Auth pages exist only for admin use.

### Design System (Shared with kap10-server)
- **Aesthetic**: Substrate Dark + Paper Light. No glassmorphism, no backdrop-filter.
- **Color Budget**: 90% neutral, 10% purposeful. Violet (#8B5CF6) is sole accent. Cyan (#22D3EE) is functional (live data) only.
- **Fonts**: `font-grotesk` (Space Grotesk — headings), `font-sans` (Inter — body), `font-mono` (JetBrains Mono — code).
- **Tokens**: All in `styles/tailwind.css`. Use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `text-accent`), never raw hex.
- **Marketing utilities**: `text-gradient` (violet gradient text), `text-lit` (lit-from-above white gradient), `bg-accent-fade` (violet gradient fill), `glass-card`/`glass-panel` (solid surfaces).

### Marketing Components (`components/marketing/`)
All marketing components use Framer Motion + GSAP for animations. They respect `prefers-reduced-motion`. Key components:
- `site-header.tsx` — Sticky header with scroll-triggered glass effect
- `hero-section.tsx` / `hero-animation.tsx` — GSAP word reveal + product preview
- `hero-product-preview.tsx` — Interactive app preview (orchestrator, imports from `preview/`)
- `preview/nav-rail.tsx` — NavRail sidebar (Phase 19: 9 tabs, 3 cognitive groups, `bg-sidebar` tokens)
- `preview/focus-bar.tsx` — FocusBar breadcrumb (Phase 19: `h-8`, `bg-background/80 backdrop-blur-sm`)
- `preview/overview-view.tsx` — Overview tab (Phase 20: HealthPulseStrip, GradeRing, 6-card grid)
- `preview/issues-view.tsx` — Issues tab (Phase 20: Linear-style, 44px rows, detail panel)
- `preview/docs-view.tsx` — Atlas tab (Phase 18.5: 3-column, NavTree + Content + ContextPanel)
- `tracked-section.tsx` — PostHog section visibility tracking wrapper
- `waitlist-dialog.tsx` — Waitlist modal with general/OSS plan toggle
- `bento-grid.tsx` — 6-card feature grid with hover animations
- `metrics-bar.tsx` — Animated number tickers
- `problem-section.tsx` — Before/after comparison with scroll-triggered entrance
- `how-it-works.tsx` — 3-step tutorial with pinned terminal
- `pricing-preview.tsx` — OSS + Pro pricing cards
- `pricing/pricing-cards.tsx` — Full pricing page (6 tiers from product docs)
- `pricing/comparison-table.tsx` — Feature comparison table (6 tiers)
- `final-cta.tsx` — Closing CTA with animated grid pattern
- `shimmer-button.tsx` — Primary CTA button with shimmer effect (supports `href` or `onClick`)

### Magic UI Components (`components/ui/magic/`)
Reusable animated components: `border-beam`, `magic-card`, `number-ticker`, `animated-grid`, `dot-pattern`, `ripple`, `spotlight`.

### Database & Auth Architecture
Both this repo and kap10-server share a **single Supabase PostgreSQL database** (us-east-1) with schema-level isolation:
- **kap10-server**: `public` schema (Better Auth via `pg` Pool with `search_path=public`) + `unerr` schema (app tables via Prisma)
- **unerr-web-landing**: `landing` schema (Better Auth + app tables via Prisma `multiSchema`)
- Each app has its own `BETTER_AUTH_SECRET` — session cookies are not interchangeable.
- Same `SUPABASE_DB_URL`, different schemas, zero conflicts.
- **Prisma** (`lib/db/prisma.ts`): All models use `@@schema("landing")`. Connects to Supabase PostgreSQL.
- **Migrations**: `prisma/migrations/` committed to git. `prisma migrate deploy` runs as Fly.io release command on every deploy.
- No MongoDB/Mongoose, no Redis, no BullMQ, no Stripe, no Sentry, no OpenAI — this repo is intentionally lightweight.

### Auth Flow
- Better Auth configured in `lib/auth/`. Protected routes in `proxy.ts`.
- `proxy.ts` (NOT `middleware.ts`) — Next.js 16 route protection.
- Auth on this site is for **admin users only** (internal team). Platform user auth lives in kap10-server.
- All public user CTAs open the waitlist dialog, not login/register.

### Analytics (PostHog)
- Initialized in `instrumentation-client.ts` (Next.js 15.3+ pattern).
- Reverse-proxied via `/ingest` (configured in `next.config.ts` rewrites).
- Cookieless: `persistence: "memory"` — no cookies, GDPR-friendly.
- Event definitions: `lib/analytics/events.ts`
- React hooks: `lib/analytics/hooks.ts` (useTrackPageTime, useTrackScrollDepth, useTrackSectionView)
- Section tracking: `components/marketing/tracked-section.tsx` wraps landing page sections.
- Key events: `section_viewed`, `page_scroll_depth`, `page_time_spent`, `pricing_cta_clicked`, `preview_tab_changed`, `waitlist_dialog_opened`, `waitlist_form_submitted`.

### Deployment
- **Fly.io** (`fly.toml`): app `unerr-web`, region `iad`, `node:22-bookworm-slim` Docker image.
- **CI/CD**: Single workflow `.github/workflows/ci.yml` — test → build → manual approval → deploy.
- **Custom domain**: `unerr.dev` via Cloudflare DNS (A/AAAA records, DNS only) → Fly.io TLS.
- **Migrations**: `release_command` in `fly.toml` runs `prisma migrate deploy` before each deploy.
- **Public env vars**: Set in `fly.toml` `[env]` (NEXT_PUBLIC_APP_URL, PostHog key, Supabase URL).
- **Secrets**: Set via `flyctl secrets set` (SUPABASE_DB_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL).

### Pricing (MVP)
6 tiers defined in `components/marketing/pricing/pricing-cards.tsx`:
- Free Trial ($0/7 days), OSS Guardian ($0 forever), Pro ($20/mo), Pro+ ($35/mo), Startup ($30/seat/mo), Enterprise (custom).
- All CTAs open the waitlist dialog — no direct checkout.
- Pricing strategy: "Insights free, actions paid" — see `docs/product/FIRST_WEEK_WOW.md`.
- Flat-rate, no credits, no usage-based pricing.

### Environment Variables
Validated via T3 Env (`env.mjs`) with Zod schemas. All vars are `.optional()` so builds succeed without secrets. Required at runtime:
- `SUPABASE_DB_URL` — PostgreSQL connection string
- `BETTER_AUTH_SECRET` — session signing (min 32 chars)
- `BETTER_AUTH_URL` — auth redirect base URL

### Imports
Absolute imports via `@/*` mapping to project root.

### TypeScript
Strict mode with `noUncheckedIndexedAccess`. Uses ts-reset for enhanced type safety.

### Component Structure
Components use co-located files: `ComponentName.tsx`, `ComponentName.test.tsx`, `ComponentName.stories.tsx`. Styling uses CVA (`class-variance-authority`) + `tailwind-merge`.

---

## Code Generation Rules

**Follow these rules to prevent build and lint errors. They are derived from actual build issues.**

### 1. Next.js 16 Middleware
Always use `proxy.ts`, never `middleware.ts`. Next.js 16 deprecated `middleware.ts`.

### 2. Zod v4 Validation
No `.url()` or `.email()` on strings — use `.refine()` instead. Use `z.record(z.string(), z.any())` not `z.record(z.any())`.
```typescript
// ❌ WRONG
link: z.string().url().optional()

// ✅ CORRECT
link: z.string().refine(
  (val) => { if (!val) return true; try { new URL(val); return true } catch { return false } },
  { message: "Invalid URL format" }
).optional()
```

### 3. JSON Parsing
Always type-assert `await request.json()` and `await response.json()`.
```typescript
const body = (await request.json()) as { messages?: AgentMessage[]; task?: string }
```

### 4. Error Handling in Catch Blocks
Type errors as `unknown` and check type before accessing properties.
```typescript
catch (error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
}
```

### 5. JSX in TypeScript Files
Always use `.tsx` extension for files containing JSX, never `.ts`.

### 6. Better Auth Import Paths
Client plugins from `better-auth/client/plugins`, not `better-auth/react/plugins`.

### 7. Better Auth Secret During Build
Provide fallback secret so builds succeed without env vars:
```typescript
secret: process.env.BETTER_AUTH_SECRET || "development-secret-change-in-production-min-32-chars",
```

### 8. NextRequest IP Address
Extract from headers, never use `req.ip` (doesn't exist in Next.js 16).
```typescript
const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ||
           req.headers.get("x-real-ip") || "anonymous"
```

### 9. Lazy Initialization
Third-party clients must not initialize at module load time. Use null singleton + getter function pattern.

### 10. Reduce Function Type Annotations
Always type reduce callback parameters explicitly.
```typescript
const total = items.reduce((sum: number, item: any) => sum + item.value, 0)
```

### 11. Missing Type Declarations
Create `.d.ts` files for libraries without TypeScript types.

### 12. Design Tokens
Never use raw hex colors. Use semantic tokens: `bg-background`, `text-foreground`, `text-accent`, etc.

### 13. Marketing Animations
Always respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` or `window.matchMedia("(prefers-reduced-motion: reduce)")`.

### 14. CTA Links
All public-facing CTAs must use the waitlist dialog (`useWaitlist().open()`), never `href="/login"` or `href="/register"`. Admin auth pages exist but are not linked from marketing pages.

### 15. PostHog Events
Use helpers from `lib/analytics/events.ts`. Track CTA clicks with `trackCtaClick()`, section visibility with `TrackedSection` wrapper, pricing with `trackPricingCtaClick()`. Never import `posthog` directly in components — use the centralized helpers.

## Documentation

- [docs/DATABASE_ARCHITECTURE.md](docs/DATABASE_ARCHITECTURE.md) — Database schema isolation, auth separation, migrations
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Deployment guide (Fly.io, Docker, CI/CD, Cloudflare custom domain)
- [docs/FEATURES.md](docs/FEATURES.md) — Feature documentation
- [docs/product/](docs/product/) — Product strategy, pricing, growth playbooks
- [docs/ui_ux/brand.md](docs/ui_ux/brand.md) — Brand identity, color palette, typography
- [docs/ui_ux/UI_UX_GUIDE.md](docs/ui_ux/UI_UX_GUIDE.md) — Complete design system reference
- [docs/ui_ux/LANDING_PAGE_BLUEPRINT.md](docs/ui_ux/LANDING_PAGE_BLUEPRINT.md) — Landing page specs and section designs
- [docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md](docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md) — Design decisions and migration plan
- [ARCHITECTURE.md](ARCHITECTURE.md) — System architecture
- [README.md](README.md) — Setup guide, environment variables, deployment
