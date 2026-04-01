import { describe, expect, it, vi } from "vitest"

vi.mock("@/lib/db/prisma", () => ({
  prisma: { $queryRaw: vi.fn().mockResolvedValue([{ "?column?": 1 }]) },
}))

import { GET } from "../health/route"

describe("Health Check API", () => {
  it("should return 200 with health status", async () => {
    const response = await GET()
    const body = (await response.json()) as { status: string; services: { database: string } }

    expect(response.status).toBe(200)
    expect(body.status).toBe("ok")
    expect(body.services.database).toBe("connected")
  })
})
