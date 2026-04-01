"use client"

/**
 * Preview FocusBar — mirrors real FocusBar from kap10-server.
 *
 * Phase 19 spec: h-8 (32px), border-b border-border/50, bg-background/80 backdrop-blur-sm.
 * Breadcrumb: org > repo > tab + branch badge + commit hash + sync age + ⌘K hint.
 */

import { ChevronRight, Lightbulb } from "lucide-react"
import type { PreviewTab } from "./types"
import type { PreviewRepo } from "../preview-data"

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
    <div className="border-border/50 bg-background/80 hidden h-8 shrink-0 items-center gap-1.5 overflow-hidden border-b px-3 text-xs backdrop-blur-sm md:flex">
      {/* Org name */}
      <span className="text-muted-foreground hover:text-foreground max-w-[100px] cursor-pointer truncate transition-colors">
        {orgName}
      </span>

      {/* Separator */}
      <ChevronRight className="text-muted-foreground/40 h-3 w-3 shrink-0" />

      {/* Repo name */}
      <span className="text-foreground max-w-[140px] cursor-pointer truncate font-medium">{repo.name}</span>

      {/* Separator */}
      <ChevronRight className="text-muted-foreground/40 h-3 w-3 shrink-0" />

      {/* Active tab */}
      <span className="text-accent font-medium">{TAB_LABELS[activeTab] ?? activeTab}</span>

      {/* Branch badge — Phase 19: rounded-full bg-muted px-2 py-0.5 text-[10px] */}
      <span className="bg-muted text-muted-foreground ml-1 inline-flex max-w-[100px] items-center gap-1 truncate rounded-full px-2 py-0.5 text-[10px]">
        🌿 main
      </span>

      {/* Commit hash */}
      <ChevronRight className="text-muted-foreground/40 h-3 w-3 shrink-0" />
      <span className="text-muted-foreground truncate font-mono text-[10px]">a3f7c2d</span>

      <div className="flex-1" />

      {/* Explain view button — Phase 19 UI-36 */}
      <button className="text-muted-foreground/60 hover:text-foreground hidden transition-colors md:inline-flex">
        <Lightbulb className="h-3.5 w-3.5" />
      </button>

      {/* Sync age — Phase 19: clickable, text-[10px] */}
      <span className="text-muted-foreground hover:text-foreground cursor-pointer text-[10px] transition-colors">
        synced 2m ago
      </span>

      {/* ⌘K hint — Phase 19: hidden md:inline, text-muted-foreground/40 */}
      <span className="text-muted-foreground/40 ml-2 hidden text-[10px] lg:inline">⌘K</span>
    </div>
  )
}
