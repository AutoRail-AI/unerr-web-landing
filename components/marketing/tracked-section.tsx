"use client"

import { type ReactNode, useRef } from "react"
import { useTrackSectionView } from "@/lib/analytics/hooks"

interface TrackedSectionProps {
  name: string
  children: ReactNode
  className?: string
}

/**
 * Wrapper that fires a `section_viewed` PostHog event when the section
 * enters the viewport (30% visible). Fires once per page load.
 */
export function TrackedSection({ name, children, className }: TrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  useTrackSectionView(ref, name)

  return (
    <div ref={ref} data-section={name} className={className}>
      {children}
    </div>
  )
}
