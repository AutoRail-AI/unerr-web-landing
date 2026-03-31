# Unerr Feature Guide

## Audience Segments

| Segment | Profile |
|---|---|
| **Solo Dev** | Individual developer, personal projects, learning |
| **Vibe Coder** | AI-first developer, heavy Cursor/Claude Code user, ships fast |
| **Indie Hacker** | Solo or duo shipping a SaaS, speed over process |
| **Small Startup** | 2-10 engineers, moving fast, light process |
| **Growth Startup** | 10-50 engineers, scaling codebase, need guardrails |
| **Mid Org** | 50-200 engineers, multiple teams, governance matters |
| **Large Org** | 200+ engineers, compliance, audit trails, multi-repo |

Fit ratings: **Best** = high-value daily use, **Good** = solid value, **Okay** = usable but not primary audience, **--** = minimal value.

---

## Feature Tranches — Delivery Phases

Features grouped by **when and how** a user encounters them. Each tranche represents a natural adoption curve from first connect to team-wide rollout.

### Tranche 1: Public Beta — Connect → Index → Understand (First 5 Minutes)

> **Phase:** FREE PUBLIC BETA — no paywall, no billing. Signup → connect repo → experience Atlas + Health.
> **Purpose:** Stress-test the Causal Substrate at scale. Find graph algorithm bugs, edge cases, and misses before the assembly line ships monetized features. Build the core user community.
> **Trigger:** User signs up, connects a repo via UI. Pipeline runs. Atlas + Health sections appear.
> **Value:** "I understand my codebase better than I did 5 minutes ago."
> **What's NOT in T1:** No Stripe billing, no paywall, no trial timer, no MCP degradation. Everything is free. The goal is product validation and community building, not revenue.

| # | Feature | Section | Status |
|---|---|---|---|
| 1.1 | One-Command Setup | Onboarding | Shipped |
| 1.2 | GitHub App Install | Onboarding | Shipped |
| 1.3 | Local CLI Upload | Onboarding | Shipped |
| 1.5 | IDE Auto-Config | Onboarding | Shipped |
| 9.2 | Pipeline Monitor | Dashboard | Shipped |
| 11.1 | Automatic Feature Detection | Community Discovery | Shipped |
| 11.2 | LLM Feature Naming | Community Discovery | Shipped |
| 11.3 | Role Classification | Community Discovery | Shipped |
| 10.1 | Feature Story | Atlas | Shipped |
| 10.2 | Architecture Trace | Atlas | Shipped |
| 10.3 | Execution Trace Playback | Atlas | Shipped |
| 10.4 | Blast Radius Simulation | Atlas | Shipped |
| 10.5 | Graph-Verified Diagrams | Atlas | Shipped |
| 10.6 | Auto-Regeneration | Atlas | Shipped |
| 10.7 | Atlas Ask | Atlas | Shipped |
| 5.1 | Health Report | Health | Shipped |
| 5.2 | Prioritized Issues | Health | Shipped |
| 13.1 | Triage Inbox | Health Command Center | Shipped |
| 13.2 | 12 Graph-Native Detectors | Health Command Center | Shipped |
| 13.4 | Suppression Memory | Health Command Center | Shipped |
| 5.8 | Architecture Decision Records | Health | Shipped |
| 5.9 | Domain Glossary | Health | Shipped |
| 5.11 | Context Export | Health | Shipped |
| 12.3 | Verified Context Export | Doc Verification | Shipped |
| 5.12 | Incremental Push Re-Index | Health | Shipped |
| 5.13 | Drift Alerts | Health | Shipped |

### Tranche 2: Daily Dev Workflow (Solo Developer on Laptop)

> **Trigger:** Developer uses Cursor/Claude Code/Windsurf daily with unerr MCP connected.
> **Value:** "My AI agent writes better code because unerr feeds it verified context."

| # | Feature | Section | Status |
|---|---|---|---|
| 2.1 | Semantic Code Search | MCP Tools | Shipped |
| 2.2 | Function/Class Lookup | MCP Tools | Shipped |
| 2.3 | Call Graph Traversal | MCP Tools | Shipped |
| 2.4 | Import Chain Analysis | MCP Tools | Shipped |
| 2.5 | Project Stats | MCP Tools | Shipped |
| 2.6 | Business Context | MCP Tools | Shipped |
| 2.7 | Search by Purpose | MCP Tools | Shipped |
| 2.8 | Impact Analysis | MCP Tools | Shipped |
| 2.9 | Blueprint | MCP Tools | Shipped |
| 2.10 | Convention Guide | MCP Tools | Shipped |
| 2.11 | Suggest Approach | MCP Tools | Shipped |
| 2.12 | Find Similar Code | MCP Tools | Shipped |
| 3.1 | Dirty Buffer Sync | Live Context | Shipped |
| 3.2 | Local Diff Sync | Live Context | Shipped |
| 3.3 | File Watcher | Live Context | Shipped |
| 3.4 | Local-First Mode | Live Context | Shipped |
| 4.1 | Prompt Timeline | Prompt Ledger | Shipped |
| 4.2 | Mark Working | Prompt Ledger | Shipped |
| 4.3 | Rewind | Prompt Ledger | Shipped |
| 13.3 | One-Click MCP Remediation | Health Command Center | Shipped |
| 14.3 | Command Palette (⌘K) | Workspace | Shipped |
| 14.8 | Keyboard-First Navigation | Workspace | Shipped |
| 15.1 | Resizable Split Panel | Code Explorer | Shipped |
| 15.2 | Shiki Syntax Highlighting | Code Explorer | Shipped |
| 15.3 | Entity Annotations | Code Explorer | Shipped |
| 15.4 | Card View / Code View Toggle | Code Explorer | Shipped |
| 3.5 | Local MCP Proxy | Live Context | Shipped |
| 3.6 | Multi-Branch Intelligence | Live Context | Shipped |
| 4.7 | Code Durability Score | Prompt Ledger | Shipped |
| 4.8 | AI Contribution Ratio | Prompt Ledger | Shipped |
| 4.9 | Ledger Circuit Breaker | Prompt Ledger | Shipped |
| 1.7 | Smart Serve Onboarding | Onboarding | Shipped |
| 1.8 | Device Authorization Flow | Onboarding | Shipped |

### Tranche 3: GitHub Integration (Code Review & Collaboration)

> **Trigger:** Team pushes PRs. Unerr reviews them automatically.
> **Value:** "PRs get architectural review before merge — not just lint."

| # | Feature | Section | Status |
|---|---|---|---|
| 7.1 | Automated PR Review | PR Review | Shipped |
| 7.2 | Review Dashboard | PR Review | Shipped |
| 7.3 | Inline Comments | PR Review | Shipped |
| 7.4 | Review Config | PR Review | Shipped |
| 7.5 | "Debate the Bot" | PR Review | Shipped |
| 5.3 | Dead Code Detection | Health | Shipped |
| 5.4 | Architectural Drift | Health | Shipped |
| 5.5 | Circular Dependency Detection | Health | Shipped |
| 5.6 | High Fan-In/Fan-Out | Health | Shipped |
| 6.1 | Auto-Detected Patterns | Rules | Shipped |
| 6.5 | Pattern-to-Rule Promotion | Rules | Shipped |
| 6.6 | Rule Check | Rules | Shipped |
| 6.7 | Anti-Pattern Detection | Rules | Shipped |
| 4.5 | AI Commit Summaries | Prompt Ledger | Shipped |
| 4.6 | Merge History | Prompt Ledger | Shipped |
| 10.8 | Public Atlas | Atlas | Shipped |
| 14.7 | Share Insight (📸) | Workspace | Shipped |
| 12.1 | Doc Staleness Detection | Doc Verification | Shipped |

### Tranche 4: Team & Scale (Multi-Developer, Multi-Repo)

> **Trigger:** 3+ developers on the same codebase. Multiple repos in the org.
> **Value:** "Architectural governance without slowing anyone down."

| # | Feature | Section | Status |
|---|---|---|---|
| 6.2 | Custom Rules | Rules | Shipped |
| 6.3 | Org-Wide Rules | Rules | Shipped |
| 6.4 | Rule Drafting | Rules | Shipped |
| 8.1 | Team Snippets | Snippets | Shipped |
| 8.3 | Auto-Extracted Snippets | Snippets | Shipped |
| 4.4 | Timeline Branches | Prompt Ledger | Shipped |
| 12.2 | Rule File Harvesting | Doc Verification | Planned |
| 13.5 | Health Streak | Health Command Center | Planned |
| 5.7 | Feature Discovery | Health | Shipped |
| 9.1 | Blueprint Views | Dashboard | Shipped |
| 9.3 | Activity Feed | Dashboard | Shipped |
| 9.4 | Global Code Search | Dashboard | Shipped |
| 14.1 | Contextual NavRail | Workspace | Shipped |
| 14.2 | Edge-to-Edge Canvas | Workspace | Shipped |
| 14.4 | Intelligence Pulse | Workspace | Shipped |
| 14.5 | FocusBar | Workspace | Shipped |
| 14.6 | Zen Mode | Workspace | Shipped |

### Tranche 5: Enterprise & Future (Compliance, IDE Plugins, Scale)

> **Trigger:** 50+ engineers, compliance requirements, multi-repo contracts.
> **Value:** "Enterprise-grade code intelligence without enterprise-grade overhead."

