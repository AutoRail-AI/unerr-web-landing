# Revenue Projections: Year 1, Year 2, Year 3

> **What this document is:** A research-backed revenue model for unerr across three years, built on the launch strategy from [ADJACENCY_TIMING_ANALYSIS.md](ADJACENCY_TIMING_ANALYSIS.md) and the market data from [MARKET_LANDSCAPE_2026.md](MARKET_LANDSCAPE_2026.md). Four scenarios (conservative, realistic, optimistic, vibe coder breakout) with explicit assumptions traced to data points.
> **What this document is NOT:** A financial forecast for investors. This is an internal planning model. Real numbers will deviate — the value is in the structure of thinking, not the specific dollar amounts.
> **Last updated:** 2026-03-29

---

## Key Assumptions

### Pricing Structure

| Tier | Price | Repos | Target |
|------|-------|-------|--------|
| **Free Trial** | $0 / 7 days | 1 project | Track A acquisition — instant hook |
| **OSS Guardian** | $0 forever | Unlimited public | Open source community, inbound flywheel |
| **Pro** | $20/mo or $172/year ($16/mo) | 3 repos, 50K LOC | Individual developers, vibe coders |
| **Pro+** | $35/mo or $336/year ($28/mo) | 10 repos, 200K LOC | Power users, larger projects |
| **Startup** | $30/seat/mo or $24/seat annual (3-seat min = $90/mo) | Unlimited repos, 500K LOC | Small teams, startups |
| **Enterprise Pilot** | $2,000 flat / 60-day POC | Unlimited, custom LOC | Enterprise entry |
| **Enterprise Post-POC** | $99-149/seat/mo tiered | Unlimited | Growth startups, mid-orgs, regulated |

**Pure flat-rate. No credits, no metering.** unerr's cost structure is fundamentally different from Cursor/Claude — 90% of ongoing value (MCP queries, blast radius, health grades) is near-zero-cost graph queries. Atlas Ask runs on self-hosted Ollama at fixed cost ($15-35/mo VPS). Indexing cost variance managed by repo count + LOC limits per tier.

**Blended ARPU: ~$24/seat** across all paid tiers (weighted: 60% Pro at $20, 15% Pro+ at $35, 15% Startup at $30/seat, 10% Enterprise at $120/seat avg).

**Target seats for $1M ARR: ~3,500** ($1M / 12 / $24 = ~3,472 seats).

### Conversion Benchmarks (from research)

| Metric | Industry Median | AI-Native PLG | Our Assumption |
|--------|----------------|---------------|----------------|
| Visitor -> signup | 5-12% | -- | 8% |
| Free -> paid (overall) | 2-5% | Cursor: 36% | 5-8% (Year 1), 8-12% (Year 2+) |
| 7-day trial -> paid | 31% avg | 40.4% top quartile | 35% (7-day free trial with project limit) |
| Monthly churn (individuals) | 5-8% | 3-5% (AI-native) | 6% (Year 1), 4% (Year 2+) |
| Monthly churn (teams) | 3-5% | 2-3% | 4% (Year 1), 2.5% (Year 2+) |
| Monthly churn (enterprise) | 1-2% | 1% | 2% (Year 1), 1% (Year 2+) |
| Net dollar retention | 100-110% | 140% median (hybrid) | 120% (Year 1), 140% (Year 2+) |

**Sources:** Stack Overflow 2025, Cursor conversion data (SaaStr), PLG benchmark studies (Pixelswithin 2026), CodeRabbit 20% MoM growth, Snyk growth trajectory

### Why These Assumptions May Be Conservative: The Vibe Coder Factor

The benchmarks above are from **developer-tool adoption dynamics** — rational evaluation over days/weeks. Vibe coders don't behave like professional developers. They behave like **consumer app users**: impulsive decisions, emotional triggers, social sharing. Three dynamics shift the model:

**1. Decision cycle is minutes, not days.**
- Professional developer: "Let me evaluate this tool over a week" -> rational assessment
- Vibe coder: "My repo is C+ with 23 dead functions" -> PANIC -> pays immediately
- Loss aversion (fear of broken code) is **2x stronger** than hope of gain (Kahneman & Tversky)
- This means conversion can be 2-3x the developer-tool benchmark for the vibe coder segment

**2. Viral coefficient is higher.**
- Professional developers don't tweet "my code quality is bad" — career risk
- Vibe coders tweet "my AI-built SaaS got a C+ from unerr" — it's content, it's relatable
- Every shared health grade is a free ad reaching other vibe coders who think "what would MY repo get?"
- This is the Spotify Wrapped / Wordle dynamic — the output IS the marketing
- K-factor for vibe coders: est. 0.3-0.5 (vs. 0.1-0.2 for dev tools)

**3. Signup friction is near-zero.**
- A health grade takes 60 seconds to generate — closer to a quiz than a product evaluation
- No CLI needed for Tranche 1 (just connect GitHub, see grade)
- Lovable proved non-technical users will adopt AI dev tools -> $200M ARR in ~1 year
- 50%+ of Claude Code usage at Epic is by non-developers (designers, marketers, executives)

These dynamics are modeled separately as the **Vibe Coder Breakout** scenario below.

### Growth Rate Assumptions

| Phase | Monthly user growth | Driver |
|-------|-------------------|--------|
| **Month 1-2** (launch) | 200-500 free signups/mo | T1 is FREE PUBLIC BETA (no revenue). HN launch, Product Hunt, first blog posts. |
| **Month 3-5** (PLG building) | 500-2,000 free signups/mo | OSS Guardian, content flywheel, word-of-mouth. Billing live at T2. |
| **Month 6-8** (adjacency boost) | 1,500-4,000 free signups/mo | Primitives increases value prop, Surgical CI generates enterprise inbound |
| **Month 9-12** (compounding) | 3,000-6,000 free signups/mo | Word-of-mouth compound, OSS badges visible, enterprise case studies |
| **Year 2** | 5,000-15,000 free signups/mo | Category leadership, partnership channels, potential fundraise |
| **Year 3** | 10,000-30,000 free signups/mo | Market expansion, international, adjacent persona expansion |

---

## Year 1: May 2026 — April 2027

### Month-by-Month Revenue Model

**Note:** T1 (Week 1-2) is a FREE PUBLIC BETA. Revenue starts at T2 (Week 3). Month 1 has $0 revenue by design.

#### Realistic Scenario (Base Case)

