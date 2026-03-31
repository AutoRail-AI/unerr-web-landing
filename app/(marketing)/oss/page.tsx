import type { Metadata } from "next"
import { AuditForm } from "@/components/marketing/oss/audit-form"
import { BadgePreview } from "@/components/marketing/oss/badge-preview"
import { CrisisCards } from "@/components/marketing/oss/crisis-cards"
import { FeatureList } from "@/components/marketing/oss/feature-list"
import { OssFinalCta } from "@/components/marketing/oss/oss-final-cta"
import { OssHero } from "@/components/marketing/oss/oss-hero"
import { PainSolution } from "@/components/marketing/oss/pain-solution"

export const metadata: Metadata = {
  title: "OSS Guardian — Free Code Intelligence for Open Source",
  description:
    "Any verified open-source project gets unerr Pro for free. Full knowledge graph, PR review, health grades, and MCP integration. No catch.",
}

export default function OSSPage() {
  return (
    <div className="flex flex-col">
      <OssHero />
      <CrisisCards />
      {/* Energy thread — narrative pivot from crisis → solution */}
      <div className="mx-auto w-full max-w-6xl px-6" aria-hidden="true">
        <div className="border-t border-border/10" />
      </div>
      <PainSolution />
      <FeatureList />
      <BadgePreview />
      <AuditForm />
      <OssFinalCta />
    </div>
  )
}
