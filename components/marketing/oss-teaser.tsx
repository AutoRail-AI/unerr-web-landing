"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const staggerContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function OssTeaser() {
  const prefersReducedMotion = useReducedMotion()
  const { open: openWaitlist } = useWaitlist()
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="border-border-strong bg-card relative mx-auto max-w-3xl overflow-hidden rounded-2xl border p-8 md:p-12"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(139,92,246,0.05) 0%, transparent 50%)",
        }}
      >
        <BorderBeam duration={12} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />
        <motion.span variants={staggerChild} className="text-accent text-xs font-bold tracking-widest uppercase">
          OSS Guardian
        </motion.span>
        <motion.h2
          variants={staggerChild}
          className="font-grotesk text-lit mt-4 text-2xl font-bold tracking-[-0.02em] md:text-3xl"
        >
          Free. Forever. No asterisks.
        </motion.h2>
        <motion.p variants={staggerChild} className="text-muted-foreground/80 mt-1 text-sm">
          Full knowledge graph + health audit for any public repository.
        </motion.p>
        <motion.p variants={staggerChild} className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
          Any verified open-source project gets unerr Pro for free. Full knowledge graph, PR review, health grades, MCP
          integration. Because maintainers deserve a tech lead, not another AI bot.
        </motion.p>
        <motion.div variants={staggerChild}>
          <button
            type="button"
            onClick={() => openWaitlist("oss")}
            className="text-accent hover:text-accent/80 mt-6 inline-flex items-center gap-1.5 font-medium transition-colors"
          >
            Protect Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom fade — dissolves section into the void */}
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
