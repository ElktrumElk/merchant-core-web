@AGENTS.md

# Merchant Core — Claude-specific guidance

## SEO & understanding

- This is a **single-page marketing site** (Next.js 16 App Router) for a business management app. All sections — Solution, Features, Downloads — live on `/` via in-page anchors (`#solution`, `#features`, `#downloads`).
- **Canonical domain:** always `https://merchant-core-bay.vercel.app`. Derive absolute URLs from the `baseUrl` constant in `app/layout.tsx`; never invent another domain.
- **Metadata:** kept in `app/layout.tsx` (`metadata` export + `structuredData` JSON-LD script). Author photos belong in JSON-LD `Person` schema — the native `authors` metadata field cannot hold images.
- **`app/robots.ts`** and **`app/sitemap.ts`** drive `robots.txt` and `sitemap.xml`. Keep them in sync with the base URL and any new sections.
- Keep Open Graph / Twitter title, description, and OG image (`/merchant-core-dark.png`) aligned with site copy.

## Key files

- `app/layout.tsx` — root layout, metadata, JSON-LD, Geist fonts
- `app/page.tsx` — composes Header, Hero, Solution, Features, Downloads, Footer
- `app/globals.css` — global styles, `starfield`/`aurora` helpers, `--global-border`
- `app/components/*/` — one folder per section with its own `.tsx` + `.css`

## Workflow

- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js 16 code (breaking changes vs older versions).
- After changes, run `npm run lint` and `npm run test`. The `scroll-navigation` test is pre-existing failing — don't treat regressions to it as your fault.
- Run `npm run build` to verify metadata/robots/sitemap output.
