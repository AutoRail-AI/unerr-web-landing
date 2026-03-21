# Landing Page Blueprint — unerr Marketing Website

**Role:** Senior Design Technologist & Creative Director — Developer Trust through Visual Precision
**Aesthetic:** Linear-style High-Fidelity Minimalism — content hierarchy, motion-driven storytelling, surgical layouts
**Mandate:** Only build and claim what we can deliver on Day 1. No marketing fluff. No maintenance-heavy pages.
**Tech Stack:** Next.js 16, Tailwind CSS v4, Radix UI, Framer Motion, Shiki, Lucide-React, GSAP, Three.js, Theatre.js, LottieFiles

---

## Design Philosophy: The Three Laws

1. **Show the product, not the promise.** Every section must contain either a code snippet, a product screenshot, or a live data visualization. If it can't show the product, it doesn't ship.
2. **Speak to the maintainer first.** OSS maintainers are our "shop window." They are exhausted, skeptical, and hostile to AI tools. Our copy must name their pain before offering the solution.
3. **Fewer pages, higher fidelity.** Four pages at Stripe-level polish beats twelve pages at template quality. Every page we cut is maintenance burden we avoid and quality we redistribute.

---

## Step 1 — The "Lean" Information Architecture

### 1.1 Sitemap (4 pages + legal)

```
unerr.dev/
├── / ..................... Hero + Substrate Viz + Problem + Features + OSS CTA + Pricing Preview + CTA
├── /oss ................. OSS Guardian Program — maintainer-focused standalone page
├── /pricing ............. Infrastructure-tier pricing ($20/mo signal) + comparison + FAQ
├── /legal/
│   ├── /legal/privacy ... Standard privacy policy (Basecamp-style plain language)
│   └── /legal/terms ..... Standard terms of service
└── → docs.unerr.dev .... Mintlify documentation (external, not part of marketing site)
```

**What we killed and why:**

| Killed Page | Why |
|-------------|-----|
| `/about` | Pre-revenue startup with no team page to fill. The product speaks. Ship when there's a story to tell. |
| `/security` | Premature trust theater. A security page without SOC 2 certification is marketing fiction. Add when we have the cert. |
| `/blog` | Maintenance trap. Zero-audience blog posts are invisible. Replace with founder-led X/HN posts that link to `/oss` and `/`. |
| `/changelog` | Use GitHub releases or a Mintlify changelog widget. Not a standalone page. |
| `/features/*` | Six deep-dive pages for a pre-launch product is overengineering. All features live on the homepage bento grid. Expand later when we have usage data on what people click. |

### 1.2 Navigation

```
┌──────────────────────────────────────────────────────────────────┐
│  [unerr]     Product ▾     OSS Guardian     Pricing     Docs ↗  │
│                                                       [Get Started]│
└──────────────────────────────────────────────────────────────────┘
```

**5 items + 1 CTA. That's it.**

| Item | Type | Target | Notes |
|------|------|--------|-------|
| `unerr` (wordmark) | Link | `/` | `font-grotesk font-bold text-foreground` |
| Product | Dropdown | Inline mega-menu | 6 feature cards in 2×3 grid (no separate pages) |
| OSS Guardian | Link | `/oss` | First-class nav item — this is our GTM |
| Pricing | Link | `/pricing` | |
| Docs | External link | `docs.unerr.dev` | Opens in new tab, Mintlify-hosted |
| **Get Started** | CTA button | `/login` → GitHub App install | `bg-accent-fade text-primary-foreground` — only colored element |

**Mobile:** Full-screen overlay, staggered fade-in. No hamburger dropdown — full takeover.

**Footer:** Two rows only.
- Row 1: Product | OSS Guardian | Pricing | Docs | Privacy | Terms
- Row 2: `© 2026 unerr` + GitHub icon + X/Twitter icon

No 4-column mega-footer. We don't have enough links to justify it. A sparse footer looks worse than a clean two-row bar.

---

## Step 2 — Visual Research & "unerr Mod" Mapping

For every major section, a reference and the specific modification for unerr.

### Hero

