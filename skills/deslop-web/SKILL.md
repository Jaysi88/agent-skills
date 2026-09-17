---
name: deslop-web
description: >-
  Remove AI UI/copy slop from Next.js and marketing pages. Use after scaffolding,
  before launch, or when the user says deslop, clean this up, less AI, or make
  it look human. Targets generic hero paste, purple gradients, pill soup, and
  empty dashboard chrome.
---

# Deslop web

Make the first viewport look intentional — not “AI default landing page.”

## When to use

- Right after `vibe-setup` on a landing/marketing page
- User says deslop, clean slop, less AI, polish UI, make it real
- Page has generic headlines, gradient wash, or fake stats

## Kill list (remove or rewrite)

- Purple-on-white / indigo glow gradients as the whole brand
- “Welcome to the future of…” / “unleash” / “supercharge” / “seamless” filler
- Pill clusters, icon rows, and stat strips with invented numbers
- Card grids that do no interactive job
- Fake testimonials, logos, or avatars
- Dashboard widgets on a marketing first viewport
- Emoji as decoration
- Multi-layer shadows and glassmorphism stacks with no purpose

## Keep / prefer

- One composition in the first viewport
- Real product/place/atmosphere visual idea (or honest typography-led layout)
- Brand/name as a hero-level signal
- One headline, one supporting sentence, one CTA group
- CSS variables with a clear palette (not default shadcn purple cosplay)
- Motion only if it clarifies hierarchy (2–3 intentional motions max)

## Process

1. Read the main page + global CSS/tokens.
2. List concrete slop findings (file + what’s wrong).
3. Patch the smallest set of files (usually `page.tsx` + globals/tokens).
4. Do not add new sections “for richness.”
5. Run lint/build if available; otherwise state what you checked.
6. Summarize before/after in 3–5 bullets.

## Out of scope

- Full redesign systems
- Brand strategy workshops
- Copywriting novels — tighten, don’t expand