| Month | Event | Free Users (cumul.) | Paying Pro | Startup Accounts | Enterprise Accounts | MRR | Notes |
|-------|-------|--------------------|--------------------|---------------|--------------------|----|-------|
| **May** | Core launch (T1-T2 free beta) | 400 | 0 | 0 | 0 | **$0** | Free only. Health grade hook. Building buzz. No billing. |
| **Jun** | T3-T4. OSS Guardian. Billing live. | 1,200 | 30 | 2 | 0 | **$900** | First conversions. 30 Pro x $20 + 2 Startup x $150 avg. |
| **Jul** | PLG running. Content flywheel starting. | 2,500 | 80 | 5 | 0 | **$2,350** | 80 x $20 + 5 x $150 = $2,350. Word-of-mouth starting. |
| **Aug** | EU AI Act awareness peaks. Enterprise interest. | 4,500 | 160 | 12 | 1 | **$6,200** | 160 x $20 + 12 x $150 + 1 x $1,800 = $6,800. First enterprise POC converts. |
| **Sep** | Graph maturity validated. Pre-adjacency. | 7,000 | 280 | 22 | 3 | **$13,200** | Green signal for adjacencies (1,000+ free, 50+ paying). |
| **Oct** | **Primitives + Surgical CI L1 launch** | 10,000 | 450 | 35 | 6 | **$25,050** | Primitives boosts Track A conversion. CI opens enterprise budget. |
| **Nov** | Adjacency growth. Collision detection. | 13,500 | 650 | 50 | 10 | **$38,500** | Enterprise pipeline building. Multi-product demos. |
| **Dec** | Year-end enterprise deals close. | 17,500 | 850 | 65 | 14 | **$51,950** | Enterprise accounts expanding seats. NDR kicking in. |
| **Jan 27** | Surgical CI L2 (intent validation). | 22,000 | 1,050 | 80 | 18 | **$65,400** | Coverage theater detection becomes enterprise talking point. |
| **Feb 27** | Growth continues. Brand establishing. | 27,000 | 1,250 | 95 | 22 | **$79,250** | Conference talks, analyst mentions, category definition solidifying. |
| **Mar 27** | Floor Control precursor data validates. | 32,500 | 1,450 | 110 | 26 | **$92,300** | Enterprise teams requesting orchestration features. |
| **Apr 27** | **Floor Control basic ships.** End of Year 1. | 38,000 | 1,650 | 125 | 30 | **$108,750** | Full product stack live. |

**MRR calculation formula:** Pro x $20 + Startup accounts x avg $150/mo + Enterprise accounts x avg $1,800/mo

**Year 1 Realistic Total Revenue: ~$484,000**
**Exit MRR: ~$109K = $1.3M ARR run rate**

#### Optimistic Scenario (Health Grade Goes Viral)

| Month | Free Users (cumul.) | Paying Pro | Startup Accounts | Enterprise Accounts | MRR |
|-------|--------------------|--------------------|---------------|--------------------|----|
| **May** | 800 | 0 | 0 | 0 | **$0** |
| **Jun** | 2,500 | 60 | 4 | 0 | **$1,800** |
| **Jul** | 6,000 | 200 | 12 | 1 | **$7,600** |
| **Aug** | 11,000 | 450 | 25 | 3 | **$17,150** |
| **Sep** | 18,000 | 800 | 45 | 6 | **$33,550** |
| **Oct** | 27,000 | 1,400 | 70 | 12 | **$60,100** |
| **Nov** | 38,000 | 2,100 | 100 | 20 | **$93,000** |
| **Dec** | 50,000 | 2,800 | 130 | 28 | **$126,000** |
| **Jan 27** | 65,000 | 3,500 | 160 | 36 | **$158,800** |
| **Feb 27** | 82,000 | 4,200 | 190 | 44 | **$191,900** |
| **Mar 27** | 100,000 | 4,900 | 220 | 52 | **$224,600** |
| **Apr 27** | 120,000 | 5,600 | 250 | 60 | **$257,500** |

**Year 1 Optimistic Total Revenue: ~$1.17M**
**Exit MRR: ~$258K = $3.1M ARR run rate**

#### Conservative Scenario (Slow Burn, No Viral Moment)

| Month | Free Users (cumul.) | Paying Pro | Startup Accounts | Enterprise Accounts | MRR |
|-------|--------------------|--------------------|---------------|--------------------|----|
| **May** | 150 | 0 | 0 | 0 | **$0** |
| **Jun** | 400 | 10 | 0 | 0 | **$200** |
| **Jul** | 900 | 30 | 1 | 0 | **$750** |
| **Aug** | 1,600 | 60 | 3 | 0 | **$1,650** |
| **Sep** | 2,800 | 100 | 6 | 0 | **$2,900** |
| **Oct** | 4,500 | 160 | 10 | 1 | **$6,500** |
| **Nov** | 6,500 | 230 | 15 | 2 | **$11,450** |
| **Dec** | 9,000 | 310 | 22 | 4 | **$16,700** |
| **Jan 27** | 12,000 | 400 | 30 | 6 | **$23,300** |
| **Feb 27** | 15,500 | 500 | 38 | 8 | **$30,100** |
| **Mar 27** | 19,500 | 600 | 46 | 10 | **$36,900** |
| **Apr 27** | 24,000 | 700 | 55 | 12 | **$43,850** |

**Year 1 Conservative Total Revenue: ~$174,000**
**Exit MRR: ~$44K = $528K ARR run rate**

### Year 1 Summary

| Scenario | Total Revenue | Exit MRR | Exit ARR Run Rate | Free Users | Paying Customers |
|----------|-------------|---------|-------------------|------------|-----------------|
| **Optimistic** | ~$1.17M | $258K | $3.1M | 120,000 | 5,910 |
| **Realistic** | ~$484K | $109K | $1.3M | 38,000 | 1,805 |
| **Conservative** | ~$174K | $44K | $528K | 24,000 | 767 |

**Comparable benchmarks:**
- CodeRabbit at similar stage (~18 months post-launch): ~$5-8M ARR, growing 20% MoM
- Snyk at 18 months: ~$1-2M ARR
- Linear at 12 months: ~$1M ARR
- SonarQube Cloud at 12 months: ~$500K ARR

**Year 1 is about proving the model, not maximizing revenue.** The exit MRR matters more than total revenue because it's the growth rate that determines Year 2.

---

## Year 2: May 2027 — April 2028

### What Changes in Year 2

**Product surface expands dramatically:**
- Floor Control ships Q2 2027 ($2,000-$5,000/mo enterprise accounts)
- Cross-Service CI ships Q2-Q3 2027
- Primitives mature (6+ months of production use, compliance packs for fintech/healthcare)
- Population-level intelligence emerging (convention patterns across 1,000+ repos)

**Go-to-market changes:**
- Possible seed raise ($1-2M) in Q3-Q4 2027 based on Year 1 metrics -> hire 2-3 people (growth + engineering)
- Enterprise sales motion established (bottom-up leads from Track A proven)
- OSS Guardian has 500-2,000+ active repos -> constant inbound
- Category "AI code intelligence" defined with unerr as the reference

**Pricing evolution:**
- Floor Control creates enterprise ACV expansion ($2,000-$5,000/mo vs. $1,800/mo avg for core)
- Multi-product bundling: Core + Primitives + CI + Floor Control at $3,000-$8,000/mo
- Net dollar retention increases to 140%+ as teams expand seats and add adjacencies
- Enterprise Post-POC tiering ($99/$129/$149 per seat) drives upsell within accounts

**Competition:**
- Greptile has a functional graph by now but 12-18 months behind on maturity, convention data, and temporal signals
- CodeRabbit at $50-80M ARR but still diff-based architecture
- unerr has the only graph mature enough for Floor Control and Cross-Service CI

### Year 2 Revenue Model

**Growth assumptions:**
- Individual MoM growth: 15-25% (compounding word-of-mouth + content + OSS)
- Startup accounts: 20-30% MoM growth (enterprise pipeline converting)
- Enterprise accounts: 25-40% MoM growth (Floor Control ACV expansion)
- Churn improves: individual 4%, team 2.5%, enterprise 1%
- NDR: 140% (existing accounts expand seats + add adjacencies)

#### Realistic Scenario

