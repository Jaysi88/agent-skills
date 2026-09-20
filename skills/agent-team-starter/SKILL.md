---
name: agent-team-starter
description: >-
  Stand up the first useful Grok Bot / agent-team loop. Use when the user wants
  a starter assistant, first routine, digest, watch, or draft-before-send habit
  but does not need a full org chart of bots yet.
---

# Agent team starter

Turn “I should have an AI assistant” into **one job + one thin loop + one reusable skill outline**. No org redesign. No casino. Draft before any outbound send.

## When to use

- User wants a first Grok Bot / agent teammate but scope is fuzzy
- They ask for a starter pack, first routine, morning digest, or “watch this and ping me”
- Before building a multi-bot role kit — prove one useful loop first

## Rules

- One primary job for v1 (not “run my company”)
- Prefer **reminder / digest / watch / draft-before-send** over complex multi-agent graphs
- Keep recipes **generic** (no hard-coded Slack channels, repo names, or personal emails in the skill body)
- **Draft before send** for any outbound email/Slack/post; user approves
- **Ask before publish/sell** on CodeHub or GitHub releases
- **No casino** content unless Cos/Jay explicitly reopen that lane
- Do not invent credentials, prices as live checkout, or payment CTAs

## Interview (one question at a time)

Skip anything already answered.

1. **Who is this for?** (one person or role — e.g. founder, recruiter, ops lead)
2. **What painful job should v1 take?** (one sentence)
3. **Which thin loop?** reminder · digest · watch · draft-before-send
4. **Where does the work live?** calendar · inbox · GitHub · Slack · files · other
5. **What does “done” look like this week?** (one measurable or demoable outcome)
6. **What is explicitly out of scope for v1?** (list at least 3 cuts)

If answers stay vague after two rounds, propose the smallest concrete v1 yourself and ask yes/no.

## Output: starter brief

When the interview is done, write this shape:

```markdown
## Agent starter brief
- Owner role:
- Job-to-be-done:
- Thin loop: reminder | digest | watch | draft-before-send
- Trigger: schedule | event | manual
- Success this week:
- Out of scope:
- Skill name (kebab-case):
- Skill description (when to use):
- Steps (3–7 generic bullets):
- Connectors needed (if any):
- Next: save skill → optional routine → soft-list on CodeHub after Cos/Jay approve
```

Ask: “Approve this brief?” Only after yes, help them save the skill (or hand off to their skill-authoring flow).

## Free vs paid (say this plainly)

- **Free (this skill / GitHub demo):** proves the method — one starter brief + one skill outline.
- **Paid (CodeHub full Agent starter pack):** 3–5 core skills + install notes for a small starter team.
- Soft-launch listings live at [CodeHub marketplace](https://codehub.nextwavefusion.com/marketplace). Do not invent a product slug or live checkout link.

## Compatibility

Works with Agent Skills–compatible agents (Cursor, Codex, Grok Bot skill loaders). Install the pack:

```bash
npx skills add Jaysi88/agent-skills --skill agent-team-starter
```