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
**Region:** `iad` (US East — Virginia, colocated with Supabase us-east-1)
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
| `SUPABASE_DB_URL` | PostgreSQL connection string | Supabase dashboard > Settings > Database |
| `BETTER_AUTH_SECRET` | Auth secret (min 32 chars) | `openssl rand -base64 32` |

### 4. GitHub Environment

Create a **`production`** environment with required reviewers:

1. Go to **Settings > Environments > New environment**
2. Name: `production`
3. Enable **Required reviewers** and add yourself
4. This gates the deploy job — after the image builds, you approve it in the Actions UI

## Fly.io Runtime Secrets

These are injected at runtime (not baked into the Docker image):

```bash
flyctl secrets set \
  SUPABASE_DB_URL="postgresql://..." \
  BETTER_AUTH_SECRET="your-secret-min-32-chars" \
  BETTER_AUTH_URL="https://unerr-web.fly.dev" \
  NEXT_PUBLIC_APP_URL="https://unerr-web.fly.dev" \
  NEXT_PUBLIC_UNERR_APP_SERVER="https://app.unerr.dev" \
  GOOGLE_CLIENT_ID="..." \
  GOOGLE_CLIENT_SECRET="..." \
  AWS_BEARER_TOKEN_BEDROCK="..." \
  AWS_REGION="us-east-1" \
  --app unerr-web
```

To view current secrets:

```bash
flyctl secrets list --app unerr-web
```

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

Build-time env vars (`SUPABASE_DB_URL`, `BETTER_AUTH_SECRET`) use safe placeholder defaults so the build succeeds without real credentials. Real values are injected at runtime via Fly secrets.

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
The Dockerfile provides placeholder defaults for `SUPABASE_DB_URL` and `BETTER_AUTH_SECRET` at build time. If you added a new required env var to `env.mjs`, add a corresponding `ARG`/`ENV` with a placeholder default in the builder stage of the Dockerfile.

**Deploy times out:**
The workflow uses `--wait-timeout 300` (5 minutes). If the app takes longer to start, check logs with `flyctl logs` and increase the timeout if needed.

**Health check failing:**
The check hits `GET /healthz` which rewrites to `/api/health`. Verify that route returns 200. Check with:
```bash
flyctl ssh console --app unerr-web -C "wget -qO- http://localhost:3000/healthz"
```

**Machine not starting:**
```bash
flyctl machines list --app unerr-web
flyctl machines restart <machine-id> --app unerr-web
```
