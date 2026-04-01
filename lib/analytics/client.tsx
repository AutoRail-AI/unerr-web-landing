"use client"

import { type ReactNode } from "react"

// Lazy PostHog initialization — only when keys are set
let initialized = false

function initPostHog() {
  if (initialized) return
  if (typeof window === "undefined") return

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!key) return

  initialized = true

  import("posthog-js").then(({ default: posthog }) => {
    posthog.init(key, {
      api_host: host || "https://us.i.posthog.com",
      capture_pageview: false,
      persistence: "memory", // GDPR-friendly, no cookies
      loaded: (ph) => {
        ;(window as unknown as Record<string, unknown>)["posthog"] = ph
      },
    })
  })
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  initPostHog()
  return <>{children}</>
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  const ph = (window as unknown as Record<string, unknown>)["posthog"] as
    | { capture: (event: string, properties?: Record<string, unknown>) => void }
    | undefined
  ph?.capture(event, properties)
}

export function identifyUser(userId: string, properties?: Record<string, unknown>) {
  const ph = (window as unknown as Record<string, unknown>)["posthog"] as
    | { identify: (userId: string, properties?: Record<string, unknown>) => void }
    | undefined
  ph?.identify(userId, properties)
}

export function resetPostHog() {
  const ph = (window as unknown as Record<string, unknown>)["posthog"] as { reset: () => void } | undefined
  ph?.reset()
}
