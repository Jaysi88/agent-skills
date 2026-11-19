---
name: quiet-alerts
description: >-
  Alert rules that stop a price or monitoring bot from spamming you: at most
  one alert per item per 24 hours unless it falls another 3%, levels reset
  weekly with the change explained, no orders, and no "nothing changed"
  messages. Use when you set up or fix a bot that pings you about prices,
  stocks, crypto, or any watched number.
---

# Quiet alerts

An alert bot is only useful if you still read it. Write the rules for when it speaks and when it stays silent.

## Goal

Few alerts, each with new information, and no orders placed by the bot.

## When to use

- You are setting up a bot that watches prices or any number against levels
- Your bot pings you several times for the same move
- You want levels that stay current without hand-editing

## Setup (under 10 min)

1. Open any chat AI or your bot's setup chat.
2. Paste the prompt below, then list what you watch and your levels.
3. Keep a small alerts log file (time, item, level hit, price) so the bot can check it before sending.

## Prompt

```
You are my alert bot. You inform; you never trade. Rules:
1. Information only. Never place, change or cancel an order. Say "information, not financial advice" on price alerts.
2. Before sending any alert, read the alerts log. Send at most ONE alert per item per 24 hours.
3. Exception: send again inside 24 hours only if the price has fallen another X% (default 3%) since the last alert for that item. Say how far it fell.
4. If nothing new happened, send nothing. Never message just to say nothing changed. Do log the check.
5. Weekly, reset each level from last week's high and low. Keep the old levels in the file, and in the next alert say what changed (old level -> new level).
6. Every alert has: item, current price and when it was read, the level it crossed, and what is new since the last alert.
7. Never invent prices. If the live price can't be read, say so once and stop.
```

## Steps

1. List the items and a buy/sell level for each, in one small levels file.
2. Add an alerts log file. Each alert and each silent check is one line.
3. On every check: read the live price, compare to levels, then read the log.
4. Apply the 24-hour rule and the extra-X% exception. Send or stay silent.
5. Once a week, reset levels from the past week's high and low. Write the change into the levels file.
6. Mention the level change in the next alert you actually send.

## Stop rule

- Never place orders or ask for trading keys.
- If the live price can't be read twice in a row, send one message saying so and stop checking until the human replies.
- If an item has alerted 3 times in 24 hours despite the rule, stop alerting on it and ask the human to review the levels.
- If you are unsure whether something is new, don't send.

## Example

**Illustrative example, not real prices.**

| Time | Item | What happened | Action |
|---|---|---|---|
| Mon 09:00 | Coin A | Price crosses buy level | Alert sent |
| Mon 15:00 | Coin A | Still under level, down 0.5% since alert | Silent, logged |
| Tue 08:00 | Coin A | Down 3.4% since alert | Alert: "fell another 3.4%" |
| Tue 15:00 | Coin B | Nothing crossed | Silent, no message |

## Test checklist

- [ ] Same item never alerts twice in 24 hours unless it fell another X%.
- [ ] A day with no news produces no message.
- [ ] Levels were reset from last week's high and low, and the change was stated.
- [ ] No orders, and price alerts say they are information only.
- [ ] Every alert states when the price was read.

## Install

```bash
npx skills add Jaysi88/agent-skills --skill quiet-alerts
```
