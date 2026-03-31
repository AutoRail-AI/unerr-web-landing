"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface ShimmerButtonBaseProps {
  children: ReactNode
  className?: string
}

interface ShimmerLinkProps extends ShimmerButtonBaseProps {
  href: string
  onClick?: never
}

interface ShimmerActionProps extends ShimmerButtonBaseProps {
  onClick: () => void
  href?: never
}

type ShimmerButtonProps = ShimmerLinkProps | ShimmerActionProps

const sharedClass =
  "group relative inline-flex h-11 items-center overflow-hidden rounded-full bg-accent-fade px-7 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const shimmerSpan = (
  <span
    className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
    aria-hidden="true"
  />
)

export function ShimmerButton(props: ShimmerButtonProps) {
  const { children, className = "" } = props

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={`${sharedClass} ${className}`}>
        {shimmerSpan}
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={"onClick" in props ? props.onClick : undefined}
      className={`${sharedClass} ${className}`}
    >
      {shimmerSpan}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
