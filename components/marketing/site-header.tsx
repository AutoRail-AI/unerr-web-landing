"use client"

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BrandLogo } from "@/components/brand-logo"
import { useWaitlist } from "@/components/marketing/waitlist-dialog"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "OSS Guardian", href: "/oss" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.unerr.dev", external: true },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { open: openWaitlist } = useWaitlist()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20))

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-background/80 border-b backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-0">
        <BrandLogo variant="full" size="lg" />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-muted-foreground hover:text-foreground relative flex items-center gap-1 text-sm transition-colors"
            >
              {item.label}
              {item.external && <ExternalLink className="h-3 w-3" />}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => openWaitlist()}
            className="bg-foreground text-background inline-flex h-8 items-center rounded-full px-4 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Get Started
          </button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-md"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <AnimatePresence>
            {mobileOpen && (
              <SheetContent side="right" className="bg-background flex w-full flex-col p-0 sm:w-80">
                <div className="border-border flex h-16 items-center justify-between border-b px-6">
                  <BrandLogo variant="full" size="md" onClick={() => setMobileOpen(false)} />
                  <SheetClose asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-md"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        onClick={() => setMobileOpen(false)}
                        className="text-foreground hover:bg-muted flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium transition-colors"
                      >
                        {item.label}
                        {item.external && <ExternalLink className="text-muted-foreground h-3.5 w-3.5" />}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05, ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
                    className="mt-4"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false)
                        openWaitlist()
                      }}
                      className="bg-foreground text-background flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                    >
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </SheetContent>
            )}
          </AnimatePresence>
        </Sheet>
      </nav>
    </header>
  )
}
