"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"

const crises = [
  {
    project: "curl",
    year: "2024",
    event: "Shut down AI bug bounties",
    quote: "AI-generated vulnerability reports were wasting maintainer time with hallucinated CVEs.",
  },
  {
    project: "Ghostty",
    year: "2025",
    event: "Banned AI-generated PRs",
    quote: "Contributors submitting AI-generated code that broke builds and ignored project conventions.",
  },
  {
    project: "tldraw",
    year: "2025",
    event: "Auto-closes all bot PRs",
    quote: "Flood of low-quality PRs that passed linting but violated architectural patterns.",
  },
  {
    project: "Godot",
    year: "2025",
    event: "Restricted external contributions",
    quote: "Maintainers spending more time reviewing AI slop than writing code.",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function CrisisCards() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Subtle atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.03), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section header — left-aligned on desktop */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="mb-12"
        >
          <p className="text-destructive/50 text-[10px] font-semibold tracking-[0.12em] uppercase">The Crisis</p>
          <h2 className="font-grotesk text-lit mt-3 max-w-lg text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            These projects didn&apos;t reject AI.
            <br className="hidden sm:block" />
            They rejected <span className="text-destructive/70">unsupervised</span> AI.
          </h2>
        </motion.div>

        {/* Crisis grid */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {crises.map((c) => (
            <motion.div
              key={c.project}
              variants={staggerChild}
              className="border-destructive/10 bg-card hover:border-destructive/25 rounded-xl border p-6 transition-all duration-200 hover:shadow-[0_4px_24px_-4px_rgba(239,68,68,0.06)]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-grotesk text-foreground text-base font-semibold">{c.project}</h3>
                <span className="text-muted-foreground/30 font-mono text-[10px]">{c.year}</span>
              </div>
              <p className="text-destructive/70 mt-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase">
                {c.event}
              </p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.quote}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Evidence block */}
        <motion.blockquote
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="text-muted-foreground mt-14 max-w-2xl text-sm leading-relaxed italic"
        >
          &ldquo;AI co-authored code contains 1.7&times; more major issues, 75% more misconfigurations, and 2.74&times;
          higher security vulnerabilities.&rdquo;
          <span className="text-muted-foreground/40 mt-2 block text-[11px] font-medium tracking-[0.08em] uppercase not-italic">
            Analysis of 470 open-source GitHub PRs
          </span>
        </motion.blockquote>
      </div>
    </section>
  )
}
