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

const siteDescription =
  "Merchant Core is an all-in-one business management platform for shops and growing teams — point of sale (POS), inventory, credit ledger, customer directory, marketplace, spreadsheet workspace, and organisation tools including finance, HRM, payroll, attendance, and notifications.";

const persons = [
  {
    "@type": "Person",
    name: "Elkanah Cole",
    url: "https://github.com/ElktrumElk",
    sameAs: ["https://github.com/ElktrumElk", "https://x.com/ElktrumElk"],
  },
  {
    "@type": "Person",
    name: "Favour Macurlay",
    url: "https://github.com/favmaclegend-ops",
    image: "https://avatars.githubusercontent.com/u/190496474?v=4",
    sameAs: ["https://github.com/favmaclegend-ops"],
  },
];

const featureList = [
  "Point of Sale (POS)",
  "Inventory Management",
  "Credit Ledger",
  "Customer Directory",
  "Marketplace",
  "Billboard Ads",
  "Spreadsheet Workspace",
  "Organisation Workspace",
  "Finance & Accounting",
  "HRM & Payroll",
  "Attendance Tracking",
  "Notifications & Alerts",
  "Calculator",
  "Security",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://merchant-core-bay.vercel.app/#website",
      name: "Merchant Core",
      url: baseUrl.toString(),
      description: siteDescription,
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      name: "Merchant Core",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteDescription,
      url: baseUrl.toString(),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start — no subscription required.",
      },
      featureList,
      author: persons,
    },
    {
      "@type": "Organization",
      name: "Merchant Core",
      url: baseUrl.toString(),
      founder: persons,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "Merchant Core — Business Management Made Easy",
    template: "%s | Merchant Core",
  },
  description: siteDescription,
  applicationName: "Merchant Core",
  authors: [
    { name: "Elkanah Cole", url: "https://github.com/ElktrumElk" },
    { name: "Favour Macurlay", url: "https://github.com/favmaclegend-ops" },
  ],
  generator: "Next.js",
  keywords: [
    "Merchant Core",
    "business management software",
    "point of sale",
    "POS system",
    "POS software",
    "inventory management",
    "inventory software",
    "credit ledger",
    "debt tracking",
    "customer directory",
    "customer relationship management",
    "CRM",
    "marketplace",
    "billboard ads",
    "spreadsheet software",
    "excel import export",
    "organisation workspace",
    "multi-user business software",
    "team management",
    "finance and accounting software",
    "invoicing software",
    "balance sheet",
    "tax compliance",
    "HRM",
    "human resources software",
    "payroll software",
    "attendance tracking",
    "notifications and alerts",
    "sales tracking",
    "expense tracking",
    "business dashboard",
    "retail management",
    "shop management app",
    "small business software",
    "free inventory app",
    "currency converter",
    "sales tracking software",
  ],
  creator: "Elkanah Cole & Favour Macurlay",
  publisher: "Vector Runner",
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
    description: siteDescription,
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
    description: siteDescription,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}`,
          }}
        />
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
