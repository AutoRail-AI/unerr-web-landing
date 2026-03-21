# unerr Brand Guidelines

**The AI Tech Lead — Code Intelligence Infrastructure**

This document defines the visual identity for **unerr**. The aesthetic is "Substrate Dark + Paper Light"—utilizing a deep void-black base with a unified violet accent to create a structural, engineering-grade interface that conveys trust, intelligence, and safety. Solid surfaces with crisp borders — no glassmorphism, no `backdrop-filter`. The design works seamlessly across dark and light themes.

---

## Primary UI Palette (Enterprise Rule)

**Use only semantic tokens so the website looks professional and enterprise-grade in both themes.**

| Role | Dark Mode | Light Mode | Token |
| :--- | :--- | :--- | :--- |
| **Background** | Void Black (`#0A0A0F`) | Paper White (`#F8F9FA`) | `bg-background` |
| **Primary Accent** | Violet-500 (`#8B5CF6`) | Violet-700 (`#6D28D9`) | `text-accent` / `border-accent` |
| **Primary Fill** | Violet gradient | Deep Violet gradient | `bg-accent-fade` |
| **Text** | Cloud White (`#FAFAFA`) | Near Black (`#111118`) | `text-foreground` |
| **Muted Text** | 60% white | 75% black | `text-muted-foreground` |

- **Do not** introduce extra accent colors outside the semantic palette.
- **Do not** use raw hex values — always use semantic tokens.
- **Focus / ring:** Violet accent for consistency and accessibility.

---

## 1. Brand Core

| Element | Definition |
| :--- | :--- |
| **Name** | unerr |
| **Tagline** | The AI Tech Lead |
| **Concept** | Code intelligence platform that builds a living knowledge graph of every codebase and feeds it to AI coding agents via MCP — the missing safety net for the AI coding era |
| **Positioning** | "Safe Velocity" — code as fast as your AI can type, unerr catches the mistakes |
| **Visual System** | Substrate Dark + Paper Light — solid surfaces, crisp borders, no glassmorphism |
| **Quality Bar** | Stripe × Linear × Vercel |

---

## 2. Brand Voice: The AI Tech Lead

unerr speaks with one voice: **The AI Tech Lead** — direct, confident, developer-friendly. Speaks to developers and small teams who use AI coding agents and need a safety net for architectural quality.

**Tone:** Direct, confident, developer-friendly. Proves with data, not drama. Calm authority — like a senior engineer who's seen this before.

**Keywords:** *Supervise, Review, Enforce, Ship, Context, Safety, Intelligence, Graph.*

### Do / Don't

| Don't say | Do say |
| :--- | :--- |
| "We use magic to fix your code." | "We build a knowledge graph of your codebase and feed it to your AI agent via MCP." |
| "The AI guesses the fix." | "The agent is supervised by architectural rules and graph-verified context." |
| "Instant protection." | "Connected in 60 seconds. First health audit in under 5 minutes." |
| "We replace your reviewers." | "We give your team an architectural immune system — the safety net for AI-generated code." |
| "Neural Link Established" | "Connected" |
| "Void Black Industrial Glass HUD" | "Clean, professional workspace" |

---

## 3. Color Philosophy

### The "Substrate Dark + Paper Light" Aesthetic

Our color system creates a professional, information-dense environment. In dark mode, solid surfaces with crisp 1px borders and a unified violet accent create depth. In light mode, shadows and paper-white surfaces create hierarchy. Both modes use the same semantic tokens. No glassmorphism — no `backdrop-filter`, no blur effects on surfaces. Solid backgrounds are cheaper to render, easier to maintain, and visually indistinguishable from near-transparent blur on a solid dark canvas.

