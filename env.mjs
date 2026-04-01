import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    // Supabase (PostgreSQL)
    SUPABASE_DB_URL: z.string().refine((val) => !val || /^postgresql(s)?:\/\//.test(val), "Invalid PostgreSQL URL").optional(),
    // Better Auth
    BETTER_AUTH_SECRET: z.string().min(32).optional(),
    BETTER_AUTH_URL: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    // Google OAuth
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    NEXT_PUBLIC_UNERR_APP_SERVER: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    // PostHog Analytics
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    // Supabase
    SUPABASE_DB_URL: process.env.SUPABASE_DB_URL,
    // Better Auth
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    // Google OAuth
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // Public
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_UNERR_APP_SERVER: process.env.NEXT_PUBLIC_UNERR_APP_SERVER,
    // PostHog
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
})
