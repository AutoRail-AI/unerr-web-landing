import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { organization } from "better-auth/plugins"

// Lazy import prisma to allow Better Auth CLI to read config without Prisma client
function getPrisma() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const prismaModule = require("@/lib/db/prisma")
    return prismaModule.prisma
  } catch {
    // Prisma not available yet - Better Auth CLI will handle this
    return null
  }
}

const prisma = getPrisma()

// Build auth config - conditionally include database adapter
const authConfig: Parameters<typeof betterAuth>[0] = {
  // Database adapter - Using Prisma with PostgreSQL (Supabase)
  // Only include if prisma is available (after client generation)
  ...(prisma
    ? {
        database: prismaAdapter(prisma, {
          provider: "postgresql",
        }),
      }
    : {}),

  // App configuration
  appName: "unerr",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET || "development-secret-change-in-production-min-32-chars",

  // Plugins
  plugins: [
    organization({
      allowUserToCreateOrganization: true,
      organizationLimit: parseInt(process.env.ORGANIZATION_LIMIT || "5", 10),
      membershipLimit: parseInt(process.env.MEMBERSHIP_LIMIT || "100", 10),
      creatorRole: "owner",

      async sendInvitationEmail(data) {
        const inviteLink = `${process.env.BETTER_AUTH_URL}/accept-invitation/${data.id}`
        // TODO: integrate email provider when needed
        console.log(`[auth] Invitation email for ${data.email} to join ${data.organization.name}`)
        console.log(`[auth] Invitation link: ${inviteLink}`)
      },
    }),
  ],

  // Email & Password authentication
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },

  // Email verification
  emailVerification: {
    sendOnSignUp: false,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      // TODO: integrate email provider when needed
      console.log(`[auth] Verification email for ${user.email}`)
      console.log(`[auth] Verification URL: ${url}`)
    },
  },

  // Social providers
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  // Session configuration
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session every 24 hours
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },

  // User configuration
  user: {
    additionalFields: {
      tier: {
        type: "string",
        defaultValue: "free",
      },
    },
  },

  // Account configuration
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  // Rate limiting
  rateLimit: {
    window: 60, // 60 seconds
    max: 10, // 10 requests per window
  },
}

export const auth = betterAuth(authConfig)

// Export types
export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user
