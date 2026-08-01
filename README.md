# Merchant Core

**Business Management Made Easy**

Merchant Core is a web app for small businesses and shop owners to track sales, expenses, inventory, customers, and business records — all in one secure platform.

- **Live app:** https://merchant-core-bay.vercel.app
- **Source code:** https://github.com/ElktrumElk/merchant-core-web

## What is Merchant Core?

Merchant Core replaces scattered spreadsheets and paper ledgers with a single dashboard for running a shop or small business. It is a single-page marketing site that presents the product, its features, and how to get started.

## Features

- **Inventory** — Keep full records of your stock; add items, track quantities, and know exactly what is on your shelf in real time.
- **Credit Ledger** — Record every credit you give and who owes you, with automatic alerts when a payment passes its due date.
- **Dashboard** — A clear overview of total revenue, sales, profit, and activity at a glance.
- **Point of Sale** — Ring up sales instantly — cash, card, or credit — so every transaction is captured the moment it happens.
- **Calculator** — Quick in-app calculations so you never have to switch to a separate calculator.
- **Security** — Your business data stays safe behind secure access, so only the right people can manage your records.

## How to use Merchant Core

The live app is a single page with the following sections:

1. **Hero** — the product name, tagline, and primary **Get Started** button.
2. **Why Merchant Core** — the problems the app solves for everyday shop owners.
3. **Solution** — how the app replaces manual record keeping.
4. **Features** — the six core tools described above.
5. **Downloads** — store badges for the app.

Click **Get Started** in the header to begin using the product.

### Setting up an account

1. Open **https://merchant-core-bay.vercel.app**.
2. Click the **Get Started** button in the top navigation.
3. Follow the on-screen sign-up flow to create your account and set up your business profile.
4. Once signed in, start adding products under **Inventory** and recording sales with **Point of Sale**.

### Dark and light mode

Use the sun/moon button in the header to switch between dark and light mode. Your choice is remembered on your device.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **UI:** React 19
- **Icons:** [elk-components](https://www.npmjs.com/package/elk-components)
- **Styling:** CSS per component, Tailwind CSS v4 utility setup
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint

## Development

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start the development server     |
| `npm run build`    | Create an optimized production build |
| `npm run start`    | Start the production server      |
| `npm run lint`     | Run ESLint                       |
| `npm run test`     | Run the Vitest test suite        |

## Team

- **Elkanah Cole** — [GitHub](https://github.com/ElktrumElk) · [X (Twitter)](https://x.com/ElktrumElk)
- **Favour Macurlay** — [GitHub](https://github.com/favmaclegend-ops)

Built with Next.js and deployed on Vercel.
