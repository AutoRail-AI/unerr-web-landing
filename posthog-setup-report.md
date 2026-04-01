<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the unerr landing page. Key changes include:

- **`instrumentation-client.ts`** (new) — Client-side PostHog initialization using the Next.js 15.3+ recommended approach. Replaces the legacy `useEffect`-based `PostHogInit` component that was in `providers.tsx`. Enables automatic exception capture and routes events through the `/ingest` reverse proxy.
- **`next.config.ts`** — Added PostHog reverse proxy rewrites (`/ingest/static/:path*` and `/ingest/:path*`) and `skipTrailingSlashRedirect: true` to support PostHog's trailing-slash API requests.
- **`app/(marketing)/providers.tsx`** — Removed the old `PostHogInit` component (initialization is now handled by `instrumentation-client.ts`).
- **`app/api/waitlist/route.ts`** — Server-side `waitlist_joined` event captured after a successful DB insert, using the existing `lib/analytics/posthog.ts` utility.
- **`components/auth/login-form.tsx`** — `user_signed_in` event + `posthog.identify()` on successful email login.
- **`components/auth/register-form.tsx`** — `user_registered` event + `posthog.identify()` on successful account creation.
- **`components/auth/oauth-buttons.tsx`** — `oauth_sign_in_clicked` event when Google OAuth button is clicked.
- **`components/marketing/waitlist-dialog.tsx`** — `waitlist_dialog_opened` event when the dialog is shown, and `waitlist_form_submitted` event on successful form submission.
- **`components/marketing/pricing/pricing-cards.tsx`** — `pricing_cta_clicked` event (with tier and billing cycle properties) and `pricing_billing_cycle_changed` event when toggling monthly/annual.
- **`components/marketing/final-cta.tsx`** — `final_cta_clicked` event for each CTA button with plan context.

| Event | Description | File |
|---|---|---|
| `waitlist_joined` | User successfully joins the waitlist (new DB entry) | `app/api/waitlist/route.ts` |
| `user_signed_in` | User signs in with email/password | `components/auth/login-form.tsx` |
| `user_registered` | User creates a new account | `components/auth/register-form.tsx` |
| `oauth_sign_in_clicked` | User clicks the Google OAuth button | `components/auth/oauth-buttons.tsx` |
| `waitlist_dialog_opened` | Waitlist dialog is opened (top of funnel) | `components/marketing/waitlist-dialog.tsx` |
| `waitlist_form_submitted` | Waitlist form successfully submitted | `components/marketing/waitlist-dialog.tsx` |
| `pricing_cta_clicked` | User clicks a pricing tier CTA | `components/marketing/pricing/pricing-cards.tsx` |
| `pricing_billing_cycle_changed` | User toggles between monthly/annual billing | `components/marketing/pricing/pricing-cards.tsx` |
| `final_cta_clicked` | User clicks a CTA in the final landing section | `components/marketing/final-cta.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/365580/dashboard/1421215
- **Daily Waitlist Signups**: https://us.posthog.com/project/365580/insights/BzsKrKp6
- **Waitlist Conversion Funnel** (dialog → submit → join): https://us.posthog.com/project/365580/insights/fRVugqsV
- **CTA Engagement** (pricing + final CTA clicks): https://us.posthog.com/project/365580/insights/EDDV6T2c
- **User Registrations & Sign-ins**: https://us.posthog.com/project/365580/insights/IuvRbK2r
- **Waitlist Dialog Opens by Plan**: https://us.posthog.com/project/365580/insights/yivNHpWW

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

---

## LLM Analytics

PostHog LLM analytics has been set up to automatically track every OpenAI call as a `$ai_generation` event, capturing model name, input/output tokens, latency, and cost.

### Changes

- **`@posthog/ai 7.12.7`** — Installed. Wraps the OpenAI client to intercept calls and send `$ai_generation` events to PostHog without proxying traffic.
- **`lib/ai/client.ts`** (new) — Exports a PostHog-wrapped `openai` client. Import this instead of `openai` directly for all LLM calls so generations are automatically tracked.
- **`.env.local`** — `OPENAI_API_KEY` key added (fill in your key).

### Usage

```typescript
import { openai } from "@/lib/ai/client"

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "..." }],
  posthogDistinctId: userId,   // links the generation to a user in PostHog
  posthogTraceId: traceId,     // groups related calls into a trace
})
```

Every call automatically captures: model, provider, input/output tokens, latency, cost, and the full message array.

View LLM generations in PostHog: https://us.posthog.com/llm-analytics/generations

</wizard-report>
