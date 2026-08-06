import type { Metadata } from "next";
import Guide from "../components/guide/Guide";
import Footer from "../components/footer/Footer";

const faq = [
  {
    q: "Is Merchant Core free?",
    a: "Yes. There is no subscription fee. You can sign up and start using all features immediately.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Merchant Core runs in any modern web browser — on desktop, tablet, or mobile. There is nothing to install.",
  },
  {
    q: "Does it work offline?",
    a: "Not yet. An internet connection is required while using the app.",
  },
  {
    q: "How do I change the currency?",
    a: "Go to Settings > Currency Preference and select your preferred currency from the dropdown. All values across the app will update immediately.",
  },
  {
    q: "Can I have multiple users?",
    a: "Yes. Beyond personal accounts, Merchant Core offers an Organisation workspace where a Super Admin can add Admins, HRM and Finance managers, and staff — each logging in with the organisation name and their own credentials, with role-based access.",
  },
  {
    q: "What is the Marketplace in Merchant Core?",
    a: "The Marketplace is an in-app shopping hub where you can browse shops and their products, add items to a cart, and check out. Merchant Core also includes a billboard that plays short video adverts, plus tools to open your own shop and upload your POS products to it.",
  },
  {
    q: "Can I use a spreadsheet inside Merchant Core?",
    a: "Yes. The Spreadsheet workspace is an Excel-style editor with workbook autosave, Save/Ctrl+S, and import/export of .xlsx and .csv files. Every workbook has its own shareable deep link.",
  },
  {
    q: "Can a team run its business in Merchant Core?",
    a: "Yes. The Organisation workspace lets a whole team work on one account with clear roles: Super Admin, Admin, HRM Manager, Finance Manager, and Staff. Module access follows each role automatically.",
  },
  {
    q: "Can I manage payroll, attendance, and HR?",
    a: "Yes, within the Organisation workspace. HRM covers employees, payroll runs, time and attendance, performance reviews, and benefits administration. Every member can also check in with a self check-in attendance page.",
  },
  {
    q: "Can I create invoices and track tax?",
    a: "Yes. The Finance & Accounting tools include a general ledger, automated invoicing with draft/sent/paid/void states, tax obligations with due dates, and a real-time balance sheet.",
  },
  {
    q: "How do notifications work?",
    a: "Every sale, credit payment, invoice, payroll run, and employee check-in is emitted to an org-wide activity feed. The header bell shows an unread badge and a dropdown, and a dedicated Notifications page lists everything with the actor, amount, and time.",
  },
  {
    q: "What happens if I forget my password?",
    a: "Use the login form to enter your email. If you cannot access your account, a password reset flow will be available in a future release.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is stored on the Merchant Core server and is associated with your account. A secure token keeps your session active while you use the app.",
  },
  {
    q: "How do stock levels update?",
    a: "When you complete a POS checkout, the stock quantities of the products in the cart are reduced automatically. Manual edits in the Inventory page also update stock immediately, and inventory changes sync through to your marketplace listings.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "Learn how to use Merchant Core — create an account, track inventory, ring up sales with the POS, manage credit and customers, sell on the marketplace, use the spreadsheet workspace, and run an organisation with finance, HRM, and payroll.",
  openGraph: {
    title: "User Guide — Merchant Core",
    description:
      "A complete walkthrough of Merchant Core: account setup, dashboard, inventory, POS, credit ledger, customers, calculator, marketplace, spreadsheet, organisation workspace, finance, HRM, and notifications.",
    url: "https://merchant-core-bay.vercel.app/guides",
  },
};

export default function GuidesPage() {
  return (
    <main className="main">
      <Guide />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
