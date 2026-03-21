"use client"

import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils/cn"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const prefersReduced = useReducedMotion()
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: prefersReduced ? 100 : 60,
    stiffness: prefersReduced ? 1000 : 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      if (prefersReduced) {
        // Skip animation — set final value immediately
        motionValue.set(direction === "down" ? 0 : value)
        return
      }
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction, prefersReduced])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
        }
      }),
    [springValue, prefix, suffix],
  )

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
    >
      {prefix}0{suffix}
    </span>
  )
}