| Quarter | Paying Pro | Startup Accounts | Enterprise Accounts | Avg Enterprise MRR | Total MRR | ARR Run Rate |
|---------|-------------------|---------------|--------------------|--------------------|-----------|-------------|
| **Q1 (May-Jul 27)** | 2,200 | 180 | 45 | $2,000 | $161K | $1.9M |
| **Q2 (Aug-Oct 27)** | 3,000 | 260 | 70 | $2,800 | $295K | $3.5M |
| **Q3 (Nov 27-Jan 28)** | 3,800 | 350 | 100 | $3,500 | $478K | $5.7M |
| **Q4 (Feb-Apr 28)** | 4,600 | 450 | 140 | $4,000 | $680K | $8.2M |

**Year 2 Realistic Total Revenue: ~$4.8M**
**Exit MRR: ~$680K = $8.2M ARR run rate**

The jump from Year 1 ($484K total) to Year 2 ($4.8M total) is driven by:
1. **Floor Control ACV**: Enterprise accounts go from avg $1,800/mo to avg $4,000/mo
2. **Startup tier at $30/seat**: Team revenue doubles vs. old $15/seat pricing
3. **Compounding growth**: Year 1 exit MRR ($109K) x 12 months of 15-20% growth
4. **NDR expansion**: Existing accounts adding seats + adjacency products
5. **Possible hire**: 2-3 people amplify distribution, support, and enterprise sales

#### Optimistic Scenario

| Quarter | Paying Pro | Startup Accounts | Enterprise Accounts | Avg Enterprise MRR | Total MRR | ARR Run Rate |
|---------|-------------------|---------------|--------------------|--------------------|-----------|-------------|
| **Q1** | 7,000 | 350 | 80 | $2,500 | $392K | $4.7M |
| **Q2** | 9,500 | 500 | 130 | $3,200 | $681K | $8.2M |
| **Q3** | 12,000 | 680 | 190 | $4,000 | $1.00M | $12.0M |
| **Q4** | 15,000 | 880 | 260 | $4,500 | $1.40M | $16.8M |

**Year 2 Optimistic Total Revenue: ~$10.4M**
**Exit MRR: ~$1.4M = $16.8M ARR run rate**

This scenario requires: viral health grade + successful seed raise + 5-8 person team by end of Year 2.

#### Conservative Scenario

| Quarter | Paying Pro | Startup Accounts | Enterprise Accounts | Avg Enterprise MRR | Total MRR | ARR Run Rate |
|---------|-------------------|---------------|--------------------|--------------------|-----------|-------------|
| **Q1** | 900 | 80 | 18 | $1,200 | $52K | $624K |
| **Q2** | 1,200 | 110 | 28 | $1,800 | $91K | $1.1M |
| **Q3** | 1,500 | 150 | 40 | $2,200 | $141K | $1.7M |
| **Q4** | 1,800 | 190 | 55 | $2,800 | $218K | $2.6M |

**Year 2 Conservative Total Revenue: ~$1.5M**
**Exit MRR: ~$218K = $2.6M ARR run rate**

### Year 2 Summary

| Scenario | Total Revenue | Exit MRR | Exit ARR Run Rate | Revenue Mix (Track A / Track B) |
|----------|-------------|---------|-------------------|--------------------------------|
| **Optimistic** | ~$10.4M | $1.4M | $16.8M | 25% / 75% |
| **Realistic** | ~$4.8M | $680K | $8.2M | 30% / 70% |
| **Conservative** | ~$1.5M | $218K | $2.6M | 40% / 60% |

**The big shift in Year 2:** Enterprise (Track B) becomes the dominant revenue driver. Track A continues growing but at lower ARPU. The revenue mix flips from 90/10 (Track A/B) in early Year 1 to 30/70 by end of Year 2.

---

## Year 3: May 2028 — April 2029

### What Changes in Year 3

**Product maturity:**
- All adjacencies 12-18 months in production. Stable, reliable, feature-complete.
- Population-level intelligence across 5,000-50,000+ repos -> competitive moat is now a data moat
- Graph maturity at 24-36 months -> temporal signals extremely rich, convention mining near-perfect
- Potential new adjacencies: Primitives marketplace, compliance certification packs, vertical solutions (fintech, healthcare)

**Team and company:**
- Likely raised Series A ($5-15M) based on Year 2 metrics (in realistic/optimistic scenarios)
- Team of 10-25 people (engineering, growth, enterprise sales, customer success)
- International expansion (EU particularly strong due to AI Act compliance demand)

**Market dynamics:**
- AI agent market: $15-25B (from $7.84B in 2025, growing 46% CAGR)
- AI governance market: $1B+ (Gartner projection for 2030, but accelerating)
- Competitors have caught up on basic features but 24+ months behind on graph maturity
- Category "AI Development Intelligence" established with unerr as the defining product

**Pricing evolution:**
- Enterprise platform deals: $50K-$200K ACV (core + all adjacencies + compliance packs)
- Mid-market: $15K-$50K ACV
- SMB: $2K-$5K ACV
- Individual Pro: still $20/mo but represents <10% of revenue

### Year 3 Revenue Model

#### Realistic Scenario

| Quarter | Individual MRR | Team MRR | Enterprise MRR | Total MRR | ARR Run Rate |
|---------|---------------|---------|---------------|-----------|-------------|
| **Q1 (May-Jul 28)** | $120K | $120K | $560K | $800K | $9.6M |
| **Q2 (Aug-Oct 28)** | $140K | $155K | $770K | $1.07M | $12.8M |
| **Q3 (Nov 28-Jan 29)** | $160K | $195K | $1.02M | $1.38M | $16.5M |
| **Q4 (Feb-Apr 29)** | $180K | $240K | $1.33M | $1.75M | $21.0M |

**Year 3 Realistic Total Revenue: ~$15.0M**
**Exit MRR: ~$1.75M = $21.0M ARR run rate**

#### Optimistic Scenario

| Quarter | Individual MRR | Team MRR | Enterprise MRR | Total MRR | ARR Run Rate |
|---------|---------------|---------|---------------|-----------|-------------|
| **Q1** | $300K | $270K | $1.6M | $2.17M | $26.0M |
| **Q2** | $360K | $375K | $2.4M | $3.14M | $37.6M |
| **Q3** | $410K | $485K | $3.3M | $4.20M | $50.4M |
| **Q4** | $460K | $600K | $4.5M | $5.56M | $66.7M |

**Year 3 Optimistic Total Revenue: ~$45.3M**
**Exit MRR: ~$5.56M = $66.7M ARR run rate**

This requires: Series A raised, 20+ person team, enterprise sales team, Floor Control widely adopted.

#### Conservative Scenario

| Quarter | Individual MRR | Team MRR | Enterprise MRR | Total MRR | ARR Run Rate |
|---------|---------------|---------|---------------|-----------|-------------|
| **Q1** | $50K | $50K | $170K | $270K | $3.2M |
| **Q2** | $57K | $65K | $240K | $362K | $4.3M |
| **Q3** | $64K | $82K | $320K | $466K | $5.6M |
| **Q4** | $70K | $100K | $420K | $590K | $7.1M |

**Year 3 Conservative Total Revenue: ~$5.1M**
**Exit MRR: ~$590K = $7.1M ARR run rate**

---

## Three-Year Summary

### Revenue Trajectory

| Year | Optimistic | Realistic | Conservative |
|------|-----------|-----------|-------------|
| **Year 1** (May 26-Apr 27) | $1.17M | **$484K** | $174K |
| **Year 2** (May 27-Apr 28) | $10.4M | **$4.8M** | $1.5M |
| **Year 3** (May 28-Apr 29) | $45.3M | **$15.0M** | $5.1M |
| **3-Year Cumulative** | $56.9M | **$20.3M** | $6.8M |

