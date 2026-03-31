"use client"

/**
 * Preview FocusBar — mirrors real FocusBar from kap10-server.
 *
 * Phase 19 spec: h-8 (32px), border-b border-border/50, bg-background/80 backdrop-blur-sm.
 * Breadcrumb: org > repo > tab + branch badge + commit hash + sync age + ⌘K hint.
 */

import { ChevronRight, Lightbulb } from "lucide-react"
import type { PreviewRepo } from "../preview-data"
import type { PreviewTab } from "./types"

const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  issues: "Issues",
  docs: "Atlas",
}

interface FocusBarProps {
  repo: PreviewRepo
  activeTab: PreviewTab
}

export function FocusBar({ repo, activeTab }: FocusBarProps) {
  const orgName = repo.slug.split("/")[0]

  return (
    <div className="hidden md:flex items-center h-8 px-3 text-xs border-b border-border/50 bg-background/80 backdrop-blur-sm shrink-0 gap-1.5 overflow-hidden">
      {/* Org name */}
      <span className="text-muted-foreground hover:text-foreground transition-colors truncate max-w-[100px] cursor-pointer">
        {orgName}
      </span>

      {/* Separator */}
      <ChevronRight className="h-3 w-3 text-muted-foreground/40 shrink-0" />

      {/* Repo name */}
      <span className="text-foreground font-medium truncate max-w-[140px] cursor-pointer">
        {repo.name}
      </span>

      {/* Separator */}
      <ChevronRight className="h-3 w-3 text-muted-foreground/40 shrink-0" />

      {/* Active tab */}
      <span className="text-accent font-medium">
        {TAB_LABELS[activeTab] ?? activeTab}
      </span>

      {/* Branch badge — Phase 19: rounded-full bg-muted px-2 py-0.5 text-[10px] */}
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground truncate max-w-[100px] ml-1">
        🌿 main
      </span>

      {/* Commit hash */}
      <ChevronRight className="h-3 w-3 text-muted-foreground/40 shrink-0" />
      <span className="font-mono text-[10px] text-muted-foreground truncate">a3f7c2d</span>

      <div className="flex-1" />

      {/* Explain view button — Phase 19 UI-36 */}
      <button className="text-muted-foreground/60 hover:text-foreground transition-colors hidden md:inline-flex">
        <Lightbulb className="h-3.5 w-3.5" />
      </button>

      {/* Sync age — Phase 19: clickable, text-[10px] */}
      <span className="text-[10px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        synced 2m ago
      </span>

      {/* ⌘K hint — Phase 19: hidden md:inline, text-muted-foreground/40 */}
      <span className="text-[10px] text-muted-foreground/40 hidden lg:inline ml-2">⌘K</span>
    </div>
  )
}
