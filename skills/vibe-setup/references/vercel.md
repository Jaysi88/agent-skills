# Vercel checklist

Use these as the final handoff bullets after a successful local build.

1. Install Vercel CLI or use the Vercel dashboard import for the GitHub repo.
2. Set root directory to the app root (this project).
3. Framework preset: Next.js (auto).
4. Copy keys from `.env.example` into Vercel Project → Settings → Environment Variables (Production + Preview).
5. Deploy; confirm the production URL loads `/` and any `/app` stub.

## Auth notes

- **Clerk**: add the same publishable/secret keys in Vercel; set allowed origins/redirects in the Clerk dashboard.
- **Auth.js**: set `AUTH_SECRET` and provider keys in Vercel; set callback URL to the deployment URL.

## Neon notes

- Create a Neon database, copy the pooled connection string into `DATABASE_URL`.
- Use Vercel’s Neon integration when available; otherwise paste the URL manually.

## Do not

- Commit `.env`
- Put production secrets in README
- Claim deploy succeeded without a URL or CLI confirmation
