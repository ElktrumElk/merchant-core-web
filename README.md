# Merchant Core

**Business Management Made Easy**

Merchant Core is a web application for small businesses and shop owners to track sales, expenses, inventory, customers, and business records — all in one secure platform.

**Live site:** https://merchant-core-bay.vercel.app
**Repository:** https://github.com/favmaclegend-ops/MerchantCore

## Features

- **Inventory** — Keep full records of your stock; add items, track quantities, and know exactly what is on your shelf in real time.
- **Credit Ledger** — Record every credit you give and who owes you, with automatic alerts when a payment passes its due date.
- **Dashboard** — A clear overview of total revenue, sales, profit, and activity at a glance.
- **Point of Sale** — Ring up sales instantly — cash, card, or credit — so every transaction is captured the moment it happens.
- **Calculator** — Quick in-app calculations so you never have to switch to a separate calculator.
- **Security** — Your business data stays safe behind secure access, so only the right people can manage your records.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **UI:** React 19
- **Icons:** [elk-components](https://www.npmjs.com/package/elk-components)
- **Styling:** CSS modules per component, Tailwind CSS v4 utility setup
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the source files.

## Available Scripts

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start the development server     |
| `npm run build`    | Create an optimized production build |
| `npm run start`    | Start the production server      |
| `npm run lint`     | Run ESLint                       |
| `npm run test`     | Run the Vitest test suite        |

## Project Structure

```
app/
├── components/
│   ├── downloads/   # Store-badge download section
│   ├── features/    # Feature list section
│   ├── footer/      # Site footer with team info
│   ├── header/      # Sticky navigation header
│   ├── hero/        # Hero + platform marquee
│   └── solution/    # Issues & solutions timeline
├── layout.tsx       # Root layout, metadata, JSON-LD
├── page.tsx         # Landing page composition
├── globals.css      # Global styles + starfield/aurora effects
├── robots.ts        # Generated robots.txt
└── sitemap.ts       # Generated sitemap.xml
```

## SEO

The site ships with production-ready SEO:

- **Metadata** (`app/layout.tsx`) — title/description, robots directives, canonical URL, Open Graph and Twitter cards.
- **Author images** — added via schema.org JSON-LD structured data (`Person` schema), since Next.js's native `authors` field does not support images.
- **`app/robots.ts`** — allows all major crawlers and points to the sitemap.
- **`app/sitemap.ts`** — root URL plus in-page section anchors.

## Deployment

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Team

- **Elkanah Cole** — [GitHub](https://github.com/ElktrumElk) · [X (Twitter)](https://x.com/ElktrumElk)
- **Favour Macurlay** — [GitHub](https://github.com/favmaclegend-ops)

Built with Next.js and deployed on Vercel.
