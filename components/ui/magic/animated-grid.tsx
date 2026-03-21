"use client"

import { motion } from "framer-motion"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { cn } from "@/lib/utils/cn"

interface AnimatedGridPatternProps {
  width?: number
  height?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
  className?: string
}

export function AnimatedGridPattern({
  width = 60,
  height = 60,
  numSquares = 30,
  maxOpacity = 0.3,
  duration = 3,
  className,
}: AnimatedGridPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDims({ w: entry.contentRect.width, h: entry.contentRect.height })
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const getPos = useCallback(
    () => [
      Math.floor((Math.random() * dims.w) / width),
      Math.floor((Math.random() * dims.h) / height),
    ],
    [dims.w, dims.h, width, height],
  )

  const [squares, setSquares] = useState<Array<{ id: number; pos: number[] }>>([])

  useEffect(() => {
    if (dims.w > 0 && dims.h > 0) {
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: [
            Math.floor((Math.random() * dims.w) / width),
            Math.floor((Math.random() * dims.h) / height),
          ],
        })),
      )
    }
  }, [dims, numSquares, width, height])

  const updateSquarePos = useCallback(
    (i: number) => {
      setSquares((prev) =>
        prev.map((sq, idx) => (idx === i ? { ...sq, pos: getPos() } : sq)),
      )
    },
    [getPos],
  )

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className,
      )}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
          <path d={`M${width} 0H0V${height}`} fill="none" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg className="overflow-visible">
        {squares.map(({ pos, id: sqId }, i) => (
          <motion.rect
            key={`${sqId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, maxOpacity, 0] }}
            transition={{
              duration: duration + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            onAnimationComplete={() => updateSquarePos(i)}
            width={width - 1}
            height={height - 1}
            x={(pos[0] ?? 0) * width + 1}
            y={(pos[1] ?? 0) * height + 1}
            fill="currentFill"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  )
}
