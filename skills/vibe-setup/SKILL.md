---
name: vibe-setup
description: >-
  Interview-style wizard that scaffolds a new Next.js (App Router) + TypeScript
  + Tailwind project aimed at Vercel. Use when the user wants a new project,
  vibe setup, bootstrap, scaffold Next.js, or start an app from scratch.
---

# Vibe setup

Run a short setup interview, then scaffold a production-ready Next.js app for Vercel. Do not dump a long questionnaire — ask **one question at a time**.

## When to use

- User says: vibe setup, new project, scaffold Next.js, start an app, bootstrap
- User is in a home/empty workspace and wants a real project created

## Hard rules

- Prefer **Next.js App Router + TypeScript + Tailwind + ESLint**
- No secrets in the repo; write `.env.example` only
- Add only what the user chose — no drive-by features
- Create the project on disk, init git if needed, then continue work **inside** that project
- Verify with a build before claiming done
- If `cursor-app-control` `move_agent_to_root` / `create_project` tools exist, use them after the folder exists

## Interview (one at a time)

Ask in this order. Offer sensible defaults in parentheses. Skip a question only if the user already answered it.

1. **Project name** — lowercase kebab-case folder name (example: `my-app`)
2. **App type**
   - `landing` — marketing/landing page
   - `saas` — dashboard shell
   - `marketing-auth` — marketing site + auth-ready app area
3. **Package manager** — `pnpm` (default) / `npm` / `yarn`
4. **Auth** — `none` (default) / `clerk` / `authjs`
5. **Database** — `none` (default) / `neon`
6. **UI kit** — `tailwind-shadcn` (default) / `tailwind-only`
7. **Parent directory** — default `~/Projects` (Windows: `%USERPROFILE%\Projects`) if it exists, else home

Confirm the plan in one short paragraph, then execute.

## Execute

### 1. Create folder

```bash
mkdir -p <parent>/<project-name>
cd <parent>/<project-name>
```

On Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "<parent>\<project-name>" | Out-Null
Set-Location "<parent>\<project-name>"
```

If the directory already exists and is not empty, stop and ask what to do.

### 2. Scaffold Next.js

Use non-interactive `create-next-app` with the chosen package manager.

pnpm example:

```bash
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

npm example:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

If the tool rejects scaffolding into a non-empty dir because of `.git` only, that is fine — proceed. If unrelated files block it, ask the user.

### 3. Optional layers (only if chosen)

Read `references/stacks.md` for exact stubs.

- **Auth Clerk** — add Clerk packages + minimal provider wiring + `.env.example` keys; do not invent real keys
- **Auth Auth.js** — add Auth.js packages + route stub + `.env.example` placeholders
- **Neon** — add `@neondatabase/serverless` (or project-current Neon SDK) + `lib/db.ts` stub + `DATABASE_URL=` in `.env.example`
- **shadcn** — init shadcn with defaults and add only `button` unless the user asks for more

For `landing`: keep `src/app/page.tsx` as a single clear first viewport (brand, headline, one supporting line, one CTA). Do not build a dashboard layout.

For `saas`: create a minimal `src/app/(app)/` shell with a simple sidebar + empty main.

For `marketing-auth`: landing at `/` plus a placeholder `/app` route.

### 4. Git + docs

- `git init` if not already a repo
- Ensure `.gitignore` includes `.env*` (keep `.env.example`)
- Write a short README: what it is, `dev` command, Vercel deploy note
- Commit only if the user asked for a commit

### 5. Move workspace

If available, call `move_agent_to_root` with the new project path so subsequent edits land in the app.

### 6. Verify

```bash
<pm> run build
```

Fix failures you introduced. Then report:

- Absolute project path
- Dev command (`<pm> dev`)
- What was installed (auth/db/ui)
- Vercel next steps from `references/vercel.md` (3–5 bullets max)

## Refusal / safety

- Do not paste API keys, tokens, or private business repos into the new project
- Do not open or copy client product code from private apps unless the user explicitly points at a path
- Do not add billing, multi-tenant, or admin systems in v1 scaffold

## References

- `references/stacks.md` — stack defaults and stubs
- `references/vercel.md` — deploy checklist
