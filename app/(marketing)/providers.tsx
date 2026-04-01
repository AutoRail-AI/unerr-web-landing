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
      <PostHogInit />
      {children}
    </WaitlistProvider>
  )
}

/* ─── PostHog (Lazy, Cookieless) ────────────────────────────────────────
   Only initializes when NEXT_PUBLIC_POSTHOG_KEY is set.
   persistence: "memory" = no cookies, GDPR-friendly.
   ────────────────────────────────────────────────────────────────────── */

function PostHogInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return

    import("posthog-js").then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        capture_pageview: false,
        persistence: "memory",
      })
    })
  }, [])

  return null
}
