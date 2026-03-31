"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function OssCallout() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="relative overflow-hidden rounded-2xl border border-accent/15 bg-card p-8 md:p-10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, transparent 50%)",
          }}
        >
          <BorderBeam duration={14} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent/60">
                  OSS Guardian Program
                </p>
                <h3 className="mt-2 font-grotesk text-xl font-bold tracking-[-0.02em] text-foreground sm:text-2xl">
                  Open source? Free forever.
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Any public GitHub repository gets full Pro features at no cost.
                  No application form. No star count. No time limit.
                </p>
              </div>
            </div>

            <Link
              href="/oss"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-accent/20 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              Learn about OSS Guardian
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
