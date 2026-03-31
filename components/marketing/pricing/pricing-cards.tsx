"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { BorderBeam } from "@/components/ui/magic/border-beam"

gsap.registerPlugin(ScrollTrigger)

/* ─── Tier Data ─────────────────────────────────────────────────────────── */
interface Tier {
  name: string
  tagline: string
  monthlyPrice: number | null // null = custom
  features: string[]
  cta: { label: string; href: string }
  highlighted?: boolean
}

const tiers: Tier[] = [
  {
    name: "Trial",
    tagline: "7 days, full access",
    monthlyPrice: 0,
    features: [
      "Full knowledge graph",
      "13-type health audit",
      "MCP server integration",
      "Blast radius PR review",
      "1 repository",
    ],
    cta: { label: "Start Free Trial", href: "/login" },
  },
  {
    name: "Pro",
    tagline: "Safe Velocity",
    monthlyPrice: 20,
    features: [
      "Everything in Trial",
      "Unlimited repositories",
      "Architectural rules engine",
      "Prompt ledger & rewind",
      "Knowledge sync",
      "Priority indexing",
    ],
    cta: { label: "Get Started", href: "/login" },
    highlighted: true,
  },
  {
    name: "Startup",
    tagline: "Growing Teams",
    monthlyPrice: 15,
    features: [
      "Everything in Pro",
      "3–20 seats",
      "Team dashboards",
      "Shared rules library",
      "Slack notifications",
      "Volume discount",
    ],
    cta: { label: "Get Started", href: "/login" },
  },
  {
    name: "Enterprise",
    tagline: "Custom Infrastructure",
    monthlyPrice: null,
    features: [
      "Everything in Startup",
      "Unlimited seats",
      "SSO / SAML",
      "Self-hosted option",
      "Dedicated support",
      "Custom SLA",
    ],
    cta: { label: "Contact Us", href: "mailto:hello@unerr.dev" },
  },
]

/* ─── Component ─────────────────────────────────────────────────────────── */
export function PricingCards() {
  const [annual, setAnnual] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const cards = gsap.utils.toArray<HTMLElement>(".pricing-card")
    gsap.set(cards, { opacity: 0, y: 30, willChange: "transform, opacity" })

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            overwrite: true,
          })
        },
        start: "top bottom-=80",
        once: true,
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  function formatPrice(monthly: number | null): string {
    if (monthly === null) return "Custom"
    if (monthly === 0) return "$0"
    if (annual) return `$${Math.round(monthly * 12 * 0.8)}`
    return `$${monthly}`
  }

  function priceSuffix(monthly: number | null): string {
    if (monthly === null || monthly === 0) return ""
    return annual ? " / year" : " / mo"
  }

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Layer 1 — faint dot grid (matches landing page hero) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      {/* Layer 2 — structural line grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      {/* Layer 3 — radial violet glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.06), transparent 55%), radial-gradient(ellipse at 60% 70%, rgba(139,92,246,0.04), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Left-aligned header */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent/60">
              Pricing
            </p>
            <h1 className="mt-3 font-grotesk text-3xl font-bold tracking-[-0.02em] text-lit sm:text-4xl md:text-5xl">
              Infrastructure-tier pricing
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
              Start free. Scale with your team. Open source is always free.
            </p>
          </div>

          {/* Billing toggle — right-aligned on desktop */}
          <div className="inline-flex items-center gap-3 rounded-full border border-border-strong bg-muted/30 p-1">
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-background text-foreground shadow-sm border border-border-strong"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                annual
                  ? "bg-background text-foreground shadow-sm border border-border-strong"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Annual
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left ${
                tier.highlighted
                  ? "border-accent shadow-glow-accent"
                  : "border-border-strong bg-card"
              }`}
            >
              {/* BorderBeam on highlighted card */}
              {tier.highlighted && (
                <BorderBeam duration={13} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />
              )}
              <div className="flex items-center justify-between">
                <h3
                  className={`font-grotesk text-base font-semibold ${
                    tier.highlighted ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                {/* "Most Popular" badge */}
                {tier.highlighted && (
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {tier.tagline}
              </p>

              <div className="mt-4">
                <span className="font-grotesk text-3xl font-bold text-foreground">
                  {formatPrice(tier.monthlyPrice)}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">
                  {priceSuffix(tier.monthlyPrice)}
                </span>
              </div>

              {/* Features */}
              <div className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={tier.cta.href}
                className={`mt-6 flex h-9 items-center justify-center rounded-lg text-sm font-medium transition-opacity ${
                  tier.highlighted
                    ? "bg-accent-fade text-primary-foreground hover:opacity-90"
                    : "border border-border-strong text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bleed */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
