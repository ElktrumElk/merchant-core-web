import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://merchant-core-bay.vercel.app");

export const metadata: Metadata = {
  metadataBase,
  title: "Merchant Core — Business Management Made Easy",
  description:
    "Track sales, expenses, inventory, customers, and business records — all in one secure platform. Built by Elkanah Cole & Favour Macurlay.",
  applicationName: "Merchant Core",
  authors: [
    { name: "Elkanah Cole", url: "https://github.com/ElktrumElk" },
    { name: "Favour Macurlay", url: "https://github.com/favmaclegend-ops" },
  ],
  keywords: [
    "Merchant Core",
    "point of sale",
    "inventory management",
    "credit ledger",
    "business management",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Merchant Core — Business Management Made Easy",
    description:
      "Track sales, expenses, inventory, customers, and business records — all in one secure platform.",
    siteName: "Merchant Core",
  },
  twitter: {
    card: "summary",
    title: "Merchant Core — Business Management Made Easy",
    description:
      "Track sales, expenses, inventory, customers, and business records — all in one secure platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        </body>
    </html>
  );
}
