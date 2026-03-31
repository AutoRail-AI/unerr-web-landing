# Adjacency Timing Analysis: When to Build What, and Why the Graph Makes It Possible

> **What this document is:** A research-backed timing analysis for unerr's three adjacent opportunities (Primitives, Surgical CI, Floor Control). Maps each adjacency against market readiness, competitive dynamics, graph maturity requirements, and revenue impact. Every claim is traced to specific data points from Q1 2026 research.
> **What this document is NOT:** A feature spec or architecture doc. See [ADJACENT_OPPORTUNITIES.md](ADJACENT_OPPORTUNITIES.md) for the full design of each adjacency.
> **Last updated:** 2026-03-24

---

## The Scenario Under Analysis

```
May 2026:       Core unerr launched (health grade, 36 MCP tools, prompt ledger, rewind, PR review)
Jun-Sep 2026:   PLG motion running. OSS Guardian deployed. Enterprise leads flowing bottom-up.
Oct 2026:       Adjacency execution begins. Graph has 6-9 months of maturity.
Q1-Q2 2027:     Full adjacency stack deployed. Multi-product enterprise deals.
```

**Core question:** Does the market timing for each adjacency align with when unerr's Causal Substrate will be mature enough to power it? And how does the competitive landscape shift once adjacencies are live?

---

## How the Competitive Landscape Shifts: May 2026 → October 2026

### What Each Competitor Is Likely Doing

**CodeRabbit** (currently $15M+ ARR, 20% MoM growth)
- **By October:** ~$30-40M ARR. Will have expanded PR review scope — likely adding some persistent codebase context to reviews. Their blog already says "2026 is the year of quality."
- **Architecture constraint:** Diff-based. Adding a full knowledge graph requires rebuilding their core engine (12-18 months). They can add "better context to PR comments" but cannot compute blast radius, mine conventions, or generate project-specific agent skills.
- **Assessment:** Bigger but still architecturally limited. A strong PR review tool, not a code intelligence platform.

**Greptile** (currently $29M raised, $180M valuation, Benchmark-backed)
- **By October:** Will have shipped improvements. Could have basic MCP tools and a single-signal graph (structural/AST). Benchmark's involvement means aggressive execution.
- **Architecture constraint:** Building a five-signal graph from scratch takes 12-18 months even with $29M. By October, they'd be at a "decent structural graph" stage — similar to where Sourcegraph's Cody was before discontinuation. No temporal signals (requires months of git history analysis). No convention mining at scale.
- **Assessment:** The most dangerous competitor. By October they'll look like a threat on the surface but be graph-shallow underneath. They cannot match 6 months of validated temporal signals, convention patterns, or population-level intelligence.

**Atlassian** (Agents in Jira launched February 2026)
- **By October:** Agents in Jira will be GA. Enterprise adoption of "agents alongside humans" in Jira will be mainstream. Rovo Dev suite (code planner, code writer, code reviewer, deployer) will be expanding.
- **Architecture constraint:** Workflow-level orchestration. They can assign a Jira ticket to an agent and track completion. They cannot compute blast radius, detect agent conflicts at the code level, or route based on architectural risk. Jira doesn't understand code — it understands tickets.
- **Assessment:** They will have validated the orchestration category and created enterprise demand for semantic orchestration — exactly the vacuum Floor Control fills.

**Vercel Skills.sh** (launched February 2026)
- **By October:** Will be the dominant skills directory. Thousands of community skills. Enterprise skill management features likely shipping.
- **Architecture constraint:** Skills.sh is a directory and runtime, not a generator. It distributes static SKILL.md files. It cannot auto-discover canonical implementations from a codebase because it has no knowledge graph.
- **Assessment:** Complementary to unerr Primitives. Skills.sh is where skills are distributed; unerr Primitives is where project-specific skills are generated. Not competitive — potentially a distribution channel.

**Harness** (currently $5.5B valuation, $240M Series E)
- **By October:** Expanding their "software delivery knowledge graph" for CI intelligence. Test Intelligence product growing.
- **Architecture constraint:** Their graph is optimized for CI/CD pipeline intelligence, not for code-level architectural understanding. They can predict which tests historically fail; they cannot compute which functions are transitively affected by a code change, or validate whether a test verifies business intent.
- **Assessment:** Validates the graph-backed CI approach at $5.5B. But their graph serves pipelines, not codebases. unerr's Surgical CI serves the gap between code changes and test selection — a different layer.

**Potpie** ($2.2M pre-seed, "knowledge graph for code")
- **By October:** Will be 6-9 months into building their graph. Still early. Working with Fortune 500 companies on pilots.
- **Assessment:** Validates the thesis ("AI agents need a knowledge graph to reason about code"). But at $2.2M pre-seed with 6-9 months of development, they'll be where unerr's graph was at launch — not where it is after 6 months of production maturity. We maintain the maturity advantage if we ship first.

