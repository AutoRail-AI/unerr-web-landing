"use client"

/**
 * Preview IssuesView — mirrors real IssuesPageClient from kap10-server.
 *
 * Phase 20 spec: Linear-style ticket list with filter bar, column headers,
 * row height 44px, detail panel as Sheet (720px). We simulate the sheet as
 * a slide-in panel at smaller scale for the preview.
 *
 * Row structure (Phase 20): checkbox | priority | identifier | state | title | type pill | severity dot | effort | age
 * Filter bar: state tabs + priority buttons + sort + search
 * Detail panel: two-column (content + properties rail w-52)
 */

import { AnimatePresence, motion } from "framer-motion"
import { Check, Search, Shield, Sparkles, X } from "lucide-react"
import { useEffect, useState } from "react"
import { SEVERITY_COLORS, type PreviewRepo } from "../preview-data"

const SEVERITY_ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 }

/** Phase 20: priority dot colors — bg-destructive/warning/primary/muted */
const PRIORITY_DOT: Record<string, string> = {
  high: "bg-warning",
  medium: "bg-primary",
  low: "bg-muted-foreground/40",
}

const TYPE_LABELS: Record<string, string> = {
  circular_dependency: "Circular Dep",
  high_fan_in: "High Fan-In",
  dead_code: "Dead Code",
  low_confidence: "Low Confidence",
  high_fan_out: "God Functions",
  documentation_staleness: "Stale Docs",
  architectural_violation: "Arch Violation",
}

/** Phase 20: effort short labels */
const EFFORT_SHORT: Record<string, string> = {
  trivial: "XS",
  small: "S",
  medium: "M",
  large: "L",
}

interface IssueTicketRow {
  id: string
  identifier: string
  type: string
  label: string
  severity: "high" | "medium" | "low"
  count: number
  detail: string
  entity?: string
  file?: string
  effort: string
  age: string
}

interface IssuesViewProps {
  repo: PreviewRepo
}

