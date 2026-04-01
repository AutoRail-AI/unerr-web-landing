"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { GitPullRequest, type LucideIcon, Network, Plug, Rewind, Scale, ScrollText, Shield, Users } from "lucide-react"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const features: { icon: LucideIcon; name: string; detail: string }[] = [
  {
    icon: Network,
    name: "Knowledge Graph",
    detail: "50K+ entities indexed per repo. Every file, function, class, and relationship — mapped.",
  },
  {
    icon: Shield,
    name: "Health Audit",
    detail: "13-type risk analysis with letter grades. Dead code, coupling, drift — all detected.",
  },
  {
    icon: GitPullRequest,
    name: "PR Review",
    detail: "Blast radius on every pull request. Downstream impact flagged before merge.",
  },
  {
    icon: Scale,
    name: "Rules Engine",
    detail: "Architectural rules auto-detected from commit history and enforced on every change.",
  },
  {
    icon: Rewind,
    name: "Prompt Ledger",
    detail: "Every AI decision recorded. Full chain of what changed and why. Rewind to any point.",
  },
  {
    icon: Plug,
    name: "MCP Server",
    detail: "AI agents read your graph in real-time. Any MCP client. Full context at localhost:9315.",
  },
  {
    icon: ScrollText,
    name: "Knowledge Sync",
    detail: "Docs validated against live code. Stale references flagged automatically.",
  },
  {
    icon: Users,
    name: "Unlimited",
    detail: "No seat limits. No repo caps. Every contributor gets full access. Forever.",
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
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

export function FeatureList() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.05), transparent 65%)",
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
          <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">What you get</p>
          <h2 className="font-grotesk text-lit mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            Full Pro. No catch.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md text-sm">
            Everything paid teams get. Zero cost for open source.
          </p>
        </motion.div>

        {/* Bento card grid */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.name}
                variants={staggerChild}
                className="border-border/60 bg-card hover:border-border rounded-xl border p-5 transition-all duration-200"
              >
                <div className="bg-accent/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="text-accent h-5 w-5" />
                </div>
                <h3 className="font-grotesk text-foreground mt-4 text-sm font-semibold">{f.name}</h3>
                <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed">{f.detail}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Qualification callout */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="border-accent/15 bg-card relative mt-12 max-w-md overflow-hidden rounded-xl border px-6 py-4"
        >
          <BorderBeam duration={16} size={150} colorFrom="#8B5CF6" colorTo="#7C3AED" />
          <p className="text-accent/60 text-[11px] font-semibold tracking-[0.08em] uppercase">How to qualify</p>
          <p className="text-foreground mt-1 text-sm">Public GitHub repository. That&apos;s it.</p>
          <p className="text-muted-foreground mt-0.5 text-xs">
            No application form. No star count. No corporate check.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
