import type { Metadata } from "next";
import Guide from "../components/guide/Guide";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "Learn how to use Merchant Core — create an account, track inventory, ring up sales with the POS, manage credit, customers, and more.",
  openGraph: {
    title: "User Guide — Merchant Core",
    description:
      "A complete walkthrough of Merchant Core: account setup, dashboard, inventory, POS, credit ledger, customers, calculator, and settings.",
    url: "https://merchant-core-bay.vercel.app/guides",
  },
};

export default function GuidesPage() {
  return (
    <main className="main">
      <Guide />
      <Footer />
    </main>
  );
}
