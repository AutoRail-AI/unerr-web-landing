import { NextResponse } from "next/server"
import { trackEvent } from "@/lib/analytics/posthog"
import { prisma } from "@/lib/db/prisma"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string
      email?: string
      linkedin?: string
      plan?: string
      githubUrl?: string
      maintainerProof?: string
    }

    const { name, email, linkedin, plan, githubUrl, maintainerProof } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (linkedin && !/linkedin\.com\/in\//.test(linkedin)) {
      return NextResponse.json({ error: "Please provide a valid LinkedIn profile URL" }, { status: 400 })
    }

    const selectedPlan = plan === "oss" ? "oss" : "general"

    if (selectedPlan === "oss") {
      if (!githubUrl) {
        return NextResponse.json(
          { error: "GitHub repository or organization URL is required for OSS" },
          { status: 400 }
        )
      }
      if (!/github\.com\//.test(githubUrl)) {
        return NextResponse.json({ error: "Please provide a valid GitHub URL" }, { status: 400 })
      }
    }

    if (!prisma) {
      return NextResponse.json({ error: "Database not available" }, { status: 503 })
    }

    const existing = await prisma.waitlist.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 })
    }

    await prisma.waitlist.create({
      data: {
        name,
        email,
        linkedin: linkedin || null,
        plan: selectedPlan,
        githubUrl: selectedPlan === "oss" ? githubUrl || null : null,
        maintainerProof: selectedPlan === "oss" ? maintainerProof || null : null,
      },
    })

    await trackEvent(email, "waitlist_joined", {
      plan: selectedPlan,
      has_linkedin: !!linkedin,
      has_github_url: !!githubUrl,
    })

    return NextResponse.json({ message: "You've been added to the waitlist!" }, { status: 201 })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    console.error("Waitlist error:", message)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
