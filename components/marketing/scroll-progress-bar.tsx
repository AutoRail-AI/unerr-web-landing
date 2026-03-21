"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-14 z-50 h-[3px] origin-left bg-accent shadow-[0_0_8px_rgba(139,92,246,0.4)]"
      style={{ scaleX }}
    />
  )
}
