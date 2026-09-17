# AGENTS.md

This repository is a **skills pack**, not an application runtime.

## Do

- Edit skills under `skills/<name>/SKILL.md`
- Keep frontmatter `name` equal to the folder name
- Prefer small, actionable steps agents can execute
- Run `node scripts/validate-skills.mjs` before releasing

## Don't

- Commit secrets or `.env` files
- Vendor private product code from client apps
- Expand scope into multi-stack scaffolds without a design pass

## Suggested user flow

`grill-idea` → `vibe-setup` → `deslop-web` → `ship-check` → `coding-agent`
