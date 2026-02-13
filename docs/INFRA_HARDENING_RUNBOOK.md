# Infrastructure Hardening Runbook (Glamping)

## 1) Network Exposure
- Keep `glamping-frontend` internal-only on `web-proxy-net`.
- Do not publish host ports from this service in production.
- Route all external traffic through the infrastructure Nginx gateway.

## 2) Container Health / Recovery
- Healthcheck endpoint: `GET /` on port `3000`.
- Compose healthcheck is configured with retries and start period.
- Use `docker compose ps` and `docker inspect --format='{{json .State.Health}}' glamping-frontend` for diagnostics.

## 3) Lead API Abuse Control
- `/api/inquiries` uses:
  - Honeypot field (`website`) drop rule
  - IP-based rate limiting (10 minutes / 12 requests)
- If traffic scales up, move to Redis-backed limiter and add CAPTCHA.

## 4) Cookie Security (A/B Landing)
- Variant cookie is configured with:
  - `httpOnly: true`
  - `secure: true` in production
  - `sameSite: lax`

## 5) Secrets Management
- Never commit `.env`.
- Use `.env.example` for required keys.
- In production, inject secrets from the deployment host/CI secret store.

## 6) Observability Baseline
- API failures are logged with `requestId`, `ip`, and status.
- Compose logging rotates at 10MB x 5 files.
- Recommended next step:
  - Add Sentry (app + API)
  - Add alerting for webhook 5xx/timeout
  - Add reverse proxy access/error log dashboard

## 7) Deployment Validation
- `npm run lint`
- `npm run build`
- `docker compose up -d --build`
- Verify:
  - `docker compose ps`
  - Nginx upstream reachable via domain
  - `/api/inquiries` success/failure paths
