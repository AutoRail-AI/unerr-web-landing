"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How does the 7-day free trial work?",
    a: "Sign up with your GitHub account and get full Pro access for 7 days. No credit card required. If you don't convert, your data is deleted — no zombie accounts.",
  },
  {
    q: "How is unerr different from CodeRabbit?",
    a: "CodeRabbit is an AI code reviewer that reads diffs. unerr builds a persistent knowledge graph of your entire codebase — every entity, relationship, and architectural pattern. PR review is one feature; the graph powers blast radius analysis, drift detection, rule enforcement, prompt rewind, and MCP integration for any AI coding agent.",
  },
  {
    q: "What about the OSS Guardian program?",
    a: "Any public GitHub repository gets full Pro features for free, forever. No application process — just connect your repo. We believe maintainers deserve infrastructure-grade tooling without a price tag.",
  },
  {
    q: "Can I use unerr with Cursor, Windsurf, or Claude Code?",
    a: "Yes. unerr exposes a local MCP server at localhost:9315 that any MCP-compatible AI coding agent can connect to. Cursor, Windsurf, Claude Code, and VS Code Copilot all work out of the box.",
  },
  {
    q: "What data do you store?",
    a: "We index your code structure (files, functions, classes, relationships) into a knowledge graph. We never store raw source code on our servers. The local MCP proxy resolves 80% of queries against your local clone — only metadata travels to the cloud.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual plans are billed upfront at a 20% discount. Pro annual is $192/year instead of $240. You can switch between monthly and annual at any time — we'll prorate the difference.",
  },
  {
    q: "Do you support self-hosted deployments?",
    a: "Yes, on the Enterprise plan. We provide Docker images and Helm charts for self-hosted deployment behind your firewall. All data stays on your infrastructure.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function FaqAccordion() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Split layout: heading left, accordion right */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left: Heading block — sticky on desktop */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent/60">
              FAQ
            </p>
            <h2 className="mt-3 font-grotesk text-2xl font-bold tracking-[-0.02em] text-lit sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Reach out at{" "}
              <a
                href="mailto:hello@unerr.dev"
                className="text-accent transition-colors hover:text-accent/80"
              >
                hello@unerr.dev
              </a>
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <Accordion.Root
            type="single"
            collapsible
            asChild
          >
            <motion.div
              className="space-y-2"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={prefersReducedMotion ? undefined : staggerContainer}
            >
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={prefersReducedMotion ? undefined : staggerChild}>
                  <Accordion.Item
                    value={`faq-${i}`}
                    className="rounded-xl border border-border-strong bg-card transition-colors hover:border-border"
                  >
                    <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80 [&[data-state=open]>svg]:rotate-180">
                      {faq.q}
                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </motion.div>
              ))}
            </motion.div>
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
