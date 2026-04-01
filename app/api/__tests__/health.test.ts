import { describe, expect, it, vi } from "vitest"

// Mock Prisma — no real DB in CI
vi.mock("@/lib/db/prisma", () => ({
  prisma: { $connect: vi.fn().mockResolvedValue(undefined) },
}))

import { GET } from "../health/route"

describe("Health Check API", () => {
  it("should return 200 with health status", async () => {
    const response = await GET()
    const body = (await response.json()) as { success: boolean; data: { status: string } }

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.data.status).toBe("ok")
  })
})