**Visual Reference:** [Linear homepage hero](https://linear.app) — "Purpose-built for planning and building products."
- Centered composition, dark background, animated product UI below headline
- Two CTAs: "Get started" + "Contact sales"
- Product screenshot as the hero visual, not an abstract illustration

**The unerr Mod:**
- Replace Linear's product screenshot with an **animated knowledge graph visualization** — nodes connecting in real-time, showing entities being discovered. This IS the product. Linear shows their UI; we show our intelligence.
- Replace "Contact sales" with "Protect an OSS project" — our secondary CTA drives the viral loop, not enterprise sales.
- Add a **crisis-aware badge** above the headline: `Now in Public Beta — Built for the AI slop era` — this is a zeitgeist hook, not generic startup copy.
- Background: CSS grid lines + radial violet glow (same as Linear's center-emanating gradient, but violet instead of blue).

### Feature Grid

**Visual Reference:** [Linear features page](https://linear.app/features) — 6-card bento grid with size hierarchy.
- Large cards (2-col span) for primary features, 1-col for secondary
- Each card: icon + title + one-line description + subtle interior visual
- Dark cards with solid bg + crisp border (no glassmorphism)

**The unerr Mod:**
- Replace Linear's issue icons with **unerr's entity visualizations** — mini graph snippets, health grade badges, blast radius maps inside each card.
- Glow color: Violet-500 (`#8B5CF6`), not Linear's indigo.
- Cards use `glass-card` from our design system (solid surface + crisp border, defined in `styles/tailwind.css`). No `backdrop-filter`, no blur — solid surfaces only.
- Interior visuals are **Shiki-rendered code snippets** or **SVG data visualizations**, not screenshots. Code IS the visual for a developer tool.

### Social Proof / Trust

**Visual Reference:** [CodeRabbit stats bar](https://coderabbit.ai) — "2M Repositories | 75M Defects found | Most installed AI App"
- Large numbers, clean horizontal layout, immediately below hero

**The unerr Mod:**
- Replace vanity metrics with **capability metrics** that prove depth:
  - `50K+` entities indexed per repo (shows we go deep, not wide)
  - `13` risk types detected (shows analytical breadth)
  - `< 60s` to first health audit (shows speed)
  - `< 5ms` local query resolution (shows Phase 10 proxy performance)
- These are provable Day 1 metrics, not aspirational. We don't claim "2M repos" because we have zero repos.

### Problem Statement

**Visual Reference:** [CodeRabbit problem section](https://coderabbit.ai) — "Code reviews were hard before. Now, they feel impossible."
- Short, punchy headline that names the pain before introducing the product

**The unerr Mod:**
- Our problem is bigger than code review. Replace with the AI slop crisis framing from the OSS strategy doc:
  - Headline: *"Every AI coding agent today is a brilliant intern with amnesia."*
  - Supporting evidence: curl shut down bug bounties. Ghostty bans AI submissions. tldraw auto-closes all external PRs. The crisis is real, named, and sourced.
- Before/after comparison cards (not a wall of text). "Without unerr" vs "With unerr" — same pattern as Resend's deliverability comparison, but for code intelligence.

### OSS CTA Section (on homepage)

**Visual Reference:** [Snyk open-source hero](https://snyk.io/open-source/) — "Free Security for Open Source Projects" with large project count badge.
- Clean, authoritative, shows the number of projects already protected

**The unerr Mod:**
- This is a teaser on the homepage, not the full page. One card with:
  - Badge: `OSS Guardian` with shield icon
  - Headline: *"Free. Forever. No asterisks."*
  - One-liner: *"Any verified open-source project gets unerr Pro for free. Full knowledge graph, PR review, health grades, MCP integration."*
  - CTA: "Protect Your Project →" linking to `/oss`
- Background: subtle violet-to-transparent gradient on the left edge only. Asymmetric to draw the eye.

### Pricing Preview (on homepage)

**Visual Reference:** [Resend's absence of pricing on homepage](https://resend.com) — they DON'T put pricing on the homepage. They link to `/pricing`.

**The unerr Mod:**
- We DO put a pricing preview on the homepage because our price ($20/mo) is a competitive signal. It says "infrastructure-grade tool, not another free linter."
- Show only the Pro tier card with price + "Includes everything" + link to full comparison on `/pricing`.
- This is the Stripe pattern: show one clear price, remove decision paralysis, let the pricing page handle tier comparison.

---

## Step 3 — Blueprint Construction: Homepage (`/`)

### Section 0: Sticky Header

**Behavior:**
- Height: `h-14` (56px). Transparent on hero, gains `bg-background/80 backdrop-blur-xl border-b border-border` after 100px scroll.
- Z-index: `z-50` per elevation model.
- "Get Started" is the only colored element — `bg-accent-fade hover:opacity-90 text-primary-foreground size="sm"`.

**Pseudocode:**
```tsx
// components/marketing/site-header.tsx
"use client"
import { motion, useScroll, useTransform } from "motion/react"

function SiteHeader() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 h-14">
      <motion.div
        className="absolute inset-0 border-b"
        style={{
          backgroundColor: `rgba(10, 10, 15, ${opacity})`,
          backdropFilter: `blur(${opacity * 12}px)`,
          borderColor: `rgba(250, 250, 250, ${opacity * 0.1})`,
        }}
      />
      <nav className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo | Product dropdown | OSS Guardian | Pricing | Docs | [Get Started] */}
      </nav>
    </motion.header>
  )
}
```

---

### Section 1: Hero — "The AI Tech Lead"

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║   ┌──────────────────────────────────────────────────────────────┐║
║   │  ✦ Now in Public Beta — Built for the age of AI-assisted dev│║
║   └──────────────────────────────────────────────────────────────┘║
║                                                                   ║
║         Code as fast as your AI can type.                        ║
║         unerr will catch the mistakes.                           ║
║                                                                   ║
║         The missing backend for AI coding agents.                ║
║         Knowledge graph · MCP server · Architectural rules.      ║
║                                                                   ║
║         [Get Started Free]     [Protect an OSS Project]          ║
║                                                                   ║
║   ┌─────────────────────────────────────────────────────────┐    ║
║   │                                                         │    ║
║   │   Animated Knowledge Graph Visualization                │    ║
║   │   (nodes appearing, edges connecting, health grade      │    ║
║   │    morphing from "Analyzing..." → "Grade: A")           │    ║
║   │                                                         │    ║
║   └─────────────────────────────────────────────────────────┘    ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

**Layout:** `min-h-[90vh]` centered, `max-w-4xl mx-auto px-6`.

**Background layers (bottom → top):**
1. `bg-background` (Void Black `#0A0A0F`)
2. Grid lines: `bg-[linear-gradient(rgba(250,250,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,250,0.03)_1px,transparent_1px)] bg-[size:64px_64px]`
3. Radial glow: `bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_70%)]`

**Typography:**
- Badge: `text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1`
- H1: `font-grotesk text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]`
- Subtitle: `text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6`
- Feature pills: `text-sm text-muted-foreground` with `·` separators

**CTAs:**
- Primary: `bg-accent-fade hover:opacity-90 text-primary-foreground h-11 px-6 rounded-lg font-medium`
- Secondary: `border border-border text-foreground hover:bg-muted h-11 px-6 rounded-lg` — links to `/oss`

**Hero Visual: The Substrate Visualization**

This is NOT a screenshot. It's a live SVG animation showing the knowledge graph being built:
- Nodes appear (files → functions → classes) with staggered fade-in
- Edges draw between related nodes (calls, imports, inherits)
- A health grade card materializes in the center: "Analyzing..." → spinner → "Grade: A (92/100)"
- Container: `rounded-xl border border-border bg-card overflow-hidden` (NOT glass-card — we use solid card here for contrast against the glow background)

**Pseudocode interactions:**
```tsx
// Hero word reveal
<motion.h1>
  {words.map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {word}{" "}
    </motion.span>
  ))}
</motion.h1>

// Subtitle + CTAs
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  {/* subtitle + CTA buttons */}
</motion.div>

// Product visualization
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
>
  <SubstrateVisualization />
</motion.div>
```

**Copywriting:**

| Element | Copy | Why |
|---------|------|-----|
| Badge | `✦ Now in Public Beta — Built for the age of AI-assisted development` | Zeitgeist hook — frames the era positively while implying there's work to do |
| Headline | Code as fast as your AI can type. unerr will catch the mistakes. | From brand.md positioning. Two sentences. First validates AI speed; second introduces the safety net. |
| Subtitle | The missing backend for AI coding agents. Build a knowledge graph of your codebase and feed it to every AI tool via MCP — turning brilliant interns into supervised engineers. | Technical credibility. "Backend" signals infrastructure. "MCP" signals protocol-level integration. "Supervised engineers" is the core metaphor. |
| Primary CTA | Get Started Free | Standard. "Free" removes friction. |
| Secondary CTA | Protect an OSS Project → | Drives the viral loop. Every maintainer who clicks enters the OSS funnel. |

---

### Section 2: Capability Metrics Bar

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│    50K+              13               < 60s           < 5ms       │
│    entities indexed  risk types       first health    local query │
│    per repo          detected         audit           resolution  │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-16 border-y border-border`

**Grid:** `grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center`

**Number:** `font-grotesk text-3xl md:text-4xl font-bold text-foreground tabular-nums`
**Label:** `text-sm text-muted-foreground mt-1`

**Scroll-triggered count-up:**
```tsx
// components/marketing/count-up.tsx
function CountUp({ target, suffix = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 1.5, ease: "easeOut" })
    }
  }, [isInView])

  return <motion.span ref={ref}>{rounded}{suffix}</motion.span>
}
```

**Why these metrics:**
- `50K+ entities per repo` — proves analytical depth (CodeRabbit can't claim this — they don't have a knowledge graph)
- `13 risk types` — proves breadth (from Phase Post-Onboarding: dead code, drift, coupling, fan-in/fan-out, etc.)
- `< 60s` — proves speed (from Phase 1 onboarding flow)
- `< 5ms` — proves Phase 10 local proxy performance (categorically different from cloud-only tools)

---

### Section 3: Problem Statement — "The AI Slop Crisis"

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║     Every AI coding agent today is                               ║
║     a brilliant intern with amnesia.                             ║
║                                                                   ║
║  ┌─────────────────────────┐  ┌─────────────────────────┐       ║
║  │   Without unerr         │  │   With unerr            │       ║
║  │                         │  │                         │       ║
║  │  ✗ No codebase memory   │  │  ✓ Living knowledge     │       ║
║  │  ✗ Ignores patterns     │  │    graph                │       ║
║  │  ✗ No blast radius      │  │  ✓ Pattern enforcement  │       ║
║  │  ✗ Can't rewind         │  │  ✓ Blast radius maps    │       ║
║  │  ✗ Stale context        │  │  ✓ Full audit trail     │       ║
║  │                         │  │  ✓ Verified docs via    │       ║
║  │  "curl shut down bug    │  │    MCP                  │       ║
║  │   bounties. tldraw      │  │                         │       ║
║  │   auto-closes all PRs." │  │  "The architectural     │       ║
║  │                         │  │   immune system."       │       ║
║  └─────────────────────────┘  └─────────────────────────┘       ║
║                                                                   ║
║     AI co-authored code contains 1.7× more major issues,        ║
║     75% more misconfigurations, and 2.74× higher security        ║
║     vulnerabilities. — Analysis of 470 GitHub PRs               ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

**Layout:** `py-24 bg-muted/20` (subtle background shift to break rhythm)

**Headline:** `font-grotesk text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto text-center`

**Before/After cards:**
- `grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto`
- "Without": `border-destructive/20` left border accent, `✗` items in `text-destructive`
- "With": `border-accent/20` left border accent, `✓` items in `text-success`

**Comparison items (mapped from real product capabilities):**

| Without unerr | With unerr | Source |
|---------------|-----------|--------|
| No codebase memory — each session starts from zero | Living knowledge graph — 50K+ entities, always current | Phase 1 indexing |
| Ignores your team's patterns and conventions | Architectural rules auto-detected and enforced | Phase 6 rules engine |
| No blast radius awareness — changes break silently | Blast radius visualization before every merge | Phase 7 PR review |
| No audit trail — can't trace what the AI changed | Prompt ledger — full history, rewind to any point | Phase 5.5 ledger |
| Stale docs silently poison AI context | Docs validated against live code graph via MCP | Phase 15 knowledge sync |

**Evidence callout:** `text-sm text-muted-foreground text-center mt-12 max-w-2xl mx-auto italic`
> "AI co-authored code contains 1.7× more major issues, 75% more misconfigurations, and 2.74× higher security vulnerabilities." — Analysis of 470 open-source GitHub PRs

**Scroll animation:** Section fades in as a block. Cards stagger left-then-right with `staggerChildren: 0.15`.

---

### Section 4: How It Works — "Zero to Protected in 60 Seconds"

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     Zero to protected in 60 seconds.                              │
│                                                                    │
│     ① Connect         ② Analyze          ③ Supervise             │
│     Install GitHub    Knowledge graph    Your AI agents           │
│     App or run CLI.   builds in under    read the graph           │
│     One command.      5 minutes.         via MCP.                 │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │  $ npx unerr setup                                       │     │
│  │  ✓ Detected Cursor IDE                                   │     │
│  │  ✓ Authenticated via GitHub                               │     │
│  │  ✓ MCP server configured at localhost:9315                │     │
│  │  ✓ Indexing 3 repositories...                             │     │
│  │  ✓ Health audit complete — Grade: A (92/100)              │     │
│  │                                                           │     │
│  │  unerr is now supervising your AI agents.                 │     │
│  └──────────────────────────────────────────────────────────┘     │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Visual Reference:** [Resend's code-first hero](https://resend.com) — they show a code snippet as the second section. For developer tools, code IS the visual.

**The unerr Mod:** Our "code snippet" is a terminal session showing the actual CLI setup flow. This proves the "60 seconds" claim live on the page. The terminal output maps directly to Phase 10's single-command default path.

**Layout:** `py-24 max-w-5xl mx-auto px-6`

**Three steps:**
- `grid grid-cols-1 md:grid-cols-3 gap-8`
- Step number: `w-8 h-8 rounded-full bg-accent-fade text-primary-foreground text-sm font-bold inline-flex items-center justify-center`
- Title: `font-grotesk text-lg font-semibold text-foreground mt-3`
- Description: `text-sm text-muted-foreground mt-2`

| Step | Icon | Title | Description | Phase Source |
|------|------|-------|-------------|-------------|
| ① | `GitBranch` | Connect | Install the GitHub App or run `npx unerr setup`. One command detects your IDE, authenticates, and configures MCP. | Phase 10 §8: one-command setup, IDE auto-detection |
| ② | `Network` | Analyze | The knowledge graph builds automatically. Every file, function, and relationship — indexed with semantic embeddings and business justifications. | Phase 1: indexing, Phase 4: justification |
| ③ | `Shield` | Supervise | Your AI agents read the graph via MCP at `localhost:9315`. 80% of queries resolve locally in <5ms. The rest route to cloud with full branch context. | Phase 10: local proxy, 80% local resolution |

**Terminal animation:**
```tsx
// components/marketing/terminal-animation.tsx
"use client"

const lines = [
  { text: "$ npx unerr setup", delay: 0, style: "text-foreground" },
  { text: "✓ Detected Cursor IDE", delay: 800, style: "text-emerald-400" },
  { text: "✓ Authenticated via GitHub", delay: 1400, style: "text-emerald-400" },
  { text: "✓ MCP server configured at localhost:9315", delay: 2000, style: "text-emerald-400" },
  { text: "✓ Indexing 3 repositories...", delay: 2600, style: "text-emerald-400" },
  { text: "✓ Health audit complete — Grade: A (92/100)", delay: 3800, style: "text-emerald-400 font-semibold" },
  { text: "", delay: 4200, style: "" },
  { text: "unerr is now supervising your AI agents.", delay: 4400, style: "text-electric-cyan font-medium" },
]

// Each line types character by character using motion.span
// Terminal container matches console-panel from pipeline-log-viewer.tsx:
//   rounded-xl border border-border bg-[#08080D] p-4 font-mono text-[11px] leading-relaxed
// Title bar: console-header pattern — bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.06)]
//   Three dots + "Terminal" label in text-muted-foreground text-[11px]
// Success lines use text-emerald-400 (matches pipeline-stepper completed state)
// Final accent line uses text-electric-cyan (matches active/live data convention)
// Light mode: Terminal Exception — stays dark (#1E1E2E bg) per design system
// Triggered by useInView({ once: true })
```

---

### Section 5: Feature Bento Grid — "What the Substrate Sees"

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     What the Substrate sees.                                      │
│     Six capabilities. One knowledge graph.                        │
│                                                                    │
│  ┌──────────────────────────────┬───────────────┐                 │
│  │                              │               │                 │
│  │   Living Knowledge Graph     │  MCP Server   │                 │
│  │   (2-col)                    │               │                 │
│  │   [SVG: entity graph]        │  [IDE logos]  │                 │
│  │                              │               │                 │
│  ├───────────────┬──────────────┴───────────────┤                 │
│  │               │                              │                 │
│  │  Health       │  PR Review + Blast Radius    │                 │
│  │  Audit        │  (2-col)                     │                 │
│  │  [Grade card] │  [Diff + verdict card]       │                 │
│  │               │                              │                 │
│  ├───────────────┴──────────────┬───────────────┤                 │
│  │                              │               │                 │
│  │  Rules Engine (2-col)        │  Prompt       │                 │
│  │  [Code snippet: rule def]    │  Rewind       │                 │
│  │                              │  [Timeline]   │                 │
│  └──────────────────────────────┴───────────────┘                 │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Visual Reference:** [Linear features page](https://linear.app/features) — 6-card bento grid with size hierarchy mapping to feature importance.

**The unerr Mod:**
- Linear uses abstract icons. We use **live product visuals** inside each card: SVG graphs, Shiki code snippets, health grade animations. This is the Clerk pattern — "make the invisible visible" by showing the actual rendered output, not illustrations.
- Alternate 2-col tiles across rows for visual rhythm (top-left, middle-right, bottom-left).
- No click-through to feature pages. Each card is self-contained. Hover shows a one-line elaboration.

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-4`

**Card base styles:**
```css
/* Each bento tile */
.bento-tile {
  @apply rounded-2xl border border-border bg-card p-6 overflow-hidden;
  @apply transition-all duration-300;
}
.bento-tile:hover {
  @apply border-accent/20;
  transform: scale(1.01);
}
```

**Pseudocode interaction:**
```tsx
<motion.div
  className="bento-tile"
  whileHover={{ scale: 1.01, borderColor: "rgba(139,92,246,0.2)" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  {/* content */}
</motion.div>
```

**Tile specifications:**

| Tile | Span | Interior Visual | Title | One-liner | Phase Source |
|------|------|----------------|-------|-----------|-------------|
| **Knowledge Graph** | `col-span-2` | SVG: animated node-edge graph. Nodes labeled "UserService", "AuthMiddleware", "PaymentHandler" with edges drawn on scroll. | Living Knowledge Graph | Every file, function, class, and relationship — indexed, connected, and continuously updated. | Phase 1 + Phase 4 |
| **MCP Server** | `col-span-1` | IDE logos (Cursor, Windsurf, Claude Code, VS Code) stacked with "Connected" badges. Animated: badges appear one by one. | Universal MCP Server | Your AI agents read the graph in real-time. Any MCP client. Full codebase context at `localhost:9315`. | Phase 2 + Phase 10 |
| **Health Audit** | `col-span-1` | Health grade card: animated gradient border, grade letter "A" with score "92/100". Below: mini bar chart of 13 risk types. | 13-Type Health Audit | Dead code, coupling hotspots, architectural drift, convention violations — all detected automatically. | Phase Post-Onboarding |
| **PR Review** | `col-span-2` | Split view: left = Shiki-rendered diff (3-4 lines, green/red), right = verdict card ("Safe to merge" in `text-success` + blast radius: "2 features affected"). | Blast Radius PR Review | Every PR checked against the graph. Downstream impact analysis before merge — not another comment bot. | Phase 7 |
| **Rules Engine** | `col-span-2` | Shiki code block showing a rule definition: `{ pattern: "no-db-in-ui", scope: "components/**", rule: "No direct database imports in UI layer" }` with "3 violations found" badge. | Architectural Rules Engine | Define patterns that must hold. Auto-detected from your codebase history. Enforced on every commit, every PR, every AI suggestion. | Phase 6 |
| **Prompt Rewind** | `col-span-1` | Timeline visualization: vertical line with 5 dots (commit hashes), one highlighted with "Rewind to here" tooltip. Animated: dots appear sequentially. | Prompt Ledger & Rewind | Every AI prompt, every code change, every decision — recorded. Rewind to any point. The flight recorder for AI-generated code. | Phase 5.5 |

**Scroll animation:** CSS `animation-timeline: view()` for each tile. Tiles fade in from below as they enter viewport. No JS required.

```css
.bento-tile {
  animation: fade-up 0.6s ease both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

### Section 6: OSS Guardian CTA — Homepage Teaser

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  🛡 OSS GUARDIAN                                           │   │
│  │                                                            │   │
│  │  Free. Forever. No asterisks.                             │   │
│  │                                                            │   │
│  │  Any verified open-source project gets unerr Pro for      │   │
│  │  free. Full knowledge graph. PR review. Health grades.    │   │
│  │  MCP integration. Because maintainers deserve a           │   │
│  │  tech lead, not another AI bot.                           │   │
│  │                                                            │   │
│  │  [Protect Your Project →]                                 │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-24 px-6`

Single card, `max-w-3xl mx-auto`, with asymmetric violet glow on the left edge:
```css
.oss-teaser {
  @apply glass-card rounded-2xl p-8 md:p-12;
  background: linear-gradient(135deg, rgba(139,92,246,0.06) 0%, transparent 50%);
}
```

**Badge:** `text-xs font-bold tracking-widest uppercase text-accent` — "OSS GUARDIAN"
**Headline:** `font-grotesk text-2xl md:text-3xl font-bold text-foreground mt-4`
**Body:** `text-muted-foreground mt-4 max-w-xl leading-relaxed`
**CTA:** `text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1.5` with arrow icon

---

### Section 7: Pricing Preview — The $20/mo Signal

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     Infrastructure-grade. Developer-priced.                       │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                                                            │   │
│  │  Pro — Safe Velocity               $20 / month            │   │
│  │                                                            │   │
│  │  ✓ Full knowledge graph       ✓ Blast radius analysis     │   │
│  │  ✓ MCP server integration     ✓ 13-type health audit      │   │
│  │  ✓ Architectural rules        ✓ Prompt ledger & rewind    │   │
│  │  ✓ AI PR review               ✓ Unlimited private repos   │   │
│  │                                                            │   │
│  │  [Get Started Free — 7 day trial]                         │   │
│  │                                                            │   │
│  │  Teams start at $15/seat · OSS projects are always free   │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
│     See all plans →                                               │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-24 text-center max-w-3xl mx-auto px-6`

**Heading:** `font-grotesk text-2xl font-bold text-foreground`

Single Pro card: `rounded-2xl border border-accent/20 bg-card p-8 mt-12`
- Plan name + price on one line: `flex justify-between items-baseline`
- Feature grid: `grid grid-cols-2 gap-3 mt-6 text-sm text-muted-foreground`
- Each feature: `✓` in `text-success` + feature name
- CTA: Full-width `bg-accent-fade` button
- Bottom note: `text-sm text-muted-foreground mt-4`

Link to `/pricing`: `text-accent hover:text-accent/80 text-sm font-medium mt-6`

---

### Section 8: Final CTA

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║   (grid lines + violet glow — visual bookend with hero)          ║
║                                                                   ║
║         Your AI agents deserve better context.                   ║
║         Give them unerr.                                         ║
║                                                                   ║
║         [Get Started Free]     [Protect an OSS Project]          ║
║                                                                   ║
║         Free for 7 days · No credit card · Setup in 60 seconds  ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

Same background treatment as hero (grid + glow) — visual bookend effect.
Same CTA pair as hero. Same copy structure. Repetition is intentional — the visitor who scrolled to the bottom is the most engaged visitor.

**Trust line:** `text-sm text-muted-foreground mt-8` with `·` separators.

---

### Section 9: Footer

```
┌──────────────────────────────────────────────────────────────────┐
│  Product · OSS Guardian · Pricing · Docs · Privacy · Terms       │
│  ──────────────────────────────────────────────────────────────── │
│  © 2026 unerr                                   [GitHub]  [𝕏]   │
└──────────────────────────────────────────────────────────────────┘
```

Two rows. `py-8 border-t border-border`.
- Row 1: Horizontal link list, `text-sm text-muted-foreground`, `·` separators
- Row 2: Copyright left, social icons right

No 4-column grid. Clean, minimal, honest about our size.

---

## Step 4 — The `/oss` Page Blueprint: OSS Guardian Program

This is the most important page on the site. It converts maintainers.

### Design Intent

**Visual Reference:** [Snyk's open-source page](https://snyk.io/open-source/) — authoritative, program-focused, with clear qualification criteria and large project-count badges.

**The unerr Mod:**
- Snyk requires an application form. We don't — any public repo qualifies automatically. This is a feature and we lead with it.
- Snyk focuses on security. We focus on the **AI slop crisis** — a more urgent, more emotional, more current pain point.
- We add the **One-Click Health Audit** inline form — the maintainer can try the product without signing up.

### Section-by-Section Blueprint

#### OSS Section 1: Hero — "Your Virtual Tech Lead"

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║  🛡 OSS GUARDIAN PROGRAM                                         ║
║                                                                   ║
║  The virtual tech lead your project deserves.                    ║
║  Full unerr Pro. Free forever. No asterisks.                     ║
║                                                                   ║
║  [Protect Your Project]     [Run a Free Audit First]             ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

**Copy strategy:** "Virtual tech lead" is the framing from the OSS strategy doc. It names the solution (not the product) using language maintainers already use to describe what they need.

**CTAs:**
- Primary: "Protect Your Project" → GitHub App install flow
- Secondary: "Run a Free Audit First" → scrolls to the inline audit form below

---

#### OSS Section 2: The Crisis — "Open Source Is Under Siege"

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     Open source maintainers need backup.                          │
│                                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐    │
│  │ curl        │ │ Ghostty    │ │ tldraw     │ │ Godot      │    │
│  │ Shut down   │ │ Permanent  │ │ Auto-close │ │ "Draining  │    │
│  │ 6-year bug  │ │ bans for   │ │ ALL extern │ │ and        │    │
│  │ bounty      │ │ AI slop    │ │ al PRs     │ │ demoraliz- │    │
│  │ program     │ │ submitters │ │            │ │ ing"       │    │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘    │
│                                                                    │
│     "20% of curl's bug bounty submissions were AI-generated.     │
│      The valid rate dropped to just 5%." — ActiveState, 2026     │
│                                                                    │
│     RedMonk called it "AI Slopageddon." GitHub shipped emergency │
│     kill switches. Maintainers are closing their repos.          │
│                                                                    │
│     It doesn't have to be this way.                              │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-24 bg-muted/20`

**Framing line (above cards):** `text-sm text-muted-foreground text-center mb-8`
"These projects didn't reject AI. They rejected unsupervised AI."

**Crisis cards:** `grid grid-cols-2 md:grid-cols-4 gap-4`
Each card: `rounded-xl border border-destructive/10 bg-card p-5`
- Project name: `font-grotesk font-semibold text-foreground`
- Crisis description: `text-sm text-muted-foreground mt-2`

**Evidence block:** `text-sm text-muted-foreground italic max-w-2xl mx-auto mt-12`
All quotes sourced from the OSS Viral Adoption Strategy doc (ActiveState, RedMonk, CNCF, Jeff Geerling).

**Transition line:** `font-grotesk text-xl font-semibold text-foreground text-center mt-8`
"There's a better way to work with AI contributors."

---

#### OSS Section 3: What unerr Does for Maintainers

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     unerr is the architectural immune system                     │
│     your project has been missing.                               │
│                                                                    │
│  ┌───────────────────────────────────────────────────┐           │
│  │ Pain: AI slop PRs                                  │           │
│  │ Solution: Architectural PR triage — PRs scored     │           │
│  │ against your project's patterns BEFORE you open    │           │
│  │ them. Violations flagged with the specific rule.   │           │
│  ├───────────────────────────────────────────────────┤           │
│  │ Pain: Review exhaustion                            │           │
│  │ Solution: Blast radius visualization — see which   │           │
│  │ downstream features are affected in 5 seconds.     │           │
│  ├───────────────────────────────────────────────────┤           │
│  │ Pain: Convention drift                             │           │
│  │ Solution: Auto-detected conventions from git       │           │
│  │ history. No manual rule writing needed.            │           │
│  ├───────────────────────────────────────────────────┤           │
│  │ Pain: Contributor onboarding                       │           │
│  │ Solution: Contributors see the architecture map    │           │
│  │ and blast radius BEFORE writing code.              │           │
│  ├───────────────────────────────────────────────────┤           │
│  │ Pain: Bus factor / institutional memory            │           │
│  │ Solution: The graph captures WHY code exists —     │           │
│  │ even if the original author leaves.                │           │
│  └───────────────────────────────────────────────────┘           │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-24 max-w-3xl mx-auto`

**Pain → Solution cards:** Stacked vertically with alternating `bg-card` and `bg-muted/50` backgrounds. Each card:
- Pain: `text-sm font-semibold text-destructive/80` — the maintainer's words (from the strategy doc's "What They Say" column)
- Solution: `text-sm text-muted-foreground mt-2` — the unerr solution in one sentence

**Source mapping from OSS strategy doc §2.3:**

| Pain | Maintainer Quote (from doc) | unerr Solution |
|------|---------------------------|----------------|
| AI slop PRs | "1 out of 10 PRs created with AI is legitimate" | Architectural PR triage — scored against project patterns before the maintainer opens them |
| Review exhaustion | "The burden of validation shifts entirely onto humans" | Blast radius visualization — which features are affected, in 5 seconds |
| Convention drift | "It's horribly ironic to run AI to detect AI slop" | Auto-detected conventions from git history — no manual rules |
| Contributor onboarding | "Good first issues get inundated with low-quality submissions" | Architecture map + blast radius preview before contributors write code |
| Bus factor | "One burned-out maintainer can't keep pace" | Knowledge graph captures institutional memory — why code exists |

---

#### OSS Section 4: What You Get — "Full Pro. No Catch."

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     What you get. Full Pro. No catch.                            │
│                                                                    │
│     ✓ Full knowledge graph indexing                              │
│     ✓ AI PR review with blast radius                             │
│     ✓ 13-type health audit + live health badge                   │
│     ✓ Architectural rules engine (auto-detected)                 │
│     ✓ MCP server for all AI agent integrations                   │
│     ✓ Prompt ledger & rewind                                     │
│     ✓ Contributor seats for all project contributors             │
│     ✓ Public health dashboard                                    │
│                                                                    │
│     Qualification: Public GitHub repo. That's it.                │
│     No application form. No star count. No corporate check.      │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:** `py-16 max-w-2xl mx-auto`

Feature list: simple `space-y-3`, each item `flex items-start gap-3`
- `✓` in `text-success text-sm`
- Feature name in `text-foreground text-sm`

Qualification callout: `mt-8 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground`

---

#### OSS Section 5: The Health Badge — "Permanent Reputation"

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     The health badge. Your project's permanent reputation.       │
│                                                                    │
│     [![unerr Health: A](badge-preview.svg)](report-link)         │
│                                                                    │
│     Add one line to your README:                                 │
│     ┌──────────────────────────────────────────────────┐         │
│     │ [![unerr Health](https://unerr.dev/badge/...)]  │ [Copy]  │
│     └──────────────────────────────────────────────────┘         │
│                                                                    │
│     Live grade. Auto-updates on every commit. Clicking it        │
│     opens your public health dashboard.                          │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Visual:** Large rendered badge preview (SVG). Below: a code block with the markdown snippet and a copy button.

**Why this section exists:** The badge is the viral distribution mechanism. Every README view is an impression. This section teaches the maintainer to install it, making it frictionless.

---

#### OSS Section 6: One-Click Health Audit — Inline Form

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     Try it now. No signup required.                              │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  github.com / [owner] / [repo]            [Run Audit →]  │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                    │
│     Paste any public GitHub URL. Get a full health audit —      │
│     13 risk types, grade, top insights — in under 5 minutes.    │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**Visual Reference:** [Codecov's "Get Started For Free" CTA](https://about.codecov.io/for/open-source/) — but ours is better because it requires zero signup.

**The unerr Mod:** Inline form directly on the page. No redirect to a signup flow. The audit runs the lightweight local-parse pipeline (from OSS strategy §2.2: "pennies per scan").

**Implementation:**
- Input: `h-11 bg-muted border border-border rounded-lg font-mono text-sm`
- Prefix: `text-muted-foreground` "github.com /"
- Button: `bg-accent-fade hover:opacity-90 h-11 px-6`
- On submit: `POST /api/audit` → redirect to `unerr.dev/audit/{owner}/{repo}`

---

#### OSS Section 7: Final CTA

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│     Your project deserves an architectural immune system.         │
│     Protect it — for free, forever.                              │
│                                                                    │
│     [Protect Your Project — Free Forever]                        │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

Single CTA. No secondary action. The visitor who reached the bottom is ready to convert.

---

## Step 5 — The `/pricing` Page Blueprint

### Design Intent

**Visual Reference:** [Resend pricing](https://resend.com/pricing) — clean tier cards, no clutter, feature comparison below.

**The unerr Mod:** Lead with Pro ($20/mo) as the highlighted tier. OSS Guardian gets its own callout, not a tier card — it's a program, not a plan.

### Section Layout

#### Pricing Header
- Headline: `Simple, seat-based pricing`
- Subtitle: `Graph queries via MCP are always free and unlimited. Pay only for AI-powered features.`
- Billing toggle: Monthly / Annual (save 20%)

#### Tier Cards

```
┌─────────────┬──────────────────┬─────────────┬──────────────┐
│   Trial     │   Pro ★          │  Startup    │  Enterprise  │
│             │  MOST POPULAR    │             │              │
│   Free      │  $20/mo          │  $15/seat   │  Custom      │
│   7 days    │  1 seat          │  3+ seats   │              │
│             │                  │             │              │
│  [Start     │  [Get Pro]       │  [Get Team] │  [Contact]   │
│   Trial]    │                  │             │              │
└─────────────┴──────────────────┴─────────────┴──────────────┘
```

Pro tier: `border-accent` border + "Most Popular" badge. Elevated with `shadow-glow-accent` (subtle).

**Cards:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`

| Plan | Price | Highlight | CTA |
|------|-------|-----------|-----|
| Free Trial | $0 / 7 days | — | Start Free Trial |
| **Pro** | **$20/seat/mo** | `border-accent` + badge | **Get Pro** |
| Startup | $15/seat/mo (3+ seats) | — | Get Team Plan |
| Enterprise | Custom | — | Contact Us |

#### OSS Guardian Callout

```
┌──────────────────────────────────────────────────────────────────┐
│  Open source? Free forever.                                       │
│  The OSS Guardian program gives any verified public repo full    │
│  Pro features at no cost. No application. No star count minimum. │
│  [Learn more about OSS Guardian →]                               │
└──────────────────────────────────────────────────────────────────┘
```

Styled as a callout box: `rounded-xl border border-accent/10 bg-accent/5 p-6 mt-8 max-w-2xl mx-auto`

#### Feature Comparison Table

Expandable on mobile, full table on desktop. Same data as the existing blueprint but with sticky header row.

**Key row groupings:**
1. **Core Intelligence** (free on all plans): Knowledge graph, MCP server, entity indexing
2. **AI Features** (paid): PR review, health audit, rules engine, rewind
3. **Team Features** (Startup+): Team dashboard, cross-repo search, shared rules
4. **Enterprise**: SSO, audit log, compliance mapping

#### FAQ Accordion

6 questions using Radix Accordion. Same FAQ as before but add:
- "How is unerr different from CodeRabbit?" → "CodeRabbit comments on PRs. unerr understands your architecture. We compute blast radius, enforce patterns, and build a persistent knowledge graph — not just surface-level suggestions."
- "What about the OSS Guardian program?" → Link to `/oss`.

---

## Appendix A: Component Inventory

```
components/marketing/
├── site-header.tsx ........... Sticky nav with scroll-aware background
├── mega-menu.tsx ............. Product dropdown (2×3 feature cards)
├── hero-section.tsx .......... Word reveal + substrate visualization
├── substrate-viz.tsx ......... SVG animated knowledge graph
├── metrics-bar.tsx ........... 4-stat count-up bar
├── problem-section.tsx ....... Before/after comparison cards
├── how-it-works.tsx .......... 3-step flow + terminal animation
├── terminal-animation.tsx .... Typed CLI output
├── bento-grid.tsx ............ Feature grid container
├── bento-tile.tsx ............ Individual feature tile with hover
├── oss-teaser.tsx ............ Homepage OSS Guardian CTA card
├── pricing-preview.tsx ....... Single Pro card on homepage
├── final-cta.tsx ............. Closing CTA with grid background
├── site-footer.tsx ........... Two-row minimal footer
├── scroll-reveal.tsx ......... CSS animation-timeline wrapper
├── count-up.tsx .............. Scroll-triggered number animation
│
├── oss/
│   ├── oss-hero.tsx .......... OSS Guardian hero
│   ├── crisis-cards.tsx ...... AI slop crisis evidence
│   ├── pain-solution.tsx ..... Maintainer pain → unerr solution
│   ├── feature-list.tsx ...... "What you get" checklist
│   ├── badge-preview.tsx ..... Health badge + markdown copy
│   └── audit-form.tsx ........ Inline one-click audit form
│
└── pricing/
    ├── pricing-cards.tsx ..... Tier cards with billing toggle
    ├── oss-callout.tsx ....... OSS Guardian callout box
    ├── comparison-table.tsx .. Feature comparison matrix
    └── faq-accordion.tsx ..... Radix Accordion FAQ
```

---

## Appendix B: File Structure

```
app/(marketing)/
├── layout.tsx ................ Marketing layout (SiteHeader + SiteFooter)
├── page.tsx .................. Homepage (Sections 1-9 composed)
├── oss/
│   └── page.tsx .............. OSS Guardian Program page
├── pricing/
│   └── page.tsx .............. Pricing page
└── legal/
    ├── privacy/page.tsx ...... Privacy policy
    └── terms/page.tsx ........ Terms of service
```

**Route group `(marketing)`:** Isolates the marketing site from the dashboard `(dashboard)` layout. Shares the same Next.js app but different chrome (SiteHeader vs DashboardSidebar).

---

## Appendix C: Content-to-Phase Mapping

Every claim on the landing page maps to a delivered phase (all features ship before launch):

| Landing Page Claim | Phase Source | Status |
|-------------------|-------------|--------|
| "Living knowledge graph — 50K+ entities" | Phase 1: GitHub Connect & Indexing | Implemented |
| "MCP server for AI agents" | Phase 2: Hosted MCP Server | Implemented |
| "13-type health audit" | Phase Post-Onboarding Wow | Implemented |
| "Business justification & taxonomy" | Phase 4: Justification | Implemented |
| "Prompt ledger & rewind" | Phase 5.5: Local Ingestion | Implemented |
| "Incremental indexing on every commit" | Phase 5: Incremental Indexing | Implemented |
| "Architectural rules engine" | Phase 6: Pattern Enforcement | Implemented |
| "AI PR review with blast radius" | Phase 7: PR Review Integration | Implemented |
| "$20/seat/mo pricing" | Phase 8: Billing | In Progress |
| "Setup in 60 seconds / localhost:9315" | Phase 10: Local Proxy | Implemented |
| "Deterministic SCIP artifacts" | Phase 13: Immutable Artifacts | Implemented |
| "Docs validated against live graph" | Phase 15: Knowledge Sync | Implemented |

**Launch Rule:** All features will ship before the landing page goes live. The landing page claims the full product. No "Coming soon" badges — every feature shown is delivered. The only exception is Phase 8 (Billing), which is infrastructure, not a user-facing feature claim.

---

## Appendix D: Dependencies

```json
{
  "dependencies": {
    "motion": "^12.0.0",
    "shiki": "^3.0.0"
  }
}
```

**What we cut from the original blueprint:**
- `gsap` + `@gsap/react` — GSAP is 30KB gzipped. Motion handles everything we need. Only add if we build a complex hero animation that Motion can't handle.
- `@react-three/fiber` + `@react-three/drei` — The substrate visualization uses SVG, not WebGL. Three.js is 150KB+ gzipped. Only add when we build the 3D architecture map (post-launch feature).

**Rule:** Every dependency must justify its bundle cost. Two dependencies at launch. Add more only when a feature requires it.

---

## Appendix E: Performance Budget

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 2.0s | Preload Space Grotesk 700, inline critical CSS, CSS-only hero background (no images) |
| **INP** | < 150ms | No heavy JS in hero, code-split below-fold sections |
| **CLS** | < 0.05 | Reserve space for all animated elements, `font-display: swap` |
| **First load JS** | < 80KB gzipped | Motion tree-shaken (`motion/react`), Shiki server-rendered (zero client JS for code) |
| **Total page weight** | < 500KB | No images above fold, SVG substrate viz, lazy-load everything below bento grid |

**Reduced from original 120KB/800KB targets.** Two dependencies instead of four. SVG instead of WebGL. CSS scroll animations instead of JS-driven. This is the lean budget.

---

## Appendix F: The Forbidden List

Things this landing page must NEVER contain:

| Forbidden | Why |
|-----------|-----|
| "AI-powered" in the headline | Every tool says this. It's noise. We're not anti-AI — we USE AI (for justification, PR review, embeddings). We just don't lead with the mechanism. Lead with value. |
| Stock illustrations | We show the product or we show nothing. SVG data visualizations only. |
| Autoplay video | Performance killer, accessibility hostile, and annoying. |
| Infinite scroll testimonials | We don't have testimonials yet. A blank carousel is worse than no carousel. |
| "Book a demo" as primary CTA | We're PLG. Self-serve or nothing. "Contact us" lives on Enterprise tier only. |
| Newsletter signup | Maintenance burden. We don't have content to send. Add when we do. |
| "Trusted by" with zero logos | Trust theater. Add the logo bar when we have 5+ recognizable logos. |
| Chat widget | We don't have support bandwidth. GitHub Issues link in footer. |
| Social media icons in header | Header real estate is sacred. Social links go in footer only. |
| Animations on mobile | Battery drain. All theatrical animations disabled below `md` breakpoint. See Appendix G for static fallbacks. |

---

## Appendix G: Mobile Static Fallbacks — "No Dead Pages"

**The rule:** All theatrical animations (typed terminal, SVG node draws, stagger reveals, count-up numbers) are disabled below `md` breakpoint. But disabling animation must NOT mean disabling visual richness. A static mobile page should feel like a high-quality print layout — polished, information-dense, and visually confident.

**Principle:** Replace *motion* with *craft*. Where desktop uses animation to reveal content sequentially, mobile uses typography hierarchy, generous whitespace, and Shiki syntax highlighting to achieve the same visual impact statically.

### Fallback Map

| Section | Desktop (animated) | Mobile (static fallback) | Why it works |
|---------|-------------------|-------------------------|--------------|
| **Hero word reveal** | Staggered word-by-word fade-in | All words visible immediately. No animation. The typography at `text-4xl font-bold leading-[1.1]` carries the visual weight on its own. | A 4xl Space Grotesk headline on a dark background with a violet glow is already a statement. Animation is enhancement, not requirement. |
| **Substrate Visualization** | Animated SVG — nodes appear, edges draw, grade morphs | **Static SVG snapshot** showing the completed graph state. All nodes and edges visible. Health grade card shows "A (92/100)" as final state. Render the "end frame" of the animation. | The graph topology IS the visual. Seeing all connections at once is arguably more impressive than watching them appear one by one. |
| **Metrics count-up** | Numbers count from 0 → target on scroll | **Numbers shown at final value immediately.** `50K+`, `13`, `< 60s`, `< 5ms` rendered as static `tabular-nums` text. | The numbers are impressive at any speed. Count-up is a scroll reward; static display is direct communication. Both work. |
| **Terminal animation** | Character-by-character typed output with delays | **Shiki-rendered static code block** showing the complete terminal session. Full syntax highlighting with proper colors for commands (`text-foreground`), success marks (`text-success`), and the final accent line (`text-accent`). Title bar dots still present. | A polished, syntax-highlighted terminal block is a staple of developer marketing. Resend, Stripe, and Vercel all use static code blocks on mobile. The syntax highlighting provides the visual texture that animation provides on desktop. |
| **Bento tile scroll-in** | CSS `animation-timeline: view()` fade-up per tile | **All tiles visible immediately**, no stagger, no fade. Tiles stack in a single column with `gap-4` and full-width. Interior visuals (SVGs, code blocks) are pre-rendered at their final state. | On mobile, the single-column stack IS the visual rhythm. Users scroll linearly; stagger-reveal adds latency without benefit on a narrow viewport. |
| **Bento interior animations** | Badge appear sequences, edge draws, timeline dot reveals | **Static final-state renders.** IDE logos all show "Connected" badges. Timeline shows all 5 dots. Health grade shows "A". | Interior animations are invisible on small tiles anyway. Static confidence > subtle motion. |
| **Before/After card stagger** | Cards stagger left-then-right with `staggerChildren: 0.15` | **Cards stack vertically**, "Without" on top, "With" below. No animation. Scroll to compare. | Vertical comparison is natural on mobile. Side-by-side is a desktop luxury. |

### Implementation Pattern

```tsx
// components/marketing/terminal-animation.tsx
"use client"
import { useMediaQuery } from "@/hooks/use-media-query"

export function TerminalAnimation() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="rounded-xl border border-border bg-[#08080D] overflow-hidden">
      <TerminalTitleBar />
      {isDesktop ? (
        <AnimatedTerminal lines={lines} /> // Motion-driven typed output
      ) : (
        <StaticTerminal lines={lines} />   // Shiki-highlighted static block
      )}
    </div>
  )
}

// StaticTerminal: server-rendered Shiki block showing complete output
// AnimatedTerminal: client component with useInView + typed character animation
```

### The Quality Test

Squint at the mobile page. You should see:
- A **bold headline** on a dark background with a subtle violet glow
- A **polished graph diagram** (static SVG, crisp edges)
- **Large bold numbers** (metrics bar)
- A **syntax-highlighted terminal block** (Shiki, not a gray box)
- **Clean feature cards** stacked vertically with Shiki code snippets inside
- **No blank spaces, no loading indicators, no "scroll to reveal" emptiness**

If the mobile page looks like a well-typeset developer zine, it's right. If it looks like a stripped-down version of the desktop page, it's wrong.

---

## Appendix H: Bento Grid Visual Density Rules — "Breathe"

**The risk:** Six bento tiles with live product visuals (SVG graphs, Shiki code blocks, diffs, grade cards, timelines) inside confined boxes creates cognitive overload. The visual richness that makes individual tiles impressive can become visual clutter when all six compete for attention simultaneously.

**The principle:** Each tile tells ONE visual story. Everything else — secondary text, decorative elements, extra data — is aggressively stripped until the tile can be understood in 2 seconds of glancing.

### Density Control Rules

**Rule 1: One visual per tile, maximum.**
Each tile contains either an SVG visualization OR a Shiki code block OR a data card. Never two of these combined. The Knowledge Graph tile has an SVG graph. The Rules Engine tile has a Shiki code block. Not both.

**Rule 2: Interior visuals occupy 50-60% of tile area.**
The remaining 40-50% is negative space: padding, the title, and the one-liner description. If the visual fills more than 60% of the tile, the tile feels cramped. Less than 50%, it feels empty.

```
┌──────────────────────────────────────────┐
│  p-6                                      │
│  ┌─ Title ─────────────────────────┐     │   ← 15% title zone
│  │ font-grotesk text-lg font-semibold │   │
│  └─────────────────────────────────┘     │
│  ┌─ One-liner ─────────────────────┐     │   ← 10% description
│  │ text-sm text-muted-foreground    │     │
│  └─────────────────────────────────┘     │
│                                           │   ← 15% breathing room
│  ┌─────────────────────────────────┐     │
│  │                                 │     │
│  │     Interior Visual             │     │   ← 50-60% visual zone
│  │     (SVG / Shiki / Card)        │     │
│  │                                 │     │
│  └─────────────────────────────────┘     │
│  p-6                                      │
└──────────────────────────────────────────┘
```

**Rule 3: Muted interior palette.**
Interior visuals use `text-muted-foreground` and `border-border` as their primary colors — not `text-foreground` or `text-accent`. The visual should feel like part of the card's texture, not a competing focal point. Only ONE element inside the visual gets accent treatment (e.g., the health grade letter, the "Safe to merge" verdict, the first node in the graph).

```
Interior color budget:
- Background: bg-muted/30 or transparent (blend with card)
- Primary elements: text-muted-foreground / stroke-border
- ONE accent highlight: text-accent or text-success (the "story point")
- No text-foreground inside the visual — that's reserved for the tile title
```

**Rule 4: 2-col tiles get horizontal split, not more content.**
A 2-col span tile has 2× the width but should NOT have 2× the content. Use the extra space for a horizontal layout (visual left, text right) or for more generous padding. The Knowledge Graph tile has a wider SVG, not a denser SVG.

**Rule 5: Consistent interior top margin.**
All interior visuals start at the same vertical position (`mt-6` below the one-liner). This creates a visual "shelf" across the grid that the eye can follow, reducing chaos.

**Rule 6: No interactive elements INSIDE tiles.**
Tiles respond to hover (scale 1.01, accent border). But the interior visual is purely decorative — no buttons, no tooltips, no hover states within the SVG/code block. One interaction layer per card. Multiple hover zones inside a card create "interactive clutter."

### The Cognitive Load Test

Cover the tile titles with your hand and look only at the interior visuals. Can you identify which feature each tile represents from the visual alone? If yes, the visuals are well-chosen. If they all look like "some code" or "some graph," the visuals are too generic and need more intentional design.

### Tile Visual Specifications (Refined — Matched to Actual Product Design)

**CRITICAL:** All bento tile interiors must replicate the actual dashboard's visual patterns. These specs are extracted from the production components in `components/repo/` and `components/dashboard/`. Do NOT invent new visual patterns.

| Tile | Interior Visual (matched to product) | Accent Point | What NOT to include |
|------|--------------------------------------|-------------|---------------------|
| **Knowledge Graph** | 6-8 nodes, 8-10 edges. Nodes are small circles with 3-letter labels ("USR", "AUT", "PAY"). Edges are `stroke-border`. ONE node highlighted with `stroke-electric-cyan` + `shadow-[0_0_6px_rgba(0,229,255,0.5)]` — matches the live sync dot in `overview-repo-card.tsx`. | The highlighted node (cyan glow, matching dashboard sync indicator) | Don't label every node with full names. Don't show more than 10 edges. Don't use violet for the highlight — the graph is "live data", cyan is correct per design system. |
| **MCP Server** | 4 IDE logos (grayscale, `opacity-50`) in a 2×2 grid. Each has a small status pill: `bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-2 py-0.5 text-xs font-medium` showing "Connected" — matches `review-status-badge.tsx` completed state. | The "Connected" pills (emerald, not plain green) | Don't add descriptions under logos. Don't use `text-success` — use the exact `text-emerald-400` from status badge component. |
| **Health Audit** | Single large grade letter "A" in `text-[var(--color-grade-a)] font-grotesk text-4xl` (Emerald-400 `#34D399`) with score "92/100" below in `text-muted-foreground text-sm`. Subtle glow: `shadow-[0_0_20px_rgba(52,211,153,0.15)]` — matches the success glow pattern. No chart. | The grade letter (uses health grade color scale, NOT accent) | Don't add a bar chart. Don't use `text-accent` for the grade — health grades use the 5-point semantic scale (Emerald A → Teal B → Amber C → Orange D → Red F). |
| **PR Review** | Left half: 3 diff lines in Shiki rendered in `console-panel` style (`bg-[#08080D] font-mono text-[11px]`). Right half: verdict pill `bg-emerald-500/10 text-emerald-400 border-emerald-500/20 rounded-full px-2.5 py-1` showing "Safe to merge" + "2 features affected" in `text-muted-foreground text-[11px]`. | The "Safe" verdict pill (matches `review-status-badge.tsx` completed state) | Don't show a full diff. 3 lines max. Don't use a generic green — use the exact emerald-400 from the product. |
| **Rules Engine** | 3-line Shiki code block in console-panel style (`bg-[#08080D] font-mono text-[11px]`). Below: a small violations counter: `bg-destructive/10 text-destructive border-destructive/20 px-2 py-0.5 text-xs` showing "3 violations" — matches the error badge pattern from `review-comment-card.tsx`. | The violation counter (destructive, matching product error states) | Don't show the full rule schema. 3 lines max. Don't use `text-destructive/60` — use the exact `bg-destructive/10 text-destructive border-destructive/20` badge pattern. |
| **Prompt Rewind** | Vertical timeline matching `pipeline-stepper.tsx` pattern: 5 dots connected by `bg-border` lines. Completed dots: `bg-emerald-500 border-emerald-500` with checkmark. Current dot: `bg-electric-cyan/10 border-electric-cyan shadow-[0_0_8px_rgba(0,229,255,0.25)]`. A small "Rewind here" label in `text-electric-cyan text-[11px]`. | The cyan "current" dot (matches pipeline stepper active state) | Don't add timestamps. Don't add commit messages. Don't use `bg-accent` — the timeline is a "live process" indicator, cyan is correct. |

---

## Appendix I: Tone Calibration — "Pro-AI, Anti-Slop"

**The risk:** Our messaging around the AI slop crisis is punchy, names real projects, and validates maintainer frustration. But it could easily read as anti-AI — which would alienate our primary users (developers who USE AI coding agents and want them to work better).

**The principle:** unerr is pro-AI. We believe AI coding agents are the future. We exist because they're already here and already writing code. Our position is NOT "AI is bad" — it's "AI is powerful and deserves proper infrastructure." We're the adult supervision, not the opposition.

### The Tone Spectrum

```
Anti-AI ←──────── unerr's position ────────→ AI hype
"AI is destroying code"    "AI is powerful.       "AI will replace
                            Let's make it          all engineers"
                            reliable."
```

**unerr sits at center-right:** We validate AI speed, acknowledge the quality gap, and position unerr as the bridge.

### Copy Audit: Before → After

| Section | Original Copy | Tone Issue | Revised Copy |
|---------|--------------|-----------|-------------|
| Hero badge | "Built for the AI slop era" | "Slop era" is slightly cynical for the first thing visitors read | **"Built for the age of AI-assisted development"** — frames the era positively while implying there's work to do |
| Problem headline | "Every AI coding agent today is a brilliant intern with amnesia." | Good — validates AI capability ("brilliant") while naming the gap ("amnesia"). **Keep as-is.** | No change needed. The "brilliant intern" metaphor is constructive, not dismissive. |
| Problem evidence | "AI co-authored code contains 1.7× more major issues..." | Factual. Not anti-AI — it's citing research. **Keep as-is.** | No change needed. Data is neutral. |
| OSS hero | "Open source is under siege." | Military framing sounds alarmist | **"Open source maintainers need backup."** — same urgency, constructive framing. "Backup" implies help, not warfare. |
| OSS crisis cards | Card titles name projects defensively (shut down, bans, auto-close) | Factual but the 4-card grid feels like a wall of negativity | **Add a framing line above the cards:** "These projects didn't reject AI. They rejected unsupervised AI." — reframes the crisis as a supervision problem, not an AI problem |
| OSS transition line | "It doesn't have to be this way." | Slightly passive-aggressive | **"There's a better way to work with AI contributors."** — forward-looking, solution-oriented |
| OSS Section 3 headline | "unerr is the architectural immune system your project has been missing." | Good — "immune system" is protective, not aggressive. **Keep as-is.** | No change needed. Immune systems don't fight the body; they protect it. |
| OSS Final CTA | "Your maintainers are drowning." | Dramatic, potentially guilt-tripping | **"Your project deserves an architectural immune system."** — empowering, not shaming |
| Forbidden list entry | `"AI-powered" in the headline` — "Every tool says this. It's noise." | The reasoning is fine but could be interpreted as anti-AI branding | **Clarify reasoning:** "Every tool says this. It's noise. We're not anti-AI — we USE AI (for justification, PR review, embeddings). We just don't lead with the mechanism." |

### The Voice Test

Read every piece of copy aloud and ask: "Would a developer who loves Cursor and uses Copilot daily feel attacked by this?" If yes, rewrite. unerr's audience is developers who are ALREADY using AI agents — they want those agents to be better, not gone. We're the infrastructure that makes AI reliable, not the backlash that wants AI to stop.

### Approved Framings

| Framing | Example | Why |
|---------|---------|-----|
| **"AI + supervision"** | "AI agents with architectural guardrails" | Positions AI as the primary, unerr as the supporting cast |
| **"Speed + safety"** | "Code as fast as your AI can type. unerr will catch the mistakes." | Validates speed first, then adds safety |
| **"Context, not restriction"** | "Your agents aren't wrong — they're uninformed. Give them the graph." | Blames the context gap, not the AI |
| **"The missing backend"** | "The missing backend for AI coding agents" | Frames unerr as infrastructure that AI needs, not a check on AI |
| **"Supervised engineers"** | "Turning brilliant interns into supervised engineers" | Growth metaphor — interns become engineers with guidance |

### Rejected Framings

| Framing | Example | Why rejected |
|---------|---------|-------------|
| **"AI is the problem"** | "Stop AI from destroying your codebase" | Alienates our users who love AI tools |
| **"Replacement"** | "Replace your AI tools with proper engineering" | We don't replace — we augment |
| **"Fear-based"** | "Before it's too late..." | Scarcity/urgency marketing is cheap and erodes developer trust |
| **"Anti-vibe"** | "Vibe coding is killing software quality" | Our users DO vibe code — we make it safe, not shameful |
| **"Gatekeeping"** | "Only let quality code through" | Implies restriction. We prefer "give agents better context" |

---

## Appendix J: Product Design Replication Guide

**Every product snippet in a bento tile, demo section, or mockup MUST replicate the actual dashboard's visual patterns.** This appendix maps landing page elements to their source components.

### Status Badge Pattern (Universal)

All status indicators across the product follow one pattern: `bg-{color}/10 text-{color} border-{color}/20`. Never deviate.

```
Completed/Safe:  bg-emerald-500/10 text-emerald-400 border-emerald-500/20
Active/Running:  bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20
Warning:         bg-yellow-500/10 text-yellow-400 border-yellow-500/20
Error/Failed:    bg-red-500/10 text-red-400 border-red-500/20
Pending:         bg-blue-500/10 text-blue-400 border-blue-500/20
```

Source: `components/repo/review-status-badge.tsx`, `components/dashboard/repo-card.tsx`

### Health Grade Display

The grade letter uses the 5-point semantic color scale, never `text-accent`:

```
Grade A:  text-[var(--color-grade-a)]  → #34D399 (Emerald-400)
Grade B:  text-[var(--color-grade-b)]  → #2DD4BF (Teal-400)
Grade C:  text-[var(--color-grade-c)]  → #FBBF24 (Amber-400)
Grade D:  text-[var(--color-grade-d)]  → #FB923C (Orange-400)
Grade F:  text-[var(--color-grade-f)]  → #F87171 (Red-400)
```

Layout: `font-grotesk text-2xl font-bold` for the letter, `text-sm text-muted-foreground` for the score.

Source: `styles/tailwind.css` health grade tokens

### Console/Terminal Style

All code blocks and terminal output in mockups use the console panel style:

```
Container: bg-[#08080D] rounded-xl border border-border
Font:      font-mono text-[11px] leading-relaxed
Padding:   p-4 (compact) or p-6 (spacious)

Text colors inside console:
  Command:    text-foreground
  Output:     text-muted-foreground (t-tertiary: rgba(250,250,250,0.45))
  Success:    text-emerald-400
  Error:      text-destructive/80
  Accent:     text-electric-cyan

Light mode: Terminal Exception — stays dark (#1E1E2E bg)
```

Source: `components/repo/pipeline-log-viewer.tsx`

### Stat Card Pattern

Metric cards on the landing page (bento tiles, metrics bar) follow the dashboard stat card pattern:

```
Card:     glass-card border-border
Icon:     h-4 w-4 text-electric-cyan opacity-70
Label:    text-xs font-medium text-foreground uppercase tracking-wider
Value:    font-grotesk text-2xl font-bold text-electric-cyan tracking-tight
Hover:    shadow-glow-cyan (box-shadow: 0 0 20px rgba(34,211,238,0.2))
```

Source: `components/dashboard/overview-stats.tsx`

### Pipeline Timeline

Timeline/stepper visuals in the Rewind tile must match:

```
Completed step:  border-emerald-500 bg-emerald-500 text-background (+ checkmark icon)
Active step:     border-electric-cyan bg-electric-cyan/10 text-electric-cyan
                 shadow-[0_0_8px_rgba(0,229,255,0.25)]
Pending step:    border-border bg-background text-muted-foreground
Connector:       bg-emerald-500/50 (completed) or bg-border (pending)
```

Source: `components/repo/pipeline-stepper.tsx`

### Hover & Glow Effects

```
Card hover glow (cyan):    shadow-glow-cyan → box-shadow: 0 0 20px rgba(34,211,238,0.2)
Card hover glow (violet):  shadow-glow-accent → box-shadow: 0 0 20px rgba(139,92,246,0.2)
Success pulse:             glow-success → box-shadow: 0 0 30px rgba(52,211,153,0.2) + pulse animation
Live indicator:            bg-electric-cyan shadow-[0_0_6px_rgba(0,229,255,0.5)] animate-pulse
```

Source: `styles/tailwind.css` glow utilities

### Key Rule: Cyan vs Violet in Product Snippets

| Element | Color | Token | Why |
|---------|-------|-------|-----|
| CTA buttons | Violet | `bg-accent-fade` | Brand action — interactive |
| Focus rings | Violet | `ring-accent` | Accessibility |
| Live data / running state | Cyan | `text-electric-cyan` | Functional — temporal, active process |
| Stat card values | Cyan | `text-electric-cyan` | Dashboard convention — data emphasis |
| Health grades | Semantic scale | `var(--color-grade-*)` | 5-point scale, never violet or cyan |
| Status badges | Semantic | `emerald/yellow/red` | Per status badge pattern above |

**In bento tiles:** The Knowledge Graph, MCP Server, and Rewind tiles use **cyan** accents (they show live/connected states). The Health Audit tile uses **grade colors**. The PR Review tile uses **emerald** (completed/safe status). The Rules Engine tile uses **destructive** (violations). NONE of the bento tile interiors use violet — violet lives on the tile BORDER hover only.

---

---

## Implementation Architecture

### Build Strategy Decisions

Three architectural decisions informed by 2026 research shaped the entire implementation:

**SVG Substrate Visualization, Not R3F.** React Three Fiber was considered for the hero knowledge graph animation but rejected — R3F adds ~140-180KB gzipped, and dynamic import with `ssr: false` delays the hero visual by 1-2s after paint. The knowledge graph is a 2D node-edge diagram with gentle animation; it does not require 3D perspective, lighting, or depth. The implementation uses SVG + Motion: nodes are `<circle>` elements animated with `motion.circle`, edges are `<path>` elements with SVG `stroke-dashoffset` animation. Total additional cost: ~0KB (Motion is already a dependency). Upgrade path: add R3F behind `dynamic(() => import('./SubstrateScene'), { ssr: false })` with a static SVG fallback for LCP.

**CSS `animation-timeline` + Motion Hybrid.** As of March 2026, CSS `animation-timeline: view()` has full support in Chrome/Edge/Safari but remains behind a flag in Firefox (~3% of dev tool traffic). The page uses CSS `animation-timeline: view()` for simple scroll reveals (bento tiles, section fade-ins) and Motion `whileInView` for spring physics, stagger sequences, and interruptible animations (hero word reveal, terminal typing, count-up numbers). Both animate only `transform` and `opacity` — compositor-thread only, 60fps guaranteed. Firefox users see content immediately without animation — acceptable graceful degradation.

**Shiki Server-Rendered, Zero Client JS for Code.** All code blocks (terminal animation static fallback, bento tile snippets, demo section) are server-rendered via Shiki in React Server Components. The typing animation on desktop wraps pre-highlighted Shiki output in Motion spans — highlighting is server-rendered, only the reveal is client-side. Setup: singleton `createHighlighter()` in `lib/shiki.ts`, themes `vitesse-dark`/`vitesse-light`, languages `typescript`/`bash`/`json`.

### Component Library Extensions

Beyond the core dependencies (Motion, Shiki), the landing page added 7 copy-paste Magic UI components in `components/ui/magic/` — zero npm dependencies, built with Framer Motion + Tailwind:

| Component | Purpose |
|-----------|---------|
| `animated-grid.tsx` | SVG grid with randomly illuminating cells — hero and CTA backgrounds |
| `spotlight.tsx` | Large Gaussian-blurred SVG spotlight sweep — hero entrance |
| `border-beam.tsx` | Rotating conic-gradient animated card borders — knowledge graph, OSS teaser, pricing |
| `magic-card.tsx` | Mouse-following radial gradient spotlight on hover — all bento tiles |
| `number-ticker.tsx` | Spring-physics animated counter — metrics bar (replaces basic CountUp) |
| `dot-pattern.tsx` | SVG dot background pattern |
| `ripple.tsx` | Expanding concentric ring animation |

Keyframe animations added to `styles/tailwind.css`: `border-beam-spin` (rotating conic gradient for BorderBeam), `spotlight` (entrance animation for Spotlight), `ripple` (expanding ring for Ripple).

Brand identity was consolidated by replacing all text-based "unerr" logos with official SVG brand assets (`icon.svg`, `unerr-wordmark.svg`) via the `BrandLogo` component (`brand-logo.tsx`). The full variant renders icon + wordmark side by side with size-specific dimensions (sm: 22px icon, md: 28px, lg: 32px). Plain `<img>` tags are used instead of `next/image` to avoid content-hash URL issues with `proxy.ts` interception.

### Visual Architecture Decisions

**Terminal Exception Scope.** `bg-[#08080D]` is permitted in components that render terminal/code UI (terminal-animation, bento-grid code blocks, badge-preview markdown panel). These components visually communicate "this is code" and must maintain dark background regardless of future light mode. macOS traffic light dots (`#FF5F57`, `#FEBC2E`, `#28C840`) are similarly exempt — they are universal OS chrome colors.

**Badge SVG as Static Asset.** The health badge in `badge-preview.tsx` uses hardcoded hex fills because it previews what the actual GitHub README badge looks like. It renders outside theme context intentionally.

**Marketing CTA Button Sizing.** Hero and Final CTA buttons use `h-11` (larger than dashboard `h-8` standard) for visual prominence on marketing pages. This is intentional for conversion optimization and does not apply to dashboard UI.

**Decorative Gradient Exception.** `rgba(250,250,250,0.03)` and `rgba(139,92,246,0.12)` in hero-section, final-cta, and oss-teaser are decorative CSS gradients in `backgroundImage` inline styles; CSS custom properties cannot be referenced inside `linear-gradient()` function syntax.

### Infrastructure Pattern: `proxy.ts` Static Asset Bypass

The Next.js 16 `proxy.ts` (replacement for `middleware.ts`) runs on **every** matched request. The `config.matcher` regex was intended to exclude static files, but path-to-regexp anchors inside negative lookaheads do not work as expected in the Next.js path matcher, and `next/image` with `unoptimized` adds content hashes to filenames that further confuse matching.

The robust solution is a **function-level early return** as the **first check** in `proxy.ts`:

```typescript
if (/\.(svg|png|jpg|jpeg|gif|webp|ico|woff2?|json|css|js)$/i.test(path)) {
  return NextResponse.next()
}
```

This was discovered when logo SVGs were being intercepted and redirected to `/login`, rendering broken image icons in the header. Explicit directory skips (`/lottie/`, `/fonts/`) were also added.

### Strategy Alignment

All 25 core strategy elements from the five GTM documents (`FIRST_WEEK_WOW.md`, `OSS_VIRAL_ADOPTION_STRATEGY.md`, `GROWTH_STRATEGY_1M_ARR.md`, `ZERO_TO_ONE_GROWTH_PLAYBOOK.md`, `ADJACENT_OPPORTUNITIES.md`) were cross-referenced against the implementation. Five mismatches were corrected:

1. **CLI package name**: `npx unerr setup` → `npx @autorail/unerr setup` (actual npm package name)
2. **Audit form routing**: Redirect changed from `/login?audit=...` to `/audit/{owner}/{repo}` (public route, no login wall). Added `/audit` to `proxy.ts` publicPaths and `robots.ts` allow list.
3. **Startup tier seat minimum**: Added "3–20 seats" label (prevents 1-seat purchase at $15 undercutting Pro at $20). Updated pricing-preview fine print to "Teams from $45/mo (3 seats × $15)".
4. **Trial time limit**: Added "Trial *" header label + footnote "* Trial includes full Pro access for 7 days. One repository." to comparison table.
5. **Badge URL path**: Aligned to `unerr.dev/badge/{org}/{repo}` (removed extra `/health/` segment to match strategy docs).

### Cross-Cutting Implementation Details

**Analytics (PostHog).** Cookieless mode (`persistence: "memory"`) for GDPR compliance. `capture_pageview: false` for Next.js App Router (manual page view tracking on route change). Events tracked: `page_view`, `cta_click` (with `location`/`variant` tags), `scroll_depth` (25/50/75/90% thresholds), `audit_form_submit`, `pricing_toggle`, `code_copy`, `docs_click`. Provider lazy-loaded in marketing layout only — not in dashboard.

**Analytics (Plausible).** Privacy-compliant traffic analytics via `<Script data-domain="unerr.dev" src="https://plausible.io/js/script.js" strategy="afterInteractive" />`. Automatic 1% granularity scroll depth tracking. No cookies, GDPR-compliant.

**SEO.** Per-page `metadata` exports via Next.js Metadata API. OG image `public/og-image.png` (1200×630). Twitter card `summary_large_image`. JSON-LD: `SoftwareApplication` schema on homepage, `Product` schema on pricing. Canonical URLs. `robots.ts` allows marketing pages, blocks dashboard. `sitemap.ts` uses `process.env.NEXT_PUBLIC_APP_URL ?? "https://unerr.dev"` for staging/preview compatibility.

**Accessibility (WCAG 2.1 AA).** All text meets 4.5:1 contrast (body) / 3:1 (large text). Violet-500 on Void Black = 5.2:1 (AA pass). All interactive elements have visible focus rings (`ring-accent`). `prefers-reduced-motion` disables all theatrical animation. Tab order follows visual reading order. Decorative elements `aria-hidden`. Skip-to-content link on every page. Pricing table uses proper `<th scope>` attributes. Color never sole indicator — always paired with text/icon. Form inputs have associated `<label>` elements. Billing toggle buttons have `aria-pressed` state. Copy button uses dynamic `aria-label` for state feedback.

**Scroll Reveal CSS.** Zero-JS scroll entrance animation via CSS `animation-timeline`:

```css
.scroll-reveal {
  animation: fade-up 0.6s ease both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@supports not (animation-timeline: view()) {
  .scroll-reveal { animation: none; }
}
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal { animation: none; }
}
```

**Gradient Text Fix.** `background-clip: text` does not propagate through `inline-block` children. The `text-gradient` class must be applied to each individual word `<span>`, not a parent wrapper. The `text-gradient` utility in `styles/tailwind.css` uses hardcoded hex colors with both `-webkit-background-clip: text` AND `-webkit-text-fill-color: transparent` for cross-browser support (Tailwind v4's `bg-clip-text text-transparent` alone does not emit the `-webkit-text-fill-color` rule required by Safari/Chrome).

### Deliberately Cut from V1

| Feature | Why | When to add |
|---------|-----|------------|
| React Three Fiber 3D hero | +140-180KB gzipped. SVG achieves same storytelling at zero additional bundle cost. | Post-launch, if conversion data shows hero engagement is low. |
| Interactive demo section | High complexity, medium conversion impact. Better to link to live dashboard with demo account. | Post-launch, when we have a public demo environment. |
| Testimonial carousel | Zero testimonials at launch. A blank carousel is worse than no carousel. | When we have 3+ real, named testimonials. |
| Blog / Changelog pages | Maintenance burden > value at pre-launch. Founder posts on X/HN drive more traffic. | When we have 5+ publishable posts and a content cadence. |
| ~~Dark/light mode toggle~~ | **Implemented (Phase 3).** Dashboard has dark/light/system toggle. Marketing remains dark-only via `ForceMarketingTheme`. | — |
| Newsletter signup | No content pipeline to feed. Empty newsletters destroy trust. | When we have 4+ weeks of queued content. |
| Video hero / autoplay | Performance killer. Terminal typing animation achieves the same "live demo" effect at 0KB media cost. | Only for a produced product video (>60s, professional). |

---

## Design Evolution

### Phase 1: Foundation to High-Fidelity (2026-03-14)

The initial implementation built all 4 pages across 5 vertical slices (foundation shell → homepage sections → motion/animation → OSS Guardian portal → pricing + analytics + SEO). The result was functionally complete but visually basic — flat backgrounds, simple fade-ins, stock typography.

Four successive refinement passes elevated the page to professional standards:

**Typography and Atmosphere.** Hero word spacing was fixed (`inline-block` eats trailing whitespace — solved with `mr-[0.28em]`). Line height tightened from default to `leading-[1.08]`. The "Now in Public Beta" badge was removed (Linear doesn't use badges — straight into headline). 64px grid lines at 0.03 opacity and violet radial glows were layered behind bento, pricing, and how-it-works sections, creating "atmospheric depth" rather than flat black backgrounds.

**Shimmer CTAs and Spring Physics.** Primary CTA buttons gained a shimmer hover effect (`shimmer-button.tsx`) with `rounded-full` pill shape and subtle violet glow (`shadow-[0_0_24px_rgba(139,92,246,0.25)]`). Metrics bar switched from basic CountUp to `NumberTicker` with spring physics (`useSpring`). Bento tiles gained `MagicCard` mouse-following spotlight and `whileHover={{ y: -4 }}` vertical lift.

**Linear-Style Header.** Replaced Framer Motion inline `useTransform` styles with cleaner `useMotionValueEvent` + boolean `scrolled` state. Nav height increased to `h-16`. CTA changed to `rounded-full bg-foreground text-background` (white pill on dark). Added `AnimatePresence` for mobile menu.

**Animated Borders.** `BorderBeam` (rotating conic-gradient) added to hero viz, knowledge graph tile, OSS teaser card, and pricing preview card. Durations tuned to 12-14s range (18-20s felt frozen).

**Theme Isolation.** Marketing pages force Substrate Dark aesthetic via `ForceMarketingTheme` (direct DOM manipulation, no localStorage persistence). Dashboard users toggle between dark/light/system themes independently — see Phase 3 below.

**GSAP Integration.** Added GSAP for scroll-pinned sections (How It Works terminal panel pins while steps scroll alongside). Hero word reveal uses GSAP `Timeline` for cinematic sequencing with `blur(10px) → blur(0px)` filter transition.

### Phase 2: Surgical Design Audit — Linear/Cursor Fidelity (2026-03-15)

The second phase was a full surgical audit of every marketing component against Linear.app and Cursor.com fidelity standards. The goal: move from "component blocks" to "layered environments." All 8 audit dimensions were implemented (47/48 items verified against source code).

#### Foundational Changes

The hero was restructured from centered symmetric layout to an **asymmetric 38/62 split** — headline + CTAs on the left (`lg:col-span-5`), interactive product preview on the right (`lg:col-span-7`). The product preview (`hero-product-preview.tsx`) is a tabbed dashboard simulation (Graph/Health/Rules) backed by pre-computed data for 3 OSS repos in `preview-data.ts`. Unknown repos entered in the URL input become a signup CTA. The `Hero3DScene` (Three.js, ~200KB) was replaced with 3-layer CSS atmospheric depth (dot grid, line grid, radial glow). Hero copy was repositioned from "Code as fast as your AI can type / unerr will catch the mistakes" to "AI agents write the code / unerr enforces the architecture" — infrastructure positioning, not linting.

#### Atmospheric Substrate — "From Flat Black to Layered Void"

The landing page creates a "one continuous void" illusion through layered atmospheric depth rather than per-section backgrounds.

**Page-level grid overlay** (`app/(marketing)/layout.tsx`): A `pointer-events-none fixed inset-0` element with 60px CSS grid lines at 0.03 opacity, masked with `radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)`. This spans the entire page, stitching sections into a single environment.

**Hero 3-depth layering** (`hero-section.tsx`): Three stacked `absolute inset-0` layers — (1) far-field dot grid at 24px/0.025 opacity, (2) mid-field structural grid at 60px/0.05 opacity, (3) near-field dual radial glows (violet 0.10 centered on product preview at 65% horizontal, secondary at 25%). A bottom bleed `mask-image` gradient fades the hero into the metrics bar.

**Section atmospheric treatments** increase in intensity toward the bottom of the page ("convergence" effect): metrics bar violet surface lift → problem section glow at 0.03 → how-it-works at 0.04 → bento dual glow (violet 0.07 + cyan 0.03) → OSS teaser asymmetric 135° linear → pricing at 0.05 → final CTA strongest at 0.12 with `AnimatedGridPattern`.

#### Typographic Authority

**Hero H1**: `tracking-[-0.03em]` (tighter than Tailwind's default `-0.025em`), `leading-[1.08]`. Two text treatments coexist per-word: non-gradient words use `text-lit` (top-to-bottom `#FAFAFA → rgba(250,250,250,0.68)` with `background-clip: text` — "lighting from above" depth, Linear's signature), gradient accent words use `text-gradient` (widened to `#8B5CF6 → #6D28D9` for richer hue range). Both utilities have light-mode variants in `styles/tailwind.css`.

**Two-tier H2 hierarchy**: Primary H2s (Problem, Bento, Final CTA) use `text-3xl sm:text-4xl tracking-[-0.02em]` — "statement" headings. Secondary H2s (How It Works, Pricing, OSS Teaser) use `text-2xl sm:text-3xl` — supportive, not competing.

#### Interactive Substrate Hero

The hero product preview is a full interactive dashboard simulation with 3 tabs and a repo switcher dropdown. **Window frame**: 3D perspective tilt (`perspective(1200px) rotateY(-1.5deg)`) + deep composite shadow. macOS traffic light dots. **Graph animation**: edges draw via `pathLength: 0→1` (0.5s, 0.08s stagger), then nodes scale from `r=0` (0.4s, elastic ease). On node hover: connected edges pulse, non-connected dim. **Health grade ring**: SVG `stroke-dashoffset` animation to score percentage with glow flash, grade letter springs `scale: 0.5→1`. **Repo switcher**: full keyboard navigation (ArrowUp/Down, Enter, Escape). **Mobile**: sidebar hidden, grade badge with counts shown inline above tabs.

#### Bento "Product Abstracts"

All 6 tiles follow the "60% rule" — visuals fill ≥60% of tile height. Padding: `p-5 pt-4`. Tiles wrapped in `MagicCard` with `hover:border-accent/30`.

- **Knowledge Graph** (2-col): SVG 480×180. Hover: random edge pulse + traveling dot. Central node breathes `scale: [1, 1.03, 1]`.
- **MCP Server**: 2×2 IDE badges with staggered entrance. Hover lift. Green "Live" dots pulse.
- **Health Audit**: Inline SVG grade ring (`strokeDashoffset` on `whileInView`) + spring-in "A" + 3 mini bars with `sr-only` labels.
- **PR Review** (2-col): `bg-background`, `text-[13px]`, line numbers, `ShieldCheck` + "Safe to merge".
- **Rules Engine** (2-col): Manual JSON coloring (`text-accent/70` keys, `text-success/80` values), `bg-background`. "3 violations found" badge.
- **Prompt Rewind**: 3 entries (complete/current/pending). Hover: dot glow cycles violet, "Rewind" badge border brightens.

#### Motion Orchestration

Dual animation engine: GSAP for scroll choreography, Framer Motion for UI interactions. They never animate the same element.

- **Bento batch entrance**: GSAP `ScrollTrigger.batch()` replaces individual `whileInView`. 0.08s stagger in reading order, `power2.out`, `once: true`.
- **How It Works mobile**: Each step includes inline code snippets (`lg:hidden`) showing relevant terminal output.
- **Metrics stagger**: `NumberTicker` delays: 0s, 0.15s, 0.3s, 0.45s.
- **Problem confrontation**: "Without" slides from `x: -40`, "With" from `x: 40`.
- **Scroll progress bar**: 2px accent bar at `top-14`, `scaleX` via `useScroll().scrollYProgress` through spring.

#### Design System Compliance

All Forbidden Five anti-patterns eliminated. 4 unused components deleted (`hero-console.tsx`, `hero-3d-scene.tsx`, `substrate-viz.tsx`, `health-grade-lottie.tsx` + `public/lottie/grade-a.json`), removing Three.js and Lottie from the critical path. Fixed `bg-[#08080D]` → `bg-background` in bento-grid and badge-preview, `bg-[#0D0D12]` → `bg-background` in how-it-works, removed `backdrop-blur-sm` from pricing-preview. Documented exceptions: macOS traffic light dots and `backdrop-blur-xl` in site-header.

#### Copywriting: Infrastructure, Not Linting

All copy positions unerr as **infrastructure** — "AI agents write the code / unerr enforces the architecture" (hero), "The missing backend for AI coding agents" (subtitle), "What your AI agents are missing" (bento, changed from "What the Substrate Sees"), "Your AI agents need architecture. Give them unerr." (final CTA, changed from "deserve better context"), "Infrastructure-grade. Developer-priced." (pricing).

#### Performance and Accessibility

Bundle: 4 unused components + `public/lottie/` deleted. BorderBeam durations: 12-14s. Touch targets: `h-10 w-10` (40px) on mobile menu buttons, `h-11` (44px) on CTAs. Color-only indicators fixed with icon + text alongside color. Mobile hero: sidebar hidden, grade badge inline. All status indicators in bento tiles include `sr-only` labels.

#### Layout Alignment

All outer section containers standardized to `max-w-7xl` (1280px): `site-header.tsx`, `site-footer.tsx`, `metrics-bar.tsx`, `problem-section.tsx`, `bento-grid.tsx`, `how-it-works.tsx`, `pricing-preview.tsx`, `pricing/pricing-cards.tsx`, `pricing/comparison-table.tsx`, `oss/crisis-cards.tsx`. Header nav uses `max-w-7xl px-0` to push logo/CTA flush against the content rail. Intentionally narrower centered content: `oss-teaser.tsx` (`max-w-3xl`), `final-cta.tsx` (`max-w-2xl`), `faq-accordion.tsx` (`max-w-3xl`), `audit-form.tsx` (`max-w-xl`), etc.

#### Remaining

Rules Engine tile uses manual JSON syntax coloring instead of Shiki server-rendered code block. Low priority — visual result is correct, library preference only.

### Phase 3: Route Separation & Theme Isolation (2026-03-15)

Authenticated users hitting `/` were seeing the marketing landing page instead of their dashboard. The marketing dark theme was also hardcoded on `<html>`, preventing dashboard users from choosing their own theme. Both problems were solved with four coordinated changes.

#### Route Separation: `proxy.ts` Authenticated Redirect

The root cause was execution order in `proxy.ts` — the `/` path was handled before extracting the session token. The fix reorders these: session token extraction now happens **first**, then the `/` exact-match check conditionally redirects authenticated users to `/repos` (the dashboard entry point). Unauthenticated users continue to see the marketing landing page.

```typescript
// proxy.ts — session token extracted BEFORE route checks
const sessionToken =
  request.cookies.get("better-auth.session_token")?.value ??
  request.cookies.get("__Secure-better-auth.session_token")?.value

if (path === "/") {
  if (sessionToken) {
    return NextResponse.redirect(new URL("/repos", request.url))
  }
  return NextResponse.next()
}
```

This is a proxy-level redirect, not a client-side check — no flash of marketing content for authenticated users.

#### Theme Isolation Architecture

The theme system was split into two independent scopes:

**Marketing (always dark).** `ForceMarketingTheme` in `app/(marketing)/providers.tsx` forces `dark` class on `<html>` via direct DOM manipulation on every render (`useEffect` with no dependency array). Critically, it does **not** call `setTheme()` from next-themes — that would persist to `localStorage` and override the user's dashboard preference. When the user navigates away from marketing pages, `ForceMarketingTheme` unmounts and next-themes re-applies the stored preference automatically.

```typescript
// app/(marketing)/providers.tsx
function ForceMarketingTheme() {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add("dark")
    html.classList.remove("light")
    html.style.colorScheme = "dark"
  })
  return null
}
```

**Dashboard (user-controlled, system-aware).** Three changes enable full theme control:

1. **Removed hardcoded `dark` from `<html>`** in `app/layout.tsx` — next-themes now has sole control over the class.
2. **Enabled `enableSystem`** in `ThemeProvider` (`components/providers/index.tsx`) — OS preference detection via `prefers-color-scheme`. `defaultTheme` remains `"dark"` so first-time visitors get Substrate Dark.
3. **Added System theme toggle** in `user-profile-menu.tsx` — a third button (Monitor icon) alongside existing Light (Sun) and Dark (Moon) buttons in the dropdown theme switcher.

**Why this works without leaking:** Tailwind CSS v4's theme architecture is dark-by-default — the `@theme` block defines dark tokens, and the `.light` class overrides them. There is no `.dark` CSS class needed for dark mode to render correctly. This means removing `dark` from `<html>` still produces the correct dark appearance, and next-themes only needs to add/remove the `light` class.

### Phase 4: Surgical Design Audit — "Blocks to Environments" (2026-03-15)

The page is functionally complete and copy positioning is strong (infrastructure, not linting). But compared to Linear.app, sections still feel like **"component blocks on a dark background"** rather than **"one layered environment."** Three systemic gaps: (1) section seams are visible — only the hero has a bottom-fade mask, (2) H2 headings lack the `text-lit` atmospheric treatment the H1 has, (3) the metrics bar uses hard border lines instead of floating in the void.

**Status key:** `[ ]` = not started, `[~]` = in progress, `[x]` = done

#### Tier 1 — Highest Impact (Blocks → Environment)

- [x] **4.1 — Section bottom transitions.** Added `h-24` absolute-positioned bottom fade divs with `linear-gradient(to top, var(--color-background), transparent)` to `problem-section.tsx`, `how-it-works.tsx`, `bento-grid.tsx`, `oss-teaser.tsx`, `pricing-preview.tsx`. Same pattern as hero's `h-40` fade. Dissolves the bottom of each section into the void, making sections flow into each other instead of ending abruptly.

- [x] **4.2 — H2 text-lit treatment.** Applied `text-lit` class (Linear's "lit from above" gradient) to primary H2s in `problem-section.tsx`, `bento-grid.tsx`, `final-cta.tsx`. Secondary H2s (How It Works, Pricing, OSS Teaser) remain `text-foreground`, creating the two-tier heading hierarchy.

- [x] **4.3 — H2 gradient accent words.** Added `<span className="text-gradient">` to one key word per primary H2: "amnesia" in the problem heading, "missing" in the bento heading, "architecture" in the final CTA heading.

- [x] **4.4 — Hero product preview window depth.** Updated shadow to `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 120px rgba(139,92,246,0.08), 0 0 0 1px rgba(139,92,246,0.06)` and added `translateZ(20px)` to the transform. The deeper shadow + 1px bezel glow creates a "floating monitor" effect instead of a flat card. File: `hero-product-preview.tsx`.

#### Tier 2 — Visual Polish (Good → Linear-Tier)

- [x] **4.5 — Metrics bar floating.** Removed the top and bottom `h-px` border line divs. Increased violet surface tint from 0.015 to 0.025. Added `mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)` (with `-webkit-` prefix) on the `<section>` itself so the entire metrics bar fades in and out of the void — no hard borders. File: `metrics-bar.tsx`.

- [x] **4.6 — Bento-to-OSS section connector.** Added a `h-20` connector element between BentoGrid and OssTeaser in `app/(marketing)/page.tsx`. Contains a centered `w-px` vertical line at `bg-border/20` and a radial violet glow at `rgba(139,92,246,0.04)`. Creates a visual "energy thread" linking the two sections.

- [x] **4.7 — Page-level grid mask extension.** Changed mask from `radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)` to `radial-gradient(ellipse at 50% 30%, black 0%, transparent 85%)` in `app/(marketing)/layout.tsx`. Grid now extends further down the page, covering sections between bento and final CTA.

- [x] **4.8 — Knowledge Graph tile multi-dot animation.** Added 2 additional pulse edges (Auth→API, Pay→DB) and 2 additional traveling dots with staggered delays (0.3s, 0.6s) alongside the original. Creates "data flowing through multiple graph paths" on hover. File: `bento-grid.tsx`.

- [x] **4.9 — Health Audit tile diagnostic cascade.** Implemented 4-phase coordinated delay sequence: ring fills (0.3–1.1s) → grade letter springs in (0.8s) → score "92/100" fades up (1.0s) → audit bars fill in sequence (1.3s, 1.4s, 1.5s with 0.1s stagger). Score span converted from static `<span>` to `<motion.span>` with `initial`/`whileInView`. File: `bento-grid.tsx`.

- [x] **4.10 — PR Review tile streaming diff.** Refactored diff from static HTML to a `diffLines` data array rendered through `diffLineVariants` with per-line stagger (0.08s). "Safe to merge" badge fades in at 0.7s with a `scale: 0.9→1` spring and a green glow pulse (`boxShadow` keyframe animation at 0.8s). Summary text fades in at 0.9s. File: `bento-grid.tsx`.

- [x] **4.11 — Problem section scroll-driven entrance.** Replaced Framer Motion `slideFromLeft`/`slideFromRight` with GSAP ScrollTrigger. "Without" card triggers at `bottom-=80` (enters first as reader scrolls), "With" card triggers at `bottom-=40` (enters later, ~40px of scroll difference). Both animate from `x: ±40, opacity: 0`. Creates a narrative beat — problem appears before solution. File: `problem-section.tsx`.

#### Tier 3 — Refinements

- [x] **4.12 — Subtitle opacity hierarchy.** Applied `text-muted-foreground/80` to section-level subtitles: bento grid "Six capabilities..." and final CTA "Free for 7 days...". Hero subtitle stays at full `text-muted-foreground` (most important). Card/tile descriptions remain at default. OSS teaser qualifier also gets `/80`. Files: `bento-grid.tsx`, `final-cta.tsx`, `oss-teaser.tsx`.

- [x] **4.13 — Graph tab node hover contrast.** Dropped non-connected node opacity from `0.35` to `0.2` for stronger dimming. Added `filter: drop-shadow(0 0 3px var(--color-accent))` on lit (connected) edges for glow effect. Creates a clear "data exploration spotlight" on hover. File: `hero-product-preview.tsx`.

- [x] **4.14 — Repo switcher selected state.** Added `border-l-2 border-l-accent/30 bg-accent/5` on the currently selected repo in the suggestions dropdown. Visually distinguishes the active repo from other options. File: `hero-product-preview.tsx`.

- [ ] **4.15 — Rules Engine Shiki migration.** Deferred — the Rules Engine tile lives inside `bento-grid.tsx` (`"use client"`), but Shiki requires async server-side rendering. Migrating would require extracting the tile into a separate RSC and passing pre-highlighted HTML as a prop. The manual coloring already produces correct visual results. Low priority, revisit when bento tiles are refactored.

- [x] **4.16 — OSS teaser entrance stagger.** Replaced single `fadeUp` with `staggerContainer`/`staggerChild` variants. Badge, H2, qualifier, body, and CTA link (5 elements) stagger in at 0.08s intervals. Card container animates in, then children cascade. File: `oss-teaser.tsx`.

- [x] **4.17 — Scroll progress bar glow.** Increased from `h-[2px]` to `h-[3px]` and added `shadow-[0_0_8px_rgba(139,92,246,0.4)]` for a soft violet luminance. File: `scroll-progress-bar.tsx`.

- [x] **4.18 — Metrics bar label clarity.** Changed "entities indexed per repo" to "code elements indexed per repo" — universally understood by both technical and non-technical audiences. File: `metrics-bar.tsx`.

- [x] **4.19 — Problem section quote attribution.** Changed "Analysis of 470 open-source GitHub PRs" to "Based on analysis of 470+ open-source GitHub PRs" — more defensible phrasing. File: `problem-section.tsx`.

- [x] **4.20 — OSS teaser value prop specificity.** Added one-line qualifier below H2: "Full knowledge graph + health audit for any public repository." Uses `text-muted-foreground/80` for subtitle opacity tier. File: `oss-teaser.tsx`.

#### Already at Linear Level (No Changes Needed)

| Area | Why |
|------|-----|
| Hero word reveal | GSAP blur-to-sharp per-word with `text-lit` + `text-gradient` split — matches Linear's cinematic entrance |
| Page-level grid | 60px structural grid at 0.03 with radial mask — proper atmospheric unifier |
| GSAP/FM separation | GSAP for scroll choreography, FM for interactions — never on the same element |
| Bento batch entrance | `ScrollTrigger.batch()` with 0.08s reading-order stagger — professional orchestration |
| How It Works terminal pin | GSAP ScrollTrigger pins terminal while steps scroll — high-end scroll storytelling |
| Copy positioning | All copy frames unerr as "infrastructure for AI agents" — no linter language |
| Design system compliance | Zero Forbidden Five violations. All semantic tokens. Exceptions documented |
| Convergence glow pattern | Atmospheric glow intensity 0.03 → 0.12 toward final CTA — natural visual convergence |

### Phase 5: Second Surgical Audit — "Environment to Experience" (2026-03-15)

Post-Phase-4 audit across atmospheric depth, typography/bento/copy, and motion/terminal fidelity. The page now reads as one environment (Phase 4 goal met). Phase 5 targets the remaining gaps between "polished environment" and "best-in-class experience": accessibility, section transitions at the extremes (CTA→footer), and tile-level animation parity.

**Status key:** `[ ]` = not started, `[~]` = in progress, `[x]` = done

#### Tier 1 — High Impact

- [x] **5.1 — Final CTA → Footer atmospheric bridge.** Added `h-24` bottom fade div to `final-cta.tsx` (matching all other sections). Added `relative` positioning to footer, a `h-16` top-fade div with `linear-gradient(to bottom, var(--color-background), transparent)`, and a subtle violet radial glow at `rgba(139,92,246,0.02)` covering the full footer. The CTA glow now dissolves through the bottom fade → border → top fade → subtle glow, creating a seamless atmospheric transition. Files: `final-cta.tsx`, `site-footer.tsx`.

- [x] **5.2 — `prefers-reduced-motion` for GSAP animations.** Added `window.matchMedia("(prefers-reduced-motion: reduce)").matches` check at the top of every GSAP `useEffect` in `problem-section.tsx` (card slide-in), `bento-grid.tsx` (batch entrance), and `how-it-works.tsx` (terminal pin + step fades). When reduced motion is preferred, the effect returns early — elements stay in their default (visible) state with no animation or ScrollTrigger registration. Matches the pattern already used in `hero-animation.tsx`.

- [x] **5.3 — `prefers-reduced-motion` for Framer Motion animations.** Used FM's built-in `useReducedMotion()` hook across all marketing components with entrance animations. When reduced motion is preferred, `initial` is set to `false` (no hidden state) and `variants` is set to `undefined` (no animation). Applied to: `problem-section.tsx` (H2, quote), `bento-grid.tsx` (H2, subtitle), `final-cta.tsx` (main content block), `oss-teaser.tsx` (stagger container), `pricing-preview.tsx` (H2, card). Also added reduced motion support to `NumberTicker` in `components/ui/magic/number-ticker.tsx` — skips the delay timer and uses high stiffness/damping to snap to final value immediately. Bento tile internals (hover-driven animations in Knowledge Graph, MCP, Prompt Rewind) are user-initiated and don't need reduced motion treatment.

#### Tier 2 — Visual Polish

- [x] **5.4 — How-It-Works terminal Shiki migration.** Moved terminal content to the RSC page (`app/(marketing)/page.tsx`) where `codeToHtml()` from Shiki renders the shellscript code with `github-dark-default` theme at build time. The pre-rendered HTML is passed as a `terminalHtml` prop to the client-side `HowItWorks` component, which renders it via `dangerouslySetInnerHTML` with style overrides (`[&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!text-[13px]`). Hardcoded spans kept as fallback when prop is absent. Mobile inline snippets unchanged (they use the step-specific code arrays). Files: `app/(marketing)/page.tsx`, `how-it-works.tsx`.

- [x] **5.5 — Rules Engine tile internal animation.** Refactored the static code block into a `ruleLines` data array rendered through `ruleLineVariants` with per-line stagger (0.06s delay, `x: -6 → 0` slide + fade). The "3 violations found" badge now fades in with a `scale: 0.95 → 1` transition at 0.4s delay after the code lines finish appearing. The Rules Engine tile now has the same motion parity as Knowledge Graph, Health Audit, PR Review, and MCP tiles. File: `bento-grid.tsx`.

- [x] **5.6 — Final CTA glow intensity modulation.** Reduced primary radial glow from `0.12` to `0.09` opacity and tightened the gradient from `transparent 60%` to `transparent 50%` so it concentrates at center. Secondary glow reduced from `0.06` to `0.05` with feather tightened from `50%` to `45%`. The glow still reads as the strongest on the page (convergence crescendo maintained) but no longer spikes noticeably above the surrounding atmospheric levels. File: `final-cta.tsx`.

#### Tier 3 — Refinements

- [x] **5.7 — GSAP/FM engine consistency in problem-section.** Migrated H2 heading and quote from Framer Motion (`<motion.h2>`, `<motion.p>`) to GSAP ScrollTrigger. Both now use `gsap.from()` with `scrollTrigger` — heading triggers at `bottom-=100`, quote at `bottom-=60`. Removed `framer-motion` import entirely from `problem-section.tsx`. All 4 animated elements (heading, without-card, with-card, quote) now use a single animation engine. Refs added: `headingRef`, `quoteRef`. File: `problem-section.tsx`.

- [x] **5.8 — Metrics bar masking consistency.** Documented as intentional in `metrics-bar.tsx` with an inline comment: as a full-bleed element, CSS `mask-image` on the section itself produces cleaner top+bottom fades than overlay divs which would require z-index management. No code change — documentation only. File: `metrics-bar.tsx`.

- [x] **5.9 — GSAP ScrollTrigger performance annotation.** Added `will-change: "transform, opacity"` via `gsap.set()` to all ScrollTrigger-animated elements: problem-section (4 elements via filtered ref array), bento-grid (batch tiles via combined `gsap.set`), how-it-works (step items via `gsap.set`). This hints the compositor to promote elements to their own layer before animation starts. Current ScrollTrigger instance count: 6 (problem heading + 2 cards + quote, bento batch, how-it-works pin + 3 step fades). Files: `problem-section.tsx`, `bento-grid.tsx`, `how-it-works.tsx`.

#### Already at Target Level (No Changes Needed)

| Area | Why |
|------|-----|
| Copy positioning | All copy correctly frames unerr as "infrastructure for AI agents" — no linting/bot language anywhere |
| Bento tile visual density | Tiles average ~54% visual content, meeting the 60% rule approximately. All tiles are genuine product windows |
| Hero product preview | Authentic fidelity window with real graph visualization — not a mockup |
| Typography hierarchy | `text-lit` on primary H2s, `text-gradient` accent words, `/80` subtitle tier — cohesive 3-tier system |
| Section atmospheric flow | All sections dissolve into each other via bottom fades — no visible seams between hero→problem→bento→oss→pricing→CTA |
| `text-lit` word-spacing fix | `mr-[0.28em]` workaround in hero H1 working correctly — no visible tracking issues |
| Design system compliance | Zero Forbidden Five violations maintained through Phase 4. All semantic tokens |

### Phase 6: Pricing Page — "Template to Environment" (2026-03-15)

The pricing page is structurally sound (correct tiers, clean copy, good data architecture) but visually flat compared to the landing page. Every section renders as bare content on `bg-background` with no atmospheric depth, no section transitions, no entrance motion, and no `text-lit` heading treatment. The page needs the same environmental treatment the landing page received in Phases 4–5 — without overengineering.

**Status key:** `[ ]` = not started, `[~]` = in progress, `[x]` = done

#### Tier 1 — Atmospheric Parity (Flat → Environment)

- [x] **6.1 — H1 `text-lit` treatment.** Applied `text-lit` class and `tracking-[-0.02em]` to the pricing H1 "Infrastructure-tier pricing", replacing plain `text-foreground` and `tracking-tight`. Now matches the landing page primary heading treatment. File: `pricing-cards.tsx`.

- [x] **6.2 — Section atmospheric glows.** Added `pointer-events-none absolute inset-0` radial violet glows: pricing-cards at `rgba(139,92,246,0.04)` centered at `50% 40%` with `transparent 65%`, comparison-table at `rgba(139,92,246,0.03)` centered at `50% 50%` with `transparent 70%`. Both sections now have `relative overflow-hidden` for proper glow containment. FAQ stays bare. Files: `pricing-cards.tsx`, `comparison-table.tsx`.

- [x] **6.3 — Section bottom fades.** Added `h-24` absolute bottom-fade divs with `linear-gradient(to top, var(--color-background), transparent)` to `pricing-cards.tsx` and `comparison-table.tsx`. Same pattern as every landing page section. FAQ has no bottom fade (footer's own top-fade from Phase 5 handles the transition). Files: `pricing-cards.tsx`, `comparison-table.tsx`.

- [x] **6.4 — Pro card BorderBeam.** Added `BorderBeam` (duration 13, size 200, violet gradient `#8B5CF6 → #7C3AED`) to the highlighted Pro card. Added `overflow-hidden` to the card container for beam containment. Existing `border-accent shadow-glow-accent` kept — the beam adds kinetic energy on top of the static glow. File: `pricing-cards.tsx`.

#### Tier 2 — Motion & Polish

- [x] **6.5 — Pricing cards staggered entrance.** Added GSAP `ScrollTrigger.batch()` to the 4 pricing cards (`.pricing-card` class) with 0.08s stagger, `y: 30 → 0` + `opacity: 0 → 1`. Includes `will-change: transform, opacity` via `gsap.set()` and `prefers-reduced-motion` guard (early return). Cards grid wrapped with `cardsRef`. File: `pricing-cards.tsx`.

- [x] **6.6 — Comparison table fade-up.** Added GSAP `gsap.from()` with `y: 24, opacity: 0` on the table container (`tableRef`), triggered at `bottom-=80`. Includes `will-change: transform, opacity` and `prefers-reduced-motion` guard. Converted to `"use client"` for GSAP hooks. File: `comparison-table.tsx`.

- [x] **6.7 — OSS callout BorderBeam + entrance.** Added `BorderBeam` (duration 14, size 200, violet gradient) to the callout card. Added `overflow-hidden` and `relative` for beam containment. Wrapped card in FM `motion.div` with `fadeUp` variants and `useReducedMotion` guard. Converted to `"use client"`. File: `oss-callout.tsx`.

- [x] **6.8 — FAQ staggered entrance.** Added FM `staggerContainer` (0.06s stagger) and `staggerChild` (`y: 12 → 0` fade) variants. Used Radix `asChild` on `Accordion.Root` to render as `motion.div` for stagger orchestration. Each `Accordion.Item` wrapped in `motion.div` with `staggerChild` variants. `useReducedMotion` guard disables all entrance animations. File: `faq-accordion.tsx`.

#### Already at Target Level (No Changes Needed)

| Area | Why |
|------|-----|
| Copy & positioning | "Infrastructure-tier pricing" is correct framing. Tiers are clear and defensible |
| Billing toggle UX | Clean pill toggle with annual/monthly + "Save 20%" badge — standard and effective |
| Feature comparison data | Complete 4-group matrix with correct tier differentiation |
| FAQ content | 7 questions covering all buyer objections — solid |
| Design system compliance | All semantic tokens, no Forbidden Five violations |
| OSS callout copy | "Free forever. No catch, no time limit." — strong and specific |
| Typography hierarchy | `font-grotesk` on headings, `text-sm` body — consistent with landing page |

### Phase 7: Pricing Page — "Final Polish" (2026-03-15)

Third audit pass. Page is at target level for atmospheric depth, motion, and layout. Three minor consistency/polish items remain.

**Status key:** `[ ]` = not started, `[~]` = in progress, `[x]` = done

#### Tier 1 — Consistency Fixes

- [x] **7.1 — Pro column highlight in comparison table.** Added `bg-accent/5` to the Pro column header cell and all Pro column body cells. The Pro tier now has a continuous subtle violet wash down its entire column, creating visual continuity with the violet-bordered Pro card above. File: `comparison-table.tsx`.

- [x] **7.2 — FAQ accordion border consistency.** Changed `border-border` (10% white) to `border-border-strong` (15% white) on all FAQ accordion items. Now consistent with pricing cards, billing toggle, and CTA buttons across the page. File: `faq-accordion.tsx`.

#### Tier 2 — Micro-Polish

- [ ] **7.3 — Price number animation on toggle.** Monthly↔Annual toggle snaps prices instantly with no transition. Add a subtle FM spring transition on the price value when toggling. The page already has a `NumberTicker` component that could be adapted, or use FM `key` + `initial/animate` for a simple count effect. File: `pricing-cards.tsx`.

#### Already at Target Level (No Changes Needed)

| Area | Why |
|------|-----|
| Atmospheric depth | Violet glows on pricing-cards and comparison-table, bottom fades on both, FAQ intentionally bare |
| Border system | All structural borders upgraded to `border-border-strong` (15% white). Pro card has `border-accent` + BorderBeam. OSS callout has BorderBeam |
| Motion orchestration | GSAP ScrollTrigger batch (cards), GSAP fade-up (table), FM stagger (FAQ), FM fade-up (OSS). All with reduced-motion guards |
| Typography | H1 `text-lit` + `tracking-[-0.02em]`, all headings `font-grotesk`, consistent hierarchy |
| Functional interaction | Billing toggle, FAQ accordion, all CTAs |
| Copy & positioning | Strong and specific across all sections |
| Design system compliance | All semantic tokens, no Forbidden Five violations |

### Phase 8: Landing Page — "Linear-Grade Polish" (2026-03-15)

Comparative audit against linear.app and cursor.com. The landing page has strong foundations (atmospheric depth, motion orchestration, interactive product preview, bento grid) but several consistency gaps and one structural layout opportunity remain. This phase bridges the gap between "refined SaaS template" and "Linear-grade surgical minimalism."

**Reference:** Linear's hero uses a stacked layout — centered headline above a full-width product screenshot that fills ~90% of viewport width. Below that, each feature section pairs short authoritative copy with product visuals. Every border is crisp; every heading has consistent typographic treatment.

**Status key:** `[ ]` = not started, `[~]` = in progress, `[x]` = done

#### Tier 1 — Border & Heading Consistency (landing page parity with pricing fixes)

- [x] **8.1 — Landing page `border-border/50` cleanup.** Replaced all `border-border/50` (5% white — invisible) across landing page components. Structural cards and standalone elements upgraded to `border-border-strong` (15%); internal tile elements upgraded to `border-border` (10%). Files changed:
  - `problem-section.tsx` — both "Without"/"With" card borders → `border-border-strong`
  - `how-it-works.tsx` — terminal outer, header, mobile code borders → `border-border-strong` (3 instances via replace_all)
  - `bento-grid.tsx` — PR diff block, rules code block, MCP IDE cards, verdict panel → `border-border` (5 instances via replace_all)
  - `oss-teaser.tsx` — OSS callout card border → `border-border-strong`

- [x] **8.2 — H2 `text-lit` consistency across all landing page sections.** All 6 landing page section H2s now use `text-lit` for the white-to-gray gradient treatment. Previously only 3 of 6 had it. Files changed:
  - `how-it-works.tsx` — H2 `text-foreground` → `text-lit`
  - `pricing-preview.tsx` — H2 `text-foreground` → `text-lit`
  - `oss-teaser.tsx` — H2 `text-foreground` → `text-lit`

- [x] **8.3 — Nav container padding fix.** Changed inner nav container from `px-0` to `px-6`, matching all page content sections. Logo and CTA button no longer clip against screen edges on narrow viewports. File: `site-header.tsx`.

#### Tier 2 — Hero Section Restructure (Linear-inspired stacked layout)

- [x] **8.4 — Hero layout: side-by-side → stacked → left-aligned with typographic density.** Final architecture: headline block constrained to `max-w-4xl` (896px) inside the `max-w-7xl` page container, creating a dense typographic column where line 1 fills ~76% and line 2 fills ~96% — an intentional staircase pattern. Product preview spans full `max-w-7xl` below for visual contrast. Subtitle widened from `max-w-lg` to `max-w-2xl` with responsive sizing (`text-base md:text-lg lg:text-xl`) to create 2 intentional lines instead of 3 random-wrap lines. Layer 3 atmospheric glows rebiased from `40% 35%` → `20% 28%` (toward left-aligned headline position) with intensified opacity (`0.10` → `0.12` headline glow, `0.06` → `0.08` preview glow). Files: `hero-section.tsx`, `hero-animation.tsx`, `hero-product-preview.tsx`.

- [x] **8.4b — Product preview scale-dependent fidelity.** Recursive-resized all internal elements proportional to the container growth (340px → 60vh ≈ 600px, ~1.75x). Sidebar `w-40` → `w-48`, `p-3` → `p-4`; grade `text-2xl` → `text-3xl`; all micro-text (`text-[10px]`/`text-[11px]`) → `text-xs`; entity dots `h-1.5` → `h-2`, list spacing `space-y-0.5` → `space-y-1`; tab bar `text-xs` → `text-sm`, icons `h-3` → `h-3.5`; window chrome dots `h-2.5` → `h-3`, title `text-[11px]` → `text-xs`; search icon `h-3.5` → `h-4`; health ring `h-20` → `h-28` with `items-center` vertical centering, grade `text-xl` → `text-2xl`, audit icons `h-3` → `h-3.5`, bars `h-1.5 w-14` → `h-2 w-16`; rules cards `text-xs`/`text-[10px]` → `text-sm`/`text-xs`, icons `h-3.5` → `h-4`; graph glow `0.06` → `0.10`, box shadow spread `120px` → `160px` at `0.10` opacity; tooltip `w-56` → `w-64`, `p-3` → `p-3.5`, text `text-[10px]` → `text-xs`. File: `hero-product-preview.tsx`.

- [x] **8.5 — Hero copy tightening.** Replaced 3-sentence subtitle with a single authoritative line: "The missing backend for AI coding agents — a living knowledge graph that turns every AI suggestion into architecture-safe code." File: `hero-section.tsx`.

- [x] **8.6 — Hero CTA removal + subtitle flattening.** Removed "Get Started Free" and "Protect an OSS Project" CTAs from hero entirely — the header CTA and product preview interaction are sufficient entry points. Removed `ctas` prop from `HeroAnimation` interface. Subtitle flattened from 3 random-wrap lines to 1 continuous line: removed `max-w-2xl` and `lg:text-xl`, kept `text-base md:text-lg` at full container width. Headline container `max-w-4xl` removed — each sentence fits one line at `text-6xl` on desktop. Layer 3 purple glows reduced ~65%: headline `0.12` → `0.04`, preview `0.08` → `0.03`. Product preview box-shadow violet spread reduced: `160px 0.10` → `120px 0.04`, ring `0.15` → `0.06`. Graph internal glow `0.10` → `0.04`. Files: `hero-section.tsx`, `hero-animation.tsx`, `hero-product-preview.tsx`.

#### Tier 3 — Section-Level Polish

- [x] **8.7 — Problem section card elevation.** Added subtle accent glow to the "With unerr" card: `boxShadow: "0 8px 32px -8px rgba(139,92,246,0.08), 0 0 0 1px rgba(139,92,246,0.04)"`. Creates visual hierarchy — the positive outcome card feels slightly elevated while the "Without" card stays flat. Subtle enough to not violate the purple-hue reduction. File: `problem-section.tsx`.

- [x] **8.8 — How-it-works H2 spacing.** Tightened `mb-20` (5rem) → `mb-14` (3.5rem) to match bento grid's `mt-14` gap. The original 5rem created a visual disconnect between the heading and the first step; 3.5rem maintains breathing room while keeping the section cohesive. File: `how-it-works.tsx`.

- [x] **8.9 — Footer border strength.** Footer top border upgraded from `border-border/50` (80% of 10% = 8% white — nearly invisible) to `border-border` (10% white). Now visible as a subtle structural divider without being heavy. File: `site-footer.tsx`.

- [x] **8.10 — Health view redesign: report card narrative.** Complete rewrite of HealthView to match the FIRST_WEEK_WOW product north star. Previous version was a data-dense dashboard (severity chips, confidence bar, taxonomy breakdown, grouped risk categories) — the kind of thing an engineer builds, not what drives viral PLG adoption. New version is a **shareable report card**: (1) Prominent grade badge (h-16 w-16 rounded-xl) as the dominant visual anchor, (2) score + opinionated roast tagline via `gradeRoast()`, (3) single color-coded score bar, (4) "TOP ISSUES YOUR AI WILL HIT" header — verbatim from the product narrative — with top 3 risks sorted by severity in bordered cards showing severity dot, label, "N found" badge, and plain-English detail line, (5) stats footer (entities/files/risks). Killed: severity chips, confidence bar, taxonomy breakdown, category grouping — all internal metrics that don't belong in a marketing report card. Added `detail` field to `PreviewRisk` interface with punchy one-liners per risk across all 3 repos. Added `gradeRoast()` export. Files: `hero-product-preview.tsx`, `preview-data.ts`.

- [x] **8.11 — Hero-to-preview gap increase.** Increased spacing between subtitle and product preview from `mt-16` to `mt-20` (5rem). The tighter gap made the subtitle feel crowded against the preview container. File: `hero-section.tsx`.

- [x] **8.12 — Health view drill-down: diagnosis → localization → resolution.** Added interactive expand/collapse to top issue cards. Clicking a risk card reveals affected file locations (file:line → entity in monospace) and a "Fix with AI" action button. Three interaction states per risk: (1) default — bordered card with severity dot + count badge, (2) expanded — shows `PreviewRiskLocation[]` entries and "Fix with AI" button with accent styling, (3) fixed — green border tint, severity dot turns green, label struck through, "Fixed" badge with checkmark. Fix triggers 1.8s "Analyzing with AI…" spinner before resolving. Only one risk expanded at a time. State resets on repo switch via `useEffect` on `repo.slug`. Added `PreviewRiskLocation` interface (`{file, line, entity}`) and optional `locations` field to `PreviewRisk`. Populated 2-3 realistic file locations per top-3 risk across all repos. Issues container uses `min-h-0 overflow-y-auto` to accommodate expansion without overflowing parent. Files: `hero-product-preview.tsx`, `preview-data.ts`.

- [x] **8.13 — Bento grid systemic refinement.** Addressed three density/coherence problems in the features section. (1) **Subtitle**: "Six capabilities. One knowledge graph." → "One knowledge graph that remembers what your agent forgets." — ties problem-frame title to agent-memory narrative. (2) **MCP Server tile complete visual redesign**: Replaced 4 static IDE cards (~40% density) with an MCP interaction demo showing a prompt being intercepted, context injected, and tokens saved — then compact agent compatibility tags below. Demonstrates product value instead of listing compatible IDEs. (3) **Health Audit tile**: Replaced donut ring with square grade badge (h-12 w-12 rounded-lg) matching hero health view design language. Added roast tagline. (4) **Prompt Rewind tile**: Added model + file count metadata per entry ("Claude · 4 files") — echoes FIRST_WEEK_WOW "which model, which files changed" narrative. (5) **Tile copy tightening**: Sharpened descriptions across all 6 tiles to be more specific and action-oriented. File: `bento-grid.tsx`.

#### Already at Target Level (No Changes Needed)

| Area | Why |
|------|-----|
| Interactive product preview | The HeroProductPreview with search, tabs, graph/health/rules views, repo switching, and analyzing overlay is BETTER than Linear's static screenshots. This is a genuine differentiator |
| Bento grid | Six tiles with live SVG animations, hover interactions, BorderBeam, staggered code reveals — at or above Linear's feature section quality |
| Atmospheric depth | Multi-layer hero (dot grid + line grid + radial glow), per-section glows, bottom fades, energy thread connector — comprehensive |
| Motion orchestration | GSAP ScrollTrigger (pinned terminal, batch tiles, scroll-driven cards), FM (hero word blur, stagger children, spring physics) — well-orchestrated |
| MetricsBar | Clean social proof with NumberTicker animations, mask-image fades — effective and differentiated |
| Final CTA | text-lit H2, AnimatedGridPattern, dual-glow convergence — strong closer |
| Scroll progress bar | Violet accent with glow shadow — subtle but professional |

---

## Professional Tooling & Asset Strategy (Forward-Looking)

The landing page must move beyond "marketing fluff" toward **visual precision**. The following libraries and asset systems are the standard for professional SaaS landing pages in 2026 and should be adopted incrementally as the page evolves.

### Animation & Rendering Libraries

| Library | Role | When to Use | Integration Notes |
|---------|------|-------------|-------------------|
| **GSAP (GreenSock)** | Industry-standard physics-based animation engine | Multi-stage timeline sequences, scroll-pinned sections, stagger orchestration that exceeds Framer Motion's declarative model | `npm: gsap`. Use `ScrollTrigger` plugin for scroll-linked animations. Use `SplitText` for per-character headline reveals. GSAP handles what CSS transitions and basic Framer Motion `whileInView` cannot — fine-grained easing curves, physics-based spring systems, and frame-accurate sequencing. Coexists with Framer Motion (use GSAP for hero/showcase, FM for simpler UI transitions). |
| **Three.js (WebGPU)** | Cinematic 3D rendering and interactive backgrounds | Hero background (replace AnimatedGrid with a 3D knowledge graph), interactive product demos, particle systems | Already in `package.json` via `@react-three/fiber` + `@react-three/drei`. Use R3F for React integration. Candidate use cases: (1) 3D rotating knowledge graph in hero, (2) particle field background, (3) interactive globe for "connected worldwide" narrative. Keep behind `<Suspense>` with canvas fallback for SSR. |
| **Shiki** | Precision syntax highlighting | Terminal previews, code snippets in bento tiles, any "code as visual" element | Already integrated (`terminal-code.tsx`). Server-rendered via async component — zero client JS. Use `github-dark-default` theme. Renders code exactly as professional IDEs display it. Essential for technical SaaS credibility. |
| **Theatre.js** | Visual animation director for Three.js and DOM | Choreographing complex multi-element sequences visually instead of hard-coding keyframes | `npm: @theatre/core @theatre/studio @theatre/r3f`. Use Theatre Studio in dev mode to visually design animation timelines, then export as JSON for production. Pairs with Three.js scenes and GSAP timelines. Eliminates the "guess-and-refresh" cycle of hand-coding animation values. |

### Asset Libraries for High-Fidelity Visuals

| Library / Resource | Role | When to Use | Notes |
|--------------------|------|-------------|-------|
| **Untitled UI** | World's largest Figma UI kit and design system | Design-to-code handoff, wireframing, component reference | Figma-native. Use as reference for spacing, component anatomy, and layout patterns. Does not ship code — informs our Tailwind/shadcn implementation. Optimized for SaaS builds. |
| **LottieFiles** | Lightweight vector animations (KB-sized) | Micro-interactions: success checkmarks, loading states, icon transitions, hover feedback | `npm: lottie-react`. Renders JSON-based vector animations at 60fps with negligible bundle cost. Use for: (1) health grade reveal animation, (2) success/error feedback on forms, (3) icon hover transitions in bento tiles. Do NOT use for large hero animations (use Three.js/GSAP instead). |
| **3D Icons (Iconic, etc.)** | Isolated high-quality 3D objects | Feature illustrations in bento tiles, pricing cards, empty states | Export as WebP/AVIF at 2x resolution. Color-match to violet accent (`#8B5CF6`) in one click. Keep file sizes under 50KB per asset. Use sparingly — 1-2 per section maximum to maintain the "90% neutral, 10% color" budget. |
| **Storyset by Freepik** | Customizable vector scenes | Error pages, onboarding illustrations, empty states | Export as SVG. Brand-match colors before export. Use only where product screenshots or code visuals are not available. Prefer product visuals over illustrations — Law 1: "Show the product, not the promise." |

### Adoption Roadmap

**Phase 1 (Current):** Framer Motion + Magic UI components + Shiki. Covers scroll animations, hover interactions, animated borders, and code rendering.

**Phase 2 (Next):** Add GSAP for hero section. Replace basic `whileInView` fade-ups with GSAP `ScrollTrigger`-powered pinned sequences. Add `SplitText` for per-character headline animation. Add LottieFiles for micro-interactions (health grade reveal, success states).

**Phase 3 (Future):** Add Three.js hero background. Replace the SVG `SubstrateViz` with a 3D interactive knowledge graph rendered via `@react-three/fiber`. Use Theatre.js to choreograph the camera path and node animations visually. Add WebGPU particle field as ambient background.

### Integration Rules

1. **GSAP and Framer Motion coexist.** Use GSAP for complex timelines and scroll-pinned sequences. Use Framer Motion for simple UI transitions (`whileHover`, `whileInView`, layout animations). Never animate the same element with both simultaneously.
2. **Three.js scenes must be lazy-loaded.** Wrap in `<Suspense>` with a 2D SVG fallback. Use `@react-three/drei`'s `<Preload>` for asset management. Set `frameloop="demand"` to avoid unnecessary renders.
3. **Lottie animations are UI-only.** Max 5 Lottie instances per page. Each animation JSON must be under 30KB. Prefer `lottie-react` with `autoplay={false}` + intersection observer trigger.
4. **No illustration without justification.** Every visual asset must pass Law 1: "Show the product, not the promise." If a section can show a code snippet, a data visualization, or a product screenshot instead of an illustration, use those first.
5. **Performance budget:** Total landing page JS bundle must stay under 200KB gzipped (excluding Three.js, which lazy-loads). Lighthouse Performance score must remain above 90 on mobile.

---

## Step 8.14 — Unified Pricing Section (OSS + Pro Two-Card Layout)

**Date:** 2026-03-15

### Diagnosis (Systemic Reasoning)

| Dimension | Before | Problem |
|-----------|--------|---------|
| **Density** | OssTeaser (~35%) + PricingPreview (~45%) = two half-empty sections | ~21rem padding for ~6rem content. Dead space dominates. |
| **Typographic flow** | Two separate section headers break the pricing narrative arc | Visitor sees "Free. Forever." then scrolls through padding to "Infrastructure-grade." — lost continuity. |
| **Scale fidelity** | Single centered card at `max-w-3xl` / `max-w-lg` | Cards float in void. No comparative anchor for the pricing decision. |
| **Ripple effects** | Energy thread connects bento → OssTeaser, but PricingPreview has no connector | Visual rhythm breaks between the two pricing-adjacent sections. |

### Solution: Merge into One Section

- **One section header**: "Infrastructure-grade. Developer-priced." with subtitle
- **Two-card grid** (`md:grid-cols-2`): OSS ($0/forever, left) + Pro ($20/month, right)
- **OSS card**: GitHub icon, 4 key features, "Protect Your Project" link CTA
- **Pro card**: BorderBeam accent border, 8 features in 2-col grid, ShimmerButton CTA, teams pricing note
- **Stagger animation**: Cards enter via `staggerChildren: 0.12`
- **Density**: Both cards + header fill ~75% of section area (up from ~40%)

### Files Changed

| File | Change |
|------|--------|
| `components/marketing/pricing-preview.tsx` | Rewrote as unified two-card section (OSS + Pro) |
| `app/(marketing)/page.tsx` | Removed `OssTeaser` import and component. Energy thread now connects bento → unified pricing. |
| `components/marketing/oss-teaser.tsx` | **Orphaned** — no longer imported. Can be deleted. |

### Design Decisions

1. **OSS card has no BorderBeam** — keeps it visually quieter than Pro, nudging the eye toward the paid tier
2. **Pro card uses `border-accent/20`** — consistent with the previous PricingPreview, signals "featured"
3. **OSS features are a subset** (4 of 8) — maintains the "Pro gets everything" value ladder without repeating all 8
4. **Teams pricing note integrated into Pro card footer** — eliminates the orphaned single-line that previously dangled below the CTA
5. **Section padding reduced** from `py-28` × 2 to single `py-24` — tighter vertical rhythm heading into FinalCta

---

## Step 8.15 — HowItWorks ("Zero to protected") Systemic Refinement

**Date:** 2026-03-15

### Diagnosis (Systemic Reasoning)

| Dimension | Before | Problem |
|-----------|--------|---------|
| **Typographic authority** | `text-2xl sm:text-3xl` — smallest section heading on the page | Creates a visual valley between ProblemSection (`3xl/4xl`) and BentoGrid (`3xl/4xl`). No `text-lit`. |
| **Rhythm gap** | No subtitle — heading goes straight to content | Only section on the page missing a subtitle. Breaks the heading → subtitle → content cadence. |
| **Step disconnection** | 3 isolated blocks in `gap-32` void, badge above icon above title | No timeline connector. Badge and icon are two competing attention anchors. Steps float in dead space. |
| **Terminal density** | ~55%. Bare Shiki dump, no path, no status bar | Feels like a code block, not a live connected session. |
| **Atmospheric glow** | `0.04` — weakest on the page | Section sags between Problem (`0.03` intentionally muted) and BentoGrid (`0.07`). |

### Solution

1. **Heading** → `text-3xl sm:text-4xl` + `text-lit` to match peer sections
2. **Subtitle** → "One command. Full graph. Zero config." — 3-beat rhythm
3. **Timeline rail** → Vertical `w-px bg-border/20` line through step badges (desktop only). Turns `gap-32` from dead space into intentional negative space.
4. **Step layout** → Horizontal: badge on timeline (left) + content block (right). Micro-labels added: "Step 1 — One command", "Step 2 — Automatic", "Step 3 — Always-on"
5. **Terminal chrome** → `~/project` path in title bar + bottom status bar with green dot, "MCP connected · localhost:9315", entity count
6. **Glow** → `0.04` → `0.05`

### GSAP Pin Integrity

All scroll-pin dependencies preserved exactly: `gap-32` step spacing, `h-[600px]` terminal container, `.step-item` class selector for GSAP step animations, `containerRef`/`stepsRef`/`terminalRef` structure unchanged.

### Files Changed

| File | Change |
|------|--------|
| `components/marketing/how-it-works.tsx` | Full refinement — heading, subtitle, timeline rail, step restructure, terminal chrome |

### Design Decisions

1. **Timeline rail desktop-only** (`lg:block hidden`) — on mobile, steps stack vertically with inline code blocks and the rail would be visually noisy at narrow widths
2. **Micro-labels at `text-accent/60`** — present but not competing with the step title. Lowercase would feel like body text; uppercase tracking provides the right "label" register
3. **Terminal status bar at `/40` and `/20` opacity** — adds density without competing with the Shiki-rendered code above it
4. **Entity count in status bar** ("3 repos · 12,847 entities") — reinforces the product's knowledge graph narrative at the moment the user is watching the setup complete

---

## Step 8.16 — MetricsBar Credibility Strip Refinement

**Date:** 2026-03-15

### Diagnosis (Systemic Reasoning)

| Dimension | Before | Problem |
|-----------|--------|---------|
| **Density** | ~35%. Four text blocks in `max-w-7xl` with no visual separation | Numbers float in void. No cells, no dividers, no anchoring. |
| **Typographic register** | Labels at `text-sm` — same register as body text | No hierarchy between number and label. Labels don't read as "micro-labels." |
| **Atmosphere** | `0.025` violet tint — weakest of any element | Creates a visual vacuum between Hero (`0.03-0.04`) and Problem (`0.03`). |
| **Separation** | No dividers between metrics on desktop | Four metrics blur into a wall of numbers on wide viewports. |

### Solution

1. **Vertical dividers** → `md:border-l md:border-border/15` on metrics 2-4 (desktop only)
2. **Horizontal rules** → Top + bottom `border-border/10` framing the metric area
3. **Container tightening** → `max-w-7xl` → `max-w-5xl`
4. **Label upgrade** → `text-[11px] font-medium uppercase tracking-[0.08em]` micro-label register
5. **Atmosphere** → `0.025` → `0.03`
6. **Column padding** → `md:px-8` per metric cell
7. **Density result**: ~35% → ~65%

### Files Changed

| File | Change |
|------|--------|
| `components/marketing/metrics-bar.tsx` | Dividers, rules, tighter container, micro-label styling, atmosphere bump |

### Design Decisions

1. **Dividers desktop-only** — on mobile 2×2 grid, vertical dividers between alternating columns would be visually confusing
2. **Horizontal rules at `/10`** — fainter than dividers (`/15`) to establish hierarchy: rules = structure, dividers = separation
3. **`max-w-5xl` not `max-w-4xl`** — 1024px gives each metric ~256px including padding, preventing cramping on tablet viewports
4. **Mask-image preserved** — the horizontal rules sit within the mask fade zone, so they naturally soften at the edges

---

## Step 8.16b — MetricsBar Internal Typographic Hierarchy (Second Pass)

**Date:** 2026-03-16

### Diagnosis

The 8.16 refactor added structural bones (dividers, rules, tighter container, micro-labels). But within each metric cell, every character in `< 60s` rendered at the same weight/size/color. The number — the actual data point — couldn't be distinguished from its qualifier and unit. Labels were also too verbose for the micro-label register ("code elements indexed per repo" = 6 words, wraps at narrow widths).

### Solution: Three-Tier Number Rendering

- **Qualifier** (prefix `< `): `font-normal text-muted-foreground` — lightest, just a mathematical symbol
- **Number** (via NumberTicker): `font-bold text-foreground` — heaviest, the data point
- **Unit** (suffix `K+`, `s`, `ms`): `text-xl md:text-2xl font-semibold text-muted-foreground` — medium weight, smaller size

Prefix/suffix removed from NumberTicker props and rendered as external sibling spans. During the spring animation, prefix/suffix remain static while only the digit animates — creating a *framed animation* effect.

### Label Shortening

| Before | After |
|--------|-------|
| code elements indexed per repo | entities indexed |
| risk types detected | risk types |
| first health audit | first audit |
| local query resolution | query latency |

All labels now fit single-line at any viewport width within `md:px-8` cells.

### Files Changed

| File | Change |
|------|--------|
| `components/marketing/metrics-bar.tsx` | Three-tier number rendering, shortened labels, external prefix/suffix |

---

## Step 8.17 — FinalCta Convergence Point + Bookend Coherence

**Date:** 2026-03-16

### Diagnosis (Systemic Reasoning)

| Dimension | Before | Problem |
|-----------|--------|---------|
| **Density** | ~35%. Headline + 2 buttons + 1-liner in `max-w-2xl` × `py-28` | Momentum collapses at the conversion point. After dense pricing cards, the page empties. |
| **Bookend disconnect** | MetricsBar uses structured data strip (dividers, rules, micro-labels). FinalCta uses floating headline + buttons. | Page opens with structured precision, closes with generic SaaS CTA. No visual callback. |
| **Reassurance register** | `text-sm text-muted-foreground/80` — body text register | Doesn't match the micro-label system established across all other refactored sections. |
| **Vertical rhythm** | `py-28` while PricingPreview uses `py-24` | Sections drift apart rhythmically at the page's end. |

### Solution: Structured Conviction

1. **Social proof echo strip** — 3 compact metrics ("50K+ entities indexed", "13 risk types", "< 60s first audit") with dividers matching MetricsBar. Creates a bookend callback.
2. **Proof strip typography** — `font-grotesk text-lg font-bold` for values (smaller than MetricsBar's `text-3xl/4xl` — this is echo, not primary). Labels at `text-[10px]` (one step below MetricsBar's `text-[11px]`).
3. **Reassurance upgrade** — `text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground/60`. Matches micro-label register.
4. **Section padding** — `py-28` → `py-24`. Matches PricingPreview.
5. **Button gap** — `mt-10` → `mt-8`. Tightens the action zone.
6. **Atmosphere** — Unchanged. `0.09` + `0.05` dual glow is the page's correct atmospheric apex.

### Density Result

Headline (~48px) + proof strip (~56px) + buttons (~44px) + reassurance (~20px) = ~168px content in ~360px visible area = ~47% + AnimatedGridPattern perceived ~15% = **~62% total perceived density**.

### Files Changed

| File | Change |
|------|--------|
| `components/marketing/final-cta.tsx` | Social proof strip, tighter spacing, micro-label reassurance, `py-24` |

### Design Decisions

1. **Proof strip values are smaller than MetricsBar** (`text-lg` vs `text-3xl/4xl`) — CTA echo must be subordinate to MetricsBar's primary role as the credibility anchor
2. **Proof strip labels at `text-[10px]`** — one step below MetricsBar's `text-[11px]` to maintain clear hierarchy across the two bookends
3. **Dividers use same `border-border/15`** as MetricsBar — visual callback depends on matching the exact separator weight
4. **`max-w-sm` on proof strip** — prevents it from stretching wider than the headline, maintaining text block cohesion
5. **AnimatedGridPattern + dual glow preserved** — the CTA remains the atmospheric apex; the social proof strip adds structured *content* density, not atmospheric density

---

## Step 8.18 — /oss Page Full Fidelity Elevation

**Date:** 2026-03-16

### Diagnosis

The /oss page — "the most important page on the site" per the blueprint — was running at V1 template fidelity while the landing page had reached V8. Zero motion, zero atmospheric depth, flat typography, no `text-lit`, no ShimmerButton, no BorderBeam, no micro-labels. Every design pattern established across 8 landing page refinement passes was absent.

### Changes Applied to All 7 Components

| Pattern | Before | After |
|---------|--------|-------|
| **Typography** | `text-foreground` on all headings | `text-lit` gradient treatment on all section headings |
| **Motion** | Zero — entirely static | Framer Motion `fadeUp` + `staggerContainer`/`staggerChild` on every section |
| **Atmosphere** | Only hero + final CTA had glows | Every section now has atmospheric radial gradient at crescendo-appropriate intensity |
| **CTAs** | `rounded-lg` basic links | ShimmerButton (primary) + `rounded-full` ghost button (secondary) |
| **Micro-labels** | None | `text-[10px]/[11px] uppercase tracking-[0.08em/0.12em]` throughout |

### Per-Component Changes

| Component | Key Changes |
|-----------|-------------|
| **OssHero** | `text-lit` + `text-gradient` on "backup", ShimmerButton CTA, `rounded-full` ghost secondary, stagger entrance animation, dual-layer atmospheric glow, removed `min-h-[60vh]` (excessive dead space) |
| **CrisisCards** | Stagger card entrance, hover state (`hover:border-destructive/25` + shadow), atmospheric glow (`0.03`), crisis event → micro-label register (`text-[11px] uppercase tracking`), transition line gets `text-lit` |
| **PainSolution** | `text-lit` heading, icon per pain point (Lucide: GitPullRequest, ShieldAlert, AlertTriangle, FileWarning, Ban), micro-labels "THE PAIN" / "THE FIX" (`text-[10px] uppercase tracking-[0.12em]`), icon badge (`h-8 w-8 rounded-lg bg-destructive/10`), stagger entrance, atmospheric glow (`0.04`) |
| **FeatureList** | `text-lit` heading, stagger entrance for checklist items, qualification callout upgraded with BorderBeam + `border-accent/15` + micro-label header, atmospheric glow (`0.05`) |
| **BadgePreview** | `text-lit` heading, badge SVG entrance animation (spring scale), code block entrance animation, theme-safe badge fill (`var(--color-card)` replacing `#1E1E28`), README.md label → micro-label register, atmospheric glow (`0.04`) |
| **AuditForm** | BorderBeam on card (this is the conversion point), `border-accent/15` card border, atmospheric glow (`0.06` — elevated for conversion emphasis), fadeUp entrance, footnote → micro-label register |
| **OssFinalCta** | ShimmerButton CTA, `text-lit` + `text-gradient` on "immune system", AnimatedGridPattern (matches landing page FinalCta), dual atmospheric glow (`0.08` + `0.04`), micro-label reassurance, bottom fade gradient, theme-safe grid |

### Atmospheric Glow Crescendo

| Section | Intensity | Rationale |
|---------|-----------|-----------|
| Hero | `0.08` + `0.04` | Page opening — high warmth |
| CrisisCards | `0.03` | Pain section — muted atmosphere |
| PainSolution | `0.04` | Transition — building |
| FeatureList | `0.05` | Value proposition — mid-range |
| BadgePreview | `0.04` | Interlude |
| AuditForm | `0.06` | Conversion point — elevated |
| FinalCta | `0.08` + `0.04` | Page closing — bookend apex |