### Exit ARR Run Rate

| Year End | Optimistic | Realistic | Conservative |
|----------|-----------|-----------|-------------|
| **Year 1** | $3.1M | **$1.3M** | $528K |
| **Year 2** | $16.8M | **$8.2M** | $2.6M |
| **Year 3** | $66.7M | **$21.0M** | $7.1M |

### Revenue Composition Shift

| Period | Track A (Individuals) | Track B (Teams + Enterprise) |
|--------|----------------------|------------------------------|
| **Year 1 start** | 90% | 10% |
| **Year 1 end** | 50% | 50% |
| **Year 2 end** | 30% | 70% |
| **Year 3 end** | 15% | 85% |

Track A never stops growing — it's the acquisition engine. But Track B becomes the revenue engine through ACV expansion (Floor Control: $2K-$5K/mo vs. Pro: $20/mo). The Startup tier at $30/seat (2x the old $15/seat) accelerates the crossover point.

---

## Scenario 4: Vibe Coder Breakout

The three scenarios above use developer-tool adoption dynamics. This fourth scenario models what happens when **vibe coder consumer dynamics** drive growth — higher signup velocity, higher conversion from loss aversion, and viral sharing of health grades.

### How Vibe Coder Dynamics Differ from Developer-Tool Dynamics

| Factor | Dev-Tool Model (Scenarios 1-3) | Vibe Coder Model (Scenario 4) | Why |
|--------|-------------------------------|-------------------------------|-----|
| **Signup velocity** | 200-500/mo at launch | 1,000-3,000/mo at launch | Near-zero friction (connect GitHub, see grade). Quiz-like experience. |
| **Free -> paid conversion** | 5-8% | 10-15% | Loss aversion 2x stronger than gain seeking. C+ grade creates panic buying. |
| **Viral coefficient (K)** | 0.1-0.2 | 0.3-0.5 | Vibe coders share failures publicly. Health grade IS the content. |
| **Churn** | 6% monthly | 8-10% monthly | Vibe coders abandon projects more frequently. Higher acquisition compensates. |
| **Decision cycle** | Days to weeks | Minutes | Emotional, not rational. "Fix this NOW" not "let me evaluate." |
| **Price sensitivity** | $20/mo acceptable | $20/mo with $16/mo annual as impulse capture | Annual Pro ($172/year = $16/mo) is "don't think about it" money. One-time annual payment removes recurring friction. |

### How the Pro Tier Captures Vibe Coders Without a Lite Tier

| Tier | What You Get | Who Buys | Psychology |
|------|------------|---------|-----------|
| **Free Trial** | 7 days, 1 project, health grade, basic view | Everyone (acquisition) | "Let me check my repo" |
| **OSS Guardian** | Free forever on public repos | OSS community, inbound | "Free for my open source work" |
| **Pro ($20/mo or $172/year)** | Full 36 MCP tools, prompt ledger, rewind, conventions, PR review, unlimited repos | Vibe coders + professional developers | "My repo is C+ and I need to fix it" — $172/year = $16/mo annual feels like an impulse buy |

The **annual Pro at $172/year ($16/mo effective)** captures the impulse conversion moment. A vibe coder who sees a C+ wants to fix it RIGHT NOW. At $20/mo they might hesitate. At "$172 for the whole year — that's only $16/month" they commit because:
- Annual billing removes the recurring "should I cancel?" decision
- $172 feels like a one-time purchase, not an ongoing cost
- "Save 20% with annual" is a familiar, trusted pattern
- Once locked in annually, they have 12 months to build the habit

The ARPU is higher than a hypothetical $9/mo tier ($16/mo vs $9/mo), and the annual commitment dramatically reduces churn (0% monthly churn on annual plans until renewal).

### Vibe Coder Signup Velocity

| Period | Dev-Tool Model | Vibe Coder Model | Driver |
|--------|---------------|-----------------|--------|
| Month 1 | 400 | 1,500-3,000 | Health grade as "check your repo" social moment |
| Month 3 | 2,500 cumulative | 10,000-20,000 cumulative | Viral sharing + OSS Guardian + "what's YOUR grade?" threads |
| Month 6 | 10,000 cumulative | 40,000-80,000 cumulative | Compound K-factor (each cohort brings 30-50% of next) |
| Month 12 | 38,000 cumulative | 150,000-300,000 cumulative | Cultural artifact status — checking unerr grade becomes ritual |

For comparison: Lovable reached millions of users serving non-technical builders. Vercel Skills.sh got 20,000 installs in 6 hours. A health grade with viral dynamics is closer to these consumer adoption patterns than to Snyk's developer word-of-mouth pattern.

### Vibe Coder Breakout: Year 1 Revenue Model

| Month | Free Users (cumul.) | Pro ($20/mo) | Pro Annual ($16/mo eff.) | Startup Accounts | Enterprise | MRR |
|-------|--------------------|----|-----|------|------|------|
| **May** | 2,000 | 0 | 0 | 0 | 0 | **$0** |
| **Jun** | 6,000 | 60 | 40 | 3 | 0 | **$2,090** |
| **Jul** | 14,000 | 200 | 150 | 8 | 1 | **$9,400** |
| **Aug** | 26,000 | 500 | 400 | 18 | 3 | **$27,100** |
| **Sep** | 42,000 | 1,000 | 800 | 35 | 6 | **$53,550** |
| **Oct** | 65,000 | 1,800 | 1,400 | 60 | 12 | **$89,200** |
| **Nov** | 95,000 | 2,600 | 2,200 | 90 | 20 | **$123,700** |
| **Dec** | 130,000 | 3,400 | 3,000 | 120 | 30 | **$170,000** |
| **Jan 27** | 170,000 | 4,000 | 3,800 | 150 | 40 | **$213,300** |
| **Feb 27** | 210,000 | 4,500 | 4,500 | 180 | 50 | **$252,000** |
| **Mar 27** | 255,000 | 5,000 | 5,200 | 210 | 60 | **$291,700** |
| **Apr 27** | 300,000 | 5,400 | 5,800 | 240 | 70 | **$326,800** |

**MRR calculation:** Pro monthly x $20 + Pro annual x $16 effective + Startup x $150 avg + Enterprise x $1,800 avg

**Year 1 Vibe Coder Breakout Total Revenue: ~$1.56M**
**Exit MRR: ~$327K = $3.9M ARR run rate**

Key differences from the dev-tool realistic scenario ($484K):
- **3.2x more total revenue** ($1.56M vs. $484K)
- **3x higher exit MRR** ($327K vs. $109K)
- **Higher ARPU than a Lite tier model**: blended ~$18/mo across Pro monthly + annual (vs. ~$12/mo with a $9 Lite tier)
- **Annual Pro locks in revenue**: ~52% of individual subscribers on annual plans by Month 12, reducing churn to near-zero for those users
- **8x more free users** (300K vs. 38K) — the viral funnel is the engine

### Vibe Coder Breakout: Year 2 Revenue Model

Year 2 compounds the vibe coder base while enterprise adjacencies (Primitives, Surgical CI, Floor Control) layer on Track B revenue:

| Quarter | Pro MRR | Startup MRR | Enterprise MRR | Total MRR | ARR Run Rate |
|---------|---------|---------|---------------|-----------|-------------|
| **Q1 (May-Jul 27)** | $220K | $55K | $140K | $415K | $5.0M |
| **Q2 (Aug-Oct 27)** | $290K | $85K | $250K | $625K | $7.5M |
| **Q3 (Nov 27-Jan 28)** | $360K | $120K | $400K | $880K | $10.6M |
| **Q4 (Feb-Apr 28)** | $430K | $160K | $590K | $1.18M | $14.2M |

