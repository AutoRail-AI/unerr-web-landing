# UI/UX Reference Guide
## Complete Design System & Implementation Standards

**Version:** 6.0
**Status:** Authoritative Reference
**Target Quality:** Enterprise SaaS — Stripe × Linear × Vercel
**Last Updated:** March 2026
**Stack:** Next.js 16 App Router, React 19, Tailwind v4, Shadcn UI, Zustand, React Hook Form + Zod v4
**Design System:** unerr Substrate Dark + Paper Light (Void Black + Violet Accent)
**Tailwind:** v4 — `styles/tailwind.css`
**Golden Sample:** `.cursor/patterns/golden-sample.tsx`
**Brand Guide:** `docs/ui_ux/brand.md`
**Design Overhaul Plan:** `docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md`

---

## Design Philosophy

> The unerr dashboard is a professional workspace for developers who spend 8+ hours daily in it. **Content first. The UI disappears so data speaks.** The aesthetic is "Substrate Dark + Paper Light" — solid surfaces with crisp borders in dark mode, paper surfaces with shadows in light mode, unified violet accent used sparingly, and engineering-grade information density. No glassmorphism — no `backdrop-filter`, no blur on surfaces. Every element earns its place through function, not decoration.
>
> **Guiding principle:** unerr is "The AI Tech Lead" — calm, trustworthy, competent. The UI should feel like having a senior engineer watching your back, not a sci-fi control room.

### The Color Budget Principle

> **Color is a budget. Every colored pixel must justify its existence by communicating something a developer needs to act on.**

We follow **Linear's model**: 90% neutral, 10% purposeful color. The vast majority of pixels are grayscale. Color appears only for primary CTAs, status indicators, and health grades — never for navigation chrome, card borders, secondary buttons, or table links.

**On any dashboard page, 3-5 colored elements maximum.** Everything else is neutral.

**Why not monochrome (Vercel-style)?** unerr's core value is making invisible things visible — health grades, blast radius, confidence, status. A monochrome system forces users to read every status instead of seeing it. Monochrome also kills the viral sharing loop: health badges need to pop on GitHub READMEs, screenshots need to stand out on X/Reddit. See `DESIGN_SYSTEM_OVERHAUL.md` Decision 7 for full analysis.

**The Squint Test (quality gate for every page):** Squint. You should see a mostly gray field, 1-2 violet spots (CTA), and a few semantic color dots (status). If you see a rainbow, there's too much color.

**Implementation guardrails (prevent color drift):**
- **ESLint rules:** `no-accent-on-nav` (flag `text-accent`/`border-accent` in nav/sidebar/tab/breadcrumb components), `no-glow-on-chrome` (flag `shadow-glow-*` on non-CTA elements), `prefer-neutral-hover` (warn on `hover:text-accent` outside CTAs)
- **PR review checklist:** No accent on chrome, colored elements limited to CTA/status/grades, squint test passes
- **Neutral First convention:** New components start neutral. Color is added only when someone can articulate what information the color communicates.
- **No color-only indicators:** Every colored element must have a redundant text label, letter grade, or animation. Color alone is never the only signal.

| Gets Color | Stays Neutral |
|---|---|
| CTA button (violet fill) | Sidebar nav, breadcrumbs, tabs |
| Health grade badge (semantic) | Card borders, section headers |
| Status dots (semantic) | Table links, secondary buttons |
| Focus ring (violet, accessibility) | Hover states (use `bg-muted`) |
| Live pipeline indicator (cyan) | Active tab (use `font-medium` + border) |

**The Landing → Dashboard Translation:**
| Landing Page | Dashboard App |
|---|---|
| Cinematic cards with glow shadows | `glass-card` with subtle hover — solid surface, less drama |
| Terminal mockups inside bento grid cards | Real terminal panels (`console-panel`) displaying live agent output |
| Animated stat values (count-up on scroll) | Static stat values in `font-grotesk text-2xl font-bold` — snappy, no animation |
| `text-display-xl` hero headlines | `text-lg font-semibold` page titles — enterprise restraint |
| Framer Motion `blurReveal` sections | `animate-fade-in` on page mount — one subtle entrance, then done |
| WebGL backgrounds, boot sequences | No WebGL, no boot sequences — clean, instant content |
| `text-accent` for brand emphasis | `text-accent` for active states, links, interactive elements |

---

## Table of Contents

