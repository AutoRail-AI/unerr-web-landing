"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Check, Clipboard } from "lucide-react"
import { useCallback, useState } from "react"

const markdownSnippet = `[![unerr Health](https://unerr.dev/badge/your-org/your-repo)](https://unerr.dev/audit/your-org/your-repo)`

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function BadgePreview() {
  const [copied, setCopied] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(markdownSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={prefersReducedMotion ? undefined : fadeUp}
        className="relative mx-auto max-w-6xl"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy block */}
          <div>
            <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">Viral distribution</p>
            <h2 className="font-grotesk text-lit mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              Your project&apos;s permanent reputation.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed">
              Add a live health badge to your README. Auto-updates on every push. Every README view is an impression —
              clicking it opens your public health dashboard.
            </p>
          </div>

          {/* Right: Badge + code block */}
          <div>
            {/* Badge SVG preview with glow */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.12), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <motion.svg
                width="280"
                height="44"
                viewBox="0 0 280 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative rounded-lg"
                aria-label="unerr Health: A badge preview"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
              >
                <clipPath id="badge-clip">
                  <rect width="280" height="44" rx="8" />
                </clipPath>
                <g clipPath="url(#badge-clip)">
                  <rect width="170" height="44" fill="var(--color-card)" />
                  <rect x="170" width="110" height="44" fill="var(--color-grade-a)" />
                </g>
                <rect width="280" height="44" rx="8" fill="none" stroke="var(--color-border)" strokeWidth="0.5" />
                <text
                  x="85"
                  y="27"
                  textAnchor="middle"
                  className="font-sans text-[14px]"
                  fill="var(--color-foreground)"
                >
                  unerr Health
                </text>
                <text x="225" y="28" textAnchor="middle" className="font-sans text-[16px] font-bold" fill="#FFFFFF">
                  A (92)
                </text>
              </motion.svg>
            </div>

            {/* Markdown code block */}
            <motion.div
              className="border-border bg-background mt-6 overflow-hidden rounded-lg border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-border/50 flex items-center justify-between border-b px-4 py-2">
                <span className="text-muted-foreground/40 text-[10px] font-semibold tracking-[0.08em] uppercase">
                  README.md
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={copied ? "Copied to clipboard" : "Copy markdown snippet"}
                  className="border-border text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="text-success h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="overflow-x-auto p-4">
                <code className="text-muted-foreground block font-mono text-[11px] leading-relaxed whitespace-pre">
                  {markdownSnippet}
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
