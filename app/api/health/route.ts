import { NextResponse } from "next/server"

export async function GET() {
  const dbStatus = await checkDatabase()

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    services: {
      database: dbStatus,
    },
  })
}

async function checkDatabase(): Promise<string> {
  try {
    const { prisma } = await import("@/lib/db/prisma")
    if (!prisma) return "not configured"
    await prisma.$queryRaw`SELECT 1`
    return "connected"
  } catch {
    return "unavailable"
  }
}