| # | Feature | Section | Status |
|---|---|---|---|
| 1.4 | Ephemeral Sandbox | Onboarding | Partial |
| 8.2 | Community Snippets | Snippets | Shipped |
| 8.4 | Semantic Snippet Search | Snippets | Shipped |
| 16.1 | VS Code Extension | Planned | Planned |
| 16.2 | JetBrains Plugin | Planned | Planned |
| 16.3 | Collision Detection | Planned | Planned |
| 16.5 | Multi-Repo Contracts | Planned | Planned |
| 16.6 | PII Detection | Planned | Planned |
| 16.7 | Trust Boundary Analysis | Planned | Planned |
| 16.8 | Cognitive Debt Tracking | Planned | Planned |
| 17.1 | One-Click Health Audit | OSS Guardian | Planned |
| 17.2 | Health Badge | OSS Guardian | Planned |
| 17.3 | Public Health Dashboard | OSS Guardian | Planned |
| 17.4 | Contributor Seats | OSS Guardian | Planned |
| 5.14 | Resilience Score | Health | Planned |
| 5.15 | Contract Breach Detection | Health | Planned |
| 5.16 | Idempotency Risk Detection | Health | Planned |

### Tranche Summary

| Tranche | Features | Shipped | Planned | User Journey |
|---|---|---|---|---|
| **T1: Public Beta — Connect → Understand** | 26 | 26 | 0 | FREE public beta: repo indexed, Atlas generated, health assessed, drift alerts. Stress-test the graph. |
| **T2: Daily Dev Workflow** | 33 | 33 | 0 | Solo dev: MCP tools, prompt ledger, code explorer, local proxy, circuit breaker |
| **T3: GitHub Integration** | 18 | 18 | 0 | Team: PR reviews, pattern enforcement, drift detection, sharing |
| **T4: Team & Scale** | 17 | 15 | 2 | Multi-dev: org rules, team governance, workspace features |
| **T5: Enterprise & Future** | 17 | 3 | 14 | Compliance, IDE plugins, multi-repo, PII, OSS badges, resilience scoring |

---

> Complete feature inventory with dual descriptions (plain language + technical) and audience fit matrix.

---

## Part 1: Feature Descriptions

Each feature has two descriptions:
- **Simple** — for anyone: founders, PMs, non-technical stakeholders
- **Technical** — for developers: includes jargon, protocols, and implementation details

### 1. Onboarding & Setup

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 1.1 | **One-Command Setup** | Run `unerr` once in your project folder. It logs you in, detects your IDE, connects your repo, triggers indexing, and configures your AI agent — zero manual steps. | Single CLI entry point orchestrates device OAuth flow, IDE detection (Cursor/VS Code/Windsurf/Claude Code), git remote introspection, GitHub App installation or local tar upload, Temporal workflow dispatch for indexing, and MCP config file injection into IDE settings. | Shipped |
| 1.2 | **GitHub App Install** | Authorize the Unerr GitHub App to access your repositories. Select which repos to connect — Unerr only reads code, never writes to your repo. | OAuth-based GitHub App installation flow. Stores `installation_id` per org, fetches installation tokens on demand via `@octokit/auth-app`. Read-only permissions (contents, metadata). Webhook events (push, PR) delivered to `/api/webhooks/github`. | Shipped |
| 1.3 | **Local CLI Upload** | For repos not on GitHub (local projects, GitLab, Bitbucket): `unerr init` registers the project, `unerr push` zips and uploads the code. Works with any git repo or plain folder. | `unerr init` registers repo via `POST /api/cli/init`, writes `.unerr/config.json`. `unerr push` creates a `.gitignore`-respecting zip, requests a pre-signed S3/Supabase Storage URL, uploads via PUT, then triggers the indexing Temporal workflow. | Shipped |
| 1.4 | **Ephemeral Sandbox** | Run `unerr --ephemeral` to create a throwaway repo that auto-deletes after 4 hours. Try Unerr on any project with no commitment or cleanup. | Creates a repo record with `ephemeral=true` and `ephemeral_expires_at = NOW() + 4h`. Promotion via `unerr promote` / `POST /api/repos/{repoId}/promote`. TTL cleanup cron not yet implemented — ephemeral repos persist until manually deleted. | Partial |
| 1.5 | **IDE Auto-Config** | After connecting, Unerr detects your IDE and writes the MCP config file automatically. Your AI agent immediately gains access to your codebase knowledge. | Detects IDE from project markers (`.cursor/`, `.vscode/`, `.windsurf/`). Writes `mcpServers.unerr` entry with streamable-http transport URL + API key into `mcp.json` (Cursor), `settings.json` (VS Code), or prints `claude mcp add` for Claude Code. | Shipped |
| 1.6 | **Git Hook Auto-Verify** | Installs lightweight git hooks that re-check your IDE config whenever you switch branches or pull. Prevents "my agent lost context" after branch changes. | Installs `post-checkout` and `post-merge` git hooks that run `unerr config verify --silent`. Hooks verify MCP server URL, API key presence, and transport config. `--repair` flag auto-fixes drift. | Shipped |
| 1.7 | **Smart Serve Onboarding** | Run `unerr` once. It detects your state (no credentials → device auth, fresh repo → setup wizard, graph stale → background refresh) and does the right thing automatically. | Single CLI entry point with state machine: no auth → RFC 8628 device code flow, no repo → `init` wizard, stale graph → background `refresh`, healthy → `serve` MCP proxy. | Shipped |
| 1.8 | **Device Authorization Flow** | No browser redirect required for CLI auth. Unerr generates a device code, you visit a URL on any device, and your CLI auto-authenticates. | RFC 8628 Device Authorization Grant. Polling loop with configurable interval. Works on headless servers, SSH sessions, and CI environments. | Shipped |

### 2. Code Intelligence (AI Agent Tools via MCP)

Your AI coding agent gets these tools automatically. You don't call them directly — the agent uses them behind the scenes.

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 2.1 | **Semantic Code Search** | Agent searches your entire codebase using natural language. Ask "find the payment retry logic" and it finds the right function even if "retry" isn't in the name. | Hybrid search using Reciprocal Rank Fusion (RRF) across pgvector cosine similarity (nomic-embed-text 768d HNSW index) and ArangoDB fulltext/persistent indexes. Three modes: hybrid, semantic-only, keyword-only. Dirty-buffer and workspace overlay aware. | Shipped |
| 2.2 | **Function/Class Lookup** | Agent fetches the full source code, signature, who calls it, and what it calls — by name or file and line number. No more pasting code into chat. | `get_function` / `get_class` MCP tools. Resolves entity from ArangoDB by `_key`, name, or `(file_path, start_line)`. Returns signature, body, callers/callees via `calls` edge traversal. Applies dirty-buffer overlay (Redis, 30s TTL) then workspace overlay before returning. | Shipped |
| 2.3 | **Call Graph Traversal** | Agent traces "who calls this function?" and "what does this function call?" up to N levels deep. Answers "what breaks if I change this?" | `get_callers` / `get_callees` MCP tools. AQL graph traversal on `calls` edge collection with configurable depth (1-5 hops). Filters by `org_id` tenant index. Returns entity docs with file paths and line numbers. | Shipped |
| 2.4 | **Import Chain Analysis** | Agent maps the full dependency chain of any file — what it imports, what those import, and so on. | `get_imports` MCP tool. AQL traversal on `imports` edge collection (file-to-file edges) with depth 1-5. Returns ordered import chain with file paths. | Shipped |
| 2.5 | **Project Stats** | Agent gets a snapshot: file count, function count, class count, languages, last indexed SHA and timestamp. | `get_project_stats` MCP tool. Aggregates counts from ArangoDB entity collections (`files`, `functions`, `classes`, `interfaces`, `variables`) filtered by `(org_id, repo_id)`. Joins with Prisma `repos` table for status/SHA metadata. | Shipped |
| 2.6 | **Business Context** | Agent sees *why* each piece of code exists — its business purpose, whether it's core logic, shared plumbing, or scaffolding. | `get_business_context` MCP tool. Fetches justification from ArangoDB `justifications` collection: role (logic/plumbing/scaffold/test), business_purpose, confidence score, semantic triples, compliance tags, error_strategy, side_effects, design_rationale. LLM-generated during justification pipeline. | Shipped |
| 2.7 | **Search by Purpose** | Agent finds code by what it does for the business, not by name. "Find subscription cancellation" works even if the function is called `handleWebhookEvent`. | `search_by_purpose` MCP tool. Cosine similarity search on `justification_embeddings` pgvector table (768d Qwen3-Embedding-4B). Optional role filter. Returns entities ranked by business-purpose relevance, not code similarity. | Shipped |
| 2.8 | **Impact Analysis** | Before changing a function, agent checks the blast radius — every function, class, and file that would be affected, N levels deep. | `analyze_impact` MCP tool. N-hop outbound traversal on `calls` + `imports` + `extends` + `implements` edge collections. Returns transitive closure of affected entities with business context enrichment from justifications. | Shipped |
| 2.9 | **Blueprint** | Agent gets a high-level map of your project's features, entry points, health risks, and architecture decisions. Like a senior dev's mental model in one call. | `get_blueprint` MCP tool. Aggregates from ArangoDB: `communities` (community-based feature map with classification), `health_reports` (risk summary with LLM narrative, top concerns, strengths — suppressed risks filtered out), `adrs` (architecture decisions). Returns structured JSON with role breakdown and health grade. | Shipped |
| 2.10 | **Convention Guide** | Agent receives a style guide built from your repo's actual patterns and enforced rules. New code matches your conventions automatically. | `get_conventions` MCP tool. Merges active `rules` (ArangoDB, filtered by scope/status/priority) with detected `patterns` (filtered by confidence threshold). Formats as structured markdown guide with examples and enforcement levels. | Shipped |
| 2.11 | **Suggest Approach** | Agent gets a recommended implementation strategy based on how similar things were done in your codebase and which rules apply. | `suggest_approach` MCP tool. Combines `get_relevant_rules` (sub-graph traversal for contextual rules), `semantic_search` (similar implementations), and `get_conventions` (applicable patterns) into a ranked suggestion with mandatory constraints highlighted. | Shipped |
| 2.12 | **Find Similar Code** | Agent locates code structurally or semantically similar to a reference entity. Useful for "do it the same way as X." | `find_similar` MCP tool. Computes cosine similarity between the reference entity's embedding and all entity embeddings in the repo via pgvector HNSW index. Returns top-K results with similarity scores and file locations. | Shipped |

