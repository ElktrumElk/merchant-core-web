<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Merchant Core — Project Guide

Merchant Core is a single-page marketing site for a business management app. It is built with Next.js 16 (App Router) and React 19.

## Site identity (keep consistent)

- **Platform name:** Merchant Core
- **Tagline:** Business Management Made Easy
- **Live URL:** `https://merchant-core-bay.vercel.app` (this is also `metadataBase` and the canonical domain)
- **Repo:** `https://github.com/favmaclegend-ops/MerchantCore`
- **Team:** Elkanah Cole (`github.com/ElktrumElk`, `x.com/ElktrumElk`) and Favour Macurlay (`github.com/favmaclegend-ops`)

## Tech conventions

- **Icons:** import from `elk-components/icons` (e.g. `import { ShoppingCart } from "elk-components/icons"`). Brand icons (GitHub, X) are NOT in the package — use inline SVG with `currentColor`.
- **Styling:** one CSS file per component, imported at the top of the component (`import "./feature.css"`). Components use the `starfield`/`aurora` background helpers from `app/globals.css`. Follow existing naming conventions (`.fig`, `.img-cnt`, `.x`, etc.).
- **Fonts:** Geist via `next/font/google` in `app/layout.tsx`.
- **Scripts:** `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run test` (Vitest).
- **Testing:** run `npm run test` after changes. Note: one test (`scroll-navigation`) is currently failing on the base branch — do not treat a regression to it as caused by unrelated work.

## SEO rules (important)

- **Where metadata lives:** `app/layout.tsx` exports `metadata: Metadata` and a `structuredData` JSON-LD block rendered as `<script type="application/ld+json">` in the body.
- **Base URL:** all absolute URLs (canonical, sitemap, robots, OG) must use `https://merchant-core-bay.vercel.app`, derived from the `baseUrl` constant in `app/layout.tsx`. Never hardcode a different domain.
- **`app/robots.ts`** — always list the sitemap URL and `host`. Keep allow rules for Googlebot/Bingbot.
- **`app/sitemap.ts`** — must use `MetadataRoute.Sitemap` and the correct base URL. Update it whenever a new route or section anchor is added.
- **Author images:** Next.js's native `authors` metadata field only renders `<meta name="author">` and `<link rel="author">` — it has NO `image` field. To expose author photos (e.g. Favour's GitHub avatar), add them in the JSON-LD `Person` schema, never in the `authors` array.
- **Open Graph / Twitter:** keep title, description, and the OG image (`/merchant-core-dark.png`) in sync with the site copy.
- **SEO tests:** the scroll-navigation test asserts `scroll-behavior: smooth` exists in `app/globals.css` — do not remove it.
