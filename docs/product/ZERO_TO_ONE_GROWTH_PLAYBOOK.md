# unerr: Zero-to-One Growth Playbook — Out-of-Box Strategies for Maximum Paid Conversion

> **What this document is:** 9 unconventional, unerr-specific growth strategies designed for the 0-to-1 phase (pre-launch through first 10 weeks). Every strategy is mapped to a **real developer pain point** observed on HN, Reddit, X, and developer forums — and exploits unerr's unique capabilities to create conversion mechanics competitors cannot replicate. These strategies are **additive** to the existing [OSS Viral Adoption Strategy](OSS_VIRAL_ADOPTION_STRATEGY.md) and [$1M ARR Growth Plan](GROWTH_STRATEGY_1M_ARR.md).
>
> **Design principle:** Each strategy should move a user from free to Pro **instinctively** — not through sales, not through urgency, but through experiencing something they can't un-experience.
>
> **The paywall philosophy: "Show the fire for free. Charge to put it out."** All **knowledge** — Health Audits, Ghost Reports, Blast Radius Maps, AI Contribution summaries — is free or heavily ungated to maximize virality and top-of-funnel. The **paywall sits on actions**: Rewind, Auto-Correction, Policy Enforcement, Convention Gating, MCP graph enrichment. The user should feel: *"unerr showed me the fire for free; I pay to have unerr put it out."* This is the PostHog/Sentry model: give away the insight, charge for the resolution.
>
> **The meta-insight:** The bottleneck has shifted from code creation to code verification. Sonar projects a **40% quality deficit** for 2026 — more code enters the pipeline than reviewers can validate. The $4B AI code review market is growing because developers explicitly want "AI tools that catch AI mistakes." unerr is the quality layer between AI generation and the codebase. ([Sonar](https://www.sonarsource.com/blog/ai-coding-trust-gap/), [Qodo](https://www.qodo.ai/blog/best-ai-code-review-tools-2026/))
>
> **The external narrative (keep it simple):** When talking to developers, journalists, or investors, the tagline is: *"unerr: The intelligence infrastructure your coding agents need today. Code as fast as your AI can type. unerr will catch the mistakes."* The 9 strategies below are internal execution mechanics. Externally, the message is always: intelligence infrastructure, architectural understanding, works with every AI tool via MCP. unerr is what makes your agents smart about YOUR codebase.

---

## The Developer Pain Map — What's Actually Hurting Right Now

These aren't hypothetical problems. They're the top complaints across Hacker News, Reddit, X, and developer blogs in early 2026, ranked by severity and engagement:

### Pain 1: "The Code Looks Right But It's Not" — The Almost-Right Problem
**66% of developers** cite "AI solutions that are almost right" as their biggest frustration. **45% say debugging AI code takes longer** than writing it from scratch. Trust in AI accuracy fell from 40% to **29%** — yet usage increased to 84%. Developers are trapped: they use tools they don't trust. AI-generated code introduces **1.7x more total issues** than human-written code — **1.64x more maintainability errors**, **1.75x more logic/correctness errors**, and **1.57x more security findings**. **96% of developers** believe AI-generated code is not fully functionally correct, yet **48% admit they don't always check it before committing**. ([Stack Overflow 2025](https://survey.stackoverflow.co/2025/ai), [Sonar](https://www.sonarsource.com/blog/ai-coding-trust-gap/), [The Register](https://www.theregister.com/2025/12/17/ai_code_bugs/))

### Pain 2: "Cognitive Debt" — AI Writes Faster Than Humans Can Understand
AI agents produce code at **140-200 lines/min** while developers comprehend **20-40 lines/min** — a **5-7x velocity-comprehension gap**. Five independent research groups published on this in one week (Feb 2026). Margaret-Anne Storey (University of Victoria): *"Cognitive debt lives in the developer's head, while technical debt lives in the codebase."* ([Simon Willison](https://simonwillison.net/2026/Feb/15/cognitive-debt/))

### Pain 3: Vibe Coding Regret — "I Felt Pretty Bad Afterwards"
Multiple HN front-page threads: "Vibe Coding Is the Worst Idea of 2025," "I won't be vibe coding anymore." One developer: *"Eventually it turned into QA testing the work of a bad engineer and became exhausting. I had no new skills to show."* "Rescue engineering" is emerging as a professional category — Forrester predicts 75% of tech decision-makers will face moderate-to-severe technical debt by 2026. Freelancers on Fiverr fixing AI-generated code errors surged **712%** between October 2024 and March 2025. Dedicated "Vibe Coding Rescue" services have launched as businesses. ([HN](https://news.ycombinator.com/item?id=44959069), [Salesforce Ben](https://www.salesforceben.com/2026-predictions-its-the-year-of-technical-debt-thanks-to-vibe-coding/), [KUOW/NPR](https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop))

### Pain 4: AI Code Review Tools Are Noisy and Miss What Matters
HN front-page: *"There is an AI code review bubble."* A team testing CodeRabbit across 28 PRs found: **35% quality, 21% nitpicking, 15% useless noise, 13% wrong assumptions.** CodeRabbit scores **1/5 on completeness** — surfaces formatting issues but misses systemic/architectural problems. Most AI review tools generate 10-20 comments per PR, with **80% being noise**. Engineers ignore all feedback when most of it is cosmetic, and critical issues get buried. *"After a few months of use, tools that only added comments without minimizing review effort were ignored or turned off."* ([HN](https://news.ycombinator.com/item?id=46766961), [UCStrategies](https://ucstrategies.com/news/coderabbit-review-2026-fast-ai-code-reviews-but-a-critical-gap-enterprises-cant-ignore/), [DevToolsAcademy](https://www.devtoolsacademy.com/blog/state-of-ai-code-review-tools-2025/), [Greptile Blog](https://www.greptile.com/blog/ai-code-review-bubble))

### Pain 5: "AI Doesn't Understand My Codebase" — The #1 Request
The single most requested feature across every developer forum. Copilot "does not inherently understand the broader architecture of your project, how different modules interact, internal documentation or naming conventions, or agreed-upon practices across the team." Developers *"spend twenty minutes explaining their architecture to the chat, get great code, close the tab, and the next day it's gone."* METR study: developers **felt 20% faster but measured 19% slower** — a 39-44% perception gap. The key mechanism: AI forces senior developers into "Reviewer Mode" — reverse-engineering AI's logic, checking for hallucinations, and integrating — costing more than just writing it themselves. **Market validation:** Greptile raised $25M Series A at $180M valuation (Benchmark-led) specifically for codebase-aware review. GitNexus (knowledge graph via MCP) hit GitHub Trending with 1,200+ stars in one week. ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), [Tech-Now](https://tech-now.io/en/it-support-issues/copilot-consulting/why-is-the-copilot-not-understanding-shared-codebases-or-team-conventions), [TechCrunch](https://techcrunch.com/2025/07/18/benchmark-in-talks-to-lead-series-a-for-greptile-valuing-ai-code-reviewer-at-180m-sources-say/))

### Pain 6: Code Duplication Explosion
GitClear analysis of 211M lines: **4x more code cloning** since AI adoption. Refactored lines dropped from 25% to under 10%. Code churn (revised within 2 weeks) grew from 3.1% to 5.7%. PR size up **154%**, review time up **91%**. ([GitClear](https://www.gitclear.com/ai_assistant_code_quality_2025_research), [DORA 2025](https://dora.dev/research/2025/dora-report/))

### Pain 7: AI Slop Is DDoS-ing Open Source
curl shut down its 6-year bug bounty program after AI slop submissions hit 20% with zero valid vulnerabilities — useful reports dropped from 15% to 5%. Godot maintainers: *"increasingly draining and demoralizing."* Tldraw auto-closes ALL external PRs. Ghostty, EFF, and Widelands banned AI-generated contributions. Jeff Geerling: *"AI is destroying Open Source, and it's not even good yet."* GitHub is considering giving maintainers options to disable PRs entirely, restrict to collaborators, and add AI-attribution transparency. ([The Register](https://www.theregister.com/2026/02/18/godot_maintainers_struggle_with_draining/), [Lobsters](https://lobste.rs/s/ijyacx/overrun_with_ai_slop_curl_scraps_bug), [Jeff Geerling](https://www.jeffgeerling.com/blog/2026/ai-is-destroying-open-source/), [The Register](https://www.theregister.com/2026/02/03/github_kill_switch_pull_requests_ai/))

### What Developers Say They Want
> *"If 2025 was the year of speed, 2026 will be the year of quality. Whoever cracks context-aware AI code quality first wins the next phase of developer tooling."* — [CodeRabbit Blog](https://www.coderabbit.ai/blog/2025-was-the-year-of-ai-speed-2026-will-be-the-year-of-ai-quality)

### Pain 8: "AI Brain Fry" — Tool Fatigue and Cognitive Burnout
Harvard Business Review (Feb 2026): **83% of workers say AI increased their workload.** "AI brain fry" identified as a new form of cognitive burnout from constant AI output verification. Using a small set of AI tools aligns with productivity gains, but **adding more tools reduces those gains**. 70% of developers use 2-4 AI tools simultaneously. **50% lose 10+ hours/week** to non-coding tasks (finding info, adapting tools, switching context). Developers want a "single pane of glass" for code intelligence but settle for fragmented tools. The Karpathy effect: *"I 'Accept All' always, I don't read the diffs anymore"* — developers know they should verify but increasingly don't because the volume is too high. ([Harvard Business Review](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it), [Atlassian DevEx 2025](https://www.atlassian.com/teams/software-development/state-of-developer-experience-2025))

**The convergent wish list:**
1. AI that understands existing architecture before generating anything
2. Real bug detection, not style nitpicking
3. Verification assistance that closes the 5-7x comprehension gap
4. Pattern enforcement — "this is how we do things here"
5. Trust through transparency — WHY something is wrong, not just that it might be
6. Easy rollback — "undo" that actually undoes AI's file changes, not just the conversation
7. A safety net — move fast with AI without quality cratering

---

## The Paywall Architecture — "Insights Free, Actions Paid"

The single most important architectural decision for conversion: **never gate the diagnosis. Gate the cure.**

| Layer | Free Forever (Maximizes Virality) | Pro Only (Maximizes Conversion) |
|-------|-----------------------------------|--------------------------------|
| **Knowledge** | Health Audit score + grade, Ghost Report email (full detail), Blast Radius maps (public, shareable), AI Contribution summary (% AI-generated, agent breakdown), Convention violations list (what's wrong), Dead code / duplication detection | — |
| **Context** | MCP server: basic file-level info, function signatures | MCP server: full graph context (edges, blast radius, justifications, conventions, anti-patterns) |
| **Actions** | — | **Rewind** (rollback AI damage), **Auto-Correction** (fix convention violations), **Policy Enforcement** (block PRs that violate rules), **Convention Gating** (enforce `.unerr/rules.yaml` at merge), **Drift Alerts** (real-time Slack/email notifications), **Compliance Boundaries** (full AI contribution report with compliance zone tracking) |

### Why This Split Works

**The Sentry/PostHog/Snyk validation:** This exact split — diagnosis free, resolution paid — is the most battle-tested monetization pattern in developer tools. It works because developers share what scares them (the diagnosis) and pay for what saves them time (the fix). Every company in the table below built a $100M+ business on this principle. unerr's unique advantage: the diagnosis itself (blast radius maps, Ghost Reports) is more shareable and more terrifying than any competitor can produce, because it requires the knowledge graph. The free tier isn't a loss leader — it's the most effective marketing channel that exists in devtools.

**The insight is the top-of-funnel ad.** Every Ghost Report email, every public Blast Radius map, every Health Audit badge is a billboard. Gating insights kills virality. PostHog gives away analytics to 190K+ customers and converts 2% with 3x expansion — because the insight creates the need for the action.

**The action is the conversion trigger.** The developer reads the Ghost Report: "14 AI-generated functions duplicate existing logic." They know the problem. The fix — Rewind to before the duplication, or Auto-Correct the violations — requires Pro. **$20/mo vs. 3 hours of manual cleanup** is not a close decision.

**The MCP degradation is the special case.** During trial, the MCP server returns full graph context (an "action" — enriching AI output). Post-trial, it returns basic file-level info (still useful, still free). The degradation is felt not as "unerr gated a feature" but as "my AI agent got dumber." This is Strategy 1's power: the paywall is invisible to the user — they just feel the quality drop.

### Paywall Red Lines — What Must NEVER Be Gated

These are non-negotiable — gating any of these would be perceived as hostile and contradicts the buyer persona's psychology (senior devs who hate being sold to, who have tool fatigue, and who need to evaluate before committing):

1. **The Ghost Report email** — This is a diagnosis of THEIR codebase. Gating a doctor's diagnosis feels predatory. It must arrive in full, with every finding visible, even on the free tier. The CTA is the fix, not the finding.
2. **Blast Radius maps** — These are the viral screenshots. Every gated screenshot is a billboard that was never posted. Public and shareable, always.
3. **Health Audit score** — This is the "aha moment." If the first thing a developer sees requires a credit card, they're gone in 5 seconds (73% want hands-on experience immediately).
4. **Convention violations list** — Telling someone "you have 7 violations but we won't show you which ones" is the exact pattern that makes developers hate enterprise tools.
5. **PR review summary** — The one-line PR summary is the billboard. Gating it kills the team discovery mechanism.

**The heuristic:** If a developer would feel *manipulated* by the gate, it's on the wrong side of the paywall. If they'd feel *"that's fair, the fix is worth paying for"*, it's on the right side.

### Precedent Validation

| Company | What's Free | What's Paid | Result |
|---------|------------|-------------|--------|
| **Sentry** | Full stack trace, error context, breadcrumbs | Issue assignment, alerting rules, automated resolution | $128M+ ARR, 70% self-serve |
| **PostHog** | Product analytics, session replay (up to volume) | Feature flags, A/B testing, data pipelines | 190K+ customers, 3x expansion/18mo |
| **Datadog** | Agent metrics, dashboards | APM traces, log management, alerting | $2.1B ARR |
| **Snyk** | Vulnerability scanning (OSS) | Fix PRs, priority scoring, policy enforcement | $343M ARR |

Every one of these companies gives away the "scary truth" and charges for the resolution. None of them gate the diagnosis. This is the proven playbook for developer tools where the insight itself is viral.

---

## Market Benchmarks — What "Good" Looks Like

| Tool | ARR Trajectory | Conversion Rate | Core Mechanic |
|---|---|---|---|
| **Cursor** | $1M → $100M (12mo) → $1B (24mo) → $2B (27mo) ([SaaStr](https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/), [TechCrunch](https://techcrunch.com/2026/03/02/cursor-has-reportedly-surpassed-2b-in-annualized-revenue/)) | 36% free→paid, 42% trial→sub ([DevGraphiq](https://devgraphiq.com/cursor-statistics/)) | Multi-file refactoring → "how did I code without this?" ⚠️ Sentiment crashed from 85% → 45% positive after pricing bait-and-switch ([NxCode](https://www.nxcode.io/resources/news/cursor-review-2026)) |
| **Lovable** | $0 → $17M (90 days) → $200M → $300M (Jan 2026) ([AI Funding Tracker](https://aifundingtracker.com/lovable-vibe-coding-revenue/)) | 85% paid retention after month 1 | Prompt → deployed app in 60 seconds |
| **Bolt.new** | $4M ARR (30 days) → $20M (60 days) → $40M+ ([GrowthUnhinged](https://www.growthunhinged.com/p/boltnew-growth-journey)) | 22-min avg session depth | Zero-install, in-browser, instant |
| **Linear** | $8.4M → $100M ARR (18mo), $35K lifetime ad spend ([TechCrunch](https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/)) | 100% word-of-mouth | Craft so good users recruit others |
| **CodeRabbit** | $15M+ ARR, 20% MoM growth, 70K GitHub installs ([TechCrunch](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/)) | Two-click install, zero config | Auto-reviews every PR — framed as "helpful junior dev who still needs your senior guidance" |
| **Claude Code** | Zero → #1 loved tool in 8 months. 46% of Pragmatic Engineer respondents named it most-loved (vs 19% Cursor, 9% Copilot). 4% of all public GitHub commits (~135K/day) ([Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026)) | 90% of Anthropic's own code AI-written | "It understood the codebase structure, respected the workflow, and grasped requirements" |

**Key conversion data:**
- **PLG dev tools average 5% signup-to-paid.** Cursor at 36% is 7x the median. ([OpenView](https://openviewpartners.com/2023-product-benchmarks/))
- **Reverse trials convert 2-3x standard freemium.** 7-day trials convert at ~40% vs. 31% for 60+ day. ([1Capture](https://www.1capture.io/blog/free-trial-conversion-benchmarks-2025))
- **3-developer threshold triggers enterprise.** Cursor went from 25% enterprise revenue at $400M ARR to 60% at $2B ARR. **81% of non-IT employees** now make or influence tech purchasing decisions. ([Bloomberg](https://www.bloomberg.com/news/articles/2026-03-02/cursor-recurring-revenue-doubles-in-three-months-to-2-billion))
- **Each additional product feature triples conversion.** (GitLab data — [GitLab](https://ir.gitlab.com/news/news-details/2025/GitLab-Reports-Fourth-Quarter-and-Full-Fiscal-Year-2025-Financial-Results/default.aspx))
- **Onboarding must be < 3 steps.** 3-step tours: 72% completion rate. 7-step tours: only 16%. 73% of developers want hands-on experience within minutes. ([DevToolsAcademy](https://www.devtoolsacademy.com/blog/state-of-ai-code-review-tools-2025/))
- **Documentation is the #1 trust signal (34.2%) AND #1 abandonment trigger (17.3%).** Poor docs kill conversion before the product has a chance. ([Open Source Dev Adoption Study](https://www.catchyagency.com/post/what-202-open-source-developers-taught-us-about-tool-adoption))
- **AI-native companies have worse retention**: median GRR of 40%, median NRR of 48%. Low prices attract dabblers, and dabblers churn. ([Growth Unhinged](https://www.growthunhinged.com/p/the-ai-churn-wave))
- **Pricing trust is existential.** Cursor's pricing change caused a single HN thread with 580+ critical comments, language of "betrayal." A 40-point sentiment crash overnight. unerr must never break pricing trust. ([Cursor Pricing Analysis](https://www.getmonetizely.com/blogs/cursor-ais-billion-dollar-saas-pricing-fiasco))

**unerr's core conversion mechanic:** The moment an AI agent starts pulling context from unerr's MCP server, the agent's output quality visibly improves. Removing unerr doesn't just remove a tool — it makes every AI agent in the developer's stack dumber.

---

## Strategy 0: "Instant Wow" — Streaming Progress + Pre-Indexed Top 500

> **Addresses:** The onboarding abandonment problem — 84% drop off at 7-step tours, 73% want hands-on experience within minutes
> **Emotional trigger:** Surprise — "It's already finding things in MY codebase"
> **Conversion strength:** ★★★★★ (force multiplier for every other strategy)

### The Problem

The health audit is unerr's top-of-funnel: the first moment a developer sees value. **Every second of wait time is a lost conversion.** Bolt.new hit $20M ARR in 60 days because time-to-value was under 60 seconds. Lovable's 85% retention starts with a 60-second deploy.

### The Buyer Psychology of Waiting

Our buyer persona — the senior dev / tech lead — doesn't want a loading spinner. But they also don't need instant cached results to be impressed. What they need is **visible progress from second 1.** The psychology: watching an AI analyze YOUR codebase in real-time is inherently compelling. It's the airport luggage carousel principle — Houston Airport solved complaints not by making luggage arrive faster, but by making passengers walk longer to the carousel so they waited less. **Perceived wait time matters more than actual wait time.**

### How It Works — Two Mechanisms

**Mechanism 1: Streaming Progress (primary — works for ALL repos)**

When a developer connects their repo, indexing starts immediately and streams findings to the UI in real-time:

```
Analyzing your-company/your-repo...

✓ Scanned 1,247 files across 3 languages          [2s]
✓ Built dependency graph: 4,891 edges              [8s]
⚡ First finding: auth/session.ts has a blast
   radius of 47 files                              [12s]
⚡ Found 14 functions that duplicate existing
   logic in lib/utils/                             [18s]
⚡ 3 convention patterns detected                  [22s]
▸ Computing health score...                        [running]

Health: B+  │  Hotspot: auth/session.ts (47 files)  │  14% AI-generated

[🔍 Full Ghost Report]  [📊 Blast Radius Map]  [🔗 Connect MCP]
```

The developer sees value accumulating in real-time. By second 12, they've already seen something specific and scary about THEIR codebase. They're hooked before the full pipeline finishes. **This is more compelling than a cached result** — they're watching the AI work on their code, which builds trust ("it's actually analyzing, not showing a template").

**This is the Bolt.new model.** Bolt doesn't actually deploy in 60 seconds — it takes 2-3 minutes. But you see the code being written from second 1. The perceived time-to-value is zero.

**Mechanism 2: Pre-Indexed Top 500 (supplementary — for demos and content)**

Pre-index the top 500 GitHub repos (by stars + contributor activity) for two specific use cases:
1. **Public Autopsy content** (Strategy 5) — blog posts link to instant results
2. **"Try on a famous repo" demo** — landing page lets visitors click "React," "Next.js," or "Rust" to see a live health audit without signing up

This is NOT the primary onboarding mechanism. The streaming progress view handles the actual user flow. The pre-indexed set is a marketing asset.

| Tier | Repos | Purpose | Refresh |
|------|-------|---------|---------|
| **Pre-indexed** | Top 500 by stars | Demos, Public Autopsy content, landing page | Weekly |
| **On-demand** | All other repos | Actual user onboarding via streaming progress | Real-time |

### Why This Is "Strategy 0"

This isn't a standalone conversion strategy — it's a **force multiplier for every other strategy**:
- **Strategy 1 (MCP Dependency Trap)**: Streaming indexing means MCP starts returning partial graph context within seconds, not after a 10-minute wait
- **Strategy 3 (Haunted Codebase)**: The first Ghost Report findings appear during onboarding, not on Day 2
- **Strategy 5 (Public Autopsy)**: Blog posts link to pre-indexed results for instant reader engagement

### Implementation

- **Streaming progress**: WebSocket or SSE connection from indexing pipeline to frontend. Emit findings as they're computed (blast radius hotspots first — they're the "aha moment"). This is a frontend + API change, not a pipeline change.
- **Pre-indexed 500**: Temporal scheduled workflow, weekly. Cache in Redis (hot) + ArangoDB (persistent).
- **Effort**: 4-5 days (streaming UI + pipeline event emission + 500-repo caching)
- **Cost**: ~$30-50/mo compute for weekly re-indexing of 500 repos

---

## The 9 Strategies — Ranked Strongest First

Every strategy is mapped to the specific developer pain it addresses and the emotional trigger it activates.

---

## Strategy 1: "The MCP Dependency Trap" — Make Their AI Agent Addicted

> **Addresses:** Pain 5 ("AI doesn't understand my codebase") — the #1 developer request
> **Emotional trigger:** Fear of falling behind — "My AI was smarter yesterday. What happened?"
> **Conversion strength:** ★★★★★

### The Concept

unerr's MCP server (39 tools) provides architectural context to every AI coding agent. During the trial, the agent becomes measurably smarter. When the trial ends, the agent gets dumber — and the developer *notices.*

### How It Works

1. **Day 1**: Developer connects unerr MCP to their IDE (Cursor, Windsurf, Claude Code, etc.)
2. **Day 1-7**: Every AI query gets enriched with architectural context from the Causal Substrate. The agent knows which functions are related, what the blast radius is, what conventions exist, what patterns are anti-patterns
3. **Day 7 (trial expiry)**: The MCP server returns degraded responses — still functional, but stripped of graph context. Just basic file-level information.
4. **The developer immediately notices:** Their AI agent starts suggesting code that violates conventions, duplicating existing utilities, breaking boundaries. The contrast is visceral.

### Why This Is #1

This directly solves the **#1 developer craving** — codebase-aware AI. The METR study showed developers felt 20% faster but measured 19% slower, largely because AI didn't understand existing architecture. unerr's MCP server closes this gap. When it degrades post-trial, the developer re-experiences the exact frustration they were trying to escape.

**The emotional arc of adoption plays perfectly here.** Research shows the tool adoption arc is: Curiosity → Surprise ("it actually understood my codebase") → Dependency ("I can't go back") → Evangelism ("you have to try this"). The MCP Dependency Trap ensures the user reaches the Dependency stage by Day 5-6. MCP now has **97M+ monthly SDK downloads** and **10,000+ active servers** — first-class support in Claude, ChatGPT, Cursor, Gemini, and VS Code. unerr sits in a protocol that every major AI tool uses. ([Pento MCP Review](https://www.pento.ai/blog/a-year-of-mcp-2025-review))

This is a **reverse trial on steroids**. Traditional reverse trials downgrade features — "you lose dark mode." The MCP Dependency Trap downgrades the *entire AI stack*. It's not "unerr got worse." It's "Cursor/Claude/Windsurf got worse." The user attributes the quality drop to their AI agent, not to unerr — which makes the re-upgrade decision feel like fixing their AI, not buying a subscription.

Reverse trials convert at **2-3x the rate of standard freemium** (~5% baseline). ([Thoughtlytics](https://www.thoughtlytics.com/blog/reverse-trial-model-saas))

### Competitive Moat

This only works because unerr is the **context layer** for AI agents, not a standalone tool. CodeRabbit, SonarQube, DeepSource — none of them sit in the MCP request path. They produce reports. unerr produces intelligence that other tools consume. Removing unerr doesn't just remove unerr — it removes the IQ boost from every tool in the stack.

### Implementation

- **MCP server**: Already has 39 tools. Add a `subscription_status` check that returns full vs. degraded responses
- **Degraded mode**: Return file-level info only (no graph edges, no blast radius, no convention rules, no justifications)
- **"Quality comparison" email on Day 8**: "Your AI agent made 6 suggestions yesterday that violated your codebase conventions. With unerr, it made 0."
- **Effort**: 2-3 days

---

## Strategy 2: "The Rewind Rescue" — Convert at the Moment of Maximum Pain

> **Addresses:** Pain 1 ("almost right but not quite") + Pain 3 (vibe coding regret)
> **Emotional trigger:** Frustration elimination — 67% of developers cite frustration as #1 productivity killer
> **Conversion strength:** ★★★★★

### The Concept

Developers don't buy insurance when they're safe. They buy it after the fire. unerr's Rewind feature should activate at the **moment of crisis** — when AI just broke the codebase and the developer is staring at the mess.

### How It Works

1. **unerr continuously monitors for "drift events"**: Sudden spikes in code complexity, new files with high duplication scores, test failures after AI-generated commits
2. **When a drift event is detected**, unerr sends an in-app alert:
   ```
   ⚠️ Drift Detected: 14 AI-generated functions added in the last 2 hours
   increased complexity by 41% in src/api/.

   3 of these functions duplicate existing logic in lib/utils/.

   [🔄 Preview Rewind] [📊 View Blast Radius] [✓ Accept Changes]
   ```
3. **The drift alert always fires** — free forever (it's an insight, not an action). The "Preview Rewind" and "View Blast Radius" views are free too. **The Rewind action itself requires Pro.** The developer sees the fire for free. Putting it out costs $20/mo.

### Why This Is #2

This directly addresses the developer who said: *"Eventually it turned into QA testing the work of a bad engineer and became exhausting."* Rewind is the escape hatch from vibe coding regret. It's the "undo" button for AI mistakes that developers are **literally building community tools to fill**. Claude Code users filed GitHub issue #353 requesting undo/checkpoint features. A community project [claude-code-rewind](https://github.com/holasoymalva/claude-code-rewind) was built specifically to fill this gap. OpenCode's `/undo` command "only rolls back the AI conversation message, not the associated file changes." One Cursor user "spent two hours reverting changes because the AI kept breaking their code."

**The psychology:** The developer sees the alert. They know the problem exists. The "Preview Rewind" button is right there. It costs $20/mo. The alternative is manually finding and fixing 14 functions. **$20 vs. 3 hours of debugging** is not a close decision. 95% of developers spend extra time correcting AI-generated code, with senior engineers carrying most of the load.

**Precedent:** Sentry converts at the moment of the production error — not during a feature tour. DataDog converts when the server is on fire, not during onboarding. unerr should convert when the AI just broke the codebase. **The conversion trigger for every successful dev tool is a concrete, visible time saving on a task they do daily** — not hypothetical productivity gains.

### Implementation

- **Drift detection**: Already exists in the anti-pattern detection pipeline
- **Alert delivery**: In-app notification + optional Slack/email webhook
- **Rewind preview**: Existing Rewind infrastructure with a "preview-only" mode for expired trials
- **Effort**: 2-3 days

---

## Strategy 3: "The Haunted Codebase" — Show the Ghosts Before They Pay

> **Addresses:** Pain 2 (cognitive debt) + Pain 6 (duplication explosion)
> **Emotional trigger:** Loss aversion — "I can't un-know this"
> **Conversion strength:** ★★★★★

### The Concept

Instead of showing users what unerr **does**, show them what's **already wrong** — for free, ungated, with terrifying specificity. Then let the fix be the paywall.

### How It Works

1. **During the 7-day trial**, unerr runs the full Causal Substrate pipeline on their repo
2. **On Day 2**, the user receives an automated "Ghost Report" — a personalized email:
   - **"3 functions in your codebase have no callers but are imported in 7 files"** (dead code with phantom dependencies)
   - **"Your AI agent generated 14 functions last week that duplicate existing logic"** (AI duplication — addresses Pain 6 directly)
   - **"If `src/auth/session.ts` breaks, 47 files are in the blast radius"** (blast radius preview)
   - **"Your codebase health dropped from B+ to C in the last 30 days"** (drift detection)
3. **The Ghost Report itself is fully ungated** — every finding is shown in complete detail (maximizes virality and forwarding). **Each finding links to the action that fixes it** — Rewind, Auto-Correct, or Policy Enforcement — which requires Pro

### Why This Is #3

**Loss aversion is 2x stronger than gain-seeking** ([Kahneman & Tversky](https://en.wikipedia.org/wiki/Loss_aversion)). This directly exploits the **cognitive debt** crisis: developers can't comprehend what their AI agents are writing, so they don't know what's wrong. The Ghost Report closes the comprehension gap with terrifying specificity. Before unerr, the developer didn't know about the 4x code duplication. After the Ghost Report, they can't un-know it.

**Why Day 2 specifically:** 73% of developers want hands-on experience within minutes, and 3-step onboarding tours have 72% completion vs. 16% for 7-step. The Ghost Report is delivered AFTER the developer has already connected their repo and seen value — it deepens engagement at the moment of highest curiosity. **What developers dismiss in 5 minutes:** generic demos that don't touch THEIR codebase, complex onboarding, and "almost right" first output. The Ghost Report is the opposite — it's hyper-specific to their repo.

**Important:** Iowa State research found fear-based marketing backfires. The Ghost Report must feel like a **helpful doctor's diagnosis**, not a scare tactic. Tone: "Here's what we found. Here's how to fix it." Not: "Your codebase is a disaster." Harvard Business Review identifies "AI brain fry" — cognitive burnout from constant AI verification. The Ghost Report reduces cognitive load by doing the verification for them. ([Iowa State](https://research.iastate.edu/2025/01/07/selling-fear-marketing-for-cybersecurity-products-often-leaves-consumers-less-secure/), [HBR](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it))

### Competitive Moat

No competitor can generate this report. CodeRabbit finds syntax issues. SonarQube finds code smells. Only unerr can say "if this function breaks, here are the 47 files that break with it" — because only unerr has the knowledge graph.

### Implementation

- **Data source**: Health audit + blast radius + AI attribution already exist
- **Delivery**: Resend email with react-email template, triggered by Temporal workflow on Day 2
- **Effort**: 2-3 days

---

## Strategy 4: "The Degradation Email" — The Most Effective Email You'll Ever Send

> **Addresses:** Pain 1 (almost right) + Pain 4 (noisy tools miss what matters)
> **Emotional trigger:** Quantified regret — "here's exactly what you lost"
> **Conversion strength:** ★★★★★

### The Concept

On Day 8 (one day after trial expiry), send the single most conversion-optimized email possible — one that shows the developer exactly what they lost, with evidence no competitor can produce.

### The Email

```
Subject: Your codebase had 7 issues yesterday. unerr would have caught them.

Hi {name},

Your 7-day trial ended yesterday. Here's what happened in the 24 hours since:

🔴 3 PRs merged without blast radius analysis
   - PR #142 touched auth/session.ts (47-file blast radius)
   - PR #145 added a new database query outside /lib/db (convention violation)
   - PR #147 duplicated retry logic that already exists in lib/utils/http.ts

🔵 Your AI agent made 12 suggestions without architectural context
   (compared to 0 context-less suggestions during your trial)

Total estimated review time saved during your 7-day trial: 4.2 hours
Estimated review time lost yesterday: 45 minutes

Keep your safety net for $20/mo →
[Reactivate Pro]

— unerr

P.S. Your conventions file (.unerr/rules.yaml) is still in your repo.
Without Pro, it's just documentation. With Pro, it's an immune system.
```

### Why This Is #4

**This email is impossible to send without unerr's pipeline** — it requires blast radius calculation, convention violation detection, AI attribution tracking, and real-time PR monitoring. No competitor has the data to send this email. CodeRabbit can say "you missed 3 reviews." Only unerr can say "PR #142 touched a 47-file blast radius and duplicated existing retry logic."

**This is not a sales email. It's a damage report.** The developer reads it and thinks "shit, I need to re-subscribe" — not "hmm, should I buy this?" Research shows conversion **quadruples** when you proactively reach out with personalized data. ([OpenView](https://openviewpartners.com/2023-product-benchmarks/))

### Implementation

- **Trigger**: Temporal scheduled workflow, 24 hours after `trial_ends_at`
- **Data collection**: Run review pipeline on all PRs merged in the 24 hours post-expiry
- **Email**: Resend + react-email template
- **Effort**: 2-3 days

---

## Strategy 5: "The Public Autopsy" — Turn Every Vibe-Coded Disaster Into a Signup

> **Addresses:** Pain 3 (vibe coding regret) + Pain 6 (duplication explosion)
> **Emotional trigger:** "That could be MY codebase" — recognition of hidden problems
> **Conversion strength:** ★★★★☆

### The Concept

The vibe coding hangover is real — multiple HN front-page threads, $4.7B market hitting the complexity wall. "Rescue engineering" is now a professional category. Freelancers fixing vibe-coded WordPress errors surged 712%. Dedicated rescue services (Ronas IT, Outsourcify, Murmu Software) have launched as businesses. The intake call: *"This project was built entirely with AI and it's unmaintainable."* unerr can diagnose *exactly* what went wrong — publicly. ([Vestbee](https://www.vestbee.com/insights/articles/who-and-how-is-driving-the-vibe-coding-revolution), [KUOW/NPR](https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop))

### How It Works

1. **Weekly "Public Autopsy" series**: Pick a trending open-source project that was obviously vibe-coded
2. **Run unerr's full pipeline**: Health audit, blast radius map, convention violations, AI attribution, dead code detection
3. **Publish** as blog post + X thread + short-form video:
   - "This vibe-coded SaaS has 340 functions with no callers"
   - "47% of this codebase was AI-generated, and 23% of it duplicates existing logic"
   - "If you change the auth module, 89 files break — here's the blast radius map"
4. **End every autopsy with**: "Want to see your own repo's autopsy? [Run a free audit](https://unerr.dev/audit)"

### Why This Works

This meets developers where they already are emotionally. The HN commenter who said "I felt pretty bad afterwards" after vibe coding — they're already primed. The autopsy validates their suspicion ("my codebase probably has these problems too") and offers a specific, free next step (run the audit).

**The unerr advantage:** No other tool can produce this level of autopsy detail. "This codebase has a blast radius of 89 files centered on auth/session.ts, and the AI agent that wrote it didn't know about the existing retry utility in utils/http.ts" is *specific, terrifying, and shareable.*

### Reaching Rescue Engineers — Without a Dedicated Landing Page

The 712% surge in freelancers hired to fix AI slop is real signal, but building a separate landing page + distribution channel for this audience is a 0-to-1 phase distraction. Here's why, and what to do instead:

**Why NOT a dedicated `/rescue` page:**
- Freelancers are project-based (they fix one codebase and move on) — low LTV, high churn. Our buyer persona is the senior dev on a team who stays.
- Maintaining a second positioning ("diagnostic MRI for freelancers") fragments the core message ("quality layer for your AI agents").
- SEO for "vibe coding rescue" has unknown search volume — it's loud on Twitter but unproven as a search intent.
- Distribution in freelancer communities (Fiverr Pro, Toptal) is a completely different go-to-market motion than the PLG developer funnel we're building.

**What to do instead — the referral play:**
1. **The Public Autopsy content already reaches this audience.** A freelancer hired to fix a vibe-coded mess will search for "AI code quality analysis" or "codebase health check" — our autopsy content ranks for these.
2. **Add a "Share this report" link to every Ghost Report and Health Audit.** When a consultant runs unerr on a client's codebase, they forward the report to the client. The report includes: "Keep your safety net running: [Activate unerr for your-company/your-repo →]". **Every consultant becomes a warm referral channel without any dedicated infrastructure.**
3. **Track referral attribution.** When a Ghost Report is forwarded and the recipient signs up, credit the referrer. This naturally surfaces rescue engineers who bring in multiple clients.

This is leaner, requires zero dedicated pages, and converts better because the referral comes with social proof (the consultant already used unerr successfully on the client's code).

### Content Calendar

| Week | Target | Angle |
|---|---|---|
| Pre-launch | Popular Lovable/Bolt.new template | "What Lovable doesn't tell you about the code it generates" |
| Week 1 | Trending GitHub repo with AI PRs | "We ran unerr on [repo] — here's what the AI broke" |
| Week 2 | A real startup's codebase (with permission) | "This YC startup's codebase autopsy: B- health, 23% dead code" |
| Week 3 | Comparison: human vs AI codebase | "Same app, one human-written, one vibe-coded. The blast radius difference is shocking." |
| Week 4+ | Community submissions | "Submit your repo for a public autopsy" (viral loop) |

**Traffic sustainability:** The Public Autopsy series is not optional content marketing — it's the primary post-launch traffic engine. Without it, daily visitors will decay from launch spike to near-zero within 72 hours. Commit to the cadence: 1 autopsy per week minimum, shared as X thread + Reddit post + blog. Each autopsy should generate 500-2,000 visitors. At 4 autopsies/month, that's 2,000-8,000 monthly visitors — a meaningful ongoing acquisition channel that compounds as backlinks and SEO build.

### Implementation

- **Pipeline**: Health audit endpoint → export results → blog template
- **Format**: Blog post + X thread + 2-min video
- **Effort**: 1 day setup, then 2-3 hours/week per autopsy

---

## Strategy 6: "The Blast Radius Moment" — The Screenshot That Sells Itself

> **Addresses:** Pain 2 (cognitive debt — the 5-7x comprehension gap)
> **Emotional trigger:** Visual shock — "I had no idea my codebase was this entangled"
> **Conversion strength:** ★★★★☆

### The Concept

unerr's Blast Radius visualization — showing exactly which files/functions break when a single file changes — directly addresses cognitive debt. Developers can't comprehend 140-200 lines/min of AI output. The blast radius map makes the invisible visible in one glance.

### How It Works — The One-Line PR Summary

**The core lesson from Pain 4:** Developers turn off tools that add noise to their PRs. CodeRabbit generates 10-20 comments per PR, 80% noise, and engineers ignore all of it. **unerr's PR presence must be the opposite of this: one line of pure signal.**

1. **Every PR review** ends with a **single-line summary** — the Codecov model, not the CodeRabbit model:
   ```
   unerr ▸ Blast: 47 files (auth/session.ts) · Health: B+ → B · 1 convention violation · Details →
   ```
   That's it. One line. The developer sees the blast radius, the health delta, and the violation count at a glance. If they want more, they click "Details." **If they don't click, the line still did its job as a billboard.**

   Why one line works:
   - **It respects the senior dev's time.** Our buyer persona reviews 5-15 PRs/day. They will not read a 10-line box on each one. They will read one line.
   - **It's the opposite of CodeRabbit.** The positioning is implicit: "we give you the signal, not the noise." This IS the product differentiation, visible in every PR.
   - **It degrades gracefully.** One line renders correctly in every GitHub/GitLab Markdown parser, email notification, Slack integration, and mobile view. No Unicode rendering issues, no SVG compatibility problems.

2. **The click-through page** at `unerr.dev/blast/{owner}/{repo}/{pr}` is where the visual richness lives — interactive blast radius graph, dependency chains, convention violations with code context. This page is **public and shareable** — no login required. The rich visualization lives here, not in the PR comment.

3. **Non-user exposure:** When developer A has unerr and developer B reviews their PR, developer B sees the one-line summary — even without a unerr account. Over time, developer B sees it on every PR. The curiosity builds. They click "Details" once. They see the blast radius map. Now they want it on their repos too. **This is how Codecov and Dependabot grew: unavoidable, minimal, useful PR presence.**

### Why One Line Beats a Sparkline

Our own Pain Map tells us the answer:

> *"After a few months of use, tools that only added comments without minimizing review effort were ignored or turned off."* — Pain 4

A 10-line sparkline box is a CodeRabbit-style comment. It adds visual noise to every PR. Senior developers — our buyers — will disable it within a week. A one-line summary is information they actually want (blast radius + health delta) in a format that respects their workflow.

**The Codecov precedent:** Codecov built a $30M+ business on a one-line PR comment (`Coverage: 87.3% (+2.1%)`). Not a chart. Not a sparkline. One line with a link. Every PR was an ad. Dependabot did the same. Linear grew on craft and restraint, not decoration.

**The "Blast Radius Challenge" still works.** The shareable artifact is the interactive map page, not the PR comment. "Post your worst blast radius map" links to `unerr.dev/blast/...` — the rich, screenshot-worthy visualization. The PR comment is the billboard; the page is the showroom.

**92% of developers** said AI tools are "increasing the blast radius of the amount of bad code that needs to be debugged." ([DevOps.com](https://devops.com/survey-ai-tools-are-increasing-amount-of-bad-code-needing-to-be-fixed-2/)) **70% discover tools through social/community channels.** The one-line comment creates curiosity; the shareable map page converts it.

### Implementation

- **One-line renderer**: Template string with blast radius count, health score delta, violation count, and link. Trivially simple — no SVG, no Unicode art.
- **Public blast radius page**: New route `/blast/{owner}/{repo}/{pr}` — interactive graph, public, shareable, screenshot-worthy
- **Social share**: "Share on X" button with pre-filled text on the blast radius page
- **Effort**: 3-4 days (simpler than sparkline — most effort is the interactive page)

---

## Strategy 7: "The Convention Lock-In" — Config Files That Spread Like Viruses

> **Addresses:** Pain 4 (noisy reviews) + Pain 5 (AI doesn't follow conventions)
> **Emotional trigger:** Relief — "finally, my AI knows how we do things here"
> **Conversion strength:** ★★★★☆

### The Concept

unerr's Rules Engine auto-generates a `.unerr/rules.yaml` from your codebase patterns. This solves the #4 pain (noisy reviews that miss what matters) by replacing generic style nitpicking with **your team's actual architectural conventions**. Once committed to the repo, it spreads to every developer on the team.

### How It Works

1. **During onboarding**, unerr auto-generates conventions from codebase analysis:
   ```yaml
   # Auto-generated by unerr - based on your codebase patterns
   rules:
     - name: "No direct database calls outside /lib/db"
       pattern: "import.*from.*pg|import.*from.*mysql"
       exclude: "lib/db/**"
       severity: error
     - name: "All API routes must validate input with Zod"
       pattern: "export.*function.*(GET|POST|PUT|DELETE)"
       require_nearby: "z.object|z.string|z.number"
       severity: warning
   ```
2. **The config gets committed** — it becomes part of the codebase
3. **Every CI run** checks against these rules. New team members inherit conventions automatically
4. **When a developer joins a new company** that doesn't use unerr, they miss it — and advocate

### Why This Works

This directly addresses the developer craving for "this is how we do things here" enforcement. Cursor AI sometimes *"ignores the rules users set"* — developers report: *"I have your rules clearly stated right there in my context. I can read them. I understood them. But I still chose to follow some other behavior instead."* Unlike CodeRabbit (35% quality, 21% nitpicking), unerr conventions are **your team's actual rules**, not generic AI suggestions. And unlike Cursor rules (which AI agents can and do ignore), unerr's rules are enforced at the PR review level — they gate the merge, not the generation. ([Arsturn](https://www.arsturn.com/blog/the-love-hate-relationship-with-cursor-why-some-devs-think-its-getting-worse))

**Infrastructure lock-in without vendor lock-in.** The `.unerr/rules.yaml` file is open and exportable. But the enforcement (real-time PR review, blast radius checking, drift detection) only works with Pro. This is exactly how Prettier, ESLint, and EditorConfig spread — the config file locks you into the tool.

### Implementation

- **Auto-generation**: Existing rule discovery pipeline
- **CI integration**: GitHub Action / pre-commit hook
- **Effort**: 3-5 days

---

## Strategy 8: "The Enterprise Backdoor" — .unerr in the Monorepo

> **Addresses:** Pain 5 (AI doesn't understand conventions) at team scale
> **Emotional trigger:** Status — "I'm the one who improved our team's code quality"
> **Conversion strength:** ★★★★☆

### The Concept

When one developer commits a `.unerr/` directory to a shared monorepo, every developer encounters the conventions — whether they've signed up or not. The conventions become the team's standard. The team becomes a sales channel.

### How It Works

1. **Single developer signs up for Pro** and connects the team's monorepo
2. **unerr auto-generates `.unerr/rules.yaml`** with discovered conventions
3. **Developer commits the config** (just a YAML file — low friction)
4. **Other developers** start getting convention violations in their PRs:
   ```
   unerr review: ⚠️ This PR adds a direct database import outside /lib/db.
   Your team convention requires all database access through the data layer.
   See: .unerr/rules.yaml#L12

   [View in unerr →] [Learn about this convention →]
   ```
5. **When 3+ developers from the same email domain are active**, trigger team upgrade prompt

### Why This Works

**Bottom-up enterprise adoption is how every successful dev tool scaled.** Cursor: individual → team → $2B ARR, with enterprise now 60% of revenue. ([TechCrunch](https://techcrunch.com/2026/03/02/cursor-has-reportedly-surpassed-2b-in-annualized-revenue/)) The config file is the trojan horse — removing it means removing the team's architectural guardrails, which no engineering manager will approve.

### Implementation

- **PR comments for non-users**: GitHub App posts violations even for team members without accounts
- **Domain detection**: Email domain matching triggers team discovery
- **Effort**: 3-5 days

---

## Strategy 9: "The AI Contribution Tracker" — Enterprise Compliance as a Wedge

> **Addresses:** Pain 6 (duplication/quality) + the review bottleneck (PR size up 154%, review time up 91%)
> **Emotional trigger:** Compliance anxiety — "we need audit trails for AI code NOW"
> **Conversion strength:** ★★★★☆

### The Concept

**41% of new code was AI-assisted** by end of 2025, but most organizations have no audit trail. The EU AI Act (August 2, 2026 deadline for high-risk systems) requires technical documentation of "design decisions, data lineage, and testing methodologies." Over half of organizations lack inventories of AI systems in production. Detection tools (JFrog, CodeSpy, Span) are emerging but all are probabilistic — no definitive attribution exists. unerr already tracks AI attribution deterministically via git analysis. **Sell the audit trail, not the review.** ([SecurePrivacy](https://secureprivacy.ai/blog/eu-ai-act-2026-compliance), [JFrog](https://devops.com/jfrog-adds-ability-to-track-usage-of-ai-coding-tools/))

### How It Works

1. **unerr generates a monthly "AI Contribution Report"**:
   ```
   AI Contribution Report — February 2026

   Total commits: 347
   AI-assisted commits: 156 (44.9%)
   AI-generated lines: 12,340 (38.2%)

   By agent:
   - Cursor: 8,200 lines (66.4%)
   - Claude Code: 3,140 lines (25.4%)
   - Copilot: 1,000 lines (8.1%)

   Quality metrics:
   - AI code survival rate (30-day): 87.3%
   - AI code convention compliance: 79.1%

   ⚠️ Compliance note: 3 AI-generated changes touched
   files in your compliance boundary (payments/, auth/).
   ```
2. **Free for OSS repos.** Private repos: summary free, full report requires Pro.
3. **Enterprise pitch**: "Show me an audit log of every AI-generated change that touched your compliance boundaries this quarter."

### Why This Works

**79% of AI coding platforms lack SOC2 Type II attestation** ([Augment Code](https://www.augmentcode.com/tools/ai-coding-tools-soc2-compliance-enterprise-security-guide)), forcing 90+ day vendor verification cycles. This also addresses the review bottleneck: DORA 2025 shows PR size up 154% and review time up 91%, yet **48% of developers admit they don't always check AI code before committing**. The contribution report makes the invisible visible for engineering managers.

### Implementation

- **Data source**: Git attribution analysis (already in indexing pipeline)
- **Report generation**: Temporal activity aggregating AI contribution metrics
- **Compliance boundaries**: User-defined directories that trigger alerts
- **Effort**: 5-7 days

---

## Effort vs. Impact Matrix

| # | Strategy | Pain Point | Effort | Priority |
|---|---|---|---|---|
| 0 | Instant Wow (Streaming Progress + 500 pre-indexed) | Onboarding abandonment (84% drop at 7-step) | 4-5 days | **Ship Week 0** (before launch) |
| 1 | MCP Dependency Trap | Pain 5+8: AI doesn't understand codebase + tool fatigue | 2-3 days | **Ship Week 1** |
| 2 | Rewind Rescue | Pain 1+3: Almost right + vibe coding regret | 2-3 days | **Ship Week 1** |
| 3 | Haunted Codebase | Pain 2+6+8: Cognitive debt + duplication + brain fry | 2-3 days | **Ship Week 1** |
| 4 | Degradation Email | Pain 1+4: Quantified regret | 2-3 days | **Ship Week 1** |
| 5 | Public Autopsy + Referral Link | Pain 3+6: Vibe coding regret + rescue engineering | 1 day + ongoing | **Ship Week 1** (content + referral attribution) |
| 6 | Blast Radius One-Line + Map Page | Pain 2: Comprehension gap (92% say AI increases blast radius) | 3-4 days | **Ship Week 2** |
| 7 | Convention Lock-In | Pain 4+5: Noisy reviews + AI ignores rules | 3-5 days | **Ship Week 2** |
| 8 | Enterprise Backdoor | Pain 5: Team-scale conventions | 3-5 days | **Ship Week 3** |
| 9 | AI Contribution Tracker | Pain 6: EU AI Act compliance (Aug 2026 deadline) | 5-7 days | **Ship Week 4** |

### Operational Reality Check — Sequencing for a Small Team

The matrix above shows 9 strategies totaling ~25-35 engineering days. With a small team, you cannot ship all of them simultaneously. Here's the realistic sequence:

**Week 0 (before launch):** Strategy 0 (Streaming Progress) only. This is the force multiplier — nothing else works without fast time-to-value.

**Week 1 (launch week):** Strategies 1 (MCP Dependency Trap) + 3 (Ghost Report) + 4 (Degradation Email). These three are the core conversion engine — they create the "felt dependency → showed the fire → quantified the loss" emotional arc. Ship these and nothing else in Week 1.

**Week 2:** Strategy 6 (Blast Radius One-Line) + 2 (Rewind Rescue). These extend the conversion surface to PR reviews and crisis moments.

**Week 3-4:** Strategy 7 (Convention Lock-In) + 5 (Public Autopsy content series begins). These are the expansion and content engines.

**Week 5+:** Strategy 8 (Enterprise Backdoor) + 9 (AI Contribution Tracker). Only pursue these after you have signal that individual conversion is working (>5% activation→paid).

**The kill criterion:** If any strategy requires more than 3 days of engineering and hasn't produced a measurable conversion signal within 2 weeks of shipping, pause it and redirect effort to the strategies that are working.

---

## The Conversion Funnel

```
AWARENESS (zero signup required — all insights ungated)
├── Public Autopsy content (5) → "That could be MY codebase"
├── One-line PR summary visible to non-users (6) → "What's this blast radius thing?"
├── Shared Ghost Reports from consultants (5) → Warm referral with social proof
├── Health badges in OSS READMEs (existing) → Curiosity click
└── "Try on a famous repo" demo from pre-indexed 500 (0) → Zero-friction landing page demo
    ↓
ACTIVATION (7-day trial — insights free, actions unlocked)
├── Streaming progress on THEIR repo (0) → Findings appear in seconds, hooked before pipeline finishes
├── MCP integration enriches AI agent (1) → Workflow changes shape around unerr
├── Haunted Codebase email on Day 2 (3) → Full Ghost Report, ungated, every finding visible
├── Convention auto-generation (7) → Config committed to repo
├── Rewind Rescue alerts (2) → Drift alerts always free; Rewind action works during trial
└── AI Contribution Report (9) → Summary free; "My codebase is 44% AI-generated?!"
    ↓
CONVERSION (Day 7-8 — "insights still free, actions gated")
├── MCP degradation → AI agent gets noticeably dumber (1)
├── Degradation Email → "7 issues in 24 hours" — still showing the fire, for free (4)
├── Drift alert fires (free) but Rewind action requires Pro (2) → "I see the fire, pay to extinguish"
└── Convention violations visible (free) but Auto-Correct + Enforcement gated (7)
    ↓
EXPANSION (Post-conversion)
├── Enterprise Backdoor — config in monorepo (8) → Team adoption
├── One-line PR summary visible to non-users (6) → Passive team discovery via every PR
├── Team discovery emails (existing) → Startup plan upsell
└── AI Contribution full report for compliance (9) → Enterprise sales
```

---

## Why Only unerr Can Execute These

| Capability | Which Strategies | Competitor Equivalent |
|---|---|---|
| **Causal Substrate (knowledge graph)** | 1, 2, 3, 4, 6 | None. CodeRabbit/SonarQube have no graph. |
| **MCP server (39 tools)** | 1, 4 | None. No competitor sits in the MCP path. |
| **Blast Radius analysis** | 2, 3, 4, 5, 6 | None. Requires graph-based dependency tracking. |
| **AI attribution (git analysis)** | 3, 5, 9 | None at this granularity. |
| **Rules Engine (convention enforcement)** | 4, 7, 8 | SonarQube has rules but no architectural awareness. |
| **Rewind (shadow rollback)** | 2 | None. Unique to unerr. |
| **Health audit pipeline** | 0, 3, 5 | Partial (SonarQube, CodeClimate — but no graph). |
| **Streaming onboarding + pre-indexed cache** | 0 | None. No competitor streams findings in real-time during onboarding. |
| **Single-pane context layer** | 1, 3, 6, 8 | Fragmented. Developers use 2-4 AI tools and lose 10+ hours/week to context switching. |

**This is the moat.** These aren't growth hacks that any tool could copy. They're growth strategies that are structurally impossible without the Causal Substrate. A competitor would need to build a knowledge graph, an MCP server, a blast radius analyzer, and an AI attribution tracker — a 12+ month engineering effort — before they could even begin to replicate strategy #1.

---

## Developer Psychology — Why Each Strategy Converts

| Trigger | Evidence | Strategies | unerr's Hook |
|---|---|---|---|
| **Fear of falling behind** | 84% of devs use AI daily; not using AI is a career risk ([Stack Overflow 2025](https://survey.stackoverflow.co/2025/ai)) | 1, 5, 6 | "Your AI agent is flying blind without the Causal Substrate." |
| **Frustration elimination** | #1 negative emotion for 67% of devs ([JetBrains 2025](https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/)); 45% say debugging AI code takes longer than writing it | 2, 3, 4 | "$20/mo vs. 3 hours debugging what Rewind fixes in 10 seconds." |
| **Status / career advancement** | The developer who introduces a productivity tool to their team gains status as an innovator | 6, 7, 8 | "You're the one who brought architectural guardrails to the team." |
| **Imposter syndrome relief** | Developers fear shipping bad code; AI review tools serve as a private safety net | 3, 9 | "unerr caught the blast radius violation before your team lead reviewed the PR." |

**The critical insight:** Developers *believe* they're 20% more productive with AI even when controlled studies show they're **19% slower** ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). The *perception* of productivity drives purchases. unerr should optimize for **felt safety** ("I feel protected") over measured metrics.

**The emotional arc of tool adoption:**
1. **Curiosity** — "let me try this on my project"
2. **Surprise** — "it actually understood my codebase" ← THE AHA MOMENT (streaming findings from second 1 — Strategy 0)
3. **Dependency** — "I can't go back to doing this manually"
4. **Evangelism** — "you have to try this" → OR → **Betrayal** — "they changed the pricing / broke my workflow"

The difference between evangelism and betrayal is **trust maintenance** after the initial wow moment. Cursor proved this: 580+ critical comments on a single HN thread, language of "betrayal" and "bait and switch." unerr must never break pricing trust.

**The imposter syndrome angle:** Stack Overflow asks "Do AI tools help with imposter syndrome or make it worse?" — developers feel *"so stupid because things that used to be instinct became manual."* unerr's positioning should be: **"You're not stupid — your AI is flying blind."** Reframe the problem from developer competence to AI context quality. ([Stack Overflow Blog](https://stackoverflow.blog/2025/07/31/do-ai-coding-tools-help-with-imposter-syndrome-or-make-it-worse/))

**What makes developers dismiss a tool in 5 minutes:**
1. Poor/missing documentation (34.2% trust signal, 17.3% abandonment trigger)
2. Complex onboarding (7-step tours: 84% abandonment)
3. "Almost right" first output that requires cleanup
4. No visible value on THEIR codebase (generic demos don't convert)
5. Opaque pricing or usage tracking

**The anti-pattern:** Never imply the developer's code is bad. Position as **"making you look better"** and **"catching what humans miss."** The Ghost Report should feel like a helpful doctor's report, not a judgment. Developers have tool fatigue and hate noise — every interaction must deliver signal, not spam.

### The "Dark Launch" Amplifier — Every Output Is a Billboard

| Artifact | Persistence | Visibility | Strategy |
|---|---|---|---|
| **One-line PR summary** (`unerr ▸ Blast: 47 files · Health: B+→B`) | Forever (in GitHub history) | Every reviewer on every PR — one line, pure signal | 6 |
| **`.unerr/rules.yaml` in repo** | Forever (committed to git) | Every developer who clones the repo | 7, 8 |
| **Health badge in README** | Forever | Every visitor to the repo | Existing |
| **Public blast radius map page** | Long-lived, shareable, screenshot-worthy | Anyone with the link — the viral artifact | 6 |
| **Ghost Report email** (with "Share this report" link) | Inbox, forwardable | Developer + consultants → their clients | 3, 5 |
| **Degradation Email** | Inbox, forwardable | Developer + colleagues | 4 |

AI participation in code reviews grew from under 1% in 2022 to over **14%** in 2025 ([PullFlow](https://pullflow.com/state-of-ai-code-review-2025)). Co-Authored-By attribution shows **15-23% adoption rate** in git history ([arXiv](https://arxiv.org/html/2601.18341v1)). Every artifact unerr produces is a permanent, discoverable ad.

---

## Expected Conversion Impact

| Metric | Industry Median | Best-in-Class | unerr Base Case | unerr Stretch |
|---|---|---|---|---|
| Trial → Paid (7-day) | 8-12% | 40.4% ([1Capture](https://www.1capture.io/blog/free-trial-conversion-benchmarks-2025)) | **15-20%** | **25-35%** |
| Free → Paid (overall) | 2-5% | 35% (Cursor) ([DevGraphiq](https://devgraphiq.com/cursor-statistics/)) | **8-12%** | **15-25%** |
| Time to first "aha moment" | 5-10 minutes | 30 seconds (Lovable) | **~30 seconds** | **~12 seconds** (streaming: first blast radius finding) |
| Viral coefficient (K-factor) | 0.2-0.4 | 0.7+ (Figma) | **0.3-0.5** | **0.5-0.8** |
| Individual → Team conversion | 5-10% | 20%+ (Slack) | **8-12%** | **15-20%** |
| Gross Revenue Retention | 40% (AI-native median) | 90%+ (established SaaS) | **>60%** | **>75%** (avoid dabbler churn) |
| Net Revenue Retention | 48% (AI-native median) | 130%+ (expansion revenue) | **>80%** | **>100%** (team upsell) |

**Planning guidance:** Use the Base Case for infrastructure budgets, headcount planning, and investor projections. Use the Stretch targets as internal OKRs. The strategies in this playbook (MCP dependency trap, Ghost Report, degradation email) are designed to push metrics from Base Case toward Stretch — but they must be proven in-market, not assumed.

**Retention warning:** AI-native companies have the worst retention in SaaS — median GRR of 40%, NRR of 48%. Low prices attract dabblers, and dabblers churn. unerr's retention moat is the `.unerr/rules.yaml` committed to git + MCP dependency — churning means removing architectural guardrails and making every AI agent dumber. ([Growth Unhinged](https://www.growthunhinged.com/p/the-ai-churn-wave))

---

## The 8 Most Counterintuitive Findings

### 1. "Speed alone does not monetize — but perceived speed-to-value does"
Bun had 10x performance, $26M funding, zero revenue, got acqui-hired. But Bolt.new hit $20M ARR in 60 days — not because it was actually instant (deploys take 2-3 minutes), but because you see code being written from second 1. **Perceived wait time matters more than actual wait time.** Houston Airport solved luggage complaints by making passengers walk longer to the carousel — same wait, zero complaints. **unerr's model: stream findings from second 1** so the developer is hooked before the pipeline finishes. First blast radius finding appears at ~12 seconds. By 30 seconds, they've already seen something scary about THEIR codebase. ([GrowthUnhinged](https://www.growthunhinged.com/p/boltnew-growth-journey))

### 2. "Giving away the expensive thing converts better than gating it"
Devin dropped 96% ($500 → $20/month). PostHog gives away analytics to 190K+ customers. Sentry shows you the full stack trace for free — you pay for the resolution tools. **unerr's paywall architecture:** Give the full analysis free — Ghost Reports, Blast Radius Maps, Health Audits, AI Contribution summaries. Charge for the *actions* — Rewind, Auto-Correction, Policy Enforcement, Convention Gating. **"Show the fire for free. Charge to put it out."** Every free insight is a billboard that creates the need for a paid action. ([VentureBeat](https://venturebeat.com/programming-development/devin-2-0-is-here-cognition-slashes-price-of-ai-software-engineer-to-20-per-month-from-500))

### 3. "5% is the baseline — but proactive outreach quadruples it"
The Degradation Email, team discovery emails, and founder DMs are not optional — they're the 4x multiplier. ([OpenView](https://openviewpartners.com/2023-product-benchmarks/))

### 4. "The first tool with SOC2 wins enterprise by default"
79% of AI coding platforms lack SOC2. First to clear compliance gates wins regardless of product quality. ([Augment Code](https://www.augmentcode.com/tools/ai-coding-tools-soc2-compliance-enterprise-security-guide))

### 5. "Fear-based marketing backfires — quantified regret converts"
Iowa State: fear marketing makes users feel helpless. What works: concrete counterfactuals. "PR #142 merged with a 47-file blast radius. unerr would have flagged this." ([Iowa State](https://research.iastate.edu/2025/01/07/selling-fear-marketing-for-cybersecurity-products-often-leaves-consumers-less-secure/))

### 6. "One additional product feature triples conversion"
Onboarding must expose multiple features fast — health audit + PR review + Rewind + MCP. Each feature touched multiplicatively increases conversion. ([GitLab](https://ir.gitlab.com/news/news-details/2025/GitLab-Reports-Fourth-Quarter-and-Full-Fiscal-Year-2025-Financial-Results/default.aspx))

### 7. "Senior developers are slowed MORE by AI than juniors — and that's your buyer"
Junior devs see 21-40% productivity gains vs. seniors' 7-16%. But seniors are the budget-holders and decision-makers. The METR study found senior developers are forced into "Reviewer Mode" — reverse-engineering AI's logic costs more than writing it themselves. unerr eliminates Reviewer Mode by pre-verifying AI output against the knowledge graph. **Sell to the senior who feels slowed down, not the junior who feels sped up.** ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), [CSO Online](https://www.csoonline.com/article/3951403/the-risks-of-entry-level-developers-over-relying-on-ai.html))

### 8. "The tool that's loved is NOT the tool that converted best — it's the one that created dependency"
Claude Code is the #1 loved tool (46% in Pragmatic Engineer survey) but Cursor has 7x higher conversion (36% free→paid). The difference: Cursor restructured the developer's workflow around itself (multi-file edit), while Claude Code feels like a better version of what they already had. unerr must restructure workflows — the `.unerr/` config in git, the MCP server in every AI tool, the PR review comment on every merge — so that removing it means changing how the entire team works. ([Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026))

---

## OSS-to-Paid Conversion Benchmarks

| Company | Free Users | Conversion | ARR | Trigger |
|---|---|---|---|---|
| **Grafana** | 20M | ~1% | $400M+ | Cloud hosting + dashboards |
| **GitLab** | Massive | Triples with each product stage | $424M | Multi-product adoption |
| **PostHog** | 190,000+ | 2% → 3x expansion/18mo | $9.5M (15% MoM) | Usage ceiling |
| **Sentry** | Huge | 70% self-serve | $128M+ | Production errors |
| **Snyk** | Wide | 40% enterprise growth | $343M | AI vulnerability anxiety |
| **Replit** | Millions | 45% monthly sub growth | $265M | Agent as upgrade trigger |

**The pattern for unerr:** Free OSS analysis (like Grafana/PostHog) → conversion via actions that require Pro (like Sentry's error fixing) → enterprise via compliance + team features (like GitLab's multi-product upsell).

---

## The Unmet Market Summary

The overarching developer craving is for a **"quality layer"** that sits between AI code generation and the codebase — something that understands architecture, enforces conventions, tracks attribution, measures blast radius, and gives developers confidence that AI-generated code won't silently degrade their systems. **Developers don't want to slow down; they want to move fast with a safety net.**

| Craving | Intensity | unerr Capability | Strategy |
|---------|-----------|-------------------|----------|
| Codebase-aware AI context | **Extreme** (Greptile: $180M valuation) | Causal Substrate + MCP | 1, 3 |
| Low-noise, architectural code review | **Very High** (CodeRabbit: 1/5 completeness) | Blast Radius + Rules Engine | 4, 6, 7 |
| AI code attribution & audit trail | **High** (EU AI Act Aug 2026) | Git attribution analysis | 9 |
| Convention/pattern enforcement | **Very High** (Cursor rules ignored) | Rules Engine + PR enforcement | 7, 8 |
| Easy AI rollback | **High** (community tools being built) | Rewind | 2 |
| Rescue engineering tools | **Growing fast** (712% Fiverr surge) | Knowledge Graph + Health Audit → served via Public Autopsy content + Ghost Report referral links (not dedicated landing page) | 3, 5 |
| Developer confidence/safety net | **Pervasive** (83% say AI increased workload) | All capabilities combined | All |

---

*This document should be read alongside the [OSS Viral Adoption Strategy](OSS_VIRAL_ADOPTION_STRATEGY.md) (top-of-funnel) and [$1M ARR Growth Plan](GROWTH_STRATEGY_1M_ARR.md) (execution timeline). These strategies plug into Weeks 1-5 of the growth plan and amplify the OSS funnel's output.*
