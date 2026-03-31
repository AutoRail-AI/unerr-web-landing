import type { AgentTool } from "../types"

export const emailTool: AgentTool = {
  name: "send_email",
  description: "Send an email to a user. Use this to send notifications, reports, or other communications.",
  parameters: {
    type: "object",
    properties: {
      to: {
        type: "string",
        description: "Recipient email address",
      },
      subject: {
        type: "string",
        description: "Email subject",
      },
      body: {
        type: "string",
        description: "Email body (HTML supported)",
      },
    },
    required: ["to", "subject", "body"],
  },
  handler: async ({ to, subject, body }) => {
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      if (!process.env.RESEND_API_KEY) {
        return { success: false, error: "Resend API key not configured" }
      }

      const result = await resend.emails.send({
        from: process.env.EMAIL_FROM || "noreply@example.com",
        to,
        subject,
        html: body,
      })

      return { success: true, messageId: result.data?.id }
    } catch (error: unknown) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  },
}

export const webSearchTool: AgentTool = {
  name: "web_search",
  description: "Search the web for current information. Use this when you need up-to-date information that might not be in the database.",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query",
      },
      maxResults: {
        type: "number",
        description: "Maximum number of results (default: 5)",
      },
    },
    required: ["query"],
  },
  handler: async ({ query: _query, maxResults: _maxResults = 5 }) => {
    try {
      return {
        success: true,
        message: "Web search not configured. Please set up a search API (Tavily, Serper, etc.)",
        results: [],
      }
    } catch (error: unknown) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  },
}

// Export all tools
export const defaultTools = [emailTool, webSearchTool]
