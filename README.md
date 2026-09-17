# Agent Skills

Reusable agent skills for Cursor, Codex, and compatible coding agents.

Install:

```bash
npx skills add Jaysi88/agent-skills
```

## Skills

| Skill | When to use |
| --- | --- |
| [`vibe-setup`](./skills/vibe-setup/SKILL.md) | Start a new Next.js + Vercel project with a short setup interview |
| [`coding-agent`](./skills/coding-agent/SKILL.md) | Implement features/fixes with locate → implement → verify discipline |

## Quick start

1. Install the skills pack.
2. In your agent chat, say: **vibe setup** or **new Next.js project**.
3. Answer one question at a time.
4. The agent scaffolds the app, verifies the build, and leaves you with run + deploy steps.

## Maintainer notes

This repo is intentionally small and active: skill markdown, references, and docs only. No app runtime, no secrets, no private product code.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