### The Key Shift: From "Nobody Does This" to "unerr Did This First"

| Window | Competitive State |
|--------|------------------|
| **May 2026 (launch)** | Nobody has a mature code knowledge graph + MCP. unerr is first to market. |
| **October 2026 (adjacencies start)** | Greptile has a basic graph. Potpie has early pilots. But neither has 6 months of temporal signals, convention validation, or population-level data. **unerr's graph maturity is the moat.** |
| **Q2 2027 (full stack)** | Competitors are 12-18 months behind on graph maturity. Each month of production data widens the gap. The moat is now structural, not just temporal. |

---

## What 6-9 Months of Graph Maturity Gives You

This is the single most important factor. The Causal Substrate is not a static product — it compounds with time and data.

### Signal Maturity Progression

| Signal | At Launch (May 2026) | At 6 Months (Nov 2026) | At 12 Months (May 2027) |
|--------|---------------------|----------------------|------------------------|
| **Structural graph** | Complete for indexed repos. Entities, edges, typed relationships. | Battle-tested across hundreds of diverse codebases. Edge cases found and fixed. False positive rates measured and tuned. | Stable, reliable, low maintenance. Cross-repo patterns emerging. |
| **Business justifications** | Generated per entity via LLM. Role, purpose, error strategy, side effects. | Refined by drift detection across 5+ re-indexing runs per repo. High-confidence justifications identified (survived multiple re-indexings without change). | Justification accuracy measurable. Population-level "what does auth code typically do" intelligence emerging. |
| **Temporal coupling** | Thin. Only initial git history mining on first index. | Rich. 6 months of commit history analyzed per repo. Co-change patterns stabilized. Temporal signals reliable enough for convention mining. | Deep. 12 months of evolution data. Can predict "these files will need to change together" based on historical patterns. |
| **Convention mining** | Initial patterns detected per repo. Some false positives. | Patterns validated across re-indexings. Adherence rates stable. Convention confidence scores calibrated against real-world feedback. | Population-level conventions emerging: "across 500 TypeScript repos, this error handling pattern produces the healthiest codebases." |
| **Domain ontology** | Generated per repo from package.json, README, code. | Refined over time. Domain→architecture mappings validated by drift scores. Three-tier classification (domain/architectural/framework) stable. | Cross-repo domain intelligence: "this is a fintech project with PCI requirements" inferred from graph structure, not just manifest keywords. |

### What This Means for Each Adjacency

**For Primitives (needs: convention mining + entity profiles + temporal stability):**
- At 6 months, convention mining has been validated across multiple re-indexing runs. You know which patterns are real conventions vs. coincidental similarities.
- Temporal stability signals identify which implementations are canonical (stable for months) vs. which are in flux (being refactored).
- Entity profiles carry enough business context to distinguish "auth handler for external API" from "auth handler for internal service."
- **Readiness: HIGH. The graph can reliably identify canonical implementations.**

**For Surgical CI Layer 1 (needs: accurate dependency graph + blast radius):**
- At 6 months, the dependency graph has been validated against hundreds of real changes. Edges that were missing get added; false edges get pruned.
- Blast radius computation has been running on every health report. You know the accuracy — "when we said this change affects 47 functions, it actually affected 43-51." The error bars are known.
- **Readiness: HIGH. Structural test selection is reliable enough for production CI.**

**For Surgical CI Layer 2 (needs: mature business justifications):**
- At 6 months, justifications have been through 5+ re-indexing cycles. Justifications that changed between runs were likely wrong; those that stabilized are high-confidence.
- But intent validation ("this test asserts X but the code's purpose is Y") requires the justification to accurately capture business purpose — not just role classification. This needs 9-12 months of refinement.
- **Readiness: MEDIUM. Ship with a confidence threshold — only flag intent mismatches when justification confidence is >0.8.**

**For Floor Control (needs: all of the above + Primitives maturity):**
- Requires the dependency graph (blast radius), entity profiles (risk assessment), convention mining (canonical implementations), AND mature Primitives (verified building blocks for agent tasks).
- By Q2 2027, all components will have 12+ months of maturity.
- **Readiness at Q4 2026: LOW. At Q2 2027: HIGH.**

---

## Adjacency 1: Primitives — The Graph-Backed Agent Skills Generator

### Market State in Q4 2026

**The agent skills ecosystem will be enormous but generic by October 2026:**

