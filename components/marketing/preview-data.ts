// Pre-computed data for OSS repos — bundled at build time, zero latency

export interface PreviewNode {
  id: string
  label: string
  type: "module" | "class" | "function" | "config"
  cx: number
  cy: number
  r: number
  lineCount: number
  justification: string
}

export interface PreviewEdge {
  from: string
  to: string
  weight: number
}

export interface PreviewRule {
  name: string
  description: string
  status: "pass" | "fail" | "warn"
  affected: number
}

export interface PreviewRiskLocation {
  file: string
  line: number
  entity: string
}

export interface PreviewRisk {
  riskType: string
  label: string
  severity: "high" | "medium" | "low"
  category: string
  count: number
  detail: string
  locations?: PreviewRiskLocation[]
}

export interface PreviewRepo {
  slug: string
  name: string
  grade: string
  score: number
  entityCount: number
  fileCount: number
  nodes: PreviewNode[]
  edges: PreviewEdge[]
  scores: number[]
  rules: PreviewRule[]
  confidence: number
  severityCounts: { high: number; medium: number; low: number }
  taxonomyBreakdown: { VERTICAL: number; HORIZONTAL: number; UTILITY: number }
  risks: PreviewRisk[]
}

export const AUDIT_NAMES = [
  "Circular Dependencies",
  "Dead Code",
  "API Stability",
  "Test Coverage",
  "Module Cohesion",
  "Dep Freshness",
  "Type Safety",
  "Error Handling",
  "Security Patterns",
  "Documentation",
  "Naming Conventions",
  "Complexity",
  "Duplication",
]

export function auditStatus(score: number): "pass" | "warn" | "fail" {
  if (score >= 8) return "pass"
  if (score >= 6) return "warn"
  return "fail"
}

export function getAudits(repo: PreviewRepo) {
  return AUDIT_NAMES.map((name, i) => ({
    name,
    score: repo.scores[i] ?? 0,
    maxScore: 10,
    status: auditStatus(repo.scores[i] ?? 0),
  }))
}

export function gradeColor(score: number): string {
  if (score >= 90) return "#22c55e"
  if (score >= 80) return "#84cc16"
  if (score >= 70) return "#eab308"
  if (score >= 40) return "#f97316"
  return "#ef4444"
}

export function gradeLabel(score: number): string {
  if (score >= 90) return "Excellent"
  if (score >= 80) return "Good"
  if (score >= 70) return "Fair"
  if (score >= 40) return "Poor"
  return "Critical"
}

export function gradeRoast(score: number): string {
  if (score >= 90) return "Battle-tested architecture — minimal intervention needed"
  if (score >= 80) return "Solid foundation with a few structural blind spots"
  if (score >= 70) return "Growing complexity — refactor window narrowing"
  if (score >= 40) return "Significant risks accumulating — act soon"
  return "Critical structural issues — immediate attention required"
}

export const SEVERITY_COLORS: Record<string, string> = {
  high: "#EF4444",
  medium: "#F59E0B",
  low: "#6B7280",
}

export const RISK_CATEGORY_LABELS: Record<string, string> = {
  quality: "Quality",
  taxonomy: "Classification",
  architecture: "Architecture",
  complexity: "Complexity",
  dead_code: "Dead Code",
}

export const NODE_COLORS: Record<string, string> = {
  module: "var(--color-accent)",
  class: "var(--color-electric-cyan)",
  function: "#34D399",
  config: "var(--color-muted-foreground)",
}

