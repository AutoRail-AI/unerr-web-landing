import type { Metadata } from "next"
import { ComparisonTable } from "@/components/marketing/pricing/comparison-table"
import { FaqAccordion } from "@/components/marketing/pricing/faq-accordion"
import { OssCallout } from "@/components/marketing/pricing/oss-callout"
import { PricingCards } from "@/components/marketing/pricing/pricing-cards"

export const metadata: Metadata = {
  title: "Pricing — Infrastructure-Tier Code Intelligence",
  description:
    "unerr pricing: Free for open source, $20/seat/month for Pro teams. Full knowledge graph, PR review, health grades, and MCP integration.",
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingCards />
      {/* Energy thread — narrative pivot from hero → social proof */}
      <div className="mx-auto w-full max-w-6xl px-6" aria-hidden="true">
        <div className="border-border/10 border-t" />
      </div>
      <OssCallout />
      <div className="mx-auto w-full max-w-6xl px-6" aria-hidden="true">
        <div className="border-border/10 border-t" />
      </div>
      <ComparisonTable />
      <div className="mx-auto w-full max-w-6xl px-6" aria-hidden="true">
        <div className="border-border/10 border-t" />
      </div>
      <FaqAccordion />
    </div>
  )
}