### 3. Live Coding Context

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 3.1 | **Dirty Buffer Sync** | Your unsaved editor changes are visible to the agent within milliseconds. Even before you hit save, code search reflects your latest keystrokes. | `sync_dirty_buffer` MCP tool. Regex-extracts entity signatures from raw buffer text, stores as ephemeral overlay in Redis with 30s TTL. Entity resolution chain: dirty buffer (highest priority) > workspace overlay > committed graph. | Shipped |
| 3.2 | **Local Diff Sync** | Uncommitted changes are synced to the cloud so every agent tool sees your work-in-progress, not just the last commit. | `sync_local_diff` MCP tool. Accepts `git diff` output, strips lockfiles/build artifacts, parses hunks into a workspace overlay stored in Redis. Appends a ledger entry if `prompt` is provided. Auto-marks working if `validation_result` passes. | Shipped |
| 3.3 | **File Watcher** | Run `unerr watch` and forget it. Every file save syncs to the cloud within 2 seconds. The agent stays in sync without manual refresh. | Chokidar-based file watcher respecting `.gitignore`. Debounces changes (configurable, default 2000ms), computes `git diff`, and calls `sync_local_diff` via MCP. Runs config integrity check every 60s and auto-repairs IDE MCP config drift. | Shipped |
| 3.4 | **Local-First Mode** | Download your repo's knowledge graph, run queries locally in under 5ms. Works offline, on planes, no internet needed. | `unerr pull` downloads msgpack-serialized graph snapshot (SHA-256 verified) from Supabase Storage. `unerr serve` loads it into CozoDB (in-memory Datalog graph DB) and starts a stdio MCP server with 9 local tools + 4 cloud-proxy tools. Sub-5ms query latency. | Shipped |
| 3.5 | **Local MCP Proxy** | CLI runs a local MCP server that resolves 80% of tool calls from cached graph in <5ms. Remaining 20% route to cloud with branch context. | stdio transport to IDE + HTTP proxy to cloud. CozoDB resolves entity lookups, search, callers/callees locally. Semantic search and LLM-backed tools proxy to cloud with `x-workspace-ref` header for branch context. | Shipped |
| 3.6 | **Multi-Branch Intelligence** | Query the knowledge graph on feature branches, not just main. See architectural impact before merging. | Gitea bare repo stores all branches. Per-branch `workspace_ref` tracks indexed state. Query resolution falls back to nearest indexed commit with git-diff overlay. | Shipped |

### 4. Prompt Ledger & Rewind

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 4.1 | **Prompt Timeline** | Every AI-assisted change is recorded: what prompt was given, which model ran it, what files were touched, and whether it worked. Full audit trail viewable in web dashboard or CLI. | Ledger entries stored in ArangoDB `ledger` collection with composite indexes on `(org_id, repo_id, user_id, branch, timeline_branch, created_at)`. Each entry records: prompt, agent model, file diffs, validation result, status (pending/working/broken/committed/reverted). | Shipped |
| 4.2 | **Mark Working** | After the AI makes a change that works, bookmark it as a "known good" state. Creates a safe checkpoint for future rewinds. | `mark_working` MCP tool. Updates ledger entry status to `working` via validated state machine transition (`validateLedgerTransition`). Creates a `LedgerSnapshot` in PostgreSQL (`unerr.ledger_snapshots`) storing file contents at that point. | Shipped |
| 4.3 | **Rewind** | AI made a mess? Rewind to any working state. Shows blast radius first (safe/conflicting files), then atomically rolls back and starts a new timeline branch. | `revert_to_working_state` MCP tool. Two-phase: (1) shadow rewind computes blast radius by diffing current snapshot vs target snapshot, categorizes files as safe/conflicted/at-risk; (2) atomic rewind marks intermediate entries as `reverted`, increments `timeline_branch`, creates new ledger entry. `dry_run` mode available. | Shipped |
| 4.4 | **Timeline Branches** | When you rewind, a new branch is created in the timeline. View the full tree of attempts — useful for comparing AI approaches. | Timeline branches are integer counters per `(repo_id, branch)`. Rewind increments the counter and all subsequent entries use the new `timeline_branch` value. ArangoDB `idx_ledger_timeline` index enables efficient branch-scoped queries. CLI `unerr branches` renders as formatted table. | Shipped |
| 4.5 | **AI Commit Summaries** | Each git commit gets an auto-generated narrative of what the AI contributed. See what AI did at a glance. | Commit summaries generated by correlating ledger entries with git SHAs via `ledger_summaries` ArangoDB collection (indexed on `commit_sha`). LLM generates narrative from aggregated prompt/diff data per commit. | Shipped |
| 4.6 | **Merge History** | When branches merge, Unerr generates a summary of all AI activity on that branch. Useful in code review to understand the AI's contribution. | Triggered by GitHub `push` webhook on merge commits. Aggregates ledger entries across the merged branch's timeline, counts prompts per model, and generates a narrative summary stored in `ledger_summaries`. | Shipped |
| 4.7 | **Code Durability Score** | Track how long AI-generated code survives before being modified or deleted, measured across 30/60/90-day windows. | Per-entity survival metric from git log analysis. `ai_contribution_snapshots` ArangoDB collection. Computed during temporal analysis stage. | Shipped |
| 4.8 | **AI Contribution Ratio** | Dashboard shows percentage of codebase authored by AI vs human, with per-file and per-feature breakdown. | Tracks `repo_ai_pct` from git blame analysis + ledger correlation. Visible on Overview dashboard and exportable for compliance audit. | Shipped |
| 4.9 | **Ledger Circuit Breaker** | Automatic halt when AI enters a hallucination loop — prevents runaway changes. Configurable: 4 changes / 10 min window / 5 min cooldown. | Redis-backed circuit breaker. Counts entity mutations per workspace. Opens circuit on threshold. Read-only tools still work. Auto-reset after cooldown. | Shipped |

