"use client"

import { motion } from "framer-motion"
import { gradeColor } from "../preview-data"

interface GradeRingProps {
  grade: string
  score: number
  size?: number
}

export function GradeRing({ grade, score, size = 64 }: GradeRingProps) {
  const strokeWidth = 3.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(100, score)) / 100
  const dashOffset = circumference * (1 - progress)
  const color = gradeColor(score)

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-border)" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-grotesk text-lg font-bold text-foreground leading-none">{grade}</span>
      </div>
    </div>
  )
}
