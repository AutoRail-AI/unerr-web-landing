"use client"

import { cn } from "@/lib/utils/cn"

interface RippleProps {
  className?: string
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

export function Ripple({ className, mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 }: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const delay = `${i * 0.06}s`
        return (
          <div
            key={i}
            className="animate-ripple bg-foreground/25 absolute top-1/2 left-1/2 rounded-full border"
            style={{
              width: size,
              height: size,
              opacity: Math.max(opacity, 0),
              animationDelay: delay,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "rgba(139, 92, 246, 0.12)",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        )
      })}
    </div>
  )
}
