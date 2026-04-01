"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { AlertTriangle, FileWarning, GitPullRequest, ShieldAlert } from "lucide-react"

const pairs = [
  {
    icon: GitPullRequest,
    pain: "We spend more time reviewing AI PRs than writing code.",
    solution:
      "PR review checks every change against the knowledge graph. Blast radius, rule violations, and downstream impact — flagged before you even see the PR.",
  },
  {
    icon: ShieldAlert,
    pain: "Contributors ignore our architecture and conventions.",
    solution:
      "Architectural rules are auto-detected from your commit history and enforced on every contribution. AI agents read them via MCP before writing a single line.",
  },
  {
    icon: AlertTriangle,
    pain: "We can't tell if a PR was AI-generated or just bad.",
    solution:
      "The prompt ledger traces every AI decision. Full chain: what the agent was told, what it changed, and why. Rewind to any point.",
  },
  {
    icon: FileWarning,
    pain: "Our docs are stale and AI agents hallucinate from them.",
    solution:
      "Knowledge sync validates docs against live code. Stale references are flagged automatically. AI agents get verified context, not outdated wikis.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function PainSolution() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.04), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Left-aligned heading */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
        >
          <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">How unerr helps</p>
          <h2 className="font-grotesk text-lit mt-3 max-w-lg text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            The architectural immune system
            <br className="hidden sm:block" />
            your project has been missing.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md text-sm">Real maintainer pain. Engineered solutions.</p>
        </motion.div>

        {/* Pain/Solution cards — 2-col on desktop */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {pairs.map((pair, i) => {
            const Icon = pair.icon
            return (
              <motion.div
                key={i}
                variants={staggerChild}
                className="border-border bg-card hover:border-accent/15 rounded-xl border p-6 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="text-destructive/70 h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-destructive/50 text-[10px] font-semibold tracking-[0.12em] uppercase">
                      The Pain
                    </p>
                    <p className="text-foreground mt-1 text-sm leading-snug font-semibold">&ldquo;{pair.pain}&rdquo;</p>
                  </div>
                </div>
                <div className="border-border/50 mt-4 border-t pt-4">
                  <p className="text-accent/50 text-[10px] font-semibold tracking-[0.12em] uppercase">The Fix</p>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{pair.solution}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