| Data Point | Source | Implication |
|-----------|--------|-------------|
| SKILL.md adopted by **30+ agent platforms** (Cursor, Claude Code, Codex, Gemini CLI, Copilot, JetBrains, etc.) | Anthropic Agent Skills docs | Universal format = universal distribution channel for unerr-generated skills |
| Anthropic's `frontend-design` skill: **277,000+ installs** | Claude API docs | Single skills can achieve massive reach |
| Vercel Skills.sh: **20,000 installs in 6 hours** of launch | InfoQ, Feb 2026 | Developers are hungry for skills — distribution velocity is high |
| **700-1,300+ community skills** across directories | VoltAgent, awesome-agent-skills, agent-skills.cc | Massive supply, but all generic/static |
| "We need the system to auto-discover the canonical version from our own code" | Reddit r/ClaudeCode, 250+ upvotes, Feb 2026 | Developers explicitly asking for what Primitives provides |
| "I was wrong about Agent Skills... treating them like documentation dumps instead of context engineering problems" | Reddit r/ClaudeCode, Feb 2026 | The "static skills aren't enough" realization is happening NOW |
| **No paid marketplace exists** — Anthropic has hinted but not shipped | Multiple sources | First-mover advantage for monetized, high-quality skills |

**The gap by Q4 2026:** Skills are everywhere, but they're all context-blind. A skill saying "create a React component" doesn't know your project uses CVA for variants, tailwind-merge for className merging, puts components in folders with co-located tests and stories, and uses Lucide for icons. Enterprise teams will have discovered that 700 generic community skills don't replace one project-specific canonical implementation.

### Why Q4 2026 Is the Right Time

1. **The "generic skills plateau" will have hit.** Early adopters of community skills will be 6 months in. The limitations are now obvious: skills drift from the codebase, don't adapt to project structure, and produce inconsistent results across agents.

2. **Convention mining is validated.** unerr's graph will have analyzed thousands of patterns across hundreds of repos. Convention adherence scores are calibrated. Temporal stability identifies which implementations are canonical vs. in-flux.

3. **SKILL.md is the distribution format.** unerr doesn't need to build a distribution channel — Vercel Skills.sh, awesome-agent-skills, and the native agent skill systems are all channels. unerr generates the SKILL.md; existing directories distribute it.

4. **Enterprise demand crystallizes.** Platform engineering teams at enterprises will be asking "how do we ensure all AI agents use our canonical auth flow, not the deprecated one?" This is exactly what Primitives' canonical vs. deprecated tagging provides.

### What Primitives Looks Like in Practice

**For Track A (vibe coders + individuals):**

```
$ unerr primitives generate

Scanning codebase graph for canonical implementations...

Found 8 Primitives (highest convention adherence + temporal stability):

  1. React Component [CVA + Tailwind]     adherence: 94%  stability: 8 months
     Based on: components/ui/button.tsx + 13 similar components

  2. API Route [Next.js + Zod validation]  adherence: 91%  stability: 6 months
     Based on: app/api/repos/[repoId]/health/route.ts + 7 similar routes

  3. Temporal Activity [heartbeat + log]   adherence: 89%  stability: 5 months
     Based on: lib/temporal/activities/health-report.ts + 11 similar activities

  ...

Generated 8 SKILL.md files in .unerr/primitives/
Your AI agent will now use YOUR patterns, not generic ones.
```

The vibe coder doesn't need to understand conventions or configure anything. They run one command, and their AI agent immediately uses their project's established patterns instead of inventing new ones.

**For Track B (enterprise):**

```
Dashboard → Primitives → Canonical Implementations

┌──────────────────────────────────────────────────────┐
│ Auth Flow                                             │
│ ├── v2/sso-adapter.ts      [CANONICAL] ✓             │
│ │   Adherence: 94% · Stability: 8 months · PCI ✓    │
│ ├── v1/basic-auth.ts       [DEPRECATED] ⚠            │
│ │   Last modified: 6 months ago · 3 dependents       │
│ └── legacy/oauth1.ts       [DEPRECATED] ⚠            │
│     Last modified: 11 months ago · 0 dependents      │
│                                                       │
│ Agents see ONLY v2/sso-adapter.ts                     │
│ Policy: Block PRs that introduce v1 patterns          │
└──────────────────────────────────────────────────────┘
```

### Competitive Advantage

| Capability | Community Skills | Vercel Skills.sh | Sourcegraph | unerr Primitives |
|-----------|-----------------|-----------------|-------------|-----------------|
| Format compatible with all agents | Yes (SKILL.md) | Yes | No | Yes (generates SKILL.md) |
| Project-specific | No (generic) | No (generic) | Search only | **Yes (graph-backed)** |
| Auto-discovered from codebase | No (manual) | No (manual) | No | **Yes (convention mining)** |
| Canonical vs. deprecated | No | No | No | **Yes (temporal stability + adherence)** |
| Updates as codebase evolves | No (static) | No (static) | N/A | **Yes (re-generated per index)** |
| Compliance-aware (PCI, HIPAA) | No | No | No | **Yes (compliance surface map)** |

