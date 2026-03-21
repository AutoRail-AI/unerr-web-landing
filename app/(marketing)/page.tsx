import type { Metadata } from "next"
import { codeToHtml } from "shiki"
import { BentoGrid } from "@/components/marketing/bento-grid"
import { FinalCta } from "@/components/marketing/final-cta"
import { HeroSection } from "@/components/marketing/hero-section"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { MetricsBar } from "@/components/marketing/metrics-bar"
import { PricingPreview } from "@/components/marketing/pricing-preview"
import { ProblemSection } from "@/components/marketing/problem-section"

const terminalCode = `$ npx @autorail/unerr setup
✓ Detected Cursor IDE
✓ Authenticated via GitHub
✓ MCP server configured at localhost:9315
✓ Indexing 3 repositories...
✓ Health audit complete — Grade: A (92/100)

unerr is now supervising your AI agents.`

export const metadata: Metadata = {
  title: "unerr — The Missing Backend for AI Coding Agents",
  description:
    "Code intelligence platform that builds a living knowledge graph of your codebase and feeds it to AI coding agents via MCP. Knowledge graph, architectural rules, and blast radius analysis. Connected in 60 seconds.",
  openGraph: {
    title: "unerr — The Missing Backend for AI Coding Agents",
    description:
      "Knowledge graph, architectural guardrails, and MCP integration for AI coding agents. Connected in 60 seconds.",
    url: "https://unerr.dev",
  },
}

/* JSON-LD Structured Data — SoftwareApplication schema */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "unerr",
  applicationCategory: "DeveloperApplication",
  description:
    "Code intelligence platform that supervises AI coding agents with a living knowledge graph, architectural rules, and MCP integration.",
  operatingSystem: "Web, macOS, Linux, Windows",
  offers: [
    {
      "@type": "Offer",
      name: "Free Trial",
      price: "0",
      priceCurrency: "USD",
      description: "7-day full access trial",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "20",
      priceCurrency: "USD",
      billingIncrement: "Monthly",
      description: "Per seat per month",
    },
  ],
  url: "https://unerr.dev",
}

export default async function HomePage() {
  const terminalHtml = await codeToHtml(terminalCode, {
    lang: "shellscript",
    theme: "github-dark-default",
  })

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MetricsBar />
      <ProblemSection />
      <HowItWorks terminalHtml={terminalHtml} />
      <BentoGrid />

      {/* Energy thread — visual connector between bento and pricing */}
      <div className="relative flex h-20 items-center justify-center" aria-hidden="true">
        <div className="h-full w-px bg-border/20" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04), transparent 60%)",
          }}
        />
      </div>

      <PricingPreview />
      <FinalCta />
    </div>
  )
}
