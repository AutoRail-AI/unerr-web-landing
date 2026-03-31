import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "unerr Terms of Service — the legal agreement governing your use of the unerr platform.",
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 animate-fade-in">
      <header className="mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Legal</p>
        <h1 className="mt-3 font-grotesk text-3xl font-bold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: March 18, 2026
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-grotesk [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_h3]:font-grotesk [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5">

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the unerr platform,
          including our website, APIs, CLI tools, MCP integrations, and related services (collectively,
          the &ldquo;Service&rdquo;). By accessing or using the Service, you agree to be bound by these Terms.
          If you do not agree, do not use the Service.
        </p>

        <p>
          The Service is provided by unerr Inc. (&ldquo;unerr&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;), a company incorporated in the United States.
        </p>

        {/* ── 1. Account Terms ── */}
        <section>
          <h2>1. Account Terms</h2>
          <ul>
            <li>You must be at least 16 years of age to use the Service.</li>
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the security of your account credentials. unerr will not be liable for any loss resulting from unauthorized use of your account.</li>
            <li>You may not use the Service for any purpose that is unlawful or prohibited by these Terms.</li>
            <li>One person or legal entity may maintain no more than one free account.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>
        </section>

        {/* ── 2. Acceptable Use ── */}
        <section>
          <h2>2. Acceptable Use</h2>
          <p className="mb-3">You agree not to:</p>
          <ul>
            <li>Use the Service in violation of any applicable law or regulation.</li>
            <li>Attempt to gain unauthorized access to the Service, other accounts, or computer systems or networks connected to the Service.</li>
            <li>Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Use the Service to transmit malware, viruses, or any other malicious code.</li>
            <li>Scrape, crawl, or use automated means to access the Service except through our published APIs and CLI tools.</li>
            <li>Resell, sublicense, or redistribute the Service without our prior written consent.</li>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate your account if we reasonably believe you
            are in violation of these terms.
          </p>
        </section>

        {/* ── 3. Your Content & Intellectual Property ── */}
        <section>
          <h2>3. Your Content &amp; Intellectual Property</h2>
          <ul>
            <li>
              <strong className="text-foreground">You retain all rights</strong> to your code, repositories,
              and any content you provide through the Service (&ldquo;Your Content&rdquo;). unerr does not
              claim ownership of Your Content.
            </li>
            <li>
              By connecting a repository, you grant unerr a limited, non-exclusive license to access,
              index, and analyze your repository metadata (file names, function signatures, class structures,
              dependency relationships) solely to provide the Service to you.
            </li>
            <li>
              The knowledge graph, health grades, guardrails, and other analytical outputs we generate
              from Your Content are derived works created to provide the Service. These outputs are not
              shared with other users or third parties except as described in our{" "}
              <Link href="/legal/privacy" className="text-foreground underline hover:opacity-80">
                Privacy Policy
              </Link>.
            </li>
            <li>
              We do not use Your Content to train machine learning models. Code analysis is performed
              per-repository and per-organization. Your data is isolated from other customers.
            </li>
          </ul>
        </section>

        {/* ── 4. Service Availability ── */}
        <section>
          <h2>4. Service Availability</h2>
          <p>
            We strive to maintain high availability but do not guarantee that the Service will be
            uninterrupted, timely, secure, or error-free. The Service is provided on an &ldquo;as is&rdquo;
            and &ldquo;as available&rdquo; basis. We may modify, suspend, or discontinue any part of the
            Service at any time with reasonable notice.
          </p>
        </section>

        {/* ── 5. Payment & Billing ── */}
        <section>
          <h2>5. Payment &amp; Billing</h2>
          <ul>
            <li>Paid plans are billed in advance on a monthly or annual basis and are non-refundable except as required by law.</li>
            <li>You are responsible for paying all fees associated with your account. If payment fails, we may suspend access to paid features after providing notice.</li>
            <li>Prices are subject to change with 30 days&apos; prior notice. Continued use of the Service after a price change constitutes acceptance of the new pricing.</li>
            <li>Free tier usage is subject to the limits published on our pricing page. We reserve the right to modify free tier limits at any time.</li>
          </ul>
        </section>

        {/* ── 6. API & CLI Usage ── */}
        <section>
          <h2>6. API &amp; CLI Usage</h2>
          <ul>
            <li>API keys are personal to your account and must not be shared or published.</li>
            <li>We may impose rate limits on API and CLI usage. Exceeding these limits may result in temporary throttling or suspension.</li>
            <li>You are responsible for securing any API keys issued to your account. Compromised keys should be revoked immediately through the dashboard.</li>
          </ul>
        </section>

        {/* ── 7. Third-Party Integrations ── */}
        <section>
          <h2>7. Third-Party Integrations</h2>
          <p>
            The Service integrates with third-party platforms including GitHub, GitLab, and various
            AI coding assistants (Cursor, Claude Code, Windsurf) via MCP. Your use of these integrations
            is also subject to the terms of service of those third-party platforms. We are not responsible
            for the availability, accuracy, or policies of third-party services.
          </p>
        </section>

        {/* ── 8. Limitation of Liability ── */}
        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, unerr and its officers, directors, employees, and
            agents shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any
            loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your use of or inability to use the Service.</li>
            <li>Any unauthorized access to or alteration of your data.</li>
            <li>Any third-party conduct on the Service.</li>
            <li>Any other matter relating to the Service.</li>
          </ul>
          <p className="mt-3">
            Our total aggregate liability for all claims arising from or related to the Service shall not
            exceed the greater of (a) the amount you paid us in the 12 months preceding the claim or
            (b) $100 USD.
          </p>
        </section>

        {/* ── 9. Indemnification ── */}
        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless unerr and its officers, directors, employees,
            and agents from and against any claims, liabilities, damages, losses, and expenses arising out
            of or in any way connected with your access to or use of the Service, your violation of these
            Terms, or your violation of any third-party rights.
          </p>
        </section>

        {/* ── 10. Termination ── */}
        <section>
          <h2>10. Termination</h2>
          <ul>
            <li>You may cancel your account at any time through the dashboard settings. Cancellation takes effect at the end of your current billing period.</li>
            <li>We may suspend or terminate your account at any time for violation of these Terms, with or without notice.</li>
            <li>Upon termination, your right to use the Service ceases immediately. We will delete your data within 30 days of account deletion, except as required by law or legitimate business purposes (e.g., fraud prevention).</li>
            <li>Sections 3, 8, 9, and 12 survive termination.</li>
          </ul>
        </section>

        {/* ── 11. Changes to Terms ── */}
        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by posting
            the updated Terms on the Service and updating the &ldquo;Last updated&rdquo; date. Your continued
            use of the Service after changes are posted constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* ── 12. Governing Law ── */}
        <section>
          <h2>12. Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, United States, without regard
            to conflict of law principles. Any disputes arising from these Terms or the Service shall be
            resolved in the state or federal courts located in Delaware. You consent to the personal
            jurisdiction of such courts.
          </p>
        </section>

        {/* ── 13. Contact ── */}
        <section>
          <h2>13. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@unerr.dev" className="text-foreground underline hover:opacity-80">
              legal@unerr.dev
            </a>.
          </p>
        </section>

      </div>
    </div>
  )
}
