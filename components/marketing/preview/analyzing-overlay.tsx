"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import type { PreviewRepo } from "../preview-data"

interface AnalyzingOverlayProps {
  repo: PreviewRepo
}

export function AnalyzingOverlay({ repo }: AnalyzingOverlayProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500)
    const t2 = setTimeout(() => setStep(2), 1100)
    const t3 = setTimeout(() => setStep(3), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const steps = [
    `Scanning ${repo.fileCount.toLocaleString()} files`,
    `Extracting ${repo.entityCount.toLocaleString()} entities`,
    "Running 13-type health audit",
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-card"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      <p className="mt-4 font-mono text-base text-foreground">
        Analyzing {repo.slug}
      </p>
      <div className="mt-5 space-y-3">
        {steps.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4 + 0.3 }}
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            {step > i ? (
              <Check className="h-3.5 w-3.5 text-success" />
            ) : (
              <div className="h-3.5 w-3.5 animate-spin rounded-full border border-accent/60 border-t-transparent" />
            )}
            {label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
