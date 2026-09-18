---
name: safe-ship
description: >-
  Make a Vercel/Next.js release reversible before calling it live. Use after
  ship-check, before or right after first production deploy, or when the user
  says make it live, go live, rollback plan, or safe ship. Ends with URL,
  owner, and a revert receipt — not just “deployed”.
---

# Safe ship

Deploy is not done until rollback is cheap. Prefer a reversible release over a heroic push.

## When to use

- After `ship-check` status is PASS
- User says: make it live, go live, ship it, production, rollback plan, safe ship
- First production deploy or any risky release

## Prerequisites

- `ship-check` PASS (or re-run it and fix blockers first)
- Know the deploy target (usually Vercel production or a named preview)

## Steps (run in order)

1. **Confirm owner**
   - Who is on the hook for this release? (name/handle — do not invent)
   - If unclear, ask once, then proceed with “unassigned — set before promote”

2. **Capture pre-release baseline**
   - Current production URL (if any)
   - Current git SHA / deployment ID if available (`git rev-parse --short HEAD`, Vercel dashboard/CLI)
   - Note: never print secrets or `.env` values

3. **Health check plan** (write before promote)
   - One URL that must return 200 (usually `/` or a known health route)
   - One critical user path to click/smoke after promote
   - Optional: `curl -I <url>` or open preview URL and note status

4. **Promote / deploy** only if the user asked
   - Prefer Vercel preview → promote, or `vercel --prod` when they explicitly want prod
   - Record the **live URL** and **deployment ID / git SHA**

5. **Post-deploy verify**
   - Hit the health URL
   - Smoke the critical path once
   - If either fails → execute kill/rollback immediately (step 6), do not “watch and wait”

6. **Kill / rollback path** (must be concrete)
   - Vercel: rollback to previous production deployment (dashboard or CLI)
   - Git: note the prior SHA to `vercel rollback` / redeploy
   - If no prior deployment exists, kill path = unpublish / remove domain / disable traffic — say so explicitly

7. **Emit revert receipt** (required output — do not skip)

## Revert receipt format

```markdown
## Revert receipt
- Status: LIVE | ROLLED_BACK | BLOCKED
- Live URL:
- Owner:
- This release: <deployment id or git SHA>
- Previous good: <deployment id or git SHA or “none — first ship”>
- Health check: <url + result>
- Rollback command / clicks:
- Kill criteria: <when to pull the plug>
```

## Rules

- Do **not** treat “deploy succeeded” as done — receipt is required
- Do **not** invent a previous deployment ID; say `none — first ship` if unknown
- Do **not** print secrets, tokens, or env values
- If user only wants the plan (no deploy), still output a filled receipt template with Status: BLOCKED and blank Live URL
- Hand off to `coding-agent` only for post-ship bugs — keep this skill focused on release safety
