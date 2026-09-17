# Agent Skills — vibe coder pack

**Name:** `agent-skills`  
**What it does:** Turns a fuzzy “build me an app” chat into a **grilled brief → Next.js+Vercel scaffold → deslop → ship check** pipeline for Cursor, Codex, and other Agent Skills–compatible agents.

Famous packs win by being *narrow and sharp* (Humanizer = un-AI writing, Archify = diagrams, SkillSpector = skill security). This pack’s lane is:

> **Ship a real Next.js app on Vercel without scaffolding garbage.**

## Install

```bash
npx skills add Jaysi88/agent-skills
```

Install one skill:

```bash
npx skills add Jaysi88/agent-skills --skill vibe-setup
```

## Pipeline (use in order)

```text
grill-idea → vibe-setup → deslop-web → ship-check → coding-agent
```

| Skill | Name | What it does |
| --- | --- | --- |
| [`grill-idea`](./skills/grill-idea/SKILL.md) | Grill idea | Pressure-tests the idea; outputs a tight build brief (no code) |
| [`vibe-setup`](./skills/vibe-setup/SKILL.md) | Vibe setup | One-question-at-a-time interview → scaffolds Next.js App Router + TS + Tailwind for Vercel |
| [`deslop-web`](./skills/deslop-web/SKILL.md) | Deslop web | Strips AI landing-page slop (generic heroes, pill soup, fake stats) |
| [`ship-check`](./skills/ship-check/SKILL.md) | Ship check | Lint/type/build + env-name audit before you claim “ready to deploy” |
| [`coding-agent`](./skills/coding-agent/SKILL.md) | Coding agent | Locate → implement → verify for features/fixes after the app exists |

## Quick start

1. Install the pack.
2. Say **grill this idea** (optional but recommended).
3. Say **vibe setup**.
4. Answer one question at a time.
5. Say **deslop** then **ship check**.

## Why this exists

Most agents jump straight into `create-next-app` and produce:

- unclear product scope
- default purple AI aesthetics
- missing env documentation
- “it works on my machine” with no build proof

This pack makes the agent **ask, scaffold, clean, and verify**.

## Compatibility

- [Agent Skills](https://agentskills.io/specification) layout (`skills/<name>/SKILL.md`)
- Works with Cursor, Codex, Claude Code, and other clients that load skills via `npx skills add`

## Validate locally

```bash
node scripts/validate-skills.mjs
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
