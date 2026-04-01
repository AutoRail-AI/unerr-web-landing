"use client"

import { type MouseEvent, type ReactNode, useCallback, useRef } from "react"
import { cn } from "@/lib/utils/cn"

interface MagicCardProps {
  children: ReactNode
  className?: string
  gradientColor?: string
  gradientSize?: number
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientColor = "rgba(139, 92, 246, 0.15)",
  gradientSize = 250,
  gradientOpacity = 0,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
    card.style.setProperty("--gradient-opacity", "1")
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty("--gradient-opacity", String(gradientOpacity))
  }, [gradientOpacity])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group border-border bg-card hover:border-accent/30 relative overflow-hidden rounded-2xl border transition-colors duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--gradient-opacity": String(gradientOpacity),
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--gradient-opacity)",
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x) var(--mouse-y), ${gradientColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
