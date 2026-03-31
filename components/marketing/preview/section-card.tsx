"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const STATUS_COLORS = {
  green: "bg-emerald-500",
  yellow: "bg-yellow-500",
  red: "bg-destructive",
  muted: "bg-muted-foreground",
}

interface SectionCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  primary: string | number
  primaryLabel: string
  stats?: Array<{ label: string; value: string | number }>
  status?: { label: string; color: "green" | "yellow" | "red" | "muted" }
  linkText?: string
  delay?: number
}

export function SectionCard({
  icon: Icon,
  title,
  primary,
  primaryLabel,
  stats,
  status,
  linkText,
  delay = 0,
}: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="rounded-lg border border-border bg-card/50 p-3 flex flex-col justify-between min-h-[120px]"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Icon className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">{title}</span>
        </div>
        {status && (
          <div className="flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_COLORS[status.color]}`} />
            <span className="text-[9px] text-muted-foreground">{status.label}</span>
          </div>
        )}
      </div>
      <div className="mb-1.5">
        <p className="font-grotesk text-xl font-semibold text-foreground leading-none">
          {typeof primary === "number" ? primary.toLocaleString() : primary}
        </p>
        <p className="mt-0.5 text-[9px] text-muted-foreground">{primaryLabel}</p>
      </div>
      {stats && stats.length > 0 && (
        <div className="flex items-center gap-2.5 mb-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-1">
              <span className="text-[10px] font-medium text-foreground">{stat.value}</span>
              <span className="text-[9px] text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-1 text-[9px] font-medium text-accent mt-auto pt-1 cursor-pointer hover:underline">
        {linkText ?? `View ${title.toLowerCase()}`} <ArrowRight className="h-2 w-2" />
      </div>
    </motion.div>
  )
}
