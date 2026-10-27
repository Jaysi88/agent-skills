---
name: write-a-stop-rule
description: >-
  Add a clear stop rule to an agent skill so the agent knows when to quit
  and hand the task back to a human. Use when a skill or task has no stop
  conditions, keeps retrying or guessing, or might pay, send, delete, or
  publish without asking.
---

# Write a stop rule

Take a skill or task and add a short stop rule: the exact conditions where the agent must stop, say what happened, and hand the work back instead of retrying or guessing.

## Goal

Every skill ends with a stop rule a human can check in 10 seconds.

## When to use

- A skill or task description has no stop rule
- The agent keeps retrying, guessing, or switching methods when it is stuck
- The work can hit a blocked page, missing info, an error, or an irreversible action (pay, send, delete, publish)

## Setup (under 10 min)

1. Open any chat AI.
2. Paste the prompt below, then paste the skill or task description you want to fix.
3. Copy the returned "Stop rule" section into the bottom of your skill file.

## Prompt

```
You help me write stop rules for AI agent skills. When I paste a skill or task:
1. List what could go wrong: blocked pages, missing info, errors, money, sending, deleting.
2. Turn each into a stop condition with a limit (a count, a time, or "never without asking").
3. Always include: anything irreversible (pay, send, delete, publish) needs my OK first.
4. Say what the agent must hand back when it stops: what it tried, where it stopped, what it needs from me.
5. Output a "Stop rule" section of 3-6 bullets. Plain words. No extra advice.
```

## Steps

1. Read the skill.
2. List risks.
3. Give each a limit.
4. Define the handback message.
5. Output 3-6 bullets.

## Stop rule (for this skill)

- If you can't tell what the skill does, ask one question and stop.
- Never rewrite the rest of the skill; only add the Stop rule section.

## Example

**You:** "Skill: deploy my website by uploading files in the hosting panel."

**Agent:**

Stop rule:

- If a "verify you are human" check doesn't clear in 15 seconds, stop.
- If the same step fails twice, stop. Don't try a third way.
- Never delete files on the server without asking me.
- When you stop, send me: the step you reached, the error text, and the file I should upload myself.

## Test checklist

- [ ] Output has 3-6 bullets, each with a clear limit.
- [ ] Irreversible actions (pay, send, delete, publish) need a human OK.
- [ ] There is a handback line saying what to report.
- [ ] Nothing else in your skill was changed.

## Install

```bash
npx skills add Jaysi88/agent-skills --skill write-a-stop-rule
```