export function IssuesView({ repo }: IssuesViewProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filterState, setFilterState] = useState<"open" | "triaged" | "resolved">("open")
  const [fixingId, setFixingId] = useState<string | null>(null)
  const [fixedIds, setFixedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    setSelectedId(null)
    setFixingId(null)
    setFixedIds(new Set())
    setFilterState("open")
  }, [repo.slug])

  // Phase 20: Expand risks into individual tickets with identifiers
  let ticketIdx = 0
  const tickets: IssueTicketRow[] = repo.risks
    .flatMap((risk) => {
      if (risk.locations && risk.locations.length > 0) {
        return risk.locations.map((loc, i) => {
          ticketIdx++
          return {
            id: `${risk.riskType}-${i}`,
            identifier: `UNR-${String(ticketIdx).padStart(3, "0")}`,
            type: risk.riskType,
            label: TYPE_LABELS[risk.riskType] ?? risk.label,
            severity: risk.severity,
            count: 1,
            detail: risk.detail,
            entity: loc.entity,
            file: `${loc.file}:${loc.line}`,
            effort: risk.severity === "high" ? "medium" : "small",
            age: `${Math.floor(Math.random() * 14) + 1}d`,
          }
        })
      }
      ticketIdx++
      return [
        {
          id: risk.riskType,
          identifier: `UNR-${String(ticketIdx).padStart(3, "0")}`,
          type: risk.riskType,
          label: TYPE_LABELS[risk.riskType] ?? risk.label,
          severity: risk.severity,
          count: risk.count,
          detail: risk.detail,
          effort: risk.severity === "high" ? "large" : "medium",
          age: `${Math.floor(Math.random() * 21) + 1}d`,
        },
      ]
    })
    .sort((a, b) => (SEVERITY_ORDER[a.severity] ?? 2) - (SEVERITY_ORDER[b.severity] ?? 2))

  const selected = selectedId ? tickets.find((t) => t.id === selectedId) : null

  function handleFix(id: string) {
    setFixingId(id)
    setTimeout(() => {
      setFixingId(null)
      setFixedIds((prev) => new Set(prev).add(id))
    }, 1800)
  }

  return (
    <motion.div
      key={`issues-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full flex-col overflow-hidden"
    >
      {/* ── Filter Bar (Phase 20: IssuesFilterBar) ── */}
      <div className="border-border flex shrink-0 items-center gap-2 border-b px-4 py-2">
        {/* State tabs */}
        <div className="flex items-center gap-0.5">
          {(["open", "triaged", "resolved"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilterState(f)}
              className={[
                "rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
                filterState === f
                  ? "bg-sidebar-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
              ].join(" ")}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Priority dots summary — Phase 20 */}
        <div className="text-muted-foreground ml-2 flex items-center gap-2 text-[11px]">
          {(["high", "medium", "low"] as const).map((p) => {
            const count = tickets.filter((t) => t.severity === p).length
            if (count === 0) return null
            return (
              <span key={p} className="hover:text-foreground flex cursor-pointer items-center gap-1 transition-colors">
                <span className={`h-1.5 w-1.5 rounded-full ${PRIORITY_DOT[p]}`} />
                {count}
              </span>
            )
          })}
        </div>

        <div className="flex-1" />

        {/* Search — Phase 20 */}
        <div className="border-border bg-background/50 flex max-w-[160px] items-center gap-1.5 rounded-md border px-2 py-1">
          <Search className="text-muted-foreground h-3 w-3 shrink-0" />
          <span className="text-muted-foreground/50 truncate text-[10px]">Search issues...</span>
        </div>

        {/* Keyboard hint — Phase 20 */}
        <span className="text-muted-foreground bg-muted hidden rounded px-1 font-mono text-[10px] lg:inline">j/k</span>
      </div>

      {/* ── Summary stats bar (Phase 20) ── */}
      <div className="border-border text-muted-foreground flex shrink-0 items-center gap-3 border-b px-4 py-1.5 text-xs">
        <span className="text-foreground font-medium">{tickets.length}</span> issues
        <span className="text-border">·</span>
        <span>sorted by severity</span>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* ── Ticket List (Phase 20: ROW_HEIGHT = 44px, flex-1 overflow-y-auto) ── */}
        <div className="flex-1 overflow-y-auto">
          {tickets.map((ticket, i) => {
            const isFixed = fixedIds.has(ticket.id)
            const isSelected = selectedId === ticket.id
            const dotClass = PRIORITY_DOT[ticket.severity] ?? PRIORITY_DOT.low

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.025, duration: 0.2 }}
                onClick={() => setSelectedId(isSelected ? null : ticket.id)}
                style={{ height: 44 }}
                className={[
                  /* Phase 20: group flex items-center gap-2.5 px-4 py-2.5 border-b border-border cursor-pointer transition-colors */
                  "group border-border flex cursor-pointer items-center gap-2.5 border-b px-4 transition-colors",
                  isSelected ? "bg-accent/5" : "hover:bg-muted/30",
                  isFixed ? "opacity-40" : "",
                ].join(" ")}
              >
                {/* Checkbox — Phase 20 */}
                <span
                  className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition-colors ${
                    isFixed ? "bg-accent border-accent" : "border-border group-hover:border-muted-foreground"
                  }`}
                >
                  {isFixed && <Check className="text-primary-foreground h-2 w-2" />}
                </span>

                {/* Priority dot — Phase 20 */}
                <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm`}>
                  <span className={`h-2 w-2 rounded-full ${isFixed ? "bg-success" : dotClass}`} />
                </span>

                {/* Identifier — Phase 20: font-mono text-xs text-muted-foreground w-14 tabular-nums */}
                <span className="text-muted-foreground w-14 shrink-0 font-mono text-[10px] tabular-nums">
                  {ticket.identifier}
                </span>

                {/* Title — Phase 20: flex-1 min-w-0 truncate text-sm font-medium */}
                <span
                  className={`text-foreground min-w-0 flex-1 truncate text-[11px] font-medium ${isFixed ? "line-through" : ""}`}
                >
                  {ticket.label}
                  {ticket.entity && (
                    <span className="text-muted-foreground ml-1 font-mono text-[10px] font-normal">
                      {ticket.entity}
                    </span>
                  )}
                </span>

                {/* Severity dot + label — Phase 20 */}
                <span className="flex shrink-0 items-center gap-1">
                  <span className={`h-1.5 w-1.5 rounded-full ${isFixed ? "bg-success" : dotClass}`} />
                  <span className="text-muted-foreground text-[10px] capitalize">{ticket.severity}</span>
                </span>

                {/* Effort badge — Phase 20: rounded bg-muted px-1.5 py-0.5 text-[11px] font-mono */}
                <span className="bg-muted text-muted-foreground shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium">
                  {EFFORT_SHORT[ticket.effort] ?? ticket.effort}
                </span>

                {/* Age — Phase 20: text-[11px] tabular-nums w-8 text-right */}
                <span className="text-muted-foreground w-6 shrink-0 text-right text-[10px] tabular-nums">
                  {ticket.age}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* ── Detail Panel (Phase 20: Sheet side="right" w-[720px] — scaled to 240px for preview) ── */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border-border shrink-0 overflow-hidden border-l"
            >
              <div className="flex h-full w-[240px] flex-col">
                {/* Header — Phase 20: px-6 pt-6 pb-4 border-b */}
                <div className="border-border shrink-0 border-b px-4 pt-4 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground font-mono text-[9px]">{selected.identifier}</span>
                    <span
                      className="rounded-full px-1.5 py-0.5 text-[9px] font-medium"
                      style={{
                        color: SEVERITY_COLORS[selected.severity],
                        backgroundColor: `${SEVERITY_COLORS[selected.severity]}10`,
                      }}
                    >
                      {selected.severity}
                    </span>
                    <span className="bg-muted text-muted-foreground rounded px-1 py-0.5 text-[9px]">
                      {EFFORT_SHORT[selected.effort] ?? selected.effort}
                    </span>
                  </div>
                  <h3 className="font-grotesk text-foreground mt-1 text-xs font-semibold">{selected.label}</h3>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="text-muted-foreground hover:text-foreground absolute top-3 right-3"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Content — Phase 20: two-column (main + properties rail) — stacked in preview */}
                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {/* Description / narrative */}
                  <div>
                    <h4 className="text-muted-foreground mb-1 text-[9px] font-semibold tracking-wide uppercase">
                      Description
                    </h4>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">{selected.detail}</p>
                  </div>

                  {/* Affected location */}
                  {selected.file && (
                    <div>
                      <h4 className="text-muted-foreground mb-1 text-[9px] font-semibold tracking-wide uppercase">
                        Location
                      </h4>
                      <div className="bg-muted/30 border-border text-muted-foreground rounded-md border px-2.5 py-1.5 font-mono text-[9px]">
                        {selected.file}
                        {selected.entity && <span className="text-foreground mt-0.5 block">{selected.entity}</span>}
                      </div>
                    </div>
                  )}

                  {/* Properties — Phase 20: properties rail */}
                  <div className="border-border space-y-2 border-t pt-3">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">State</span>
                      <span className="text-foreground capitalize">{filterState}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Blast radius</span>
                      <span className="text-foreground">{selected.count}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Effort</span>
                      <span className="text-foreground">{selected.effort}</span>
                    </div>
                  </div>
                </div>

                {/* Action bar — Phase 20: border-t px-6 py-3 flex items-center gap-2 */}
                <div className="border-border flex shrink-0 items-center gap-2 border-t px-4 py-2.5">
                  {!fixedIds.has(selected.id) ? (
                    <button
                      onClick={() => handleFix(selected.id)}
                      disabled={fixingId === selected.id}
                      className="bg-accent-fade text-accent-foreground flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[10px] font-medium transition-all hover:opacity-90 disabled:opacity-60"
                    >
                      {fixingId === selected.id ? (
                        <>
                          <span className="border-accent-foreground/30 border-t-accent-foreground h-3 w-3 animate-spin rounded-full border" />
                          Fixing…
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-3 w-3" />
                          Fix with AI
                        </>
                      )}
                    </button>
                  ) : (
                    <div className="bg-success/10 text-success flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[10px] font-medium">
                      <Check className="h-3 w-3" /> Fixed
                    </div>
                  )}
                  <button className="text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-md px-2.5 py-1.5 text-[10px] transition-colors">
                    Suppress
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
