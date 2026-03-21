"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface ShimmerButtonProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function ShimmerButton({ href, children, className = "" }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-11 items-center overflow-hidden rounded-full bg-accent-fade px-7 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
