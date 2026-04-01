"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FormEvent, useCallback, useState } from "react"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const REPO_PATTERN = /^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function AuditForm() {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const trimmed = value.trim()

      if (!trimmed) {
        setError("Enter a repository in owner/repo format.")
        return
      }

      if (!REPO_PATTERN.test(trimmed)) {
        setError("Invalid format. Use owner/repo (e.g., facebook/react).")
        return
      }

      setError("")
      setLoading(true)
      router.push(`/audit/${encodeURIComponent(trimmed)}`)
    },
    [value, router]
  )

  return (
    <section id="audit" className="relative overflow-hidden px-6 py-28">
      {/* Atmospheric glow — stronger for conversion point */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={prefersReducedMotion ? undefined : fadeUp}
        className="relative mx-auto max-w-2xl"
      >
        <div className="border-accent/15 bg-card relative overflow-hidden rounded-2xl border p-8 md:p-10">
          <BorderBeam duration={14} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />

          <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">Try it now</p>
          <h2 className="font-grotesk text-foreground mt-3 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
            Run a free health audit
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md text-sm">
            No signup required. Enter any public GitHub repo and get a full 13-type health report in under 60 seconds.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Input with prefix */}
              <div className="border-border bg-muted flex flex-1 items-center overflow-hidden rounded-lg border">
                <span className="text-muted-foreground shrink-0 px-3 font-mono text-sm">github.com /</span>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value)
                    if (error) setError("")
                  }}
                  placeholder="owner/repo"
                  aria-label="GitHub repository in owner/repo format"
                  className="text-foreground placeholder:text-muted-foreground/50 h-11 flex-1 bg-transparent pr-3 font-mono text-sm focus:outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-accent-fade text-primary-foreground inline-flex h-11 items-center justify-center gap-1.5 rounded-lg px-6 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Run Audit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Error state */}
            {error && <p className="text-destructive mt-2 text-xs">{error}</p>}
          </form>

          <p className="text-muted-foreground/50 mt-5 text-[11px] font-medium tracking-[0.08em] uppercase">
            13 risk types · Full health report · Under 60 seconds
          </p>
        </div>
      </motion.div>
    </section>
  )
}
