"use client"

import { type ReactNode, useEffect } from "react"
import { WaitlistProvider } from "@/components/marketing/waitlist-dialog"

/* ─── Force Dark Theme for Marketing ─────────────────────────────────────
   Marketing pages are always dark (Substrate Dark aesthetic).
   Directly manipulates <html> class to avoid persisting to localStorage,
   so the dashboard's user-chosen theme is never overwritten.
   ────────────────────────────────────────────────────────────────────── */

function ForceMarketingTheme() {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add("dark")
    html.classList.remove("light")
    html.style.colorScheme = "dark"
  })

  return null
}

/* ─── Marketing Providers Wrapper ───────────────────────────────────────── */
export function MarketingProviders({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      <ForceMarketingTheme />
      {children}
    </WaitlistProvider>
  )
}
