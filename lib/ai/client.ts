import { OpenAI } from "@posthog/ai"
import { PostHog } from "posthog-node"

// Singleton PostHog client for server-side LLM analytics
let phClient: PostHog | null = null

function getPhClient(): PostHog {
  if (!phClient) {
    phClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    })
  }
  return phClient
}

// PostHog-wrapped OpenAI client — automatically captures $ai_generation events
// for every LLM call, including model, tokens, latency, and cost.
//
// Usage:
//   import { openai } from "@/lib/ai/client"
//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [...],
//     posthogDistinctId: userId,   // optional: links generation to a user
//     posthogTraceId: traceId,     // optional: groups calls into a trace
//   })
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  posthog: getPhClient(),
})
