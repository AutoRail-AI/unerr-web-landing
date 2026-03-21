"use client"

import { NumberTicker } from "@/components/ui/magic/number-ticker"

const metrics = [
  { target: 50, prefix: "", suffix: "K+", label: "entities indexed", delay: 0 },
  { target: 13, prefix: "", suffix: "", label: "risk types", delay: 0.15 },
  { target: 60, prefix: "< ", suffix: "s", label: "first audit", delay: 0.3 },
  { target: 5, prefix: "< ", suffix: "ms", label: "query latency", delay: 0.45 },
]

export function MetricsBar() {
  return (
    /* Intentional: uses CSS mask-image instead of h-24 fade divs.
       As a full-bleed element between hero and problem sections,
       mask-image on the section itself produces cleaner top+bottom
       fades than overlay divs, which would require z-index management. */
    <section
      className="relative overflow-hidden px-6 py-16"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      {/* Subtle surface lift — bridges Hero warmth into Problem section */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(139,92,246,0.03), transparent 50%, rgba(139,92,246,0.03))",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Top rule — anchors the strip */}
        <div className="border-t border-border/10" aria-hidden="true" />

        <div className="grid grid-cols-2 gap-y-10 py-10 text-center md:grid-cols-4 md:gap-y-0">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`md:px-8 ${i > 0 ? "md:border-l md:border-border/15" : ""}`}
            >
              {/* Three-tier number: qualifier (light) → digit (bold) → unit (medium, smaller) */}
              <div className="font-grotesk text-3xl font-bold tabular-nums tracking-tight text-foreground md:text-4xl">
                {m.prefix && (
                  <span className="font-normal text-muted-foreground">{m.prefix}</span>
                )}
                <NumberTicker value={m.target} delay={m.delay} />
                {m.suffix && (
                  <span className="ml-0.5 text-xl font-semibold text-muted-foreground md:text-2xl">
                    {m.suffix}
                  </span>
                )}
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule — closes the strip */}
        <div className="border-t border-border/10" aria-hidden="true" />
      </div>
    </section>
  )
}
