# unerr Design System Overhaul

> **Status:** PLANNING — All decisions finalized. Implementation not started.
> **Author:** Senior Design Review (March 2026)
> **Dependencies:** None — this is a design-only migration with no backend changes.
> **Scope:** Brand identity, color system, component tokens, animation catalog, documentation, logo assets.
> **Quality Bar:** Stripe × Linear × Vercel
> **Supersedes:** autorail Industrial Glass design system

---

## 1. Problem Statement

### 1.1 The Identity Gap

The design system was built for **autorail** — a parent brand with two products (unerr + necroma). The product has evolved to **unerr only** — a single-product code intelligence platform. The design docs, color philosophy, and visual language still reflect the original two-product architecture.

| What the Design Docs Say | What the Product Actually Is |
|---------------------------|------------------------------|
| "autorail — Autonomous Engineering Infrastructure" | "unerr — The AI Tech Lead" |
| Two products: unerr (cyan) + necroma (purple) | One product: unerr |
| "Bicameral Color Logic" — cyan vs purple | No product distinction to communicate |
| "Industrial Glass HUD" aesthetic | Professional developer workspace |
| Boot sequences, glitch animations, breathing glows | "60 seconds to value" — zero friction |
| "Void Black, Machine Precision" tone | "Safe Velocity" — calm, trustworthy |

### 1.2 Product-Design Misalignment

The growth strategy (documented in `docs/product/`) reveals critical mismatches:

**Target users:** Vibe coders, solo devs, OSS maintainers, small teams → need approachable, trustworthy UI
**Positioning:** "Safety net", "insurance", "architectural immune system" → should feel calm and reliable
**Growth mechanics:** Health badges on GitHub READMEs, PR footers, repo roast screenshots → design must work on light backgrounds
**Quality benchmark:** "Stripe × Linear × Vercel" → none of these use HUD/sci-fi aesthetics
**Pricing bracket:** $20/mo (same as Cursor, Linear) → must feel professional-grade, not indie/gaming

### 1.3 Specific Failures