**Why this works for unerr:**
- **Violet (`#8B5CF6`)**: Intelligence, expertise, sophistication. Differentiated in the dev tool space (GitHub = blue, Vercel = black, Linear = indigo, Stripe = blue). WCAG AA compliant on both dark and light backgrounds.
- **Dark canvas (`#0A0A0F`)**: Clean, high-contrast base that puts data first. Standard for developer tools (Linear, GitHub, Raycast).
- **Light canvas (`#F8F9FA`)**: Warm paper white. Professional, not clinical. Standard for enterprise SaaS.

### Why Not Monochrome (Vercel-style)?

We evaluated Vercel's pure black-and-white approach and rejected it for unerr. The reasoning:

**unerr's core value is making invisible things visible.** Health grades, blast radius severity, confidence scores, pipeline status, drift alerts — these must register at a glance, not require reading. A monochrome system forces users to **read** every status instead of **seeing** it.

| Factor | Vercel | unerr |
| :--- | :--- | :--- |
| **Product data density** | Low — deploy list, domain config, logs | High — 50+ pages, graphs, grades, maps, status |
| **Key visual moment** | "Deployed" checkmark | Health grade card, blast radius map, PR verdict |
| **Viral mechanism** | Word of mouth, Next.js ecosystem | Health badges, repo roasts, PR footers, screenshots |
| **Brand recognition** | Household name (can afford to be invisible) | Pre-launch (needs to be memorable and recognizable) |
| **Semantic range needed** | Binary (pass/fail) | 5-point scale (A through F) + live/active states |

Monochrome is a luxury of brand equity. Vercel earned it over years. For a pre-launch product that needs health badges to stand out in GitHub READMEs and screenshots to go viral on X, monochrome means invisibility — the wrong kind.

### The Right Model: Linear's Approach (Neutral-Dominant + Purposeful Color)

The design follows **Linear's philosophy** — 90% neutral, 10% purposeful color. The vast majority of pixels on screen are grayscale. Color appears **only where it communicates something a developer needs to act on.**

```
Chrome (sidebar, headers, borders, cards)  →  Neutral (grayscale)
Interactive (CTA buttons, focus rings)     →  Violet accent — sparingly
Data (grades, status, severity, pipeline)  →  Semantic colors (5-point scale)
```

#### Unified Accent (No Bicameral Split)

unerr uses **one primary accent color** — violet. Color serves semantic meaning, not decoration.

| Color | Represents | Use for |
| :--- | :--- | :--- |
| **Violet (`#8B5CF6` dark / `#6D28D9` light)** | Intelligence, brand identity, interactivity | CTA buttons, focus rings — **sparingly** |
| **Cyan (`#22D3EE` dark / `#0891B2` light)** | Live data, streaming, active processes | Pipeline running, terminal output — **functional only, not a brand color** |

**Rule:** Violet is the brand. Cyan is functional. Status colors (success/warning/error) are semantic only. No other accent colors.

#### Cyan vs. Teal: Perceptual Collision Rule

Cyan-400 (`#22D3EE`, live data) and Teal (`#2DD4BF`, health grade B) are perceptually adjacent — nearly indistinguishable on dark backgrounds for colorblind users (~8% of males) or on low-quality monitors. **Differentiate by behavior, not just hue:**

- **Live data (Cyan):** Always animated (`pulse-glow`). Temporal — disappears when the process ends. Always paired with a text label: "Running", "Streaming", "Live".
- **Health grade B (Teal):** Always static. Persistent score. Always shows the letter grade ("B" or "Good") alongside the color.
- **No color-only indicators** — every colored element must have a redundant text label, letter grade, or animation that conveys the same information without color.

### The Color Budget Principle

> **Color is a budget. Every colored pixel must justify its existence by communicating something a developer needs to act on.**

On any given dashboard page, non-neutral color should appear in **3-5 places maximum**: a CTA button, a status indicator, maybe a health grade badge. Everything else is neutral grayscale.

#### Where Color Appears (the budget)

