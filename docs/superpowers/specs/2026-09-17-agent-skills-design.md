# Agent Skills — Design

Date: 2026-09-17  
Status: Approved

## Goal

Public OSS repository of Cursor/Codex-compatible agent skills. Primary use: OpenAI Codex for Open Source maintainer application, plus genuine reuse by other developers via `npx skills add Jaysi88/agent-skills`.

## Positioning

Lane: **Ship a real Next.js app on Vercel without scaffolding garbage.**  
Pipeline: `grill-idea` → `vibe-setup` → `deslop-web` → `ship-check` → `coding-agent`.

## Hero skill: `vibe-setup`

Interview-style Next.js + Vercel project bootstrap.

1. Trigger on new-project / vibe-setup / scaffold Next.js requests.
2. Ask one setup question at a time (name, app type, package manager, auth, DB, UI).
3. Scaffold with `create-next-app` (App Router, TypeScript, Tailwind, ESLint).
4. Add only selected options (auth/db stubs).
5. Init git, write minimal README, move agent into the new project root.
6. Verify with package-manager build; print local run + Vercel next steps.

Hard rules: no secrets in repo; `.env.example` only; no drive-by features; prefer App Router + TypeScript.

## Secondary skill: `coding-agent`

Sanitized autonomous implementation workflow (locate → plan → implement → verify → report).

## Out of scope (v1)

- Multi-stack (Vite / Hostinger)
- CodeWave marketplace packs
- Native OS popup UI (Cursor question UI / chat interview is the product)

## Distribution

```text
npx skills add Jaysi88/agent-skills
```

MIT license, Issues + Releases enabled, public GitHub profile required for OSS applications.
