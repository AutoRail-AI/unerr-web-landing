"use client"

import { AnimatePresence, motion } from "framer-motion"
import { BookOpen, CircleAlert, LayoutDashboard, Search } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { gradeColor, repos } from "./preview-data"
import { AnalyzingOverlay } from "./preview/analyzing-overlay"
import { DocsView } from "./preview/docs-view"
import { FocusBar } from "./preview/focus-bar"
import { IssuesView } from "./preview/issues-view"
import { NavRail } from "./preview/nav-rail"
import { OverviewView } from "./preview/overview-view"
import type { PreviewTab } from "./preview/types"

/* ─── Mobile tab bar items ─── */

const TABS = [
  { id: "overview" as const, label: "Overview", icon: LayoutDashboard },
  { id: "issues" as const, label: "Issues", icon: CircleAlert },
  { id: "docs" as const, label: "Docs", icon: BookOpen },
]

/* ─── Main Component ─── */

export function HeroProductPreview() {
  const [selectedSlug, setSelectedSlug] = useState("vercel/next.js")
  const [activeTab, setActiveTab] = useState<PreviewTab>("overview")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [highlightedIdx, setHighlightedIdx] = useState(-1)
  const analyzeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const repo = repos.find((r) => r.slug === selectedSlug) ?? repos[0]!

  const filteredRepos = inputValue
    ? repos.filter((r) =>
        r.slug.toLowerCase().includes(inputValue.toLowerCase()),
      )
    : repos

  const isUnknownRepo =
    inputValue.length > 3 &&
    !repos.some((r) =>
      r.slug.toLowerCase().includes(inputValue.toLowerCase()),
    )

  const handleSelectRepo = useCallback(
    (slug: string) => {
      if (slug === selectedSlug) {
        setShowSuggestions(false)
        setInputValue("")
        return
      }
      if (analyzeTimer.current) clearTimeout(analyzeTimer.current)
      setSelectedSlug(slug)
      setInputValue("")
      setShowSuggestions(false)
      setHighlightedIdx(-1)
      setIsAnalyzing(true)
      analyzeTimer.current = setTimeout(() => setIsAnalyzing(false), 2200)
    },
    [selectedSlug],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showSuggestions) return
      const max = filteredRepos.length - 1

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setHighlightedIdx((prev) => (prev < max ? prev + 1 : 0))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setHighlightedIdx((prev) => (prev > 0 ? prev - 1 : max))
      } else if (e.key === "Enter" && highlightedIdx >= 0) {
        e.preventDefault()
        const target = filteredRepos[highlightedIdx]
        if (target) handleSelectRepo(target.slug)
      } else if (e.key === "Escape") {
        setShowSuggestions(false)
        setHighlightedIdx(-1)
      }
    },
    [showSuggestions, filteredRepos, highlightedIdx, handleSelectRepo],
  )

  useEffect(() => {
    setHighlightedIdx(-1)
  }, [inputValue])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl border border-border-strong bg-card"
      style={{
        boxShadow:
          "0 25px 60px -12px rgba(0,0,0,0.5), 0 0 120px rgba(139,92,246,0.04), 0 0 0 1px rgba(139,92,246,0.06)",
      }}
    >
      {/* ─── Window chrome ─── */}
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="ml-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          unerr
        </span>

        {/* Search bar inline */}
        <div className="relative ml-4 flex-1 max-w-xs">
          <div className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-2.5 py-1">
            <Search className="h-3 w-3 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
              onKeyDown={handleKeyDown}
              placeholder={repo.slug}
              className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground/50 outline-none"
            />
          </div>

          {/* Suggestions dropdown */}
          <AnimatePresence>
            {showSuggestions &&
              (inputValue || document.activeElement === inputRef.current) && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 right-0 top-full z-50 mt-1 rounded-md border border-border bg-popover shadow-lg overflow-hidden"
                >
                  {filteredRepos.map((r, idx) => (
                    <button
                      key={r.slug}
                      type="button"
                      onClick={() => handleSelectRepo(r.slug)}
                      onMouseEnter={() => setHighlightedIdx(idx)}
                      className={`flex w-full items-center gap-3 px-3 py-2 text-left text-xs transition-colors ${
                        r.slug === selectedSlug
                          ? "border-l-2 border-l-accent/30 bg-accent/5"
                          : highlightedIdx === idx
                            ? "bg-muted/80 text-foreground"
                            : "hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-foreground">{r.slug}</span>
                      <span className="ml-auto text-[9px] text-muted-foreground">
                        {r.entityCount.toLocaleString()} entities
                      </span>
                      <span
                        className="font-grotesk text-[10px] font-bold"
                        style={{ color: gradeColor(r.score) }}
                      >
                        {r.grade}
                      </span>
                    </button>
                  ))}
                  {isUnknownRepo && (
                    <a
                      href="/login"
                      className="flex w-full items-center gap-2 px-3 py-2 text-xs text-accent transition-colors hover:bg-muted/50"
                    >
                      Sign up to analyze{" "}
                      <span className="font-mono text-foreground">{inputValue}</span>
                      <span className="ml-auto">&rarr;</span>
                    </a>
                  )}
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Mobile grade badge ─── */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-2.5 md:hidden">
        <span
          className="font-grotesk text-lg font-bold"
          style={{ color: gradeColor(repo.score) }}
        >
          {repo.grade}
        </span>
        <span className="text-xs text-muted-foreground">{repo.score}/100</span>
        <span className="text-xs text-muted-foreground">
          &middot; {repo.entityCount.toLocaleString()} entities
        </span>
      </div>

      {/* ─── RepoShell (Phase 19: flex, h-screen → clamped for preview) ─── */}
      <div className="flex overflow-hidden" style={{ height: "clamp(440px, 64vh, 740px)" }}>
        {/* RepoNavRail (Phase 19: w-[200px], flex-col, h-full) */}
        <NavRail active={activeTab} onSelect={setActiveTab} repo={repo} />

        {/* TabCanvas (Phase 19: flex-1 min-w-0 h-full overflow-hidden) */}
        <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden" data-tab-canvas>
          {/* Mobile tab bar (hidden on desktop — NavRail handles navigation) */}
          <div className="flex border-b border-border md:hidden">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-b-2 border-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-3 w-3" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* FocusBar (Phase 19: h-8 sticky top-0 z-10) */}
          <FocusBar repo={repo} activeTab={activeTab} />

          {/* Tab page content (Phase 19: h-full, overflow managed per pattern) */}
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <AnalyzingOverlay key="analyzing" repo={repo} />
              ) : activeTab === "overview" ? (
                <OverviewView key={`overview-${repo.slug}`} repo={repo} />
              ) : activeTab === "issues" ? (
                <IssuesView key={`issues-${repo.slug}`} repo={repo} />
              ) : (
                <DocsView key={`docs-${repo.slug}`} repo={repo} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
