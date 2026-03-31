"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ShimmerButton } from "@/components/marketing/shimmer-button"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"
import { AnimatedGridPattern } from "@/components/ui/magic/animated-grid"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const proofPoints = [
  { value: "50K+", label: "entities indexed" },
  { value: "13", label: "risk types" },
  { value: "< 60s", label: "first audit" },
]

export function FinalCta() {
  const prefersReducedMotion = useReducedMotion()
  const { open: openWaitlist } = useWaitlist()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={5}
        className="inset-0 h-full w-full mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
      />
      {/* Convergence glow — strongest on the page, draws the eye to CTA */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.09), transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.05), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={prefersReducedMotion ? undefined : fadeUp}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="font-grotesk text-3xl font-bold tracking-[-0.02em] text-lit sm:text-4xl">
          Your AI agents need <span className="text-gradient">architecture</span>.
          <br />
          Give them unerr.
        </h2>

        {/* Social proof echo — bookend callback to MetricsBar */}
        <div className="mx-auto mt-8 flex max-w-sm items-center justify-center">
          {proofPoints.map((p, i) => (
            <div
              key={p.label}
              className={`flex-1 text-center ${i > 0 ? "border-l border-border/15" : ""}`}
            >
              <div className="font-grotesk text-lg font-bold tabular-nums tracking-tight text-foreground">
                {p.value}
              </div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ShimmerButton onClick={() => openWaitlist("general")}>
            Get Started Free
          </ShimmerButton>
          <button
            type="button"
            onClick={() => openWaitlist("oss")}
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Protect an OSS Project
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground/60">
          Free for 7 days &middot; No credit card &middot; Setup in 60 seconds
        </p>
      </motion.div>

      {/* Bottom fade — dissolves CTA glow into footer */}
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
