/**
 * Centralized PostHog event definitions for the landing page.
 *
 * Categories:
 *   - page_*: Page-level events (view, scroll depth, time on page)
 *   - section_*: Section visibility and engagement
 *   - cta_*: Button clicks and conversion actions
 *   - pricing_*: Pricing page interactions
 *   - waitlist_*: Waitlist funnel events (already in waitlist-dialog.tsx)
 *   - preview_*: Hero product preview interactions
 */

import posthog from "posthog-js"

function isReady(): boolean {
  return typeof window !== "undefined" && typeof posthog?.capture === "function"
}

/* ─── Page-Level Events ─────────────────────────────────────────────────── */

/** Track when a marketing page is viewed. Call on mount. */
export function trackPageView(page: string, properties?: Record<string, unknown>) {
  if (!isReady()) return
  posthog.capture("$pageview", { page, ...properties })
}

/** Track scroll depth milestones (25%, 50%, 75%, 100%). */
export function trackScrollDepth(page: string, depth: 25 | 50 | 75 | 100) {
  if (!isReady()) return
  posthog.capture("page_scroll_depth", { page, depth_percent: depth })
}

/** Track time spent on page (fire on unmount or visibility change). */
export function trackTimeOnPage(page: string, durationMs: number) {
  if (!isReady()) return
  if (durationMs < 1000) return // ignore bounces under 1s
  posthog.capture("page_time_spent", {
    page,
    duration_ms: durationMs,
    duration_seconds: Math.round(durationMs / 1000),
  })
}

/* ─── Section Visibility ────────────────────────────────────────────────── */

/** Track when a landing page section becomes visible. */
export function trackSectionViewed(section: string, page?: string) {
  if (!isReady()) return
  posthog.capture("section_viewed", { section, page: page ?? window.location.pathname })
}

/* ─── CTA / Button Clicks ───────────────────────────────────────────────── */

/** Track any CTA button click. */
export function trackCtaClick(
  ctaName: string,
  properties?: Record<string, unknown>,
) {
  if (!isReady()) return
  posthog.capture("cta_clicked", {
    cta_name: ctaName,
    page: window.location.pathname,
    ...properties,
  })
}

/* ─── Pricing Page ──────────────────────────────────────────────────────── */

/** Track billing cycle toggle (monthly/annual). */
export function trackBillingToggle(cycle: "monthly" | "annual") {
  if (!isReady()) return
  posthog.capture("pricing_billing_toggled", { cycle })
}

/** Track when a pricing tier CTA is clicked. */
export function trackPricingCtaClick(tier: string, billingCycle: "monthly" | "annual") {
  if (!isReady()) return
  posthog.capture("pricing_cta_clicked", { tier, billing_cycle: billingCycle })
}

/* ─── Hero Product Preview ──────────────────────────────────────────────── */

/** Track tab switches in the hero preview. */
export function trackPreviewTabChange(tab: string) {
  if (!isReady()) return
  posthog.capture("preview_tab_changed", { tab })
}

/** Track repo selection in the hero preview. */
export function trackPreviewRepoSelected(repo: string) {
  if (!isReady()) return
  posthog.capture("preview_repo_selected", { repo })
}

/** Track interaction with the "Fix with AI" button in issues preview. */
export function trackPreviewFixClick(issueType: string) {
  if (!isReady()) return
  posthog.capture("preview_fix_clicked", { issue_type: issueType })
}

/* ─── External Navigation ───────────────────────────────────────────────── */

/** Track outbound link clicks (e.g. GitHub, docs). */
export function trackOutboundClick(url: string, label?: string) {
  if (!isReady()) return
  posthog.capture("outbound_link_clicked", { url, label })
}
