# Stack defaults

## Baseline (always)

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- `src/` directory
- Import alias `@/*`

## App type stubs

### landing

- Single `src/app/page.tsx` composition
- Brand/name as hero-level signal
- One headline, one short supporting sentence, one CTA group
- No dashboard chrome, no card grids in the first viewport

### saas

- `src/app/(app)/layout.tsx` — simple shell (sidebar + main)
- `src/app/(app)/page.tsx` — empty state with one primary action label
- Keep chrome minimal; no fake analytics widgets

### marketing-auth

- Marketing page at `src/app/page.tsx`
- Placeholder authenticated area at `src/app/app/page.tsx`
- If auth is `none`, still create the `/app` route as a stub and note auth was skipped

## Auth

### none

No auth packages. Mention how to add later in the final report only if relevant.

### clerk

- Install current Clerk Next.js SDK
- Wrap root layout with Clerk provider pattern from current docs
- Protect `/app` only when app type needs it
- `.env.example`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### authjs

- Install Auth.js / NextAuth for App Router per current docs
- Add a route handler stub under `src/app/api/auth/[...nextauth]/`
- `.env.example`:

```bash
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Do not invent provider credentials.

## Database

### none

Skip DB packages.

### neon

- Add a small `src/lib/db.ts` that reads `process.env.DATABASE_URL`
- Fail clearly if the env var is missing at runtime (throw or return a typed error)
- `.env.example`:

```bash
DATABASE_URL=
```

No migrations framework unless the user asks.

## UI

### tailwind-only

Keep Tailwind from `create-next-app`. No shadcn.

### tailwind-shadcn

- Initialize shadcn with project defaults
- Add `button` component only unless user requests more
- Prefer existing project CSS variables; do not invent a purple gradient theme