**Year 2 Vibe Coder Breakout Total Revenue: ~$9.3M**
**Exit MRR: ~$1.18M = $14.2M ARR run rate**

The revenue mix is different from the dev-tool model:
- Pro (Track A): 50% of MRR -> vibe coders remain a major revenue contributor, and at higher ARPU than a Lite-tier model
- Startup + Enterprise (Track B): 50% of MRR -> enterprise growing fast, balanced with strong individual revenue

### Vibe Coder Breakout: Year 3 Revenue Model

| Quarter | Pro MRR | Startup MRR | Enterprise MRR | Total MRR | ARR Run Rate |
|---------|---------|---------|---------------|-----------|-------------|
| **Q1** | $550K | $230K | $900K | $1.68M | $20.2M |
| **Q2** | $650K | $310K | $1.3M | $2.26M | $27.1M |
| **Q3** | $740K | $400K | $1.8M | $2.94M | $35.3M |
| **Q4** | $820K | $500K | $2.4M | $3.72M | $44.6M |

**Year 3 Vibe Coder Breakout Total Revenue: ~$31.8M**
**Exit MRR: ~$3.72M = $44.6M ARR run rate**

### Revised Three-Year Summary (All Four Scenarios)

#### Revenue Trajectory

| Year | Conservative | Realistic | Optimistic | Vibe Coder Breakout |
|------|-------------|-----------|-----------|-------------------|
| **Year 1** | $174K | $484K | $1.17M | **$1.56M** |
| **Year 2** | $1.5M | $4.8M | $10.4M | **$9.3M** |
| **Year 3** | $5.1M | $15.0M | $45.3M | **$31.8M** |
| **3-Year Total** | $6.8M | $20.3M | $56.9M | **$42.7M** |

#### Exit ARR Run Rate

| Year End | Conservative | Realistic | Optimistic | Vibe Coder Breakout |
|----------|-------------|-----------|-----------|-------------------|
| **Year 1** | $528K | $1.3M | $3.1M | **$3.9M** |
| **Year 2** | $2.6M | $8.2M | $16.8M | **$14.2M** |
| **Year 3** | $7.1M | $21.0M | $66.7M | **$44.6M** |

#### Revenue Composition (Year 2 End)

| | Conservative | Realistic | Optimistic | Vibe Coder Breakout |
|---|---|---|---|---|
| **Track A (individuals)** | 40% | 30% | 25% | **50%** |
| **Track B (teams + enterprise)** | 60% | 70% | 75% | **50%** |

The Vibe Coder Breakout scenario maintains a higher Track A percentage because Pro at $20/mo (and $16/mo annual) generates substantial individual revenue that compounds with viral growth. Track B is balanced because the vibe coder funnel also feeds team conversions (vibe coders who build real products eventually hire teams).

### Why Vibe Coder Breakout Is Between Optimistic and Realistic

The Vibe Coder Breakout doesn't exceed the Optimistic scenario because:

1. **Vibe coder churn is higher** (8-10% vs. 4-6%). They abandon projects, switch tools, or stop coding. Annual plans mitigate this but don't eliminate it entirely.
2. **Enterprise revenue is the same.** Floor Control and Surgical CI don't care whether the funnel entry was a vibe coder or a senior engineer. Enterprise ACV is the same in all scenarios.
3. **The Optimistic scenario already assumes some virality.** The Vibe Coder Breakout has MORE virality but concentrated in a segment with somewhat higher churn, so the net effect is similar total revenue with a different composition.
4. **Annual Pro captures more value per user** than a hypothetical Lite tier, but the total addressable conversions are slightly lower (some price-sensitive users who would have paid $9/mo don't convert at $20/mo or $172/year).

The key insight: **Vibe Coder Breakout produces similar total revenue to Optimistic through a fundamentally different mechanism.** Optimistic gets there via high Pro conversion + fast enterprise. Vibe Coder Breakout gets there via massive viral volume + annual Pro lock-in + higher ARPU per individual. The outcomes converge at ~$3-4M exit ARR in Year 1 and ~$14-17M in Year 2.

### Probability Assessment

| Scenario | Probability | What Must Happen |
|----------|------------|-----------------|
| **Conservative** | 20-25% | Health grade doesn't resonate. Slow grind. No viral moment. |
| **Realistic** | 35-40% | Steady developer adoption. Good tool, not cultural artifact. |
| **Optimistic** | 15-20% | Viral health grade + fast enterprise + successful raise |
| **Vibe Coder Breakout** | 15-20% | Health grade becomes cultural artifact among vibe coders specifically. Annual Pro captures impulse conversions. Viral K-factor >0.3. |
| **Combined "upside" (Optimistic OR Vibe Coder)** | **25-35%** | Either path produces ~$3-4M ARR exit in Year 1. Different mechanisms, similar outcomes. |

**The most likely outcome is between Realistic and one of the upside scenarios.** The exact path (developer-tool growth vs. vibe coder viral) will be determined in the first 4-6 weeks post-launch by whether the health grade goes viral.

### What to Optimize for the Vibe Coder Breakout

These are the specific product and GTM decisions that push toward the Vibe Coder Breakout scenario:

**1. Health grade must be shareable in one click.**
Generate a card/image with the grade, top 3 issues, entity count, and a "check YOUR repo" link. This is the viral artifact. It must be screenshot-ready and embed-friendly (Open Graph tags, Twitter Card).

**2. Landing page speaks vibe coder, not developer.**
"Your AI built it. Will it survive?" not "Code intelligence platform for engineering teams." The enterprise messaging lives on a separate /enterprise page. The homepage is emotional, not technical.

**3. Tranche 1 must work without CLI or terminal.**
Connect GitHub -> see grade. No `npx`, no command line, no MCP configuration. Vibe coders live in the browser and the IDE. The CLI is Tranche 2 for developers. Tranche 1 is the consumer-style hook.

**4. Annual Pro pricing as the impulse capture.**
The $172/year ($16/mo effective) annual plan is the conversion unlock. Frame it as "less than $15/month" or "$172 for the whole year." The annual commitment eliminates monthly churn anxiety and feels like a one-time purchase. Prominent "Save 20%" badge on pricing page. Default the toggle to annual billing.

**5. Build the comparison/competition dynamic.**
"What grade does YOUR framework's example repo get?" / "React vs. Vue vs. Svelte health grade comparison" / "I improved my grade from C+ to A in one weekend." Leaderboards and trends make the grade sticky.

**6. Target non-developer AI users explicitly.**
50%+ of Claude Code usage at Epic is non-developers. Designers, PMs, and founders are building with Cursor. They're the most vulnerable to the complexity wall and the least equipped to diagnose it. The health grade is PERFECT for them — it translates code quality into a letter grade they understand.

---

## What Drives Each Scenario

### Optimistic Triggers (all must hit)

1. Health grade goes viral in Month 1-2 (developers sharing screenshots, comparison threads)
2. HN front page at launch -> 500+ upvotes -> "this caught real issues on my repo"
3. Seed raise ($1-2M) by Month 9-10 -> hire 3-5 people
4. Floor Control adopted by 5+ enterprise accounts within 3 months of launch
5. OSS Guardian reaches 500+ active repos in Year 1 -> constant inbound
6. Series A ($10-15M) by end of Year 2 -> scale to 20+ people

### Realistic Triggers (most must hit)

1. Health grade gets attention but doesn't become a cultural artifact — "useful tool" not "must-have ritual"
2. HN launch gets traction but not front page — steady signups, not explosive
3. Possible small raise ($500K-$1M) by Month 12 -> hire 1-2 people
4. Enterprise deals come but slowly (2-4 month sales cycles)
5. Adjacencies increase conversion but don't create new viral moments
6. Category defined but not dominated — unerr is "one of the leaders," not "the leader"

### Conservative Triggers (if these happen)

1. Health grade is interesting but nobody shares it — "checked it once, didn't come back"
2. MCP value is subtle — developers can't articulate why their agent is better
3. No funding — bootstrapped entire Year 1, limited by solo founder bandwidth
4. Enterprise deals take 6+ months to close
5. Greptile ships a competing graph product in Q3 2027, splitting the market
6. AI model improvements reduce perceived need for external intelligence layer

---

## Comparison Against Benchmarks

| Company | Revenue at Year 1 | Revenue at Year 2 | Revenue at Year 3 | Notes |
|---------|-------------------|-------------------|-------------------|-------|
| **Cursor** | ~$300M | ~$2B+ | N/A (too recent) | Outlier. AI IDE with instant visceral value. Not comparable for revenue, but comparable for vibe coder adoption dynamics. |
| **Lovable** | ~$50-100M (est.) | ~$200M+ | ~$500M+ (projected) | Non-technical builders. Consumer-style PLG. Closest comparable for vibe coder viral dynamics. |
| **CodeRabbit** | ~$3-5M | ~$15M+ | ~$40-60M (projected) | PLG + OSS-first. Most comparable for developer growth pattern. |
| **Snyk** | ~$1-2M | ~$7-10M | ~$30M | Developer-first PLG -> enterprise. Similar bottom-up motion. |
| **Linear** | ~$1M | ~$5-8M | ~$20M+ | Design-driven PLG in dev tools. |
| **Sentry** | ~$1-2M | ~$5-8M | ~$15-25M | Developer word-of-mouth. PLG scaling. |
| **SonarQube Cloud** | ~$500K | ~$2-3M | ~$8-10M | Code quality. Slower growth, enterprise-heavy. |
| **unerr (realistic)** | **~$484K** | **~$4.8M** | **~$15M** | Between Snyk and CodeRabbit trajectories |
| **unerr (vibe coder breakout)** | **~$1.56M** | **~$9.3M** | **~$31.8M** | Between CodeRabbit and Lovable trajectories |

**unerr's realistic trajectory tracks closest to Snyk's early years** — developer-first PLG with enterprise upsell, accelerated by a regulatory forcing function (Snyk had GDPR/SOC2; unerr has EU AI Act).

**unerr's vibe coder breakout trajectory tracks closest to CodeRabbit's growth curve** ($0 -> $15M ARR in ~2 years) with a higher ARPU individual base: Pro at $20/mo (or $16/mo annual) vs. CodeRabbit's $15-24/user/mo team pricing. The viral health grade drives volume where CodeRabbit relies on team adoption.

**Neither trajectory matches Lovable** ($200M ARR in ~1 year) because Lovable created a new ability (non-technical people can build apps) while unerr diagnoses an existing problem (your AI code might be broken). Creating ability has more explosive adoption than diagnosing problems. However, if the health grade becomes a cultural ritual among the 2-5M vibe coders, the ceiling is much higher than the model predicts — Lovable proved that non-technical AI tool adoption can be orders of magnitude faster than developer tool adoption.

---

## Revenue Per Adjacency (Year 2 Realistic)

| Product | Revenue Contribution | % of Total | Buyer |
|---------|---------------------|-----------|-------|
| **Core (health grade, MCP, ledger)** | $1.6M | 33% | Track A individuals + Track B entry |
| **Primitives** | $900K | 19% | Track A conversion boost + Track B canonical enforcement |
| **Surgical CI (L1+L2)** | $1.2M | 25% | Track B enterprise (quantifiable ROI) |
| **Floor Control** | $800K | 17% | Track B enterprise (highest ACV, newest product) |
| **Collision Detection** | $300K | 6% | Track B teams (bundled with Startup plan) |
| **Total Year 2** | **$4.8M** | 100% | |

**Core remains the largest single revenue driver** even in Year 2, because it's the acquisition funnel for everything else. But the adjacencies collectively contribute 67% of revenue — validating the multi-product strategy.

---

## Key Milestones and Decision Points

| Milestone | Optimistic | Realistic | Conservative | Decision If Missed |
|-----------|-----------|-----------|-------------|-------------------|
| **$10K MRR** | Month 4 | Month 5 | Month 8 | If not by Month 9: serious product-market fit problem. Pivot positioning. |
| **$50K MRR** | Month 6 | Month 9 | Month 13 | If not by Month 14: adjacencies not working. Focus on core only. |
| **$83K MRR ($1M ARR)** | Month 7 | Month 11 | Month 16 | If not by Month 18: consider raising to accelerate or pivoting GTM. |
| **$250K MRR ($3M ARR)** | Month 13 | Month 17 | Month 24 | If hit: Series A territory. Raise to scale. |
| **$500K MRR ($6M ARR)** | Month 17 | Month 22 | Month 30 | If hit: Category leader. Strong Series A/B position. |
| **$1M MRR ($12M ARR)** | Month 20 | Month 28 | 36+ | If hit: On track for $50M+ ARR company. |

---

## Bootstrapped vs. Funded: The Strategic Choice

### Why unerr's Cost Structure Favors Bootstrapping

unerr has a fundamentally different cost structure from most AI-powered tools. This makes bootstrapping viable in ways it isn't for competitors:

| | Lovable | Cursor | CodeRabbit | unerr |
|---|---|---|---|---|
| **Marginal cost per user action** | High (LLM call per generation) | High (LLM call per autocomplete) | Medium (LLM call per PR review) | **Near-zero** (graph query, no LLM) |
| **Expensive operation** | Every generation | Every keystroke session | Every PR | **Once per repo per index run** |
| **Gross margin** | 40-60% | 50-70% | 60-70% | **80-90%** |
| **Breakeven user count** | Tens of thousands | Thousands | Thousands | **~300-400 paying users** |
| **VC required for scale** | Yes (infra costs precede revenue) | Yes (model costs at scale) | Debatable | **No** |

The reason: unerr's expensive operations (SCIP indexing, LLM justification, health report synthesis) run **once per repo per indexing run**. After that, the 36 MCP tool calls are cheap graph queries against ArangoDB — near-zero marginal cost. The health grade synthesis is one LLM call per repo (~$0.003).

### Actual Cost Model

**unerr's cost structure is fundamentally different from Cursor/Claude/Lovable.** The expensive work (LLM-powered business justification, Atlas generation, health synthesis) runs ONCE at indexing time. After that, 90% of ongoing value (50+ MCP tool calls, blast radius, health grades, convention checks, context injection) is near-zero-cost graph queries against ArangoDB. Atlas Ask (chat with codebase) runs on self-hosted Ollama at fixed cost.

**Monthly infrastructure costs at scale:**

| Users | Repos indexed/mo | Core Infra (ArangoDB/Supabase/Redis/Temporal) | LLM costs (Bedrock — indexing only) | Self-hosted Ollama (Atlas Ask + Suggest) | Modal GPU (embeddings) | Total infra | As % of MRR |
|-------|-----------------|----------------------------------------------|-------------------------------------|----------------------------------------|----------------------|-------------|-------------|
| 500 | 200 | $250 | $30 | $15 (1 VPS) | $35 | **$330/mo** | 5-6% of ~$6K MRR |
| 2,000 | 800 | $500 | $120 | $35 (1 mid VPS) | $65 | **$720/mo** | 3-4% of ~$25K MRR |
| 10,000 | 3,000 | $1,200 | $450 | $70 (2 instances) | $180 | **$1,900/mo** | 1-2% of ~$110K MRR |
| 50,000 | 10,000 | $2,800 | $1,500 | $150 (GPU VPS) | $500 | **$4,950/mo** | <1% of ~$500K MRR |

**Why Atlas Ask on self-hosted Ollama works:**
- The LLM narrates pre-computed graph context — it doesn't reason from scratch. A 4B-8B model handles this well.
- Graph-stuffed single-turn queries keep context under 4K tokens. The graph is the memory, not the LLM.
- Streaming response (20 tokens/sec on CPU) is acceptable for a "deep analysis" feature — users expect 3-5s wait.
- At 10,000 users doing 50 queries/month = ~1.7 queries/minute avg. A single mid VPS handles this.
- Fixed cost ($15-70/mo) vs. Bedrock per-query cost ($400-2,500/mo at scale). 10-50x cheaper.

**LLM costs are <2% of revenue at every scale.** This is the structural advantage over Lovable (40-60% LLM cost) and Cursor (30-50% model cost). unerr front-loads expensive computation at indexing and amortizes it across thousands of near-zero-cost graph queries. Atlas Ask is the only per-query LLM feature, and self-hosting removes it as a cost concern entirely.

### Bootstrapped Path: Month-by-Month Cash Flow

**Personal costs assumption:** $3,000-5,000/mo (adjust for your location/situation)

#### Vibe Coder Breakout (Bootstrapped)

| Month | MRR | Infra Cost | Personal Cost | Monthly Profit | Cumulative Cash |
|-------|-----|-----------|--------------|----------------|----------------|
| **May** (launch) | $0 | $200 | $4,000 | -$4,200 | -$4,200 |
| **Jun** | $2,090 | $250 | $4,000 | -$2,160 | -$6,360 |
| **Jul** | $9,400 | $400 | $4,000 | +$5,000 | -$1,360 |
| **Aug** | $27,100 | $600 | $4,000 | **+$22,500** | +$21,140 |
| **Sep** | $53,550 | $900 | $4,000 | +$48,650 | +$69,790 |
| **Oct** | $89,200 | $1,300 | $5,000 | +$82,900 | +$152,690 |
| **Nov** | $123,700 | $1,600 | $5,000 | +$117,100 | +$269,790 |
| **Dec** | $170,000 | $2,000 | $5,000 | +$163,000 | +$432,790 |
| **Jan 27** | $213,300 | $2,200 | $5,000 | +$206,100 | +$638,890 |
| **Feb 27** | $252,000 | $2,500 | $5,000 | +$244,500 | +$883,390 |
| **Mar 27** | $291,700 | $2,700 | $5,000 | +$284,000 | +$1,167,390 |
| **Apr 27** | $326,800 | $3,000 | $5,000 | +$318,800 | +$1,486,190 |

**Year 1 bootstrapped profit (Vibe Coder Breakout): ~$1.49M**
**Cash flow positive: Month 3 (July)**
**Personal runway needed: ~$6K** (only 2 months of negative cash flow)

#### Realistic Scenario (Bootstrapped)

| Month | MRR | Infra Cost | Personal Cost | Monthly Profit | Cumulative Cash |
|-------|-----|-----------|--------------|----------------|----------------|
| **May** | $0 | $200 | $4,000 | -$4,200 | -$4,200 |
| **Jun** | $900 | $200 | $4,000 | -$3,300 | -$7,500 |
| **Jul** | $2,350 | $300 | $4,000 | -$1,950 | -$9,450 |
| **Aug** | $6,200 | $350 | $4,000 | +$1,850 | -$7,600 |
| **Sep** | $13,200 | $500 | $4,000 | +$8,700 | +$1,100 |
| **Oct** | $25,050 | $750 | $4,500 | +$19,800 | +$20,900 |
| **Nov** | $38,500 | $1,000 | $4,500 | +$33,000 | +$53,900 |
| **Dec** | $51,950 | $1,200 | $4,500 | +$46,250 | +$100,150 |
| **Jan 27** | $65,400 | $1,400 | $5,000 | +$59,000 | +$159,150 |
| **Feb 27** | $79,250 | $1,600 | $5,000 | +$72,650 | +$231,800 |
| **Mar 27** | $92,300 | $1,800 | $5,000 | +$85,500 | +$317,300 |
| **Apr 27** | $108,750 | $2,000 | $5,000 | +$101,750 | +$419,050 |

**Year 1 bootstrapped profit (Realistic): ~$419K**
**Cash flow positive: Month 5 (September)**
**Personal runway needed: ~$10K** (3-4 months of negative cash flow)

### When Hiring Makes Sense (Bootstrapped)

Revenue funds headcount — no VC dilution required.

| MRR Milestone | What It Funds | Who to Hire | Why |
|---------------|-------------|-------------|-----|
| **$15K** | Part-time contractor ($3-4K/mo) | Content writer / dev advocate | Frees founder from blog/social. Amplifies OSS Guardian outreach. |
| **$40K** | Full-time hire #1 ($6-8K/mo) | Growth engineer | Automates marketing funnels, optimizes conversion, runs experiments. Not a salesperson — an engineer who builds growth. |
| **$80K** | Full-time hire #2 ($6-8K/mo) | Backend engineer | Takes over infrastructure, scaling, bug fixes. Frees founder to focus on adjacencies and enterprise conversations. |
| **$150K** | First enterprise-focused hire ($8-10K/mo) | Solutions engineer / technical sales | Handles enterprise demos, pilots, and deal support. Only when enterprise pipeline is consistent enough to justify the cost. |
| **$250K+** | Small team (4-5 people) | Hire based on bottleneck analysis | At this point you have real data on what's limiting growth. Hire for the actual bottleneck, not the assumed one. |

**In the Vibe Coder Breakout scenario:**
- Month 5 ($54K MRR): Hire content contractor + growth engineer
- Month 7 ($123K MRR): Hire backend engineer
- Month 9 ($213K MRR): Consider enterprise sales hire
- Month 12 ($327K MRR): Small team of 4-5 — OR stay lean and let Track A compound

**In the Realistic scenario:**
- Month 7 ($38K MRR): Hire content contractor
- Month 10 ($79K MRR): Hire growth engineer
- Month 12-13 (~$109K MRR): Hire backend engineer
- Enterprise hire only when enterprise MRR independently justifies the cost

### Why VC Pressure Can Hurt the Growth Motion

This is a critical strategic insight. VCs optimize for metrics that can conflict with the PLG growth engine:

| What VCs Push For | Why It Can Hurt |
|-------------------|----------------|
| "Focus on enterprise ACV" | Enterprise deals take 3-6 months. Vibe coders convert in minutes. Shifting focus to enterprise starves the acquisition funnel. |
| "Hire a sales team now" | Sales headcount increases burn without proportional Track A growth. Vibe coders don't need salespeople. |
| "Show 3x YoY growth" | Pressure to grow at all costs leads to discounting, aggressive enterprise sales, and neglecting the PLG loop. |
| "Board meeting prep" | 2-3 days per month spent on investor updates instead of building product or writing content. |
| "Move upmarket faster" | Abandoning the $20/mo Pro base that feeds the viral funnel for enterprise-only focus. |

Bootstrapping preserves the freedom to optimize for what actually drives growth: the health grade viral loop, the annual Pro conversion, and the content flywheel. No board telling you to "move upmarket." No investors asking "what's your enterprise pipeline this quarter?"

### The Decision Framework: Bootstrap vs. Raise

| If by Month 12... | Bootstrap | Raise | Why |
|-------------------|-----------|-------|-----|
| **MRR > $250K** | **Stay bootstrapped. You're printing money.** $250K MRR = $3M ARR at 85% margin = ~$2.5M annual profit. Hire from revenue. | Only raise if Floor Control opportunity is SO large that solo speed can't capture it. | At $250K MRR you have 100% ownership of a profitable, growing business. VC dilution (20-30%) costs you $750K-$900K/yr in lost profit. The math doesn't favor raising. |
| **MRR $100-250K** | **Preferred. Hire 2-3 from revenue.** | Consider a small angel round ($250K-$500K) only if a specific hire would 3x growth. | The business is working. Adding VC money adds pressure without proportional acceleration at this stage. |
| **MRR $40-100K** | **Default choice. Optimize before scaling.** | Only if personal runway is exhausted AND metrics show clear growth trajectory. | Adding people to a $40K MRR business doesn't make it a $150K MRR business. Product-market fit optimization does. |
| **MRR < $40K** | Bootstrap requires pivoting the positioning. | Small angel round ($100K-$250K) buys 6 more months to find the hook. | Something isn't working. Money doesn't fix product-market fit — it buys time to iterate. |

### The Lovable Comparison: Same Motion, Better Economics

Lovable raised $330M at $6.6B valuation because their cost structure REQUIRES capital — every user generation is an LLM call + hosting. unerr's cost structure does NOT require capital:

| | Lovable | unerr |
|---|---|---|
| **Revenue at scale** | $200M+ ARR | $3-14M ARR (Year 2, scenario-dependent) |
| **Infra cost at scale** | 40-60% of revenue ($80-120M/yr) | 2-3% of revenue ($90K-$420K/yr) |
| **Gross profit at scale** | $80-120M/yr | $2.4-12M/yr |
| **Team required** | 100+ (raised $330M to fund) | **3-5 people** (funded from revenue) |
| **VC required?** | Yes (infra costs exceed revenue in early months) | **No** (cash flow positive by Month 3-5) |
| **Ownership retained** | ~30-40% (after multiple rounds) | **100%** (bootstrapped) |

The insight: **you can replicate Lovable's adoption MOTION (consumer-style viral, emotional trigger, instant value) without replicating their cost STRUCTURE (high marginal LLM cost, capital-intensive scaling).** Lovable's motion on unerr's economics is the ideal bootstrapping scenario.

### What "Replicating Lovable's Motion" Means Specifically

It does NOT mean matching Lovable's revenue ($200M ARR). It means matching their **adoption dynamics**:

1. **Instant visible value** — Lovable: "I built this in 5 minutes." unerr: "My repo is C+ with 23 dead functions." Both create immediate emotional response.
2. **Non-technical accessibility** — Lovable: describe an app, see it built. unerr: connect GitHub, see a grade. Both require zero technical skill to try.
3. **Social sharing as marketing** — Lovable: "look what I built" screenshots. unerr: "look at my grade" screenshots. Both produce viral artifacts.
4. **Impulse conversion** — Lovable: "I want to keep building" -> pays. unerr: "I need to fix this" -> pays $20/mo or $172/year. Both trigger immediate purchase decisions.
5. **Community/comparison dynamics** — Lovable: "who built the best app this week?" unerr: "what grade does YOUR repo get?" Both create social engagement loops.

At unerr's cost structure, even capturing **1% of Lovable's adoption velocity** produces a profitable bootstrapped business:
- Lovable: ~500K users in Year 1 -> unerr at 1%: 5,000 users
- 5,000 users x 10% conversion x $18/mo blended ARPU = $9,000 MRR
- $9,000 MRR covers all costs for a solo founder
- Everything above this is profit and reinvestment

**The threshold for a viable bootstrapped business is remarkably low: ~400-500 paying users at $20/mo.** That's 0.01% of the 2-5M vibe coder market. The question isn't "can we get 500 paying users?" — it's "can we NOT get 500 paying users given a health grade that takes 60 seconds and costs $0 to try?"

---

## The Bottom Line

### Two Paths to the Same Destination

The revenue projections tell a clear story: **unerr reaches $7-21M ARR by Year 3 regardless of which growth mechanism dominates.** The path differs but the destination converges:

**Path 1 — Developer-Tool Growth (Realistic scenario):**
- Year 1: $484K revenue -> $1.3M ARR exit
- Year 2: $4.8M revenue -> $8.2M ARR exit (adjacencies kick in)
- Year 3: $15M revenue -> $21M ARR exit
- Growth engine: Professional developer word-of-mouth -> enterprise bottom-up
- Comparable to: Snyk, Sentry early trajectories

**Path 2 — Vibe Coder Breakout (4th scenario):**
- Year 1: $1.56M revenue -> $3.9M ARR exit
- Year 2: $9.3M revenue -> $14.2M ARR exit
- Year 3: $31.8M revenue -> $44.6M ARR exit
- Growth engine: Viral health grade -> Pro $20/mo + $172/year annual impulse -> enterprise bottom-up
- Comparable to: CodeRabbit growth curve, Lovable's audience dynamics

**You don't need to choose between them.** The product is the same. The graph is the same. The adjacencies are the same. The only difference is which audience activates first and how viral the health grade becomes. If vibe coders adopt faster, you're on Path 2 with 3x the Year 1 revenue. If professional developers adopt first, you're on Path 1 — still a strong business that reaches the same place by Year 3.

### The Annual Pro Pricing Is the Strategic Unlock

The annual Pro plan at $172/year ($16/mo effective) is the conversion bridge that captures both audiences:
- **For vibe coders**: $172/year feels like a one-time purchase, not a commitment. Loss aversion drives the click. Annual lock-in prevents churn.
- **For professional developers**: $16/mo effective is a no-brainer for a tool that makes their agent smarter. Monthly $20 also available for those who prefer flexibility.
- **For the business**: Annual plans provide cash upfront, reduce churn to near-zero until renewal, and increase LTV by 2-3x vs. monthly-only pricing.

### Four Scenarios, One Clear Signal

| | Year 1 Exit ARR | Year 3 Exit ARR | 3-Year Total | Probability |
|---|---|---|---|---|
| **Conservative** | $528K | $7.1M | $6.8M | 20-25% |
| **Realistic** | $1.3M | $21.0M | $20.3M | 35-40% |
| **Vibe Coder Breakout** | $3.9M | $44.6M | $42.7M | 15-20% |
| **Optimistic** | $3.1M | $66.7M | $56.9M | 15-20% |

**Expected value (probability-weighted):**
- Year 1: ($528K x 0.225) + ($1.3M x 0.375) + ($3.9M x 0.175) + ($3.1M x 0.175) = **~$1.83M**
- Year 3 exit ARR: ($7.1M x 0.225) + ($21M x 0.375) + ($44.6M x 0.175) + ($66.7M x 0.175) = **~$29.4M**
