import { PostHog } from "posthog-node"

let posthogServer: PostHog | null = null

function getPostHog(): PostHog | null {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return null
  }

  if (!posthogServer) {
    posthogServer = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    })
  }

  return posthogServer
}

export async function trackEvent(userId: string, event: string, properties?: Record<string, unknown>) {
  const ph = getPostHog()
  if (!ph) return

  ph.capture({
    distinctId: userId,
    event,
    properties,
  })
}

export async function identifyUser(userId: string, properties?: Record<string, unknown>) {
  const ph = getPostHog()
  if (!ph) return

  ph.identify({
    distinctId: userId,
    properties,
  })
}