### 5. Health & Quality Analysis

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 5.1 | **Health Report** | An A-F health grade from 25+ risk detectors across 5 categories. Two-layer architecture: deterministic threshold detection finds issues, then a single LLM call contextualizes them — suppressing false positives, adjusting severity, and generating a narrative with actionable recommendations. Updated after every indexing run. | Detection layer: `buildHealthReport()` runs 25+ threshold/graph-based risk detectors (dead_code, complexity, architecture, quality, CFG anti-patterns). Synthesis layer: `synthesizeHealthInsights()` — single LLM call ("analysis" model) contextualizes risks with project metadata (domain, tech stack, role breakdown, community info). Per-risk: `suppressed`, `adjusted_severity`, `rationale`, `recommendation`. Report-level: `narrative`, `top_concerns`, `strengths`. Grade recomputed from effective (non-suppressed) risks. Stored in ArangoDB `health_reports` collection. | Shipped |
| 5.2 | **Prioritized Issues** | AI-ranked list of what to fix first, grouped by category. Each issue has severity, reasoning, impact, and a copy-pasteable prompt to fix it with your AI agent. Suppressed false positives are hidden. | Issues extracted from stored health report. Categories: Dead Code, Architecture, Quality, Complexity. Uses `adjusted_severity` from LLM synthesis. Each issue includes: severity (high/medium/low), reasoning chain, affected entities with file paths, and a pre-built agent prompt that references the correct MCP tools for remediation. Reads from stored report (no live rebuild). | Shipped |
| 5.3 | **Dead Code Detection** | Finds functions and classes nothing calls across 7 languages. Excludes framework-invoked code (decorators, lifecycle hooks, DI tokens). LLM synthesis can further suppress false positives for library projects. | `detectDeadCode()` — graph query for entities with zero inbound refs + not exported + not entry point. Multi-language entry point patterns (24+ patterns across Next.js, Python, Go, Rust, Java, Ruby, PHP). Framework-invoked exclusions: decorators (@Get, @Injectable), lifecycle hooks (componentDidMount, ngOnInit), event handlers, config/factory exports. Returns `Map<entityId, reason>`. | Shipped |
| 5.4 | **Architectural Drift** | Compares your codebase's business intent across indexing runs. Detects when "auth logic" starts drifting into "billing logic." | Cosine similarity comparison between justification embeddings across consecutive indexing runs. Stored in `drift_scores` ArangoDB collection. Flags entities where role or business_purpose changed significantly (similarity < threshold). Categories: stable, cosmetic, refactor, intent_drift. | Shipped |
| 5.5 | **Circular Dependency Detection** | Finds cycles in the call graph (A calls B calls C calls A). Same-file cycles filtered out (internal recursion patterns). Shows the full cycle path. | Iterative DFS cycle detection on `calls` + `imports` edges, capped at 10 cycles. Same-file cycles filtered (intentional state machines, event loops). Cross-file cycles with entities in same directory may be downgraded by LLM synthesis. | Shipped |
| 5.6 | **High Fan-In/Fan-Out** | Flags "God functions" that everything depends on or that depend on everything. Includes 2-hop blast radius analysis — a graph-unique capability no static analyzer provides. | Degree centrality on `calls` edges. Fan-in ≥ 10, fan-out ≥ 10. Blast radius: 2-hop transitive reach ≥ 20 (direct callers + their callers). Unstable interface detection: entities with both high fan-in (≥5) AND high fan-out (≥5). Instability metric: `fanOut / (fanIn + fanOut)`. | Shipped |
| 5.7 | **Feature Discovery** | Auto-discovers business features by analyzing how code clusters together in the dependency graph. Features emerge from community structure, not per-entity tagging. | Phase 17: Two-Phase Feature Discovery. Phase 1 (structural): Louvain community detection with multi-signal edges (calls×3, imports×2, extends×2, same_file×1), resolution 0.7, singleton post-processing. Phase 2 (semantic): `classifyCommunities()` promotes communities to "feature" classification based on entry points, logic entities, domain concepts, and test/scaffold ratio. Classifications: feature, infrastructure, test_suite, support. Stored in ArangoDB `communities` collection as `CommunityDoc`. | Shipped |
| 5.8 | **Architecture Decision Records** | Auto-generates ADRs by analyzing code structure. "Decision: Use repository pattern. Context: 14 files follow this. Evidence: UserRepo, OrderRepo..." | LLM-generated from pattern analysis. Input: detected patterns with high adherence rates + entity graph structure. Output: structured ADR (context, decision, consequences, evidence). Stored in ArangoDB `adrs` collection. | Shipped |
| 5.9 | **Domain Glossary** | Extracts recurring domain terms from variable names, function names, and comments. Three-tier classification: business intent, architecture, framework. | LLM + NLP extraction with three-tier term classification (L-25): domain concepts (business intent), architectural patterns (infrastructure terms), framework/infra (tech stack terms). Domain→architecture mapping for concept-to-entity resolution. Stored in `domain_ontologies` ArangoDB collection. | Shipped |
| 5.10 | **Living Documentation** | Auto-generated Feature Story (what the code does, for anyone) and Architecture Trace (how it's built, for engineers). Includes deterministic Mermaid diagrams — zero hallucination. | `generateAtlas()` produces two Markdown documents with embedded Mermaid blocks. Feature Story: business-oriented narrative from community features, entry points, README code examples. Architecture Trace: technical deep-dive with component diagrams, execution flowcharts, sequence diagrams. Mermaid builder is deterministic (graph data → diagrams, no LLM). LLM synthesizes prose only. Stored in ArangoDB `expressions` collection. Tab: `/repos/{repoId}/docs`. | Shipped |
| 5.11 | **Context Export** | Download a single file containing your entire codebase intelligence — feed it to Claude, Cursor, or Copilot to give your AI agent full context instantly. | `UNERR_CONTEXT.md` generated by `project-context-generator.ts`. Two versions: compact (~2-4KB, context-window-efficient) and full (~8-20KB, comprehensive). Includes: project description, tech stack, health grade, role breakdown, feature map, domain glossary, top risks, architecture decisions. Downloadable via `/api/repos/{repoId}/export/context`. | Shipped |
| 5.12 | **Incremental Push Re-Index** | When code is pushed, only changed files are re-indexed. Knowledge graph stays current within 30 seconds of a push. | GitHub webhook `push` event → Temporal workflow filters changed files → SCIP/Tree-sitter on diff only → incremental entity upsert + edge repair. | Shipped |
| 5.13 | **Drift Alerts** | Get notified when a high-impact entity's business intent diverges from its implementation pattern. | Compares current justification embeddings against historical baseline. Drift score computed per entity. Alerts when `drift_score > threshold` for entities with high PageRank. | Shipped |
| 5.14 | **Resilience Score** | For each external call, unerr checks if it includes retry, timeout, or circuit-breaker patterns. Missing resilience = flagged risk. | Pattern matching on call edges to external services. Checks for try/catch, retry loops, timeout config, circuit-breaker imports. | Planned |
| 5.15 | **Contract Breach Detection** | Flag when an internal change alters the shape of your public API, GraphQL schema, or exported interface. | Diff exported entity signatures between index runs. Alert when `exported: true` entities have signature changes. | Planned |
| 5.16 | **Idempotency Risk Detection** | Detect webhook handlers and triggers that mutate state without idempotency checks or distributed locks. | Pattern: `calls` edge to database write + entry point marked as webhook/trigger + no idempotency key in guard conditions. | Planned |

### 6. Rules & Pattern Enforcement

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 6.1 | **Auto-Detected Patterns** | Unerr discovers conventions your team already follows: naming, error handling, imports, tests. Shows adherence rate and evidence. | Pattern mining via AST analysis during indexing. Types: structural, naming, error_handling, import, testing. Each pattern stores: regex/ast-grep pattern, adherence rate (% of entities matching), confidence score, evidence locations (file + line). Stored in ArangoDB `patterns` collection. | Shipped |
| 6.2 | **Custom Rules** | Define architecture rules with enforcement levels: suggest, warn, or block. Rules use ast-grep for precise structural matching. | Rules stored in ArangoDB `rules` collection. Fields: `pattern` (ast-grep YAML), `semgrep_rule` (Semgrep YAML), `enforcement` (suggest/warn/block), `scope` (org/repo/path/branch/workspace), `type` (architecture/naming/security/performance/style/custom), `priority`. Indexed on `(org_id, repo_id, status, priority)`. | Shipped |
| 6.3 | **Org-Wide Rules** | Rules that apply across every repo in your org. Promote from repo-level to org-level for consistent standards. | Rules with `scope: "org"` apply to all repos under the organization. Managed via `/api/settings/rules`. Rule resolution merges org-level + repo-level rules, with repo-level overrides taking precedence on conflicts. | Shipped |
| 6.4 | **Rule Drafting** | Describe a rule in plain English and Unerr generates the ast-grep pattern and Semgrep YAML. No pattern syntax needed. | `draft_architecture_rule` MCP tool. Sends natural language description to LLM with few-shot examples of ast-grep + Semgrep patterns. Returns structured rule with pattern, test cases, and suggested enforcement level. | Shipped |
| 6.5 | **Pattern-to-Rule Promotion** | One click turns a detected convention into an enforced rule. Goes from "80% of code does this" to "100% must." | `POST /api/repos/[repoId]/rules/from-pattern` converts a `patterns` doc into a `rules` doc, preserving the ast-grep pattern and setting initial enforcement to `suggest`. Adherence rate carries over as baseline. | Shipped |
| 6.6 | **Rule Check** | Agent checks code against all active rules before suggesting it. Returns violations with line numbers and fix suggestions. | `check_rules` MCP tool. Runs Semgrep with active rule YAML configs against provided file path or inline code. Returns violations with: rule_id, line_number, message, severity, auto-fix suggestion. Filters by file scope and enforcement level. | Shipped |
| 6.7 | **Anti-Pattern Detection** | 23 built-in detectors for common code smells: N+1 queries, swallowed errors, missing cleanup, hardcoded secrets, unsafe concurrency. Works out of the box. | Pre-packaged Semgrep + ast-grep rule library covering: N+1 query loops, empty catch blocks, missing `removeEventListener`/`clearInterval`, hardcoded credentials, `console.log` in production, missing `await`, unsafe `Promise.all` without error handling, and 16 more. Applied during `check_patterns` MCP tool and PR review pipeline. | Shipped |

### 7. PR Review Integration

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 7.1 | **Automated PR Review** | Every GitHub PR gets an automatic architecture review: pattern violations, downstream impact, test gaps, complexity, dependency risks. Results posted as a GitHub check run. | Triggered by GitHub `pull_request` webhook. Temporal workflow runs 5 check types: pattern (Semgrep), impact (graph traversal on changed entities), test (coverage gap detection), complexity (cyclomatic + cognitive), dependency (new imports analysis). Results posted via GitHub Checks API + Review API. | Shipped |
| 7.2 | **Review Dashboard** | Web UI listing all reviews with pass/warn/fail counts and auto-approval status. Click any review for full comment breakdown. | `unerr.pr_reviews` table with `checks_passed/warned/failed` counters. Detail view joins `pr_review_comments` (FK to review). Filterable by status, repo. SSE updates for in-progress reviews. | Shipped |
| 7.3 | **Inline Comments** | Review findings posted as per-file, per-line comments on the GitHub PR with severity, explanation, and suggested fix. | GitHub Pull Request Review Comments API (`POST /repos/{owner}/{repo}/pulls/{pr}/comments`). Each comment maps to a `pr_review_comments` row with `file_path`, `line_number`, `check_type`, `severity`, `message`, `suggestion`, `auto_fix`. | Shipped |
| 7.4 | **Review Config** | Control which branches trigger reviews, set auto-approval thresholds, choose notification preferences. Per-repo from the dashboard. | `review_config` JSONB column on `unerr.repos`. Fields: `target_branches`, `auto_approve_threshold` (max warnings with zero blockers), `notification_channel`, `enabled`. Configurable via `PUT /api/repos/[repoId]/settings/review`. | Shipped |
| 7.5 | **"Debate the Bot"** | Disagree with a review finding? Your AI agent queries the review via MCP and discusses it with you. Contest or accept from your IDE. | `review_pr_status` MCP tool. Fetches review by PR number, returns structured findings with remediation guidance. Agent can discuss individual comments, explain reasoning, or suggest alternative fixes inline in the IDE conversation. | Shipped |

### 8. Code Snippet Library

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 8.1 | **Team Snippets** | Pin the best examples of how your team does things so every AI agent references the same gold-standard code. Stops agents from inventing patterns. | Snippets stored in ArangoDB `snippets` collection with `scope: "team"`. Fields: `code`, `language`, `category`, `tags`, `description`, `source_entity_key`. Retrievable via `get_conventions` and `suggest_approach` MCP tools. Indexed on `(org_id, repo_id)`. | Shipped |
| 8.2 | **Community Snippets** | Curated pattern library maintained by the Unerr team — common auth flows, DB patterns, API designs. Available to all users. | Global `snippets` docs with `scope: "community"` and `org_id: "global"`. Read-only for users. Seeded from curated collection. Included in `get_conventions` results when relevant to the query context. | Shipped |
| 8.3 | **Auto-Extracted Snippets** | During indexing, Unerr identifies well-structured, frequently referenced code and suggests them as snippet candidates. You approve which to pin. | Heuristic scoring during indexing: high fan-in (frequently called) + clean naming + docstring present + low cyclomatic complexity = high snippet candidacy score. Stored in `mined_patterns` with `suggested_as_snippet: true`. User promotes via UI. | Shipped |
| 8.4 | **Semantic Snippet Search** | Agent finds relevant snippets by describing what it needs rather than searching by name. Returns the closest matching snippet. | Embedding-based search on snippet `text_content` via pgvector `rule_embeddings` table (shared embedding space). Cosine similarity with HNSW index. Returns top-K snippets with similarity scores, filtered by language and category. | Shipped |

### 9. Dashboard & Visualization

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 9.1 | **Blueprint Views** | Three 2D visualization modes: Feature Cards (community-based feature grid with classification badges), Engineering Graph (directed dependency graph with dagre layout), and Execution Flow (behavioral flow diagrams). No 3D — research shows 2D is more effective for code understanding. | Feature view: community cards with role breakdown, entry points, dominant concepts. Engineering view: React Flow directed graph with dagre layout, nodes from ArangoDB entities, edges from `calls`/`imports`/`extends`. Flow view: behavioral execution paths from entry points. Risk view: expandable risk cards with LLM rationale, recommendations, and suppressed section. Tab: `/repos/{repoId}/blueprint`. | Shipped |
| 9.2 | **Pipeline Monitor** | Watch indexing in real-time: step-by-step progress bar with live log streaming. See what's happening and how long each step takes. | SSE endpoint (`/api/repos/[repoId]/events`) streams Temporal workflow status updates. Steps: clone, parse (SCIP), graph upload, embed (nomic-embed-text), justify (LLM). Pipeline logs streamed via `/api/repos/[repoId]/logs` (SSE) and archived as downloadable files. | Shipped |
| 9.3 | **Activity Feed** | Chronological stream of everything that happened: files indexed, entities discovered, edges built, embeddings generated, justifications cascaded. | `index_events` ArangoDB collection (TTL: 90 days). Each event records: `event_type`, `files_changed`, `entities_added/updated/deleted`, `edges_repaired`, `embeddings_updated`, `cascade_count`, `duration_ms`. Paginated via `/api/repos/[repoId]/activity`. | Shipped |
| 9.4 | **Global Code Search** | Search bar in the top nav across ALL connected repos. Type a function name or natural language query and jump to results from any repo. | `/api/search` endpoint. Runs hybrid search (semantic + keyword) across all repos in the org. pgvector query with `org_id` filter (no `repo_id` constraint). Results grouped by repo with entity type, file path, and relevance score. | Shipped |
| 9.5 | **Entity Browser** | Paginated, filterable list of every indexed entity with business justification, taxonomy tag, and confidence score. | Server-side paginated query joining ArangoDB entities with justifications. Filterable by entity type, taxonomy, confidence threshold. Sort by name, type, confidence, or file path. `/api/repos/[repoId]/entities?page=1&limit=50&type=function`. | Shipped |

### 10. Codebase Atlas — Deterministic Living Documentation

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 10.1 | **Feature Story** | Auto-generated plain-English narrative explaining what each feature does, with step-by-step execution flows, side effects, and error handling. Written for vibe coders. | Deterministic outline from Leiden communities + LLM section filling. Feature Story maps 1:1 to promoted feature communities. Mermaid diagrams generated programmatically from `EdgeDoc` records via `buildExecutionFlowchart()`. Zero LLM-generated diagram syntax. | Shipped |
| 10.2 | **Architecture Trace** | Technical deep-dive with component maps, blast radius tables, guard conditions, temporal profiles, and dependency matrices. Written for senior engineers. | Per-community pages with entity tables, public API signatures, cross-community edges, blast radius via ArangoDB graph traversal (`FOR v IN 1..4 OUTBOUND`), temporal profile from git co-change mining. | Shipped |
| 10.3 | **Execution Trace Playback** | Click an entry point → watch the call chain animate step-by-step with guard conditions, side effects, and loop indicators at each step. | BFS from entry point through `calls` edges with CFG enrichment (`sequence_order`, `condition`, `is_loop`). Pre-computed during pipeline Stage 7c. Stored in `interactive_data.execution_traces` on `AtlasDoc`. | Shipped |
| 10.4 | **Blast Radius Simulation** | Select any entity → see every downstream function affected, grouped by depth (1-hop, 2-hop, 3-hop, 4-hop). | ArangoDB graph traversal with depth grouping and community crossing detection. Pre-computed for top-20 entities by PageRank. On-demand for others via `/api/repos/{id}/atlas/blast/{entityId}`. | Shipped |
| 10.5 | **Graph-Verified Diagrams** | Every Mermaid diagram generated from the actual call graph — not hallucinated by an LLM. Zero rendering failures. | `mermaid-builder.ts` generates flowcharts, sequence diagrams, component maps, and state diagrams programmatically from `EdgeDoc` records. Guard conditions become diamonds, loops become annotated edges. | Shipped |
| 10.6 | **Auto-Regeneration** | Atlas regenerates on every push webhook. Content hash tracks what changed between versions. | Stage 7c in justify-repo workflow. Deterministic key `expr-{orgId}-{repoId}` overwrites previous document. Redis cache `atlas:{orgId}:{repoId}` invalidated. | Shipped |
| 10.7 | **Atlas Ask** | Type a question about your codebase → get an answer grounded in graph signals, not RAG over raw chunks. | pgvector similarity search over entity justification embeddings → top-10 entity profiles → LLM synthesis with verified context. Single-turn Q&A. | Shipped |
| 10.8 | **Public Atlas** | Share any connected repo as a read-only Atlas page at `unerr.dev/{org}/{repo}/atlas`. Zero auth required. Embeddable health badges. | Public routes serve `feature_story_md` with AtlasTOC sidebar. `is_public_atlas` flag on repo. CTA banner for unconnected repos. | Shipped |
| 10.9 | **Synchronized Split-Pane Atlas** | Read the Feature Story on the left, watch the execution flow animate on the right in real-time. Click an entity in the graph → prose scrolls to its explanation. | Prose and graph permanently linked via scroll synchronization + entity highlighting. Reading a paragraph highlights corresponding entities. Clicking a node scrolls prose. `IntersectionObserver` for scroll-spy. | Planned |
| 10.10 | **Trace Timeline Scrubber** | Execution traces play back with a timeline scrubber like a video player — not a "Next Step" button. Drag to any point in the call chain. | `framer-motion` timeline component. Playback speed controls. Step-by-step or continuous animation. Each step highlights current entity + guard condition + side effects simultaneously in graph and prose. | Planned |

### 11. Community-Based Feature Discovery

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 11.1 | **Automatic Feature Detection** | Features are discovered from code structure — not from LLM-hallucinated tags or manual labeling. No maintenance needed. | Leiden community detection on multi-signal edges (calls + imports + co-change). Promotion criteria: has entry points, contains logic, has domain identity, not mostly test/scaffold. | Shipped |
| 11.2 | **LLM Feature Naming** | Each detected feature gets a human-readable name like "Authentication Flow" instead of "community_7". | 1 LLM call per promoted community using dominant concepts + entry point names. Stored in `CommunityDoc.feature_name`. | Shipped |
| 11.3 | **Role Classification** | Every function classified as `logic` (business rules), `plumbing` (infrastructure), `scaffold` (generic helpers), or `test`. Replaces fragile taxonomy tags. | 4-way role classification during justification. Decision tree: test → scaffold → plumbing → logic. No `feature_tag` — features come from communities. | Shipped |

### 12. Document Verification & Rule Harvesting

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 12.1 | **Doc Staleness Detection** | Upload README, ADRs, or architecture docs — Unerr validates every claim against the live code graph and flags stale ones. | Claim extraction → graph signal matching → confidence scoring. "This ADR says we use Redis for sessions" → check for Redis import in auth community. | Shipped |
| 12.2 | **Rule File Harvesting** | Automatically imports IDE rules from CLAUDE.md, .cursorrules, AGENTS.md, copilot-instructions.md into a unified, deduplicated rule system. | CLI scans known file paths → parses rule format → deduplicates against existing ArangoDB rules → upserts. | Planned |
| 12.3 | **Verified Context Export** | Export a UNERR_CONTEXT.md file validated against actual code. Feed it to any AI agent with confidence. | Compact (~2-4KB) and full (~8-20KB) versions. Downloadable via API + CLI `unerr context`. | Shipped |

### 13. Health Command Center — Anomaly Triage

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 13.1 | **Triage Inbox** | Morning coffee dashboard: see 3 architectural risks instead of 847 lint warnings. Each ranked by blast-radius impact. | Split-panel Pattern B layout. Left: scrollable anomaly list sorted by `impact_score = blast_radius × severity × business_criticality`. Right: detail panel with remediation. | Shipped |
| 13.2 | **12 Graph-Native Detectors** | Anomalies detected from the knowledge graph that no single-file linter can find: ghost migrations, bounded context bleed, god classes with temporal churn. | Detectors: Ghost Migrations, Bounded Context Bleed, God Classes, Silent Error Swallowing, Circular Dependencies, Dead Code, Test Gaps, Convention Violations, Drift Alerts, Stale Docs, Security Boundaries, Complexity Hotspots. | Shipped |
| 13.3 | **One-Click MCP Remediation** | Click "Fix with AI" → your AI agent gets the exact entity graph, blast radius, and refactor plan → opens a PR. | Copies MCP-formatted prompt with entity IDs, affected files, blast radius depth, and suggested refactor approach. | Shipped |
| 13.4 | **Suppression Memory** | Dismiss a false positive once — it stays dismissed unless the underlying code changes. | `AnomalyDoc.state = "suppressed"` with `suppression_reason`. Re-opens if entity hash changes on re-index. | Shipped |
| 13.5 | **Health Streak** | Gamified daily check: "5-day streak, 3 anomalies resolved this week." Trending dashboard shows week-over-week improvement. | Redis-backed streak counter. Weekly email with health grade trajectory. | Planned |

### 14. Workspace — IDE-Grade Dashboard

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 14.1 | **Contextual NavRail** | 56px icon rail with 9 tab destinations. Expands to 200px with labels. Replaces the old horizontal tab bar. | `RepoNavRail` client component. Auto-collapses on repo pages. `[` key toggles. Grouped: Context (Overview, Issues, Atlas) · Engineering (Code, Intelligence, Guardrails) · Operations (Ledger, Workspaces, Pipeline). | Shipped |
| 14.2 | **Edge-to-Edge Canvas** | Tab content fills 100% of remaining viewport. No padding, no max-width. Three layout patterns: padded (A), full-bleed (B), split-panel (C). | Layout resolved at `[repoId]/layout.tsx`. Canvas: `flex-1 min-h-0 overflow-hidden`. Each tab page adds `h-full overflow-y-auto` (Pattern A) or `h-full overflow-hidden` (Pattern B/C). | Shipped |
| 14.3 | **Command Palette (⌘K)** | Search entities, navigate tabs, switch repos, trigger actions — all from the keyboard. Entity search queries the graph API. | `cmdk` library. 4 groups: Tabs, Entities (debounced API fetch from `searchEntities`), Actions, Repos. `useParams().repoId` for context detection. | Shipped |
| 14.4 | **Intelligence Pulse** | Rail icons show notification dots when new intelligence is available. Amber for new content, red for issues, cyan for active pipeline. | Redis hash `pulse:{orgId}:{repoId}`. Pipeline activities set keys. Dismiss on tab visit via DELETE API. | Shipped |
| 14.5 | **FocusBar** | 32px contextual breadcrumb: GitHub org / repo / branch / commit / sync age. Click sync age to trigger re-index. Click repo name for repo switcher. | `FocusBarServer` async component. Sticky on Pattern B/C, scrolls on Pattern A. Right-click repo name → copy clone URL. | Shipped |
| 14.6 | **Zen Mode (⌘+\\)** | Hide the rail for pure-content screenshots. FocusBar stays visible and shows active tab name. | `ZenModeWrapper` client component. `{!zenMode && rail}`. `data-tab-canvas` attribute for Share Insight targeting. | Shipped |
| 14.7 | **Share Insight (📸)** | Capture the current view as a branded PNG for viral sharing on X/Slack. | `html-to-image` `toPng()` at 2x pixel ratio. Branded header/footer frame. Copy Image / Download PNG / Share to X. | Shipped |
| 14.8 | **Keyboard-First Navigation** | `1-9` tab switching, `[` rail toggle, `Ctrl+Tab` cycling, `Alt+arrows` history, `Backspace` back to repos, `?` shortcut overlay. | Unified keyboard handler in `RepoNavRail`. Ignores text inputs/contentEditable. | Shipped |

### 15. Code Explorer — Syntax-Highlighted Intelligence

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 15.1 | **Resizable Split Panel** | File tree on the left, code viewer on the right. Drag the handle to resize. | `react-resizable-panels` v4 `Group`/`Panel`/`Separator`. File tree `defaultSize={25}`, code viewer `defaultSize={75}`. | Shipped |
| 15.2 | **Shiki Syntax Highlighting** | Multi-color syntax highlighting for 22 languages, same engine as VS Code. `github-dark` theme. | Client-side `shiki` 4.x with lazy-loaded singleton highlighter. `HighlightedCode` component with `guessLanguage()` from file extension. Falls back to plain text during load. | Shipped |
| 15.3 | **Entity Annotations** | Each function/class annotated inline with role badge, confidence %, business purpose, complexity score. | `EntityAnnotationCard` component. Data from `/api/repos/{id}/entities?file={path}&enrich=true`. Role-colored left border (accent for logic, cyan for plumbing, amber for scaffold, emerald for test). | Shipped |
| 15.4 | **Card View / Code View Toggle** | Switch between entity-focused annotation cards and full syntax-highlighted source code. | Client-side toggle state. Card view: `EntityAnnotationCard` per entity. Code view: `HighlightedCode` with `CodeFirstView` wrapper. | Shipped |

### 16. Planned Features

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 12.1 | **VS Code Extension** | Native sidebar panels for Blueprint, Impact Graph, Timeline, and Workspace Diff — no browser needed. Click a graph node to jump to the file. | VS Code Extension API (TreeView, WebviewPanel). Communicates with Unerr API via REST. Blueprint rendered as swimlane WebviewPanel, Impact Graph as force-directed D3 canvas, Timeline as custom TreeView. `vscode.open` for file navigation. | Planned |
| 12.2 | **JetBrains Plugin** | Same native sidebar for IntelliJ, WebStorm, PyCharm. Full feature parity with VS Code. | IntelliJ Platform SDK (ToolWindow, JCEF browser panels). REST API client using OkHttp. Kotlin/JVM implementation. Same API endpoints as VS Code extension. | Planned |
| 12.3 | **Collision Detection** | Real-time alerts when two developers or AI agents edit the same function simultaneously. Prevents conflicts before they happen. | Entity-level activity recording in Redis (sorted set per entity key, scored by timestamp). Heartbeat from `sync_dirty_buffer` / `sync_local_diff`. Collision = two different `user_id` entries for same entity within TTL window. Push notification via SSE. | Planned |
| 12.4 | **Active Sessions** | Dashboard shows who is currently working on the repo and which files they're touching. Team awareness without standups. | Redis hash per repo: `{userId: {files: [...], lastSeen: timestamp, agent: "cursor"}}`. Populated by MCP tool calls (each call updates session). Expired after 5min inactivity. Rendered as presence indicators on repo dashboard. | Planned |
| 12.5 | **Multi-Repo Contracts** | When a function signature changes in Repo A, flags all callers in Repo B and C that would break. Cross-repo impact analysis. | Cross-repo edge collection in ArangoDB linking entities by import path / package name. Impact analysis traversal spans multiple `repo_id` partitions. Triggered on push webhook when exported function signatures change (AST diff). | Planned |
| 12.6 | **PII Detection** | Scans code paths for personal data flowing to logs, analytics, or external APIs without sanitization. Flags GDPR/CCPA risks. | Taint analysis on the call graph. Source: user input fields (form data, request body). Sink: `console.log`, `analytics.track`, external API calls. Propagation: tracks data flow through function parameters and return values. Semgrep taint rules + custom graph traversal. | Planned |
| 12.7 | **Trust Boundary Analysis** | Maps data flow from user input to DB writes and API responses. Flags paths where untrusted data crosses a trust boundary without validation. | Graph-based taint tracking. Trust boundaries defined as: HTTP handler entry, DB query execution, external API call, file write. Flags paths where data crosses a boundary without passing through a validation/sanitization node (identified by pattern matching on function names + AST analysis). | Planned |
| 12.8 | **Cognitive Debt Tracking** | Measures how much AI code gets rewritten by humans (rewind-to-commit ratio). High ratio means AI output isn't sticking. | Metric: `reverted_entries / total_entries` per `(repo_id, branch, time_window)`. Derived from ledger entry status transitions. Dashboard chart shows trend over time. Alert threshold configurable. Correlates with model, prompt length, and rule coverage. | Planned |

### 17. OSS Guardian Program

| # | Feature | Simple | Technical | Status |
|---|---|---|---|---|
| 17.1 | **One-Click Health Audit** | Analyze any public GitHub repo without login. Get an instant health grade, risk breakdown, and fix suggestions. | Unauthenticated `POST /api/public/audit` endpoint. Triggers lightweight indexing (SCIP + community detection + health report) on public repos. Results cached 7 days. | Planned |
| 17.2 | **Health Badge** | Embed a dynamic SVG badge in your GitHub README showing your repo's health grade (A-F). Updates on every push. | shields.io-compatible SVG endpoint: `unerr.dev/badge/{owner}/{repo}`. Grade color from Health Grade Scale. Cached in CDN with 1-hour TTL. | Planned |
| 17.3 | **Public Health Dashboard** | Share your repo's architecture intelligence publicly. Open-source maintainers can showcase code quality. | Public route: `unerr.dev/report/{owner}/{repo}`. No auth required. Shows health grade, top 5 risks, feature map, architecture diagram. | Planned |
| 17.4 | **Contributor Seats** | Contributors to indexed OSS repos get free, read-only access to the full graph, atlas, and blast radius. | `contributor` role on Better Auth member table. Auto-provisioned when a GitHub user has commit access to a connected public repo. Read-only MCP access. | Planned |

---

## Part 2: Audience Fit Matrix

Fit ratings: **Best** = high-value daily use, **Good** = solid value, **Okay** = usable but not primary, **--** = minimal value.

### 1. Onboarding & Setup

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 1.1 | One-Command Setup | Best | Best | Best | Best | Good | Okay | Okay |
| 1.2 | GitHub App Install | Best | Good | Best | Best | Best | Best | Best |
| 1.3 | Local CLI Upload | Good | Best | Good | Good | Good | Good | Good |
| 1.4 | Ephemeral Sandbox | Good | Best | Good | Okay | -- | -- | -- |
| 1.5 | IDE Auto-Config | Best | Best | Best | Best | Good | Good | Good |
| 1.6 | Git Hook Auto-Verify | Good | Good | Good | Best | Best | Best | Best |

### 2. Code Intelligence (AI Agent Tools)

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 2.1 | Semantic Code Search | Best | Best | Best | Best | Best | Best | Best |
| 2.2 | Function/Class Lookup | Good | Best | Best | Best | Best | Best | Best |
| 2.3 | Call Graph Traversal | Good | Good | Good | Best | Best | Best | Best |
| 2.4 | Import Chain Analysis | Okay | Good | Good | Best | Best | Best | Best |
| 2.5 | Project Stats | Good | Good | Good | Best | Best | Best | Best |
| 2.6 | Business Context | Okay | Okay | Good | Good | Best | Best | Best |
| 2.7 | Search by Purpose | Okay | Good | Good | Good | Best | Best | Best |
| 2.8 | Impact Analysis | Good | Best | Best | Best | Best | Best | Best |
| 2.9 | Blueprint | Okay | Good | Good | Best | Best | Best | Best |
| 2.10 | Convention Guide | Good | Good | Good | Best | Best | Best | Best |
| 2.11 | Suggest Approach | Good | Best | Best | Best | Best | Best | Best |
| 2.12 | Find Similar Code | Good | Best | Good | Good | Best | Best | Best |

### 3. Live Coding Context

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 3.1 | Dirty Buffer Sync | Good | Best | Best | Best | Good | Good | Good |
| 3.2 | Local Diff Sync | Good | Best | Best | Best | Best | Best | Best |
| 3.3 | File Watcher | Good | Best | Best | Best | Good | Good | Good |
| 3.4 | Local-First Mode | Best | Best | Best | Best | Good | Good | Good |

### 4. Prompt Ledger & Rewind

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 4.1 | Prompt Timeline | Good | Best | Best | Best | Best | Best | Best |
| 4.2 | Mark Working | Good | Best | Best | Best | Best | Best | Best |
| 4.3 | Rewind | Good | Best | Best | Best | Best | Best | Best |
| 4.4 | Timeline Branches | Okay | Best | Good | Good | Best | Best | Best |
| 4.5 | AI Commit Summaries | Okay | Good | Good | Good | Best | Best | Best |
| 4.6 | Merge History | Okay | Good | Good | Good | Best | Best | Best |

### 5. Health & Quality Analysis

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 5.1 | Health Report | Good | Good | Best | Best | Best | Best | Best |
| 5.2 | Prioritized Issues | Good | Best | Best | Best | Best | Best | Best |
| 5.3 | Dead Code Detection | Good | Good | Best | Best | Best | Best | Best |
| 5.4 | Architectural Drift | Okay | Okay | Good | Good | Best | Best | Best |
| 5.5 | Circular Dependency Detection | Okay | Good | Good | Best | Best | Best | Best |
| 5.6 | High Fan-In/Fan-Out | Okay | Good | Good | Best | Best | Best | Best |
| 5.7 | Feature Discovery | Okay | Good | Good | Best | Best | Best | Best |
| 5.8 | Architecture Decision Records | Okay | Okay | Good | Good | Best | Best | Best |
| 5.9 | Domain Glossary | Okay | Okay | Good | Good | Best | Best | Best |
| 5.10 | Living Documentation | Good | Best | Best | Best | Best | Best | Best |
| 5.11 | Context Export | Best | Best | Best | Best | Best | Best | Best |

### 6. Rules & Pattern Enforcement

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 6.1 | Auto-Detected Patterns | Good | Good | Best | Best | Best | Best | Best |
| 6.2 | Custom Rules | Okay | Good | Good | Best | Best | Best | Best |
| 6.3 | Org-Wide Rules | -- | -- | Okay | Good | Best | Best | Best |
| 6.4 | Rule Drafting | Good | Good | Good | Best | Best | Best | Best |
| 6.5 | Pattern-to-Rule Promotion | Okay | Good | Good | Best | Best | Best | Best |
| 6.6 | Rule Check | Good | Good | Good | Best | Best | Best | Best |
| 6.7 | Anti-Pattern Detection | Good | Good | Best | Best | Best | Best | Best |

### 7. PR Review Integration

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 7.1 | Automated PR Review | Okay | Good | Good | Best | Best | Best | Best |
| 7.2 | Review Dashboard | Okay | Good | Good | Best | Best | Best | Best |
| 7.3 | Inline Comments | Okay | Good | Good | Best | Best | Best | Best |
| 7.4 | Review Config | Okay | Okay | Good | Best | Best | Best | Best |
| 7.5 | "Debate the Bot" | Okay | Good | Good | Best | Best | Best | Best |

### 8. Code Snippet Library

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 8.1 | Team Snippets | Okay | Good | Good | Best | Best | Best | Best |
| 8.2 | Community Snippets | Good | Good | Good | Good | Good | Good | Good |
| 8.3 | Auto-Extracted Snippets | Good | Good | Good | Best | Best | Best | Best |
| 8.4 | Semantic Snippet Search | Good | Best | Good | Good | Best | Best | Best |

### 9. Dashboard & Visualization

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 9.1 | Entity Graph Visualization | Good | Good | Good | Best | Best | Best | Best |
| 9.2 | Pipeline Monitor | Good | Good | Good | Best | Best | Best | Best |
| 9.3 | Activity Feed | Okay | Okay | Good | Good | Best | Best | Best |
| 9.4 | Global Code Search | Good | Good | Good | Best | Best | Best | Best |
| 9.5 | Entity Browser | Good | Good | Good | Best | Best | Best | Best |

### 10. Codebase Atlas

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 10.1 | Feature Story | Good | Best | Best | Best | Best | Best | Best |
| 10.2 | Architecture Trace | Okay | Good | Good | Best | Best | Best | Best |
| 10.3 | Execution Trace Playback | Good | Best | Best | Best | Best | Best | Best |
| 10.4 | Blast Radius Simulation | Good | Best | Best | Best | Best | Best | Best |
| 10.5 | Graph-Verified Diagrams | Good | Best | Best | Best | Best | Best | Best |
| 10.6 | Auto-Regeneration | Good | Best | Best | Best | Best | Best | Best |
| 10.7 | Atlas Ask | Best | Best | Best | Best | Best | Best | Best |
| 10.8 | Public Atlas | Good | Best | Best | Best | Best | Good | Good |

### 11. Community-Based Feature Discovery

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 11.1 | Automatic Feature Detection | Okay | Good | Good | Best | Best | Best | Best |
| 11.2 | LLM Feature Naming | Okay | Good | Good | Best | Best | Best | Best |
| 11.3 | Role Classification | Good | Good | Best | Best | Best | Best | Best |

### 12. Document Verification & Rule Harvesting

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 12.1 | Doc Staleness Detection | Okay | Good | Good | Best | Best | Best | Best |
| 12.2 | Rule File Harvesting | Good | Best | Best | Best | Best | Best | Best |
| 12.3 | Verified Context Export | Best | Best | Best | Best | Best | Best | Best |

### 13. Health Command Center

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 13.1 | Triage Inbox | Good | Best | Best | Best | Best | Best | Best |
| 13.2 | 12 Graph-Native Detectors | Good | Good | Best | Best | Best | Best | Best |
| 13.3 | One-Click MCP Remediation | Good | Best | Best | Best | Best | Best | Best |
| 13.4 | Suppression Memory | Good | Good | Best | Best | Best | Best | Best |
| 13.5 | Health Streak | Good | Good | Good | Best | Best | Best | Best |

### 14. Workspace

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 14.1 | Contextual NavRail | Good | Best | Best | Best | Best | Best | Best |
| 14.2 | Edge-to-Edge Canvas | Good | Best | Best | Best | Best | Best | Best |
| 14.3 | Command Palette (⌘K) | Best | Best | Best | Best | Best | Best | Best |
| 14.4 | Intelligence Pulse | Good | Good | Good | Best | Best | Best | Best |
| 14.5 | FocusBar | Good | Good | Good | Best | Best | Best | Best |
| 14.6 | Zen Mode | Good | Best | Good | Good | Good | Good | Good |
| 14.7 | Share Insight | Good | Best | Best | Best | Good | Good | Good |
| 14.8 | Keyboard-First Navigation | Best | Best | Best | Best | Best | Best | Best |

### 15. Code Explorer

| # | Feature | Solo Dev | Vibe Coder | Indie Hacker | Small Startup | Growth Startup | Mid Org | Large Org |
|---|---|---|---|---|---|---|---|---|
| 15.1 | Resizable Split Panel | Good | Best | Best | Best | Best | Best | Best |
| 15.2 | Shiki Syntax Highlighting | Good | Best | Best | Best | Best | Best | Best |
| 15.3 | Entity Annotations | Good | Good | Best | Best | Best | Best | Best |
| 15.4 | Card View / Code View Toggle | Good | Best | Best | Best | Best | Best | Best |

---

## Appendix: Platform Features (Non-Differentiating)

> These features are standard SaaS infrastructure — necessary but not unique to unerr. Tracked here for completeness.

### A1. Team & Organization

| # | Feature | Status |
|---|---|---|
| A1.1 | Organization Management (auto-created at signup, multi-tenant) | Shipped |
| A1.2 | GitHub Connections (multiple GitHub orgs per unerr org) | Shipped |
| A1.3 | API Key Management (scoped permissions, revocation) | Shipped |
| A1.4 | Team Members (roles: owner/admin/member, invitations) | Shipped |
| A1.5 | Audit Trail (action logging with IP, user agent, metadata) | Shipped |

### A2. Billing & Usage

| # | Feature | Status |
|---|---|---|
| A2.1 | Usage-Based Billing (real-dollar LLM cost tracking) | Planned |
| A2.2 | Subscription Plans (Free/Pro/Max/Teams) | Planned |
| A2.3 | On-Demand Credits ($5/$10/$25 top-ups) | Planned |
| A2.4 | Team Cost Pooling (shared budget, per-member breakdown) | Planned |
| A2.5 | Real-Time Budget Enforcement (402 on limit, read-only still works) | Planned |

### A3. Auth & Onboarding

| # | Feature | Status |
|---|---|---|
| A3.1 | GitHub OAuth / Google OAuth / Email+Password signup | Shipped |
| A3.2 | Email Verification (enforced for email/password, skipped for OAuth) | Shipped |
| A3.3 | Session Management (Better Auth, cookie-based) | Shipped |

---

## Segment Summary

| Segment | Top Value Propositions |
|---|---|
| **Solo Dev** | One-command setup, local-first mode, semantic search, Atlas Feature Story, ⌘K command palette — get AI agent superpowers on personal projects with zero friction |
| **Vibe Coder** | Dirty buffer sync, prompt ledger + rewind, impact analysis, Atlas execution traces, Share Insight screenshots, shiki syntax highlighting — ship faster with an AI agent that truly understands your code |
| **Indie Hacker** | Health Command Center triage inbox, prioritized anomalies with MCP fix prompts, auto-detected patterns, blast radius simulation — keep your solo codebase clean as it grows without hiring |
| **Small Startup** | All of Indie Hacker + PR reviews, community-based features, rule harvesting, org-wide rules — lightweight governance that doesn't slow the team down |
| **Growth Startup** | All of Small Startup + Architecture Trace, ADRs, drift detection, doc staleness verification, graph-native detectors — maintain architecture quality as the team scales from 10 to 50 |
| **Mid Org** | All of Growth + org-wide governance, audit trail, Health Streak gamification, suppression memory — enterprise-grade code intelligence without enterprise-grade overhead |
| **Large Org** | All of Mid Org + PII detection, trust boundary analysis, compliance audit, multi-repo analysis — security, compliance, and cross-team coordination at scale |

---

## Part 3: Day 0 Release Readiness Audit

> **Last audited: 2026-03-24.** Covers the five Day 0 pillars from FIRST_WEEK_WOW.md and all shipped features above.

### Day 0 Pillar Readiness

| Pillar | Promise | Status | What's Done | What's Missing |
|--------|---------|--------|-------------|----------------|
| **1. 60-Second Hook** | `npx @autorail/unerr` → auth, IDE detect, connect, index, health grade | **90%** | Device auth (RFC 8628), IDE detection (Cursor/VS Code/Claude Code), MCP config injection, git remote introspection, 19 CLI commands | `.cursorrules`/`CLAUDE.md` auto-import ("Imported 47 rules from your existing files" — the core PLG hook) |
| **2. Core Engine** | MCP server with context hardening, persistent memory, root-cause triage | **100%** | 36 MCP tools registered, streamable HTTP transport (2025-03-26 spec), session persistence, rule injection into tool descriptions | — |
| **3. The Interceptor** | 23 anti-patterns + auto-conventions + stack starter packs | **80%** | Semgrep integration, LLM rule synthesis, 11 PR review checks, auto-detected conventions from repo analysis | Pre-packaged "Senior Next.js/FastAPI/Go Developer" starter packs (conventions are mined from existing code, but empty repos get no starter rules) |
| **4. Safety Net** | Prompt Ledger + semantic rewind + circuit breaker | **100%** | Full ledger with status machine, `revert_to_working_state`, timeline branches, Redis-backed circuit breaker (configurable: 4 changes / 10 min window / 5 min cooldown) | — |
| **5. First-Session Visibility** | Session savings score, blueprint, loud guardrails, runaway loop protection | **85%** | Token/cost tracking with percentiles, context export (UNERR_CONTEXT.md), blueprint command | Runaway *tool call* loop detection (circuit breaker handles entity changes, not repeated API/DB calls). "Loud" agent announcements ("unerr intercepted...") are passive via tool descriptions, not forced system messages. |

### Core Intelligence Engine

| System | Status | Detail |
|--------|--------|--------|
| **Indexing Pipeline** | **100%** | 10-step workflow, 43 activities across heavy/light queues. Clone → SCIP → Parse → Speculative Ontology → Embed → Justify → Pattern Detect → Graph Export → Health Report → Atlas. Resumable via `resumeFromStep`. |
| **Health Report** | **100%** | 25+ threshold detectors + LLM synthesis layer. Narrative, top concerns, strengths, per-risk rationale/recommendations, false positive suppression. Grade A-F. |
| **Justification** | **100%** | Per-entity LLM classification: role (logic/plumbing/scaffold/test), business purpose, error strategy, side effects, design rationale, I/O contract, security notes. Streaming producer/consumer architecture. |
| **Community-Based Features** | **100%** | Louvain community detection (multi-signal edges), semantic classification (feature/infrastructure/test_suite/support), CommunityDoc stored in ArangoDB. |
| **Living Documentation** | **100%** | Feature Story + Architecture Trace as Markdown with deterministic Mermaid diagrams. Zero-hallucination diagram generation from graph data. |
| **Domain Ontology** | **100%** | Three-tier term classification (domain/architectural/framework), speculative ontology from README/package.json, LLM-refined during justification. |
| **Embedding** | **100%** | Modal self-hosted Qwen3-Embedding-4B (768d), pgvector HNSW indexes, entity + justification embeddings. |
| **PR Review** | **100%** | 11 checks (pattern, impact, test, complexity, dependency, trust boundary, env, contract, idempotency, doc truth, hotspot). GitHub webhook integration with HMAC verification and Redis dedup. |
| **MCP Server** | **100%** | 36 tools across all phases. Streamable HTTP transport. Dirty buffer + workspace overlay. |
| **Prompt Ledger** | **100%** | Full audit trail, semantic rewind, timeline branches, circuit breaker, AI commit summaries. |
| **Local-First Mode** | **90%** | CozoDB in-memory graph, msgpack snapshots, <5ms local queries, offline capable. Read-only (writes sync to cloud first). |
| **Context Export** | **100%** | Compact (~2-4KB) and full (~8-20KB) versions. Downloadable via API. |
| **Session Stats** | **100%** | Token tracking, cost computation, latency percentiles (p50/p95/p99), per-source breakdown. |

### Not Built — Day 0 Blockers

These are promised in the Day 0 user journey (FIRST_WEEK_WOW.md) but have zero implementation:

| Gap | Why It's a Day 0 Blocker | Effort Estimate |
|-----|--------------------------|-----------------|
| **Billing & Usage Tracking** | Free tier needs a budget cap ($0.50/mo). Without it, any user can run unlimited LLM calls. All Stripe methods currently throw `NotImplementedError`. No usage tracking, no budget enforcement, no plan limits. | Large — Stripe integration, usage metering, budget middleware, plan management |
| **Rules File Auto-Import** | The Day 0 terminal output literally shows "Found .cursorrules (142 lines) + CLAUDE.md (67 lines) ✓ Imported 47 rules." This is the emotional hook that converts existing Cursor/Claude users. Zero code exists for scanning or importing these files. | Medium — CLI file scanner, rule parser, ArangoDB upsert |
| **Stack Starter Packs** | Day 0 shows "Applying Senior Next.js Developer ruleset (23 built-in rules)." For repos with no existing code history, auto-detection finds nothing. Need pre-packaged rule sets per stack. | Medium — curate rule sets for top 5 frameworks, detection logic, seed data |

### Not Built — Post-Day 0

These are explicitly deferred (listed in FIRST_WEEK_WOW.md "What We Deliberately CUT"):

| Feature | Status | Priority |
|---------|--------|----------|
| Collision Detection (multi-agent conflicts) | Not built | Day 14 |
| Cross-Repo Analysis (org-wide search/dedup) | Not built | Phase 2 |
| PII Detection / Taint Analysis | Not built | Enterprise tier |
| Trust Boundary Analysis | Not built (PR review has basic check) | Enterprise tier |
| VS Code Extension | Not built | Post-launch |
| JetBrains Plugin | Not built | Post-launch |
| Cognitive Debt Tracking | Not built | Post-launch |
| Ephemeral Repo TTL Cleanup | Partial (create + promote works, no auto-delete cron) | Day 7 |
| Runaway Tool Call Loop Detection | Partial (entity-level circuit breaker exists, not tool-call-level) | Day 7 |

### Day 0 Launch Checklist

- [ ] **Billing**: Implement free tier with $0.50/mo LLM budget, usage tracking middleware, 402 response on limit
- [ ] **Rules import**: CLI scans `.cursorrules`, `CLAUDE.md`, `GEMINI.md`, `rules.mdc` → parse → upsert to ArangoDB rules collection
- [ ] **Starter packs**: Curate 3-5 framework-specific rule sets (Next.js, Python/FastAPI, Go, Ruby/Rails, general TypeScript)
- [ ] **Smoke test**: Run full `npx @autorail/unerr` flow on a fresh GitHub repo and verify every step in the Day 0 journey
- [ ] **Ephemeral cleanup**: Add Temporal cron workflow to delete expired ephemeral repos
- [ ] **Landing page**: Verify marketing site matches actual capabilities (no "coming soon" features presented as shipped)
