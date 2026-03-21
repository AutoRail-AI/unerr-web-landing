import { HeroAnimation } from "@/components/marketing/hero-animation"
import { HeroProductPreview } from "@/components/marketing/hero-product-preview"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Layer 1 (far-field) — faint dot grid for depth perception */}
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

      {/* Layer 2 (mid-field) — structural line grid, stronger than page-level */}
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

      {/* Layer 3 (near-field) — subtle radial warmth, not a purple wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 28%, rgba(139,92,246,0.04), transparent 55%), radial-gradient(ellipse at 50% 72%, rgba(139,92,246,0.03), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Headline block — no max-w constraint. At text-6xl each sentence
             is short enough to fit one line on any desktop viewport.
             2 lines total, staircase pattern via natural sentence length. */}
        <div>
          <HeroAnimation
            headline="AI agents write the code."
            gradientLine="unerr enforces the architecture."
            subtitle={
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                The missing backend for AI coding agents &mdash; a living knowledge graph that turns every AI suggestion into architecture-safe code.
              </p>
            }
          />
        </div>

        {/* Product preview — full width, below headline, ~70vh total */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}>
          <HeroProductPreview />
        </div>
      </div>

      {/* Bottom bleed — mask-image fade for seamless transition to MetricsBar */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