**No competitor can generate context-aware skills because none have the graph.**

### Revenue Impact

| Metric | Track A (individuals) | Track B (teams/enterprise) |
|--------|----------------------|---------------------------|
| **Price** | Included in Pro ($20/mo) — increases conversion rate | $150/mo team plan (core + primitives) |
| **Conversion lift** | Est. +30-50% free→paid (agent becomes dramatically better) | Est. +20-30% team adoption (canonical enforcement is the enterprise hook) |
| **Acceptance** | 70-80% (immediate visible improvement in agent output) | 50-60% (platform teams need this yesterday) |

### Risk Assessment

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Anthropic ships a "skill generator" natively in Claude Code | Medium | Their generator would be model-specific. unerr generates for ALL agents. Also, Anthropic doesn't have the codebase graph — they'd generate from code reading, not from validated convention mining. |
| Community skills get "good enough" for most users | Medium | Community skills serve the 80% case (generic patterns). Primitives serves the 20% that matters (project-specific canonical implementations). Enterprise teams always need the 20%. |
| Developers don't understand the value proposition | Low | The before/after is visceral: "AI agent generated generic auth" vs. "AI agent used my exact auth pattern with PCI logging." |

---

## Adjacency 3: Surgical CI — Structural Test Intelligence

### Market State in Q4 2026

**The CI/test intelligence market is large, growing, and structurally incomplete:**

| Data Point | Source | Implication |
|-----------|--------|-------------|
| Test intelligence market: **$1.67B (2025), projected $3.97B by 2029** (24.6% CAGR) | GlobeNewsWire research report | Large, growing market with room for differentiated entrants |
| Harness: **$5.5B valuation**, explicitly uses "software delivery knowledge graph" | Multiple sources | Graph-backed CI is valued at enterprise scale. Validates the approach. |
| CloudBees acquired Launchable for smart test selection | CloudBees press | Category consolidation — incumbents buying into test intelligence |
| **30% of AI-generated tests** are "sycophantic" (assertions that cannot fail) | CodeRabbit AI vs Human Code report, 2025 | Coverage theater is a measurable, growing problem |
| Coverage theater: **85% reported → 40% effective** coverage | Multiple developer surveys | The metric that enterprises rely on is lying |
| PRs with tests grew from **31% to 52%** (Jan-Jul 2025) | GitClear analysis | More AI-generated tests = more test volume = more CI load |
| PRs with tests are **3-10x more LOC churn** and **3-11x longer turnaround** | GitClear data | Tests are the bottleneck, not code generation |
| Cross-service testing is **completely unsolved** — no product maps API contract changes to downstream test requirements | Multiple sources | Greenfield opportunity for graph-backed solution |
| Production outages at **Amazon and Anthropic** in Q1 2026 linked to AI-generated code bypassing quality gates | Fortune, multiple reports | Enterprise pain is acute and getting board-level attention |

### Why Layer 1 (Structural Test Selection) in Q4 2026

**The enterprise pain is quantifiable and immediate:**

A typical enterprise CI pipeline:
- 1,000 tests in the full suite
- 45 minutes to run
- 70-85% of tests are irrelevant to any given PR
- With AI agents generating 5-15 PRs per developer per day, the CI queue backs up by hours

unerr Surgical CI Layer 1:
- Takes the PR diff → queries the graph for entity-level blast radius → outputs the exact test files affected
- Runs 50-150 tests instead of 1,000
- CI time: 5-10 minutes instead of 45
- **Deterministic** (graph traversal), not **statistical** (historical prediction like CloudBees/Launchable)

**The ROI pitch writes itself:** "Cut CI time by 70-85%. Every developer saves 30-60 minutes per day waiting for tests."

For a 20-person engineering team at $150K average salary:
- 20 developers × 45 minutes saved/day × 250 working days = 3,750 hours saved/year
- At $75/hour = **$281,250 per year in recovered engineering time**
- unerr Surgical CI at $500/mo = $6,000/year
- **ROI: 47x**

This is the easiest enterprise sell in the entire product.

### Why CloudBees/Launchable and Harness Are Not Enough

