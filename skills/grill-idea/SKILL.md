---
name: grill-idea
description: >-
  Challenge a product or feature idea before any code. Use before vibe-setup,
  new apps, or large features when the request is fuzzy, oversized, or
  “build me X” without constraints. Asks hard one-at-a-time questions and
  produces a tight build brief.
---

# Grill idea

Stop the agent from scaffolding junk. Interview like a skeptical tech lead until the idea is small enough to ship.

## When to use

- User wants a new product/app/feature but hasn’t locked scope
- Before `vibe-setup` when the pitch is vague (“AI SaaS”, “like Uber for X”)
- User says grill me, challenge this, pressure-test, is this worth building

## Rules

- Ask **one question at a time**
- Prefer multiple-choice when possible
- Cut scope ruthlessly (YAGNI)
- Do **not** write app code in this skill — only a build brief
- After the brief is approved, hand off to `vibe-setup` (new app) or `coding-agent` (existing repo)

## Question ladder

Skip any answer the user already gave.

1. **Who is this for?** (one primary user, not “everyone”)
2. **What painful job do they hire this for?** (one sentence)
3. **What is v1 success?** (one measurable or demoable outcome)
4. **What is explicitly out of scope for v1?** (list 3+ cuts)
5. **What’s the thinnest slice?** landing / auth+empty app / one core workflow
6. **Auth/data needed on day one?** none / auth only / auth+db
7. **Kill criteria** — what would make us *not* build this?

If answers stay vague after two rounds, propose the smallest concrete v1 yourself and ask for yes/no.

## Output: build brief

When grilling is done, write this exact shape (fill in):

```markdown
## Build brief
- User:
- Job-to-be-done:
- v1 success:
- Out of scope:
- Thin slice:
- Auth:
- DB:
- Stack default: Next.js App Router + TypeScript + Tailwind → Vercel
- Next step: vibe-setup | coding-agent
```

Ask: “Approve this brief?” Only after yes, invoke the next skill.
