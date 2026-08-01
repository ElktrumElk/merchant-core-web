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

const baseUrl = new URL("https://merchant-core-bay.vercel.app");

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Merchant Core",
  url: baseUrl.toString(),
  description:
    "Track sales, expenses, inventory, customers, and business records — all in one secure platform.",
  author: [
    {
      "@type": "Person",
      name: "Elkanah Cole",
      url: "https://github.com/ElktrumElk",
      sameAs: ["https://github.com/ElktrumElk"],
    },
    {
      "@type": "Person",
      name: "Favour Macurlay",
      url: "https://github.com/favmaclegend-ops",
      image: "https://avatars.githubusercontent.com/u/190496474?v=4",
      sameAs: ["https://github.com/favmaclegend-ops"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "Merchant Core — Business Management Made Easy",
    template: "%s | Merchant Core",
  },
  description:
    "Get track of your business by keeping record of what you sell, what you buy, and how many debtors are overdue with easy revenue calcution and much more.",
  applicationName: "Merchant Core",
  authors: [
    { name: "Elkanah Cole", url: "https://github.com/ElktrumElk" },
    { name: "Favour Macurlay", url: "https://github.com/favmaclegend-ops" },
  ],
  generator: "Next.js",
  keywords: [
    "Merchant Core",
    "point of sale",
    "POS",
    "inventory management",
    "credit ledger",
    "business management",
    "sales tracking",
    "expense tracking",
    "small business software",
    "free inventory app",
    "currency"
  ],
  creator: "Elkanah Cole & Favour Macurlay",
  publisher: "Merchant Core",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://merchant-core-bay.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Merchant Core — Business Management Made Easy",
    description:
      "Track sales, expenses, inventory, customers, and business records — all in one secure platform.",
    siteName: "Merchant Core",
    images: [
      {
        url: "/merchant-core-dark.png",
        width: 1200,
        height: 630,
        alt: "Merchant Core — Business Management Made Easy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Merchant Core — Business Management Made Easy",
    description:
      "Track sales, expenses, inventory, customers, and business records — all in one secure platform.",
    images: ["/merchant-core-dark.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        </body>
    </html>
  );
}
