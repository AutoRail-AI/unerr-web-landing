"use client"

/**
 * Preview NavRail — mirrors real RepoNavRail from kap10-server.
 *
 * Phase 19 spec: w-[200px] expanded, w-14 collapsed.
 * 3 cognitive groups: core / intelligence / operational.
 * Active state: bg-sidebar-accent + absolute left-0 w-0.5 bar.
 * Status dot on repo badge: bg-success (ready), bg-warning animate-pulse (indexing).
 * Pulse badges on tabs: only shown on non-active tabs.
 * Dividers: my-1.5 mx-1 border-t border-sidebar-border between groups.
 */

import {
  BookOpen,
  Brain,
  CircleAlert,
  Code,
  History,
  Home,
  Monitor,
  PanelLeftClose,
  Plug,
  RefreshCw,
  Settings2,
  Shield,
} from "lucide-react"
import { gradeColor } from "../preview-data"
import type { PreviewRepo } from "../preview-data"
import type { PreviewTab } from "./types"

const NAV_GROUPS = [
  {
    items: [
      { id: "overview", label: "Overview", icon: Home },
      { id: "issues", label: "Issues", icon: CircleAlert },
      { id: "docs", label: "Atlas", icon: BookOpen },
    ],
  },
  {
    items: [
      { id: "code", label: "Code", icon: Code },
      { id: "intelligence", label: "Intelligence", icon: Brain },
      { id: "guardrails", label: "Guardrails", icon: Shield },
    ],
  },
  {
    items: [
      { id: "ledger", label: "Ledger", icon: History },
      { id: "workspaces", label: "Workspaces", icon: Monitor },
      { id: "pipeline", label: "Pipeline", icon: Settings2 },
    ],
  },
]

const CLICKABLE_TABS = new Set<string>(["overview", "issues", "docs"])

/** Simulated pulse dots — mirrors real intelligence pulse feature */
const PULSE_MAP: Record<string, { color: string; count: number }> = {
  intelligence: { color: "bg-warning", count: 3 },
  guardrails: { color: "bg-success", count: 0 },
}

interface NavRailProps {
  active: PreviewTab
  onSelect: (tab: PreviewTab) => void
  repo: PreviewRepo
}

export function NavRail({ active, onSelect, repo }: NavRailProps) {
  const totalIssues = repo.risks.reduce((s: number, r) => s + r.count, 0)

  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex transition-[width] duration-200 ease-in-out">
      {/* ── Repo Identity Badge (Phase 19: letter badge + status dot) ── */}
      <div className="shrink-0 py-2.5">
        <button
          type="button"
          className="flex items-center gap-2.5 px-3 w-full text-left transition-colors hover:bg-sidebar-accent/50"
        >
          {/* Letter badge with status dot overlay */}
          <div className="relative">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-accent text-[11px] font-bold text-foreground uppercase">
              {repo.name.charAt(0)}
            </div>
            {/* Status dot — Phase 19: absolute bottom-right, border-2 border-sidebar */}
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-sidebar bg-success" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-foreground truncate font-grotesk">{repo.name}</p>
            <p className="text-[10px] text-muted-foreground truncate">ready</p>
          </div>
        </button>
      </div>

      {/* ── Tab Destinations (9 items, 3 groups) ── */}
      <div className="flex-1 overflow-y-auto py-0.5">
        {NAV_GROUPS.map((group, gi) => (
          <div key={gi}>
            {/* Divider between groups — Phase 19: my-1.5 mx-1 border-t border-sidebar-border */}
            {gi > 0 && <div className="my-1.5 mx-1 border-t border-sidebar-border" />}
            <div className="space-y-0.5 px-1">
              {group.items.map((item) => {
                const isActive = item.id === active
                const isClickable = CLICKABLE_TABS.has(item.id)
                const pulse = !isActive ? PULSE_MAP[item.id] : undefined

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => isClickable && onSelect(item.id as PreviewTab)}
                    className={[
                      "relative flex w-full items-center gap-2.5 rounded-md px-3 h-7 text-left text-[11px] transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : isClickable
                          ? "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground cursor-pointer"
                          : "text-muted-foreground/40 cursor-default",
                    ].join(" ")}
                  >
                    {/* Active indicator bar — Phase 19: absolute left-0, w-0.5, rounded-full bg-foreground */}
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-foreground" />
                    )}
                    <span className="relative">
                      <item.icon className="h-4 w-4 shrink-0" />
                      {/* Pulse dot — Phase 19: only on non-active tabs */}
                      {pulse && pulse.count > 0 && (
                        <span className={`absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full px-0.5 text-[9px] font-bold text-primary-foreground ${pulse.color}`}>
                          {pulse.count}
                        </span>
                      )}
                      {pulse && pulse.count === 0 && (
                        <span className={`absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full animate-pulse ${pulse.color}`} />
                      )}
                    </span>
                    <span className="truncate">{item.label}</span>
                    {/* Issue count badge */}
                    {item.id === "issues" && totalIssues > 0 && !isActive && (
                      <span className="ml-auto rounded-full bg-destructive/10 px-1.5 text-[9px] font-medium text-destructive tabular-nums">
                        {totalIssues}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Telemetry Stats (Phase 19: text-[10px] font-mono tabular-nums) ── */}
      <div className="shrink-0 border-t border-sidebar-border px-3 py-2 space-y-0.5">
        <div className="flex items-center justify-between text-[10px] font-mono tabular-nums text-muted-foreground">
          <span>Entities</span>
          <span className="text-foreground">{repo.entityCount.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono tabular-nums text-muted-foreground">
          <span>Files</span>
          <span className="text-foreground">{repo.fileCount.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono tabular-nums text-muted-foreground">
          <span>Rules</span>
          <span className="text-foreground">{repo.rules.length}</span>
        </div>
      </div>

      {/* ── Primary Actions (Phase 19: SyncNow + Connect IDE) ── */}
      <div className="shrink-0 px-2 py-1.5 space-y-0.5">
        <button className="flex items-center w-full gap-2 rounded-md px-3 h-7 text-xs text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
          <RefreshCw className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Sync Now</span>
        </button>
        <button className="flex items-center w-full gap-2 rounded-md px-3 h-7 text-xs text-live hover:text-live hover:bg-sidebar-accent transition-colors">
          <Plug className="h-3.5 w-3.5 shrink-0 animate-pulse" />
          <span className="truncate">IDE Connected</span>
        </button>
      </div>

      {/* ── Collapse toggle (Phase 19: PanelLeftClose/PanelLeftOpen) ── */}
      <div className="flex items-center justify-end shrink-0 py-1.5 px-2">
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted/30 hover:text-foreground transition-colors"
          aria-label="Collapse navigation"
        >
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