| Element | Color? | Why |
| :--- | :--- | :--- |
| **CTA button** ("Run Health Audit") | Violet fill | Primary action — must stand out |
| **Health grade badge** | Grade color (emerald/amber/red) | The product's core value — instant read |
| **Status dots** (safe/risky/blocked) | Semantic color | Binary signal — needs instant recognition |
| **Focus ring** | Violet | Accessibility — required |
| **Live pipeline indicator** | Cyan | Active process — temporal, disappears when done |

#### Where Color Does NOT Appear (neutral wins)

| Element | Treatment | Why |
| :--- | :--- | :--- |
| **Sidebar nav items** | `text-muted-foreground` default, `bg-muted` + `font-medium` active | Linear's approach — no color needed for navigation |
| **Table links** | `text-foreground` + underline-on-hover | Color on every link creates a rainbow; underline is sufficient |
| **Card borders** | `border-border` (neutral) | Accent-colored borders add noise without information |
| **Section headers** | `text-foreground` | Headings don't need color — typography hierarchy is enough |
| **Hover states** | `bg-muted` fill | Subtle background shift, not a glow effect |
| **Secondary buttons** | `border-border text-foreground` | Ghost/outline style — only primary CTA gets color |
| **Breadcrumbs, tabs** | `text-muted-foreground` default, `text-foreground font-medium` active | Weight change signals state; color is overkill |

#### The Squint Test

Squint at any dashboard page. You should see:
- A **mostly gray** field (backgrounds, borders, text, chrome)
- **1-2 violet spots** (CTA button, maybe a focus ring)
- **A few semantic dots** (status indicators, grade badge)
- **Nothing else colored**

If you see a rainbow, there's too much color. If you see pure grayscale with no anchor, the page lacks hierarchy. The balance is: neutral canvas, purposeful color punctuation.

---

## 4. Color Palette Quick Reference

### Background Colors

