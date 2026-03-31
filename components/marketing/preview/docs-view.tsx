"use client"

/**
 * Preview DocsView — mirrors real AtlasPageClient from kap10-server.
 *
 * Phase 18.5 spec: 3-column layout
 *   NavTree (240px) | Content (flex-1, max-w-3xl centered) | ContextPanel (260px, hidden <1280px)
 *
 * NavTree: domain-grouped modules, active state border-l-2 border-accent
 * ModulePage: step-flow blocks, feature prose, architecture section
 * Overview (no module selected): Bento Grid with community tiles
 * ContextPanel: "On This Page" scroll-spy headings + action buttons
 */

import { AnimatePresence, motion } from "framer-motion"
import { BookOpen, Check, ChevronRight, CircleAlert, FileCode, Sparkles, X, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { getAudits, NODE_COLORS, type PreviewRepo } from "../preview-data"

interface DocModule {
  id: number
  name: string
  classification: string
  entityCount: number
  description: string
}

interface DocsViewProps {
  repo: PreviewRepo
}

export function DocsView({ repo }: DocsViewProps) {
  const [activeModule, setActiveModule] = useState<number | null>(null)

  useEffect(() => {
    setActiveModule(null)
  }, [repo.slug])

  const modules: DocModule[] = repo.nodes.map((node, i) => ({
    id: i,
    name: node.label,
    classification: node.type === "module" ? "feature" : node.type === "class" ? "infrastructure" : "support",
    entityCount: Math.round(node.lineCount / 50),
    description: node.justification,
  }))

  const active = activeModule !== null ? modules.find((m) => m.id === activeModule) : null
  const audits = getAudits(repo)

  // Group modules into domains (simplified version of groupCommunitiesIntoDomains)
  const featureModules = modules.filter((m) => m.classification === "feature")
  const infraModules = modules.filter((m) => m.classification !== "feature")

  return (
    <motion.div
      key={`docs-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full overflow-hidden"
    >
      {/* ── NavTree Sidebar (Phase 18.5: 240px → scaled to 150px for preview) ── */}
      <div className="w-[150px] shrink-0 border-r border-border overflow-y-auto bg-background">
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-border">
          <p className="text-[10px] font-semibold text-foreground font-grotesk uppercase tracking-wide">
            Codebase Atlas
          </p>
        </div>

        {/* Overview link — Phase 18.5: always first, ★ icon */}
        <button
          onClick={() => setActiveModule(null)}
          className={[
            "flex w-full items-center gap-2 px-3 py-2 text-left text-[10px] transition-colors border-b border-border/50",
            activeModule === null
              ? "bg-accent/5 text-accent font-medium border-l-2 border-l-accent"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
          ].join(" ")}
        >
          <BookOpen className="h-3 w-3 shrink-0" />
          <span>Overview</span>
        </button>

        {/* Feature domain group — Phase 18.5: collapsible, entity count badge */}
        {featureModules.length > 0 && (
          <div>
            <div className="px-3 pt-3 pb-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 flex items-center justify-between">
              <span>Core Features</span>
              <span className="rounded-full bg-muted px-1.5 text-[8px] text-muted-foreground tabular-nums">
                {featureModules.length}
              </span>
            </div>
            {featureModules.map((mod) => {
              const nodeIdx = modules.findIndex((m) => m.id === mod.id)
              return (
                <motion.button
                  key={mod.id}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: nodeIdx * 0.03 }}
                  onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                  className={[
                    "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[10px] transition-colors",
                    activeModule === mod.id
                      ? "bg-accent/5 text-accent font-medium border-l-2 border-l-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                  ].join(" ")}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: NODE_COLORS[repo.nodes[nodeIdx]?.type ?? "module"] ?? "var(--color-border)" }}
                  />
                  <span className="truncate">{mod.name}</span>
                  <span className="ml-auto text-[8px] text-muted-foreground/50 tabular-nums">{mod.entityCount}</span>
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Infrastructure group */}
        {infraModules.length > 0 && (
          <div>
            <div className="px-3 pt-3 pb-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 flex items-center justify-between">
              <span>Infrastructure</span>
              <span className="rounded-full bg-muted px-1.5 text-[8px] text-muted-foreground tabular-nums">
                {infraModules.length}
              </span>
            </div>
            {infraModules.map((mod) => {
              const nodeIdx = modules.findIndex((m) => m.id === mod.id)
              return (
                <motion.button
                  key={mod.id}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: nodeIdx * 0.03 }}
                  onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                  className={[
                    "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[10px] transition-colors",
                    activeModule === mod.id
                      ? "bg-accent/5 text-accent font-medium border-l-2 border-l-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                  ].join(" ")}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: NODE_COLORS[repo.nodes[nodeIdx]?.type ?? "module"] ?? "var(--color-border)" }}
                  />
                  <span className="truncate">{mod.name}</span>
                </motion.button>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Content Area (Phase 18.5: flex-1, Pattern C: mx-auto max-w-3xl px-8 py-6) ── */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={`mod-${active.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-2xl px-6 py-5 space-y-5"
            >
              {/* Breadcrumb — Phase 18.5: Atlas > Domain > Module */}
              <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                <button onClick={() => setActiveModule(null)} className="hover:text-foreground transition-colors">Atlas</button>
                <ChevronRight className="h-2.5 w-2.5" />
                <span className="text-foreground font-medium">{active.name}</span>
              </div>

              {/* Module header — Phase 18.5: classification badge + entity count */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium text-accent">
                    {active.classification === "feature" ? "⭐ feature" : active.classification === "infrastructure" ? "⚙ infrastructure" : "🧪 support"}
                  </span>
                  <span className="text-[9px] text-muted-foreground">{active.entityCount} entities</span>
                </div>
                <h1 className="font-grotesk text-lg font-semibold text-foreground">{active.name}</h1>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{active.description}</p>
              </div>

              {/* Step-Flow Section — Phase 18.5: numbered steps with left accent border */}
              <div className="space-y-2">
                <h2 className="text-xs font-semibold text-foreground mt-6 pb-2 border-b border-border">How It Works</h2>
                <div className="border-l-2 border-accent/30 pl-4 space-y-3">
                  {[
                    { step: "①", text: `Initialize ${active.name.toLowerCase()} with configuration from environment`, guard: null },
                    { step: "②", text: `Validate incoming request against ${active.entityCount > 30 ? "comprehensive" : "focused"} schema rules`, guard: "→ Invalid: throw ValidationError" },
                    { step: "③", text: `Process request through ${modules.filter((m) => m.id !== active.id).slice(0, 2).map((m) => m.name).join(" → ")} pipeline`, guard: null },
                    { step: "④", text: `Return structured response with metadata`, guard: null },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-accent font-mono text-[11px] shrink-0">{s.step}</span>
                        <span className="text-[10px] text-muted-foreground leading-relaxed">{s.text}</span>
                      </div>
                      {/* Guard/condition branch — Phase 18.5: pl-6 border-l-2 border-accent/20 */}
                      {s.guard && (
                        <div className="ml-6 mt-1 pl-4 border-l-2 border-accent/20">
                          <span className="text-[9px] rounded bg-amber-500/10 text-amber-400 px-1.5 py-0.5">{s.guard}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architecture section — Phase 18.5: h2 with border-b divider */}
              <div className="space-y-2">
                <h2 className="text-xs font-semibold text-foreground mt-6 pb-2 border-b border-border">Architecture</h2>
                <div className="rounded-md border border-border bg-muted/20 p-3 font-mono text-[9px] text-muted-foreground space-y-1">
                  {repo.edges
                    .filter((e) => e.from === repo.nodes[active.id]?.id || e.to === repo.nodes[active.id]?.id)
                    .slice(0, 5)
                    .map((edge, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-foreground">{edge.from}</span>
                        <span className="text-accent">→</span>
                        <span className="text-foreground">{edge.to}</span>
                        <span className="ml-auto text-muted-foreground/40 text-[8px]">
                          {edge.weight >= 0.8 ? "calls" : edge.weight >= 0.5 ? "imports" : "uses"}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Key entities — Phase 18.5: entity list with kind badges */}
              <div className="space-y-2">
                <h2 className="text-xs font-semibold text-foreground mt-6 pb-2 border-b border-border">Key Entities</h2>
                <div className="grid grid-cols-2 gap-1.5">
                  {["init()", "process()", "validate()", "cleanup()"].map((entity) => (
                    <div
                      key={entity}
                      className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1.5 text-[9px] group hover:border-accent/40 transition-colors cursor-pointer"
                    >
                      <FileCode className="h-3 w-3 text-muted-foreground shrink-0" />
                      <span className="font-mono text-foreground">{entity}</span>
                      {/* Hover action buttons — Phase 18.5 */}
                      <span className="ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap className="h-2.5 w-2.5 text-accent" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* ── Atlas Overview — Phase 18.5: Bento Grid ── */
            <motion.div
              key="atlas-overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-5 space-y-5"
            >
              {/* Header */}
              <div>
                <h1 className="font-grotesk text-base font-semibold text-foreground">Codebase Atlas</h1>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  Auto-generated documentation from your codebase knowledge graph
                </p>
              </div>

              {/* Bento Grid — Phase 18.5: grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 → scaled */}
              <div className="grid grid-cols-2 gap-3">
                {modules.slice(0, 6).map((mod, i) => (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    onClick={() => setActiveModule(mod.id)}
                    className="rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: NODE_COLORS[repo.nodes[i]?.type ?? "module"] }}
                      />
                      <span className="text-[10px] font-medium text-foreground">{mod.name}</span>
                      <span className="ml-auto rounded-full bg-muted px-1.5 text-[8px] text-muted-foreground tabular-nums">
                        {mod.entityCount}
                      </span>
                    </div>
                    {/* Classification badge */}
                    <span className="inline-flex rounded-full bg-accent/10 px-1.5 py-0.5 text-[8px] font-medium text-accent mb-1.5">
                      {mod.classification}
                    </span>
                    <p className="text-[9px] text-muted-foreground line-clamp-2 leading-relaxed">{mod.description}</p>
                    <div className="mt-2 flex items-center gap-1 text-[8px] text-accent font-medium">
                      Read module <ChevronRight className="h-2 w-2" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Domain terms */}
              <div className="rounded-lg border border-border bg-card p-3">
                <h3 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Domain Language
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {repo.nodes.map((n) => (
                    <span
                      key={n.id}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 text-[9px] text-foreground"
                    >
                      {n.label}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[9px] text-muted-foreground/50">
                Auto-generated · Last updated 2 hours ago · {repo.entityCount.toLocaleString()} entities analyzed
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Context Panel (Phase 18.5: ~260px → scaled to 130px, hidden on narrow) ── */}
      <div className="hidden xl:flex w-[130px] shrink-0 flex-col border-l border-border overflow-y-auto">
        {active ? (
          <div className="p-3 space-y-4">
            {/* On This Page — Phase 18.5: scroll-spy headings */}
            <div>
              <h4 className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 mb-2">On This Page</h4>
              <div className="space-y-1">
                {["How It Works", "Architecture", "Key Entities"].map((heading, i) => (
                  <div
                    key={heading}
                    className={`flex items-center gap-1.5 text-[9px] cursor-pointer transition-colors ${
                      i === 0 ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {i === 0 && <span className="h-1 w-1 rounded-full bg-accent shrink-0" />}
                    <span className="truncate">{heading}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons — Phase 18.5: Trace, Impact, Graph */}
            <div className="space-y-1">
              <button className="flex w-full items-center gap-1.5 rounded-md border border-border px-2 py-1.5 text-[9px] text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors">
                <Zap className="h-3 w-3 text-accent shrink-0" />
                Trace
              </button>
              <button className="flex w-full items-center gap-1.5 rounded-md border border-border px-2 py-1.5 text-[9px] text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors">
                <Sparkles className="h-3 w-3 text-warning shrink-0" />
                Impact
              </button>
            </div>

            {/* Mini entity list */}
            <div>
              <h4 className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 mb-1.5">Entities</h4>
              {["init()", "process()", "validate()"].map((e) => (
                <div key={e} className="flex items-center gap-1 py-0.5 text-[8px] text-muted-foreground hover:text-foreground cursor-pointer">
                  <FileCode className="h-2 w-2 shrink-0" />
                  <span className="font-mono truncate">{e}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3 space-y-3">
            {/* Health audits — shown on overview */}
            <h4 className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60">Health Audits</h4>
            {audits.slice(0, 8).map((audit) => (
              <div key={audit.name} className="flex items-center gap-1.5 text-[8px] text-muted-foreground">
                {audit.status === "pass" ? (
                  <Check className="h-2.5 w-2.5 text-success shrink-0" />
                ) : audit.status === "warn" ? (
                  <CircleAlert className="h-2.5 w-2.5 text-warning shrink-0" />
                ) : (
                  <X className="h-2.5 w-2.5 text-destructive shrink-0" />
                )}
                <span className="truncate">{audit.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
