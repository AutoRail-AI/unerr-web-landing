"use client"

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  GitBranch,
  GitPullRequest,
  History,
  MonitorSmartphone,
  ScrollText,
  ShieldCheck,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { BentoTile } from "@/components/marketing/bento-tile"
import { BorderBeam } from "@/components/ui/magic/border-beam"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  1. Knowledge Graph — 480×180 SVG, hover pulse edge, breathing center   */
/* ───────────────────────────────────────────────────────────────────────── */

function KnowledgeGraphTile() {
  const [hovered, setHovered] = useState(false)

  return (
    <BentoTile className="relative col-span-1 md:col-span-2">
      <BorderBeam duration={14} size={250} colorFrom="#8B5CF6" colorTo="#22D3EE" />
      <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
        <GitBranch className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
        Living Knowledge Graph
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Every file, function, and relationship — indexed, connected, and always current.
      </p>
      <motion.svg
        className="mt-4 h-[180px] w-full text-muted-foreground/20"
        viewBox="0 0 480 180"
        fill="none"
        aria-hidden="true"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Edges */}
        <line x1="100" y1="65" x2="240" y2="40" stroke="currentColor" strokeWidth="0.8" />
        <line x1="100" y1="65" x2="200" y2="130" stroke="currentColor" strokeWidth="0.8" />
        <line x1="240" y1="40" x2="360" y2="75" stroke="currentColor" strokeWidth="0.8" />
        <line x1="240" y1="40" x2="200" y2="130" stroke="currentColor" strokeWidth="0.8" />
        <line x1="360" y1="75" x2="380" y2="145" stroke="currentColor" strokeWidth="0.8" />
        <line x1="200" y1="130" x2="380" y2="145" stroke="currentColor" strokeWidth="0.8" />
        <line x1="160" y1="100" x2="100" y2="65" stroke="currentColor" strokeWidth="0.8" />
        <line x1="160" y1="100" x2="200" y2="130" stroke="currentColor" strokeWidth="0.8" />
        <line x1="160" y1="100" x2="240" y2="40" stroke="currentColor" strokeWidth="0.8" />
        <line x1="420" y1="55" x2="360" y2="75" stroke="currentColor" strokeWidth="0.8" />
        <line x1="420" y1="55" x2="240" y2="40" stroke="currentColor" strokeWidth="0.8" />

        {/* Pulse edges — data flow animation on hover (3 simultaneous paths) */}
        <motion.line
          x1="240" y1="40" x2="360" y2="75"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? [0, 0.6, 0] : 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="100" y1="65" x2="200" y2="130"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? [0, 0.5, 0] : 0 }}
          transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="360" y1="75" x2="380" y2="145"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? [0, 0.4, 0] : 0 }}
          transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Traveling dots — 3 staggered dots on different edges */}
        <AnimatePresence>
          {hovered && (
            <>
              <motion.circle
                r="3"
                fill="var(--color-accent)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [240, 300, 360],
                  cy: [40, 57.5, 75],
                  opacity: [0, 0.8, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                r="2.5"
                fill="var(--color-accent)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [100, 150, 200],
                  cy: [65, 97.5, 130],
                  opacity: [0, 0.7, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                r="2"
                fill="var(--color-accent)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [360, 370, 380],
                  cy: [75, 110, 145],
                  opacity: [0, 0.6, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Nodes */}
        <circle cx="100" cy="65" r="20" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="100" y="69" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">Auth</text>

        {/* Central node — breathing scale on hover */}
        <motion.g
          animate={{ scale: hovered ? [1, 1.03, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "240px 40px" }}
        >
          <circle cx="240" cy="40" r="28" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.12" className="animate-pulse" />
          <circle cx="240" cy="40" r="22" fill="var(--color-card)" stroke="var(--color-accent)" strokeWidth="1.2" />
          <text x="240" y="44" textAnchor="middle" className="fill-accent text-[9px] font-mono">User</text>
        </motion.g>

        <circle cx="360" cy="75" r="20" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="360" y="79" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">Pay</text>

        <circle cx="200" cy="130" r="18" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="200" y="134" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">API</text>

        <circle cx="380" cy="145" r="16" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="380" y="149" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">DB</text>

        <circle cx="160" cy="100" r="16" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="160" y="104" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">Svc</text>

        <circle cx="420" cy="55" r="15" fill="var(--color-card)" stroke="currentColor" strokeWidth="0.8" />
        <text x="420" y="59" textAnchor="middle" className="fill-muted-foreground text-[9px] font-mono">Test</text>
      </motion.svg>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  2. MCP Server — staggered entrance, hover lift                         */
/* ───────────────────────────────────────────────────────────────────────── */

function McpServerTile() {
  return (
    <BentoTile>
      <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
        <MonitorSmartphone className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
        Works With Every Agent
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        One MCP server. Full codebase context in any agent.
      </p>

      {/* MCP interaction demo — shows the product intercepting a prompt */}
      <div className="mt-4 overflow-hidden rounded-lg border border-border bg-background">
        <div className="border-b border-border/50 px-3 py-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Prompt</span>
          <div className="mt-0.5 font-mono text-[12px] text-foreground/80">
            &quot;Fix the login timeout bug&quot;
          </div>
        </div>
        <motion.div
          className="px-3 py-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-accent">⚡ unerr</span>
            <span className="text-[10px] text-muted-foreground/50">context injected</span>
          </div>
          <motion.div
            className="mt-1.5 space-y-0.5 pl-[1.1rem] font-mono text-[10px] text-muted-foreground/50"
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div>3 dependency chains · 4,200 tokens saved</div>
            <div>Auth boundary rules applied</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Compatible agents — compact tags */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {["Cursor", "Claude Code", "VS Code", "Windsurf"].map((name) => (
          <span
            key={name}
            className="rounded border border-border/50 px-1.5 py-0.5 text-[10px] text-muted-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  3. Health Audit — inline SVG grade ring + 3 mini audit bars            */
/* ───────────────────────────────────────────────────────────────────────── */

const AUDIT_BARS = [
  { label: "Type Safety", score: 96, color: "var(--color-success)", status: "Pass" },
  { label: "Dead Code", score: 88, color: "var(--color-success)", status: "Pass" },
  { label: "Coupling", score: 74, color: "var(--color-warning, #F59E0B)", status: "Warn" },
]

function HealthAuditTile() {
  return (
    <BentoTile>
      <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
        <ShieldCheck className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
        Codebase Health Report
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Dead code, coupling, architectural drift — surfaced in 60 seconds.
      </p>

      {/* Grade badge + score — matches hero health view design language */}
      <div className="mt-4 flex items-start gap-3">
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-grotesk text-xl font-bold"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            color: "#22c55e",
            border: "1px solid rgba(34, 197, 94, 0.2)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 15 }}
        >
          A
        </motion.div>
        <div className="pt-0.5">
          <motion.div
            className="font-grotesk text-sm font-semibold tabular-nums text-foreground"
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            92 / 100
          </motion.div>
          <motion.div
            className="text-[11px] text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            Battle-tested — minimal risks
          </motion.div>
        </div>
      </div>

      {/* Audit bars fill in sequence */}
      <div className="mt-3 w-full space-y-1.5">
        {AUDIT_BARS.map((bar, i) => (
          <div key={bar.label} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-[10px] text-muted-foreground">{bar.label}</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-border/50">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: bar.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 + i * 0.1 }}
              />
            </div>
            <span className="w-8 text-right text-[10px] tabular-nums text-muted-foreground">{bar.score} <span className="sr-only">{bar.status}</span></span>
          </div>
        ))}
      </div>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  4. PR Review — design-system-compliant bg, larger font, line numbers   */
/* ───────────────────────────────────────────────────────────────────────── */

const diffLines = [
  { type: "comment", lineNum: "", content: "// checkout/payment.ts" },
  { type: "delete", lineNum: "14", prefix: "- ", content: "await db.query('SELECT * FROM users')" },
  { type: "add", lineNum: "14", prefix: "+ ", content: "await userService.findById(id)" },
  { type: "context", lineNum: "15", prefix: "", content: "  const invoice = createInvoice(user)" },
  { type: "dim", lineNum: "16", prefix: "", content: "  // 3 downstream callers affected" },
]

const diffLineVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PrReviewTile() {
  return (
    <BentoTile className="col-span-1 md:col-span-2">
      <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
        <GitPullRequest className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
        Blast Radius PR Review
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Every PR checked against the graph. Downstream impact before merge.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <motion.div
          className="overflow-hidden rounded-lg border border-border bg-background p-3 font-mono text-[13px] leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {diffLines.map((line, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={diffLineVariants}
              className={line.type === "comment" ? "" : "flex"}
            >
              {line.type === "comment" ? (
                <span className="text-muted-foreground/50">{line.content}</span>
              ) : (
                <>
                  <span className="mr-3 select-none text-muted-foreground/30 tabular-nums">{line.lineNum}</span>
                  <span className={
                    line.type === "delete" ? "text-destructive/80" :
                    line.type === "add" ? "text-success/80" :
                    line.type === "dim" ? "text-muted-foreground/30" :
                    "text-muted-foreground/50"
                  }>
                    {line.prefix && (
                      <span className={`select-none ${line.type === "delete" ? "text-destructive/40" : "text-success/40"}`}>
                        {line.prefix}
                      </span>
                    )}
                    {line.content}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col justify-center gap-3 rounded-lg border border-border bg-muted/10 p-4">
          {/* Badge fades in after diff lines finish streaming */}
          <motion.span
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-xs font-medium text-success"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="flex items-center gap-1.5"
              initial={{ boxShadow: "0 0 0px rgba(34,197,94,0)" }}
              whileInView={{ boxShadow: ["0 0 0px rgba(34,197,94,0)", "0 0 12px rgba(34,197,94,0.2)", "0 0 0px rgba(34,197,94,0)"] }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            >
              <ShieldCheck className="h-3 w-3" />
              Safe to merge
            </motion.span>
          </motion.span>
          <motion.span
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            2 features affected &middot; 0 violations &middot; 12 entities in blast radius
          </motion.span>
        </div>
      </div>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  5. Rules Engine — staggered code lines + badge entrance                */
/* ───────────────────────────────────────────────────────────────────────── */

const ruleLineVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ruleLines = [
  { indent: false, content: <span className="text-muted-foreground/40">{"{"}</span> },
  { indent: true, content: <><span className="text-accent/70">pattern</span><span className="text-muted-foreground/40">: </span><span className="text-success/80">&quot;no-db-in-ui&quot;</span><span className="text-muted-foreground/40">,</span></> },
  { indent: true, content: <><span className="text-accent/70">scope</span><span className="text-muted-foreground/40">: </span><span className="text-success/80">&quot;components/**&quot;</span><span className="text-muted-foreground/40">,</span></> },
  { indent: true, content: <><span className="text-accent/70">rule</span><span className="text-muted-foreground/40">: </span><span className="text-success/80">&quot;No direct database imports in UI layer&quot;</span></> },
  { indent: false, content: <span className="text-muted-foreground/40">{"}"}</span> },
]

function RulesEngineTile() {
  return (
    <BentoTile className="col-span-1 md:col-span-2">
      <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
        <ScrollText className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
        Architectural Rules Engine
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Define boundaries in plain English. Auto-detected from history, enforced on every commit.
      </p>
      <motion.div
        className="mt-4 overflow-hidden rounded-lg border border-border bg-background p-3 font-mono text-[13px] leading-relaxed md:p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ruleLines.map((line, i) => (
          <motion.div key={i} custom={i} variants={ruleLineVariants} className={line.indent ? "ml-4" : ""}>
            {line.content}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-3 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-1 rounded-full border border-destructive/20 bg-destructive/10 px-2 py-0.5 text-[11px] font-medium text-destructive">
          3 violations found
        </span>
        <span className="text-[11px] text-muted-foreground">
          Auto-detected from 6 months of commit history
        </span>
      </motion.div>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  6. Prompt Rewind — 3 entries, hover glow on current                    */
/* ───────────────────────────────────────────────────────────────────────── */

function PromptRewindTile() {
  const [hovered, setHovered] = useState(false)

  const entries = [
    { sha: "a3f2c1d", label: "Refactor auth", status: "complete" as const, meta: "Claude · 4 files" },
    { sha: "c1d8f3e", label: "Update schema", status: "current" as const, meta: "GPT-4o · 7 files" },
    { sha: "d9a2b6c", label: "Fix tests", status: "pending" as const, meta: "Claude · 2 files" },
  ]

  return (
    <BentoTile>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="font-grotesk text-base font-semibold tracking-tight text-foreground">
          <History className="mb-1 mr-1.5 inline h-4 w-4 text-accent" />
          Prompt Ledger & Rewind
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Full audit trail of every AI change. Rewind with one command.
        </p>
        <div className="mt-4 space-y-0">
          {entries.map((entry, i) => (
            <div key={entry.sha} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <motion.div
                  className={`h-3 w-3 rounded-full border-2 ${
                    entry.status === "complete"
                      ? "border-success bg-success"
                      : entry.status === "current"
                        ? "border-accent bg-accent/10"
                        : "border-border bg-background"
                  }`}
                  animate={
                    entry.status === "current" && hovered
                      ? { boxShadow: ["0 0 0px rgba(139,92,246,0)", "0 0 12px rgba(139,92,246,0.4)", "0 0 0px rgba(139,92,246,0)"] }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {i < entries.length - 1 && (
                  <div className="h-6 w-px bg-border/50" />
                )}
              </div>
              <div className="-mt-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="text-[10px] text-muted-foreground/40">{entry.sha}</code>
                  <span className="text-xs text-muted-foreground">{entry.label}</span>
                  {entry.status === "current" && (
                    <motion.span
                      className="rounded-full border border-accent/20 bg-accent/10 px-1.5 py-0.5 text-[9px] font-medium text-accent"
                      animate={hovered ? { borderColor: "rgba(139,92,246,0.5)" } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      Rewind
                    </motion.span>
                  )}
                </div>
                <div className="mt-0.5 text-[9px] font-mono text-muted-foreground/30">
                  {entry.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoTile>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */
/*  Grid layout                                                             */
/* ───────────────────────────────────────────────────────────────────────── */

export function BentoGrid() {
  const prefersReducedMotion = useReducedMotion()
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!gridRef.current) return

    // Respect prefers-reduced-motion — show tiles immediately, no animation
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    // Set initial state for all bento tiles + hint compositor
    const tiles = gsap.utils.toArray<HTMLElement>(".bento-batch-tile")
    gsap.set(tiles, { opacity: 0, y: 30, willChange: "transform, opacity" })

    // Batch entrance — reading order (left→right, top→bottom) with 0.08s stagger
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(tiles, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            overwrite: true,
          })
        },
        start: "top bottom-=80",
        once: true,
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.07), transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(34,211,238,0.03), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          custom={0}
          className="text-center font-grotesk text-3xl font-bold tracking-[-0.02em] text-lit sm:text-4xl"
        >
          What your AI agents are <span className="text-gradient">missing</span>.
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={prefersReducedMotion ? undefined : fadeUp}
          custom={1}
          className="mt-3 text-center text-sm text-muted-foreground/80"
        >
          One knowledge graph that remembers what your agent forgets.
        </motion.p>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bento-batch-tile col-span-1 md:col-span-2">
            <KnowledgeGraphTile />
          </div>
          <div className="bento-batch-tile">
            <McpServerTile />
          </div>

          <div className="bento-batch-tile">
            <HealthAuditTile />
          </div>
          <div className="bento-batch-tile col-span-1 md:col-span-2">
            <PrReviewTile />
          </div>

          <div className="bento-batch-tile col-span-1 md:col-span-2">
            <RulesEngineTile />
          </div>
          <div className="bento-batch-tile">
            <PromptRewindTile />
          </div>
        </div>
      </div>

      {/* Bottom fade — dissolves section into the void */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
