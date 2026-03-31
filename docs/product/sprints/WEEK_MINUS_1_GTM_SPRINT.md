# Week -1 GTM Sprint: Pre-Launch Ignition

> **Sprint dates:** March 31 — April 6, 2026
> **Sprint type:** Pre-launch preparation (no revenue target — infrastructure and seeding week)
> **Reference:** [GTM Strategy](../GROWTH_STRATEGY_1M_ARR.md) | [Features](../../FEATURES.md)

---

## I. The Strategic Posture

**One-Sentence Focus:** Build every distribution pipe and light every signal fire so that when T1 goes live, Day 0 is a coordinated strike — not a cold start.

**Context:** This is our only pre-launch week. T1 (free public beta) is being tested and will deploy with the landing page. Billing and account management are pending but irrelevant for T1 (everything is free). The ENTIRE goal of this week is:

1. **Distribution plumbing** — Cursor plugin, Claude Code skill, MCP directory listings submitted and pending/live
2. **Tool procurement** — PostHog, Discord, Typefully, social accounts ready
3. **Content ammunition** — "unerr on unerr" Atlas page live, 3-5 Architectural Spotlights drafted, HN/PH/Reddit posts written
4. **Audience warming** — First BiP posts on X/LinkedIn, Reddit presence established, YC Bookface post drafted
5. **Human pipeline** — 5-10 warm prospects identified for manual onboarding calls Week 0-1

**Pivot/Persevere:** N/A — this is Sprint 0. No data to retrospect on. Pure setup.

---

## II. The Prioritized Action Plan

**Available GTM hours this week: ~12-15 hours** (remainder goes to product testing, deployment, billing work)

---

### Priority 1: Distribution Plumbing (Est: 3 hours)

**Context:** Paths A1 (Distribution Hijacking). This is the single highest-ROI work in the entire GTM plan. Every hour invested here generates passive installs for months. Must be done BEFORE Day 0 so that marketplace listings are live when launch content hits.

**Execution:**

**1a. Claude Code Skill — package and submit (1 hour)**
- Create a GitHub repo: `unerr-skill` (or add to existing CLI repo)
- The skill is a thin wrapper around our MCP server. Claude Code skills are GitHub repos with a `CLAUDE.md` that registers the skill.
- Skills to expose: `/unerr-atlas` (generate Atlas for connected repo), `/unerr-health` (run health check), `/unerr-blast-radius` (show blast radius for a function)
- Submit to: awesome-claude-code-skills GitHub list, Claude Code skills directory
- Write a compelling README with Atlas screenshot + "Try it on your repo in 60 seconds"

