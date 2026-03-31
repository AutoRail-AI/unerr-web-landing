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
pnpm worker                 # Start BullMQ workers
pnpm storybook              # Start Storybook on port 6006
docker compose up           # Start app + worker + redis
```

## Architecture

### Route Groups
- `app/(marketing)/` — Landing page, pricing, OSS, legal pages. Always dark theme (Substrate Dark). Has its own layout with SiteHeader, SiteFooter, ScrollProgressBar.
- `app/(auth)/` — Login, register, verify-email. Split layout with branded left panel.
- `app/(admin)/` — Admin controls for the main app.
- `app/api/` — API routes (auth, health, billing webhooks, etc.).

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
- `bento-grid.tsx` — 6-card feature grid with hover animations
- `metrics-bar.tsx` — Animated number tickers
- `problem-section.tsx` — Before/after comparison with scroll-triggered entrance
- `how-it-works.tsx` — 3-step tutorial with pinned terminal
- `pricing-preview.tsx` — OSS + Pro pricing cards
- `final-cta.tsx` — Closing CTA with animated grid pattern
- `shimmer-button.tsx` — Primary CTA button with shimmer effect

### Magic UI Components (`components/ui/magic/`)
Reusable animated components: `border-beam`, `magic-card`, `number-ticker`, `animated-grid`, `dot-pattern`, `ripple`, `spotlight`.

### Database
- **Prisma** (`lib/db/prisma.ts`): Used by Better Auth for auth. Connects to Supabase PostgreSQL.
- No MongoDB/Mongoose — all application data goes through Supabase via Prisma.

### Auth Flow
- Better Auth configured in `lib/auth/`. Protected routes in `proxy.ts`.
- `proxy.ts` (NOT `middleware.ts`) — Next.js 16 route protection.

### Background Job Processing
BullMQ + Redis. Pre-configured queues: `email` (5 concurrency), `processing` (3), `webhooks` (10). Queue helpers: `queueEmail()`, `queueProcessing()`, `queueWebhook()` from `@/lib/queue`. Add job types in `lib/queue/types.ts`, processors in `lib/queue/workers.ts`.

### Environment Variables
Validated via T3 Env (`env.mjs`) with Zod schemas. Add new env vars there.

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
Third-party clients (Stripe, Redis, etc.) must not initialize at module load time. Use null singleton + getter function + Proxy export pattern.
```typescript
let stripeInstance: Stripe | null = null
function getStripe(): Stripe {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-02-24.acacia" })
  }
  return stripeInstance
}
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) { return getStripe()[prop as keyof Stripe] },
})
```

### 10. Stripe API Version
Always use `"2025-02-24.acacia"`.

### 11. Reduce Function Type Annotations
Always type reduce callback parameters explicitly.
```typescript
const total = items.reduce((sum: number, item: any) => sum + item.value, 0)
```

### 12. BullMQ Queue Types
Use `as any` type assertions for Redis connection params in Queue/Worker constructors.

### 13. Missing Type Declarations
Create `.d.ts` files for libraries without TypeScript types.

### 14. Design Tokens
Never use raw hex colors. Use semantic tokens: `bg-background`, `text-foreground`, `text-accent`, etc.

### 15. Marketing Animations
Always respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` or `window.matchMedia("(prefers-reduced-motion: reduce)")`.

## Documentation

- [docs/ui_ux/brand.md](docs/ui_ux/brand.md) — Brand identity, color palette, typography
- [docs/ui_ux/UI_UX_GUIDE.md](docs/ui_ux/UI_UX_GUIDE.md) — Complete design system reference
- [docs/ui_ux/LANDING_PAGE_BLUEPRINT.md](docs/ui_ux/LANDING_PAGE_BLUEPRINT.md) — Landing page specs and section designs
- [docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md](docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md) — Design decisions and migration plan
- [ARCHITECTURE.md](ARCHITECTURE.md) — Database architecture, multi-tenancy, billing, system design
- [README.md](README.md) — Setup guide, environment variables, Docker
