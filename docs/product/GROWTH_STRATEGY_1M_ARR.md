# unerr: $1M ARR — Tranche-Velocity GTM Architecture

> **What this document is:** The complete GTM architecture for reaching $1M ARR. Built on two pillars: (1) Atlas + MCP create a genuinely new ability — not a better workflow, and (2) Distribution hijacking injects us into platforms that already have millions of developers. The honest assessment: $1M ARR in 4-6 months (45-55% probability) with 90 days achievable at 15-25% if Claude Code skill gets featured + Cursor plugin gets early placement.
>
> **The operating principle:** Plan for 90 days. Budget for 6 months. Celebrate if it's 4.

**Last updated:** 2026-03-30

---

## Table of Contents

**Part I: Strategy Architecture**
- [1. The Two Pillars](#1-the-two-pillars)
- [2. Why We Win: Competitive Annihilation](#2-why-we-win-competitive-annihilation)
- [3. The Market (March 2026)](#3-the-market-march-2026)
- [4. Honest Timeline Assessment](#4-honest-timeline-assessment)

**Part I-B: The Revenue Map**
- [5. The 18 GTM Paths — Complete Revenue Map](#5-the-gtm-path-architecture)

**Part II: The Growth Machine**
- [6. The Paywall Architecture](#6-the-paywall-architecture--diagnosis-free-cure-paid)
- [7. The Six Growth Engines](#7-the-six-growth-engines)
- [8. The Viral Loop System](#8-the-viral-loop-system)
- [9. Channel Strategy](#9-channel-strategy)

**Part III: The Execution Framework**
- [10. The Macro Roadmap](#10-the-macro-roadmap-month-1--month-2--month-3)
- [11. Pricing & ARR Math](#11-pricing--arr-math)
- [12. The Six Tranches — Bird's Eye View](#12-the-six-tranches--birds-eye-view)
- [13. The Weekly Rhythm + Daily Adjustment](#13-the-weekly-rhythm--daily-adjustment)

**Part IV: Resilience & Contingencies**
- [14. Plan A / Plan B / Plan C](#14-plan-a--plan-b--plan-c-layered-fallback-strategy)
- [15. Specific Contingencies](#15-specific-contingencies)
- [16. Protective Measures](#16-protective-measures)
- [17. Operational Guardrails](#17-operational-guardrails)

**Part V: Appendices**
- [18. Growth Stack (Tooling)](#18-growth-stack-tooling)
- [19. Cold Email Framework](#19-cold-email-framework)
- [20. Product Readiness Audit](#20-product-readiness-audit)
- [21. Sources & Evidence](#21-sources--evidence)

---

# Part I: Strategy Architecture

## 1. The Two Pillars

Every tool that hit $1M ARR in under 3 months solved a "hair-on-fire" problem with a 10x improvement and had pre-built distribution:

| Tool | Problem | 10x Improvement | Time to $1M ARR |
|---|---|---|---|
| **Cursor** | "Copilot is too slow/dumb" | Tab-autocomplete that understands context | ~4 weeks |
| **Lovable** | "I can't code but I have an app idea" | Text-to-working-app in 60 seconds | Week 1 |
| **Bolt.new** | "I want a full-stack app without setup" | Browser-based dev, zero config | Week 1 |
| **Linear** | "Jira is unbearable" | Craft so good users recruit others | 18 months ($100M ARR) |
| **unerr** | **"I can't see my codebase architecture. My AI agents can't either."** | **Interactive operational twin + permanent AI memory** | **Target: 90 days** |

### 1.1 Pillar 1: Creating a New Ability (Atlas + MCP Permanent Memory)

unerr is not a diagnosis tool. It creates two abilities that did not exist before.

**New Ability 1: "Codebase X-Ray Vision" (Atlas)**

Developers can SEE their entire architecture as an interactive, explorable operational twin — Feature Story narratives, execution trace playback, blast radius simulation, feature cluster maps — all deterministic from a 5-signal graph. No tool has ever let a developer click "Authentication" and watch the live execution trace animate from login to session to token validation to refresh, with every claim backed by compiler-grade evidence.

GitNexus (19K stars) and Understand-Anything (2.4K stars) went viral in February-March 2026 with basic single-signal structural graphs. Atlas has 5 signals, business justification, temporal coupling, convention mining, and blast radius. The comparison is in [Section 2](#2-why-we-win-competitive-annihilation). ([GitNexus](https://github.com/abhigyanpatwari/GitNexus), [Understand-Anything](https://topaiproduct.com/2026/03/22/understand-anything-scores-2400-github-stars-by-mapping-codebases-with-five-ai-agents/))

**New Ability 2: "Permanent AI Memory" (MCP Context Injection)**

The MCP server proactively injects verified architectural context INTO every AI agent's prompt. When Cursor generates code, unerr's MCP response includes: the function's blast radius, its business justification, the conventions it should follow, the entities it's related to. The agent has permanent architectural memory that persists across sessions, tools, and team members.

*"Context is AI coding's real bottleneck in 2026"* ([The New Stack](https://thenewstack.io/context-is-ai-codings-real-bottleneck-in-2026/)). Static context files (`.cursorrules`, `AGENTS.md`) provably degrade performance by 3% ([InfoQ](https://www.infoq.com/news/2026/03/agents-context-file-value-review/)). unerr's MCP delivers computed, verified, dynamic context — not static files that go stale.

**Health grades and diagnosis are side effects of these abilities.** Once you have X-ray vision (Atlas) and permanent memory (MCP), broken things become obvious. The health grade is the shareable artifact that markets the product — the underlying ability is what creates the dependency.

### 1.2 Pillar 2: Distribution Hijacking (Be INSIDE Every AI Agent)

We don't need our own distribution. We need to be INSIDE the distribution of platforms that already have millions of developers. This is the PayPal-on-eBay pattern:

> *PayPal didn't build its own marketplace. It became the payment layer INSIDE eBay.*
> *Airbnb didn't build its own listings community. It cross-posted INSIDE Craigslist.*
> *unerr doesn't need its own developer community. It becomes the intelligence layer INSIDE every AI agent.*

([Airbnb/Craigslist case study](https://andrewchen.com/how-to-be-a-growth-hacker-an-airbnbcraigslist-case-study/), [PayPal/eBay piggybacking](https://platformthinkinglabs.com/materials/how-paypal-youtube-and-stumbleupon-gained-rapid-traction-through-piggybacking/), [Instagram cross-posting](https://thenextweb.com/entrepreneur/2014/05/28/9-iconic-growth-hacks-tech-companies-used-pump-user-base/))

**The 7 hijacked distribution channels:**

| Channel | Reach | Our Entry Point | Effort | Precedent |
|---|---|---|---|---|
| **Cursor Plugin Marketplace** | Millions of Cursor users (marketplace launched Feb 2026, still early) | "unerr Intelligence" plugin — one-click install | 3-5 days | PayPal on eBay. ([Cursor Marketplace](https://cursor.com/marketplace)) |
| **Claude Code Skills** | #1 loved AI tool (46% in Pragmatic Engineer survey) | `/unerr-atlas`, `/unerr-health`, `/unerr-blast-radius` skills | 1 day | feature-dev skill hit 89K installs. ([TurboDocx](https://www.turbodocx.com/blog/best-claude-code-skills-plugins-mcp-servers)) |
| **MCP Directories** (mcp.so, mcpmarket.com, lobehub, + 3 more) | 19,075+ servers indexed. Top 50 avg 12K+ installs/month. | MCP server listing with demo Atlas link | 2-3 hours | Servers on 5+ directories get 10x more installs. ([MCP Market](https://mcpmarket.com/), [mcp.so](https://mcp.so/)) |
| **YC Bookface** | ~10K YC alumni founders | "We built an interactive architecture map — try yours" | 1 post | YC startups use Bookface to find beta testers. ([Horizon Labs](https://www.horizon-labs.co/resources/bookface-yc)) |
| **Public Atlas URLs** | Anyone with a browser | `unerr.dev/atlas/{owner}/{repo}` pre-indexed for 50 famous repos | Already built | GitNexus got 19K stars with "paste a URL, see a graph." |
| **GitHub** (badges, PR footers, discussions) | Every GitHub user | Health badge in README, one-liner in PRs, Atlas link in discussions | Ongoing | Snyk: $343M ARR on GitHub-native viral PR loop. |
| **HN / Reddit / X** | Developer communities | Architectural Spotlights using live Atlas pages | Ongoing | Supabase: 1M to 4.5M devs via content. Linear: $100M ARR with $35K ad spend. |

**The conversion funnel through hijacked distribution:**

```
Cursor Marketplace / Claude Code Skill / MCP Directory
    -> Developer installs (free, one-click, zero friction)
        -> Agent immediately gets smarter (MCP context injection)
            -> Developer notices improved suggestions
                -> Explores Atlas (public URL or dashboard)
                    -> Connects more repos -> hits free limit
                        -> Pro ($20/mo) for unlimited + Rewind + full context
```

**Modeled acquisition with all channels firing:**

| Channel | Month 1 Installs | Activated (connects repo) | Monthly Steady-State |
|---|---|---|---|
| Claude Code Skill | 15,000-20,000 | 1,200-1,500 | Growing 30%+ MoM |
| Cursor Plugin | 8,000-12,000 | 700-900 | Growing with marketplace |
| MCP Directories (5+) | 3,000-4,000 | 250-300 | Steady baseline |
| YC Bookface | 400 | 200 | One-time seed |
| Public Atlas + Content | 7,000 | 800 | Compounds with content |
| **TOTAL** | **33K-43K installs** | **3,150-3,700 activated** | **Compounds monthly** |

**Platform math backing:** Claude Code top skill (find-skills) has 418K installs. Anthropic's frontend-design has 277K. MCP ecosystem: 97M+ monthly SDK downloads. Cursor: $2B+ ARR, millions of users. ([OpenAIToolsHub](https://www.openaitoolshub.org/en/blog/best-claude-code-skills-2026), [Zuplo MCP Report](https://zuplo.com/mcp-report))

**Why this isn't platform risk:** Unlike Zynga (which Facebook shut down), unerr makes Cursor/Claude Code objectively better. MCP is an open standard, we work across all agents, and removing unerr makes the agent worse. Mutualistic, not parasitic.

---

## 2. Why We Win: Competitive Annihilation

Every "codebase knowledge graph" tool that went viral this month is single-signal, code-only. unerr treats code as a **Causal Substrate:**

| Capability | GitNexus (19K stars) | Understand-Anything (2.4K) | code-review-graph | Axon | **unerr** |
|---|---|---|---|---|---|
| **Signals** | 1 (structural) | 1 (structural) | 1 (structural) | 1 (structural) | **5** (structural + gravity + temporal + intent + community) |
| **"WHY does this code exist?"** | No | No | No | No | **Yes — business justification per entity** |
| **"What always changes together?"** | No | No | No | No | **Yes — temporal co-change mining** |
| **"What are the business features?"** | No | No | No | No | **Yes — Leiden community detection + LLM naming** |
| **"How does this team do things?"** | No | No | No | No | **Yes — convention mining from codebase patterns** |
| **Execution trace playback** | No | No | No | No | **Yes — animated call chain traversal** |
| **Blast radius with business context** | Import-edge walk | None | Import-edge walk | Depth-grouped | **Full graph traversal + business justification** |
| **Health grade** | No | No | No | Basic score | **A-F with 12 graph-native detectors** |
| **Anti-hallucination guarantee** | No | No | No | No | **Every claim traceable to compiler-grade signal** |
| **MCP tools** | 7 | Via Claude sub | 2 | CLI only | **50+ with proactive context injection** |
| **Scalability** | Struggles > 10K files (WASM) | Unknown | Local SQLite | Unknown | **ArangoDB + Temporal — 100K+ entities** |
| **Install** | Browser WASM | Claude Code sub | CLI | CLI | **Zero-install public URL OR signup** |

**The one-line differentiator:** *"GitNexus shows you what your code IS. unerr shows you what your code DOES, WHY it exists, WHAT it connects to, and WHAT breaks if you change it."*

([GitNexus](https://github.com/abhigyanpatwari/GitNexus), [Understand-Anything](https://topaiproduct.com/2026/03/22/understand-anything-scores-2400-github-stars-by-mapping-codebases-with-five-ai-agents/), [code-review-graph](https://github.com/tirth8205/code-review-graph), [Axon](https://github.com/harshkedia177/axon))

---

## 3. The Market (March 2026)

### Pain Points (Data-Backed)

- **51% of all GitHub code** is now AI-generated or AI-assisted ([Stack Overflow DeveloperWeek 2026](https://stackoverflow.blog/2026/03/05/developerweek-2026/))
- **45% of AI code has security vulnerabilities**, duplication up 48%, refactoring down 60% ([Pixelmojo](https://www.pixelmojo.io/blogs/vibe-coding-technical-debt-crisis-2026-2027))
- **LLM-generated context files degrade performance** — reducing task success by 3% vs. no context file ([InfoQ March 2026](https://www.infoq.com/news/2026/03/agents-context-file-value-review/))
- **"AI Brain Fry"** — 83% of workers say AI increased their workload ([HBR Feb 2026](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it))
- **Knowledge graphs identified as "the missing runtime layer"** for AI dev tools ([Full Stack AI Engineer](https://fullstackaiengineer.substack.com/p/009-knowledge-graphs-are-becoming))
- **Cursor's March 2026 code reversion bug** silently undid changes ([vibecoding.app](https://vibecoding.app/blog/cursor-problems-2026))
- **Google made Gemini Code Assist free** — commoditizing basic assistance, pushing toward intelligence differentiation

### Competitive Landscape

| Player | Status (March 2026) | Threat | Our Advantage |
|---|---|---|---|
| **Cursor** | $2B+ ARR, acquired Graphite, merging BugBot + Graphite ([TechCrunch](https://techcrunch.com/2025/12/19/cursor-continues-acquisition-spree-with-graphite-deal/)) | HIGH | Diff-based, not graph-based. No knowledge graph. |
| **CodeRabbit** | $60M Series B at $550M, NVidia invested ([SiliconANGLE](https://siliconangle.com/2025/09/23/greptile-bags-25m-funding-take-coderabbit-graphite-ai-code-validation/)) | MEDIUM | Comment-based, 1/5 completeness. No blast radius. |
| **Greptile** | $25M Series A (Benchmark), v4 early 2026 ([Sacra](https://sacra.com/c/greptile/)) | HIGH | Single-signal graph. No business justification, temporal, or conventions. |
| **Bito AI Architect** | New — knowledge graph, maps services/deps ([Bito](https://bito.ai/)) | MEDIUM-HIGH | 2 signals vs. our 5. No MCP integration at depth. |
| **GitNexus** | GitHub Trending Feb 2026, 1,200+ stars ([TopAIProduct](https://topaiproduct.com/2026/02/22/gitnexus-turns-your-codebase-into-a-knowledge-graph-and-your-ai-agent-will-thank-you/)) | LOW-MEDIUM | Single-signal, OSS hobby project. Validates demand. |

**Structural moat:** 5-signal Causal Substrate vs. everyone else's 1 signal. 50+ MCP tools. 12 anomaly detectors. Business justification. Convention mining. 12+ months of engineering.

---

## 4. Honest Timeline Assessment

### The Three Buckets of $1M ARR Speed

**Bucket 1: "Created a new ability" — $1M ARR in days/weeks**

| Tool | Pre-built Distribution | Why it was instant |
|---|---|---|
| **Lovable** | 52K GitHub stars from GPT Engineer, 300K advocates, 27K waitlist ([AI Funding Tracker](https://aifundingtracker.com/lovable-growth-strategy/)) | Non-technical people could suddenly build apps. |
| **Bolt.new** | 7 years of StackBlitz community ([Contrary Research](https://research.contrary.com/company/bolt)) | Full-stack app in browser from second 1. |
| **Cursor** | MIT founders, SF network, early adopters at OpenAI/Midjourney/Perplexity | Tab-autocomplete that understood context. |

What they share: instant, visible, magical output in seconds plus massive pre-built distribution.

**Bucket 2: "Made an existing workflow 10x better" — $1M ARR in 6-18 months**

| Tool | Time to $1M ARR | Growth mechanism |
|---|---|---|
| **CodeRabbit** | ~12-15 months (est.) | Auto-reviews every PR. 20% MoM growth. ([TechCrunch](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/)) |
| **Linear** | ~18 months | Pure craft + word-of-mouth. $35K lifetime ad spend. |
| **Snyk** | ~18-24 months (est.) | OSS-first to enterprise. Regulatory forcing function. ([Reo.dev](https://www.reo.dev/blog/from-open-source-to-343m-arr-how-snyk-made-developers-its-secret-weapon)) |
| **Sentry** | ~24 months (est.) | Developer word-of-mouth. Error tracking PLG. |
| **Plausible** | 27 months | Bootstrapped, 4 people, HN-driven. ([Plausible blog](https://plausible.io/blog/open-source-saas)) |

**Bucket 3: The statistical median** — 2 years 9 months. Only 3.3% get there in under 12 months. ([ChartMogul 2025](https://chartmogul.com/reports/saas-growth-the-odds-of-making-it/)). AI-native startups 3x more likely to hit $1M in 6 months. ([TechCrunch](https://techcrunch.com/2026/02/24/more-startups-are-hitting-10m-arr-in-3-months-than-ever-before/)). Best-in-class: 9 months from first revenue. ([Lighter Capital](https://www.lightercapital.com/blog/2025-b2b-saas-startup-benchmarks))

**Where unerr sits:** Straddles Bucket 1 and Bucket 2. Atlas (new ability) = Bucket 1 distribution engine. PR review, conventions, health monitoring = Bucket 2 revenue engine. Both needed.

### The Authoritative Probability Table

| Scenario | Time to $1M ARR | Probability | What Must Happen |
|---|---|---|---|
| **Lightning** | 90-120 days | **15-25%** | Claude skill gets featured (50K+ installs). Cursor plugin gets early marketplace placement. Atlas pages go viral. All channels fire simultaneously. |
| **Fast PLG** | **4-6 months** | **45-55%** | **This is the base case.** Platform installs compound monthly. MCP dependency works. Content supports but isn't the primary driver. |
| **Standard PLG** | 7-10 months | **15-25%** | Platforms deliver baseline volume but don't compound explosively. Content-led growth supplements. |
| **Slow burn** | 10-14 months | **5-10%** | Platforms reject/delist us, or MCP standard fragments. Unlikely. |

**Most likely outcome: $1M ARR in 4-6 months (Day 120-180).** The 90-day target is a 15-25% probability — aggressive but not implausible.

### Compression Levers

| Lever | Impact | Controllable? |
|---|---|---|
| **Atlas pages go viral** (K > 0.3) | -3 to -5 months | Partially (visual quality + famous repo selection) |
| **MCP permanent memory creates dependency** | -2 to -3 months | Yes (already built) |
| **YC Bookface seed** — 500+ users Week 1-2 | -1 to -2 months | Yes (posting) |
| HN front page at launch | -1 to -2 months | Partially |
| Dev YouTuber coverage (Fireship/Theo/Prime) | -2 to -3 months | Partially (outreach) |
| EU AI Act urgency (enterprise) | -1 to -2 months | No (external, Aug 2026) |
| **Competitive framing** — "GitNexus has 1 signal. We have 5." | -1 month | Yes |
| Genesis Cohort advocacy (500 beta defenders) | -1 to -2 months | Yes |

> **Plan for 90 days. Budget for 6 months. Celebrate if it's 4.**

---

# Part I-B: The 18 GTM Paths — Complete Revenue Map

## 5. The GTM Path Architecture

Every path to $1M ARR is a distinct, separable concern — each with its own north star, timeline, and effort profile. Paths can run in parallel. Each week we evaluate which paths are producing signal and double down. Paths that aren't producing get paused, not killed — they may activate later.

### Tier A — Launch (Month 1-2): Core PLG + Distribution + BiP

These paths run from Day 0. They form the base growth engine.

| # | Path | North Star | How It Works | Weekly Effort |
|---|---|---|---|---|
| **A1** | Distribution Hijacking | 33K-43K installs Month 1 | Cursor Plugin + Claude Code Skills + MCP Directory listings. Passive after setup. PayPal-on-eBay pattern. | 0 (after 1-week setup) |
| **A2** | Public Atlas as Viral Surface | 500+ Atlas page shares Month 1 | `unerr.dev/atlas/{owner}/{repo}` — zero-signup interactive architecture maps. Pre-index 50 famous repos. GitNexus got 19K stars with 1/5th of this. | 0 (after pre-indexing) |
| **A3** | MCP Permanent Memory | >10 MCP calls/user/day | Invisible dependency — agents get smarter, removing unerr makes them dumber. Core retention engine. | 0 (product-level) |
| **A4** | Content — Architectural Spotlights | 2,000+ visitors/month | Publish Atlas pages of famous repos as X threads/Reddit posts. Punch up, never down. Educational framing. | 1.25 hrs/week |
| **A5** | OSS Distribution | 50+ badges by Month 2 | Health badges in READMEs, PR footers, public Atlas links. Compounds daily. Snyk/Codecov model. | 1 hr/week (outreach) |
| **A6** | Build in Public PROOF Engine | Growing X/LinkedIn/Reddit following | 11-strategy breakdown: Reddit monitoring, daily X artifact, LinkedIn proof posts, cross-post blog, Discord office hours, "unerr on unerr" Monday update. See [Section 7 Engine 5](#7-the-six-growth-engines) for full detail. | 6 hrs/week |
| **A7** | YC Bookface | 500 seed users Week 1-2 | Post to ~10K YC alumni founders. High-intent beta testers. | 1 hr (one-time post) |
| **A8** | Genesis Cohort | 500 fierce advocates | First 500 users get Pro free 3 months + $15/mo lifetime + badge. Creates army of defenders on HN/Reddit. | 0 (policy-level) |
| **A9** | **Productized "AI Audit"** | 2-3 audits/month = $20-30K non-recurring | Sell one-off $10K "AI Architecture & Drift Audit" as a consulting service. Run unerr, present Atlas + Health report to VP Engineering. "The audit was $10K. To keep the guardrails on permanently, $2K/mo." Corporate credit cards auto-approve consulting fees — no procurement cycle. Immediate cash + seamless ARR conversion. | 4-8 hrs per audit |
| **A10** | **Rescue Engineering Targeting** | 50 freelancers using unerr on client projects | Freelancers fixing vibe-coded projects (712% Fiverr surge) need to quickly understand broken codebases. Atlas is EXACTLY what they need. Post in freelancer communities (Fiverr Pro, Toptal, Upwork forums): "Speed up your rescue engagements 10x." Each freelancer deploys unerr across dozens of client codebases. | 2 hrs (one-time posts) |

### Tier B — Expansion (Month 3-4): Enterprise + High-ACV

These paths activate when PLG is producing signal (>1,000 free users, >200 paid seats). They compress the timeline by adding large checks alongside individual PLG.

| # | Path | North Star | How It Works | Weekly Effort |
|---|---|---|---|---|
| **B1** | Local-Only CLI Mode | Unblock bottom-up enterprise | `npx @autorail/unerr index --local` — graph on developer's machine, zero data leaves laptop. Bypasses corporate GitHub App blocks. When 3+ devs use locally, team formalizes with cloud tier. | 0 (engineering, already scoped) |
| **B2** | Multi-Agent Source of Truth | Win vs. Cursor building native | Position as cross-IDE intelligence layer. "Your agents don't talk to each other. unerr gives them a shared brain." Structurally impossible for Cursor to replicate. | 0 (messaging-level) |
| **B3** | **AI Compliance Wedge** | 5 enterprise deals at $50K ACV | EU AI Act enforcement Aug 2, 2026. 96% of CISOs now manage AI governance. Position unerr as AI Governance and Compliance Layer. `.unerr/rules.yaml` = immutable audit trail. "Show me every AI-generated change that touched your compliance boundaries this quarter." 20 deals at $50K = $1M ARR from enterprise alone. Fear of regulatory fines closes deals faster than productivity promises. ([AI governance 2026](https://www.ethyca.com/news/ai-governance), [CISO AI mandate](https://www.cloudeagle.ai/blogs/what-is-the-cisos-responsibility-in-an-ai-first-enterprise)) | 4-6 hrs/week (outbound) |
| **B4** | **White-Label Tech Due Diligence** | 3-5 deals at $20K = $60-100K | VCs, PE firms, and acquirers pay $20-50K for technical due diligence on acquisition targets. unerr generates an architecture assessment in hours (not the usual weeks). The Atlas + Health report IS the due diligence output. Position as "AI-powered tech due diligence." 5 deals funds the first 3 months of operations. | 6-10 hrs per deal |

### Tier C — Scale (Month 5+): Channels + Ecosystem

These paths require a proven product, case studies, and support capacity. They multiply reach but require investment.

| # | Path | North Star | How It Works | Weekly Effort |
|---|---|---|---|---|
| **C1** | **Dev Shop/Agency Channel** | 5 agency partners = 150+ repos under management | Sell unerr as a "Quality Assurance Guarantee" for agencies. Agency-wide license ($1-5K/month). They run Causal Substrate on every client project before handover. One agency = 30+ codebases instantly. Channel partners deliver 3-5x faster market expansion than direct sales. ([Channel partner guide](https://www.introw.io/blog/how-to-build-a-channel-partner-program)) | 8+ hrs/week (relationship-building) |
| **C2** | **Framework Default** | `import unerr` in official tutorials | Build native integrations into LangChain, Vercel AI SDK, AutoGen. Work with DevRel teams to make unerr the documented standard for giving custom agents codebase memory. Every "How to build a coding agent" tutorial becomes distribution. | 2-4 weeks engineering per integration |
| **C3** | **Ambassador/Champion Program** | 20 champions producing monthly content | Give 10-20 power users free Pro+ in exchange for one blog post or video per month. Each champion produces content that distributes itself. Lightweight version of a formal ambassador program. | 2 hrs/week (coordination) |

### Tier D — Year 2: Long-term

| # | Path | North Star | How It Works |
|---|---|---|---|
| **D1** | **Education Channel** | 10 bootcamp/university partnerships | Free licenses for CS programs. Students learn with unerr, bring it to their first jobs. 12-18 month pipeline play. |

### The Revenue Math by Path Type

| Type | Paths | Revenue Model | Expected Contribution (Year 1) |
|---|---|---|---|
| **Individual PLG** | A1-A8 | $20-35/mo per seat | 60-70% of MRR |
| **High-ACV Services** | A9, B4 | $10-20K per engagement + ARR conversion | 10-15% of total revenue (cash flow accelerant) |
| **Enterprise** | B3, B1 | $50K+ ACV, $2K+/mo | 15-25% of MRR (grows over time) |
| **Channel** | C1, A10 | Agency licenses + freelancer seats | 5-10% of MRR (Month 5+) |
| **Ecosystem** | C2, C3, D1 | Indirect — drives PLG volume | 0% direct but amplifies all other paths |

**The critical insight:** The current doc is 100% PLG-focused. Adding the Productized AI Audit (A9) and White-Label Due Diligence (B4) creates **immediate cash flow** that funds operations while PLG compounds. Just 5 audit deals in Month 1-2 = $50K — more than the entire first 2 months of PLG revenue. This is the "hunt whales while the nets catch fish" strategy. ([Parallel revenue paths](https://www.apptium.com/resources/5-proven-ways-saas-companies-can-scale-revenue-through-channel-partners))

### Path Status Tracker

Update this weekly. Green = producing signal. Yellow = active but no signal yet. Red = paused. Gray = not started.

| Path | Month 1 | Month 2 | Month 3 | Month 4+ |
|---|---|---|---|---|
| A1 Distribution Hijacking | 🟢 | 🟢 | 🟢 | 🟢 |
| A2 Public Atlas | 🟢 | 🟢 | 🟢 | 🟢 |
| A3 MCP Memory | 🟢 | 🟢 | 🟢 | 🟢 |
| A4 Architectural Spotlights | 🟢 | 🟢 | 🟢 | 🟢 |
| A5 OSS Distribution | 🟡 | 🟢 | 🟢 | 🟢 |
| A6 BiP Proof Engine | 🟢 | 🟢 | 🟢 | 🟢 |
| A7 YC Bookface | 🟢 | ⬜ | ⬜ | ⬜ |
| A8 Genesis Cohort | 🟢 | 🟢 | ⬜ | ⬜ |
| A9 Productized AI Audit | 🟡 | 🟢 | 🟢 | 🟢 |
| A10 Rescue Engineering | 🟡 | 🟢 | 🟢 | 🟢 |
| B1 Local-Only CLI | ⬜ | ⬜ | 🟡 | 🟢 |
| B2 Multi-Agent Positioning | 🟢 | 🟢 | 🟢 | 🟢 |
| B3 AI Compliance Wedge | ⬜ | ⬜ | 🟡 | 🟢 |
| B4 White-Label Due Diligence | ⬜ | 🟡 | 🟢 | 🟢 |
| C1 Agency Channel | ⬜ | ⬜ | ⬜ | 🟡 |
| C2 Framework Default | ⬜ | ⬜ | ⬜ | 🟡 |
| C3 Ambassador Program | ⬜ | 🟡 | 🟢 | 🟢 |
| D1 Education Channel | ⬜ | ⬜ | ⬜ | ⬜ |

---

# Part II: The Growth Machine

## 6. The Paywall Architecture — "Diagnosis Free, Cure Paid"

### Free vs. Paid

| Free Forever (Maximizes Virality) | Pro Only (Maximizes Conversion) |
|---|---|
| Health grade A-F + full detail | **Rewind** (rollback AI damage) |
| Ghost Report email (complete, ungated) | **Auto-Correction** (fix violations) |
| Blast Radius maps (public, shareable) | **Policy Enforcement** (block PRs) |
| Convention violations list (what's wrong) | **Convention Gating** (enforce at merge) |
| AI Contribution summary | **Drift Alerts** (real-time notifications) |
| MCP: basic file-level context | **MCP: full graph context** (edges, blast radius, justifications) |
| PR review summary (one-line) | **Compliance Boundaries** (audit trail) |

**Paywall red lines** — what must NEVER be gated: Ghost Report email, Blast Radius maps, Health Audit score, Convention violations list, PR review summary. Every free artifact is a billboard. The diagnosis creates the need; the paid action fills it. This is the Sentry/PostHog/Snyk/Datadog model.

### Conversion Psychology — The Emotional Arc

```
DAY 1:   Developer runs audit -> "Health: C+. 47-file blast radius on auth."
         Emotion: Shock. "I didn't know this was this bad."

DAY 2:   Ghost Report email arrives with full detail.
         Emotion: Loss aversion. "I can't un-know this."

DAY 3-5: PR reviews catch real violations. MCP makes AI agent smarter.
         Emotion: Dependency. "How did I code without this?"

DAY 6:   In-app: "2 days left. unerr caught 14 violations so far."
         Emotion: Urgency. Personalized data converts 3-5x vs generic.

DAY 7:   Paywall. MCP degrades. AI agents get visibly dumber.
         Emotion: "I need this back." $20/mo vs. 3 hours debugging.

DAY 8:   Degradation email: "7 issues in 24 hours. Specific PRs."
         Emotion: Quantified regret.
```

7-day trials convert 71% better than 30-day trials. ([1Capture 2025](https://www.1capture.io/blog/free-trial-conversion-benchmarks-2025))

### MCP Degradation — Transparent, Not Sabotage

When unerr's MCP returns full graph context during trial, Cursor respects architectural boundaries, Claude Code knows about existing utilities, Copilot follows conventions. When trial expires and MCP degrades to basic, agents start violating conventions, duplicating utilities, breaking boundaries.

**Critical guardrail: Radical transparency.** GitHub reversed self-hosted runner fees within 24 hours after community revolt. Replit's effort-based pricing sparked massive backlash. Cursor's pricing change caused a 40-point sentiment crash. ([GitHub backlash](https://samexpert.com/github-actions-pricing-backlash-2026/))

When the trial expires, push a transparent Degradation Report:

> *"Your trial ended today. Your AI agents are now operating without architectural context. Here are the 3 blind spots Cursor currently has in your latest PR: [specific function, specific blast radius, specific convention violation]. Re-enable full context for $20/mo."*

Frame it as "Look what you're missing" — never "We broke your toy." Every MCP response post-trial includes a visible header: `// unerr: basic mode — upgrade for full architectural context`. Reverse trials convert 2-3x standard freemium when degradation is transparent. ([Thoughtlytics](https://www.thoughtlytics.com/blog/reverse-trial-model-saas))

---

## 7. The Six Growth Engines

**Engine 0: Distribution Hijacking (Drives initial seed + 30% of ongoing signups)**

Cursor Plugin + Claude Code Skills + MCP Directories. Runs passively once set up. Full details in [Section 1.2](#12-pillar-2-distribution-hijacking-be-inside-every-ai-agent).

**Engine 1: Public Atlas as Viral Surface (Drives 30% of signups)**

`unerr.dev/atlas/{owner}/{repo}` — public, zero-signup, instant architecture visualization. The Atlas viral flywheel:

```
Developer sees Atlas of famous repo shared on X/Reddit
    -> "What does MY repo look like?" -> pastes URL
        -> "I never knew this" -> screenshots blast radius map
            -> Shares on X/Reddit -> other developers see it -> repeat
                -> Subset want MCP, PR review, Rewind -> signup -> Pro
```

Pre-index 50 famous repos (React, Next.js, Supabase, tRPC, Prisma). Every Atlas page is SEO content + shareable artifact.

**Engine 2: MCP Permanent Memory (Drives 30% of conversions, 90% of retention)**

The invisible engine. Developers don't "use unerr" — they use Cursor/Claude Code/Copilot, and unerr makes them all smarter invisibly. Removing unerr removes the IQ boost from every tool in the stack. Full conversion mechanics in [Section 6](#6-the-paywall-architecture--diagnosis-free-cure-paid).

**Engine 3: Content — Architectural Spotlights (Drives 20% of signups)**

Publish Atlas pages of famous repos as X threads/Reddit posts. Target massive, faceless repos (React, Kubernetes, Next.js) where no single developer feels attacked. For smaller repos, highlight positive patterns first. Always punch up, never down. Ask permission before spotlighting repos with < 10K stars. Frame as "what we learned from analyzing [Repo]" — educational, not critical.

Additional content plays:
- "Competitor's Pain Thread Response" — monitor r/cursor, r/ClaudeCode with keyword alerts. Genuine, helpful replies when pain is real and unerr solves it.
- "Spotlight the YouTuber's Architecture" — pre-index Fireship/Theo/ThePrimeagen's projects. DM: "We analyzed your codebase — here's what we found interesting."

**Engine 4: OSS Distribution (Drives 10% of signups, compounds over time)**

Every badge in a README is a permanent billboard. Every PR footer is a micro-ad. Precedent: Snyk's viral PR playbook, Codecov's one-line PR comment became industry standard.

```
OSS badge clicked -> Public health audit (no login) ->
"Your repo scored C+. Want to fix it?" -> Free trial ->
"My AI agent is smarter with unerr MCP" -> Pro ($20/mo) ->
Developer brings unerr to work -> Team/Enterprise
```

**Engine 5: Build in Public PROOF Engine (Hedge against platform dependency + trust multiplier)**

The piggybacking engines (0-4) deliver volume. Engine 5 delivers **professional trust and a fallback distribution channel** if platforms change algorithms.

**Critical distinction — Proof, not Vulnerability:** Base44's BiP was "watch me struggle and succeed" (vulnerability creates parasocial bond). unerr's BiP is **"look what this reveals about codebases you know"** (competence creates professional trust). Vulnerability works for consumer audiences. **Competence-based proof works for developer/senior-engineer audiences** — which is our primary buyer.

**Why we skip 4-6 weeks that Base44 needed:** Base44 spent weeks iterating with friends/family to find product bugs. Our product has been through 19 architecture phases, 27 Temporal workflows, 50+ MCP tools — all validated by a developer-founder who ships features only when personally satisfied with their reliability. T1 exists to discover edge cases in paths we haven't tested and to gather initial user feedback without buy-in pressure — not to fix a broken product. The wow and reliability factor is maintained at every step.

**Precedent validation:**
- **Base44** (Maor Shlomo): Solo founder, $1M ARR in 3 weeks, 400K users in 6 months, $80M Wix acquisition. Zero marketing spend. ([TechCrunch](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/))
- **Plausible Analytics**: Open MRR dashboard. One HN post (#1) added $400 MRR and changed everything. ([Plausible](https://plausible.io/blog/open-source-saas))
- **Pieter Levels**: Revenue screenshots on X. $3M/yr solo, zero employees. ([Buildloop](https://buildloop.ai/how-pieter-levels-runs-multiple-1m-ai-products-with-automation-zero-team/))
- **Tailwind CSS** (Adam Wathan): Accidentally marketed by live-streaming a side project. $4M revenue in <2 years. ([Adam Wathan](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/))

**The five BiP mechanics for unerr:**

**5a. "unerr on unerr" — Public Dogfooding (PRE-LAUNCH asset, not post-launch exercise)**

Publish the Atlas page for the unerr repository BEFORE Day 0: `unerr.dev/atlas/unerr/kap10-server`. This is the FIRST Architectural Spotlight — our own codebase. "Here's our codebase — 50+ MCP tools, 27 workflows, 12 anomaly detectors. Here's what unerr finds in its OWN code." When we ship features, post the blast radius map showing impact. When unerr finds issues in our own code, publish the finding — proof the tool works at the deepest level.

**5b. "The Transparency Ledger" — Results in Public**

The default tone is **competence, not vulnerability.** We share results and metrics, not struggles:
- Stripe MRR screenshots (when charging starts)
- Server costs breakdown (ArangoDB, Modal GPU, Supabase — developers love infra breakdowns)
- Impact metrics ("1,000 repos indexed. Average health grade: C+. Top finding: 68% of repos have dead code.")
- Post-mortems when things DO break — but the default is "here's what we built and what it reveals," not "watch us fumble"

([Reddit SaaS community validation](https://www.indiehackers.com/post/how-i-built-a-reddit-marketing-tool-to-30k-mrr-in-4-months-with-0-spent-on-marketing-470f39b763))

**5c. "Live-Stream the X-Ray" — Forensic Performance as Content**

Take a trending AI-heavy repo from HN, plug it into the Causal Substrate live on YouTube/Twitch. Developers watch the graph build in real-time — entities appearing, edges forming, blast radius calculating, health grade emerging. The "exhaust" of using the tool IS the content. Not a polished demo — a confident live teardown that shows the product WORKS. ([Tailwind model](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/))

**5d. "Focused Onboarding" — UX Friction, Not Product Bugs**

5-10 manual screen-share sessions in Days -3 to -1 (pre-launch). The product works — we're finding UX friction, not bugs. Watch where developers' eyes go. If Time-to-First-Insight > 60 seconds, fix the onboarding flow. These sessions generate testimonials ("I tried unerr and it found 23 dead functions in my repo in under a minute") that fuel all other engines.

**5e. "Community-Driven 20% Buffer" — Responsiveness as Loyalty**

Leave 20% of engineering capacity for community demands. If Discord screams for a specific integration, build it — even if it's not on the roadmap. Responsiveness to early users generates more loyalty than pristine roadmap execution. But the 80% of planned work ships on schedule because the features are already built and validated.

**The 11-Strategy Operational Breakdown:**

Strategies split into three tiers: passive (set-and-forget after setup), daily habits (10-15 min/day), and weekly rituals (30-60 min/week).

**Tier 1 — Passive (zero weekly time after setup):**

| Strategy | Setup Time | What It Does | Expected Impact |
|---|---|---|---|
| **Programmatic SEO via Atlas pages** | 30 min (batch-index pipeline) | Every public Atlas page is an SEO landing page targeting long-tail keywords ("Next.js architecture," "React auth flow"). Pre-index 200-500 popular repos. Google does the rest. | 500-5,000 organic visitors/month within 3-6 months. Compounds forever. Precedent: Zapier gets 16.2M visitors/month from programmatic pages. ([Programmatic SEO playbook](https://www.averi.ai/blog/programmatic-seo-for-b2b-saas-startups-the-complete-2026-playbook)) |
| **MCP directory listings + awesome-list submissions** | 2-3 hours ONE TIME | Submit to mcp.so, mcpmarket.com, lobehub, aiagentslist, fastmcp, PulseMCP + awesome-mcp-servers, awesome-claude-code-skills GitHub lists. Each listing = permanent SEO backlink + discovery channel. | 2,000-8,000 installs/month passively. Servers on 5+ directories get 10x installs. ([MCP Market](https://mcpmarket.com/)) |
| **Cursor Plugin + Claude Code Skill** | 3-5 days ONE TIME | Already in plan. Highest-ROI single action. Then passive discovery via marketplaces forever. | 20K-50K installs in Month 1. Top Claude skills hit 418K installs. ([Cursor Marketplace](https://cursor.com/marketplace)) |
| **GitHub Action for CI/CD** | 2-3 days ONE TIME | `unerr-health-check` GitHub Action: runs on every PR, posts health grade + blast radius as PR comment. Published to GitHub Marketplace. Once installed, runs on every PR forever. | 100-1,000 installs first month. Each install = PR comments visible to all reviewers. Same model as Codecov/Snyk. |

**Tier 2 — Daily Habits (10-15 min/day):**

| Strategy | Daily Time | What to Do | Expected Impact |
|---|---|---|---|
| **Reddit keyword monitoring** | 15 min/day | Monitor r/cursor, r/ClaudeCode, r/webdev, r/programming, r/SaaS with keyword alerts ("codebase context," "AI doesn't understand," "blast radius," "code review noisy"). Reply to 2-3 threads with genuine, specific help + Atlas link. NEVER spam — only when pain is real and unerr solves it. | 5-15 high-intent signups per reply. At 3 replies/day = 450-1,350 signups/month. Precedent: Narrative Nooks got 139 leads + $980 revenue in 30 days from Reddit alone. ([Reddit marketing guide](https://www.withkarmic.com/reddit-marketing-guide)) |
| **X/Twitter "Daily Artifact"** | 10 min/day | Post one unerr-generated artifact: health grade, blast radius map, execution trace, convention violation, interesting finding from indexing a famous repo. Tag the repo's maintainer. Include Atlas link. The screenshot IS the content — no copywriting needed. | 100-500 impressions initially. Compounds to 5K-20K/post within 3-6 months. #buildinpublic community amplifies. Precedent: Pieter Levels built 350K followers with daily posts. ([Buildloop](https://buildloop.ai/how-pieter-levels-runs-multiple-1m-ai-products-with-automation-zero-team/)) |

**Tier 3 — Weekly Rituals:**

| Strategy | Weekly Time | What to Do | Expected Impact |
|---|---|---|---|
| **LinkedIn "Proof Posts"** | 45 min (2-3 posts) | Short posts showing unerr OUTPUT, not FEATURES. Blast radius map screenshot + "We analyzed Next.js. Auth module touches 47 files." MRR milestones. Server cost breakdowns. The visual stops scrolling because it's unusual and reveals something surprising. | 500-2,000 impressions/post. Enterprise decision-makers see it. Precedent: Base44's primary engine was LinkedIn — grew to 400K users. ([Base44 TechCrunch](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/)) |
| **Cross-post technical blog** | 1.25 hours (write + cross-post) | One blog post/week on our site. Cross-post to Dev.to, Hashnode, Medium with canonical URLs. Topics: "How Next.js handles routing — the execution trace." "The 12 most common anti-patterns in AI-generated code." The Atlas GENERATES the content — we narrate what it found. | 500-2,000 views/post across platforms. Compounds with backlinks and SEO. ([Cross-posting guide](https://dasroot.net/posts/2026/03/cross-posting-technical-content-devto-medium-hashnode/)) |
| **Discord Office Hours** | 1 hour (30 min live + 30 min setup) | Weekly live session: founder analyzes a community member's repo in real-time. Screen-share Atlas. Record for YouTube. Each session = a testimonial + a YouTube asset that generates views forever. | 5-20 live attendees initially. YouTube recordings get 100-1,000 views each over time. Precedent: Tailwind CSS — live-streaming generated the product's audience. ([Adam Wathan](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/)) |
| **"unerr on unerr" Monday update** | 30 min | Run unerr on our own codebase. Post the delta: "This week: shipped [feature]. Blast radius: 14 files. Health: B+ → A-. Conventions violated: 0." Post to X + LinkedIn simultaneously. Ultimate dogfooding proof. | Builds credibility week over week. Each post is a micro-proof the tool works. |

**The Weekly Time Budget (total ~6 hours/week):**

| Strategy | Weekly Time | Category | Priority (drop order if pressed for time) |
|---|---|---|---|
| Programmatic SEO (Atlas pages) | 0 (after setup) | Passive | NEVER drop — it's free |
| MCP directories + awesome lists | 0 (after setup) | Passive | NEVER drop — it's free |
| Reddit keyword monitoring | 1.5 hours | Daily habit | **Last to drop** — highest intent leads |
| LinkedIn proof posts | 45 min | 2-3x/week | Drop to 1x/week if pressed |
| X daily artifact | 1 hour | Daily habit | Drop to 3x/week if pressed |
| Cross-post blog | 1.25 hours | Weekly | Drop to biweekly if pressed |
| Discord office hours | 1 hour | Weekly | Drop to biweekly if pressed |
| "unerr on unerr" update | 30 min | Weekly | **Last to drop** — ultimate dogfooding proof |
| **TOTAL** | **~6 hours/week** | | |

**If time is critically short (minimum viable stack — 2 hours/week):**
1. Reddit monitoring (1.25 hrs) — highest-intent leads, can't be replicated by passive engines
2. "unerr on unerr" Monday post (0.5 hrs) — proof of dogfooding, posts to X + LinkedIn simultaneously
3. Everything passive still runs (SEO, directories, plugins, GitHub Action) — zero additional time

**6 hours/week is nothing in the initial weeks.** Run the full stack for the first 4-6 weeks when momentum matters most. Scale back to the minimum viable stack only when genuinely out of time. The passive engines (Tier 1) continue running regardless.

**Why this is a hedge, not a replacement:**

Engines 0-4 are primary distribution. Engine 5 (BiP) is the **insurance policy** — if platforms change algorithms, the BiP audience is OURS on channels we control. The developer-founder quality gate means we're posting proof of a working product, not logs of a struggling one. Competence-based BiP converts developer audiences faster than vulnerability-based BiP.

---

## 8. The Viral Loop System

**Loop 1: The Screenshot Loop**
Health grade + blast radius map = inherently shareable screenshot posted on X/Reddit. Others audit their repos. K-factor target: 0.3-0.5.

**Loop 2: The PR Billboard Loop**
One-line PR summary on every connected repo. Non-users see it on every PR they review. "What's unerr?" Scales with connected repos x PR volume.

**Loop 3: The Config Virus Loop**
`.unerr/rules.yaml` committed to git. Every developer who clones inherits it. Encounters convention violations in PRs. "What's enforcing this?" Scales with team size.

**Loop 4: The OSS Badge Loop**
Health badge in README viewed thousands of times/day on popular repos. Click leads to public health page. "I want this for my private repo." Scales with OSS adoption count x repo traffic.

---

## 9. Channel Strategy

### Platform Table

| Platform | Why We're Here | Metric | Precedent |
|---|---|---|---|
| **Hacker News** | Launch day traffic (20-30K visitors). Developer credibility. | Signups from Show HN | Plausible: $400 MRR from one HN post. ([Startup Spells](https://startupspells.com/p/plausible-analytics-hacker-news-playbook)) |
| **Product Hunt** | Second-wave signups. Badge for landing page. SEO backlink. | Day-1 signups (1-3K) | Twinr: 1K signups on launch day. ([Founderpath](https://founderpath.com/blog/launch-on-product-hunt)) |
| **r/programming** (4M) | High-intent developer audience. Educational content. | Audit link clicks | Supabase community strategy. ([Craft Ventures](https://www.craftventures.com/articles/inside-supabase-breakout-growth)) |
| **r/cursor** (200K+) | Competitor's audience with exact pain point. | MCP config adoption | Pain is documented daily in this sub. |
| **r/ClaudeCode** | Claude Code users wanting codebase context. | MCP integration signups | GitNexus hit Trending from this community. |
| **X/Twitter** | Founder brand + Architectural Spotlights + screenshot virality. | Impressions to audit clicks | Linear's GTM was X/Twitter word-of-mouth. |
| **YouTube** | Long-form demos. Dev influencer coverage. | View to trial pipeline | Cursor's breakout was driven by YouTube demos. |
| **Discord** | Community, Office Hours, beta exclusivity, feedback. | Retention + qualitative signal | Every breakout devtool has a Discord. |
| **GitHub** | OSS badges, PR footers, public Atlas pages. | Passive acquisition via repos | Snyk's entire viral loop is GitHub-native. |
| **YC Bookface** | ~10K YC alumni founders — high-intent testers, early customers. | Seed users (target: 500 Week 1-2) | YC startups use Bookface for beta testers. ([Horizon Labs](https://www.horizon-labs.co/resources/bookface-yc)) |

### What We Do NOT Use

| Don't | Why |
|---|---|
| **Paid ads** (Google, Meta, LinkedIn) | Every $1M ARR speed run did $0 ad spend. Ads signal desperation to devs. |
| **Conference booths** | Too expensive, too slow. Submit talks instead. |
| **PR agency** | Founders tell stories better. Dev journalists respond to authentic builders. |
| **Enterprise sales team** | No hires until $500K+ MRR. Bottom-up PLG first. |
| **Affiliate program (before Day 60)** | Affiliates scale satisfaction. They can't create it. |

---

# Part III: The Execution Framework

## 10. The Macro Roadmap: Month 1 / Month 2 / Month 3

### Month 1: "The Atlas Moment" (Days 0-30)

**Narrative:** "See your codebase architecture for the first time. Give your AI agents permanent memory. Free — everything works, we're gathering feedback on what to build next."
**Primary metric:** Atlas page views + shares + activation rate (>50%)
**Tranches:** T1 (free launch) + T2 (revenue begins)
**MRR target:** $5,000+ by end of Week 4 (see Checkpoint 1 below). Revenue starts Week 3.

- **Pre-launch (Days -3 to -1):** Publish "unerr on unerr" Atlas page — our own codebase is the first Architectural Spotlight. 5-10 manual screen-share onboarding sessions for UX friction (product is validated, we're testing the flow). Publish Cursor plugin + Claude Code skill + MCP directory listings — the highest-ROI work in the plan.
- **Week 1-2 (T1):** Public Atlas goes live as the hero. Pre-index 50 famous repos. Architectural Spotlight threads link to interactive Atlas pages. Signup flow, repo onboarding, Health Command Center, MCP integration — all free. Product is developer-founder validated; T1 discovers edge cases in untested paths and gathers early user feedback without buy-in pressure. Community forms in Discord. BiP Proof Engine starts: daily posts on X, 2-3x/week on LinkedIn, journey updates on Reddit.
- **Week 3-4 (T2):** Paywall activates on actions. Users with 2+ weeks of free Atlas + MCP feel degradation. Ghost Reports + PR footers create passive demand.

### CHECKPOINT 1: $5K MRR by End of Week 4 (First Revenue Milestone)

> **This is the first proof-of-life for the entire GTM strategy.** If we can't reach $5K MRR in 4 weeks of market exposure, something fundamental needs to change before we accelerate.

**Target: $5K MRR = ~208 paid seats at $24 blended ARPU.**

Revenue only flows from Week 3 onward (T1 is free, T2 activates billing). So this is really: **can we convert 208 paying users in ~2 weeks of active billing from a base of 600-2,000 free users?**

**The math — three routes to $5K:**

| Route | How it works | Seats | MRR |
|---|---|---|---|
| **Pure PLG** | 1,500 signups → 50% activate (750) → 15% convert (112 seats) | 112 | $2,688 |
| **PLG + 1 AI Audit deal** | 112 PLG seats + 1 audit converting to $2K/mo ARR | 112 + equiv. | $4,688 |
| **PLG + 1 Audit + 2 team upsells** | Above + 2 Startup teams (3 seats × $30) | 118 + equiv. | **$5,048** |

Pure PLG alone gets us to ~$2.5-3K. **The AI Audit (Path A9) is the $5K cheat code** — one deal closes the gap.

**Week-by-week acquisition targets:**

| Week | What happens | Free users (cumul.) | Paid seats (cumul.) | MRR |
|---|---|---|---|---|
| **Week 1** | T1 launch. Atlas live. Cursor plugin + Claude skill + MCP directories. HN + PH + Reddit. YC Bookface. | 400-800 | 0 (free) | $0 |
| **Week 2** | Content compounds. BiP engine running. Word-of-mouth starting. Manual onboarding sessions generating testimonials. | 600-1,500 | 0 (free) | $0 |
| **Week 3** | T2 paywall activates. T1 free users hit paywall — MCP degrades, Rewind requires Pro. Degradation emails fire. First conversions. | 900-2,000 | 60-120 | $1,440-2,880 |
| **Week 4** | Second conversion wave. More T1 users convert. New T2 signups on 7-day trials start expiring. AI Audit pipeline active. | 1,200-2,500 | **150-250** | **$3,600-6,000** |

**The $5K MRR week-by-week breakdown by source:**

| Source | Week 3 MRR | Week 4 MRR | Total by Week 4 |
|---|---|---|---|
| T1 free users converting (MCP dependency felt) | $1,200 | $800 (tail) | $2,000 |
| T2 new signups converting (7-day trials) | $200 | $600 | $800 |
| Cursor/Claude/MCP passive installs converting | $100 | $300 | $400 |
| Startup team upsells (2 teams × $90/mo) | $0 | $180 | $180 |
| **AI Audit deal (1 deal → $2K/mo ARR)** | $0 | **$2,000** | **$2,000** |
| **TOTAL** | **$1,500** | **$3,880** | **$5,380** |

**What MUST go right for $5K in 4 weeks:**

| Must-happen | How we ensure it | Fallback if it doesn't |
|---|---|---|
| **600+ free users in Week 1-2** | HN + PH + Reddit + Cursor plugin + Claude skill + YC Bookface — all in the first 48 hours | If < 300: guerrilla Spotlights (20 repos), direct DMs (50 maintainers), HN resubmit |
| **50%+ activation rate** | Product is validated. Streaming onboarding. Time-to-First-Insight < 60 seconds. | If < 35%: stop everything, fix onboarding flow. Nothing else matters until this works. |
| **12-15% trial→paid conversion** | MCP dependency trap + transparent degradation email + personalized Day 5/6/7 emails | If < 8%: paywall is in wrong place. Move to highest-engagement feature. Test 3-day trial. |
| **1 AI Audit deal by Week 4** | Start outreach Week 1. Target 5 VPs of Engineering via LinkedIn/warm intros. Offer at $10K. | If 0 deals: extend to Month 2. Not fatal — PLG still compounds. |
| **Cursor plugin discoverable** | Submit Day -1. One-click install. Compelling description with Atlas screenshot. | If marketplace delays listing: MCP directories + Claude skill carry the distribution load. |

**Leading indicators to watch DAILY:**

| Indicator | Target by end of Week 1 | If below target |
|---|---|---|
| Signups | 400+ | Distribution channels aren't firing. Check: is HN post live? Is Cursor plugin listed? Did Bookface post get engagement? |
| Activation (first index completed) | 200+ | Onboarding is broken. Screen-share with 3 users TODAY. Find the friction. |
| Atlas page views (public, non-logged-in) | 1,000+ | Atlas isn't being shared. The visual isn't compelling enough. Improve the screenshot/GIF in social posts. |
| MCP tool calls per active user | >5/day | MCP isn't being discovered. Add a prominent "Connect to Cursor/Claude" prompt in the dashboard. |
| Discord members | 50+ | Community isn't forming. Post more, engage more, do the first Office Hours live session. |

**What $5K MRR proves:**

If we hit $5K MRR by Week 4, we've validated:
1. ✅ The Atlas "new ability" resonates — developers sign up and activate
2. ✅ The MCP dependency trap works — they pay when it degrades
3. ✅ Distribution hijacking delivers volume — plugins/skills generate installs
4. ✅ The pricing is right — $20/mo converts without friction
5. ✅ The productized audit has enterprise potential — VP Engineers will pay for architecture visibility

This unlocks aggressive Month 2 execution (Tranches 3-4) with confidence.

**What if we DON'T hit $5K by Week 4?**

| Actual MRR | What it means | Action |
|---|---|---|
| **$3-5K** | Close. PLG works. Audit deal didn't close yet. | Continue. Stay the course. $5K hits in Week 5-6. |
| **$1-3K** | PLG works but conversion is low. MCP dependency isn't felt strongly enough. | Fix: move paywall, strengthen degradation messaging, shorten trial to 3 days. |
| **$500-1K** | Signups are fine but nobody converts. Value proposition isn't compelling enough post-trial. | Serious pivot needed. Interview every churned trial user. The "aha moment" isn't landing. |
| **< $500** | Nobody signed up, or activation is broken. | Stop all growth activity. Fix the product experience. Re-launch when Time-to-First-Insight < 60 seconds. |

---

### Month 2: "Expansion & Viral Loops" (Days 31-60)

**Narrative:** "50+ open-source projects display unerr health grades. Your AI agents deserve the same intelligence."
**Primary metric:** Viral coefficient (K-factor) — target: >0.3
**Tranches:** T3 + T4
**MRR target:** $58,000

Paywall mechanics compound. Rewind converts at crisis moments. `.unerr/rules.yaml` spreads through teams via git. OSS badges generate passive acquisition. "State of AI Code Quality" report generates press. Team detection triggers Startup tier upsells.

### Month 3: "Scale" (Days 61-90)

**Narrative:** "unerr is intelligence infrastructure. 4,000+ developers and their AI agents depend on it."
**Primary metric:** MRR growth rate — target: >20% week-over-week
**Tranches:** T5 + T6
**MRR target:** $83,333 = **$1M ARR**

Enterprise pilots add high-ACV seats. Launch Week creates a second viral spike. Annual plans lock in revenue. Affiliate program turns dev educators into a sales force.

---

## 11. Pricing & ARR Math

### Pricing Table

| Tier | Price | Repos | What They Get |
|---|---|---|---|
| **Free Trial** | $0 / 7 days | 1 project | Full product. 7 days. |
| **OSS Guardian** | $0 forever | Unlimited public | Full product on all public repos. |
| **Pro** | $20/month or $172/year ($16/mo) | 3 repos, 50K LOC each | Full Causal Substrate, Rewind, Blast Radius, Ledger, Rules Engine, 50+ MCP tools, unlimited Atlas Ask, unlimited MCP queries. |
| **Pro+** | $35/month or $336/year ($28/mo) | 10 repos, 200K LOC each | Everything in Pro. Priority indexing. Higher LOC limits. |
| **Startup** | $30/seat/month or $24/seat annual (3-seat min) | Unlimited repos per org, 500K LOC each | Pro + shared Rule Library, team health, cross-repo search, org conventions. |
| **Enterprise Pilot** | $2,000 flat / 60-day POC | Unlimited, custom LOC | Full product for 10 seats. Converts to $99-149/seat/mo. |

### Pricing Philosophy: Pure Flat-Rate, No Credits, No Metering

**We deliberately reject the credit/usage model that Cursor, Claude, and Replit use.** Here's why:

**unerr's cost structure is fundamentally different from Cursor/Claude:**
- Cursor/Claude burn LLM tokens on EVERY interaction (every autocomplete, every chat message, every agent step). Cost per user varies enormously by usage.
- unerr burns LLM tokens ONCE at indexing time (business justification, Atlas generation, health synthesis). After that, **90% of ongoing value (50+ MCP tool calls, blast radius, health grades, convention checks, context injection) is pure graph queries against ArangoDB — near-zero marginal cost.**

| Feature | Cost type | Cost per use | Metering needed? |
|---|---|---|---|
| 50+ MCP graph tools (search, lookup, callers, blast radius, impact, blueprint, conventions) | Graph query | ~$0.0001 | **No — near-zero** |
| Context injection into AI agents | Cached lookup | ~$0.0001 | **No — near-zero** |
| Health grades, drift alerts, convention checks | Pre-computed | ~$0.0001 | **No — near-zero** |
| Rewind | Ledger query + saga | ~$0.001 | **No — near-zero** |
| Atlas Ask (chat with codebase) | LLM call | ~$0.001-0.005 | **No — self-hosted Ollama (fixed cost)** |
| Suggest Approach | Small LLM call | ~$0.005 | **No — self-hosted Ollama** |
| Full repo indexing (one-time) | LLM + GPU + CPU | ~$0.30-1.20/repo | **Managed via repo count + LOC limits per tier** |

**The Atlas Ask cost problem is solved by self-hosted LLMs:** Atlas Ask (chat with codebase) uses a self-hosted Ollama instance (Qwen3-4B or Llama-3.2-8B) on a $15-35/mo VPS. The LLM narrates pre-computed graph context — it doesn't reason from scratch. Fixed monthly cost regardless of query volume. No per-query billing.

**The indexing cost variance is managed by repo count + LOC limits:** A 5K LOC repo costs ~$0.30 to index. A 500K LOC repo costs ~$5+. Instead of credits, we use tier-based limits (Pro: 3 repos at 50K LOC, Pro+: 10 repos at 200K LOC). Simple, predictable, no meter anxiety.

**Why this matters for growth:**
- **No meter anxiety.** Developers use MCP tools, Atlas Ask, and all features freely. The dependency forms without friction.
- **No Cursor-style backlash.** Cursor's credit switch caused a 40-point sentiment crash. We avoid this entirely. ([GetMonetizely](https://www.getmonetizely.com/blogs/cursor-ais-billion-dollar-saas-pricing-fiasco))
- **Simplicity.** "Unlimited everything within your tier" is one sentence. Credits require a dashboard, a counter, purchase flows, and constant user anxiety.
- **Higher conversion.** Users who don't worry about running out of credits use the product more → form deeper MCP dependency → convert at higher rates.

**Why $20 Pro:** $10 = Copilot bracket (autocomplete). $20 = Cursor/Claude/CodeRabbit bracket (professional infrastructure). ([NxCode](https://www.nxcode.io/resources/news/ai-coding-tools-pricing-comparison-2026))

**Why $30 Startup:** Competitive with Greptile ($30), below Cursor Teams ($40), signals "professional infrastructure." ([Greptile](https://dev.to/rahulxsingh/coderabbit-vs-greptile-which-ai-reviewer-catches-more-bugs-4n9k), [Cursor Teams](https://www.vantage.sh/blog/cursor-pricing-explained))

**Annual discount:** $16/mo Pro, $28/mo Pro+, $24/seat Startup. Superhuman model — pricing as quality filter, annual as loyalty reward. ([Superhuman](https://newsletter.pricingsaas.com/p/inside-superhumans-pricing-evolution))

**Enterprise tiered pricing (post-POC):**

| Enterprise Feature Set | Price |
|---|---|
| Base (governance + compliance + SSO) | $99/seat/mo |
| + Prompt Ledger + Full Audit Trail | $129/seat/mo |
| + Air-gapped + Custom SLA + Dedicated Support | $149/seat/mo |

B2B procurement takes 30-60 days minimum. T5 secures Paid Pilots, not enterprise MRR. ([Enterprise benchmarks: Sentry avg $63K/yr, Datadog avg $700K/yr](https://sedai.io/blog/datadog-cost-pricing-guide))

### Pricing Validation: Tested Against Standard Frameworks

**Test 1 — "Good-Better-Best" Tier Structure**

Our individual tiers follow the standard 3-tier psychology: Pro ($20) is the hero tier (where most customers land), Pro+ ($35) is the upgrade path for power users, Enterprise/Startup pricing anchors everything as a bargain for individuals. Price jump from Pro→Pro+ is 75% (within the recommended 50-100% range). The real anchor is the Startup tier ($90/mo minimum) which makes both Pro and Pro+ feel like individual bargains. ([Tiered pricing psychology](https://adapty.io/blog/tiered-pricing/))

**Test 2 — Flat-Rate Bias (Developer Psychology)**

Academic research confirms consumers exhibit a strong **"flat-rate bias"** — preferring flat-rate pricing even when pay-per-use would be cheaper. Driven by loss aversion (costs are sunk, future use is unlimited), insurance effect (protection against surprise bills), and convenience (no tracking). Even experienced B2B purchasing professionals exhibit this bias. Our flat-rate model is **perfectly aligned** with this. Developers are the MOST susceptible — Cursor credit backlash is documented proof. ([HFS Research](https://www.hfsresearch.com/research/pricing-rational-psychological-wins/), [Flat-rate bias study](https://www.sciencedirect.com/science/article/pii/S0148296321002629))

**Test 3 — Value-Based Pricing**

| Persona | Value delivered/month | Our price | Value capture |
|---|---|---|---|
| Vibe coder | ~$3,000-8,000 (prevents $20-50K rewrite) | $20/mo | 0.3-0.7% |
| Solo dev | ~$400-800 (saves 2-4 hrs/week review) | $20/mo | 2.5-5% |
| Small team (5 devs) | ~$2,000-4,000 (saves 10-20 hrs/week) | $150/mo | 3.7-7.5% |
| Enterprise (50 devs) | ~$20,000-50,000 (drift prevention + compliance) | $5,000-7,500/mo | 10-37% |

We are **deliberately underpriced at the individual tier** (0.3-5% value capture) — this is strategic for PLG adoption velocity. $20/mo is an impulse buy that doesn't require manager approval. Value capture increases naturally up-market: Startup at 3.7-7.5%, Enterprise at 10-37%. This is exactly the Linear/Cursor/Notion playbook — flood the market at individual tier, capture value at team/enterprise. 43% of SaaS companies believe they charge less than the market would bear ([OpenView Partners](https://www.getmonetizely.com/blogs/5-donts-of-a-saas-pricing-strategy-things-you-should-never-do)). **Action: if Pro conversion exceeds 30%, raise to $25/mo in Month 4-6.**

**Test 4 — Feature Gating**

Best practice for devtools: gate on SCALE (repos, seats, storage), not on FEATURES (disabled buttons). Our gating follows this exactly — repo count + LOC limits per tier, not feature lockouts. The one feature gate (MCP context depth: basic→full) is invisible — the agent returns less data, the user never sees a "locked" icon. The "insights free, actions paid" split is the Sentry/PostHog gold standard. ([Feature gating for devtools](https://www.getmonetizely.com/articles/how-to-price-developer-tools-code-quality-tech-pricing-strategies-amp-feature-gating-models-for-saas))

**Test 5 — Competitive Positioning**

| Competitor | Their price | Our equivalent | Ratio | Assessment |
|---|---|---|---|---|
| Cursor Pro | $20/mo | Pro $20/mo | 1.0x | Same bracket — correct |
| Cursor Pro+ | $60/mo | Pro+ $35/mo | 0.58x | Cheaper — we're complementary, not a replacement |
| Cursor Teams | $40/seat | Startup $30/seat | 0.75x | Cheaper for teams — strategic for seat velocity |
| CodeRabbit | $24-30/seat | Pro $20/mo | 0.67-0.83x | Cheaper with deeper product (Atlas + MCP) |
| Greptile | $30/user | Pro $20/mo | 0.67x | Cheaper with 5x signal depth |

All ratios within the 0.5x-2x safe zone. We're positioned at the "accessible infrastructure" point — same bracket as Cursor/Claude, clearly cheaper than competitors for equivalent or deeper functionality.

**Test 6 — "No Credits" as Competitive Moat**

*"Unlimited. No credits. No surprises."* This is our single strongest pricing differentiator. While Cursor (credit pool, $20 included), Claude (usage limits), and Replit (effort-based pricing) all face developer backlash for metered models, we offer pure flat-rate. The self-hosted Ollama architecture makes this economically sustainable. This should be marketed prominently on the pricing page and in every competitive comparison.

**Overall Score: 8.7/10.** Strong pricing architecture for launch. Key future actions: (1) raise Pro to $25/mo if conversion > 30%, (2) monitor if 3-repo Pro limit feels restrictive (consider 5), (3) consider widening Pro→Pro+ gap to $45-50 if Pro+ adoption is too low.

### Revenue Ramp

**$1M ARR = $83,333 MRR. Blended ARPU: ~$24/seat. Target: ~3,500 paid seats by Day 90.**

| Phase | Daily Paid Acquisition | Cumulative Paid Seats | MRR |
|---|---|---|---|
| Days 1-14 (T1 free launch) | 0 paid (600-1,500 free users) | 0 | $0 |
| Days 15-30 (T2 paywall + Audit) | PLG conversions + 1 AI Audit deal | ~208 | **$5,000** (Checkpoint 1) |
| Days 31-60 (T3-T4 compound) | avg 40/day + team upsells | 1,400 | $33,600 |
| Days 61-90 (T5-T6 scale) | avg 55/day + enterprise pilots | 3,500 | $83,333 |

Revenue starts Day 15, not Day 1. The free beta creates a reservoir of 1,000+ activated users. When T2 paywall activates, conversion from this cohort is significantly higher than cold signups — they've already experienced the "aha moment" and formed MCP dependency.

### Funnel Math

| Stage | Volume (Steady State) | Rate |
|---|---|---|
| Daily visitors | 3,000-5,000 | -- |
| Signups | 300-500 | 10% of visitors |
| Activations (first index) | 150-250 | 50% of signups |
| Conversions (trial to paid) | 18-75 | 12-15% base / 25-30% stretch |

Planning assumption: Use 12-15% activation-to-paid for budgets. Cursor's 36% is an outlier (it IS the IDE). ([Jason Lemkin](https://x.com/jasonlk/status/1990840106102702272))

---

## 12. The Six Tranches — Bird's Eye View

| Tranche | Theme | What Ships | North Star | MRR Target |
|---|---|---|---|---|
| **T1** "The Atlas" (Week 1-2) | FREE confident launch + edge-case discovery + community building | Public Atlas, signup flow, repo onboarding, Health Command Center, streaming progress, MCP integration. **No billing.** Features validated by developer-founder — T1 discovers edge cases in untested paths, not product bugs. | 1,000+ free users, >50% activation, >500 Atlas views, <5% graph error rate | $0 (intentional) |
| **T2** "Show the Fire" (Week 3-4) | Revenue begins — free artifacts + paywall on actions | Stripe checkout, trial logic, MCP degradation, Ghost Report, PR one-liner, blast radius page, Rule Library | 400 paid seats | $9,600 |
| **T3** "Charge to Put It Out" (Week 5-6) | Paywall mechanics compound | Rewind (gated), `.unerr/rules.yaml`, drift alerts, annual plan, team detection | 1,200 seats | $28,800 |
| **T4** "The Viral Engine" (Week 7-8) | Compounding distribution | Self-serve OSS Guardian, public Atlas, referral program, "State of AI Code Quality" report | 2,000 seats | $48,000 |
| **T5** "Enterprise Crack" (Week 9-10) | Bottom-up enterprise | Enterprise Pilot ($2K/60-day POC), AI Contribution Report, compliance tagging, SSO/SAML | 2,700 seats | $64,800 |
| **T6** "Second Spike" (Week 11-12) | Launch Week + conversion blitz | 5 features in 5 days (Supabase playbook), partner integrations, affiliate program | **3,500+ seats** | **$83,333+** |

### Emotional Arc

```
T1: Developer SEES their architecture for the first time. Product works reliably from first use.
    "I didn't know my auth touches 47 files." Edge cases discovered. Feedback shapes priorities.
T2: Ghost Reports and PR footers create DEMAND. "I see the fire. I pay to put it out."
T3: Trial expires. MCP degrades. AI agents lose memory. "$20/mo vs. 3 hours debugging."
T4: OSS badges + public Atlas + referrals compound passively. Every share = an advocate.
T5: Bottom-up enterprise pressure (3+ same-domain -> CTO email). EU AI Act urgency.
T6: Launch Week + conversion blitz -> $1M ARR.
```

### Threshold Triggers (Per-Tranche Go/No-Go)

| Tranche | Green (proceed) | Yellow (iterate) | Red (pivot) |
|---|---|---|---|
| T1 (free beta) | > 1,000 free users, > 50% activation, < 5% graph error rate | 300-1,000 users, 30-50% activation | < 300 users or < 30% activation or > 10% graph errors |
| T2 | > 400 paid seats Day 30, > $9K MRR | 150-400 seats, $4-9K | < 150 seats or < $4K |
| T3 | > 1,200 seats Day 45, > 20% rules committed | 600-1,200 seats, 10-20% rules | < 600 seats or < 10% |
| T4 | > 100 OSS badges, > $48K MRR Day 60 | 50-100 badges, $30-48K | < 50 badges or < $30K |
| T5 | > 2,700 seats, enterprise pipeline | 2-2.7K seats | < 2,000 seats |
| T6 | **$83,333 MRR** | $60-83K MRR | < $60K MRR |

### Leading Indicators (Early Warning System)

| Leading Indicator | Target | What It Predicts | If Below Target |
|---|---|---|---|
| **Time to First Insight** | < 3 minutes | If users abandon before seeing health score, nothing else matters | Simplify onboarding. Pre-compute during signup. |
| **MCP Daily Ping Rate** (calls/user/day) | > 10 | Agent dependency depth. If agents aren't querying MCP, the dependency trap fails. | Add dashboard prompt, auto-configure in onboarding. |
| **Atlas Page Scroll Depth** | > 60% of page | Content resonance. Users who scroll deep are hooked. | Improve LLM narrative quality in Feature Story. |
| **Ghost Report Forward Rate** | > 5% of recipients | Viral coefficient. Forwarded reports = warm referrals. | Increase specificity of findings. |
| **`.unerr/rules.yaml` Commit Rate** | > 20% of activated users | Infrastructure lock-in. Committed config = retention. | Improve convention mining. |
| **Discord Active Members / Total** | > 30% | Community health. Silent Discords = dead products. | More founder presence, more office hours. |

---

## 13. The Weekly Rhythm + Daily Adjustment

### Weekly Tranche Rhythm

**Monday: "The Drop"** — Ship headline feature. Publish blog + X thread + Reddit post. Email all users. Update Discord with next-week preview.

**Tuesday-Wednesday: "The Amplification"** — Founder engages all comment threads. Post 1-2 Architectural Spotlights using new feature. Monitor activation metrics.

**Thursday: "The Feedback Harvest"** — Review PostHog funnels. Check threshold triggers (Green/Yellow/Red). Identify top user complaint from Discord + support. Decide: does next week's drop need to shift?

**Friday: "The Conversion Push"** — Trial expiry emails (Day 5/6/7 personalized). Process Stripe payments. Review weekly scorecard. Pre-write next week's content.

### Daily Dynamic Adjustment (The Morning Check — 10 min)

| Signal | If Up | If Down |
|---|---|---|
| **Yesterday's signups** | Double down on the channel that drove them | Shift to an untried channel today |
| **Activation rate** | Keep onboarding unchanged | Simplify — remove a step, auto-detect more |
| **Trial to paid (rolling 7d)** | Keep paywall placement | Move paywall to highest-engagement feature |
| **Content engagement** | Schedule 2 more pieces this week in same format | Kill the format. Try a different one. |
| **MCP tool calls/user** | Users are engaged — ship more tools | MCP isn't being discovered — add dashboard prompts |

---

# Part IV: Resilience & Contingencies

## 14. Plan A / Plan B / Plan C (Layered Fallback Strategy)

### Plan A: "The Lightning Path" (90-120 days)

**Trigger:** All engines fire. Claude Code skill gets featured. Cursor plugin gets early placement. Atlas goes viral.
**What happens:** 33K-43K installs Month 1. Platform installs compound monthly. 3,500 paid seats by Day 90.
**Probability:** 15-25%.

### Plan B: "The Steady Build" (4-7 months)

**Trigger:** Partial engine success. Some platforms deliver, others don't. Atlas gets traction but doesn't go viral. MCP dependency works but conversion is 12-15% (not 25%).
**What changes:** Extend free beta by 1 week. Double content cadence. Pursue 2-3 enterprise pilots earlier (Month 2 instead of Month 3). Shift focus to highest-performing channel.
**What stays the same:** Paywall architecture, pricing, tranche structure (stretched over more weeks), all five growth engines.
**Probability:** 45-55%.

### Plan C: "The Patient PLG" (9-14 months)

**Trigger:** Content-only growth. Platforms reject or deliver minimal volume. Atlas doesn't resonate visually. MCP too subtle for most developers.
**What changes:** Pivot to CodeRabbit/Snyk trajectory. OSS-first strategy. Heavy content cadence (daily Architectural Spotlights). Enterprise outreach starts Month 3. EU AI Act (Aug 2026) as enterprise forcing function. Consider co-founder or contractor for growth.
**What stays the same:** Product, pricing, paywall architecture, MCP infrastructure.
**Probability:** 15-25%.

---

## 15. Specific Contingencies

### A: Beta Flop (< 300 free users by Week 2)
Guerrilla spotlights (20 repos). Direct DMs (50 maintainers). HN resubmit. Influencer outreach. Personal founder onboarding for every signup.

### B: High Signups, Low Conversion (> 5K signups, < 5%)
Move paywall to highest-engagement feature. Add urgency counter. Shorten trial to 3 days. Team discovery emails. Annual discount push.

### C: Platform Rejection (Cursor/Claude delist us)
MCP is an open standard — no single platform can kill distribution. Redirect to remaining channels. Double content cadence. Emphasize direct install via CLI.

### D: Enterprise Slow Close
Enterprise Pilot $499/mo (credit card, no procurement). Compliance hook (EU AI Act). Bottom-up CTO email triggered by 3+ same-domain signups.

### E: Compute Costs Exceed Budget
Queue-based throttling. Cap OSS repo size. Off-peak batching.

### F: Community Backlash
If Architectural Spotlights feel like "repo roasts" — immediately pivot framing to pure education. If pricing backlash — Genesis Cohort absorbs early anger. If MCP degradation feels like sabotage — increase transparency (see [Section 6](#6-the-paywall-architecture--diagnosis-free-cure-paid)).

---

## 16. Protective Measures

### Genesis Cohort (First 500 Users)

The first 500 users who connect a repo and complete an index during T1 become the Genesis Cohort:

| Benefit | Duration | Purpose |
|---|---|---|
| Pro tier free | 3 months post-T2 launch | Reward early testers, create fierce advocates |
| "Genesis Member" badge | Permanent (profile + dashboard) | Status signal, community identity |
| Direct founder Slack/Discord channel | Permanent | Feedback loop, early feature access |
| Lifetime pricing lock ($15/mo instead of $20) | Permanent | Prevents churn when pricing rises |

Cost: ~$7,500/mo short-term MRR (500 users x $15 gap x 3 months = $22,500 total). Gain: 500 advocates who defend us on HN/Reddit when the paywall drops. Precedent: Superhuman's waitlist grew to 450K+ creating a cult following. ([Superhuman GTM strategy](https://henrythepmm.substack.com/p/superhumans-2b-go-to-market-strategy))

### Local-Only CLI Mode (Private Repo Blocker)

Revenue requires developers pointing unerr at private company codebases. In 2026, shadow IT is the #1 security trigger — 59% increase in shadow IT usage, 54% of IT teams reporting higher breach exposure. ([Shadow IT 2026](https://it-online.co.za/2026/03/02/shadow-it-is-a-symptom-of-friction-not-rebellion/))

The fix: Local-Only CLI for Pro tier:

```bash
npx @autorail/unerr index --local
```

- Graph built and stored on developer's machine (SQLite or CozoDB)
- MCP reads from local graph — zero data leaves the laptop
- No GitHub App installation required
- Bypasses corporate GitHub App blocks entirely

When 3+ developers on the same team use it locally, the team formalizes with the cloud tier. Precedent: JetBrains AI Enterprise, Sourcegraph Cody self-hosted, GitLab Duo Self-Hosted. ([Evil Martians: 6 things devtools need for trust](https://evilmartians.com/chronicles/six-things-developer-tools-must-have-to-earn-trust-and-adoption))

### Multi-Agent Source of Truth (vs. Cursor Building Native)

**The threat:** Cursor acquired Graphite and is building "semantic indexes and smarter context-aware code review." ([Cursor roadmap](https://medium.com/@fahey_james/cursors-next-leap-inside-the-9-9-b-ai-code-editor-redefining-how-software-gets-built-290fec7ac726), [Graphite integration](https://graphite.com/blog/graphite-joins-cursor))

**The positioning:** unerr is NOT "a plugin for Cursor." It's the Multi-Agent Source of Truth — the only intelligence layer that synchronizes architectural context across ALL agent surfaces via MCP. When a developer switches from Cursor to Claude Code to Copilot, their architectural understanding doesn't reset. This is structurally impossible for Cursor to replicate — they can't be the intelligence layer for competing IDEs. Multi-agent context fragmentation is documented as a critical failure mode. ([Multi-agent orchestration 2026](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier))

**Messaging:** "Works with Cursor, Claude Code, Copilot, Windsurf, and any MCP-compatible agent." / "Your agents don't talk to each other. unerr gives them a shared brain."

### Transparent MCP Degradation

Not silent sabotage. See [Section 6](#6-the-paywall-architecture--diagnosis-free-cure-paid) for full implementation.

### Architectural Spotlights, Not "Repo Roasts"

Positive framing. Celebrate good patterns while noting drift. See [Engine 3 in Section 7](#7-the-six-growth-engines) for guidelines.

### Developer-Founder Quality Gate as Competitive Moat

Every feature ships only when the developer-founder is personally satisfied with its reliability — happy paths AND unhappy paths tested before release. This is a structural advantage, not a bottleneck:

1. **No "embarrassing MVP" phase.** We skip the 4-6 weeks Base44 spent iterating with friends/family to find product bugs. The product has been through 19 architecture phases. T1 discovers edge cases in untested paths and gathers feedback without buy-in pressure — it doesn't fix a fundamentally broken product.

2. **T1 is "confident launch," not "nervous beta."** The external messaging is competence: "Everything works. We're free because we want your feedback on what to build NEXT, not what to fix." This creates higher initial commitment from users — they trust it enough to rely on it from Day 1.

3. **Quality IS the moat.** Every competitor (GitNexus, Understand-Anything, code-review-graph) ships fast-and-broken. unerr ships validated-and-verified. The anti-hallucination guarantee from Phase 18 ("every claim traceable to compiler-grade signal") is not just technically better — it's trustworthy in a market drowning in AI hallucinations. Developers have been burned by "almost right" AI output (66% cite it as their #1 frustration). A tool that's RIGHT, the FIRST time, on THEIR codebase, converts at dramatically higher rates.

4. **"unerr on unerr" dogfooding IS the pre-launch proof.** Publishing our own Atlas page before Day 0 — with verified accuracy on our own 50+ MCP tools, 27 workflows, 12 anomaly detectors — is the strongest possible trust signal. We're not asking developers to trust marketing copy. We're showing them the tool working on a complex, real codebase they can inspect.

---

## 17. Operational Guardrails

**The 60/40 Rule:** 60% product + bugs + users. 40% growth activities. Never cut product time.

**Weekly Kill-or-Keep:** Kill: < 50 visitors, < 5 signups, < 2% engagement. Keep: any paying customer, any testimonial, any > 500 impressions.

**Delay Until Signal:** Launch Week only if > 2K seats by Week 8. Enterprise outreach only if organic same-domain signups. Referral program only if NPS > 40. Annual plans only if churn < 10%.

**Churn Guardrails:**

| Risk | Guardrail |
|---|---|
| "Trial ended, forgot" | Degradation email Day 8 with specific, personalized violations |
| "Paid but not using" | Weekly digest: "unerr caught X violations, saved Y hours" |
| "Might cancel" | MCP dependency — removing unerr makes every AI agent dumber |
| "Waiting for features" | Ship weekly. Monday = new feature. Discord previews. |
| "Price sensitivity" | Annual plan $172/year ($16/mo). Tranche 3. |
| "Team doesn't see value" | `.unerr/rules.yaml` in git = infrastructure. Removing = removing guardrails. |

---

# Part V: Appendices

## 18. Growth Stack (Tooling)

| Tool | Purpose | When |
|---|---|---|
| **PostHog** | Activation funnels, feature usage, conversion by cohort | Day -7 |
| **Resend + react-email** | Trial lifecycle emails (Day 1/3/5/6/7/8) | Day -3 |
| **Stripe** | Billing, checkout, portal, webhooks | Day -1 |
| **Clay** | Enterprise lead enrichment (domain to company to CTO) | Day 31 |
| **Instantly** | Cold email (Ghost Report as lead magnet) | Day 31 |
| **Typefully** | Schedule X threads, Architectural Spotlight queue | Day 0 |
| **GitHub Actions** | Auto-audit trending repos daily | Day 0 |
| **Discord** | Community, office hours, feedback | Day -7 |

---

## 19. Cold Email Framework

Enterprise outreach begins Day 31+:

```
Subject: Your {company} repo scored {grade}. Here's what we found.

Hi {name},

We ran unerr's architectural health audit on {company}/{repo} (public).

- Health grade: {grade}
- {count} functions with blast radius > 20 files
- {count} convention violations
- {percent}% of recent commits AI-assisted

Full report (ungated): {link}

For private repos, unerr gives your AI agents architectural context
via MCP — Cursor/Claude/Copilot understand your codebase before
writing code.

Worth a 15-min look?

-- {founder}
```

---

## 20. Product Readiness Audit

### Production-Ready (27 Features)

| Feature | Status |
|---|---|
| Causal Substrate (5 signals) | BUILT — SCIP/AST, PageRank, LLM justification, git co-change, community detection |
| MCP Server (50+ tools) | BUILT — Streamable HTTP, OAuth 2.1 + API key |
| CLI (`@autorail/unerr`) | BUILT — 17 commands, device flow auth, ready to publish |
| Indexing Pipeline (14+ phases) | BUILT — Resumable, SCIP + tree-sitter, Temporal, streaming |
| PR Review (13 check types) | BUILT — Pattern, blast radius, trust boundary, hotspot, complexity |
| Blast Radius | BUILT — Fan-in/fan-out, call graph, PR annotations, business context |
| Rewind | BUILT — Shadow rewind, atomic revert, timeline branching |
| Health Grades (12 detectors) | BUILT — Ghost migrations, bounded context bleed, god class, + 9 more |
| Rules Engine | BUILT — Auto-detection, Semgrep/ast-grep, JIT injection, decay scoring |
| Dashboard (50+ pages) | BUILT — Repos, blueprint, entities, patterns, rules, reviews, ledger |
| 12 Production Adapters | BUILT — ArangoDB, Prisma, Temporal, Redis, Bedrock, GitHub, Modal, + 5 more |
| 27 Temporal Workflows | BUILT — Index, justify, embed, review, rewind, health, drift, + 20 more |

### Must Build (Pre-Launch Sprint — 7 days)

| Feature | Blocker |
|---|---|
| npm publish | **P0 — 1 day** |
| Streaming onboarding UI | **P0 — 2-3 days** |
| Health Command Center UI | **P0 — 3-4 days** |
| Stripe checkout flow | **P0 — 3-5 days** |
| Trial/plan enforcement | **P0 — 2-3 days** |
| Pricing page | **P0 — 1-2 days** |
| Public health audit | **P1 — 2-3 days** |
| Health badge SVG | **P1 — 1-2 days** |
| Email sequences | **P1 — 2-3 days** |
| PR footer attribution | **P1 — 1 day** |
| MCP degradation on trial expiry | **P1 — 1 day** |

---

## 21. Sources & Evidence

### $1M ARR Speed Runs
- [Lovable: $100M ARR in 8 Months](https://medium.com/@takafumi.endo/lovable-case-study-how-an-ai-coding-tool-reached-17m-arr-in-90-days-f4816e7b3f2b)
- [Cursor Hit $1B ARR (SaaStr)](https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/)
- [Bolt.new: Near-Death to $40M ARR](https://www.lennysnewsletter.com/p/inside-bolt-eric-simons)
- [Replit $10M to $100M ARR in 5.5 Months](https://www.saastr.com/100mreplit/)

### March 2026 Market Data
- [51% GitHub code AI-assisted (DeveloperWeek 2026)](https://stackoverflow.blog/2026/03/05/developerweek-2026/)
- [LLM context files degrade performance (InfoQ)](https://www.infoq.com/news/2026/03/agents-context-file-value-review/)
- [Knowledge graphs as runtime layer](https://fullstackaiengineer.substack.com/p/009-knowledge-graphs-are-becoming)
- [Cursor acquires Graphite (TechCrunch)](https://techcrunch.com/2025/12/19/cursor-continues-acquisition-spree-with-graphite-deal/)
- [CodeRabbit $60M Series B](https://siliconangle.com/2025/09/23/greptile-bags-25m-funding-take-coderabbit-graphite-ai-code-validation/)
- [Greptile Series A (Sacra)](https://sacra.com/c/greptile/)
- [AI Brain Fry (HBR)](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)
- [AI coding degrades (IEEE Spectrum)](https://spectrum.ieee.org/ai-coding-degrades)
- [MCP roadmap 2026 (The New Stack)](https://thenewstack.io/model-context-protocol-roadmap-2026/)
- [AI code vulnerabilities + tech debt (Pixelmojo)](https://www.pixelmojo.io/blogs/vibe-coding-technical-debt-crisis-2026-2027)
- [Cursor code reversion bug (vibecoding.app)](https://vibecoding.app/blog/cursor-problems-2026)
- [Context is AI coding's bottleneck (The New Stack)](https://thenewstack.io/context-is-ai-codings-real-bottleneck-in-2026/)
- [Shadow IT 2026](https://it-online.co.za/2026/03/02/shadow-it-is-a-symptom-of-friction-not-rebellion/)

### Conversion & Pricing Data
- [Free Trial Benchmarks (1Capture)](https://www.1capture.io/blog/free-trial-conversion-benchmarks-2025)
- [Cursor 36% Conversion (Jason Lemkin)](https://x.com/jasonlk/status/1990840106102702272)
- [AI-native churn crisis (Growth Unhinged)](https://www.growthunhinged.com/p/the-ai-churn-wave)
- [Cursor pricing backlash (GetMonetizely)](https://www.getmonetizely.com/blogs/cursor-ais-billion-dollar-saas-pricing-fiasco)
- [Reverse trial model (Thoughtlytics)](https://www.thoughtlytics.com/blog/reverse-trial-model-saas)
- [Superhuman GTM strategy](https://henrythepmm.substack.com/p/superhumans-2b-go-to-market-strategy)
- [Superhuman pricing strategy](https://newsletter.pricingsaas.com/p/inside-superhumans-pricing-evolution)
- [NxCode AI tool pricing comparison 2026](https://www.nxcode.io/resources/news/ai-coding-tools-pricing-comparison-2026)
- [Greptile pricing comparison](https://dev.to/rahulxsingh/coderabbit-vs-greptile-which-ai-reviewer-catches-more-bugs-4n9k)
- [Cursor Teams pricing](https://www.vantage.sh/blog/cursor-pricing-explained)
- [Enterprise pricing benchmarks (Sedai)](https://sedai.io/blog/datadog-cost-pricing-guide)
- [GitHub pricing backlash](https://samexpert.com/github-actions-pricing-backlash-2026/)
- [SaaS growth odds (ChartMogul)](https://chartmogul.com/reports/saas-growth-the-odds-of-making-it/)
- [AI startups hitting $10M faster (TechCrunch)](https://techcrunch.com/2026/02/24/more-startups-are-hitting-10m-arr-in-3-months-than-ever-before/)
- [Best-in-class SaaS benchmarks (Lighter Capital)](https://www.lightercapital.com/blog/2025-b2b-saas-startup-benchmarks)

### Launch Playbooks
- [Plausible HN Playbook](https://startupspells.com/p/plausible-analytics-hacker-news-playbook)
- [Supabase Growth (Craft Ventures)](https://www.craftventures.com/articles/inside-supabase-breakout-growth)
- [Product Hunt launch (Founderpath)](https://founderpath.com/blog/launch-on-product-hunt)

### Competitive Intelligence
- [GitNexus knowledge graph](https://topaiproduct.com/2026/02/22/gitnexus-turns-your-codebase-into-a-knowledge-graph-and-your-ai-agent-will-thank-you/)
- [GitNexus GitHub](https://github.com/abhigyanpatwari/GitNexus)
- [Understand-Anything](https://topaiproduct.com/2026/03/22/understand-anything-scores-2400-github-stars-by-mapping-codebases-with-five-ai-agents/)
- [code-review-graph](https://github.com/tirth8205/code-review-graph)
- [Axon](https://github.com/harshkedia177/axon)
- [49x token reduction via graph](https://tirthkanani18.medium.com/i-built-a-knowledge-graph-that-cuts-claude-codes-token-usage-by-49x-9260d3cd1069)
- [MCP security concerns](https://www.pivotpointsecurity.com/what-is-the-model-context-protocol-mcp-in-ai-and-why-does-it-scare-cybersecurity-pros/)
- [Bito AI](https://bito.ai/)
- [Lovable growth strategy (AI Funding Tracker)](https://aifundingtracker.com/lovable-growth-strategy/)
- [Bolt.new (Contrary Research)](https://research.contrary.com/company/bolt)
- [CodeRabbit Series B (TechCrunch)](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/)
- [Snyk OSS to $343M ARR (Reo.dev)](https://www.reo.dev/blog/from-open-source-to-343m-arr-how-snyk-made-developers-its-secret-weapon)
- [Plausible open source SaaS](https://plausible.io/blog/open-source-saas)

### Build in Public Precedents
- [Base44: Solo founder, $80M Wix acquisition in 6 months (TechCrunch)](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/)
- [Base44 founder interview (Lenny's Newsletter)](https://www.lennysnewsletter.com/p/the-base44-bootstrapped-startup-success-story-maor-shlomo)
- [Pieter Levels: $3M/yr solo, zero employees (Buildloop)](https://buildloop.ai/how-pieter-levels-runs-multiple-1m-ai-products-with-automation-zero-team/)
- [Tailwind CSS: Accidental marketing via live-streaming (Adam Wathan)](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/)
- [Plausible: Open MRR dashboard drove HN virality](https://plausible.io/blog/growing-saas-mrr)
- [Build in Public as 10-year distribution strategy (SoftwareSeni)](https://www.softwareseni.com/building-in-public-the-10-year-distribution-strategy-behind-solo-founder-revenue/)
- [Reddit marketing $30K MRR with $0 spend (Indie Hackers)](https://www.indiehackers.com/post/how-i-built-a-reddit-marketing-tool-to-30k-mrr-in-4-months-with-0-spent-on-marketing-470f39b763)
- [Twitter strategy for indie hackers 2026 (Teract)](https://www.teract.ai/resources/twitter-strategy-indie-hackers-2026)

### Distribution & Growth
- [Airbnb/Craigslist piggybacking (Andrew Chen)](https://andrewchen.com/how-to-be-a-growth-hacker-an-airbnbcraigslist-case-study/)
- [PayPal/eBay piggybacking (Platform Thinking Labs)](https://platformthinkinglabs.com/materials/how-paypal-youtube-and-stumbleupon-gained-rapid-traction-through-piggybacking/)
- [Instagram cross-posting (TNW)](https://thenextweb.com/entrepreneur/2014/05/28/9-iconic-growth-hacks-tech-companies-used-pump-user-base/)
- [Claude Code skills ecosystem (TurboDocx)](https://www.turbodocx.com/blog/best-claude-code-skills-plugins-mcp-servers)
- [Top Claude Code skills (OpenAIToolsHub)](https://www.openaitoolshub.org/en/blog/best-claude-code-skills-2026)
- [MCP ecosystem report (Zuplo)](https://zuplo.com/mcp-report)
- [Cursor Marketplace](https://cursor.com/marketplace)
- [MCP Market](https://mcpmarket.com/)
- [mcp.so](https://mcp.so/)
- [YC Bookface](https://bookface.ycombinator.com/)
- [YC Bookface guide (Horizon Labs)](https://www.horizon-labs.co/resources/bookface-yc)
- [Cursor roadmap analysis](https://medium.com/@fahey_james/cursors-next-leap-inside-the-9-9-b-ai-code-editor-redefining-how-software-gets-built-290fec7ac726)
- [Graphite joins Cursor](https://graphite.com/blog/graphite-joins-cursor)
- [Multi-agent orchestration 2026 (Codebridge)](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier)
- [DevSecOps alert fatigue (Dev.to)](https://dev.to/rahulxsingh/snyk-vs-dependabot-developer-security-platform-vs-free-dependency-updates-2026-54c6)
- [Dependabot complaints](https://blog.shivamsaraswat.com/dependabot-sucks/)
- [Evil Martians: 6 things devtools need for trust](https://evilmartians.com/chronicles/six-things-developer-tools-must-have-to-earn-trust-and-adoption)

---

> **The bottom line:** Two things make this plan work: (1) Atlas gives developers an ability they've never had — interactive codebase simulation with 5-signal verified data, and (2) distribution hijacking through Cursor Plugin + Claude Code Skills + MCP directories delivers 6x more activated users than content alone, at zero acquisition cost. The single highest-ROI week: package as Claude Code skill (1 day) + Cursor plugin (3-5 days) + MCP listings (2-3 hours). That one week of work potentially compresses the timeline by months. Plan for 90 days. Budget for 6 months. Celebrate if it's 4.