export const repos: PreviewRepo[] = [
  {
    slug: "vercel/next.js",
    name: "next.js",
    grade: "B+",
    score: 84,
    entityCount: 14832,
    fileCount: 3247,
    nodes: [
      { id: "router", label: "Router", type: "module", cx: 110, cy: 65, r: 28, lineCount: 4230, justification: "Core routing engine — file-system and dynamic routes, app/pages router unification" },
      { id: "server", label: "Server", type: "module", cx: 270, cy: 45, r: 32, lineCount: 6120, justification: "HTTP server abstraction — request lifecycle, streaming, edge runtime dispatch" },
      { id: "compiler", label: "Compiler", type: "module", cx: 410, cy: 75, r: 26, lineCount: 8940, justification: "SWC/Turbopack integration — JSX transforms, tree-shaking, code splitting" },
      { id: "image", label: "Image", type: "class", cx: 70, cy: 175, r: 22, lineCount: 1840, justification: "Image optimization — lazy loading, blur placeholders, AVIF/WebP transcoding" },
      { id: "cache", label: "Cache", type: "module", cx: 210, cy: 165, r: 24, lineCount: 2350, justification: "Multi-tier caching — ISR revalidation, fetch cache, router cache coordination" },
      { id: "build", label: "Build", type: "module", cx: 355, cy: 185, r: 26, lineCount: 5670, justification: "Build orchestrator — static generation, parallel compilation, output tracing" },
      { id: "mw", label: "Middleware", type: "function", cx: 170, cy: 115, r: 20, lineCount: 980, justification: "Edge middleware chain — request interception, geolocation, A/B testing" },
      { id: "api", label: "API Routes", type: "module", cx: 440, cy: 155, r: 22, lineCount: 2100, justification: "Serverless API handler — request parsing, response streaming, edge/node runtime" },
    ],
    edges: [
      { from: "router", to: "server", weight: 0.9 },
      { from: "router", to: "mw", weight: 0.7 },
      { from: "server", to: "compiler", weight: 0.8 },
      { from: "server", to: "cache", weight: 0.7 },
      { from: "compiler", to: "build", weight: 0.9 },
      { from: "cache", to: "build", weight: 0.6 },
      { from: "image", to: "cache", weight: 0.5 },
      { from: "mw", to: "cache", weight: 0.4 },
      { from: "api", to: "server", weight: 0.7 },
      { from: "api", to: "build", weight: 0.5 },
    ],
    scores: [7, 6, 9, 8, 7, 8, 9, 7, 8, 6, 9, 5, 7],
    rules: [
      { name: "No circular imports in core", description: "Core modules must not create circular dependency chains", status: "warn", affected: 3 },
      { name: "Server Components isolation", description: "Server components cannot import client-only modules", status: "pass", affected: 0 },
      { name: "Cache invalidation paths", description: "Every cached value must have a clear invalidation trigger", status: "pass", affected: 0 },
      { name: "Edge runtime compat", description: "Middleware must not use Node.js-only APIs", status: "fail", affected: 2 },
      { name: "API route error boundaries", description: "All API routes must have structured error responses", status: "pass", affected: 0 },
    ],
    confidence: 0.82,
    severityCounts: { high: 1, medium: 3, low: 2 },
    taxonomyBreakdown: { VERTICAL: 42, HORIZONTAL: 31, UTILITY: 27 },
    risks: [
      { riskType: "circular_dependency", label: "Circular Dependency", severity: "high", category: "architecture", count: 3, detail: "Core modules create import cycles that confuse AI agents", locations: [
        { file: "server/router.ts", line: 47, entity: "importServerHandler" },
        { file: "server/index.ts", line: 123, entity: "initCompiler" },
        { file: "build/compiler.ts", line: 89, entity: "resolveRoutes" },
      ] },
      { riskType: "high_fan_in", label: "High Fan-In", severity: "medium", category: "complexity", count: 8, detail: "Modules with 20+ dependents — high blast radius on change", locations: [
        { file: "server/index.ts", line: 12, entity: "NextServer" },
        { file: "shared/lib/utils.ts", line: 45, entity: "parseUrl" },
        { file: "client/router.ts", line: 78, entity: "useRouter" },
      ] },
      { riskType: "dead_code", label: "Dead Code", severity: "medium", category: "dead_code", count: 12, detail: "Unreachable functions consuming 2,400+ lines", locations: [
        { file: "lib/legacy-redirect.ts", line: 1, entity: "legacyRedirect" },
        { file: "server/render-legacy.tsx", line: 34, entity: "renderToHTMLLegacy" },
        { file: "client/compat.ts", line: 12, entity: "shimRAF" },
      ] },
      { riskType: "low_confidence", label: "Low Confidence", severity: "medium", category: "quality", count: 6, detail: "Entity classification below 60% confidence threshold" },
      { riskType: "high_fan_out", label: "God Functions", severity: "low", category: "complexity", count: 4, detail: "4 functions calling 10+ dependencies" },
      { riskType: "documentation_staleness", label: "Stale Documentation", severity: "low", category: "quality", count: 9, detail: "Stale docs cause agents to hallucinate intent" },
    ],
  },
  {
    slug: "facebook/react",
    name: "react",
    grade: "A",
    score: 92,
    entityCount: 8412,
    fileCount: 1893,
    nodes: [
      { id: "reconciler", label: "Reconciler", type: "module", cx: 240, cy: 48, r: 32, lineCount: 12400, justification: "Virtual DOM diffing engine — schedules updates, manages fiber tree reconciliation" },
      { id: "fiber", label: "Fiber", type: "class", cx: 400, cy: 62, r: 28, lineCount: 8900, justification: "Work unit data structure — represents component tree nodes for incremental rendering" },
      { id: "hooks", label: "Hooks", type: "module", cx: 110, cy: 78, r: 26, lineCount: 4200, justification: "State & effect primitives — useState, useEffect, useMemo, useCallback dispatch" },
      { id: "scheduler", label: "Scheduler", type: "module", cx: 320, cy: 165, r: 24, lineCount: 3100, justification: "Priority-based task scheduler — time-slicing, lane model, concurrent features" },
      { id: "events", label: "Events", type: "module", cx: 80, cy: 180, r: 22, lineCount: 2800, justification: "Synthetic event system — cross-browser normalization, delegation, pooling" },
      { id: "dom", label: "DOM", type: "module", cx: 200, cy: 190, r: 26, lineCount: 5600, justification: "Host renderer for web — manages real DOM mutations, attribute diffing, hydration" },
      { id: "shared", label: "Shared", type: "config", cx: 430, cy: 178, r: 20, lineCount: 1400, justification: "Cross-package utilities — shared constants, type definitions, feature flags" },
    ],
    edges: [
      { from: "reconciler", to: "fiber", weight: 0.95 },
      { from: "reconciler", to: "scheduler", weight: 0.85 },
      { from: "hooks", to: "reconciler", weight: 0.8 },
      { from: "hooks", to: "fiber", weight: 0.6 },
      { from: "fiber", to: "scheduler", weight: 0.7 },
      { from: "events", to: "dom", weight: 0.75 },
      { from: "dom", to: "reconciler", weight: 0.8 },
      { from: "shared", to: "reconciler", weight: 0.4 },
      { from: "shared", to: "dom", weight: 0.35 },
    ],
    scores: [9, 8, 9, 9, 9, 8, 10, 8, 9, 7, 9, 7, 8],
    rules: [
      { name: "Scheduler isolation", description: "Scheduler must not directly access DOM or renderer internals", status: "pass", affected: 0 },
      { name: "No shared mutable state", description: "Cross-package modules cannot hold mutable singleton state", status: "pass", affected: 0 },
      { name: "Fiber tree immutability", description: "Work-in-progress tree must not mutate current tree directly", status: "pass", affected: 0 },
      { name: "Feature flag gating", description: "Experimental features must be behind __DEV__ or flag checks", status: "warn", affected: 1 },
      { name: "Public API surface", description: "Only index.js exports are part of the public API contract", status: "pass", affected: 0 },
    ],
    confidence: 0.91,
    severityCounts: { high: 0, medium: 1, low: 2 },
    taxonomyBreakdown: { VERTICAL: 38, HORIZONTAL: 45, UTILITY: 17 },
    risks: [
      { riskType: "high_fan_in", label: "High Fan-In", severity: "medium", category: "complexity", count: 4, detail: "Reconciler consumed by 4+ modules — change carefully", locations: [
        { file: "reconciler/ReactFiber.js", line: 67, entity: "createFiber" },
        { file: "reconciler/WorkLoop.js", line: 112, entity: "scheduleWork" },
        { file: "shared/ReactSymbols.js", line: 8, entity: "REACT_ELEMENT_TYPE" },
      ] },
      { riskType: "documentation_staleness", label: "Stale Documentation", severity: "low", category: "quality", count: 7, detail: "Internal APIs lack current documentation", locations: [
        { file: "react-dom/client/ReactDOM.js", line: 1, entity: "createRoot" },
        { file: "react/src/ReactHooks.js", line: 23, entity: "useTransition" },
      ] },
      { riskType: "high_fan_in", label: "High Fan-In Hotspots", severity: "low", category: "complexity", count: 3, detail: "3 entities called by 10+ callers — high-risk change points", locations: [
        { file: "shared/ReactSymbols.js", line: 1, entity: "REACT_ELEMENT_TYPE" },
        { file: "react/src/ReactHooks.js", line: 1, entity: "resolveDispatcher" },
      ] },
    ],
  },
  {
    slug: "expressjs/express",
    name: "express",
    grade: "B",
    score: 78,
    entityCount: 2430,
    fileCount: 486,
    nodes: [
      { id: "app", label: "Application", type: "module", cx: 240, cy: 52, r: 30, lineCount: 1840, justification: "Core app factory — settings, mounting, trust proxy, template engine registration" },
      { id: "router", label: "Router", type: "class", cx: 400, cy: 68, r: 28, lineCount: 2200, justification: "Route matching engine — path parsing, param handling, method routing, layer stack" },
      { id: "mw", label: "Middleware", type: "function", cx: 110, cy: 115, r: 26, lineCount: 960, justification: "Request pipeline — body parsing, cookie handling, static files, error middleware" },
      { id: "req", label: "Request", type: "class", cx: 300, cy: 160, r: 24, lineCount: 1400, justification: "IncomingMessage extension — param access, content negotiation, IP resolution" },
      { id: "res", label: "Response", type: "class", cx: 180, cy: 195, r: 24, lineCount: 1600, justification: "ServerResponse extension — send, json, redirect, content-type, cookie helpers" },
      { id: "view", label: "View", type: "config", cx: 420, cy: 185, r: 20, lineCount: 380, justification: "Template rendering — engine lookup, file resolution, caching, render callback" },
    ],
    edges: [
      { from: "app", to: "router", weight: 0.9 },
      { from: "app", to: "mw", weight: 0.8 },
      { from: "router", to: "req", weight: 0.75 },
      { from: "router", to: "res", weight: 0.7 },
      { from: "mw", to: "req", weight: 0.65 },
      { from: "mw", to: "res", weight: 0.6 },
      { from: "res", to: "view", weight: 0.5 },
      { from: "app", to: "view", weight: 0.4 },
    ],
    scores: [6, 7, 7, 5, 6, 5, 4, 7, 7, 6, 8, 8, 7],
    rules: [
      { name: "Middleware must call next()", description: "Every middleware must call next() or send a response to avoid hanging", status: "pass", affected: 0 },
      { name: "No prototype pollution", description: "Request/Response extensions must not modify Object.prototype", status: "pass", affected: 0 },
      { name: "TypeScript declarations", description: "Public API must have corresponding @types/express definitions", status: "warn", affected: 4 },
      { name: "Deprecation notices", description: "Deprecated methods must emit process warnings before removal", status: "fail", affected: 3 },
      { name: "Error middleware arity", description: "Error handlers must accept exactly 4 arguments (err, req, res, next)", status: "pass", affected: 0 },
    ],
    confidence: 0.74,
    severityCounts: { high: 2, medium: 3, low: 3 },
    taxonomyBreakdown: { VERTICAL: 28, HORIZONTAL: 35, UTILITY: 37 },
    risks: [
      { riskType: "architectural_violation", label: "Architecture Violation", severity: "high", category: "architecture", count: 5, detail: "Request/Response extensions bypass layered patterns", locations: [
        { file: "lib/request.js", line: 47, entity: "req.hostname" },
        { file: "lib/response.js", line: 89, entity: "res.download" },
        { file: "lib/response.js", line: 156, entity: "res.sendFile" },
      ] },
      { riskType: "circular_dependency", label: "Circular Dependency", severity: "high", category: "architecture", count: 2, detail: "App \u2194 Router mutual imports create fragile coupling", locations: [
        { file: "lib/application.js", line: 23, entity: "app.lazyrouter" },
        { file: "lib/router/index.js", line: 56, entity: "Router.use" },
      ] },
      { riskType: "high_fan_out", label: "High Fan-Out", severity: "medium", category: "complexity", count: 6, detail: "Application module touches too many downstream services" },
      { riskType: "dead_code", label: "Dead Code", severity: "medium", category: "dead_code", count: 18, detail: "18 deprecated handlers still in the codebase", locations: [
        { file: "lib/router/route.js", line: 134, entity: "Route.all" },
        { file: "lib/utils.js", line: 67, entity: "wetag" },
        { file: "lib/utils.js", line: 89, entity: "compileTrust" },
      ] },
      { riskType: "low_confidence", label: "Low Confidence", severity: "medium", category: "quality", count: 11, detail: "Ambiguous entity classification across utility layer" },
      { riskType: "architectural_violation", label: "Mixed Architecture", severity: "low", category: "architecture", count: 9, detail: "9 entities mix domain logic with infrastructure concerns" },
      { riskType: "documentation_staleness", label: "Stale Documentation", severity: "low", category: "quality", count: 14, detail: "14 public APIs missing JSDoc coverage" },
      { riskType: "high_fan_in", label: "High Fan-In Hotspots", severity: "low", category: "complexity", count: 5, detail: "5 entities called by 10+ callers" },
    ],
  },
]
