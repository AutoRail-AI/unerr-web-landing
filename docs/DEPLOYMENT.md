# Deployment Guide

unerr-web is deployed to **Fly.io** via a GitHub Actions CI/CD pipeline with manual deploy approval.

## Architecture

```
Push to main
  │
  ▼
┌─────────────────────────┐
│  Build & Push Image     │  (automatic)
│  - Multi-stage Docker   │
│  - Push to Fly registry │
└──────────┬──────────────┘
           │
           ▼
    ┌──────────────┐
    │  Approval    │  (manual — GitHub environment protection)
    └──────┬───────┘
           │
           ▼
┌─────────────────────────┐
│  Deploy to Fly.io       │  (rolling strategy)
│  - flyctl deploy        │
│  - Health check verify  │
└─────────────────────────┘
```

**App name:** `unerr-web`
**Region:** `iad` (Virginia — colocated with Supabase us-east-1)
**URL:** `https://unerr-web.fly.dev`

## Prerequisites

### 1. Fly.io CLI

```bash
# macOS
brew install flyctl

# or curl
curl -L https://fly.io/install.sh | sh
```

### 2. Fly.io Account & App

```bash
flyctl auth login
flyctl apps create unerr-web    # already created
```

### 3. GitHub Secrets

Add these in **Settings > Secrets and variables > Actions > Secrets**:

| Secret | Description | How to get |
|--------|-------------|------------|
| `FLY_API_TOKEN` | Fly deploy token | `flyctl tokens create deploy -x 999999h` |

> No other build-time secrets are needed. All env vars in `env.mjs` are optional, so `next build` succeeds without them. Real values are injected at runtime via Fly secrets.

### 4. GitHub Environment

Create a **`production`** environment with required reviewers:

1. Go to **Settings > Environments > New environment**
2. Name: `production`
3. Enable **Required reviewers** and add yourself
4. This gates the deploy job — after the image builds, you approve it in the Actions UI

## Fly.io Runtime Secrets

These are injected at runtime (not baked into the Docker image):

### Required

```bash
flyctl secrets set \
  SUPABASE_DB_URL="postgresql://..." \
  BETTER_AUTH_SECRET="$(openssl rand -base64 32)" \
  BETTER_AUTH_URL="https://unerr-web.fly.dev" \
  --app unerr-web
```

### Optional (add when ready)

```bash
# Google OAuth
flyctl secrets set \
  GOOGLE_CLIENT_ID="..." \
  GOOGLE_CLIENT_SECRET="..." \
  --app unerr-web
```

To view current secrets:

```bash
flyctl secrets list --app unerr-web
```

### What about NEXT_PUBLIC_* vars?

`NEXT_PUBLIC_*` vars are inlined into client JS bundles at build time by Next.js. They're set in `fly.toml` under `[env]` (not Fly secrets) so they're available during `flyctl deploy`:

```toml
[env]
  NEXT_PUBLIC_APP_URL = "https://unerr-web.fly.dev"
  NEXT_PUBLIC_UNERR_APP_SERVER = "https://app.unerr.dev"
```

### What about Stripe, Redis, PostHog, Sentry, etc.?

Those integrations live in kap10-server (app.unerr.dev), not this landing site. This repo only needs Supabase + Better Auth + optionally Google OAuth.

## How Deployment Works

### Automatic (CI/CD)

1. Push to `main` triggers the `fly-deploy.yml` workflow
2. **Build job** runs automatically:
   - Builds the multi-stage Docker image
   - Pushes to `registry.fly.io/unerr-web` with a version tag (`{pkg-version}-{sha7}`)
3. **Deploy job** waits for manual approval:
   - Go to the Actions tab, find the run, click "Review deployments"
   - Approve the `production` environment
   - `flyctl deploy` rolls out the new image

### Manual Trigger

You can also trigger a deploy from any branch via **Actions > Build & Deploy to Fly.io > Run workflow**.

### Manual CLI Deploy

```bash
flyctl deploy --app unerr-web
```

This builds and deploys directly from your local machine using the `Dockerfile` and `fly.toml`.

## Docker Image

The `Dockerfile` uses a 3-stage build:

| Stage | Base | Purpose |
|-------|------|---------|
| `deps` | `node:22-alpine` | Install dependencies with `pnpm install --frozen-lockfile` |
| `builder` | `node:22-alpine` | Copy source, run `pnpm build` (Next.js standalone output) |
| `runner` | `node:22-alpine` | Minimal image — only `.next/standalone`, `.next/static`, `public` |

The final image runs as non-root user `nextjs` on port 3000.

No build-time secrets are needed — all env vars in `env.mjs` are marked optional, and Better Auth has a built-in fallback secret for builds.

## Fly.io Configuration

Defined in `fly.toml`:

| Setting | Value |
|---------|-------|
| VM | 1 shared CPU, 512MB RAM |
| Auto-stop | Machines stop when idle |
| Auto-start | Machines start on incoming requests |
| Min machines | 1 always running |
| Health check | `GET /healthz` every 30s |
| Concurrency | 200 soft / 250 hard limit |
| HTTPS | Forced (HTTP redirects to HTTPS) |

## Scaling

```bash
# Scale to 2 machines
flyctl scale count 2 --app unerr-web

# Upgrade VM size
flyctl scale vm shared-cpu-2x --app unerr-web

# Add a region
flyctl regions add lhr --app unerr-web
```

## Monitoring

```bash
# App status and machine info
flyctl status --app unerr-web

# Live logs
flyctl logs --app unerr-web

# SSH into a running machine
flyctl ssh console --app unerr-web

# Open the app in browser
flyctl open --app unerr-web
```

## Rollback

```bash
# List recent releases
flyctl releases --app unerr-web

# Rollback to a previous release
flyctl deploy --image registry.fly.io/unerr-web:<previous-tag> --app unerr-web
```

## Troubleshooting

**Build fails with env var errors:**
All env vars in `env.mjs` are optional, so the build should succeed without any secrets. If you added a new required env var, make it `.optional()` in `env.mjs` or provide a fallback in the code that reads it.

**Deploy times out:**
The workflow uses `--wait-timeout 300` (5 minutes). If the app takes longer to start, check logs with `flyctl logs` and increase the timeout if needed.

**Health check failing:**
The check hits `GET /healthz` which rewrites to `/api/health`. It checks the Prisma/Supabase connection. Verify `SUPABASE_DB_URL` is set correctly:
```bash
flyctl ssh console --app unerr-web -C "wget -qO- http://localhost:3000/healthz"
```

**Machine not starting:**
```bash
flyctl machines list --app unerr-web
flyctl machines restart <machine-id> --app unerr-web
```
