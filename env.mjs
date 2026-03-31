import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    // Supabase (PostgreSQL)
    SUPABASE_SECRET_KEY: z.string().optional(),
    SUPABASE_DB_URL: z.string().refine((val) => !val || /^postgresql(s)?:\/\//.test(val), "Invalid PostgreSQL URL").optional(),
    // Better Auth
    BETTER_AUTH_SECRET: z.string().min(32).optional(),
    BETTER_AUTH_URL: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    // Google OAuth
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    // AWS Bedrock (LLM)
    AWS_BEARER_TOKEN_BEDROCK: z.string().optional(),
    AWS_REGION: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    NEXT_PUBLIC_SUPABASE_URL: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().optional(),
    NEXT_PUBLIC_UNERR_APP_SERVER: z.string().refine((val) => !val || /^https?:\/\//.test(val), "Invalid URL").optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    // Supabase
    SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY,
    SUPABASE_DB_URL: process.env.SUPABASE_DB_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    // Better Auth
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    // Google OAuth
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // AWS Bedrock
    AWS_BEARER_TOKEN_BEDROCK: process.env.AWS_BEARER_TOKEN_BEDROCK,
    AWS_REGION: process.env.AWS_REGION,
    // Public
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_UNERR_APP_SERVER: process.env.NEXT_PUBLIC_UNERR_APP_SERVER,
  },
})
