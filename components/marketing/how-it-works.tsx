"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GitBranch, Network, Shield } from "lucide-react"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: 1,
    icon: GitBranch,
    title: "Connect",
    label: "One command",
    description:
      "Install the GitHub App or run npx @autorail/unerr setup. One command detects your IDE, authenticates, and configures MCP.",
    code: [
      { text: "$ npx @autorail/unerr setup", style: "text-muted-foreground" },
      { text: "✓ Detected Cursor IDE", style: "text-success" },
      { text: "✓ Authenticated via GitHub", style: "text-success" },
    ],
  },
  {
    num: 2,
    icon: Network,
    title: "Analyze",
    label: "Automatic",
    description:
      "The knowledge graph builds automatically. Every file, function, and relationship — indexed with semantic embeddings and business justifications.",
    code: [
      { text: "✓ MCP server configured at localhost:9315", style: "text-success" },
      { text: "✓ Indexing 3 repositories...", style: "text-success" },
    ],
  },
  {
    num: 3,
    icon: Shield,
    title: "Supervise",
    label: "Always-on",
    description:
      "Your AI agents read the graph via MCP at localhost:9315. 80% of queries resolve locally in <5ms. The rest route to cloud.",
    code: [
      { text: "✓ Health audit complete — Grade: A (92/100)", style: "text-success" },
      { text: "unerr is now supervising your AI agents.", style: "text-foreground" },
    ],
  },
]

interface HowItWorksProps {
  /** Server-rendered Shiki HTML for the desktop terminal */
  terminalHtml?: string
}

export function HowItWorks({ terminalHtml }: HowItWorksProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !stepsRef.current || !terminalRef.current) return

    // Respect prefers-reduced-motion — skip GSAP animations and pinning
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Pin the terminal while steps scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top+=100",
        end: "bottom bottom",
        pin: terminalRef.current,
        scrub: true,
      })

      // Fade in steps as they enter view — hint compositor
      const stepEls = gsap.utils.toArray<HTMLElement>(".step-item")
      gsap.set(stepEls, { willChange: "transform, opacity" })
      stepEls.forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          scrollTrigger: {
            trigger: step,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-28">
      {/* Atmospheric glow — centered, mid-range intensity */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.05), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <h2 className="font-grotesk text-lit text-center text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
          Zero to protected in 60 seconds.
        </h2>
        <p className="text-muted-foreground/80 mt-3 text-center text-sm">One command. Full graph. Zero config.</p>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left: Scrolling Steps with timeline rail */}
          <div ref={stepsRef} className="relative flex flex-col gap-32 py-12">
            {/* Timeline rail — runs through the center of all badges */}
            <div
              className="bg-border/20 absolute top-12 bottom-12 left-[19px] hidden w-px lg:block"
              aria-hidden="true"
            />

            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="step-item relative flex gap-5">
                  {/* Badge on timeline */}
                  <div className="relative z-10 shrink-0">
                    <div className="bg-accent-fade text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      {step.num}
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="text-accent/60 text-[10px] font-semibold tracking-[0.12em] uppercase">
                      Step {step.num} &mdash; {step.label}
                    </div>
                    <div className="mt-1.5 flex items-center gap-2.5">
                      <Icon className="text-accent h-5 w-5 shrink-0" />
                      <h3 className="font-grotesk text-foreground text-xl font-semibold tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mt-2.5 max-w-md text-base leading-relaxed">
                      {step.description}
                    </p>

                    {/* Mobile inline code snippet — visible only when terminal is hidden */}
                    <div className="border-border bg-background mt-4 w-full overflow-hidden rounded-lg border p-3 font-mono text-[12px] leading-relaxed lg:hidden">
                      {step.code.map((line) => (
                        <div key={line.text} className={line.style}>
                          {line.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Pinned Terminal — desktop only */}
          <div className="relative hidden h-[600px] lg:block">
            <div ref={terminalRef} className="absolute top-0 w-full">
              <div className="border-border-strong bg-background shadow-accent/5 overflow-hidden rounded-xl border shadow-2xl">
                {/* Title bar with traffic lights + path */}
                <div className="border-border-strong flex h-9 items-center gap-1.5 border-b px-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="text-muted-foreground ml-2 font-mono text-[11px] tracking-widest uppercase">
                    terminal
                  </span>
                  <span className="text-muted-foreground/30 ml-auto font-mono text-[10px]">~/project</span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-[13px] leading-relaxed">
                  {terminalHtml ? (
                    <div
                      className="[&_code]:!font-mono [&_code]:!text-[13px] [&_code]:!leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0"
                      dangerouslySetInnerHTML={{ __html: terminalHtml }}
                    />
                  ) : (
                    <>
                      <div className="text-muted-foreground">$ npx @autorail/unerr setup</div>
                      <div className="text-success">✓ Detected Cursor IDE</div>
                      <div className="text-success">✓ Authenticated via GitHub</div>
                      <div className="text-success">✓ MCP server configured at localhost:9315</div>
                      <div className="text-success">✓ Indexing 3 repositories...</div>
                      <div className="text-success">✓ Health audit complete — Grade: A (92/100)</div>
                      <div className="text-foreground mt-2">unerr is now supervising your AI agents.</div>
                    </>
                  )}
                  <span className="bg-success mt-1 inline-block h-4 w-2 animate-pulse" />
                </div>

                {/* Status bar — connected session indicator */}
                <div className="border-border/50 flex items-center gap-2 border-t px-4 py-1.5">
                  <span className="bg-success h-1.5 w-1.5 rounded-full" />
                  <span className="text-muted-foreground/40 font-mono text-[10px]">MCP connected · localhost:9315</span>
                  <span className="text-muted-foreground/20 ml-auto font-mono text-[10px]">
                    3 repos · 12,847 entities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade — dissolves section into the void */}
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
