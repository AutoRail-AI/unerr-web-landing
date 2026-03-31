import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { successResponse } from "@/lib/utils/api-response"

export async function GET() {
  try {
    // Check Prisma/database connection
    await prisma.$connect()

    // Check Redis (if available)
    let redisStatus = "unknown"
    try {
      const { getRedis } = await import("@/lib/queue/redis")
      const redis = getRedis()
      await redis.ping()
      redisStatus = "connected"
    } catch {
      redisStatus = "disconnected"
    }

    return successResponse(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        services: {
          database: "connected",
          redis: redisStatus,
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
