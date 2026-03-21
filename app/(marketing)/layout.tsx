import type { Metadata } from "next"
import Script from "next/script"
import { ScrollProgressBar } from "@/components/marketing/scroll-progress-bar"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { MarketingProviders } from "./providers"

export const metadata: Metadata = {
  title: {
    default: "unerr — The Missing Backend for AI Coding Agents",
    template: "%s | unerr",
  },
  description:
    "Code intelligence platform that supervises AI coding agents. Knowledge graph, architectural guardrails, and MCP integration. Connected in 60 seconds.",
  metadataBase: new URL("https://unerr.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "unerr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "unerr — The Missing Backend for AI Coding Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unerrdev",
    images: ["/og-image.png"],
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MarketingProviders>
      {/* Skip-to-content — A11Y requirement */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent-fade focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />
      <ScrollProgressBar />
      <main id="main-content" className="relative min-h-screen bg-background">
        {/* Page-level continuous grid — spans all sections for "one void" illusion */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.03,
            maskImage:
              "radial-gradient(ellipse at 50% 30%, black 0%, transparent 85%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-[1]">{children}</div>
      </main>
      <SiteFooter />

      {/* Plausible — privacy-compliant analytics (loads when domain is configured) */}
      {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </MarketingProviders>
  )
}
