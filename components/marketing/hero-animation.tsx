"use client"

import { useReducedMotion } from "framer-motion"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

interface HeroAnimationProps {
  headline: string
  gradientLine: string
  subtitle: ReactNode
}

export function HeroAnimation({ headline, gradientLine, subtitle }: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Headline words reveal
      tl.set(".hero-word", { opacity: 1, filter: "blur(0px)", y: 0 })
        .from(".hero-word", {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
          stagger: 0.04,
          duration: 0.8,
        })
        // Subtitle slide up
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReduced])

  const headingClasses =
    "font-grotesk text-3xl font-bold tracking-[-0.03em] leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl"

  return (
    <div ref={containerRef} className="flex flex-col">
      <h1 className={headingClasses}>
        {headline.split(" ").map((word, i) => (
          <span key={i} className="hero-word text-lit mr-[0.28em] inline-block">
            {word}
          </span>
        ))}
        <br />
        <span>
          {gradientLine.split(" ").map((word, i) => (
            <span key={i} className="hero-word text-gradient mr-[0.28em] inline-block">
              {word}
            </span>
          ))}
        </span>
      </h1>

      <div className="hero-subtitle mt-6">{subtitle}</div>
    </div>
  )
}
