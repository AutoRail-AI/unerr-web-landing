"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, Check, Github } from "lucide-react"
import Link from "next/link"
import { ShimmerButton } from "@/components/marketing/shimmer-button"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const proFeatures = [
  "Full knowledge graph",
  "Blast radius analysis",
  "MCP server integration",
  "13-type health audit",
  "Architectural rules",
  "Prompt ledger & rewind",
  "AI PR review",
  "Unlimited private repos",
]

const ossFeatures = [
  "Full knowledge graph",
  "Health audit & grades",
  "MCP server integration",
  "AI PR review",
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

export function PricingPreview() {
  const prefersReducedMotion = useReducedMotion()
  const { open: openWaitlist } = useWaitlist()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="text-center"
        >
          <h2 className="font-grotesk text-2xl font-bold tracking-[-0.02em] text-lit sm:text-3xl">
            Infrastructure-grade. Developer-priced.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Free forever for open source. One simple plan for everything else.
          </p>
        </motion.div>

        {/* Two-card grid */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {/* OSS Card */}
          <motion.div
            variants={staggerChild}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(139,92,246,0.04) 0%, transparent 50%)",
            }}
          >
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                OSS Guardian
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-grotesk text-4xl font-bold tracking-tight text-foreground">
                $0
              </span>
              <span className="text-sm text-muted-foreground">/ forever</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full unerr Pro for verified open-source projects. Because maintainers
              deserve a tech lead, not another AI bot.
            </p>

            <div className="mt-6 space-y-2.5">
              {ossFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => openWaitlist("oss")}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              Protect Your Project
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* Pro Card */}
          <motion.div
            variants={staggerChild}
            className="relative overflow-hidden rounded-2xl border border-accent/20 bg-card p-8"
          >
            <BorderBeam duration={13} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />

            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Pro
            </span>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-grotesk text-4xl font-bold tracking-tight text-foreground">
                $20
              </span>
              <span className="text-sm text-muted-foreground">/ month</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Everything you need for safe AI velocity on private codebases.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {proFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <ShimmerButton
              onClick={() => openWaitlist("general")}
              className="mt-8 flex h-10 w-full justify-center"
            >
              Get Started Free &mdash; 7 day trial
            </ShimmerButton>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Teams from $45/mo (3 seats &times; $15) &middot;{" "}
              <Link href="/pricing" className="text-accent hover:text-accent/80">
                See all plans &rarr;
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
