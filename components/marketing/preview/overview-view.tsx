"use client"

/**
 * Preview OverviewView — mirrors real Overview page from kap10-server.
 *
 * Phase 20 spec: HealthPulseStrip (GradeRing + TrendSparkline + StreakBadge + SeveritySummary)
 * → Top 3 AnomalyCards → 6-card OverviewSectionCard grid → Architecture Composition bar.
 * Pattern A layout: h-full overflow-y-auto > mx-auto max-w-[1800px] p-6 space-y-6.
 */

import { ArrowRight, BookOpen, Brain, FileCode, GitPullRequestArrow, Play, Shield } from "lucide-react"
import { motion } from "framer-motion"
import {
  gradeColor,
  gradeLabel,
  gradeRoast,
  SEVERITY_COLORS,
  type PreviewRepo,
} from "../preview-data"
import { GradeRing } from "./grade-ring"
import { SectionCard } from "./section-card"

interface OverviewViewProps {
  repo: PreviewRepo
}

export function OverviewView({ repo }: OverviewViewProps) {
  const label = gradeLabel(repo.score)
  const roast = gradeRoast(repo.score)
  const topRisks = [...repo.risks]
    .sort((a, b) => {
      const SEV: Record<string, number> = { high: 0, medium: 1, low: 2 }
      return (SEV[a.severity] ?? 2) - (SEV[b.severity] ?? 2) || b.count - a.count
    })
    .slice(0, 3)

  const techStack = ["TypeScript", "React", "Node.js", "Prisma"]
  const highCount = repo.risks.filter((r) => r.severity === "high").length
  const medCount = repo.risks.filter((r) => r.severity === "medium").length
  const totalIssues = repo.risks.reduce((s: number, r) => s + r.count, 0)

  return (
    <motion.div
      key={`overview-${repo.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      /* Phase 20 Pattern A: h-full overflow-y-auto > mx-auto max-w-[1800px] p-6 space-y-6 — scaled */
      className="h-full overflow-y-auto p-4 space-y-4 animate-fade-in"
    >
      {/* Tech stack pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-1.5"
      >
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-medium text-muted-foreground">
            {tech}
          </span>
        ))}
        <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] text-muted-foreground ml-auto">
          Synced 2m ago
        </span>
      </motion.div>

      {/* Health Pulse Strip */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="rounded-lg border border-border bg-card p-3.5"
      >
        <div className="flex items-center gap-4">
          <GradeRing grade={repo.grade} score={repo.score} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="font-grotesk text-xs font-semibold text-foreground">{label}</h2>
              {/* StreakBadge — Phase 20: fire emoji + week count for improving status */}
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-1.5 py-0.5 text-[9px] font-medium text-accent">
                🔥 3w improving
              </span>
            </div>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{roast}</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              {highCount > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-warning/10 px-1.5 py-0.5 text-[9px] font-medium text-warning">
                  <span className="h-1 w-1 rounded-full bg-warning" />
                  {highCount} high
                </span>
              )}
              {medCount > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                  {medCount} medium
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-1.5 py-0.5 text-[9px] font-medium text-accent">
                <span className="h-1 w-1 rounded-full bg-accent" />
                2 auto-fixed
              </span>
            </div>
          </div>
          {/* Mini sparkline */}
          <div className="hidden sm:block">
            <svg width="64" height="28" viewBox="0 0 64 28" fill="none">
              <polyline
                points="0,24 10,22 20,18 30,20 40,14 50,10 64,6"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="64" cy="6" r="2" fill="var(--color-accent)" />
            </svg>
            <p className="mt-0.5 text-center text-[8px] text-muted-foreground">8-week trend</p>
          </div>
        </div>
      </motion.div>

      {/* Top Issues */}
      {topRisks.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[10px] font-semibold text-foreground">Top Issues</h3>
            <span className="flex items-center gap-1 text-[9px] font-medium text-accent cursor-pointer hover:underline">
              View all {totalIssues} <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {topRisks.map((risk, i) => {
              const sevColor = SEVERITY_COLORS[risk.severity] ?? "#6B7280"
              return (
                <motion.div
                  key={risk.riskType}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-lg border border-border bg-card p-2.5 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: sevColor }} />
                      <span className="font-mono text-[9px] font-medium text-muted-foreground">
                        {risk.count}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold text-foreground truncate block">{risk.label}</span>
                      <p className="mt-0.5 text-[9px] text-muted-foreground line-clamp-2 leading-relaxed">
                        {risk.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* Feature section cards grid — Phase 20: 6-card grid, links to NavRail tabs */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard
          icon={Brain}
          title="Intelligence"
          primary={repo.entityCount}
          primaryLabel="entities indexed"
          stats={[{ label: "communities", value: repo.nodes.length }]}
          status={{ label: `${Math.round(repo.confidence * 100)}% confidence`, color: repo.confidence >= 0.8 ? "green" : "yellow" }}
          linkText="Explore call graph"
          delay={0.45}
        />
        <SectionCard
          icon={Shield}
          title="Guardrails"
          primary={repo.rules.length}
          primaryLabel="active rules"
          stats={[{ label: "patterns", value: repo.rules.filter((r) => r.status === "pass").length }]}
          status={{ label: "Enforcing", color: "green" }}
          linkText="Manage rules"
          delay={0.5}
        />
        <SectionCard
          icon={Play}
          title="Pipeline"
          primary="12s"
          primaryLabel="Last run 3m ago"
          stats={[{ label: "success", value: "100%" }]}
          status={{ label: "completed", color: "green" }}
          linkText="View pipeline runs"
          delay={0.55}
        />
        <SectionCard
          icon={GitPullRequestArrow}
          title="PR Reviews"
          primary={8}
          primaryLabel="PRs reviewed"
          stats={[{ label: "blocked", value: 1 }]}
          status={{ label: "1 issues found", color: "yellow" }}
          linkText="View reviews"
          delay={0.6}
        />
        <SectionCard
          icon={BookOpen}
          title="Documentation"
          primary={12}
          primaryLabel="docs tracked"
          stats={[{ label: "verified", value: 9 }, { label: "stale", value: 3 }]}
          status={{ label: "75% verified", color: "yellow" }}
          linkText="View doc health"
          delay={0.65}
        />
        <SectionCard
          icon={BookOpen}
          title="Atlas"
          primary={repo.nodes.length}
          primaryLabel="feature areas mapped"
          stats={[{ label: "domain terms", value: repo.nodes.length }]}
          linkText="Explore atlas"
          delay={0.7}
        />
      </div>

      {/* Architecture Composition bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="rounded-lg border border-border bg-card p-3"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Architecture Composition</h3>
          <span className="flex items-center gap-1 text-[9px] font-medium text-accent cursor-pointer hover:underline">
            Full graph <ArrowRight className="h-2.5 w-2.5" />
          </span>
        </div>
        <div className="flex items-center gap-0.5 h-2.5 rounded-full overflow-hidden bg-muted">
          <div className="h-full bg-accent rounded-l-full" style={{ width: `${repo.taxonomyBreakdown.VERTICAL}%` }} />
          <div className="h-full bg-blue-500" style={{ width: `${repo.taxonomyBreakdown.HORIZONTAL}%` }} />
          <div className="h-full bg-muted-foreground rounded-r-full" style={{ width: `${repo.taxonomyBreakdown.UTILITY}%` }} />
        </div>
        <div className="flex items-center gap-4 mt-1.5">
          <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-accent" /><span className="text-[9px] text-muted-foreground">Logic <span className="text-foreground font-medium">{repo.taxonomyBreakdown.VERTICAL}%</span></span></div>
          <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /><span className="text-[9px] text-muted-foreground">Plumbing <span className="text-foreground font-medium">{repo.taxonomyBreakdown.HORIZONTAL}%</span></span></div>
          <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" /><span className="text-[9px] text-muted-foreground">Utility <span className="text-foreground font-medium">{repo.taxonomyBreakdown.UTILITY}%</span></span></div>
        </div>
      </motion.div>

      {/* Dead code nudge — Phase 20: links to Issues tab */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2 rounded-lg border border-border bg-card p-2.5 text-[10px] text-muted-foreground hover:border-accent/30 transition-colors cursor-pointer"
      >
        <FileCode className="h-3 w-3 text-warning shrink-0" />
        <span><span className="font-medium text-foreground">12</span> dead code entities detected — clean up to reduce bundle size</span>
        <ArrowRight className="h-3 w-3 ml-auto shrink-0" />
      </motion.div>
    </motion.div>
  )
}
