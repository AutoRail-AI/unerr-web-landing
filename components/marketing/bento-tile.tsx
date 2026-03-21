"use client"

import type { ReactNode } from "react"
import { MagicCard } from "@/components/ui/magic/magic-card"

interface BentoTileProps {
  children: ReactNode
  className?: string
}

export function BentoTile({ children, className = "" }: BentoTileProps) {
  return (
    <MagicCard
      className={className}
      gradientColor="rgba(139, 92, 246, 0.12)"
      gradientSize={300}
    >
      <div className="p-5 pt-4">{children}</div>
    </MagicCard>
  )
}
