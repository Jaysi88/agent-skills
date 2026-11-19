---
name: honest-backtest
description: >-
  Run a paper back-test before any trading or automation bot touches real
  money, and write an "Honest reading" section that shows idle cash, labels
  after-the-fact tweaks as sensitivity only, and treats one period as one
  sample. Use when a bot or strategy claims it beat a baseline, or before
  switching from paper to real money.
---

# Honest backtest

Back-test on paper first, then write down what the result does and does not prove. A bot that "won" mostly by sitting in cash has not won.

## Goal

A back-test report a skeptical friend could read in 2 minutes and not feel misled.

## When to use

- A trading or automation bot is about to move from paper to real money
- A strategy claims it beat plain monthly buying or buy-and-hold
- You tuned a setting and want to know whether the gain is real

## Setup (under 10 min)

1. Open any chat AI or coding agent.
2. Paste the prompt below, then paste or point it at your strategy rules and price data source.
3. Use public or historical data only. No API keys, no orders.

## Prompt

```
You help me run an honest paper back-test. Never place orders. Never invent prices, fills or results; use the data I give you or fetch it from a public source and say where it came from.
1. Baselines: run my strategy against plain monthly buying and buy-and-hold on the same data.
2. Same inputs: give every strategy the same simulated deposits and the same fee per trade. State both.
3. Table: one row per strategy with final value, return on total deposits, worst drawdown, cash left idle, and number of buys/sells.
4. Idle cash: show how much money was actually deployed (net bought) next to total deposited. If most of it sat in cash, say so first.
5. Sensitivity: any setting I changed or tried AFTER seeing results goes in its own rows labelled "sensitivity only". Never present those as the strategy's result.
6. Write an "Honest reading" section of 3-5 bullets: what won and why, how much was idle, which rows are sensitivity only, and that one period is one sample, not proof.
7. End with: "Paper only. Past results do not guarantee future returns. Educational, not financial advice."
```

## Steps

1. Write the strategy rules in plain words, with the size you would really use.
2. Pick one data period and one data source. Note both.
3. Run the strategy, monthly buying and buy-and-hold with identical deposits and fees.
4. Fill the table, including idle cash and amount deployed.
5. Try other sizes or settings only after step 4, and mark each as "sensitivity only".
6. Write the Honest reading.
7. Keep running on paper. Real money is a separate decision that a human makes.

## Stop rule

- Never place a real order. If the task needs an API key with trading rights, stop and ask the human.
- If the price data is missing, stale or from an unknown source, stop and say what you need. Don't fill gaps with made-up numbers.
- If the strategy beat the baseline only in rows labelled "sensitivity only", report "no real edge shown", not a win.
- If you can't say how much money was deployed, the report is not finished.

## Example

**Illustrative example, not a real test run.**

| Strategy | Return on deposits | Cash left idle | Note |
|---|---|---|---|
| Monthly buying | -2% | none | baseline |
| Buy and hold | +3% | none | baseline |
| Strategy at real size | +2% | most of the deposits | barely invested |
| Strategy at bigger size | +8% | less | sensitivity only |

**Honest reading:**

- At the real size the strategy "won" mostly by staying in cash. That is not skill.
- The bigger-size row was tried after seeing results. Sensitivity only.
- One period, two assets: one sample, not proof.
- Paper only. Educational, not financial advice.

## Test checklist

- [ ] Every strategy used the same deposits and fee, and both are written down.
- [ ] Idle cash and amount actually deployed are shown.
- [ ] Anything tried after seeing results is labelled "sensitivity only".
- [ ] The Honest reading says one period is one sample.
- [ ] No real orders, no invented numbers, and a "not financial advice" line.

## Install

```bash
npx skills add Jaysi88/agent-skills --skill honest-backtest
```