**CloudBees Smart Tests (Launchable):**
- Uses LLM + historical test failure data to predict which tests will fail
- Probabilistic: "based on past runs, these tests are likely to be affected"
- Cannot handle novel changes (no historical data for new code patterns)
- Accuracy degrades on architectural changes (historical data doesn't capture structural relationships)

**Harness Test Intelligence:**
- Uses their "software delivery knowledge graph" — but this graph models pipeline dependencies (which builds depend on which), not code dependencies (which functions call which)
- Claims 80% test cycle acceleration, but for pipeline-level optimization, not code-level test selection
- Cannot answer "this function change in `payments/validate.ts` affects `tests/orders/checkout.test.ts` via a 3-hop call chain through `lib/billing/processor.ts`"

**unerr Surgical CI:**
- Uses the Causal Substrate's dependency graph — actual function-to-function, file-to-file, module-to-module relationships
- Deterministic: "this change touches entity X, which is called by Y and Z, which are tested by test files A, B, and C"
- Works on novel changes (graph traversal, not historical prediction)
- Accuracy improves with graph maturity (more edges = more precise blast radius)

| Approach | Novel Changes | Structural Accuracy | Cross-Service | Maturity Required |
|----------|-------------|--------------------|--------------|--------------------|
| **CloudBees (statistical)** | Poor (no history) | Low (file-level) | No | Months of test history |
| **Harness (pipeline graph)** | N/A (pipeline focus) | Medium (build-level) | Pipeline-level | Pipeline data |
| **unerr (code graph)** | Strong (graph traversal) | High (entity-level) | Yes (cross-repo edges) | **6+ months of code graph maturity** |

### Layer Progression

| Layer | Ships | What It Does | Graph Maturity Required | Revenue Impact |
|-------|-------|-------------|------------------------|----------------|
| **Layer 1: Structural Test Selection** | Q4 2026 | "Run only the 50 tests that matter for this change" based on dependency graph traversal | 6 months (dependency graph validated) | Enterprise: $500-$1,000/mo per team. High-conversion sell (quantifiable ROI). |
| **Layer 2: Test Intent Validation** | Q1-Q2 2027 | "This test asserts `toBeDefined()` but should assert `status === 'paid'`" by comparing test assertions against business justifications | 9-12 months (justifications refined, high-confidence) | Enterprise: +$200-$500/mo (add-on to Layer 1). Quality teams love this. |
| **Layer 3: Cross-Service Impact** | Q2-Q3 2027 | "This API change in payments breaks 3 tests in orders service" via cross-service graph edges | 12+ months + unerr installed across multiple services | Enterprise: +$500-$1,000/mo (multi-service pricing). Only possible when org has unerr on 3+ services. |

### Risk Assessment

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Harness adds code-level graph intelligence | Medium (they have $240M) | Their graph is pipeline-optimized, not code-optimized. Rebuilding for code would take 12-18 months. Also, unerr's temporal signals and convention mining are unique — Harness doesn't have justifications or domain ontology. |
| CloudBees ML prediction gets "good enough" | Low-Medium | Statistical prediction can never match structural certainty for novel changes. And they cannot detect coverage theater (Layer 2) or cross-service impact (Layer 3). |
| Enterprises don't trust graph-based selection enough for production CI | Medium | Ship with a configurable confidence threshold. "Only use graph selection when blast radius confidence > 90%; fall back to full suite otherwise." Build trust gradually with accuracy metrics. |
| False negatives (missed tests → production bug) | Medium | This is the #1 technical risk. Mitigation: conservative blast radius (include 1-hop extra beyond computed impact), configurable thresholds, "shadow mode" that runs graph selection alongside full suite and compares results for the first month. |

---

## Adjacency 2: Floor Control — Semantic Agent Orchestration

### Market State in Q4 2026 and Why We Ship a Precursor, Not the Full Product

**The agent orchestration market is exploding but immature:**

| Data Point | Source | Implication |
|-----------|--------|-------------|
| Autonomous AI agent market: **$8.5B in 2026, projected $35B by 2030** | Deloitte, DemandSage | Massive and accelerating |
| With effective orchestration: projected **$45B by 2030** (15-30% uplift) | Deloitte | Orchestration is the force multiplier |
| **40% of agentic AI projects could be cancelled by 2027** due to chaos/risk | Gartner | Enterprises need orchestration to prevent cancellation |
| Only **28% of enterprises** have mature agent capabilities | Multiple enterprise surveys | 72% are still experimenting — too early for full orchestration sales |
| Only **12%** expect desired ROI from automation + agents within 3 years | Enterprise adoption data | The ROI problem is unsolved — orchestration is the answer |
| Atlassian Agents in Jira: launched Feb 2026, enterprise open beta | TechCrunch, BusinessWire | Workflow-level orchestration is being validated NOW |
| Stripe Minions: **1,300 PRs/week**, zero human-written code, human-reviewed | InfoQ, ByteByteGo | The gold standard for enterprise agent deployment — but requires massive internal investment |
| Devin pricing: $500/mo → **$20/mo** | Multiple sources | Agent costs collapsing = more agents per team = more coordination chaos |
| "A mid-sized org could run **4,000 agents**" | MIT Technology Review, Jan 2026 | The scale of the coordination problem |
| "Token hemorrhaging — redundant API calls and overlapping compute quietly eroding ROI" | CIO Magazine | The financial cost of uncoordinated agents |

### Why Q4 2026 Is Too Early for Full Floor Control

1. **Most enterprises are still at "assign ticket to one agent."** Atlassian's Agents in Jira is brand new (Feb 2026). By October, most enterprises will still be experimenting with single-agent deployment. They haven't hit the multi-agent coordination problem yet.

2. **Floor Control requires Primitives.** When Floor Control routes a task to an AI agent, the agent needs verified building blocks (Primitives) to execute reliably. Shipping Floor Control before Primitives are validated means agents dispatched by the orchestrator will hallucinate boilerplate — turning the orchestrator into a chaos amplifier.

3. **Trust calibration takes time.** Floor Control makes routing decisions based on blast radius: "this task is high risk, route to human." If the blast radius computation is wrong (too many false positives or false negatives), teams lose trust in the routing. This needs 12+ months of validated blast radius data.

4. **The buyer isn't ready.** Floor Control's buyer is a VP Engineering or CTO who manages 5+ developers using AI agents. By October 2026, most of these buyers are still in the "let developers use agents individually" phase. By Q2 2027, they'll be in the "how do I coordinate all these agents" phase.

### What to Ship Instead in Q4 2026: Collision Detection

**Collision Detection is the lightweight precursor to Floor Control.** It validates the coordination thesis without full orchestration complexity:

- Alert when two developers/agents touch the same module simultaneously
- Show "Agent A is modifying payments/validator.ts — Agent B is also touching payments/processor.ts which calls validator.ts"
- No routing decisions. No task dispatching. Just visibility.

**Why this is the right precursor:**
1. Validates that teams care about agent coordination (product-market fit for Floor Control)
2. Uses the same graph infrastructure (dependency graph, entity tracking)
3. Ships in 2-3 weeks (Redis entity-level activity tracking + graph traversal for overlap detection)
4. Generates the data and user feedback needed to design Floor Control's routing logic

### Full Floor Control: Q2 2027

By Q2 2027:
- Enterprises have been using agents for 12+ months. The coordination chaos Gartner predicted is real.
- Atlassian's Agents in Jira has proven the workflow but exposed the semantic gap.
- unerr Primitives are validated (6+ months in production). Agents can execute dispatched tasks reliably.
- Blast radius computation has 12+ months of accuracy data.
- The Stripe Minions model (1,300 PRs/week with human review) is the aspirational target — Floor Control enables this for every company, not just Stripe.

### Revenue Impact

| Phase | Product | Track | Price | Buyer |
|-------|---------|-------|-------|-------|
| **Q4 2026** | Collision Detection | B | Included in team plan ($150/mo) | Team leads with 3+ developers using agents |
| **Q2 2027** | Floor Control (basic) | B | $500-$1,000/mo | VP Engineering, CTO |
| **Q3 2027** | Floor Control (enterprise) | B | $2,000-$5,000/mo | Enterprise (10+ developers, multiple agents) |

Floor Control is the **highest-ACV product surface** because it elevates unerr from "developer tool" to "engineering operations platform." The buyer shifts from individual developer ($20/mo) to VP Engineering ($5,000/mo). This is the Jira-to-Atlassian-Platform evolution.

---

## The Complete Timeline

```
May 2026:       ┌─────────────────────────────────────────────┐
                │ CORE LAUNCH                                  │
                │ Health grade, 36 MCP tools, ledger, rewind,  │
                │ PR review, living docs, context export        │
                │                                              │
                │ Track A: Vibe coders activated                │
                └──────────────────────┬──────────────────────┘
                                       │
Jun-Sep 2026:   ┌─────────────────────┴──────────────────────┐
                │ PLG MOTION                                    │
                │ OSS Guardian deployed. Content flywheel.      │
                │ 1,000-5,000 free users. First enterprise     │
                │ inquiries from bottom-up adoption.            │
                │                                              │
                │ Graph maturing: conventions, temporal signals  │
                │ Population-level patterns emerging.           │
                └──────────────────────┬──────────────────────┘
                                       │
Oct 2026:       ┌─────────────────────┴──────────────────────┐
                │ ADJACENCY 1: PRIMITIVES                       │
                │ Auto-generated, graph-backed SKILL.md files.  │
                │ Canonical vs. deprecated enforcement.         │
                │                                              │
                │ Track A: "My agent uses MY patterns now"      │
                │ Track B: "Canonical implementations enforced"  │
                ├──────────────────────────────────────────────┤
                │ ADJACENCY 3, LAYER 1: SURGICAL CI             │
                │ Structural test selection via dependency graph.│
                │ "CI time cut 70-85%"                         │
                │                                              │
                │ Track B: Direct enterprise sell (47x ROI)     │
                ├──────────────────────────────────────────────┤
                │ COLLISION DETECTION (Floor Control precursor) │
                │ Alert on overlapping agent work.              │
                │                                              │
                │ Track B: Validates coordination thesis        │
                └──────────────────────┬──────────────────────┘
                                       │
Q1 2027:        ┌─────────────────────┴──────────────────────┐
                │ ADJACENCY 3, LAYER 2: TEST INTENT VALIDATION  │
                │ "This test asserts toBeDefined() but should   │
                │  assert status === 'paid'"                    │
                │                                              │
                │ Track B: Quality teams, audit compliance      │
                └──────────────────────┬──────────────────────┘
                                       │
Q2 2027:        ┌─────────────────────┴──────────────────────┐
                │ ADJACENCY 2: FLOOR CONTROL                    │
                │ Semantic task routing: human vs. AI based on  │
                │ blast radius. The supervisory layer.          │
                │                                              │
                │ Track B: Highest ACV ($2,000-$5,000/mo)       │
                ├──────────────────────────────────────────────┤
                │ ADJACENCY 3, LAYER 3: CROSS-SERVICE IMPACT    │
                │ "This API change breaks 3 downstream services"│
                │                                              │
                │ Track B: Multi-service enterprise only        │
                └──────────────────────────────────────────────┘
```

---

## Revenue Projection with Adjacencies

### Phase-by-Phase MRR Build

| Phase | Period | Track A MRR | Track B MRR | Total MRR | ARR Run Rate |
|-------|--------|------------|------------|-----------|-------------|
| **Core only** | May-Sep 2026 | $10K-$40K | $750-$2.3K | $11K-$42K | $132K-$504K |
| **+ Primitives** | Oct-Dec 2026 | $30K-$100K | $4.5K-$12K | $35K-$112K | $420K-$1.3M |
| **+ Surgical CI L1** | Oct-Dec 2026 | (included above) | +$2.5K-$7.5K | $37K-$120K | $444K-$1.4M |
| **+ Intent Validation** | Q1 2027 | $40K-$120K | +$1K-$2.5K | $48K-$135K | $576K-$1.6M |
| **+ Floor Control** | Q2 2027 | $50K-$140K | +$10K-$60K | $60K-$200K | $720K-$2.4M |
| **+ Cross-Service** | Q2-Q3 2027 | $55K-$150K | +$5K-$10K | $70K-$220K | $840K-$2.6M |

### Revenue Mix Shift

| Period | Track A % | Track B % | Implication |
|--------|----------|----------|-------------|
| May-Sep 2026 (core) | 90% | 10% | Individual PLG drives growth |
| Oct-Dec 2026 (+ primitives/CI) | 70% | 30% | Enterprise revenue starts contributing |
| Q1-Q2 2027 (+ floor control) | 50% | 50% | Revenue balance achieved. Enterprise ACV expansion. |
| H2 2027 | 35% | 65% | Enterprise becomes dominant revenue driver while Track A continues as acquisition engine |

**The flywheel:** Track A (vibe coders at $20/mo) never stops growing — it's the acquisition engine. But Track B (enterprise at $500-$5,000/mo) becomes the revenue engine. Each adjacency adds a new enterprise product surface while Primitives also boosts Track A conversion.

---

## Probability Assessment with Adjacencies

### Core Question: Does Adding Adjacencies Improve or Risk the Outcome?

**Improves because:**
1. Each adjacency adds a new revenue stream without cannibalizing existing ones
2. Primitives increases Track A conversion (agent output visibly better → more willingness to pay)
3. Surgical CI is the easiest enterprise sell in the entire product (quantifiable ROI: 47x)
4. Floor Control shifts ACV from $20/mo to $5,000/mo for the same graph infrastructure
5. Each adjacency deepens the moat — competitors need to match core + primitives + CI + orchestration

**Risks because:**
1. Solo founder bandwidth — building three adjacencies while supporting core users
2. Graph maturity assumptions — if the graph has accuracy issues at 6 months, adjacencies ship on a shaky foundation
3. Enterprise sales cycle — even bottom-up enterprise deals take 2-4 months to close
4. Primitives could cannibalize community skills goodwill if developers feel monetization pressure

### Updated Probability Table

| Outcome | Core Only | With Adjacencies | Key Driver |
|---------|----------|------------------|-----------|
| **$1M ARR within 12 months** | 45-65% | **55-70%** | Primitives accelerates Track A conversion. Surgical CI opens enterprise budget. |
| **$2M ARR within 18 months** | 20-35% | **35-50%** | Floor Control ACV expansion + multi-product enterprise deals |
| **$5M ARR within 24 months** | 10-20% | **25-40%** | Full stack enterprise deals at $2K-$5K/mo × 100+ accounts. Requires hiring. |
| **Defensible moat at 18 months** | Medium | **Strong** | Graph data + convention data + temporal signals + 4 product surfaces all requiring graph maturity. Replication cost for competitors: 24-36 months. |
| **Competitive displacement by Greptile** | 25-35% risk | **10-15% risk** | Greptile would need to match core + 3 adjacencies, not just core. Each adjacency adds 6-12 months to their replication timeline. |
| **Enterprise pipeline within 6 months** | 30-40% | **50-65%** | Surgical CI is a direct enterprise sell. Health grade + Primitives + CI = compelling multi-product demo. |

### The Single Biggest Risk

**Building adjacencies too early, before core PLG is validated.**

If the health grade doesn't go viral (Tranche 1 fails), building Primitives won't save the business — it'll burn time on a product nobody discovers. The adjacency timeline MUST be contingent on core traction:

| Core Signal by September 2026 | Adjacency Decision |
|-------------------------------|-------------------|
| **1,000+ active free users, 50+ paying** | GREEN — proceed with Primitives + Surgical CI in October |
| **500-1,000 active free users, 20-50 paying** | YELLOW — proceed with Primitives only (increases conversion), delay Surgical CI |
| **<500 active free users, <20 paying** | RED — do NOT build adjacencies. Pivot core positioning, iterate on health grade virality, fix activation funnel. Adjacencies without users are engineering in a vacuum. |

---

## Are We at the Right Time for These Adjacencies?

### Evidence-Based Verdict

| Adjacency | Market Ready? | Graph Ready (at 6-9 months)? | Competition Threat if We Wait? | Verdict |
|-----------|-------------|-----------------------------|---------------------------------|---------|
| **Primitives** | YES — skills ecosystem standardized but hit "generic plateau" | YES — convention mining + temporal stability validated | LOW — no competitor has the graph to generate project-specific skills | **Ship Q4 2026. Perfect timing.** |
| **Surgical CI L1** | YES — CI bottleneck acute, $1.67B market, Harness validates graph approach | YES — dependency graph validated across hundreds of repos | MEDIUM — CloudBees/Harness expanding, but statistical not structural | **Ship Q4 2026. Strong timing. First-mover advantage.** |
| **Surgical CI L2** | GROWING — coverage theater recognized but not yet a buying trigger | PARTIAL — justifications need 9-12 months for intent-level accuracy | LOW — nobody else can validate test intent (requires business justifications) | **Ship Q1-Q2 2027. Timing good, need more graph maturity.** |
| **Collision Detection** | YES — teams hitting coordination issues with 3+ agents | YES — entity-level tracking straightforward with existing graph | LOW — Atlassian's Jira Agents creates awareness but no code-level solution | **Ship Q4 2026 as Floor Control precursor.** |
| **Floor Control** | EARLY — 72% of enterprises still experimenting with basic agents | NEEDS 12+ MONTHS — requires Primitives + validated blast radius + proven routing | LOW — nobody has semantic orchestration. Atlassian is workflow-level. | **Ship Q2 2027. Market will be ready by then.** |
| **Cross-Service CI** | GROWING — microservice testing unsolved but requires multi-service adoption | NEEDS 12+ MONTHS — requires unerr on 3+ services in same org | VERY LOW — completely unsolved, no competitor approaching | **Ship Q2-Q3 2027. Greenfield.** |

### The Bottom Line

**Every adjacency is timed to arrive at the moment the market needs it and the graph can deliver it.**

This is not coincidence — it's structural. The Causal Substrate matures on the same timeline that enterprise agent adoption creates the problems these adjacencies solve:

- **Month 6 (graph conventions validated) = Month 6 (generic skills plateau hits)** → Primitives
- **Month 6 (blast radius proven) = Month 6 (CI bottleneck severe)** → Surgical CI
- **Month 12 (full maturity) = Month 12 (agent coordination chaos peaks)** → Floor Control

The graph maturity IS the moat. The market timing IS the opportunity. And you're the only one building both right now.

Ship core in May. Validate PLG over summer. Deploy adjacencies in October. By the time any competitor could match the full stack, you'll have 18+ months of compounding graph intelligence and four product surfaces they'd need to replicate simultaneously.

That's not a feature advantage. That's a structural advantage. And structural advantages are the ones that last.
