"use client"

import { type ReactNode, useEffect } from "react"

/* ─── Force Dark Theme for Marketing ─────────────────────────────────────
   Marketing pages are always dark (Substrate Dark aesthetic).
   Directly manipulates <html> class to avoid persisting to localStorage,
   so the dashboard's user-chosen theme is never overwritten.
   Runs on every render to override any next-themes interference.
   When this component unmounts (user navigates to dashboard), next-themes
   re-applies the stored preference from localStorage automatically.
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

/* ─── PostHog (Lazy, Cookieless) ────────────────────────────────────────
   Only initializes when NEXT_PUBLIC_POSTHOG_KEY is set.
   persistence: "memory" = no cookies, GDPR-friendly.
   capture_pageview: false = we track manually in App Router.
   ────────────────────────────────────────────────────────────────────── */

function PostHogInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
    if (!key) return

    import("posthog-js").then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: host || "https://us.i.posthog.com",
        capture_pageview: false,
        persistence: "memory",
        loaded: (ph) => {
          // Expose for trackEvent helper
          ;(window as unknown as Record<string, unknown>)["posthog"] = ph
        },
      })
    })
  }, [])

  return null
}

/* ─── Marketing Providers Wrapper ───────────────────────────────────────── */
export function MarketingProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ForceMarketingTheme />
      <PostHogInit />
      {children}
    </>
  )
}
