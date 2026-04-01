"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ShimmerButton } from "@/components/marketing/shimmer-button"
import { AnimatedGridPattern } from "@/components/ui/magic/animated-grid"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const proofPoints = [
  { value: "8", label: "Pro features" },
  { value: "\u221E", label: "repos & seats" },
  { value: "$0", label: "forever" },
]

export function OssFinalCta() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={5}
        className="inset-0 h-full w-full mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
      />
      {/* Convergence glow — atmospheric apex matching hero */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.08), transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.04), transparent 45%)",
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
        <h2 className="font-grotesk text-lit text-2xl font-bold tracking-[-0.02em] sm:text-3xl md:text-4xl">
          Your project deserves an
          <br />
          architectural <span className="text-gradient">immune system</span>.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">Protect it — for free, forever.</p>

        {/* Proof strip echo */}
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center">
          {proofPoints.map((p, i) => (
            <div key={p.label} className={`flex-1 text-center ${i > 0 ? "border-border/15 border-l" : ""}`}>
              <div className="font-grotesk text-foreground text-lg font-bold tracking-tight tabular-nums">
                {p.value}
              </div>
              <div className="text-muted-foreground mt-0.5 text-[10px] font-medium tracking-[0.08em] uppercase">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ShimmerButton href="/login">Protect Your Project</ShimmerButton>
        </div>

        <p className="text-muted-foreground/60 mt-6 text-[11px] font-medium tracking-[0.08em] uppercase">
          Public GitHub repo &middot; No credit card &middot; Setup in 60 seconds
        </p>
      </motion.div>

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
