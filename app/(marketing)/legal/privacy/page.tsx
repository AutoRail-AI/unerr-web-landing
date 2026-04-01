import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "unerr Privacy Policy — how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="animate-fade-in mx-auto max-w-3xl px-6 py-24">
      <header className="mb-16">
        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Legal</p>
        <h1 className="font-grotesk text-foreground mt-3 text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground mt-3 text-sm">Last updated: March 18, 2026</p>
      </header>

      <div className="text-muted-foreground [&_h2]:font-grotesk [&_h2]:text-foreground [&_h3]:font-grotesk [&_h3]:text-foreground space-y-10 text-sm leading-relaxed [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        <p>
          unerr Inc. (&ldquo;unerr&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
          protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your
          rights regarding your data when you use the unerr platform, APIs, CLI tools, and related services (the
          &ldquo;Service&rdquo;).
        </p>

        {/* ── 1. Information We Collect ── */}
        <section>
          <h2>1. Information We Collect</h2>

          <h3>1.1 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Authentication credentials (hashed passwords or OAuth tokens)</li>
            <li>Organization name and membership information</li>
          </ul>

          <h3 className="mt-4">1.2 Repository Metadata</h3>
          <p>When you connect a repository, we collect and index:</p>
          <ul>
            <li>File names and directory structure</li>
            <li>Function signatures, class definitions, and type declarations</li>
            <li>Import/export relationships and dependency graphs</li>
            <li>Git commit metadata (authors, timestamps, commit messages)</li>
          </ul>
          <p className="mt-2">
            <strong className="text-foreground">We do not store your full source code.</strong> We index structural
            metadata — the &ldquo;shape&rdquo; of your codebase — to build the knowledge graph. Source code is processed
            transiently during indexing and is not persisted.
          </p>

          <h3 className="mt-4">1.3 Usage Data</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>Browser type, operating system, and device information</li>
            <li>IP address (used for rate limiting and security; not stored long-term)</li>
            <li>Pages visited, features used, and interactions within the Service</li>
            <li>API and CLI usage patterns (endpoints called, frequency)</li>
          </ul>

          <h3 className="mt-4">1.4 Cookies &amp; Analytics</h3>
          <p>
            We use essential cookies for authentication and session management. We use{" "}
            <a
              href="https://plausible.io"
              className="text-foreground underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plausible Analytics
            </a>{" "}
            for privacy-compliant website analytics — no cookies, no personal data collection, no cross-site tracking.
            We do not use Google Analytics or any advertising trackers.
          </p>
        </section>

        {/* ── 2. How We Use Your Information ── */}
        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Build and maintain your codebase knowledge graph</li>
            <li>Generate health grades, guardrails, and code intelligence outputs</li>
            <li>Provide MCP context to your AI coding assistants</li>
            <li>Send transactional emails (account verification, billing, security alerts)</li>
            <li>Detect, prevent, and address security issues and abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            <strong className="text-foreground">
              We do not use your repository data to train machine learning models.
            </strong>{" "}
            Analysis is performed per-repository and per-organization. Your data is isolated from other customers.
          </p>
        </section>

        {/* ── 3. Data Sharing ── */}
        <section>
          <h2>3. Data Sharing &amp; Third Parties</h2>
          <p>We do not sell your personal data. We share data only in the following circumstances:</p>
          <ul>
            <li>
              <strong className="text-foreground">Service providers:</strong> We use third-party infrastructure
              providers (cloud hosting, database services) that process data on our behalf under strict data processing
              agreements.
            </li>
            <li>
              <strong className="text-foreground">AI providers:</strong> When generating code intelligence outputs, we
              may send repository metadata to AI model providers. We use providers that do not train on customer data
              and we minimize the data sent to what is necessary for the analysis.
            </li>
            <li>
              <strong className="text-foreground">GitHub / GitLab:</strong> When you connect a repository, we interact
              with your Git hosting provider via their APIs using the permissions you grant. We access only the
              repositories and data you explicitly authorize.
            </li>
            <li>
              <strong className="text-foreground">Legal requirements:</strong> We may disclose information if required
              by law, subpoena, or legal process, or if we believe in good faith that disclosure is necessary to protect
              our rights, your safety, or the safety of others.
            </li>
          </ul>
        </section>

        {/* ── 4. Data Security ── */}
        <section>
          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>Authentication tokens are hashed and never stored in plaintext</li>
            <li>API keys are generated with cryptographic randomness and can be revoked at any time</li>
            <li>Infrastructure hosted on SOC 2 compliant providers</li>
            <li>Regular security reviews and dependency audits</li>
          </ul>
          <p className="mt-3">
            No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* ── 5. Data Retention ── */}
        <section>
          <h2>5. Data Retention</h2>
          <ul>
            <li>
              <strong className="text-foreground">Account data:</strong> Retained while your account is active. Deleted
              within 30 days of account deletion.
            </li>
            <li>
              <strong className="text-foreground">Knowledge graph data:</strong> Deleted when you disconnect a
              repository or delete your account. Re-indexing builds a fresh graph from your current codebase.
            </li>
            <li>
              <strong className="text-foreground">Usage logs:</strong> Retained for up to 90 days for operational
              purposes, then anonymized or deleted.
            </li>
            <li>
              <strong className="text-foreground">Billing records:</strong> Retained as required by tax and accounting
              regulations (typically 7 years).
            </li>
          </ul>
        </section>

        {/* ── 6. Your Rights ── */}
        <section>
          <h2>6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>
              <strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about
              you.
            </li>
            <li>
              <strong className="text-foreground">Correction:</strong> Request correction of inaccurate data.
            </li>
            <li>
              <strong className="text-foreground">Deletion:</strong> Request deletion of your personal data. You can
              delete your account at any time from the dashboard settings.
            </li>
            <li>
              <strong className="text-foreground">Portability:</strong> Request your data in a structured, commonly used
              format.
            </li>
            <li>
              <strong className="text-foreground">Objection:</strong> Object to processing of your data for certain
              purposes.
            </li>
            <li>
              <strong className="text-foreground">Restriction:</strong> Request that we restrict processing of your
              data.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:privacy@unerr.dev" className="text-foreground underline hover:opacity-80">
              privacy@unerr.dev
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        {/* ── 7. GDPR ── */}
        <section>
          <h2>7. European Users (GDPR)</h2>
          <p>
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your
            personal data under the following legal bases:
          </p>
          <ul>
            <li>
              <strong className="text-foreground">Contract:</strong> Processing necessary to provide the Service to you.
            </li>
            <li>
              <strong className="text-foreground">Legitimate interest:</strong> Processing for security, fraud
              prevention, and service improvement.
            </li>
            <li>
              <strong className="text-foreground">Consent:</strong> Where you have given explicit consent (e.g.,
              marketing communications).
            </li>
            <li>
              <strong className="text-foreground">Legal obligation:</strong> Where processing is required by law.
            </li>
          </ul>
          <p className="mt-3">
            Data may be transferred to the United States where our infrastructure is located. We use Standard
            Contractual Clauses (SCCs) approved by the European Commission to safeguard international data transfers.
          </p>
        </section>

        {/* ── 8. CCPA ── */}
        <section>
          <h2>8. California Users (CCPA)</h2>
          <p>
            If you are a California resident, you have the right to know what personal information we collect, request
            deletion, and opt out of the &ldquo;sale&rdquo; of personal information.{" "}
            <strong className="text-foreground">We do not sell personal information.</strong>
          </p>
          <p className="mt-3">
            To make a CCPA request, email{" "}
            <a href="mailto:privacy@unerr.dev" className="text-foreground underline hover:opacity-80">
              privacy@unerr.dev
            </a>{" "}
            with the subject line &ldquo;CCPA Request.&rdquo;
          </p>
        </section>

        {/* ── 9. Children ── */}
        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            The Service is not directed to individuals under 16. We do not knowingly collect personal information from
            children. If we learn that we have collected data from a child under 16, we will delete it promptly. If you
            believe a child has provided us with personal information, please contact us.
          </p>
        </section>

        {/* ── 10. Changes ── */}
        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the
            updated policy on the Service and updating the &ldquo;Last updated&rdquo; date. Your continued use of the
            Service after changes are posted constitutes acceptance.
          </p>
        </section>

        {/* ── 11. Contact ── */}
        <section>
          <h2>11. Contact</h2>
          <p>If you have questions about this Privacy Policy or how we handle your data, contact us at:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:privacy@unerr.dev" className="text-foreground underline hover:opacity-80">
                privacy@unerr.dev
              </a>
            </li>
          </ul>
          <p className="mt-3">
            See also our{" "}
            <Link href="/legal/terms" className="text-foreground underline hover:opacity-80">
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
