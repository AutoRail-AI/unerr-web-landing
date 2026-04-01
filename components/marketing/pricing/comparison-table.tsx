"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Minus } from "lucide-react"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

/* ─── Feature Data ──────────────────────────────────────────────────────── */
interface Feature {
  name: string
  trial: boolean
  pro: boolean
  startup: boolean
  enterprise: boolean
}

interface FeatureGroup {
  label: string
  features: Feature[]
}

const groups: FeatureGroup[] = [
  {
    label: "Core Intelligence",
    features: [
      { name: "Knowledge graph indexing", trial: true, pro: true, startup: true, enterprise: true },
      { name: "13-type health audit", trial: true, pro: true, startup: true, enterprise: true },
      { name: "Blast radius analysis", trial: true, pro: true, startup: true, enterprise: true },
      { name: "MCP server integration", trial: true, pro: true, startup: true, enterprise: true },
      { name: "Semantic embeddings", trial: true, pro: true, startup: true, enterprise: true },
    ],
  },
  {
    label: "AI Features",
    features: [
      { name: "AI PR review", trial: true, pro: true, startup: true, enterprise: true },
      { name: "Architectural rules engine", trial: false, pro: true, startup: true, enterprise: true },
      { name: "Prompt ledger & rewind", trial: false, pro: true, startup: true, enterprise: true },
      { name: "Knowledge sync (doc validation)", trial: false, pro: true, startup: true, enterprise: true },
      { name: "Speculative ontology", trial: false, pro: true, startup: true, enterprise: true },
    ],
  },
  {
    label: "Team Features",
    features: [
      { name: "Team dashboards", trial: false, pro: false, startup: true, enterprise: true },
      { name: "Shared rules library", trial: false, pro: false, startup: true, enterprise: true },
      { name: "Slack notifications", trial: false, pro: false, startup: true, enterprise: true },
      { name: "Seat management", trial: false, pro: false, startup: true, enterprise: true },
    ],
  },
  {
    label: "Enterprise",
    features: [
      { name: "SSO / SAML", trial: false, pro: false, startup: false, enterprise: true },
      { name: "Self-hosted deployment", trial: false, pro: false, startup: false, enterprise: true },
      { name: "Dedicated support", trial: false, pro: false, startup: false, enterprise: true },
      { name: "Custom SLA", trial: false, pro: false, startup: false, enterprise: true },
      { name: "Audit logs", trial: false, pro: false, startup: false, enterprise: true },
    ],
  },
]

const tierColumns = ["Trial *", "Pro", "Startup", "Enterprise"]

/* ─── Cell Renderer ─────────────────────────────────────────────────────── */
function Cell({ included }: { included: boolean }) {
  return included ? (
    <Check className="text-success mx-auto h-4 w-4" />
  ) : (
    <Minus className="text-muted-foreground/30 mx-auto h-4 w-4" />
  )
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export function ComparisonTable() {
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tableRef.current) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.from(tableRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Atmospheric glow — intensifying toward conversion */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.05), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div ref={tableRef} className="relative mx-auto max-w-7xl">
        {/* Left-aligned heading */}
        <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">Feature comparison</p>
        <h2 className="font-grotesk text-lit mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Compare plans</h2>
        <p className="text-muted-foreground mt-3 max-w-md text-sm">
          * Trial includes full Pro access for 7 days. One repository.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            {/* Sticky header */}
            <thead>
              <tr className="border-border bg-background sticky top-0 z-10 border-b">
                <th scope="col" className="text-muted-foreground py-3 pr-4 text-left font-normal">
                  Feature
                </th>
                {tierColumns.map((t) => (
                  <th
                    key={t}
                    scope="col"
                    className={`w-[120px] py-3 text-center font-semibold ${
                      t === "Pro" ? "bg-accent/5 text-accent" : "text-foreground"
                    }`}
                  >
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <GroupRows key={group.label} group={group} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}

function GroupRows({ group }: { group: FeatureGroup }) {
  return (
    <>
      {/* Group header — enhanced visual treatment */}
      <tr>
        <th scope="colgroup" colSpan={5} className="pt-8 pb-2 text-left">
          <span className="text-foreground inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase">
            {group.label}
          </span>
        </th>
      </tr>
      {group.features.map((f) => (
        <tr key={f.name} className="border-border/50 hover:bg-muted/30 border-b transition-colors">
          <td className="text-muted-foreground py-3 pr-4">{f.name}</td>
          <td className="py-3 text-center">
            <Cell included={f.trial} />
          </td>
          <td className="bg-accent/5 py-3 text-center">
            <Cell included={f.pro} />
          </td>
          <td className="py-3 text-center">
            <Cell included={f.startup} />
          </td>
          <td className="py-3 text-center">
            <Cell included={f.enterprise} />
          </td>
        </tr>
      ))}
    </>
  )
}
