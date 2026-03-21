"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, X } from "lucide-react"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const withoutItems = [
  "No codebase memory",
  "Ignores existing patterns",
  "No blast radius awareness",
  "Can\u2019t rewind AI changes",
  "Stale context, wrong answers",
]

const withItems = [
  "Living knowledge graph",
  "Pattern enforcement",
  "Blast radius maps",
  "Full audit trail & rewind",
  "Verified docs via MCP",
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const withoutRef = useRef<HTMLDivElement>(null)
  const withRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !withoutRef.current || !withRef.current) return

    // Respect prefers-reduced-motion — skip GSAP animations entirely
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Hint compositor for transform-animated elements
      const animatedEls = [headingRef.current, withoutRef.current, withRef.current, quoteRef.current].filter(Boolean)
      gsap.set(animatedEls, { willChange: "transform, opacity" })

      // H2 heading fade-up
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        })
      }

      // "Without" card enters first — scroll-driven from left
      gsap.from(withoutRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: withoutRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      })

      // "With" card enters later — staggered by scroll position, from right
      gsap.from(withRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: withRef.current,
          start: "top bottom-=40",
          toggleActions: "play none none reverse",
        },
      })

      // Quote fade-up
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top bottom-=60",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-6 py-28">
      {/* Gentle atmospheric lift at center — not a hard background, just warmth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.03), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center font-grotesk text-3xl font-bold tracking-[-0.02em] text-lit sm:text-4xl"
        >
          Every AI coding agent today is{" "}
          <br className="hidden sm:block" />
          a brilliant intern with <span className="text-gradient">amnesia</span>.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div
            ref={withoutRef}
            className="rounded-2xl border border-border-strong bg-card p-6 border-l-2 border-l-destructive/30"
          >
            <h3 className="font-grotesk text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Without unerr
            </h3>
            <ul className="mt-4 space-y-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={withRef}
            className="rounded-2xl border border-border-strong bg-card p-6 border-l-2 border-l-accent/30"
            style={{
              boxShadow:
                "0 8px 32px -8px rgba(139,92,246,0.08), 0 0 0 1px rgba(139,92,246,0.04)",
            }}
          >
            <h3 className="font-grotesk text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              With unerr
            </h3>
            <ul className="mt-4 space-y-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          ref={quoteRef}
          className="mx-auto mt-12 max-w-2xl text-center text-sm italic leading-relaxed text-muted-foreground"
        >
          &ldquo;AI co-authored code contains 1.7&times; more major issues,
          75% more misconfigurations, and 2.74&times; higher security
          vulnerabilities.&rdquo;
          <br />
          <span className="not-italic text-xs">
            &mdash; Based on analysis of 470+ open-source GitHub PRs
          </span>
        </p>
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
