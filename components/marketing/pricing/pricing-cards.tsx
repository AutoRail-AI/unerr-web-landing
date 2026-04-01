"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { BorderBeam } from "@/components/ui/magic/border-beam"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"
import { trackBillingToggle, trackPricingCtaClick } from "@/lib/analytics/events"

gsap.registerPlugin(ScrollTrigger)

/* ─── Tier Data (from docs/product/) ────────────────────────────────────── */
interface Tier {
  name: string
  tagline: string
  monthlyPrice: number | null // null = custom
  annualPrice: number | null // null = custom
  priceLabel?: string // override for display (e.g. "$30/seat")
  priceSuffix?: string // override suffix
  badge?: string
  features: string[]
  limits?: string
  cta: { label: string; action: "waitlist-general" | "waitlist-oss" | "email" }
  highlighted?: boolean
}

const tiers: Tier[] = [
  {
    name: "Free Trial",
    tagline: "7 days, full product access",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Full knowledge graph",
      "13-type health audit",
      "MCP server — full context",
      "Blast radius PR review",
      "Rewind & auto-correction",
    ],
    limits: "1 repo · 7 days",
    cta: { label: "Join Waitlist", action: "waitlist-general" },
  },
  {
    name: "OSS Guardian",
    tagline: "Free forever for open source",
    monthlyPrice: 0,
    annualPrice: 0,
    badge: "Forever Free",
    features: [
      "Full product on public repos",
      "Health badge for README",
      "PR review on every push",
      "Unlimited contributor seats",
      "50+ MCP tools",
    ],
    limits: "Unlimited public repos",
    cta: { label: "Apply for OSS", action: "waitlist-oss" },
  },
  {
    name: "Pro",
    tagline: "Individual developers",
    monthlyPrice: 20,
    annualPrice: 192,
    features: [
      "Full Causal Substrate",
      "Unlimited Rewind",
      "Blast Radius + Ledger",
      "Rules Engine",
      "50+ MCP tools",
      "Unlimited Atlas Ask",
    ],
    limits: "3 repos · 50K LOC each",
    cta: { label: "Join Waitlist", action: "waitlist-general" },
    highlighted: true,
  },
  {
    name: "Pro+",
    tagline: "Power users, larger projects",
    monthlyPrice: 35,
    annualPrice: 336,
    features: [
      "Everything in Pro",
      "Priority indexing",
      "Higher LOC limits",
      "10 repositories",
    ],
    limits: "10 repos · 200K LOC each",
    cta: { label: "Join Waitlist", action: "waitlist-general" },
  },
  {
    name: "Startup",
    tagline: "Growing teams (2–20 seats)",
    monthlyPrice: 30,
    annualPrice: 288,
    priceLabel: "$30",
    priceSuffix: " / seat / mo",
    features: [
      "Everything in Pro",
      "Shared rule libraries",
      "Team health dashboard",
      "Cross-repo search",
      "Org-level conventions",
    ],
    limits: "3-seat min · Unlimited repos · 500K LOC each",
    cta: { label: "Join Waitlist", action: "waitlist-general" },
  },
  {
    name: "Enterprise",
    tagline: "Custom infrastructure & compliance",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Everything in Startup",
      "SSO / SAML",
      "Compliance mapping",
      "Prompt ledger + audit trail",
      "Air-gapped deployment",
      "Dedicated support & SLA",
    ],
    limits: "Unlimited everything",
    cta: { label: "Contact Us", action: "email" },
  },
]

/* ─── Component ─────────────────────────────────────────────────────────── */
export function PricingCards() {
  const [annual, setAnnual] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const { open: openWaitlist } = useWaitlist()

  function handleCta(tier: Tier) {
    trackPricingCtaClick(tier.name, annual ? "annual" : "monthly")
    if (tier.cta.action === "waitlist-general") openWaitlist("general")
    else if (tier.cta.action === "waitlist-oss") openWaitlist("oss")
    else if (tier.cta.action === "email") window.location.href = "mailto:hello@unerr.dev"
  }

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

  function formatPrice(tier: Tier): string {
    if (tier.monthlyPrice === null) return "Custom"
    if (tier.monthlyPrice === 0) return "$0"
    if (tier.priceLabel) {
      if (annual && tier.annualPrice) return `$${Math.round(tier.annualPrice / 12)}`
      return tier.priceLabel
    }
    if (annual && tier.annualPrice) return `$${Math.round(tier.annualPrice / 12)}`
    return `$${tier.monthlyPrice}`
  }

  function priceSuffix(tier: Tier): string {
    if (tier.monthlyPrice === null || tier.monthlyPrice === 0) return ""
    if (tier.priceSuffix) return tier.priceSuffix
    return annual ? " / mo (billed yearly)" : " / mo"
  }

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.06), transparent 55%), radial-gradient(ellipse at 60% 70%, rgba(139,92,246,0.04), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">Pricing</p>
            <h1 className="font-grotesk text-lit mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl">
              Flat-rate. No credits. No surprises.
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg text-base md:text-lg">
              Insights are free. Actions are Pro. Open source is always free.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="border-border-strong bg-muted/30 inline-flex items-center gap-3 rounded-full border p-1">
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => { setAnnual(false); trackBillingToggle("monthly") }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-background text-foreground border-border-strong border shadow-sm"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => { setAnnual(true); trackBillingToggle("annual") }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                annual
                  ? "bg-background text-foreground border-border-strong border shadow-sm"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Annual
              <span className="bg-success/10 text-success rounded-full px-2 py-0.5 text-[10px] font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards — 3 columns on desktop, top row: Trial + OSS + Pro, bottom row: Pro+ + Startup + Enterprise */}
        <div ref={cardsRef} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left ${
                tier.highlighted ? "border-accent shadow-glow-accent" : "border-border-strong bg-card"
              }`}
            >
              {tier.highlighted && <BorderBeam duration={13} size={200} colorFrom="#8B5CF6" colorTo="#7C3AED" />}

              <div className="flex items-center justify-between">
                <h3
                  className={`font-grotesk text-base font-semibold ${
                    tier.highlighted ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <span className="bg-accent/10 text-accent rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                    Most Popular
                  </span>
                )}
                {tier.badge && (
                  <span className="bg-success/10 text-success inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                    <Heart className="h-2.5 w-2.5" />
                    {tier.badge}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mt-0.5 text-xs">{tier.tagline}</p>

              {/* Price */}
              <div className="mt-4">
                <span className="font-grotesk text-foreground text-3xl font-bold">
                  {formatPrice(tier)}
                </span>
                <span className="text-muted-foreground ml-1 text-sm">{priceSuffix(tier)}</span>
              </div>

              {/* Limits pill */}
              {tier.limits && (
                <p className="text-muted-foreground/70 mt-1.5 text-[11px]">{tier.limits}</p>
              )}

              {/* Features */}
              <div className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => handleCta(tier)}
                className={`mt-6 flex h-9 items-center justify-center rounded-lg text-sm font-medium transition-opacity ${
                  tier.highlighted
                    ? "bg-accent-fade text-primary-foreground hover:opacity-90"
                    : "border-border-strong text-foreground hover:bg-muted border"
                }`}
              >
                {tier.cta.label}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise pilot callout */}
        <div className="border-border-strong bg-card mt-8 rounded-2xl border p-6 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Enterprise pilot:</span>{" "}
            $2,000 flat for a 60-day POC with 10 seats. Converts to $99–149/seat/mo.{" "}
            <a href="mailto:hello@unerr.dev" className="text-accent hover:underline">
              Get in touch
            </a>
          </p>
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