1. [Foundation & Architecture](#part-i-foundation--architecture)
2. [Surface Design System](#part-ii-surface-design-system)
3. [Surface Material System](#part-iii-surface-material-system)
4. [Terminal & Code Display Patterns](#part-iv-terminal--code-display-patterns)
5. [Shadcn UI Components](#part-v-shadcn-ui-components)
6. [Component Patterns](#part-vi-component-patterns)
7. [Feature-Specific Patterns](#part-vii-feature-specific-patterns)
8. [Quality Standards](#part-viii-quality-standards)
9. [Reference Checklists](#part-ix-reference-checklists)

---

## Part I: Foundation & Architecture

### 1.1 Application Shell

The dashboard renders inside a fixed sidebar shell provided by `app/(dashboard)/layout.tsx`. Pages render **content only** — no sidebar, no nav, no shell chrome.

```
┌──────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────┐ │
│ │          │ │                                      │ │
│ │ SIDEBAR  │ │         PAGE CONTENT                 │ │
│ │ w-56     │ │         flex-1 overflow-y-auto p-6   │ │
│ │ glass-   │ │                                      │ │
│ │ panel    │ │  ┌─ Header ─────────────────────┐    │ │
│ │          │ │  │ Title + Actions               │    │ │
│ │ unerr    │ │  ├─ Stats Grid ─────────────────┤    │ │
│ │ logo     │ │  │ glass-card × 4                │    │ │
│ │          │ │  ├─ Main Content ───────────────┤    │ │
│ │ Repos    │ │  │ Tabs / Tables / Grid          │    │ │
│ │ Search   │ │  └──────────────────────────────┘    │ │
│ │ Settings │ │                                      │ │
│ │          │ │                                      │ │
│ │ ──────── │ │                                      │ │
│ │ User     │ │                                      │ │
│ │ Org      │ │                                      │ │
│ └──────────┘ └──────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

**Sidebar:** `w-56` (224px), `glass-panel` + `border-r border-border`. Logo: `<Image src="/unerr.svg" ... className="h-6 w-6" />` + "unerr" in `font-grotesk text-sm font-semibold`. Nav links use `text-muted-foreground` default → `bg-muted font-medium text-foreground` active (neutral — no accent color on navigation chrome per Color Budget). See `brand.md` §9 for full asset inventory.

**Main content area:** `flex-1 overflow-y-auto p-6`. All page components render here.

### 1.2 Account Model & Tenant Behavior

**Principle:** Every signup creates a **tenant-based account**. There is **no concept of a "personal account"** in product language, UX, or user-facing code.

#### Internal Operating Modes

Two **internal-only** tenant operating modes (never surfaced in UI):

| Mode | Experience | Navigation |
|------|-----------|-----------|
| **Normal** (Default) | Simplified tenant. Members, roles, settings. No teams. | Dashboard, Repos, Analytics, Settings |
| **Organization** (Advanced) | Full enterprise. All Normal + Teams + Billing. | Dashboard, Repos, Analytics, Billing, Teams, Settings |

#### UX Rules
- ❌ Never say "personal mode" or "organization mode" in UI
- ❌ Never say "personal account" or "personal workspace"
- ❌ Never use a GitHub account/org name as the unerr organization name — they are independent entities
- ✅ Use "Settings", "Members", "Your Account", "Enable Teams"
- ✅ Show GitHub account names as secondary metadata (e.g., "(GitHub: @octocat)"), never as the org identity
- Teams features: **completely hidden** in Normal mode

> **Disambiguation:** "Organization" in unerr is the account-level tenant (created at signup from the user's name). It is **not** the same as a GitHub organization. GitHub accounts/orgs connect to unerr orgs as installations — stored separately with their own `accountLogin` field. One unerr org can have multiple GitHub connections.

### 1.3 Authorization & Role System

| Role | Authority | Capabilities |
|------|-----------|-------------|
| `owner` | Ultimate | Tenant config, member management, billing, deletion |
| `admin` | Operational | Member management (except owner), settings (except billing), resources |
| `member` | Contributor | Create/manage assigned resources, view tenant resources |
| `viewer` | Read-only | View resources and analytics only |

**Team-Level (Organization Only):** `team_admin`, `team_member`

### 1.4 Settings Architecture

```
/settings
├── Profile (name, email, avatar)
├── Authentication (password, OAuth)
└── Preferences (theme, language, notifications)

/settings/tenant
├── Members (list, invitations, roles)
├── General (name, slug, logo)
└── API Keys

/settings/organization    ← Organization mode only
├── Teams
├── Billing
├── Security
└── Advanced
```

---

## Part II: Surface Design System

### 2.1 Color System

**Core Rule:** Unified violet accent. Semantic status colors. No decorative colors. Always use tokens, never raw hex.

> **NOTE:** This system is transitioning from the legacy "autorail Industrial Glass" (Electric Cyan + Rail Purple bicameral split) to "Substrate Dark + Paper Light" (Violet accent, solid surfaces, no glassmorphism). See `docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md` for the migration plan. During transition, `text-electric-cyan` / `text-accent` map to the same token. New code should use `text-accent`.

#### Semantic Colors

| Color | Token | Dark Hex | Light Hex | CSS | Usage |
|-------|-------|----------|-----------|-----|-------|
| **Background** | `--color-background` | `#0A0A0F` | `#F8F9FA` | `bg-background` | **Always.** Page, sidebar, card backgrounds. |
| **Foreground** | `--color-foreground` | `#FAFAFA` | `#111118` | `text-foreground` | Primary text, headlines, body. |
| **Primary** | `--color-primary` | `#8B5CF6` | `#6D28D9` | `bg-primary` | Buttons, borders, brand accents. |
| **Accent** | `--color-accent` | `#8B5CF6` | `#6D28D9` | `text-accent` | Active states, links, interactive elements. |
| **Live Data** | — | `#22D3EE` | `#0891B2` | `text-live` | Pipeline running, terminal output, streaming indicators. |
| **Success** | `--color-success` | `#34D399` | `#059669` | `text-success` | Health grade A/B, confidence ≥85%, pass rates. |
| **Warning** | `--color-warning` | `#FBBF24` | `#D97706` | `text-warning` | Health grade C, confidence 50–84%, in-progress. |
| **Error** | `--color-error` | `#F87171` | `#DC2626` | `text-error` | Health grade F, failures, violations. |
| **Muted** | `--color-muted-foreground` | `rgba(250,250,250,0.6)` | `rgba(17,17,24,0.75)` | `text-muted-foreground` | Form labels, placeholders, metadata. |

#### Unified Accent Rule (Replaces Bicameral Split)

| Color | Role | Use For |
|-------|------|---------|
| **Violet** (`text-accent`) | Brand + Interactive | Active nav, links, buttons, CTA fills, focus rings |
| **Cyan** (`text-live`) | Functional only | Pipeline running, terminal active output, streaming data — never as brand color |

**Rule:** Violet is the brand accent. Cyan is functional (live data only). No bicameral split. No cyan-to-violet gradients.

**Cyan vs. Teal collision warning:** Live data Cyan (`#22D3EE`) and health grade B Teal (`#2DD4BF`) are perceptually adjacent on dark backgrounds — especially for colorblind users. Always differentiate by behavior: live data is animated (`pulse-glow`) and temporal; grades are static and show a letter ("B"). See `DESIGN_SYSTEM_OVERHAUL.md` §6.2 for full mitigation.

#### Background Hierarchy

| Layer | Value | Usage |
|-------|-------|-------|
| Page base | `bg-background` | Root background |
| Sidebar | `glass-panel` + `border-r border-border` | Fixed aside (solid bg, no blur) |
| Card | `glass-card` | Stat cards, table wrappers, panels (solid bg, no blur) |
| Terminal | `console-panel` (dark in both themes) | Agent output, code display, logs |
| Table row hover | `hover:bg-muted/30` | Subtle interaction feedback |
| Input bg | `bg-muted/30` | Form inputs |

#### Health Grade & Confidence Colors

Five-point semantic scale — see `brand.md` §5 for full reference:

| Grade / Score | Color | Token | Visual |
|---------------|-------|-------|--------|
| A / ≥85% | Emerald | `text-success` | High confidence — green indicator |
| B / 70-84% | Teal | custom | Good — teal indicator |
| C / 50-69% | Amber | `text-warning` | Average — amber indicator |
| D / 30-49% | Orange | custom | Poor — orange indicator |
| F / <30% | Red | `text-destructive` | Critical — red indicator |

```tsx
<span className={`font-mono text-sm ${
  score >= 0.85 ? "text-success"
  : score >= 0.5 ? "text-warning"
  : "text-muted-foreground"
}`}>
  {Math.round(score * 100)}%
</span>
```

### 2.2 Typography System

Three font families — exactly matching the landing page:

| Family | Token | CSS Class | Usage |
|--------|-------|-----------|-------|
| **Space Grotesk** | `--font-grotesk` | `font-grotesk` | Page titles, stat values, section headers |
| **Inter** | `--font-sans` | `font-sans` (default) | Body text, descriptions, buttons, forms |
| **JetBrains Mono** | `--font-mono` | `font-mono` | Code, agent output, project names, metrics trends, terminal panels |

**Important:** The root `app/layout.tsx` must load these three fonts via `next/font`. Do **not** use Poppins or Sofia Sans — those are stale references from the pre-rebrand era.

#### Typography Scale

| Element | Size | Weight | Font | Color | Example |
|---------|------|--------|------|-------|---------|
| **Page Title** | `text-lg` (18px) | `font-semibold` (600) | `font-grotesk` | `text-foreground` | "Projects" |
| **Page Description** | `text-sm` (14px) | `font-normal` (400) | `font-sans` | `text-foreground` | "Manage your repos" |
| **Section Header** | `text-sm` (14px) | `font-semibold` (600) | `font-grotesk` | `text-foreground` | "Migration Projects" |
| **Stat Value** | `text-2xl` (24px) | `font-bold` (700) | `font-grotesk` | `text-foreground` | "87%" |
| **Stat Label** | `text-xs` (12px) | `font-medium` (500) | `font-sans` | `text-muted-foreground` | "Avg Confidence" |
| **Trend** | `text-xs` (12px) | `font-normal` (400) | `font-mono` | `text-muted-foreground` | "+5% this week" |
| **Body Text** | `text-sm` (14px) | `font-normal` (400) | `font-sans` | `text-foreground` | Primary content |
| **Code / Data** | `text-sm`/`text-xs` | `font-normal` (400) | `font-mono` | `text-foreground` / `text-accent` (interactive) / `text-live` (streaming) | IDs, logs, metrics |
| **Form Label** | `text-xs` (12px) | `font-normal` (400) | `font-sans` | `text-muted-foreground` | Field labels only |
| **Helper Text** | `text-xs` (12px) | `font-normal` (400) | `font-sans` | `text-foreground` | Helper text (NOT muted) |

#### Typography Legibility Rules

**MANDATORY — all primary text uses `text-foreground`:**
- ✅ Page titles, section headers, body text, descriptions, table content, buttons, empty states, error messages
- ✅ Helper text: `text-foreground` (or `opacity-85` for slight de-emphasis)

**Muted text ONLY for:**
- ✅ Form labels (`text-muted-foreground`)
- ✅ Placeholder text
- ✅ Disabled states
- ✅ Metadata labels ("Created", "Last Updated")
- ✅ Stat card labels

**Page title ceiling:** `text-lg font-semibold` — **never larger.** This is a dashboard, not a marketing page. The landing page uses `text-display-xl` for hero headlines; the app uses `text-lg` for page titles. This restraint signals enterprise credibility.

### 2.3 Spacing System

#### Container Spacing
| Spacing | Value | Usage |
|---------|-------|-------|
| Page container | `space-y-6 py-6` | Outer page wrapper |
| Section spacing | `space-y-6` (24px) | Between major sections |
| Card padding | `pt-6` via `CardContent` | Never full padding — use `CardContent` with `pt-6` |
| Form fields | `space-y-4` (16px) or `space-y-2` (8px) | Between form field groups |

#### Component Spacing
| Spacing | Value | Usage |
|---------|-------|-------|
| Button groups | `gap-2` (8px) | Between action buttons |
| Icon + text | `gap-2` (8px) | Icon adjacent to label |
| List items | `space-y-1` (4px) | Compact list spacing |
| Card content | `space-y-3` to `space-y-4` | Between card content elements |
| Micro | `gap-0.5` (2px) | Tight grouping |

---

## Part III: Surface Material System

### 3.1 Surface Tiers

Every card, panel, and container in the app uses one of these surface tiers. All surfaces are **solid** — no `backdrop-filter`, no blur. The `.glass-card` and `.glass-panel` class names are retained for backward compatibility but render as solid surfaces with crisp borders.

| Tier | Class | Background | Border | Hover | Usage |
|------|-------|-----------|--------|-------|-------|
| **Panel** | `glass-panel` | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.10)` | None | Sidebar, table wrappers, static containers |
| **Card** | `glass-card` | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.10)` | `bg→0.05, border→0.15` | Stat cards, interactive panels |
| **Terminal** | `bg-[#0e0e14]` | `#0e0e14` | `border-border` | None | Agent output, code display, log panels |

**Critical:** Use `glass-card` or `glass-panel` for all card-like elements. Never use plain `bg-muted/30` — that was the pre-rebrand pattern. Never add `backdrop-filter` or `blur()` to surface elements — it wastes GPU for an invisible effect at 3% opacity on a dark canvas.

### 3.2 Glow System

Glows are used sparingly for interactive feedback and status states. Per the Color Budget, most card interactions use neutral hover (`hover:bg-muted/50`) — glows are reserved for primary CTAs and status indicators:

| Glow | CSS | Usage |
|------|-----|-------|
| `glow-accent` | `box-shadow: 0 0 20px rgba(139,92,246,0.2)` | CTA button emphasis, primary action cards |
| `glow-live` | `box-shadow: 0 0 20px rgba(34,211,238,0.2)` + border | Live/streaming data indicators only |
| `glow-success-pulse` | Pulsing green `box-shadow` + green border | Confidence ≥85% cards |
| `glow-yellow` | Yellow `box-shadow` + yellow border | Confidence 40–70% indicator |
| `glow-red` | `box-shadow: 0 0 20px rgba(255,51,102,0.2)` | Error states, blocked reviews |

**Application pattern:**
```tsx
{/* Stat card — neutral hover (Color Budget: chrome stays neutral) */}
<Card className="glass-card border-border hover:border-border/80 transition-all duration-300">

{/* CTA-adjacent card — accent glow only when card IS the primary action */}
<Card className="glass-card border-border hover:shadow-glow-accent transition-all duration-300">

{/* Live/streaming state — temporal, disappears when process ends */}
<Card className="glass-card border-accent/20 shadow-glow-live animate-pulse-glow">

{/* Error state card */}
<Card className="glass-card border-error/20 glow-red">
```

### 3.3 Status Badge Colors

Semantic status colors for agent/pipeline states. Use `text-live` for active/streaming states, `text-accent` for informational, and semantic colors for outcomes:

```tsx
const statusColors: Record<string, string> = {
  pending:    "bg-slate-grey/50 text-muted-foreground border-border",
  processing: "bg-accent/10 text-live border-accent/20",
  ready:      "bg-accent/10 text-accent border-accent/20",
  building:   "bg-warning/10 text-warning border-warning/20",
  complete:   "bg-success/10 text-success border-success/20",
  failed:     "bg-error/10 text-error border-error/20",
  blocked:    "bg-error/10 text-error border-error/20",
}

<Badge variant="outline" className={statusColors[status]}>
  {status}
</Badge>
```

### 3.4 Breathing Glow (Background Ambient)

> **Note:** Per the Design System Overhaul (Decision 6), breathing glow animations are **landing page only**. In the dashboard, use `pulse-glow` on status dots for live indicators instead. Breathing glows conflict with the "60 seconds to value" daily-use ergonomics.

For **landing page** panels that need subtle life:

```tsx
{/* Landing page only — agent is actively processing */}
<div className="animate-breathing-glow rounded-lg p-4 glass-panel">

{/* Landing page only — analysis in progress */}
<div className="animate-breathing-glow-purple rounded-lg p-4 glass-panel">
```

For **dashboard** live indicators, use the status dot pattern instead:
```tsx
{/* Dashboard — live pipeline indicator */}
<div className="w-2 h-2 rounded-full bg-live animate-pulse-glow" />
<span className="text-live text-xs">Running</span>
```

Keyframes are defined in `styles/tailwind.css`.

---

## Part IV: Terminal & Code Display Patterns

### 4.1 Terminal Panel (Agent Output)

The landing page's most distinctive visual element is its terminal mockups. The app makes these **real** — displaying actual agent output, code reviews, and logs.

#### Terminal Panel Structure

```tsx
function TerminalPanel({ title, icon, children }: TerminalPanelProps) {
  return (
    <div className="glass-panel rounded-lg border border-border overflow-hidden">
      {/* Header bar — same pattern as landing page terminal mockups */}
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#FF5F57" }} />
        <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
        <div className="terminal-dot" style={{ background: "#28C840" }} />
        <span className="ml-3 text-xs font-mono text-white/40 flex items-center gap-2">
          {icon}
          {title}
        </span>
      </div>
      {/* Content area */}
      <div className="bg-[#0e0e14] p-4 font-mono text-xs text-foreground">
        {children}
      </div>
    </div>
  )
}
```

**CSS classes:** `terminal-header` and `terminal-dot` are defined in `styles/tailwind.css`.

#### Terminal Log Lines

For agent activity logs, PR review output, build status:

```tsx
{/* PASS line */}
<div className="flex items-center gap-2 py-0.5">
  <span className="text-success">PASS</span>
  <span className="text-white/60">auth/login.ts — pattern compliance</span>
</div>

{/* BLOCKED line */}
<div className="flex items-center gap-2 py-0.5">
  <span className="text-error">BLOCKED</span>
  <span className="text-white/60">utils/db.ts — wrong ORM import</span>
</div>

{/* REWRITE line */}
<div className="flex items-center gap-2 py-0.5">
  <span className="text-live">REWRITE</span>
  <span className="text-muted-foreground">api/checkout.ts — scope violation → fixed</span>
</div>
```

#### Blinking Cursor

```tsx
{/* Accent blinking cursor (default) */}
<span className="cursor-blink" />

{/* Violet blinking cursor (analysis context) */}
<span className="cursor-blink-purple" />
```

### 4.2 Brain Pane (3-Column Dashboard)

The landing page shows a `BrainShowcase` with 3 panels (Workspace / Editor+Console / AI Thoughts). The app implements this as real interactive panels:

```tsx
<div className="grid gap-4 lg:grid-cols-3">
  <BrainPane
    title="The Plan"
    icon={<Code2 className="h-4 w-4" />}
  >
    {/* Dependency graph / vertical slice tree */}
  </BrainPane>

  <BrainPane
    title="The Work"
    icon={<Sparkles className="h-4 w-4" />}
  >
    {/* Terminal streaming output — agent code generation */}
  </BrainPane>

  <BrainPane
    title="The Thoughts"
    icon={<Brain className="h-4 w-4" />}
  >
    {/* Agent reasoning / inner monologue */}
  </BrainPane>
</div>
```

Each pane uses `glass-panel` (solid surface) with a header bar and mono-font content area. On mobile, stack vertically — center panel ("The Work") always visible, side panels collapsible.

### 4.3 Code Review Display

PR review output should mirror the landing page's "Spaghetti Shield" terminal mockup:

```tsx
<TerminalPanel title="spaghetti-shield.log" icon={<ShieldCheck className="h-3 w-3" />}>
  <div className="space-y-1">
    <LogLine type="scan" text="Scanning auth/login.ts..." />
    <LogLine type="pass" text="Pattern compliance verified" />
    <LogLine type="blocked" text="utils/payments.ts — bypassed transaction wrapper" />
    <LogLine type="rewrite" text="Applying architectural fix → payments.service.ts" />
    <LogLine type="pass" text="All checks passed — safe to merge" />
  </div>
  <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center gap-2">
    <div className="w-1.5 h-1.5 rounded-full bg-success" />
    <span className="text-success text-xs">3 passed</span>
    <span className="text-white/30">·</span>
    <span className="text-error text-xs">1 blocked → rewritten</span>
  </div>
</TerminalPanel>
```

### 4.4 Confidence Visualization

The landing page uses animated progress bars for Impact Score and Test Coverage. The app uses the same visual language:

```tsx
{/* Confidence bar */}
<div className="space-y-1">
  <div className="flex justify-between text-xs">
    <span className="text-muted-foreground">Confidence</span>
    <span className="font-mono text-success">92%</span>
  </div>
  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
    <div
      className="h-full bg-success rounded-full transition-all duration-500"
      style={{ width: "92%" }}
    />
  </div>
</div>
```

Color by confidence: `bg-success` (≥85%), `bg-warning` (50–84%), `bg-muted-foreground` (<50%).

---

## Part V: Shadcn UI Components

### 5.1 Available Components

**Access:** `pnpm dlx shadcn@latest add [component-name]` or via MCP server tools.

### 5.2 Installed Components

| Category | Components |
|----------|-----------|
| **Layout** | `card`, `separator`, `tabs`, `sheet`, `scroll-area` |
| **Forms** | `input`, `label`, `textarea`, `select`, `switch`, `form` |
| **Feedback** | `alert`, `badge`, `spinner`, `skeleton`, `progress`, `sonner` (toast) |
| **Data** | `table`, `avatar` |
| **Interactive** | `button`, `dialog`, `alert-dialog`, `dropdown-menu`, `tooltip` |
| **Custom** | `content-block`, `inline-form`, `metric`, `section` |

### 5.3 Component Usage Rules

**Always:**
- ✅ Use Shadcn components for consistency
- ✅ Customize via `className`, never modify source files
- ✅ Use `size="sm"` for buttons in app context
- ✅ Use `h-9` for inputs
- ✅ Use `Spinner` from `@shadcn/spinner` for loading states

**Never:**
- ❌ Use `Loader2` from `lucide-react` — use `Spinner` instead
- ❌ Use `CardHeader` / `CardTitle` / `CardDescription` — use inline structure with `CardContent`
- ❌ Create custom components that duplicate Shadcn functionality
- ❌ Use oversized typography (`text-xl` or larger for page titles)

### 5.4 Tab Active State Pattern

Tab triggers follow the Color Budget — active state is **neutral** (no accent color on chrome):

```tsx
<TabsTrigger
  value={value}
  className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2
    font-sans font-medium text-muted-foreground shadow-none transition-none
    data-[state=active]:border-foreground
    data-[state=active]:text-foreground
    data-[state=active]:font-medium"
>
```

Active: Bottom border (`border-foreground`) + bold text (`text-foreground font-medium`). No accent color, no glow — tabs are navigation chrome and stay neutral per the Color Budget principle.

---

## Part VI: Component Patterns

### 6.0 Golden Page Pattern (Canonical)

**Source:** `.cursor/patterns/golden-sample.tsx`

Every dashboard page follows this structure:

```tsx
<div className="space-y-6 py-6 animate-fade-in">
  {/* 1. Page Header — MANDATORY: text-lg font-semibold (never larger) */}
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div className="space-y-1">
      <h1 className="font-grotesk text-lg font-semibold text-foreground">Page Title</h1>
      <p className="text-sm text-foreground mt-0.5">Page description</p>
    </div>
    <div className="flex items-center gap-2">
      <Button size="sm" variant="outline"
        className="border-border text-foreground hover:bg-muted">
        <LayoutDashboard className="mr-2 h-3.5 w-3.5" />
        Secondary Action
      </Button>
      <Button size="sm" className="bg-accent-fade hover:opacity-90">
        <Plus className="mr-2 h-3.5 w-3.5" />
        Primary Action
      </Button>
    </div>
  </div>

  {/* 2. Stats Grid — glass-card with neutral hover */}
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card className="glass-card border-border hover:border-border/80 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-muted-foreground">Label</p>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="font-grotesk text-2xl font-bold text-foreground tracking-tight">42</div>
        <p className="text-xs text-muted-foreground mt-1 font-mono">+5% this week</p>
      </CardContent>
    </Card>
  </div>

  {/* 3. Main Content — Tabs + Table */}
  <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
    <ContentArea />
  </Suspense>
</div>
```

**Key:** `glass-card`, `font-grotesk`, `space-y-6 py-6`, `h-9` inputs, `size="sm"` buttons, `Suspense` + `Skeleton`.

### 6.1 Button Patterns

| Variant | Classes | Usage |
|---------|---------|-------|
| **Primary** | `bg-accent-fade hover:opacity-90` | Main action (Create, Save) — only CTA gets color |
| **Outline** | `border-border text-foreground hover:bg-muted` | Secondary action — neutral chrome |
| **Destructive** | `variant="destructive"` | Dangerous actions (Delete, Remove) |
| **Ghost** | `variant="ghost" text-muted-foreground hover:text-foreground` | Icon buttons, table row actions |

All buttons: `size="sm"` in app context. Only `size="lg"` for empty state CTAs. **Color Budget:** Only primary CTA gets accent color. All other button variants stay neutral.

### 6.2 Card Patterns

```tsx
{/* Stat card — glass-card with glow hover */}
<Card className="glass-card border-border hover:shadow-glow-accent transition-all duration-300">
  <CardContent className="pt-6">{/* content */}</CardContent>
</Card>

{/* Table wrapper — glass-panel (no hover) */}
<Card className="glass-panel border-border">
  <CardContent className="pt-6">{/* table */}</CardContent>
</Card>

{/* Active/selected card — subtle accent border */}
<Card className="glass-card border-accent/20">
  <CardContent className="pt-6">{/* content */}</CardContent>
</Card>
```

**Rules:**
- Use `CardContent` with `pt-6` only — no `CardHeader`, `CardTitle`, `CardDescription`
- Section headers go inline as `<h3 className="font-grotesk text-sm font-semibold text-foreground">`
- Sub-descriptions: `<p className="text-xs text-muted-foreground">`

### 6.3 Empty States

```tsx
<Card className="glass-card border-border">
  <CardContent className="pt-6">
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <FolderGit2 className="h-12 w-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle className="text-2xl font-semibold font-grotesk">
          No repositories yet
        </EmptyTitle>
        <EmptyDescription className="text-sm text-foreground">
          Connect your first GitHub repository to get started with unerr.
        </EmptyDescription>
      </EmptyHeader>
      <Button size="lg" className="bg-accent-fade hover:opacity-90">
        <Plus className="mr-2 h-4 w-4" />
        Connect Repository
      </Button>
    </Empty>
  </CardContent>
</Card>
```

**Rules:** Calm, instructional (no marketing copy). `size="lg"` button (only exception to sm rule). Title in `font-grotesk`. Description in `text-foreground` (NOT muted).

### 6.4 Loading States

```tsx
{/* Page skeleton */}
<div className="space-y-6 py-6">
  <Skeleton className="h-8 w-48 mb-2" />
  <Skeleton className="h-4 w-96 mb-6" />
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-[125px] rounded-lg border border-border bg-card/50" />
    ))}
  </div>
  <Skeleton className="h-[300px] rounded-lg border border-border bg-card/50" />
</div>

{/* Button loading */}
<Button disabled size="sm">
  <Spinner className="mr-2 h-3.5 w-3.5" />
  Creating...
</Button>
```

**Rules:** Use `Spinner` (not `Loader2`). Skeleton shapes match final content. Show loading immediately. Provide context text ("Loading repos...", "Analyzing...").

### 6.5 Error States

```tsx
{/* Page-level error */}
<Alert variant="destructive" className="py-2">
  <AlertCircle className="h-4 w-4" />
  <AlertDescription className="text-xs">
    <div className="space-y-1">
      <p className="font-medium">Failed to load repositories</p>
      <p>{error.message}</p>
      <Button variant="outline" size="sm" onClick={retry}>Retry</Button>
    </div>
  </AlertDescription>
</Alert>

{/* Inline form error */}
<Input className="h-9 border-destructive" />
<p className="text-xs text-destructive">{error}</p>
```

### 6.6 Form Patterns

```tsx
<form className="space-y-4">
  <div className="space-y-0.5">
    <h3 className="font-grotesk text-sm font-semibold">Section Title</h3>
    <p className="text-xs text-foreground opacity-85">Section description</p>
  </div>

  <div className="space-y-1.5">
    <Label htmlFor="name" className="text-xs text-muted-foreground">Repository Name</Label>
    <Input id="name" className="h-9" placeholder="owner/repo" />
    <p className="text-xs text-foreground opacity-85">The GitHub repository to connect.</p>
  </div>

  <Separator />

  <div className="flex justify-end gap-2">
    <Button type="button" variant="outline" size="sm">Cancel</Button>
    <Button type="submit" size="sm" className="bg-accent-fade">Save</Button>
  </div>
</form>
```

**Rules:**
- Labels: `text-xs text-muted-foreground`
- Inputs: `h-9`
- Helper text: `text-xs text-foreground opacity-85` (NOT muted)
- Advanced options: `Accordion` (progressive disclosure)
- Sections separated by `Separator`

---

## Part VII: Feature-Specific Patterns

### 7.1 Universal List/Table Patterns

**Applies to:** Repos, Knowledge, Teams, Members

- ✅ **Table view** (not cards) for scalable data
- ✅ **Pagination** (default 25 per page)
- ✅ **Row click** navigates to detail
- ✅ **Actions** in dropdown menu (not prominent buttons)
- ✅ **Status badges** with `statusColors` vocabulary

```tsx
<Card className="glass-panel border-border">
  <CardContent className="pt-6">
    <div className="space-y-1 mb-4">
      <h3 className="font-grotesk text-sm font-semibold text-foreground">Repositories</h3>
      <p className="text-xs text-muted-foreground">Click a repo to open the dashboard.</p>
    </div>
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border">
          <th className="h-10 px-4 text-left font-medium text-muted-foreground text-xs">Name</th>
          <th className="h-10 px-4 text-left font-medium text-muted-foreground text-xs">Status</th>
          <th className="h-10 px-4 text-right font-medium text-muted-foreground text-xs">Confidence</th>
          <th className="h-10 px-4 text-right font-medium text-muted-foreground text-xs">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border hover:bg-muted/30 transition-colors">
          <td className="p-4">
            <span className="font-mono text-sm font-medium text-foreground">repo-name</span>
            <p className="text-xs text-muted-foreground mt-0.5">Description</p>
          </td>
          {/* ... */}
        </tr>
      </tbody>
    </table>
    <Pagination />
  </CardContent>
</Card>
```

### 7.2 Universal Detail Page Patterns

- ✅ **Tab-based navigation** (single-level, flat)
- ✅ **No card wrappers** on tab content
- ✅ **Overview tab** with key metrics + terminal panels
- ✅ **Settings tab** for resource configuration
- ✅ **Activity tab** for history/timeline

```tsx
<Tabs defaultValue="overview">
  <TabsList className="bg-transparent p-0 border-b border-border">
    <LazarusTabTrigger value="overview">Overview</LazarusTabTrigger>
    <LazarusTabTrigger value="review">Code Review</LazarusTabTrigger>
    <LazarusTabTrigger value="settings">Settings</LazarusTabTrigger>
  </TabsList>

  <TabsContent value="overview" className="space-y-6 pt-6">
    {/* Stats + Terminal panels + Brain panes */}
  </TabsContent>
</Tabs>
```

### 7.3 Dashboard

**Purpose:** High-level overview with clear next actions — NOT deep analytics.

**Layout:**
1. Page header: title + primary CTA
2. Stats grid: 4 `glass-card` stat cards with `hover:shadow-glow-accent`
3. Tabs + table: Repos list with status badges and confidence scores
4. Brain preview: 3-column `BrainPane` grid

**Content:**
- Total repos, active sessions, avg confidence, completions
- Primary CTAs: Connect repo, invite members
- Quick nav to detailed views
- No dense charts — that's Analytics

### 7.4 Repository Detail

**Tabs:** Overview, Code Review, Knowledge Graph, Timeline, Settings

**Overview Tab:**
- Stats: Files indexed, Patterns detected, Confidence score, Last sync
- Brain 3-pane (Plan / Work / Thoughts) — real agent output
- Terminal panel: latest Spaghetti Shield review log

**Code Review Tab:**
- Terminal panel: `spaghetti-shield.log` with SCAN/BLOCKED/REWRITE/PASS entries
- PR scorecard: domain/infra badges, Impact Score bar, Test Coverage bar, compliance badges
- Same visual vocabulary as landing page Section 5 (Lifecycle Step 03 and 05)

**Knowledge Graph Tab:**
- Graph visualization of modules, conventions, dependencies
- Node colors: Accent (active/recent), Muted (structural/historical)
- Edge weights indicating dependency strength

**Timeline Tab:**
- Prompt Ledger: append-only list of `{prompt} → {changes}`
- Working-state markers (green dots for verified states)
- Rewind button: restores to last working state
- Branch visualization after rewind

### 7.5 Analytics

**Purpose:** Deep insights, trends, detailed reporting (separate from Dashboard).

- Charts: `@shadcn/chart` (Recharts-based) with brand palette (`chart-1` = violet, `chart-2` = cyan/live)
- Date range selectors
- Filterable tables with pagination
- Metric cards with `glass-card` (not `bg-muted/30`)

### 7.6 Settings

**Layout:** Tabbed navigation

| Section | Content |
|---------|---------|
| **Profile** | Name, email, avatar |
| **Authentication** | Password, OAuth connections |
| **Preferences** | Theme, language, notifications |
| **Tenant > General** | Tenant name, slug, logo |
| **Tenant > Members** | List, invitations, role management |
| **Tenant > API Keys** | MCP endpoint URL, key management |
| **Org > Teams** | Team creation, member assignment |
| **Org > Billing** | Stripe integration, usage, invoices |
| **Org > Security** | SSO, domain allowlist |

Each section in `glass-card border-border`. Confirmation dialogs for destructive actions. Toast notifications for feedback.

### 7.7 Billing (Organization Mode)

- Balance card with `glass-card` + credit card icon
- Subscription plans: popular plan highlighted with `border-primary ring-1 ring-primary/20`
- Usage meters: confidence bar pattern (§4.4)
- Transaction history table with pagination

### 7.8 Onboarding Flow

First-time experience — the bridge from landing page to app:

- Create organization form
- Connect first GitHub repo
- Wait for initial indexing → show Architecture Health Report (auto-generated)
- Terminal panel showing real-time indexing progress with `animate-pulse-glow` status dot
- Completion: green glow (`glow-success-pulse`) on the dashboard

### 7.X Pipeline Onboarding Console

Enterprise-grade pipeline experience shown on `/repos/[repoId]` while a repository is being indexed.

**Layout:**
```
┌─────────────────────────────────────────────────┐
│ Breadcrumb + Repo Name                          │
├─────────────────────────────────────────────────┤
│ Pipeline Stepper (5 stages, horizontal)         │
│ [Clone] → [Index] → [Embed] → [Analyze] → [Ready] │
├──────────────────────┬──────────────────────────┤
│ Real-Time Console    │ What's Happening Panel    │
│ (PipelineLogViewer)  │ (live analytics)          │
├──────────────────────┴──────────────────────────┤
│ Completion → Celebration + "View Blueprint" CTA  │
└─────────────────────────────────────────────────┘
```

**Components:**
- `PipelineStepper` — Horizontal 5-stage stepper. Active: `border-live` + `animate-pulse-glow`. Completed: `bg-emerald-500` + check. Error: `border-destructive`. `font-grotesk` labels.
- `WhatsHappeningPanel` — Glass-card with live metrics (phase, duration, files, entities, edges) parsed from pipeline log messages. Values in `text-live font-mono` (pipeline is live/streaming data).
- `RepoOnboardingConsole` — Client wrapper composing stepper + log viewer + analytics. Error state with retry button. Celebration animation on completion (`celebration-pop` keyframe + particle effects).
- `PipelineLogViewer` — Reused. Auto-scroll, copy, download, color-coded by level.

**Repo Addition Flow:**
1. "Add Repository" → Sheet drawer opens from right (480px wide)
2. Step 1: Select repos (checkboxes), Step 2: Branch selection
3. "Connect & Index" → navigates to `/repos/[repoId]`
4. Pipeline stepper advances through stages in real-time
5. On completion: celebration banner + "View Codebase Blueprint" CTA
6. CTA refreshes to load full ready-state repo detail

---

## Part VIII: Quality Standards

### 8.1 Enterprise Quality Bar

**Visual Quality:**
- Every card uses `glass-card` or `glass-panel` (solid surfaces) / white + shadow (light)
- Stat values in `font-grotesk text-2xl font-bold`
- Terminal panels for code/agent output — authentic, not decorative
- **Color Budget:** 3-5 colored elements per page max. Chrome is neutral. Only CTAs and status indicators get color.
- Professional density — information-rich, not spacious

**Interaction Design:**
- Predictable patterns (tables for lists, tabs for detail, forms for creation)
- Clear affordances (buttons look like buttons, clickable rows have hover)
- `animate-fade-in` on page mount — one entrance, then static
- Loading: `Suspense` + `Skeleton` matching final content shape

**Information Architecture:**
- High signal-to-noise: `text-foreground` for content, muted only for labels
- Scalable to hundreds of repos, thousands of review entries
- Table-first for data, cards for metrics, terminals for output

### 8.2 Anti-Patterns (Forbidden)

**Visual:**
- ❌ `bg-muted/30` for cards — use `glass-card` or `glass-panel`
- ❌ `text-xl` or `text-2xl` for page titles — `text-lg font-semibold` maximum
- ❌ Violet accent for body text (WCAG fail — use `text-foreground`)
- ❌ Violet accent (`text-accent`) for status labels or badges — contrast can fail on dark backgrounds. Use `text-warning` for in-progress states, semantic status colors for data states.
- **Rule: When violet is used as a background (`bg-primary`, `bg-accent-fade`), text inside MUST be `text-primary-foreground`.** Violet background + violet text = invisible. Violet background + white text = readable.

**Hover Interaction Rules (Color Budget Aligned):**

Most hover states are **neutral** (bg shift, not color). Only primary CTAs and live indicators use color on hover. This follows the Color Budget: chrome stays neutral.

| Context | Hover Effect | Hover Text | Example |
|---------|-------------|------------|---------|
| **Text links** (nav, table) | None (text-only) | `hover:underline` or `hover:text-foreground` | Nav items, repo name links |
| **Secondary buttons** (copy, download) | `hover:bg-muted` | `text-foreground` (unchanged) | Copy, Download buttons |
| **Primary CTA buttons** | `bg-accent-fade` (solid gradient) | `text-primary-foreground` (always) | "Add Repository", "Connect to IDE" |
| **Ghost icon buttons** | `hover:bg-muted/50` (subtle tint) | `hover:text-foreground` | Kebab menu, expand/collapse |
| **Cards / panels** | `hover:border-border/80` (subtle border shift) | Text unchanged | Stat cards, repo cards |
| **Status pills** (in-progress) | Warning glow: `border-warning/30 bg-warning/5` | `text-warning` | Indexing, Embedding, Analyzing |

**Key principles:**
- **Neutral first.** Most hover states use `bg-muted` fill shifts or subtle border changes — not accent colors or glows. This keeps the UI calm and professional.
- **Accent glow** = reserved for primary CTA emphasis only. Use `.hover-glow-accent` utility class sparingly. On hover: 12px violet box-shadow, border becomes violet. Only for the one primary action on the page.
- **Yellow glow** = in-progress states. Applied via `border-warning/30 bg-warning/5` (the `glow-yellow` pattern).
- **Never:** Solid accent background fills on interactive elements. Never `bg-accent` or `bg-primary` as hover states — they obliterate text contrast. Never accent color on navigation chrome hover.
- ❌ Muted primary content text (descriptions, body, table content)
- ❌ Light backgrounds anywhere
- ❌ Cyan-to-purple gradient blending
- ❌ Poppins or Sofia Sans fonts (stale pre-rebrand — use Space Grotesk / Inter / JetBrains Mono)

**Structural:**
- ❌ Card-based layouts for data lists — use tables
- ❌ Infinite scroll — use pagination
- ❌ Nested navigation — single-level tabs only
- ❌ Mixing user-scoped and tenant-scoped settings on one page
- ❌ Marketing copy in empty states

**Component:**
- ❌ `Loader2` — use `Spinner`
- ❌ `CardHeader` / `CardTitle` / `CardDescription` — inline structure only
- ❌ Custom components duplicating Shadcn functionality
- ❌ Modifying Shadcn component source files

**Animation:**
- ❌ Bouncing, springing, or looping animations on content
- ❌ `blurReveal` or `whileInView` — those are landing page patterns, not app patterns
- ❌ More than 2 breathing-glow elements per page
- ❌ Animation on every page transition (one `animate-fade-in` on mount, that's it)

---

## Part IX: Reference Checklists

### 9.1 Page-Level Validation

**Typography:**
- [ ] Page title: `font-grotesk text-lg font-semibold text-foreground` (never larger)
- [ ] Page description: `text-sm text-foreground` with `mt-0.5`
- [ ] Section headers: `font-grotesk text-sm font-semibold text-foreground`
- [ ] Code/data: `font-mono`
- [ ] All primary text: `text-foreground` (NOT muted)
- [ ] Muted only for: form labels, placeholders, metadata labels

**Layout:**
- [ ] Page container: `space-y-6 py-6 animate-fade-in`
- [ ] Form fields: `space-y-4` or `space-y-2`
- [ ] Cards: `glass-card` or `glass-panel` (never `bg-muted/30`)
- [ ] Cards use `CardContent` with `pt-6` (no full padding, no `CardHeader`)

**Components:**
- [ ] Buttons: `size="sm"` (except empty state CTAs → `size="lg"`)
- [ ] Inputs: `h-9` height with `aria-label`
- [ ] Labels: `text-xs text-muted-foreground`
- [ ] Loading: `Spinner` + `Suspense` + `Skeleton`
- [ ] Empty states: `Empty` component with `font-grotesk` title

**Surfaces & Color Budget:**
- [ ] Stat cards: `glass-card border-border hover:border-border/80` (neutral hover)
- [ ] Table wrappers: `glass-panel border-border`
- [ ] Terminal panels: `bg-[#0e0e14]` with `terminal-header` + dots
- [ ] Active/selected: `border-accent/20` (subtle accent border, no glow)
- [ ] Confidence colors: success (≥85%), warning (50–84%), muted (<50%)
- [ ] **Squint Test:** Page is mostly gray with 1-2 violet spots and a few semantic dots
- [ ] **No accent on chrome:** Sidebar, tabs, breadcrumbs, secondary buttons all neutral

### 9.2 Feature Checklist

**All List Views:**
- [ ] Table view (not cards)
- [ ] Pagination (25 per page)
- [ ] Row click navigates to detail
- [ ] Actions in dropdown menu
- [ ] Status badges with `statusColors` pattern
- [ ] Empty state with `Empty` component

**All Detail Views:**
- [ ] Tab-based navigation (single-level)
- [ ] Overview tab with stats + terminal panels
- [ ] Settings/Configuration tab
- [ ] Activity tab when applicable
- [ ] No card wrappers on tab content

**All Forms:**
- [ ] Basic info first → primary config → additional → advanced (accordion)
- [ ] `Separator` between sections
- [ ] `h-9` inputs, `text-xs text-muted-foreground` labels
- [ ] Helper text: `text-foreground opacity-85` (NOT muted)
- [ ] Loading states with `Spinner`

**Terminal Displays:**
- [ ] `bg-[#0e0e14]` background
- [ ] `terminal-header` with traffic-light dots
- [ ] `font-mono text-xs` content
- [ ] Status-colored keywords: PASS (green), BLOCKED (red), REWRITE (`text-live`)
- [ ] Blinking cursor where appropriate (`cursor-blink`)

### 9.3 New Feature Checklist

Before building any new feature:

- [ ] Read this guide + `.cursor/patterns/golden-sample.tsx`
- [ ] Verify font stack: Space Grotesk, Inter, JetBrains Mono (NOT Poppins/Sofia)
- [ ] Use `glass-card`/`glass-panel` for all containers
- [ ] Use brand color system: violet = interactive accent (sparingly), cyan = live data only
- [ ] **Color Budget:** 3-5 colored elements per page max. Chrome is neutral.
- [ ] Terminal panels for any code/agent/log output
- [ ] Confidence scores use the 5-point health grade scale (see `brand.md` §5)
- [ ] Server Component by default — `"use client"` only when hooks needed
- [ ] `Suspense` + `Skeleton` for async data
- [ ] Test WCAG AA contrast (Cloud White on Void Black = 18.4:1)
- [ ] Keyboard nav + `aria-label` on icon buttons + `focus-visible:ring-ring`

---

## Appendix A: Tailwind Utility Quick Reference

| Utility | Definition | Usage |
|---------|-----------|-------|
| `glass-panel` | `bg-white/3% + border-white/10%` (solid, no blur) | Static panels, sidebar, table wrappers |
| `glass-card` | Same + hover (bg→5%, border→15%) (solid, no blur) | Stat cards, interactive panels |
| `bg-accent-fade` | Violet gradient `135deg` (custom hue, see token system) | Primary button background |
| `text-gradient` | Violet gradient text (clipped) | Decorative headings (rare) |
| `glow-accent` | `box-shadow: 0 0 20px rgba(139,92,246,0.2)` | CTA emphasis (sparingly) |
| `glow-live` | `box-shadow: 0 0 20px rgba(34,211,238,0.2)` + border | Active/live data only |
| `glow-success-pulse` | Pulsing green shadow + border | High confidence |
| `glow-red` | Red shadow | Error states |
| `text-glow-cyan` | Cyan + text-shadow | Terminal highlights (landing page only) |
| `terminal-header` | Flex row with padding + bottom border | Terminal top bar |
| `terminal-dot` | 8px circle | Traffic-light dots |
| `cursor-blink` | `::after` blinking cyan block | Terminal cursor |
| `divider-shimmer` | Gradient line + shimmer animation | Section dividers |
| `animate-fade-in` | `opacity 0→1, 0.5s` | Page mount entrance |
| `animate-breathing-glow` | Pulsing inset cyan shadow | **Landing page only** — not for dashboard |
| `bg-grid-pattern` | 40px grid lines at 3% white | **Landing page only** — HUD background texture |
| `scan-lines` | Subtle horizontal lines via `::after` | **Landing page only** — terminal overlay |

## Appendix B: Shadcn Component Reference

| Category | Components | Key Patterns |
|----------|-----------|-------------|
| **Layout** | `card`, `separator`, `tabs`, `sheet`, `scroll-area` | `glass-card` + `CardContent pt-6` |
| **Forms** | `input`, `label`, `textarea`, `select`, `switch`, `form` | `h-9` inputs, `text-xs` labels |
| **Feedback** | `alert`, `badge`, `spinner`, `skeleton`, `progress`, `sonner` | `Spinner` not `Loader2` |
| **Data** | `table`, `avatar` | Pagination mandatory |
| **Interactive** | `button`, `dialog`, `alert-dialog`, `dropdown-menu`, `tooltip` | `size="sm"` default |

## Appendix C: Landing Page → App Translation Table

This table maps visual elements from the unerr landing page to their dashboard equivalents:

| Landing Page Element | App Equivalent |
|---------------------|---------------|
| `text-display-xl` hero headline | `text-lg font-semibold` page title |
| `blurReveal` scroll animation | `animate-fade-in` on page mount (once) |
| Terminal mockup inside bento card | `TerminalPanel` component with real agent output |
| NeuralConstellation WebGL | No WebGL — `glass-card` + `glass-panel` (solid surfaces) carry the aesthetic |
| Stat values `text-3xl font-grotesk text-accent` | Stat values `text-2xl font-bold text-foreground` |
| Bento grid (hero + 2×2) | Stats grid (4-col) + table + Brain panes |
| "Spaghetti Shield" terminal mockup | Real PR review log in `TerminalPanel` |
| "Rewind Button" timeline mockup | Real Prompt Ledger Timeline with working-state markers |
| "Invisible Testing" REC dot | Real test recording status with `animate-breathing-glow` |
| HUD corner brackets on CTA | Not used in app — reserved for marketing surfaces |
| FAQ accordion in glass container | Settings sections with `Accordion` for advanced options |
| `hover:glow-cyan` on CTA buttons | `hover:shadow-glow-accent` on primary CTA only, neutral active tabs |

---

## Light Mode ("Paper Light") Implementation

The app supports both dark and light themes via `next-themes` (`attribute="class"`, `defaultTheme="dark"`). The theme toggle is in the user profile dropdown menu.

### Token Strategy

**Always use semantic tokens** — never hardcoded `text-white/XX` or `bg-white/XX`:

| What | Use | Not |
| :--- | :--- | :--- |
| **Body text** | `text-foreground` | `text-white` |
| **Secondary text** | `text-muted-foreground` | `text-white/60` |
| **Faded text** | `text-muted-foreground/50` | `text-white/20` |
| **Page background** | `bg-background` | `bg-[#0A0A0F]` |
| **Card background** | `bg-card` | `bg-white/[0.02]` |
| **Subtle background** | `bg-muted` | `bg-white/5` |
| **Borders** | `border-border` | `border-white/10` |
| **Active accent** | `text-accent` / `border-accent` | `text-[#00E5FF]` |

### Key Principles

1. **Cyan = live data only** (both modes). Violet is the sole interactive accent (`--color-accent`).
2. **Terminal Exception:** Code blocks and pipeline logs keep dark backgrounds (`#1E1E2E`) in both themes. Use the `console-panel` CSS macro.
3. **Shadows replace tinted surfaces:** Dark-mode surface tints swap to `box-shadow` elevation in light mode.
4. **Status colors darken:** Success `#059669`, Warning `#D97706`, Error `#CC1D36` for WCAG AA on white.

### Custom Utility Classes

| Class | Purpose |
| :--- | :--- |
| `t-secondary` | Text at 70% opacity (semantic, theme-aware) |
| `t-tertiary` | Text at 45% opacity |
| `t-ghost` | Text at 25% opacity |
| `console-panel` | Dark terminal container (stays dark in light mode) |
| `console-header` | Terminal header bar |
| `console-body` | Scrollable terminal content |
| `info-card` | Metric tile |
| `telemetry-chip` | Compact metric badge |
| `status-pill` | Inline status badge |

See `docs/ui_ux/brand.md` §16 for the full Paper Light specification.

---

## Brand Asset Inventory

Complete tracker of all SVG, PNG, and ICO files. See `brand.md` §9.1 for full details.

### `app/` — Favicon & Meta Assets (7 files)

| File | Format | Size | Purpose |
|------|--------|------|---------|
| `icon.svg` | SVG | 512×512 | Primary favicon (modern browsers) |
| `icon.png` | PNG | 512×512 | Fallback favicon |
| `favicon.svg` | SVG | 512×512 | Alternative favicon (self-closing tags) |
| `favicon.ico` | ICO | multi | Legacy favicon (`<link rel="icon">`) |
| `favicon.png` | PNG | 96×96 | Legacy fallback |
| `favicon-96x96.png` | PNG | 96×96 | Standard favicon size |
| `apple-icon.png` | PNG | 180×180 | Apple touch icon |

### `public/` — Brand & Sharing Assets (12 files)

| File | Format | Size | Purpose |
|------|--------|------|---------|
| `unerr.svg` | SVG | 512×512 | **Primary brand mark** — sidebar logo (`<Image src="/unerr.svg">`) |
| `unerr.png` | PNG | 512×512 | Social/OG image fallback |
| `icon.svg` | SVG | 512×512 | Alternate icon reference |
| `icon.png` | PNG | 512×512 | Alternate icon reference |
| `unerr-wordmark.svg` | SVG | 1435×297 | Text-only logo ("unerr" with violet gradient) |
| `unerr-wordmark.png` | PNG | raster | Wordmark for external embeds |
| `icon-wordmark.svg` | SVG | 2137×512 | **Primary lockup** — icon + "unerr" text |
| `icon-wordmark.png` | PNG | raster | Lockup for social/pitch decks |
| `web-app-manifest-192x192.png` | PNG | 192×192 | PWA manifest (small) |
| `web-app-manifest-512x512.png` | PNG | 512×512 | PWA manifest (large) |

**Usage in code:**
- Dashboard sidebar: `<Image src="/unerr.svg" className="h-6 w-6" />`
- OG/meta tags: referenced in `app/layout.tsx`
- PWA: referenced in `manifest.json` / `site.webmanifest`

**Total: 19 assets** across both directories.

---

**Document Status:** Complete (v6.1 — Substrate Dark + Paper Light, glass removed)
**Last Updated:** March 2026
**Design System:** unerr Substrate Dark + Paper Light (Void Black + Violet Accent) + Paper Light
**Tailwind:** v4 — `styles/tailwind.css`
**Golden Sample:** `.cursor/patterns/golden-sample.tsx`
**Brand Guide:** `docs/ui_ux/brand.md`
**Design Overhaul Plan:** `docs/ui_ux/DESIGN_SYSTEM_OVERHAUL.md`
**Component Library:** Shadcn UI
**Next Review:** After design system overhaul implementation
