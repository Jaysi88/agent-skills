# Contributing

Thanks for helping improve these agent skills.

## What belongs here

- Clear, copy-pasteable instructions in `SKILL.md`
- Optional `references/` docs that agents load only when needed
- Small fixes to wording, defaults, or safety rules

## What does not belong here

- Secrets, API keys, or private business logic
- Large app scaffolds committed into this repo
- Drive-by rewrites of unrelated skills

## Skill format

Each skill lives under `skills/<name>/` and must include:

```text
skills/<name>/SKILL.md
```

Frontmatter requires:

- `name` — lowercase, hyphens only, matches the folder name
- `description` — what it does and when to use it

Follow the [Agent Skills](https://agentskills.io/specification) shape so `npx skills add` keeps working.

## Local check

Before opening a PR:

```bash
npm run validate
```

Also:

1. Confirm `name` matches the folder.
2. Read the skill as if you are a fresh agent with no repo context.
3. Ensure every required step is actionable (commands, decision points, verify step).

## Releases

Maintainers tag releases when skill behavior changes in a user-visible way.
