"use client"

import { Github, Loader2 } from "lucide-react"
import posthog from "posthog-js"
import { createContext, type ReactNode, useCallback, useContext, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// --------------- context ---------------

type Plan = "general" | "oss"

interface WaitlistContextValue {
  open: (defaultPlan?: Plan) => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error("useWaitlist must be used within <WaitlistProvider>")
  return ctx
}

// --------------- provider + dialog ---------------

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<Plan>("general")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const open = useCallback((defaultPlan: Plan = "general") => {
    setPlan(defaultPlan)
    setStatus("idle")
    setErrorMsg("")
    setSuccessMsg("")
    setIsOpen(true)
    posthog.capture("waitlist_dialog_opened", { plan: defaultPlan })
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get("name") as string).trim()
    const email = (data.get("email") as string).trim()
    const linkedin = (data.get("linkedin") as string).trim()
    const githubUrl = (data.get("githubUrl") as string | null)?.trim() || ""
    const maintainerProof = (data.get("maintainerProof") as string | null)?.trim() || ""

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          linkedin: linkedin || undefined,
          plan,
          githubUrl: plan === "oss" ? githubUrl : undefined,
          maintainerProof: plan === "oss" ? maintainerProof || undefined : undefined,
        }),
      })

      const body = (await res.json()) as { message?: string; error?: string }

      if (!res.ok) {
        setStatus("error")
        setErrorMsg(body.error || "Something went wrong")
        return
      }

      setStatus("success")
      setSuccessMsg(body.message || "You're on the list!")
      posthog.capture("waitlist_form_submitted", { plan, status: res.status === 201 ? "new" : "existing" })
    } catch {
      setStatus("error")
      setErrorMsg("Network error. Please try again.")
    }
  }

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-border/60 bg-background sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-grotesk text-xl tracking-tight">Join the waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when unerr launches. We&apos;ll notify you as soon as access opens up.
            </DialogDescription>
          </DialogHeader>

          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="bg-accent/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                <svg
                  className="text-accent h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground text-sm font-medium">{successMsg}</p>
              <p className="text-muted-foreground mt-1 text-xs">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              {/* Plan toggle */}
              <div className="border-border flex rounded-lg border p-1">
                <button
                  type="button"
                  onClick={() => setPlan("general")}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    plan === "general" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  General
                </button>
                <button
                  type="button"
                  onClick={() => setPlan("oss")}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    plan === "oss" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  OSS Guardian
                </button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wl-name">Name</Label>
                <Input id="wl-name" name="name" placeholder="Jane Smith" required autoComplete="name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wl-email">Email</Label>
                <Input
                  id="wl-email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wl-linkedin">
                  LinkedIn <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="wl-linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/janesmith"
                  autoComplete="url"
                />
              </div>

              {/* OSS-specific fields */}
              {plan === "oss" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="wl-github">GitHub repo or organization</Label>
                    <Input id="wl-github" name="githubUrl" placeholder="https://github.com/org/repo" required />
                    <p className="text-muted-foreground text-xs">The open-source project you maintain.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wl-proof">
                      Maintainer verification link <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="wl-proof"
                      name="maintainerProof"
                      placeholder="https://github.com/org/repo/commits?author=you"
                    />
                    <p className="text-muted-foreground text-xs">
                      A link that shows you&apos;re a maintainer — commit history, CODEOWNERS, team page, etc.
                    </p>
                  </div>
                </>
              )}

              {status === "error" && <p className="text-destructive text-sm">{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group bg-accent-fade text-primary-foreground relative flex h-10 w-full items-center justify-center overflow-hidden rounded-full text-sm font-medium shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.4)] disabled:opacity-60"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </span>
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  )
}
