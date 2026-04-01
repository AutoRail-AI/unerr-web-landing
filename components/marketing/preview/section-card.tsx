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
      className="border-border bg-card/50 flex min-h-[120px] flex-col justify-between rounded-lg border p-3"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Icon className="text-muted-foreground h-3 w-3" />
          <span className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">{title}</span>
        </div>
        {status && (
          <div className="flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_COLORS[status.color]}`} />
            <span className="text-muted-foreground text-[9px]">{status.label}</span>
          </div>
        )}
      </div>
      <div className="mb-1.5">
        <p className="font-grotesk text-foreground text-xl leading-none font-semibold">
          {typeof primary === "number" ? primary.toLocaleString() : primary}
        </p>
        <p className="text-muted-foreground mt-0.5 text-[9px]">{primaryLabel}</p>
      </div>
      {stats && stats.length > 0 && (
        <div className="mb-2 flex items-center gap-2.5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-1">
              <span className="text-foreground text-[10px] font-medium">{stat.value}</span>
              <span className="text-muted-foreground text-[9px]">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="text-accent mt-auto flex cursor-pointer items-center gap-1 pt-1 text-[9px] font-medium hover:underline">
        {linkText ?? `View ${title.toLowerCase()}`} <ArrowRight className="h-2 w-2" />
      </div>
    </motion.div>
  )
}
