"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ShimmerButton } from "@/components/marketing/shimmer-button"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Product Abstract: Simplified Health Panel ── */

const topIssues = [
  { label: "Coupling Hotspots", severity: "medium", count: 3, detail: "High fan-in on UserService, AuthMiddleware" },
  { label: "Dead Code Paths", severity: "low", count: 2, detail: "Unused exports in utils/legacy.ts" },
  { label: "Stale Documentation", severity: "low", count: 1, detail: "README references deprecated v2 API" },
]

const SEV_COLORS: Record<string, string> = {
  high: "#EF4444",
  medium: "#F59E0B",
  low: "#22C55E",
}

function ProductAbstract() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-border-strong bg-card overflow-hidden rounded-xl border"
      style={{
        boxShadow: "0 25px 60px -12px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,246,0.04), 0 0 0 1px rgba(139,92,246,0.06)",
      }}
    >
      {/* Window chrome — matches landing page HeroProductPreview */}
      <div className="border-border flex items-center gap-1.5 border-b px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="text-muted-foreground ml-2 font-mono text-[11px] tracking-widest uppercase">unerr</span>
      </div>

      {/* Repo bar */}
      <div className="border-border flex items-center gap-2.5 border-b px-4 py-2">
        <span className="text-muted-foreground/50 font-mono text-xs">repo:</span>
        <span className="text-foreground font-mono text-xs">facebook/react</span>
        <span className="text-muted-foreground/30 ml-auto text-[10px]">Updated just now</span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Grade headline */}
        <div className="flex items-start gap-4">
          <div
            className="font-grotesk flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-bold"
            style={{
              backgroundColor: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            A
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="font-grotesk text-foreground text-sm font-semibold">
              92 / 100
              <span className="text-muted-foreground ml-1.5 text-xs font-normal">— Excellent</span>
            </div>
            <div className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
              Clean architecture with minor coupling concerns. Your AI agents will have strong context for safe
              contributions.
            </div>
          </div>
        </div>

        {/* Score bar */}
        <div className="mt-3">
          <div className="bg-muted h-1 overflow-hidden rounded-full">
            <div className="bg-success h-full rounded-full" style={{ width: "92%" }} />
          </div>
        </div>

        {/* Top Issues */}
        <div className="mt-5">
          <div className="text-muted-foreground text-[10px] font-semibold tracking-[0.12em] uppercase">
            Top Issues Your AI Will Hit
          </div>
          <div className="mt-3 space-y-2">
            {topIssues.map((issue) => (
              <div key={issue.label} className="border-border/50 rounded-lg border px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: SEV_COLORS[issue.severity] }}
                  />
                  <span className="text-foreground flex-1 truncate text-xs font-medium">{issue.label}</span>
                  <span
                    className="shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px]"
                    style={{
                      color: SEV_COLORS[issue.severity],
                      backgroundColor: `${SEV_COLORS[issue.severity]}10`,
                    }}
                  >
                    {issue.count} found
                  </span>
                </div>
                <div className="text-muted-foreground mt-1 pl-4 text-[11px] leading-relaxed">{issue.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats footer */}
        <div className="border-border/50 text-muted-foreground/50 mt-4 flex items-center gap-1.5 border-t pt-3 font-mono text-[10px]">
          <span>12,847 entities</span>
          <span>&middot;</span>
          <span>823 files</span>
          <span>&middot;</span>
          <span>3 risks detected</span>
        </div>
      </div>
    </motion.div>
  )
}

export function OssHero() {
  const prefersReducedMotion = useReducedMotion()
  const { open: openWaitlist } = useWaitlist()
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Layer 1 — faint dot grid (matches landing page hero) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      {/* Layer 2 — structural line grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      {/* Layer 3 — radial violet glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 28%, rgba(139,92,246,0.06), transparent 55%), radial-gradient(ellipse at 50% 72%, rgba(139,92,246,0.04), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text block — left-aligned on desktop, centered on mobile */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={prefersReducedMotion ? undefined : staggerContainer}
            className="flex flex-col items-center lg:items-start lg:pt-8"
          >
            {/* Badge */}
            <motion.div
              variants={staggerChild}
              className="border-accent/20 bg-accent/5 text-accent inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            >
              OSS Guardian Program
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerChild}
              className="font-grotesk text-lit mt-8 max-w-xl text-center text-3xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-left lg:text-5xl"
            >
              The virtual <span className="text-gradient">tech lead</span>
              <br className="hidden sm:block" />
              your project deserves.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground mt-6 max-w-lg text-center text-base leading-relaxed md:text-lg lg:text-left"
            >
              Full knowledge graph. PR review. Health grades. MCP integration. Free for every verified open-source
              project. Forever.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={staggerChild} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <ShimmerButton onClick={() => openWaitlist("oss")}>Protect Your Project</ShimmerButton>
              <a
                href="#audit"
                className="border-border text-foreground hover:border-accent/30 hover:bg-muted focus-visible:ring-accent focus-visible:ring-offset-background inline-flex h-11 items-center gap-1.5 rounded-full border px-6 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Run a Free Audit First
                <span aria-hidden="true">&darr;</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Product Abstract — full-height health panel */}
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <ProductAbstract />
          </div>
        </div>
      </div>

      {/* Bottom bleed */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