| # | Failure | Root Cause | Impact |
|---|---------|-----------|--------|
| F1 | Bicameral color system has no product justification | necroma doesn't exist; two accent colors with no functional distinction | Cognitive overhead, inconsistent decisions |
| F2 | 191 "autorail" references across codebase | Incomplete brand transition | Brand confusion, SEO dilution |
| F3 | Industrial Glass HUD conflicts with "safety" positioning | Design built for cinematic pitch, not daily-driver trust | Users feel overwhelmed instead of protected |
| F4 | Theatrical animations in dashboard | Boot sequences, glitch, breathing glows designed for landing page | Conflicts with "60 seconds to value" growth strategy |
| F5 | Two-color data viz insufficient | Health grades (A-F), blast radius, confidence need 5+ semantic colors | Purple + cyan can't communicate a grade scale |
| F6 | Health badges illegible on light backgrounds | Glow-based design fails on GitHub READMEs (light bg) | Top-of-funnel viral loop broken |
| F7 | Rail Purple (#6E18B3) used as primary but fails WCAG for text | Original color chosen for "necroma" brand, not accessibility | 3.5:1 contrast on dark — fails AA for body text |
| F8 | Light mode still has 270+ hardcoded dark-only colors | See original audit (v2.0) | Entire pages break in light mode |

### 1.4 Research: What Top Dev Tools Do

Analysis of 6 market-leading developer tools (full research in conversation record):

| Tool | Accent Strategy | Dark/Light | Key Insight |
|------|----------------|------------|-------------|
| **Linear** | Single desaturated indigo, LCH color space | Dark-first, full parity | "Linear style" = less color, more content |
| **Vercel** (Geist) | Almost no accent — monochrome + semantic only | Full parity via tokens | "The design system exists to disappear" |
| **Stripe** | Single Cornflower Blue (#635BFF) | Light-first | Perceptually uniform color for consistent contrast |
| **GitHub** (Primer) | Blue for interactive, gray for chrome, semantic for status | 9 themes, HSLuv color space | "Home for all developers" — inclusive, functional |
| **GitLab** (Pajamas) | Functional color, status on indicators only | Rebuilt dark mode with semantic tokens | Dark mode v1 (algorithmic inversion) failed — had to rebuild |
| **Raycast** | Near-zero color, monochrome black/white | Dark-first, dynamic | "Speed-as-design" — maximum information density |

**Cross-cutting patterns:**
- **One accent color, used sparingly** — every successful system
- **Semantic tokens, not raw values** — enables theme switching as token remapping
- **Color earns its place through meaning** — no decorative color
- **Perceptually uniform color spaces** (LCH/HSLuv) for consistent contrast across hues
- **Never pure black (#000)** — dark gray (#09-#0A range) for base backgrounds
- **Status color on indicator only** (dot, border, icon) — never full-surface fills

---

## 2. Decisions Made

### Decision 1: Unified Violet Accent (Drop Bicameral)

**Decision:** Replace the dual Electric Cyan + Rail Purple system with a single violet accent.

**Why violet, not cyan or purple:**
- Rail Purple (#6E18B3) fails WCAG AA for text (3.5:1 on dark)
- Electric Cyan (#00E5FF) fails on light backgrounds (~1.5:1 on white)
- Violet-500 (#8B5CF6) passes AA on dark backgrounds (~5.5:1)
- Violet-700 (#6D28D9) passes AA on light backgrounds (~6.5:1)
- Violet is differentiated in the dev tool space (no major competitor uses it as primary)
- Purple/violet signals sophistication and intelligence — aligns with "AI Tech Lead" positioning
- The light mode implementation already converged both colors to Deep Purple — we're making dark mode consistent

**Why not keep cyan as co-primary:**
- The bicameral split was designed to separate two products. With one product, it creates confusion.
- Having two accent colors forces designers/devs to make a choice at every decision point ("is this cyan or purple?") with no clear rule.
- Every successful dev tool system uses ONE accent + semantic status colors. This is proven.

**Cyan's new role:** Demoted to a functional color for "live data" — pipeline running, streaming terminal output, real-time indicators. It's not a brand color anymore.

**New accent palette:**

| Role | Dark Mode | Light Mode | Token |
|------|-----------|------------|-------|
| **Primary interactive** | `#8B5CF6` (Violet-500) | `#6D28D9` (Violet-700) | `--color-accent` |
| **Primary fill** (gradient) | `#8B5CF6 → #7C3AED` | `#7C3AED → #6D28D9` | `bg-accent-fade` |
| **Live data** | `#22D3EE` (Cyan-400) | `#0891B2` (Teal-700) | `--color-live` |

**Migration notes:**
- `text-electric-cyan` → `text-accent` (in most cases) or `text-live` (for streaming/active data)
- `text-primary` (Rail Purple) → `text-accent` (for text) or keep `bg-primary` (for fills — the token value changes)
- `border-electric-cyan` → `border-accent`
- `bg-rail-fade` → `bg-accent-fade` (rename + new gradient stops)
- `border-rail-purple` → `border-accent`
- `shadow-glow-purple` → `shadow-glow-accent`
- `hover-glow-purple` → `hover-glow-accent`

### Decision 2: Replace "Industrial Glass HUD" with "Substrate Dark + Paper Light" (No Glassmorphism)

**Decision:** Drop glass material system entirely. Solid surfaces with crisp borders. No `backdrop-filter`, no blur on surfaces.

**What stays:**
- Crisp 1px borders
- High information density
- `glass-card` and `glass-panel` class names (redefined as solid surfaces for backward compat)
- Terminal Exception rule (code stays dark)
- Tight border radius (rounded-lg)

**What goes:**
- `backdrop-filter: blur()` on all surface elements — removed from `.glass-card` and `.glass-panel`
- "Precision Glass" / "Industrial Glass" / any glass terminology
- "Boot sequence" / theatrical entry phases
- "Neural Link Established" messaging
- `glitch` animation
- `breathing-glow` animation on dashboard elements
- `scan-lines` overlay
- `bg-grid-pattern` on page backgrounds (keep for landing page)
- "Confidence-reactive" ambient pulsing borders
- "Bicameral Color Logic" concept
- "Void Black", "The Wire", "The Spark" terminology

**Why remove glass entirely:**
1. At `rgba(255,255,255,0.03)` on `#0A0A0F`, blur has nothing to blur — the visual effect is imperceptible
2. `backdrop-filter: blur(12px)` forces GPU compositing on every card (48 files, 102 occurrences) — real rendering cost for invisible effect
3. Safari/Firefox have historical `backdrop-filter` bugs and performance inconsistencies
4. Linear, Stripe, Vercel — none use glassmorphism. Solid surfaces are the industry standard for professional dev tools
5. Light mode already overrides glass to plain white + shadow — glass was dark-mode-only decoration

**Rationale:** The stated quality bar is "Stripe × Linear × Vercel." None of these use glass or HUD aesthetics. The growth strategy emphasizes "zero friction" and "60 seconds to value" — unnecessary GPU overhead and conceptual complexity contradict this. Solid surfaces are simpler to implement, cheaper to render, and visually identical at 3% opacity.

### Decision 3: Five-Point Health Grade Color Scale

**Decision:** Add a proper semantic color scale for health grades, confidence scores, and blast radius severity.

| Grade | Color Name | Dark Hex | Light Hex |
|-------|-----------|----------|-----------|
| **A / Excellent** | Emerald | `#34D399` | `#059669` |
| **B / Good** | Teal | `#2DD4BF` | `#0D9488` |
| **C / Average** | Amber | `#FBBF24` | `#D97706` |
| **D / Poor** | Orange | `#FB923C` | `#EA580C` |
| **F / Critical** | Red | `#F87171` | `#DC2626` |

**Why:** The growth strategy depends on health grades being instantly readable — in badges, dashboards, PR footers, and "Repo Roast" screenshots. A two-color system (purple + cyan) cannot communicate a 5-point scale. This follows GitHub's approach (green/yellow/red for CI status) extended to a full grade range.

### Decision 4: Growth-Aligned Shareability Components

**Decision:** Design system must include specifications for contexts beyond the dashboard.

| Context | Background | Accent | Design Approach |
|---------|-----------|--------|----------------|
| **Dashboard** (dark mode) | `#0A0A0F` | Violet-500 | Glass panels, semantic tokens |
| **Dashboard** (light mode) | `#F8F9FA` | Violet-700 | Paper surfaces, shadows |
| **Health badge** (GitHub README) | Any (user's README bg) | Grade color fill | Flat, solid, shields.io style |
| **Shareable card** (X/Reddit) | Fixed dark (`#0A0A0F`) | Violet | Self-contained, no CSS deps |
| **PR footer** (GitHub PR) | Light (`#ffffff`) | Plain text + inline SVG | No CSS dependencies |

**Why:** The growth playbook's viral mechanics (health badges, repo roasts, PR footers) all render OUTSIDE our app, on surfaces we don't control. The design system must account for this.

### Decision 5: Brand Consolidation (autorail → unerr)

**Decision:** Rename all brand references from "autorail" to "unerr". Drop all necroma references.

**Naming rules:**
- Brand name: **unerr** (lowercase, monospace)
- Tagline: **The AI Tech Lead**
- CLI: `npx unerr` (migrate from `@autorail/unerr`)
- URL: `unerr.dev`
- Logo files: `unerr.svg`, `unerr-wordmark.svg`, `icon-wordmark.svg`

**What changes:**
- 191 "autorail" references across the codebase
- Logo SVG files need redesign with violet accent (currently Rail Purple)
- `app/layout.tsx` metadata
- `packages/cli/package.json` scope
- All documentation

### Decision 6: Animation Catalog Cleanup

**Decision:** Keep only functional animations in the dashboard. Theatrical animations move to a "landing-page-only" section.

**Dashboard animations (keep):**

| Animation | Purpose |
|-----------|---------|
| `fade-in` | Page mount entry |
| `slide-up` | Card stagger entrance |
| `accordion-down/up` | Expand/collapse panels |
| `shimmer` | Skeleton loading |
| `pulse-glow` | Status dot (live indicator) |

**Landing-page-only (move/gate):**

| Animation | Why Remove from Dashboard |
|-----------|--------------------------|
| `breathing-glow` | Distracting during daily use |
| `breathing-glow-purple` | Same |
| `glitch` | Sci-fi aesthetic conflicts with trust positioning |
| `particle-flow` / `particle-down` | Decorative, not informative |
| `scan-lines` | HUD cosplay |
| Boot sequence phases | Theatrical — conflicts with "60 seconds to value" |

### Decision 7: Neutral-Dominant Color Strategy (The Color Budget)

**Decision:** Adopt Linear's "90% neutral, 10% purposeful color" approach. Reject both the current dual-glow system AND pure monochrome (Vercel-style).

#### Why Not Pure Monochrome (Vercel-style)?

We evaluated Vercel's Geist design system and **rejected full monochrome** for unerr. The core reasoning:

**unerr's product value is making invisible things visible.** Health grades, blast radius severity, confidence scores, pipeline status, drift alerts — these must register at a glance. A monochrome system forces users to **read** every status instead of **seeing** it. That's a UX regression for an information-dense tool.

| Factor | Vercel (monochrome works) | unerr (monochrome fails) |
|--------|--------------------------|--------------------------|
| **Product data density** | Low — deploy list, domain config | High — 50+ pages, graphs, grades, maps |
| **Key visual moment** | "Deployed" checkmark | Health grade card, blast radius map |
| **Viral mechanism** | Word of mouth, Next.js ecosystem | Health badges, repo roasts, screenshots — need to POP |
| **Brand recognition** | Household name, can afford invisibility | Pre-launch, needs memorability |
| **Semantic range** | Binary (pass/fail) | 5-point scale (A-F) + live/active states |
| **Context of rendering** | Always inside their own UI | Badges on GitHub, footers in PRs, cards on X — uncontrolled backgrounds |

**Monochrome is a luxury of brand equity.** Vercel earned it over years with 100K+ monthly signups. For a pre-launch product that needs health badges to stand out in GitHub READMEs and screenshots to go viral on X/Reddit, monochrome means the wrong kind of invisibility.

#### The Right Model: Linear (Neutral-Dominant + Purposeful Color)

Linear is almost entirely grayscale. But they use color exactly where it matters: issue priority, status labels, project icons. Color is **earned** — every colored pixel carries meaning. This is the model for unerr:

```
Chrome (sidebar, headers, borders, cards, tabs)  →  Neutral (grayscale)
Interactive (CTA buttons, focus rings)            →  Violet accent — sparingly
Data (grades, status, severity, pipeline)         →  Semantic colors (5-point scale)
```

#### The Color Budget Principle

> **Color is a budget. Every colored pixel must justify its existence by communicating something a developer needs to act on.**

**The rule:** On any given dashboard page, non-neutral color should appear in **3-5 places maximum**.

**Where color DOES appear:**

| Element | Color | Justification |
|---------|-------|---------------|
| CTA button ("Run Health Audit") | Violet fill | Primary action — must stand out from neutral chrome |
| Health grade badge | Grade color (emerald/amber/red) | Product's core value prop — instant read |
| Status dots (safe/risky/blocked) | Semantic color | Binary signal — needs instant recognition |
| Focus ring | Violet | Accessibility requirement |
| Live pipeline indicator | Cyan | Active process — temporal, disappears when done |

**Where color does NOT appear (neutral wins):**

| Element | Neutral Treatment | Why Not Color |
|---------|------------------|---------------|
| Sidebar nav items | `text-muted-foreground` → `bg-muted` + `font-medium` active | Linear's approach — no color needed |
| Table links | `text-foreground` + underline-on-hover | Colored links on every row = rainbow noise |
| Card borders | `border-border` (neutral) | Accent borders add noise without info |
| Section headers | `text-foreground` | Typography hierarchy is sufficient |
| Hover states | `bg-muted` fill | Subtle bg shift, not a glow effect |
| Secondary/ghost buttons | `border-border text-foreground` | Only primary CTA gets color |
| Breadcrumbs, tabs (inactive) | `text-muted-foreground` | Weight change signals state; color is overkill |
| Active tab | `text-foreground font-medium` + bottom border | Border alone communicates "selected" |

#### The Squint Test

A quality gate for every page: squint at it. You should see:
- A **mostly gray** field (backgrounds, borders, text, chrome)
- **1-2 violet spots** (CTA button, maybe a focus ring)
- **A few semantic color dots** (status indicators, grade badge)
- **Nothing else colored**

If you see a rainbow → too much color. If you see pure grayscale with no anchor → page lacks hierarchy. The balance: neutral canvas with purposeful color punctuation.

#### Comparison to Current State

| Element | Current (too much color) | New (color budget) |
|---------|------------------------|-------------------|
| Active nav | `text-electric-cyan` (colored) | `bg-muted font-medium text-foreground` (neutral) |
| Tab active | `text-electric-cyan` + cyan glow | `text-foreground font-medium` + bottom border |
| Stat card hover | `shadow-glow-purple` (purple glow) | `bg-muted/50` border shift (neutral) |
| Table links | `text-electric-cyan` | `text-foreground` + `hover:underline` |
| Secondary button | `border-accent/30 text-accent` (was `border-rail-purple/30 text-electric-cyan`) | `border-border text-foreground` |
| Card border | `border-electric-cyan/20` | `border-border` |

---

## 3. Implementation Plan

### Phase 1: Token Foundation (P0 — Do First)

Update CSS custom properties in `styles/tailwind.css`. This is the foundation — everything else builds on correct tokens.

| # | Task | File | Details | Effort |
|---|------|------|---------|--------|
| 1.1 | Update dark mode accent tokens | `styles/tailwind.css` | `--color-primary: #8B5CF6`, `--color-accent: #8B5CF6`, `--color-ring: #8B5CF6` (was `#6E18B3`, `#00E5FF`, `#00E5FF`) | S |
| 1.2 | Update light mode accent tokens | `styles/tailwind.css` | `--color-primary: #6D28D9`, `--color-accent: #6D28D9`, `--color-ring: #6D28D9` (was `#5B0B96`) | S |
| 1.3 | Add `--color-live` token | `styles/tailwind.css` | Dark: `#22D3EE`, Light: `#0891B2` — for pipeline/streaming states | S |
| 1.4 | Rename `bg-rail-fade` → `bg-accent-fade` and update gradient stops | `styles/tailwind.css` | Dark: `#8B5CF6 → #7C3AED`, Light: `#7C3AED → #6D28D9` | S |
| 1.5 | Add health grade tokens | `styles/tailwind.css` | `--color-grade-a: #34D399`, `--color-grade-b: #2DD4BF`, `--color-grade-c: #FBBF24`, `--color-grade-d: #FB923C`, `--color-grade-f: #F87171` (+ light variants) | S |
| 1.6 | Update `text-gradient` utility | `styles/tailwind.css` | New violet gradient stops | S |
| 1.7 | Update glow utilities | `styles/tailwind.css` | `.glow-purple` → violet rgba values, `.shadow-glow-purple` → violet, `.shadow-glow-cyan` → keep as `.shadow-glow-live` | M |
| 1.8 | Update `hover-glow-cyan` / `hover-glow-purple` | `styles/tailwind.css` | Rename to `.hover-glow-accent` / `.hover-glow-live`, update colors | M |
| 1.9 | Update light mode overrides | `styles/tailwind.css` | `.light .text-electric-cyan` → map to Violet-700 (already does, but rename intent) | S |
| 1.10 | Add `.text-live` utility | `styles/tailwind.css` | `color: var(--color-live)` for streaming/active data | S |
| 1.11 | **Contrast audit for custom violet hue** | Documentation | Run final hue through WebAIM checker against `#0A0A0F` and `#F8F9FA`. Document ratios in PR. Must pass ≥ 4.5:1 on both. See §6.1. | S |
| 1.12 | **Evaluate cyan/teal perceptual distance** | `styles/tailwind.css` | Test `--color-live` against grade-B teal on dark bg. If too similar, shift live to sky-400 (`#38BDF8`). See §6.2. | S |
| 1.13 | Add `--color-violet-deep` primitive | `styles/tailwind.css` | Quantum Violet (`#8134CE`) as palette primitive for gradient stops, hover depth, edge cases | S |

**Estimated total Phase 1:** 2-3 days

### Phase 2: Component Token Migration (P0)

Replace hardcoded color references in components with semantic tokens.

| # | Task | Scope | Details | Effort |
|---|------|-------|---------|--------|
| 2.1 | Replace `text-electric-cyan` with `text-accent` | All components | Global find/replace where used for interactive states (links, active nav, tabs) | M |
| 2.2 | Replace `text-electric-cyan` with `text-live` | Pipeline/streaming components | Only where it indicates active/running state (pipeline stepper, log streaming) | S |
| 2.3 | Replace `border-electric-cyan` with `border-accent` | All components | Active borders, selected states | S |
| 2.4 | Replace `border-rail-purple` with `border-accent` | All components | Structural borders | S |
| 2.5 | Replace `hover:text-electric-cyan` with `hover:text-accent` | Interactive elements | Hover states on links, buttons | M |
| 2.6 | Replace `bg-electric-cyan/10` with `bg-accent/10` | Status backgrounds | Badge backgrounds, pill fills | S |
| 2.7 | Audit remaining raw hex values | All `.tsx` files | Find `#00E5FF`, `#6E18B3`, `#8134CE` hardcoded in JSX | M |
| 2.8 | Update Tooltip component | `components/Tooltip/Tooltip.tsx` | `bg-zinc-700 text-white` → `bg-popover text-popover-foreground` | S |
| 2.9 | Update Dialog/Sheet/AlertDialog overlays | `components/ui/*.tsx` | `bg-black/80` → `bg-[var(--color-overlay)]` | S |
| 2.10 | Update Button `text-white` on accent-fade | `components/Button/Button.tsx` | → `text-primary-foreground` | S |

**Estimated total Phase 2:** 2-3 days

### Phase 2.5: Chrome Neutralization (P0 — Color Budget Enforcement)

Strip accent color from navigation chrome, tabs, table links, and secondary elements. This is the highest-impact visual change — it takes the UI from "colorful" to "professional."

| # | Task | Scope | Details | Effort |
|---|------|-------|---------|--------|
| 2.5.1 | Neutralize sidebar active state | Sidebar nav component | `text-electric-cyan` active → `bg-muted font-medium text-foreground` active | S |
| 2.5.2 | Neutralize tab active state | All tab components | `text-electric-cyan` + glow → `text-foreground font-medium` + bottom `border-foreground` | M |
| 2.5.3 | Neutralize table row links | Table components (repos, entities, rules) | `text-electric-cyan` → `text-foreground hover:underline` | M |
| 2.5.4 | Neutralize card borders | Stat cards, glass-cards | Remove `border-electric-cyan/20`, `shadow-glow-purple` hover → `hover:border-border-strong` or `hover:bg-muted/50` | M |
| 2.5.5 | Neutralize secondary/ghost buttons | Button variants | `border-accent/30 text-accent` → `border-border text-foreground hover:bg-muted` | S |
| 2.5.6 | Neutralize breadcrumbs | Breadcrumb component | Ensure `text-muted-foreground` with no accent colors | S |
| 2.5.7 | Squint Test audit — page by page | All 50+ dashboard pages | Review each page screenshot: is it mostly gray with 3-5 color spots? Fix violations. | L |
| 2.5.8 | **Add ESLint color-budget rules** | `.eslintrc` / custom plugin | `no-accent-on-nav`, `no-glow-on-chrome`, `prefer-neutral-hover` — warn severity. See §6.3. | M |
| 2.5.9 | **Add Color Budget PR checklist** | `.github/PULL_REQUEST_TEMPLATE.md` | Checklist: no accent on chrome, colored elements limited to CTA/status/grades, squint test. See §6.3. | S |
| 2.5.10 | **Ensure live data uses `pulse-glow`** | Pipeline/streaming components | All `text-live` / `--color-live` elements must have animation to distinguish from static teal grades. See §6.2. | S |
| 2.5.11 | **Add redundant text labels to all color indicators** | All status/grade components | No color-only communication. Every colored dot/badge/border must have a text label or letter grade alongside. | M |

**Estimated total Phase 2.5:** 3-4 days

### Phase 3: Brand Asset Migration (P1)

| # | Task | File | Details | Effort |
|---|------|------|---------|--------|
| 3.1 | ~~New icon with violet accent gradient~~ | `app/icon.svg`, `public/unerr.svg` | **DONE** — Geometric diagonal-stroke icon using `#8B5CF6 → #7C3AED` gradient. All SVG + PNG variants generated. SVG gradients cleaned (single shared gradient with proper coordinates, no `nan` values). | — |
| 3.2 | ~~Design new unerr wordmark SVG~~ | `public/unerr-wordmark.svg` | **DONE** — "unerr" as vector path with violet gradient fill (1435×297) | — |
| 3.3 | ~~Design new icon + wordmark lockup~~ | `public/icon-wordmark.svg` | **DONE** — Icon (512px) + "unerr" text lockup (2137×512) | — |
| 3.4 | ~~Update `dashboard-header.tsx`~~ | `components/dashboard/dashboard-header.tsx` | **DONE** — `src="/unerr.svg"`, `alt="unerr"`, docs URL → `docs.unerr.dev`, hover → `text-accent` | — |
| 3.5 | ~~Update `app/layout.tsx` metadata~~ | `app/layout.tsx` | **DONE** — Removed all "autorail" from title, description, keywords, authors | — |
| 3.6 | ~~Remove old autorail SVG files~~ | `public/autorail*.svg` | **DONE** — No autorail files exist in public/ | — |
| 3.7 | ~~Update CLI references~~ | Multiple files | **DONE** — `npx @autorail/unerr` → `npx unerr`, `npm install -g @autorail/unerr` → `npm install -g unerr` across cli-hero, onboarding-command-center, local-setup-instructions, connect-ide, CLI index.ts, setup.ts | — |
| 3.8 | ~~Sweep code references~~ | `**/*.{tsx,ts,svg}` | **DONE** — Zero "autorail" references in code/SVG files. Modal embed client comment updated. | — |
| 3.9 | ~~Update `.cursorrules`~~ | `.cursorrules` | **DONE** — Removed all "Kap10" references, aligned with unerr Substrate Dark + Paper Light design system | — |

**Estimated total Phase 3:** 3-5 days (design time for SVGs is the bottleneck)

### Phase 4: Animation Cleanup (P1)

| # | Task | File | Details | Effort |
|---|------|------|---------|--------|
| 4.1 | Gate theatrical animations | `styles/tailwind.css` | Add comment block: "Landing Page Only" above `breathing-glow`, `glitch`, `particle-flow`, etc. | S |
| 4.2 | Remove `bg-grid-pattern` from dashboard pages | Component files | Keep in `tailwind.css` for landing page use, remove from dashboard components | S |
| 4.3 | Remove `scan-lines` from dashboard | Component files | If used anywhere in dashboard (check first) | S |
| 4.4 | Simplify `celebration-pop` / `celebration-particle` | `styles/tailwind.css` | Review if still needed — simplify or remove | S |
| 4.5 | Ensure `prefers-reduced-motion` covers all remaining animations | `styles/tailwind.css` | Verify the catch-all rule works for all keyframes | S |

**Estimated total Phase 4:** 1 day

### Phase 5: Growth Component Design (P1)

| # | Task | File | Details | Effort |
|---|------|------|---------|--------|
| 5.1 | Health badge SVG template | New: `lib/badges/health-badge.ts` or similar | Generate flat shields.io-style SVG with grade letter + color fill. Must be readable at 20px on any background. | M |
| 5.2 | Shareable card component | New: `components/shared/shareable-card.tsx` | Fixed dark background, self-contained, no external CSS deps. For "Repo Roast" and social sharing. | M |
| 5.3 | PR footer template | New: `lib/github/pr-footer.ts` or integrate into existing PR review | Plain text + small inline badge. No CSS. Light-background safe. | S |
| 5.4 | Grade color utility | New: `lib/utils/grade-colors.ts` | `getGradeColor(grade: string): { bg, text, border }` — returns theme-appropriate colors | S |

**Estimated total Phase 5:** 2-3 days

### Phase 6: Documentation Update (P2)

| # | Task | File | Details | Effort |
|---|------|------|---------|--------|
| 6.1 | ~~Rewrite brand.md~~ | `docs/ui_ux/brand.md` | **DONE** — Updated to unerr Substrate Dark + Paper Light | — |
| 6.2 | ~~Update UI_UX_GUIDE.md header + Part II~~ | `docs/ui_ux/UI_UX_GUIDE.md` | **DONE** — Updated header, philosophy, color system | — |
| 6.3 | ~~Full sweep of UI_UX_GUIDE.md body~~ | `docs/ui_ux/UI_UX_GUIDE.md` | **DONE** — All `electric-cyan` refs migrated to `accent`/`live`/neutral. Tabs, buttons, cards, glows, checklists, appendices updated. Color Budget enforcement added throughout. | — |
| 6.4 | Update CLAUDE.md design section | `CLAUDE.md` | Update color mapping table, Forbidden Five, token references to use new violet values | M |
| 6.5 | Update RULESETS.md if exists | `RULESETS.md` | Align code pattern references with new tokens | S |

**Estimated total Phase 6:** 1-2 days

### Phase 7: Verification (P2)

| # | Task | Details |
|---|------|---------|
| 7.1 | Screenshot every dashboard page in both themes | Visual regression check |
| 7.2 | WCAG contrast audit | All text × background combinations with new violet values |
| 7.3 | Verify Terminal Exception in light mode | Code/logs still dark |
| 7.4 | Test all overlays in both themes | Modal, dropdown, tooltip, sheet |
| 7.5 | Test health badge on GitHub README | Verify readability on white/dark GitHub themes |
| 7.6 | Test shareable card screenshots | Verify they look correct when screenshotted and shared |
| 7.7 | Run `pnpm lint` and `pnpm build` | Ensure no broken references |

---

## 4. Migration Risks & Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| **Breaking existing component styles** | Medium | Phase 1 (tokens) provides backwards-compat aliases. `text-electric-cyan` continues to work via the same CSS custom property. |
| **Visual regression in 50+ pages** | Medium | Phase 7 screenshot audit. Can also use Playwright visual comparison. |
| **npm package rename breaks existing users** | High | Do NOT rename `@autorail/unerr` immediately. Plan: publish new `unerr` package, deprecate old one with redirect message. |
| **Landing page design diverges** | Low | Landing page is a separate project (not yet merged). When merged, it can keep dramatic animations — the dashboard boundary is clean. |
| **Community confusion during transition** | Low | No public users yet (pre-launch). Clean cut before launch day. |

---

## 5. Decision Log

| Date | Decision | Rationale | Status |
|------|----------|-----------|--------|
| 2026-03-12 | Drop bicameral color system | necroma doesn't exist; single product needs single accent | APPROVED |
| 2026-03-12 | Unified violet accent (#8B5CF6 dark, #6D28D9 light) | WCAG AA in both themes, differentiated in dev tool space, aligns with "intelligence" positioning | APPROVED |
| 2026-03-12 | Demote cyan to functional "live data" only | Cyan fails on light backgrounds; unnecessary as brand color with one product | APPROVED |
| 2026-03-12 | Drop glassmorphism entirely — "Substrate Dark + Paper Light" | Glass effect invisible at 3% opacity on dark bg; `backdrop-filter` wastes GPU; Stripe/Linear/Vercel use solid surfaces | APPROVED |
| 2026-03-12 | Add 5-point health grade color scale | Growth strategy depends on shareable health grades; 2-color system insufficient | APPROVED |
| 2026-03-12 | Remove theatrical animations from dashboard | Boot sequences, glitch, breathing glow conflict with "60 seconds to value" and daily-use ergonomics | APPROVED |
| 2026-03-12 | Consolidate brand to "unerr" | 191 "autorail" refs, no public product called autorail, brand confusion | APPROVED |
| 2026-03-12 | Design for shareability (badges, cards, PR footers) | Growth playbook viral mechanics render outside our app on uncontrolled backgrounds | APPROVED |
| 2026-03-12 | Reject pure monochrome (Vercel-style) | unerr's product value requires semantic color for health grades, status, severity; monochrome = invisibility for pre-launch viral sharing | APPROVED |
| 2026-03-12 | Adopt "Color Budget" principle (Linear model) | 90% neutral, 10% purposeful color; 3-5 colored elements per page max; Squint Test quality gate | APPROVED |
| 2026-03-12 | Neutralize chrome (nav, tabs, borders, secondary buttons) | Active nav, tabs, table links, card borders all become neutral; only CTA and status get color | APPROVED |
| 2026-03-12 | Q1: Drop all "Rail" naming — use `accent`, `primary` | "Rail" is an autorail artifact; standard naming is self-documenting | RESOLVED |
| 2026-03-12 | Q2: Custom violet hue (not Tailwind default) | Uniqueness — Tailwind violet-500 used by thousands of projects | RESOLVED |
| 2026-03-12 | Q3: Keep npm package as-is for now | Not a priority — address at launch | RESOLVED |
| 2026-03-12 | Q4: New icon coming — placeholder until ready | Fresh identity for unerr | RESOLVED |
| 2026-03-12 | Q5: Keep Quantum Violet as palette primitive | Useful for gradient stops, hover states, edge cases | RESOLVED |
| 2026-03-12 | Custom violet hue requires contrast audit before commit | Violet wavelength is tricky for AA compliance; must pass ≥4.5:1 on both dark and light | APPROVED |
| 2026-03-12 | Differentiate cyan (live) vs teal (grade-B) by behavior | Colors are perceptually adjacent; live = animated + temporal, grade = static + labeled | APPROVED |
| 2026-03-12 | Enforce chrome neutralization via ESLint + PR checklist | Without active enforcement, neutral chrome regresses within a quarter | APPROVED |
| 2026-03-12 | No color-only indicators — redundant text/animation required | Accessibility + robustness; meaning must survive grayscale rendering | APPROVED |

---

## 6. Implementation Guardrails

These are known friction points to watch during Phase 1-2 execution. Each has a specific mitigation strategy.

### 6.1 Custom Violet Contrast Validation (Phase 1 — Blocking)

**The problem:** Violet is a notoriously tricky wavelength for maintaining WCAG AA compliance. The custom hue (between Tailwind violet-500 `#8B5CF6` and violet-600 `#7C3AED`) must pass contrast checks against both pure dark (`#0A0A0F`) and pure light (`#F8F9FA`) backgrounds. Small shifts in hue or lightness can drop below the 4.5:1 threshold, especially on light mode where the darker violet variant is used.

**Mitigation:**
- **Before committing the custom hue:** Run it through [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) against both `#0A0A0F` (dark bg) and `#F8F9FA` (light bg)
- **Required minimums:** Dark mode accent ≥ 4.5:1 on `#0A0A0F`. Light mode accent ≥ 4.5:1 on `#F8F9FA`. Both must pass for the hue to ship.
- **Fallback:** If the custom hue can't pass both backgrounds, use Tailwind violet-500 (`#8B5CF6`) for dark and violet-700 (`#6D28D9`) for light — these are proven AA-compliant
- **Phase 1 task 1.1/1.2 must include a contrast audit column** in the PR description showing the ratios

**Why this matters:** The entire system depends on violet being the single accent. If it fails WCAG, the whole Color Budget strategy collapses — you'd need a second color as a fallback, reintroducing the bicameral problem.

### 6.2 Cyan vs. Teal Perceptual Collision (Phase 1 + Phase 5)

**The problem:** The "live data" color Cyan-400 (`#22D3EE`) and the "B / Good" health grade Teal (`#2DD4BF`) are perceptually adjacent. On dark backgrounds, both appear as "bright blue-green." For colorblind users (deuteranopia affects ~8% of males) or on low-quality monitors with poor blue channel reproduction, these two colors become indistinguishable. This defeats the purpose of the health grade scale.

**Mitigation — differentiate by behavior, not just hue:**
- **Live data (`--color-live`)**: Always paired with the `pulse-glow` animation. The pulsing motion is the primary differentiator — it signals "this is happening now." When the process ends, the cyan disappears entirely (it's temporal, not persistent).
- **Health grade B (Teal)**: Always static. Displayed as a badge, dot, or border — never animated. The teal is persistent and represents a score, not a process.
- **Additional safeguards:**
  - Live data gets a text label prefix: "Running", "Streaming", "Live" — redundant encoding
  - Health grades always show the letter grade alongside the color: "B" or "Good" — never color-only
  - Consider shifting live data cyan slightly warmer (toward `#38BDF8` / sky-400) to increase perceptual distance from teal — test during Phase 1

**Design rule:** No element should communicate meaning through color alone. Every colored indicator must have a redundant text label, letter grade, or animation that carries the same information. This is both an accessibility requirement and a robustness principle.

### 6.3 Chrome Neutralization Drift Prevention (Phase 2.5 + Ongoing)

**The problem:** Phase 2.5 (Chrome Neutralization) is the highest-impact visual change — and the hardest to maintain. Developers instinctively reach for `text-accent` when making an element "active" or "important." Without enforcement, the neutral chrome will slowly regress to colored chrome over weeks of new PRs. This is how Linear maintains their sparse aesthetic — discipline, not defaults.

**Mitigation — enforce through tooling and review:**

1. **ESLint rule (custom):** Create `eslint-plugin-unerr-color-budget` (or add to existing config) with these rules:
   - **`no-accent-on-nav`**: Flag `text-accent` or `border-accent` inside components tagged as navigation (`sidebar`, `nav`, `breadcrumb`, `tab` in filename or parent component)
   - **`no-glow-on-chrome`**: Flag `shadow-glow-*` on non-CTA elements
   - **`prefer-neutral-hover`**: Warn on `hover:text-accent` outside of explicit CTA button components
   - Severity: `warn` (not `error`) — allows intentional overrides with `// eslint-disable-next-line` + comment explaining why

2. **PR review checklist** (add to PR template):
   ```
   ## Color Budget Check
   - [ ] No accent colors added to navigation chrome (sidebar, tabs, breadcrumbs)
   - [ ] New colored elements are limited to: CTA buttons, status indicators, health grades, focus rings
   - [ ] Squint Test: page is mostly gray with 1-2 violet spots and a few semantic dots
   ```

3. **Storybook visual regression:** Add a "Color Density" story for each page that renders the page and counts colored pixels as a percentage. Alert if > 15% of visible pixels are non-neutral.

4. **The "Neutral First" convention:** New components start neutral. Color is added only when someone can articulate what information the color communicates. The burden of proof is on the color, not on neutrality.

**Why this matters:** The entire design philosophy is "90% neutral, 10% purposeful." Without active enforcement, natural developer instincts will erode this to "70% neutral, 30% whatever looks good" within a quarter. The guardrails aren't bureaucracy — they're the mechanism that keeps the design system coherent over time.

---

## 7. Success Criteria

The overhaul is complete when:

1. **Zero "autorail" references** in user-facing code, metadata, or documentation
2. **All components use semantic tokens** — no raw hex values for brand colors outside `tailwind.css`
3. **WCAG AA compliance** on all text × background combinations in both themes — with documented contrast ratios for the custom violet hue (see §6.1)
4. **Health badges render correctly** on GitHub light and dark theme READMEs
5. **Every dashboard page looks correct** in both dark and light themes (screenshot verification)
6. **No theatrical animations** in the dashboard — `fade-in` on mount and accordions only
7. **Brand docs aligned** — `brand.md`, `UI_UX_GUIDE.md`, `CLAUDE.md` all reference the same color system
8. **`pnpm build` and `pnpm lint` pass** with zero new warnings
9. **Color Budget passes Squint Test** on every dashboard page — mostly gray field, 1-2 violet spots, a few semantic dots, nothing else colored
10. **Sidebar, tabs, table links, breadcrumbs, card borders are all neutral** — no accent color on navigation chrome
11. **Cyan/Teal collision resolved** — live data always animated (`pulse-glow`), health grades always static + labeled (see §6.2)
12. **Color drift prevention active** — ESLint rules or PR checklist enforcing neutral chrome (see §6.3)
13. **No color-only indicators** — every colored element has redundant text label, letter grade, or animation

---

## Appendix A: File Impact Map

Files that will be modified during this overhaul:

| Category | Files | Phase |
|----------|-------|-------|
| **CSS tokens** | `styles/tailwind.css` | 1 |
| **UI components** | `components/**/*.tsx` (50+ files with color refs) | 2 |
| **Brand assets** | `public/*.svg`, `app/icon.svg` | 3 |
| **Layout metadata** | `app/layout.tsx` | 3 |
| **Dashboard header** | `components/dashboard/dashboard-header.tsx` | 3 |
| **CLI** | `packages/cli/package.json`, `packages/cli/src/index.ts` | 3 |
| **Documentation** | `docs/ui_ux/*.md`, `CLAUDE.md`, `RULESETS.md` | 6 |
| **Shadcn components** | `components/ui/dialog.tsx`, `sheet.tsx`, `alert-dialog.tsx`, `tooltip.tsx` | 2 |

### Appendix B: Token Migration Map

Quick reference for the most common replacements:

| Old Token / Class | New Token / Class | Notes |
|-------------------|-------------------|-------|
| `text-electric-cyan` | `text-accent` | Interactive states, links |
| `text-electric-cyan` (on streaming data) | `text-live` | Pipeline, terminal, active |
| `border-electric-cyan` | `border-accent` | Active borders |
| `border-rail-purple` | `border-accent` | Structural borders |
| `bg-rail-fade` (gradient) | `bg-accent-fade` (renamed + new gradient stops) | Class rename + color change |
| `text-primary` (Rail Purple) | `text-accent` or `text-primary` | Token value changes |
| `hover:text-electric-cyan` | `hover:text-accent` | Hover states |
| `bg-electric-cyan/10` | `bg-accent/10` | Badge/pill backgrounds |
| `shadow-glow-cyan` | `shadow-glow-live` or `shadow-glow-accent` | Glow effects |
| `shadow-glow-purple` | `shadow-glow-accent` | Brand glow |
| `.hover-glow-cyan` | `.hover-glow-accent` | Hover utility |
| `.hover-glow-purple` | `.hover-glow-accent` | Hover utility (merge with cyan) |
| `border-rail-purple/30` | `border-accent/30` | Secondary button borders |
| `bg-rail-purple/10` | `bg-accent/10` | Hover/pill backgrounds |
| `text-rail-purple` | `text-accent` | Any remaining rail-purple text refs |
| `text-quantum-violet` | `text-accent` or `var(--color-violet-deep)` | Edge case — Quantum Violet kept as primitive |
| `#00E5FF` (hardcoded) | `var(--color-accent)` or `var(--color-live)` | Never hardcode |
| `#6E18B3` (hardcoded) | `var(--color-primary)` | Never hardcode |

---

*unerr Design System Overhaul — From autorail Legacy to Substrate Dark + Paper Light*
