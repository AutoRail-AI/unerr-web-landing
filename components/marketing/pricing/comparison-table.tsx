"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Minus } from "lucide-react"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

/* ─── Feature Data (from docs/product/FIRST_WEEK_WOW.md paywall architecture) ─── */
interface Feature {
  name: string
  free: boolean | string // string = custom value like "1 repo"
  oss: boolean | string
  pro: boolean | string
  proPlus: boolean | string
  startup: boolean | string
  enterprise: boolean | string
}

interface FeatureGroup {
  label: string
  features: Feature[]
}

const groups: FeatureGroup[] = [
  {
    label: "Insights (Free for All)",
    features: [
      { name: "Knowledge graph indexing", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "13-type health audit + grade", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Blast radius maps", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Ghost Report email", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Dead code / duplication detection", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Convention violations list", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "AI contribution summary", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
    ],
  },
  {
    label: "MCP Context",
    features: [
      { name: "Basic file-level info", free: true, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Full graph context (edges, blast radius)", free: false, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Justifications & anti-patterns", free: false, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "50+ MCP tools", free: false, oss: true, pro: true, proPlus: true, startup: true, enterprise: true },
    ],
  },
  {
    label: "Actions (Pro+)",
    features: [
      { name: "Rewind (rollback AI damage)", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Auto-correction", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Rules engine", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Drift alerts (Slack/email)", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Prompt ledger", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Atlas Ask (unlimited)", free: false, oss: false, pro: true, proPlus: true, startup: true, enterprise: true },
      { name: "Priority indexing", free: false, oss: false, pro: false, proPlus: true, startup: true, enterprise: true },
    ],
  },
  {
    label: "Team",
    features: [
      { name: "Shared rule libraries", free: false, oss: false, pro: false, proPlus: false, startup: true, enterprise: true },
      { name: "Team health dashboard", free: false, oss: false, pro: false, proPlus: false, startup: true, enterprise: true },
      { name: "Cross-repo search", free: false, oss: false, pro: false, proPlus: false, startup: true, enterprise: true },
      { name: "Org-level conventions", free: false, oss: false, pro: false, proPlus: false, startup: true, enterprise: true },
    ],
  },
  {
    label: "Enterprise",
    features: [
      { name: "SSO / SAML", free: false, oss: false, pro: false, proPlus: false, startup: false, enterprise: true },
      { name: "Compliance mapping", free: false, oss: false, pro: false, proPlus: false, startup: false, enterprise: true },
      { name: "Air-gapped deployment", free: false, oss: false, pro: false, proPlus: false, startup: false, enterprise: true },
      { name: "Audit trail", free: false, oss: false, pro: false, proPlus: false, startup: false, enterprise: true },
      { name: "Dedicated support & SLA", free: false, oss: false, pro: false, proPlus: false, startup: false, enterprise: true },
    ],
  },
  {
    label: "Limits",
    features: [
      { name: "Repositories", free: "1", oss: "Unlimited (public)", pro: "3", proPlus: "10", startup: "Unlimited", enterprise: "Unlimited" },
      { name: "LOC per repo", free: "—", oss: "Unlimited", pro: "50K", proPlus: "200K", startup: "500K", enterprise: "Unlimited" },
      { name: "Seats", free: "1", oss: "Unlimited", pro: "1", proPlus: "1", startup: "3–20", enterprise: "Unlimited" },
    ],
  },
]

const tierColumns = [
  { key: "free", label: "Free Trial" },
  { key: "oss", label: "OSS" },
  { key: "pro", label: "Pro" },
  { key: "proPlus", label: "Pro+" },
  { key: "startup", label: "Startup" },
  { key: "enterprise", label: "Enterprise" },
]

/* ─── Cell Renderer ─────────────────────────────────────────────────────── */
function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-foreground text-xs font-medium">{value}</span>
  }
  return value ? (
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.05), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div ref={tableRef} className="relative mx-auto max-w-7xl">
        <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">Feature comparison</p>
        <h2 className="font-grotesk text-lit mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Compare plans</h2>
        <p className="text-muted-foreground mt-3 max-w-lg text-sm">
          Insights are always free — health grades, blast radius maps, and Ghost Reports never get paywalled.
          Actions (Rewind, auto-correction, rules enforcement) require Pro.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-border bg-background sticky top-0 z-10 border-b">
                <th scope="col" className="text-muted-foreground py-3 pr-4 text-left font-normal">
                  Feature
                </th>
                {tierColumns.map((t) => (
                  <th
                    key={t.key}
                    scope="col"
                    className={`w-[100px] py-3 text-center text-xs font-semibold ${
                      t.key === "pro" ? "bg-accent/5 text-accent" : "text-foreground"
                    }`}
                  >
                    {t.label}
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
      <tr>
        <th scope="colgroup" colSpan={7} className="pt-8 pb-2 text-left">
          <span className="text-foreground inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase">
            {group.label}
          </span>
        </th>
      </tr>
      {group.features.map((f) => (
        <tr key={f.name} className="border-border/50 hover:bg-muted/30 border-b transition-colors">
          <td className="text-muted-foreground py-3 pr-4">{f.name}</td>
          <td className="py-3 text-center"><Cell value={f.free} /></td>
          <td className="py-3 text-center"><Cell value={f.oss} /></td>
          <td className="bg-accent/5 py-3 text-center"><Cell value={f.pro} /></td>
          <td className="py-3 text-center"><Cell value={f.proPlus} /></td>
          <td className="py-3 text-center"><Cell value={f.startup} /></td>
          <td className="py-3 text-center"><Cell value={f.enterprise} /></td>
        </tr>
      ))}
    </>
  )
}