| Color | Hex | Token | Role |
| :---: | :--- | :--- | :--- |
| ![#0A0A0F](https://via.placeholder.com/16/0A0A0F/0A0A0F?text=+) | `#0A0A0F` | `bg-background` (dark) | Void Black (Main Background) |
| ![#F8F9FA](https://via.placeholder.com/16/F8F9FA/F8F9FA?text=+) | `#F8F9FA` | `bg-background` (light) | Paper White (Main Background) |
| ![#1E1E28](https://via.placeholder.com/16/1E1E28/1E1E28?text=+) | `#1E1E28` | `bg-muted` (dark) | Slate Grey (Secondary/Muted) |

### Accent Colors

| Color | Hex | Token | Role |
| :---: | :--- | :--- | :--- |
| ![#8B5CF6](https://via.placeholder.com/16/8B5CF6/8B5CF6?text=+) | `#8B5CF6` | `text-accent` (dark) | Violet-500 (Primary Accent — dark) |
| ![#6D28D9](https://via.placeholder.com/16/6D28D9/6D28D9?text=+) | `#6D28D9` | `text-accent` (light) | Violet-700 (Primary Accent — light) |
| ![#7C3AED](https://via.placeholder.com/16/7C3AED/7C3AED?text=+) | `#7C3AED` | gradient stop | Violet-600 (Gradient accent) |
| ![#22D3EE](https://via.placeholder.com/16/22D3EE/22D3EE?text=+) | `#22D3EE` | `text-live` (dark) | Cyan-400 (Live data indicator — dark) |
| ![#0891B2](https://via.placeholder.com/16/0891B2/0891B2?text=+) | `#0891B2` | `text-live` (light) | Teal-700 (Live data indicator — light) |

### Text Colors

| Color | Hex | Token | Role |
| :---: | :--- | :--- | :--- |
| ![#FAFAFA](https://via.placeholder.com/16/FAFAFA/FAFAFA?text=+) | `#FAFAFA` | `text-foreground` (dark) | Cloud White (Primary Text) |
| ![#111118](https://via.placeholder.com/16/111118/111118?text=+) | `#111118` | `text-foreground` (light) | Near Black (Primary Text) |

### Status Colors (Semantic Only)

| State | Dark | Light | Token |
| :--- | :--- | :--- | :--- |
| **Success** | `#34D399` (Emerald-400) | `#059669` (Emerald-600) | `text-success` |
| **Warning** | `#FBBF24` (Amber-400) | `#D97706` (Amber-600) | `text-warning` |
| **Error** | `#F87171` (Red-400) | `#DC2626` (Red-600) | `text-destructive` |
| **Info** | Violet accent | Violet accent | `text-accent` |

---

## 5. Health Grade Color Scale

Health grades, confidence tiers, and blast radius severity need instant-read color communication. This 5-point semantic scale maps to universal intuition.

| Grade | Color | Dark Hex | Light Hex | Use |
| :--- | :--- | :--- | :--- | :--- |
| **A / Excellent** | Emerald | `#34D399` | `#059669` | Health grade A, high confidence (≥85%) |
| **B / Good** | Teal | `#2DD4BF` | `#0D9488` | Health grade B, good confidence (70-84%) |
| **C / Average** | Amber | `#FBBF24` | `#D97706` | Health grade C, moderate risk (50-69%) |
| **D / Poor** | Orange | `#FB923C` | `#EA580C` | Health grade D, significant issues (30-49%) |
| **F / Critical** | Red | `#F87171` | `#DC2626` | Health grade F, immediate action needed (<30%) |

**Usage rules:**
- Status color on the **indicator** only (dot, border, icon, badge fill) — never the container background.
- In badges (GitHub READMEs), use solid fills with white text for readability on any background.
- In dashboards, use subtle background tints (`rgba(color, 0.08)`) with colored border/icon.

---

## 6. Background Palette (Void & Paper)

| Token | Dark | Light | Role |
| :--- | :--- | :--- | :--- |
| **Background** | `#0A0A0F` | `#F8F9FA` | Main canvas (L0) |
| **Card** | `rgba(30, 30, 40, 0.4)` | `#FFFFFF` | Surface panels / cards (L2/L3) |
| **Muted** | `rgba(10, 10, 15, 0.6)` | `#F0F0F3` | Inputs, hover fills, badges |
| **Border** | `rgba(250, 250, 250, 0.1)` | `rgba(17, 17, 24, 0.15)` | Borders, dividers |

### Dark Mode (Substrate Dark)

```
Canvas:       #0A0A0F (Void Black)
Surface:      rgba(255,255,255,0.03) — solid, no blur
Raised:       rgba(255,255,255,0.06) + border rgba(255,255,255,0.10)
Text Primary: #FAFAFA
Text Muted:   rgba(250,250,250,0.60)
Accent:       #8B5CF6 (Violet-500)
Cards:        glass-card (solid bg + 1px border, no backdrop-filter)
Hover:        Subtle glow (box-shadow)
Terminal:     #08080D bg, #FAFAFA text
```

### Light Mode (Paper Light)

```
Canvas:       #F8F9FA (Warm Paper)
Surface:      #FFFFFF
Raised:       #FFFFFF + box-shadow: 0 1px 3px rgba(0,0,0,0.08)
Text Primary: #111118
Text Muted:   rgba(17,17,24,0.75)
Accent:       #6D28D9 (Violet-700)
Cards:        White + subtle shadow (no glass)
Hover:        Tinted fills (bg-primary/5)
Terminal:     #1E1E2E bg — Terminal Exception stays dark
```

---

## 7. Gradient Definitions

```css
/* Primary Brand Gradient (CTA buttons, badges) */
/* Dark */
background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
/* Light */
background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);

/* Text gradient (high-impact keywords only — use sparingly) */
background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Rule:** No cyan-to-violet gradients. No automation-flow multi-stop gradients. Keep it simple.

---

## 8. Typography System — Enterprise Guide

**"The Engineering Precision Aesthetic"**

Our typography is precise, engineered, and readable. We use functional, high-performance typefaces native to a developer's environment. The system conveys **Technical Rigor**, **Safety**, and **Intelligence**.

### 8.1 Typeface Selection

| Role | Font Family | Weight | Why we use it |
| :--- | :--- | :--- | :--- |
| **HEADLINES** | **Space Grotesk** | Bold (700), SemiBold (600) | Geometric sans that feels engineered. Anchors the precision vibe. |
| **INTERFACE** | **Inter** | Regular (400), Medium (500) | Enterprise standard for legibility. Invisible, frictionless, safe. |
| **DATA & CODE** | **JetBrains Mono** | Regular (400) | Gold standard for code. Signals immediately: "This is a developer tool." |

Sources: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

### 8.2 Type Hierarchy & Scaling

#### Display Levels (Space Grotesk) — Landing Page Only

| Token | Size (Mobile / Desktop) | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display XL** | `48px` / `72px` | Bold (700) | `-0.04em` | Main landing hero |
| **Display L** | `36px` / `56px` | Bold (700) | `-0.03em` | Major section headers |
| **Display M** | `30px` / `48px` | SemiBold (600) | `-0.02em` | Feature block headers |

#### Heading Levels (Space Grotesk) — Dashboard

| Token | Size | Weight | Usage |
| :--- | :--- | :--- | :--- |
| **Page Title** | `text-lg` (18px) | SemiBold (600) | Dashboard page titles |
| **Section Title** | `text-sm` (14px) | SemiBold (600) | Card/panel headings |
| **H3** | `20px` | Medium (500) | Modal headers (rare) |

#### Body & UI (Inter)

| Token | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Body Base** | `14px` | Regular (400) | `1.5` | Dashboard UI, cards, inputs |
| **Body Small** | `13px` | Regular (400) | `1.5` | Table cells, nav items |
| **Caption** | `12px` | Medium (500) | `1.4` | Metadata, timestamps |
| **Micro Label** | `10px` | SemiBold (600) | `1.4` | Uppercase stat labels |

#### Code & Technical (JetBrains Mono)

| Token | Size | Usage |
| :--- | :--- | :--- |
| **Code Base** | `13px` | Code blocks, main terminal output |
| **Code Small** | `11px` | Log lines, pipeline output |
| **Code Tiny** | `10px` | Line numbers, hashes |

### 8.3 The "Flight Deck" Rule (Data Density)

Enterprise tools are defined by **information density**. Labels and numbers must be scannable and stable.

| Element | Rule | Example |
| :--- | :--- | :--- |
| **Labels** | Uppercase, `text-[10px]`, `tracking-widest`, `font-grotesk`, `.text-label` | `CONFIDENCE SCORE`, `LATENCY` |
| **Numbers** | Always `font-mono`, `tabular-nums` so numbers don't jitter | Counters, metrics, timers |
| **Logs** | `text-xs`, `leading-tight` | Terminal output, event streams |

### 8.4 Usage Rules

| Do | Don't |
| :--- | :--- |
| Use **Space Grotesk** in ALL CAPS with wide tracking for small labels | Use **Space Grotesk** for paragraphs |
| Use **JetBrains Mono** for specific technical terms in body text | Use **JetBrains Mono** for long paragraphs |
| Use **Cloud White (`#FAFAFA`)** for dark mode headlines | Use pure white (`#FFFFFF`) — it "vibrates" |
| Use semantic tokens for all text colors | Use accent colors for long-form body text |

---

## 9. Logo & Brand Assets

### 9.1 Logo System

All logo assets use the violet accent gradient (`#8B5CF6 → #7C3AED`) matching `bg-accent-fade`. The icon is a geometric pattern of diagonal strokes forming an abstract octagonal shape — clean, engineering-grade, memorable at small sizes.

| File | Format | Size | Contains | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **App directory — favicon & meta** | | | | |
| `app/icon.svg` | SVG | 512×512 | Icon only (violet gradient strokes) | Favicon, browser tab |
| `app/icon.png` | PNG | 512×512 | Icon raster | Fallback favicon |
| `app/favicon.svg` | SVG | 512×512 | Icon only (self-closing tags) | Modern browsers |
| `app/favicon.ico` | ICO | multi | Icon (ICO container) | Legacy browsers, `<link rel="icon">` |
| `app/favicon.png` | PNG | 96×96 | Icon raster (small) | Legacy browsers, fallback |
| `app/favicon-96x96.png` | PNG | 96×96 | Icon raster | Standard favicon size |
| `app/apple-icon.png` | PNG | 180×180 | Icon raster | Apple touch icon (`<link rel="apple-touch-icon">`) |
| **Public directory — brand assets** | | | | |
| `public/unerr.svg` | SVG | 512×512 | Icon only | Standalone brand mark, dashboard sidebar logo |
| `public/unerr.png` | PNG | 512×512 | Icon raster | Social/sharing fallback, OG image |
| `public/icon.svg` | SVG | 512×512 | Icon only | Alternate icon reference |
| `public/icon.png` | PNG | 512×512 | Icon raster | Alternate icon reference |
| `public/unerr-wordmark.svg` | SVG | 1435×297 | Wordmark only — "unerr" path with violet gradient | Text-only logo |
| `public/unerr-wordmark.png` | PNG | raster | Wordmark raster | Social sharing, external embeds |
| `public/icon-wordmark.svg` | SVG | 2137×512 | Icon + Wordmark lockup — icon (left, 512px) + "unerr" text (right) | **Primary lockup.** NavBar, Footer, full brand identity |
| `public/icon-wordmark.png` | PNG | raster | Lockup raster | Social sharing, external embeds, pitch decks |
| **Public directory — PWA manifest** | | | | |
| `public/web-app-manifest-192x192.png` | PNG | 192×192 | Icon raster | PWA manifest (small) |
| `public/web-app-manifest-512x512.png` | PNG | 512×512 | Icon raster | PWA manifest (large) |

**Total: 19 assets** (7 in `app/`, 12 in `public/`)

**Icon description:** 12 diagonal strokes arranged symmetrically, forming an abstract octagon/diamond shape with an open center. Each stroke uses the violet gradient. Transparent background — works on both dark and light surfaces.

**Technical note:** All icon SVGs use a single shared `linearGradient` spanning the full viewBox diagonally (`x1=0 y1=0 x2=512 y2=512`), matching the diagonal stroke direction. The wordmark and lockup SVGs have their own gradient coordinates spanning the text width. All gradients render the `#8B5CF6 → #7C3AED` violet transition correctly in browsers.

### 9.2 Naming Convention

| Context | Format | Example |
| :--- | :--- | :--- |
| **Logo / Wordmark** | Lowercase `unerr` | `> unerr` |
| **Legal / Copyright** | Title case with "Inc." | `© 2026 unerr Inc.` |
| **URL** | `unerr.dev` | `https://unerr.dev` |
| **CLI** | `unerr` | `npx unerr` (migrated from `@autorail/unerr`) |
| **GitHub org** | PascalCase | `unerr-ai` (or current org) |

**Rule:** The brand name is **unerr** — lowercase, monospace. Always.

---

## 10. UI Principles

1. **Content First:** The UI disappears. Data speaks. Every visual element must serve information delivery. If removing it doesn't reduce comprehension, remove it.
2. **Color Budget:** Color is a budget — every colored pixel must justify its existence by communicating something a developer needs to act on. On any page, **3-5 colored elements max**. Everything else is neutral grayscale. Apply the Squint Test (see §3).
3. **Neutral-Dominant:** 90% of the UI is grayscale. Sidebar, headers, borders, cards, secondary buttons, breadcrumbs, tabs — all neutral. Violet appears only for primary CTAs and focus rings. Semantic color appears only for status/grade indicators.
4. **Substrate Dark (Dark Mode):** Solid surfaces with crisp 1px borders. No glassmorphism, no `backdrop-filter`, no blur.
   - **Borders:** `border-border` for passive. Active states use `bg-muted` + `font-medium`, NOT accent-colored borders.
   - **Corners:** `rounded-lg` or `rounded-xl`. Never `rounded-3xl` (consumer, not engineering).
5. **Paper Light (Light Mode):** Shadows create elevation. White surfaces stack. Same information, different material.
6. **Information Density:** High density, `text-sm` base. Developers want data, not whitespace.
7. **Purposeful Motion:** Animations serve comprehension, not spectacle.
   - **Do:** `animate-fade-in` on page mount, accordion transitions, subtle hover states.
   - **Don't:** Boot sequences, breathing glows, glitch animations, scan lines, pulsing borders.
8. **Terminal Exception:** Code blocks and pipeline logs stay dark in both themes.
9. **No Color-Only Indicators:** Every colored element (status dot, grade badge, live indicator) must have redundant communication — a text label, letter grade, or animation. Color alone is never the only signal. This is both an accessibility requirement (colorblind users, low-quality monitors) and a robustness principle.
10. **Neutral First Convention:** New components start neutral. Color is added only when someone can articulate what information the color communicates. The burden of proof is on the color, not on neutrality. Enforce via ESLint rules and PR review checklist.

---

## 11. Animation Catalog (Functional Only)

Keep only animations that serve comprehension:

| Name | Purpose | Use |
| :--- | :--- | :--- |
| `fade-in` | Page entry | Once on mount, then done |
| `slide-up` | Content reveal | Staggered card entrance (0.15s delay) |
| `accordion-down/up` | Expand/collapse | Accordion panels |
| `shimmer` | Loading state | Skeleton screens |
| `pulse-glow` | Live indicator | Status dots (active pipeline) |

**Removed from dashboard use** (landing page only, if desired):
- `breathing-glow` / `breathing-glow-purple` — too dramatic for daily use
- `glitch` — sci-fi aesthetic, not engineering
- `particle-flow` / `particle-down` — decorative, not informative
- `scan-lines` — HUD cosplay
- Boot sequence phases — theatrical, conflicts with "60 seconds to value"

---

## 12. Color Combinations

| Background | Foreground | Token | Use Case |
| :--- | :--- | :--- | :--- |
| `bg-background` | `text-foreground` | Semantic | Default page content |
| `bg-background` | `text-accent` | Semantic | Links, active elements |
| `bg-card` | `text-foreground` | Semantic | Card content |
| `bg-accent-fade` | `text-primary-foreground` | Semantic | CTA buttons |
| `bg-muted` | `text-muted-foreground` | Semantic | Badges, inputs |

---

## 13. Data Visualization Palette

| Series | Color (Dark) | Color (Light) | Purpose |
| :--- | :--- | :--- | :--- |
| **Series A** | `#8B5CF6` | `#6D28D9` | Primary metric (violet) |
| **Series B** | `#22D3EE` | `#0891B2` | Secondary metric (cyan) |
| **Success** | `#34D399` | `#059669` | Success / pass rate |
| **Warning** | `#FBBF24` | `#D97706` | Warning / caution |
| **Error** | `#F87171` | `#DC2626` | Failure / error rate |

---

## 14. Shareability Design (Growth-Aligned)

The growth strategy depends on viral sharing. Design must account for these contexts:

### Health Badges (GitHub READMEs — always light background)

- Flat, solid fills with white text — no glows, no gradients
- Crisp at 20px height (shields.io style)
- Grade color from Health Grade Scale (§5)
- Format: `[![unerr Health](https://unerr.dev/badge/{owner}/{repo})](https://unerr.dev/report/{owner}/{repo})`

### Shareable Cards (Repo Roasts, Health Dashboards)

- Fixed dark background (`#0A0A0F`) regardless of user's theme
- Violet accent, unerr logo, data in foreground
- Designed to screenshot well on X/Reddit/HN
- Think: Spotify Wrapped card format

### PR Footers (GitHub PR comments — light background)

- Plain text + small inline SVG badge
- No CSS dependencies, no dark-mode assumptions
- Format: `📊 Analyzed by unerr — [X] features in blast radius | Health: [grade]`

---

## 15. Accessibility Standards

**Target:** WCAG 2.1 Level AA compliance.

### Contrast Ratios

| Foreground | Background | Ratio | Pass |
| :--- | :--- | :--- | :--- |
| Cloud White (#FAFAFA) | Void Black (#0A0A0F) | ~16:1 | AAA |
| Violet-500 (#8B5CF6) | Void Black (#0A0A0F) | ~5.5:1 | AA |
| Violet-700 (#6D28D9) | White (#FFFFFF) | ~6.5:1 | AA |
| Near Black (#111118) | Paper White (#F8F9FA) | ~15:1 | AAA |

**Custom violet hue validation:** If a custom violet hue is used instead of Tailwind defaults, it must pass ≥ 4.5:1 contrast ratio against both `#0A0A0F` (dark mode) and `#F8F9FA` (light mode). Violet is a tricky wavelength — small shifts in lightness can drop below AA thresholds. Always run through [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) before committing a new hue.

### Focus States

```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### Keyboard Navigation

- All interactive elements reachable via Tab
- Focus order follows visual order
- Modals trap focus and support Escape to close
- Icon-only buttons have `aria-label`

---

## 16. Light Mode — "Paper Light" System

The dark "Substrate Dark" aesthetic adapts for light mode by shifting from an **emissive** model to a **reflective** model. Depth is created by **shadows** instead of surface tinting.

### 16.1 Layer System

| Layer | Dark Mode | Light Mode | Usage |
| :--- | :--- | :--- | :--- |
| **L0 Canvas** | `#0A0A0F` | `#F8F9FA` | Main page background |
| **L1 Substrate** | `#0E0E14` | `#FFFFFF` | Sidebars, navigation |
| **L2 Surface** | `rgba(255,255,255,0.03)` | `#FFFFFF` | Content cards |
| **Elevation** | Surface tint + 1px border | `box-shadow` | Depth mechanism |

### 16.2 Accent Mapping

| Role | Dark | Light | Token |
| :--- | :--- | :--- | :--- |
| **Interactive** | `#8B5CF6` (Violet-500) | `#6D28D9` (Violet-700) | `text-accent` |
| **CTA Fill** | Violet gradient | Deep Violet gradient | `bg-accent-fade` |
| **Live Data** | `#22D3EE` (Cyan-400) | `#0891B2` (Teal-700) | — |
| **Success** | `#34D399` | `#059669` | `text-success` |
| **Warning** | `#FBBF24` | `#D97706` | `text-warning` |
| **Error** | `#F87171` | `#DC2626` | `text-destructive` |

### 16.3 Terminal Exception Rule

Even in light mode, **code blocks and pipeline logs stay dark** (`#1E1E2E` background). This is universal developer tool convention and preserves readability.

### 16.4 Hover/Active States

| State | Dark Mode | Light Mode |
| :--- | :--- | :--- |
| **Hover** | Subtle violet box-shadow | `bg-primary/5` (tinted fill) |
| **Active** | Violet border glow | `border-l-2 border-accent` (solid) |
| **Focus** | Violet ring | Violet ring |

---

### 16.5 No Glassmorphism

**Rule:** No `backdrop-filter`, no `blur()` on surface elements. The `.glass-card` and `.glass-panel` class names are retained for backward compatibility, but they render as solid surfaces with crisp borders — zero GPU overhead. At `rgba(255,255,255,0.03)` on a `#0A0A0F` background, blur has nothing to blur. You pay the GPU cost for an invisible effect.

*unerr Brand Guidelines — The AI Tech Lead*
