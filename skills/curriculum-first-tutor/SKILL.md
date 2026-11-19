---
name: curriculum-first-tutor
description: >-
  Have an agent teach you a topic from zero by writing the full lesson list
  first, then giving each lesson as a 2-minute read, one practice task and
  3-5 flash cards, with a plain progress file so the next lesson picks up
  where the last stopped. Use when you want to learn a topic step by step
  with a daily or weekly lesson.
---

# Curriculum-first tutor

Don't ask an agent "teach me X" and get a random lesson. Make it write the whole path first, then deliver one same-shaped lesson at a time.

## Goal

A numbered lesson list from beginner to advanced, and one short lesson at a time that always resumes from a progress file.

## When to use

- You want to learn a new topic from zero
- Past lessons felt random, repeated, or skipped steps
- You want a daily or weekly lesson on your phone

## Setup (under 10 min)

1. Open any chat AI or your bot's setup chat.
2. Paste the prompt below and name your topic and your level (zero is fine).
3. Approve the lesson list. Ask it to create a `progress.md` file with the list, the rules and "Next: Lesson 1".
4. Optional: schedule one lesson per day or week.

## Prompt

```
You are my tutor for: <topic>. I start from zero.
1. FIRST write the full lesson list, numbered, from beginner to advanced. One line each. Wait for my OK before lesson 1.
2. Every lesson has the same shape:
   - A read of about 2 minutes, in your own words, phone friendly.
   - ONE practice task I can do in 10 minutes (on paper, demo or a free tool, never real money or real accounts).
   - 3 to 5 flash cards (question, answer).
3. Keep a plain progress file: the lesson list, the rules, lessons sent with dates, and "Next: Lesson N". Read it before every lesson and update it after.
4. Never make up facts, numbers or prices. If a lesson quotes a current price or statistic, check live data first and say the source and time. If you can't check, leave the number out.
5. If I miss a day, send the next lesson, not a recap, unless I ask.
6. Learning, not professional advice.
```

## Steps

1. Name the topic and your starting level.
2. Approve or edit the lesson list.
3. Create `progress.md` with the list and "Next: Lesson 1".
4. Each lesson: read the progress file, write the next lesson in the fixed shape, then update the file.
5. Do the practice task. Use the flash cards for a quick recall.
6. Every so often, ask for a review lesson built from past flash cards.

## Stop rule

- If the progress file is missing or unreadable, stop and ask. Don't guess which lesson is next.
- If a lesson needs a live fact you can't check, leave it out and say so.
- Never send a lesson that skips ahead of the list or repeats one already marked sent.
- Practice tasks never involve real money or real accounts. If a topic needs it, make it a paper or demo task.

## Example

**Illustrative example.**

`progress.md`:

```
# Tutor: <topic>
Rules: own words, 2-min read, 1 practice task, 3-5 flash cards. Check live data before quoting any number.
Curriculum: 1 Basics; 2 Key terms; 3 How to read the main chart; 4 Common mistakes; 5 Make a paper plan; ...
## Sent
Lesson 1 - date
Lesson 2 - date
Next: Lesson 3
```

Lesson 3 arrives as: a 2-minute read, one practice task, 4 flash cards. Then `progress.md` says "Next: Lesson 4".

## Test checklist

- [ ] The full lesson list was written and approved before lesson 1.
- [ ] Each lesson has a 2-minute read, one practice task and 3-5 flash cards.
- [ ] `progress.md` was read first and updated after.
- [ ] No facts or prices were invented; live data was checked or the number was left out.
- [ ] Practice tasks use paper or demo only.

## Install

```bash
npx skills add Jaysi88/agent-skills --skill curriculum-first-tutor
```
