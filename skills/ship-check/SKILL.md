---
name: ship-check
description: >-
  Pre-deploy health check for Next.js apps aimed at Vercel. Use before claiming
  “done”, before first deploy, or when the user says ship check, ready to
  deploy, or verify this app. Runs build/lint checks and reports blockers.
---

# Ship check

Prove the app is deployable. Prefer commands over vibes.

## When to use

- After `vibe-setup` finishes scaffolding
- Before first Vercel deploy
- User says: ship check, ready to deploy, verify, preflight

## Checklist (run in order)

1. **Detect package manager** from lockfile (`pnpm-lock.yaml` → pnpm, `yarn.lock` → yarn, else npm).
2. **Install** if `node_modules` missing: `<pm> install`.
3. **Lint** if script exists: `<pm> run lint`.
4. **Typecheck** if script/`tsc` exists: prefer `pnpm exec tsc --noEmit` / equivalent.
5. **Build**: `<pm> run build` — required. Fail the skill if build fails.
6. **Env audit**
   - Read `.env.example` if present
   - List required keys
   - Check local `.env*` exists only as guidance — **never print secret values**
   - Flag any `process.env.*` used in code that isn’t in `.env.example`
7. **Route smoke**
   - Confirm `src/app/page.tsx` or `app/page.tsx` exists
   - Note auth/db stubs that still need keys
8. **Vercel readiness**
   - Framework: Next.js
   - Output: default Next build
   - Env vars to set in Vercel (names only)

## Report format

```markdown
## Ship check
- Status: PASS | BLOCKED
- PM:
- Lint:
- Types:
- Build:
- Missing env (names only):
- Deploy notes:
- Blockers:
```

## Rules

- Fix trivial failures you caused (syntax, missing import) then re-run build
- Do not deploy unless the user asks
- Do not invent green status — if build didn’t run successfully, status is BLOCKED
