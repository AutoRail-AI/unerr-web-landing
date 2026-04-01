"use client"

/**
 * React hooks for PostHog analytics on the landing page.
 *
 * - useTrackPageTime: fires page_time_spent on unmount
 * - useTrackScrollDepth: fires page_scroll_depth at 25/50/75/100% milestones
 * - useTrackSectionView: fires section_viewed when a section enters the viewport
 */

import { useEffect, useRef } from "react"
import { trackScrollDepth, trackSectionViewed, trackTimeOnPage } from "./events"

/** Track time spent on the current page. Fire once on unmount / tab switch. */
export function useTrackPageTime(page: string) {
  const startRef = useRef(Date.now())

  useEffect(() => {
    startRef.current = Date.now()

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        trackTimeOnPage(page, Date.now() - startRef.current)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      trackTimeOnPage(page, Date.now() - startRef.current)
    }
  }, [page])
}

/** Track scroll depth milestones (25%, 50%, 75%, 100%) — fires once per milestone. */
export function useTrackScrollDepth(page: string) {
  useEffect(() => {
    const fired = new Set<25 | 50 | 75 | 100>()

    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const pct = (scrollTop / docHeight) * 100

      const milestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100]
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m)
          trackScrollDepth(page, m)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [page])
}

/** Track when a section enters the viewport. Fires once per section. */
export function useTrackSectionView(
  ref: React.RefObject<HTMLElement | null>,
  sectionName: string,
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          trackSectionViewed(sectionName)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, sectionName])
}
