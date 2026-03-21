"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import { Activity, AlertTriangle, Check, GitBranch, Search, Shield, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  gradeColor,
  gradeLabel,
  gradeRoast,
  NODE_COLORS,
  type PreviewRepo,
  repos,
  SEVERITY_COLORS,
} from "./preview-data"

/* ─── Constants ─── */

const GRAPH_W = 480
const GRAPH_H = 240
const TABS = [
  { id: "graph" as const, label: "Graph", icon: GitBranch },
  { id: "health" as const, label: "Health", icon: Activity },
  { id: "rules" as const, label: "Rules", icon: Shield },
]

type Tab = (typeof TABS)[number]["id"]

/* ─── Analyzing Overlay ─── */

function AnalyzingOverlay({ repo }: { repo: PreviewRepo }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500)
    const t2 = setTimeout(() => setStep(2), 1100)
    const t3 = setTimeout(() => setStep(3), 1700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const steps = [
    `Scanning ${repo.fileCount.toLocaleString()} files`,
    `Extracting ${repo.entityCount.toLocaleString()} entities`,
    "Running 13-type health audit",
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-card"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      <p className="mt-4 font-mono text-base text-foreground">
        Analyzing {repo.slug}
      </p>
      <div className="mt-5 space-y-3">
        {steps.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4 + 0.3 }}
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            {step > i ? (
              <Check className="h-3.5 w-3.5 text-success" />
            ) : (
              <div className="h-3.5 w-3.5 animate-spin rounded-full border border-accent/60 border-t-transparent" />
            )}
            {label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Graph View ─── */

function GraphView({
  repo,
  hoveredNode,
  onHover,
}: {
  repo: PreviewRepo
  hoveredNode: string | null
  onHover: (id: string | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      key={`graph-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full w-full"
    >
      <svg
        viewBox={`0 0 ${GRAPH_W} ${GRAPH_H}`}
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="preview-grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="0.3"
              strokeOpacity="0.15"
            />
          </pattern>
          <radialGradient id="preview-glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(139,92,246,0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width={GRAPH_W} height={GRAPH_H} fill="url(#preview-grid)" />
        <rect width={GRAPH_W} height={GRAPH_H} fill="url(#preview-glow)" />

        {/* Edges — draw in with pathLength on first view */}
        {repo.edges.map((edge, i) => {
          const from = repo.nodes.find((n) => n.id === edge.from)
          const to = repo.nodes.find((n) => n.id === edge.to)
          if (!from || !to) return null
          const lit = hoveredNode === edge.from || hoveredNode === edge.to
          const dimmed =
            hoveredNode !== null &&
            hoveredNode !== edge.from &&
            hoveredNode !== edge.to
          return (
            <motion.line
              key={`${edge.from}-${edge.to}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke={
                lit ? "var(--color-accent)" : "var(--color-border)"
              }
              strokeWidth={lit ? 1.5 : 0.7}
              filter={lit ? "drop-shadow(0 0 3px var(--color-accent))" : "none"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? {
                      pathLength: 1,
                      opacity: 1,
                      strokeOpacity: dimmed
                        ? 0.08
                        : lit
                          ? 0.8
                          : edge.weight * 0.4,
                    }
                  : {}
              }
              transition={{
                pathLength: {
                  delay: 0.3 + i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                },
                opacity: {
                  delay: 0.3 + i * 0.08,
                  duration: 0.3,
                },
                strokeOpacity: { duration: 0.2 },
              }}
            />
          )
        })}

        {/* Nodes — scale in after edges */}
        {repo.nodes.map((node, i) => {
          const isHovered = hoveredNode === node.id
          const isConnected =
            hoveredNode !== null &&
            repo.edges.some(
              (e) =>
                (e.from === hoveredNode && e.to === node.id) ||
                (e.to === hoveredNode && e.from === node.id),
            )
          const dimmed =
            hoveredNode !== null && !isHovered && !isConnected
          const color = NODE_COLORS[node.type] ?? "var(--color-border)"
          const active = isHovered || isConnected

          return (
            <g
              key={node.id}
              onMouseEnter={() => onHover(node.id)}
              onMouseLeave={() => onHover(null)}
              className="cursor-pointer"
            >
              {/* Glow ring on hover */}
              {isHovered && (
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 10}
                  fill="none"
                  stroke={color}
                  strokeWidth={0.8}
                  initial={{ opacity: 0, r: node.r }}
                  animate={{ opacity: 0.25, r: node.r + 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              )}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                fill="var(--color-card)"
                stroke={active ? color : "var(--color-border)"}
                initial={{ r: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        r: isHovered ? node.r + 2 : node.r,
                        opacity: dimmed ? 0.2 : 1,
                        strokeWidth: isHovered
                          ? 2
                          : isConnected
                            ? 1.5
                            : 0.8,
                      }
                    : {}
                }
                transition={{
                  r: {
                    delay: 0.8 + i * 0.1,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: { duration: 0.2 },
                  strokeWidth: { duration: 0.15 },
                }}
              />
              <motion.text
                x={node.cx}
                y={node.cy + 4}
                textAnchor="middle"
                className="text-[10px] font-mono select-none"
                fill={active ? color : "var(--color-muted-foreground)"}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? { opacity: dimmed ? 0.3 : 1 }
                    : {}
                }
                transition={{
                  delay: 0.9 + i * 0.1,
                  duration: 0.3,
                }}
              >
                {node.label}
              </motion.text>
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode &&
          (() => {
            const node = repo.nodes.find((n) => n.id === hoveredNode)
            if (!node) return null
            const leftPct = (node.cx / GRAPH_W) * 100
            const topPct = (node.cy / GRAPH_H) * 100
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute z-50 w-64 rounded-lg border border-border bg-popover p-3.5 shadow-lg"
                style={{
                  left: `${Math.min(Math.max(leftPct, 15), 75)}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, calc(-100% - 24px))",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: NODE_COLORS[node.type] }}
                  />
                  <span className="font-mono text-xs font-medium text-foreground">
                    {node.label}
                  </span>
                  <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {node.type}
                  </span>
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground">
                  {node.lineCount.toLocaleString()} lines
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/80">
                  {node.justification}
                </p>
              </motion.div>
            )
          })()}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Health View — mirrors real HealthWeatherPanel pattern ─── */

function HealthView({ repo }: { repo: PreviewRepo }) {
  const color = gradeColor(repo.score)
  const label = gradeLabel(repo.score)
  const roast = gradeRoast(repo.score)
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null)
  const [fixingRisk, setFixingRisk] = useState<string | null>(null)
  const [fixedRisks, setFixedRisks] = useState<Set<string>>(new Set())

  // Reset interaction state when repo changes
  useEffect(() => {
    setExpandedRisk(null)
    setFixingRisk(null)
    setFixedRisks(new Set())
  }, [repo.slug])

  // Sort risks: high → medium → low, then by count desc. Take top 3.
  const SEV_ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 }
  const topRisks = [...repo.risks]
    .sort((a, b) => (SEV_ORDER[a.severity] ?? 2) - (SEV_ORDER[b.severity] ?? 2) || b.count - a.count)
    .slice(0, 3)

  function handleFix(riskType: string) {
    setFixingRisk(riskType)
    setTimeout(() => {
      setFixingRisk(null)
      setFixedRisks((prev) => new Set(prev).add(riskType))
      // Auto-collapse after fix completes
      setExpandedRisk(null)
    }, 1800)
  }

  return (
    <motion.div
      key={`health-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full flex-col p-5"
    >
      {/* Grade headline — the shareable artifact */}
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl font-grotesk text-3xl font-bold"
          style={{
            backgroundColor: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {repo.grade}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex-1 min-w-0 pt-0.5"
        >
          <div className="font-grotesk text-sm font-semibold text-foreground">
            {repo.score} / 100
            <span className="ml-1.5 text-xs font-normal text-muted-foreground">
              — {label}
            </span>
          </div>
          <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            {roast}
          </div>
        </motion.div>
      </div>

      {/* Score bar — single visual anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className="mt-3"
      >
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${repo.score}%` }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{ backgroundColor: color }}
          />
        </div>
      </motion.div>

      {/* Top Issues header — verbatim from FIRST_WEEK_WOW narrative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-5 mb-3"
      >
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Top Issues Your AI Will Hit
        </div>
      </motion.div>

      {/* Issues — clickable cards with expand/collapse drill-down */}
      <div className="flex-1 min-h-0 space-y-2 overflow-y-auto">
        {topRisks.map((risk, i) => {
          const sevColor = SEVERITY_COLORS[risk.severity] ?? "#6B7280"
          const isExpanded = expandedRisk === risk.riskType
          const isFixed = fixedRisks.has(risk.riskType)
          const isFixing = fixingRisk === risk.riskType
          return (
            <motion.div
              key={risk.riskType}
              layout
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
              className={[
                "cursor-pointer rounded-lg border px-3 py-2.5 transition-all",
                isFixed
                  ? "border-[#22c55e]/20 bg-[#22c55e]/[0.03]"
                  : isExpanded
                    ? "border-border bg-muted/20"
                    : "border-border/50 hover:border-border",
              ].join(" ")}
              onClick={() => !isFixed && setExpandedRisk(isExpanded ? null : risk.riskType)}
            >
              {/* Risk header row */}
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 shrink-0 rounded-full transition-colors"
                  style={{ backgroundColor: isFixed ? "#22c55e" : sevColor }}
                />
                <span
                  className={[
                    "flex-1 text-xs font-medium truncate",
                    isFixed ? "text-muted-foreground line-through" : "text-foreground",
                  ].join(" ")}
                >
                  {risk.label}
                </span>
                {isFixed ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[10px] text-[#22c55e] bg-[#22c55e]/10">
                    <Check className="h-2.5 w-2.5" />
                    Fixed
                  </span>
                ) : (
                  <span
                    className="shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px]"
                    style={{
                      color: sevColor,
                      backgroundColor: `${sevColor}10`,
                    }}
                  >
                    {risk.count} found
                  </span>
                )}
              </div>
              <div className="mt-1 pl-4 text-[11px] leading-relaxed text-muted-foreground">
                {risk.detail}
              </div>

              {/* Expanded drill-down — locations + fix action */}
              <AnimatePresence>
                {isExpanded && !isFixed && risk.locations && risk.locations.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-2.5 space-y-1.5 border-t border-border/30 pt-2.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                        Affected Locations
                      </div>
                      {risk.locations.map((loc, li) => (
                        <div
                          key={`${loc.file}-${li}`}
                          className="flex items-baseline gap-1.5 rounded px-2 py-1 font-mono text-[10px] transition-colors hover:bg-muted/30"
                        >
                          <span className="text-muted-foreground truncate">
                            {loc.file}:{loc.line}
                          </span>
                          <span className="text-border shrink-0">{"\u2192"}</span>
                          <span className="text-foreground shrink-0">{loc.entity}</span>
                        </div>
                      ))}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFix(risk.riskType)
                        }}
                        disabled={isFixing}
                        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 text-[11px] font-medium text-accent transition-all hover:bg-accent/10 disabled:opacity-60"
                      >
                        {isFixing ? (
                          <>
                            <span className="h-3 w-3 animate-spin rounded-full border border-accent/30 border-t-accent" />
                            Analyzing with AI…
                          </>
                        ) : (
                          "Fix with AI"
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Stats footer — proof of work */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.3 }}
        className="mt-auto flex items-center gap-1.5 border-t border-border/50 pt-3 text-[10px] font-mono text-muted-foreground"
      >
        <span>{repo.entityCount.toLocaleString()} entities</span>
        <span className="text-border">{"\u00b7"}</span>
        <span>{repo.fileCount.toLocaleString()} files</span>
        <span className="text-border">{"\u00b7"}</span>
        <span>{repo.risks.length} risks detected</span>
      </motion.div>
    </motion.div>
  )
}

/* ─── Rules View ─── */

function RulesView({ repo }: { repo: PreviewRepo }) {
  return (
    <motion.div
      key={`rules-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-2.5 overflow-y-auto p-5"
    >
      {repo.rules.map((rule, i) => (
        <motion.div
          key={rule.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3.5"
        >
          <div className="mt-0.5 shrink-0">
            {rule.status === "pass" && (
              <Check className="h-4 w-4 text-success" />
            )}
            {rule.status === "warn" && (
              <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />
            )}
            {rule.status === "fail" && (
              <X className="h-4 w-4 text-destructive" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground">
              {rule.name}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {rule.description}
            </div>
          </div>
          {rule.affected > 0 && (
            <span className="shrink-0 rounded bg-destructive/10 px-2 py-0.5 text-[10px] font-medium text-destructive">
              {rule.affected} violation{rule.affected > 1 ? "s" : ""}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ─── Main Component ─── */

export function HeroProductPreview() {
  const [selectedSlug, setSelectedSlug] = useState("vercel/next.js")
  const [activeTab, setActiveTab] = useState<Tab>("graph")
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
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

  // Keyboard navigation for repo suggestions
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

  // Reset highlight when filtered list changes
  useEffect(() => {
    setHighlightedIdx(-1)
  }, [inputValue])

  // Close suggestions on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
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
      </div>

      {/* ─── Search bar ─── */}
      <div className="relative border-b border-border px-5 py-2.5">
        <div className="flex items-center gap-2.5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
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
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
          />
        </div>

        {/* Suggestions dropdown */}
        <AnimatePresence>
          {showSuggestions &&
            (inputValue ||
              document.activeElement === inputRef.current) && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 top-full z-50 border-b border-border bg-popover shadow-lg"
              >
                {filteredRepos.map((r, idx) => (
                  <button
                    key={r.slug}
                    type="button"
                    onClick={() => handleSelectRepo(r.slug)}
                    onMouseEnter={() => setHighlightedIdx(idx)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      r.slug === selectedSlug
                        ? "border-l-2 border-l-accent/30 bg-accent/5"
                        : highlightedIdx === idx
                          ? "bg-muted/80 text-foreground"
                          : "hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-mono text-xs text-foreground">
                      {r.slug}
                    </span>
                    <span className="ml-auto text-[10px] text-muted-foreground">
                      {r.entityCount.toLocaleString()} entities
                    </span>
                    <span
                      className="font-grotesk text-xs font-bold"
                      style={{ color: gradeColor(r.score) }}
                    >
                      {r.grade}
                    </span>
                  </button>
                ))}
                {isUnknownRepo && (
                  <a
                    href="/login"
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-accent transition-colors hover:bg-muted/50"
                  >
                    Sign up to analyze{" "}
                    <span className="font-mono text-foreground">
                      {inputValue}
                    </span>
                    <span className="ml-auto">&rarr;</span>
                  </a>
                )}
              </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* ─── Mobile grade badge (visible when sidebar is hidden) ─── */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-2.5 md:hidden">
        <span
          className="font-grotesk text-lg font-bold"
          style={{ color: gradeColor(repo.score) }}
        >
          {repo.grade}
        </span>
        <span className="text-xs text-muted-foreground">
          {repo.score}/100
        </span>
        <span className="text-xs text-muted-foreground">
          &middot; {repo.entityCount.toLocaleString()} entities
        </span>
        <span className="text-xs text-muted-foreground">
          &middot; {repo.fileCount.toLocaleString()} files
        </span>
      </div>

      {/* ─── Main content ─── */}
      <div className="flex" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col border-r border-border p-4 md:flex">
          {/* Grade */}
          <div className="flex items-baseline gap-2">
            <span
              className="font-grotesk text-3xl font-bold"
              style={{ color: gradeColor(repo.score) }}
            >
              {repo.grade}
            </span>
            <span className="text-xs text-muted-foreground">
              {repo.score}/100
            </span>
          </div>

          {/* Stats */}
          <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            <div>{repo.entityCount.toLocaleString()} entities</div>
            <div>{repo.fileCount.toLocaleString()} files</div>
          </div>

          {/* Entity list */}
          <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
            Architecture
          </div>
          <div className="mt-2.5 flex-1 space-y-1 overflow-y-auto">
            {repo.nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-xs transition-colors ${
                  hoveredNode === node.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background:
                      NODE_COLORS[node.type] ?? "var(--color-border)",
                  }}
                />
                <span className="truncate">{node.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content area */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-b-2 border-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <AnalyzingOverlay key="analyzing" repo={repo} />
              ) : activeTab === "graph" ? (
                <GraphView
                  key={`graph-${repo.slug}`}
                  repo={repo}
                  hoveredNode={hoveredNode}
                  onHover={setHoveredNode}
                />
              ) : activeTab === "health" ? (
                <HealthView key={`health-${repo.slug}`} repo={repo} />
              ) : (
                <RulesView key={`rules-${repo.slug}`} repo={repo} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
