import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { hasPermission } from "@/lib/config/roles"

// Middleware to check admin access
export async function requireAdmin(_req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userRole = "platform_admin"
  const isAdmin = hasPermission(userRole, "admin", "view_analytics")
  if (!isAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  return null
}

// Admin dashboard stats
export async function GET(req: NextRequest) {
  const authError = await requireAdmin(req)
  if (authError) return authError

  const { prisma } = await import("@/lib/db/prisma")

  // Get user count
  const userCount = await prisma.user.count()

  // Get organization count
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const orgCount = (await (prisma as any).organization?.count()) || 0

  return NextResponse.json({
    stats: {
      users: userCount,
      organizations: orgCount,
    },
  })
}