**1b. MCP Directory Listings — submit to 5+ directories (45 min)**
- Submit unerr MCP server to:
  - [mcp.so](https://mcp.so) (19K+ servers indexed)
  - [mcpmarket.com](https://mcpmarket.com)
  - [lobehub.com/mcp](https://lobehub.com/mcp)
  - [aiagentslist.com/mcp-servers](https://aiagentslist.com/mcp-servers)
  - [fastmcp.me](https://fastmcp.me)
  - [PulseMCP](https://pulsemcp.com)
- Each listing: name, description (focus on "5-signal knowledge graph" differentiator), link to docs, Atlas screenshot
- Servers on 5+ directories get 10x more installs

**1c. Cursor Plugin — scope and start (1 hour)**
- Review [Cursor plugin spec](https://cursor.com/docs/plugins). Plugins bundle MCP servers + skills + rules.
- Package our MCP server as a Cursor plugin with `.cursor/plugins/unerr/` structure
- If submission requires more engineering time than 1 hour, create the issue and finish in Week 0. The Claude skill + MCP directories are higher priority for Day 0.

**Deliverable by end of week:** Claude skill submitted. 5+ MCP directory listings submitted. Cursor plugin scoped (submitted if time permits).

---

### Priority 2: Tool Procurement + Infrastructure (Est: 2 hours)

**Context:** Growth Stack (Section 18). These tools must be live before Day 0 or we're flying blind on metrics and can't schedule content.

**Execution:**

| Tool | Action | Time |
|---|---|---|
| **PostHog** | Sign up for free tier. Add tracking snippet to landing page + app. Set up: signup event, activation event (first index), Atlas page view event. Create a "T1 Launch" dashboard with these 3 funnels. | 45 min |
| **Discord** | Create the unerr Discord server. Channels: #general, #feedback, #bugs, #show-your-atlas (for users to share their Atlas pages), #announcements. Write a welcome message. Pin the "what is unerr" explainer. Invite link ready for landing page. | 30 min |
| **Typefully** | Sign up. Connect X account. Draft queue: 3 Architectural Spotlight tweets + the "unerr on unerr" launch thread (see Priority 4). Schedule for Day 0 and Day 1. | 30 min |
| **Social accounts** | Ensure X/Twitter account is active and has a bio: "The intelligence infrastructure your coding agents need. Free public beta → [link]". LinkedIn profile updated with same positioning. Reddit accounts have 4+ weeks of genuine comment history in r/cursor, r/ClaudeCode, r/webdev. | 15 min |

**Deliverable by end of week:** PostHog tracking live. Discord server ready with invite link. Typefully loaded with Day 0 content queue. Social profiles updated.

---

### Priority 3: "unerr on unerr" — The First Atlas Page (Est: 1.5 hours)

**Context:** Path A6 (BiP Proof Engine), Engine 5 mechanic 5a. This is our pre-launch proof asset — the FIRST Architectural Spotlight is our OWN codebase. Published before Day 0 as the ultimate dogfooding demonstration.

**Execution:**

- Run unerr's full pipeline on our own repo (`kap10-server`)
- Verify the Atlas page is accurate: Feature Story, Architecture Trace, execution traces, health grade, blast radius maps
- Fix any graph errors in OUR codebase findings (this is also product testing)
- Publish at: `unerr.dev/atlas/unerr/kap10-server` (or whatever our public Atlas URL pattern is)
- Screenshot the most impressive findings:
  - The blast radius map of our MCP server (50+ tools, complex dependency graph)
  - The health grade
  - An execution trace (e.g., how the indexing pipeline flows)
- These screenshots become the visual assets for ALL Day 0 content

**Deliverable by end of week:** Public Atlas page for our own codebase live. 3-5 screenshots saved for social content.

---

### Priority 4: Content Ammunition — Write Day 0 Launch Content (Est: 3 hours)

**Context:** Paths A4 (Spotlights), A6 (BiP). Day 0 is a coordinated strike across 5+ channels. EVERY piece of content must be WRITTEN before Day 0 — on launch day, we post and engage, we don't write.

**Execution:**

**4a. HN "Show HN" post — draft (30 min)**
```
Show HN: unerr — interactive architecture maps for any codebase (5-signal knowledge graph)

We built a tool that turns any GitHub repo into an interactive, explorable architecture map —
execution traces, blast radius simulation, feature clusters, health grades.

It's powered by a 5-signal knowledge graph (structural + temporal + intent + gravity + community)
that's fundamentally different from LLM-generated docs (DeepWiki) or single-signal graphs (GitNexus).

Free public beta — no signup required for public repos: unerr.dev/atlas/{owner}/{repo}

We ate our own dogfood: here's our own codebase analyzed → [link to unerr-on-unerr Atlas]

Built by a solo developer over 12 months. 50+ MCP tools, 12 anomaly detectors,
27 Temporal workflows. Would love feedback on accuracy and what you'd want to see next.
```
Modest language. Builder story. "Show don't tell" via the public Atlas link. Engage in comments for 6+ hours on launch day.

**4b. X/Twitter launch thread — draft (30 min)**
Thread of 8-10 tweets:
1. Hook: "Your AI agent has amnesia. It forgets your architecture every session. We gave it permanent memory." + Atlas screenshot
2. "We built a 5-signal knowledge graph that answers: what breaks if I change this?"
3. Blast radius map screenshot: "Next.js auth module touches 47 files. Here's the map."
4. "GitNexus has 19K stars with 1 signal. We have 5." + comparison visual
5. Execution trace GIF/screenshot
6. "We ate our own dogfood — here's our codebase analyzed" + link
7. "Free public beta. No signup for public repos." + CTA
8. "Built by a solo dev over 12 months. AMA." + Discord link

**4c. Reddit posts — draft 3 posts (45 min)**
- r/programming: "We built an interactive architecture map powered by a 5-signal knowledge graph — here's what it reveals about Next.js" + Atlas link
- r/cursor: "I built an MCP server that gives Cursor actual architectural memory. Before/after comparison." + MCP config snippet
- r/ClaudeCode: "Claude Code + unerr's MCP = your agent finally understands your codebase" + skill install instructions

**4d. LinkedIn launch post — draft (15 min)**
"I spent 12 months building a 5-signal knowledge graph for codebases. Today we're launching the free public beta. Here's what it found when we analyzed our own codebase: [screenshot]. Try it on your repo — 60 seconds, no signup."

**4e. YC Bookface post — draft (15 min)**
"Hey Bookface — we built an interactive architecture map for any GitHub repo. Paste your repo URL, see your architecture in 60 seconds. Free during public beta. Would love early feedback from this community. [link]"

**4f. Product Hunt listing — prepare (15 min)**
- Tagline: "The intelligence infrastructure your coding agents need"
- Description: 3 paragraphs (problem, solution, how it works)
- 5 screenshots: Atlas, blast radius, health grade, execution trace, MCP integration
- First comment draft: the builder story
- Schedule for Day 0 or Day 1 (PH launches Tuesday for best traction)

**Deliverable by end of week:** All 6 content pieces written, reviewed, scheduled in Typefully (X) or saved as drafts (HN, Reddit, LinkedIn, PH, Bookface). Zero writing needed on Day 0 — only posting and engaging.

---

### Priority 5: Warm Pipeline — Identify 10 Manual Onboarding Prospects (Est: 1.5 hours)

**Context:** Engine 5 mechanic 5d (Focused Onboarding) + Path A9 (Productized Audit warm-up). We need 5-10 real humans to onboard in Week 0-1 for UX friction testing and early testimonials.

**Execution:**

**5a. Personal network scan (30 min)**
- List every developer friend/colleague who uses Cursor, Claude Code, or Copilot daily
- List every founder friend who has a codebase (even a side project)
- List every YC batchmate or Bookface contact who might try it
- Target: 10 names with contact info

**5b. Draft the "warm invite" message (15 min)**
```
Hey [name] — I've been building something for the last year and we're launching the
free public beta this week. It builds an interactive architecture map of your codebase
and gives your AI agents permanent memory via MCP.

Would you be up for a 15-min screen share where I walk you through what it finds on
YOUR repo? Totally free, I just want to see the reaction and hear what's useful vs. not.

[unerr.dev link]
```

**5c. Send invites (45 min)**
- DM all 10 prospects via the most direct channel (WhatsApp, Signal, iMessage, Slack DM, LinkedIn DM)
- Aim for 5 confirmed "yes, let's do it next week" replies
- These 5 sessions in Week 0-1 generate:
  - UX friction data (where do eyes go? what confuses them?)
  - First testimonials ("unerr found 23 dead functions in my repo in under a minute")
  - First "unerr on [their project]" Architectural Spotlight content

**Deliverable by end of week:** 10 invites sent. 5+ confirmed onboarding sessions scheduled for Week 0 or Week 1.

---

### Priority 6: Pre-Index Famous Repos for Atlas (Est: 1.5 hours)

**Context:** Path A2 (Public Atlas as Viral Surface). The Atlas pages of famous repos ARE the marketing material. They must be live before Day 0 so that every social post links to a real, explorable Atlas page — not a signup wall.

**Execution:**

- Run unerr pipeline on 10-15 high-profile TypeScript/JS repos (our home turf):
  - **React** (meta/react)
  - **Next.js** (vercel/next.js)
  - **tRPC** (trpc/trpc)
  - **Prisma** (prisma/prisma)
  - **Drizzle** (drizzle-team/drizzle-orm)
  - **Hono** (honojs/hono)
  - **shadcn/ui** (shadcn-ui/ui)
  - **Supabase** (supabase/supabase)
  - **Tailwind CSS** (tailwindlabs/tailwindcss)
  - **Astro** (withastro/astro)
- Verify each Atlas page is accurate and visually impressive
- Note the most interesting finding from each (for Spotlight content):
  - "React's auth module blast radius: 47 files"
  - "Next.js middleware has hidden coupling to 12 modules"
  - etc.

**Deliverable by end of week:** 10-15 public Atlas pages live and verified. One-liner findings noted for social content.

---

### Priority 7: Reddit Presence Warming (Est: 30 min)

**Context:** Path A6 (BiP), Reddit monitoring. Reddit bans accounts that only self-promote. We need genuine, helpful comments in target subreddits BEFORE we ever mention unerr.

**Execution:**

- Spend 30 min browsing r/cursor, r/ClaudeCode, r/webdev, r/programming
- Leave 3-5 genuinely helpful comments on threads about:
  - AI agent context problems ("Cursor doesn't understand my codebase")
  - Code quality concerns ("AI keeps breaking my architecture")
  - Codebase understanding tools ("looking for something that maps my codebase")
- Do NOT mention unerr this week. Just be helpful. Build karma. This week is warming; Week 0 is when we introduce the tool.

**Deliverable by end of week:** 3-5 genuine Reddit comments in target subreddits. Account has recent helpful activity.

---

## Total Time Budget

| Priority | Task | Est. Hours |
|---|---|---|
| P1 | Distribution Plumbing (Claude skill, MCP dirs, Cursor plugin) | 3.0 |
| P2 | Tool Procurement (PostHog, Discord, Typefully, socials) | 2.0 |
| P3 | "unerr on unerr" Atlas page | 1.5 |
| P4 | Content Ammunition (HN, X, Reddit, LinkedIn, PH, Bookface) | 3.0 |
| P5 | Warm Pipeline (10 onboarding prospects) | 1.5 |
| P6 | Pre-Index Famous Repos | 1.5 |
| P7 | Reddit Presence Warming | 0.5 |
| **TOTAL** | | **13.0 hours** |

**Remaining week hours** go to: T1 product testing, landing page deployment, billing/account management (for future T2), and general engineering.

---

## III. The Optional "Moonshot" (If Time Permits)

**If you find an extra 2 hours:**

**Draft the first "Productized AI Audit" proposal (Path A9)**

Write a one-page PDF/Notion doc: "unerr AI Architecture & Drift Audit — $10,000." Contents:
- What you get: Full Causal Substrate analysis, Atlas report, Health grade with 12 detectors, blast radius map of critical modules, convention compliance report, AI contribution analysis
- Timeline: 48 hours from repo access to delivered report
- Format: Presented live to your VP Engineering in a 45-min walkthrough
- Why: "51% of code on GitHub is AI-generated. None of it has architectural governance. This audit shows you exactly what your AI agents have been doing to your architecture."

Having this ready in Week -1 means you can mention it in conversations from Day 0. If any VP Engineering in your network asks "this is interesting, but can you do this for our private repo?" — you hand them the proposal. One deal = $10K + $2K/mo ARR.

---

## IV. Week -1 → Week 0 Handoff Checklist

Before Week 0 (T1 Launch) starts, verify ALL of the following are TRUE:

| # | Checkpoint | Status |
|---|---|---|
| 1 | T1 (Atlas + Health + MCP) is deployed and working | ☐ |
| 2 | Landing page is live with clear CTA ("Connect your repo — free") | ☐ |
| 3 | "unerr on unerr" Atlas page is published and verified accurate | ☐ |
| 4 | 10-15 famous repo Atlas pages are live and verified | ☐ |
| 5 | Claude Code skill is submitted/pending | ☐ |
| 6 | 5+ MCP directory listings are submitted/pending | ☐ |
| 7 | Cursor plugin is scoped (submitted if time permitted) | ☐ |
| 8 | PostHog tracking is live (signup, activation, Atlas view funnels) | ☐ |
| 9 | Discord server is ready with invite link | ☐ |
| 10 | Typefully has Day 0 + Day 1 content queued | ☐ |
| 11 | HN, Reddit, LinkedIn, PH, Bookface posts are WRITTEN (not posted yet) | ☐ |
| 12 | 5+ onboarding sessions scheduled for Week 0-1 | ☐ |
| 13 | Reddit accounts have recent genuine activity in target subreddits | ☐ |
| 14 | Social profiles (X, LinkedIn) updated with unerr positioning + link | ☐ |

**If any checkpoint is RED on launch eve: delay launch by 1-2 days to complete it.** A cold start (no content ready, no distribution pipes, no warm prospects) wastes the launch spike. Better to launch Tuesday instead of Monday with everything ready.

---

## V. Week 0 GTM Tracker (To fill out next week)

| Task / Path | Expected Outcome | Actual Outcome | Effort (hrs) | Friction Encountered | Decision |
|---|---|---|---|---|---|
| **P1: Claude Code Skill submitted** | Listed in directory within 3-5 days | | | | |
| **P1: MCP Directories (5+) submitted** | Listings live within 1-7 days | | | | |
| **P1: Cursor Plugin** | Scoped / submitted | | | | |
| **P2: PostHog live** | Tracking signup + activation + Atlas view | | | | |
| **P2: Discord ready** | Server created, channels set, invite link works | | | | |
| **P2: Typefully loaded** | Day 0 + Day 1 content queued | | | | |
| **P3: unerr-on-unerr Atlas** | Published, verified accurate, screenshots taken | | | | |
| **P4: HN post drafted** | Ready to post Day 0 | | | | |
| **P4: X thread drafted** | 8-10 tweets, scheduled in Typefully | | | | |
| **P4: Reddit posts drafted (3)** | Written for r/programming, r/cursor, r/ClaudeCode | | | | |
| **P4: LinkedIn post drafted** | Written with screenshot | | | | |
| **P4: YC Bookface drafted** | Written with Atlas link | | | | |
| **P4: PH listing prepared** | Screenshots, tagline, description, first comment | | | | |
| **P5: Warm prospects invited** | 10 DMs sent, 5+ confirmed | | | | |
| **P6: Famous repos pre-indexed** | 10-15 Atlas pages live | | | | |
| **P7: Reddit warming** | 3-5 genuine comments posted | | | | |

**Fill this out by end of Week -1 and feed it into the Week 0 sprint planning.**

---

> **The bottom line for this week:** Zero revenue. Zero users. That's fine — this is the loading screen. Every minute invested in distribution plumbing, content ammunition, and warm pipeline this week translates to 10x more impact on Day 0. A coordinated launch with all pipes ready beats a scattered launch with half-baked distribution every single time. Do the boring setup work now so Week 0 is pure execution + engagement.
