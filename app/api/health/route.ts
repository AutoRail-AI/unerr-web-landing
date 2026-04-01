import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { successResponse } from "@/lib/utils/api-response"

export async function GET() {
  try {
    await prisma.$connect()

    return successResponse(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        services: {
          database: "connected",
        },
      },
      "Service is healthy"
    )
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    )
  }
}
