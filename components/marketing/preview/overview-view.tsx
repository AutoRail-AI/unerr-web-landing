"use client"

/**
 * Preview OverviewView — mirrors real Overview page from kap10-server.
 *
 * Phase 20 spec: HealthPulseStrip (GradeRing + TrendSparkline + StreakBadge + SeveritySummary)
 * → Top 3 AnomalyCards → 6-card OverviewSectionCard grid → Architecture Composition bar.
 * Pattern A layout: h-full overflow-y-auto > mx-auto max-w-[1800px] p-6 space-y-6.
 */

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Brain, FileCode, GitPullRequestArrow, Play, Shield } from "lucide-react"
import { GradeRing } from "./grade-ring"
import { SectionCard } from "./section-card"
import { gradeColor, gradeLabel, gradeRoast, type PreviewRepo, SEVERITY_COLORS } from "../preview-data"

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
      className="animate-fade-in h-full space-y-4 overflow-y-auto p-4"
    >
      {/* Tech stack pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-1.5"
      >
        {techStack.map((tech) => (
          <span key={tech} className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-medium">
            {tech}
          </span>
        ))}
        <span className="bg-muted text-muted-foreground ml-auto rounded-full px-2 py-0.5 text-[9px]">
          Synced 2m ago
        </span>
      </motion.div>

      {/* Health Pulse Strip */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="border-border bg-card rounded-lg border p-3.5"
      >
        <div className="flex items-center gap-4">
          <GradeRing grade={repo.grade} score={repo.score} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-grotesk text-foreground text-xs font-semibold">{label}</h2>
              {/* StreakBadge — Phase 20: fire emoji + week count for improving status */}
              <span className="bg-accent/10 text-accent inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium">
                🔥 3w improving
              </span>
            </div>
            <p className="text-muted-foreground mt-0.5 text-[10px]">{roast}</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              {highCount > 0 && (
                <span className="bg-warning/10 text-warning inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium">
                  <span className="bg-warning h-1 w-1 rounded-full" />
                  {highCount} high
                </span>
              )}
              {medCount > 0 && (
                <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium">
                  {medCount} medium
                </span>
              )}
              <span className="bg-accent/10 text-accent inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium">
                <span className="bg-accent h-1 w-1 rounded-full" />2 auto-fixed
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
            <p className="text-muted-foreground mt-0.5 text-center text-[8px]">8-week trend</p>
          </div>
        </div>
      </motion.div>

      {/* Top Issues */}
      {topRisks.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-foreground text-[10px] font-semibold">Top Issues</h3>
            <span className="text-accent flex cursor-pointer items-center gap-1 text-[9px] font-medium hover:underline">
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
                  className="border-border bg-card hover:border-accent/40 rounded-lg border p-2.5 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: sevColor }} />
                      <span className="text-muted-foreground font-mono text-[9px] font-medium">{risk.count}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-foreground block truncate text-[10px] font-semibold">{risk.label}</span>
                      <p className="text-muted-foreground mt-0.5 line-clamp-2 text-[9px] leading-relaxed">
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
          status={{
            label: `${Math.round(repo.confidence * 100)}% confidence`,
            color: repo.confidence >= 0.8 ? "green" : "yellow",
          }}
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
          stats={[
            { label: "verified", value: 9 },
            { label: "stale", value: 3 },
          ]}
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
        className="border-border bg-card rounded-lg border p-3"
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
            Architecture Composition
          </h3>
          <span className="text-accent flex cursor-pointer items-center gap-1 text-[9px] font-medium hover:underline">
            Full graph <ArrowRight className="h-2.5 w-2.5" />
          </span>
        </div>
        <div className="bg-muted flex h-2.5 items-center gap-0.5 overflow-hidden rounded-full">
          <div className="bg-accent h-full rounded-l-full" style={{ width: `${repo.taxonomyBreakdown.VERTICAL}%` }} />
          <div className="h-full bg-blue-500" style={{ width: `${repo.taxonomyBreakdown.HORIZONTAL}%` }} />
          <div
            className="bg-muted-foreground h-full rounded-r-full"
            style={{ width: `${repo.taxonomyBreakdown.UTILITY}%` }}
          />
        </div>
        <div className="mt-1.5 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            <span className="text-muted-foreground text-[9px]">
              Logic <span className="text-foreground font-medium">{repo.taxonomyBreakdown.VERTICAL}%</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-[9px]">
              Plumbing <span className="text-foreground font-medium">{repo.taxonomyBreakdown.HORIZONTAL}%</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-muted-foreground h-1.5 w-1.5 rounded-full" />
            <span className="text-muted-foreground text-[9px]">
              Utility <span className="text-foreground font-medium">{repo.taxonomyBreakdown.UTILITY}%</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Dead code nudge — Phase 20: links to Issues tab */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-border bg-card text-muted-foreground hover:border-accent/30 flex cursor-pointer items-center gap-2 rounded-lg border p-2.5 text-[10px] transition-colors"
      >
        <FileCode className="text-warning h-3 w-3 shrink-0" />
        <span>
          <span className="text-foreground font-medium">12</span> dead code entities detected — clean up to reduce
          bundle size
        </span>
        <ArrowRight className="ml-auto h-3 w-3 shrink-0" />
      </motion.div>
    </motion.div>
  )
}
