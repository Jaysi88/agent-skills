# Bot charters

Copy-paste charter templates for Grok Bot or any agent that accepts a written role. Each charter gives the role, hard rules, a suggested routine schedule, and the skills it uses from this repo.

| Charter | What it does | Skills it uses |
| --- | --- | --- |
| [`x-desk-bot.md`](./x-desk-bot.md) | Drafts X posts one at a time. You post them. | [`write-a-stop-rule`](../skills/write-a-stop-rule/SKILL.md) |
| [`price-alert-bot.md`](./price-alert-bot.md) | Watches prices against your levels. Information only, paper only. | [`quiet-alerts`](../skills/quiet-alerts/SKILL.md), [`honest-backtest`](../skills/honest-backtest/SKILL.md) |
| [`daily-tutor-bot.md`](./daily-tutor-bot.md) | Teaches you a topic from zero, one short lesson at a time. | [`curriculum-first-tutor`](../skills/curriculum-first-tutor/SKILL.md) |

## How to use one

1. Install the skills the charter names:

   ```bash
   npx skills add Jaysi88/agent-skills --skill quiet-alerts
   ```

2. Open the charter, replace everything in `<angle brackets>`, and paste it into your bot's instructions.
3. Create the routine from the suggested schedule. Times are suggestions; change them to your time zone.
4. Before trusting a charter, test it with [`skill-test-before-trust`](../skills/skill-test-before-trust/SKILL.md): one normal task, one tricky task, one task that should stop.

## Rules every charter shares

- The human decides anything irreversible: posting, sending, spending, merging, deploying.
- No made-up numbers. If a value can't be read or checked, the bot says so and leaves it out.
- No secrets in chat or in files in this repo.
- A bot that has nothing new stays silent.
