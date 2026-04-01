import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

const footerLinks: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Product", href: "/" },
  { label: "OSS Guardian", href: "/oss" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.unerr.dev", external: true },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
]

export function SiteFooter() {
  return (
    <footer className="border-border bg-background relative border-t">
      {/* Top fade + subtle glow — dissolves footer out of CTA glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{
          background: "linear-gradient(to bottom, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.02), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 pt-10 pb-4">
        {footerLinks.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-2 pb-10">
        <div className="flex items-center gap-3">
          <BrandLogo variant="icon" size="sm" href={false} />
          <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} unerr Inc.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/unerr-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://x.com/unerr_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
