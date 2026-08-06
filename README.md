# Merchant Core

**Business Management Made Easy**

Merchant Core is a web app for small businesses, shop owners, and growing teams to track sales, expenses, inventory, customers, credit, and business records — all in one secure platform. It grows with you: from a single shop on a point-of-sale terminal to a full multi-user organisation with finance, HR, and payroll.

- **Live app:** https://merchant-core-bay.vercel.app
- **Source code:** https://github.com/ElktrumElk/merchant-core-web

## What is Merchant Core?

Merchant Core replaces scattered spreadsheets, notebooks, and paper ledgers with a single dashboard for running a shop or small business. It is a single-page marketing site that presents the product, its features, and how to get started — alongside a complete user guide at `/guides`.

Today Merchant Core covers **thirteen core capabilities** organised into two groups:

### Core Business Tools

- **Real-Time Dashboard** — Total revenue, sales, profit, low-stock alerts, recent transactions, and critical notifications at a glance.
- **Point of Sale (POS)** — Ring up sales instantly with cash, card, or mobile payment; automatic 5% tax and real-time stock adjustment, plus a transaction log.
- **Inventory Manager** — Full stock records with SKUs, categories, low/out-of-stock status, and automatic reorder alerts.
- **Credit Ledger** — Every credit you give and who owes you, with automatic alerts when a payment passes its due date (active / overdue / critical).
- **Customer Directory** — Searchable customer profiles with purchase history, credit limits, and loyalty tiers.
- **Calculator** — In-app basic calculator, business calculator (margin, markup, tax, ROI, break-even, discount), and real-time currency converter.
- **Security** — Secure access and role-based permissions so only the right people manage your records.

### Growth & Organisation Features

- **Marketplace & Billboard Ads** — An in-app shopping hub where shoppers browse shops and products, build a cart, and check out — plus a billboard that plays short, muted, autoplaying video adverts. Users can open their own shop and upload POS items to it.
- **Spreadsheet Workspace** — An Excel-style editor (FortuneSheet) with workbook autosave, Save/Ctrl+S, import/export of `.xlsx` and `.csv`, and shareable deep links to every workbook.
- **Organisation Workspace** — A multi-user business workspace with five roles (Super Admin, Admin, HRM Manager, Finance Manager, Staff), each with role-based module access.
- **Finance & Accounting** — General ledger, automated invoicing (draft → sent → paid / void), tax compliance obligations, and a real-time balance sheet.
- **HRM & Payroll** — The entire employee lifecycle — hiring, payroll runs, time & attendance, performance reviews, and benefits administration.
- **Notifications & Alerts** — A transparent org-wide activity feed (POS sales, credit payments, invoices, payroll runs, check-ins) with an unread badge, per-member read state, and role-gated delete.

## How to use Merchant Core

The live app is a single page with the following sections:

1. **Hero** — the product name, tagline, and primary **Get Started** button.
2. **Why Merchant Core** — the problems the app solves for everyday shop owners.
3. **Solution** — how the app replaces manual record keeping across core and team features.
4. **Features** — the full feature set: **Core Business Tools** and **Growth & Organisation Features**.
5. **Downloads** — store badges for the app.

Click **Get Started** in the header to begin using the product. A complete walkthrough of every feature is available on the [User Guide](/guides) page.

### Setting up an account

1. Open **https://merchant-core-bay.vercel.app**.
2. Click the **Get Started** button in the top navigation.
3. Follow the on-screen sign-up flow to create your account and set up your business profile.
4. Once signed in, start adding products under **Inventory** and recording sales with **Point of Sale**.

### Dark and light mode

Use the sun/moon button in the header to switch between dark and light mode. Your choice is remembered on your device.

## SEO, Keywords & Search Accessibility

Merchant Core is engineered to be highly indexable and accessible to search engines and AI crawlers (Googlebot, Bingbot, ChatGPT, Perplexity, and similar). It uses a **structural, semantic order**: a single `h1`, logical `h2`/`h3` hierarchies, semantic HTML sections (`section`, `article`, `figure`, `figcaption`, `nav`), descriptive image `alt` text, and machine-readable structured data.

### On-page metadata (`app/layout.tsx`)

- **Title** — `Merchant Core — Business Management Made Easy` with a `%s | Merchant Core` template.
- **Description** — a full platform summary covering POS, inventory, credit ledger, customers, marketplace, spreadsheet, finance, HRM, payroll, attendance, and notifications.
- **Canonical URL & metadataBase** — `https://merchant-core-bay.vercel.app`.
- **Open Graph & Twitter cards** — summary_large_image with the `/merchant-core-dark.png` preview.
- **Robots** — `index, follow` with `max-image-preview: large`.

### Primary keywords (in semantic order)

`business management software` · `point of sale` · `POS system` · `inventory management` · `credit ledger` · `debt tracking` · `customer directory` · `customer relationship management` · `CRM` · `marketplace` · `billboard ads` · `spreadsheet software` · `organisation workspace` · `multi-user business software` · `team management` · `finance and accounting software` · `invoicing software` · `balance sheet` · `tax compliance` · `HRM` · `human resources software` · `payroll software` · `attendance tracking` · `notifications and alerts` · `sales tracking` · `expense tracking` · `business dashboard` · `retail management` · `small business software` · `free inventory app`

### Structured data (JSON-LD)

`app/layout.tsx` emits a schema.org `@graph` containing:

- **WebSite** — the site identity, URL, and description.
- **SoftwareApplication** — category `BusinessApplication`, `operatingSystem: Web`, a free `Offer`, and a full `featureList`.
- **Organization** — the Merchant Core organisation with founder `Person` entities (including author images for the team).

The User Guide (`app/guides/page.tsx`) additionally emits an **FAQPage** schema from its question/answer pairs, which is a strong source of answer-rich snippets in search results.

### Robots & sitemap

- **`app/robots.ts`** — allow rules for all crawlers plus Googlebot and Bingbot, the sitemap URL, and host declaration.
- **`app/sitemap.ts`** — the home page, section anchors (`#about`, `#solution`, `#features`, `#downloads`), and the `/guides` page. Update it whenever a new route or section anchor is added.

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
