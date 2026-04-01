"use client"

import { usePathname } from "next/navigation"
import { type ReactNode, useEffect } from "react"
import { useTrackPageTime, useTrackScrollDepth } from "@/lib/analytics/hooks"
import { WaitlistProvider } from "@/components/marketing/waitlist-dialog"

/* ─── Force Dark Theme for Marketing ───────────────────────────────────── */

function ForceMarketingTheme() {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add("dark")
    html.classList.remove("light")
    html.style.colorScheme = "dark"
  })

  return null
}

/* ─── Page-Level Analytics ─────────────────────────────────────────────── */

function PageAnalytics() {
  const pathname = usePathname()
  useTrackPageTime(pathname)
  useTrackScrollDepth(pathname)
  return null
}

/* ─── Marketing Providers Wrapper ──────────────────────────────────────── */
export function MarketingProviders({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      <ForceMarketingTheme />
      <PageAnalytics />
      {children}
    </WaitlistProvider>
  )
}
