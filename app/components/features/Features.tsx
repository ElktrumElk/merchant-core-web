import "./feature.css";
import Reveal from "../animations/Reveal";
import Image from "next/image";

const coreFeatures = [
  {
    name: "Real-Time Dashboard",
    des: "Get a clear overview of your business at a glance — total revenue, sales, profit, low-stock alerts, and recent activity all in one place.",
    pos: "left",
    src: "/dashboard.png",
  },
  {
    name: "Point of Sale (POS)",
    des: "Ring up sales instantly — cash, card, or mobile — so every transaction is captured the moment it happens, with automatic tax and stock updates.",
    pos: "right",
    src: "/pos_dark.png",
  },
  {
    name: "Inventory Manager",
    des: "Keep full records of your stock — add items, track quantities, and know exactly what is on your shelf in real time with automatic reorder alerts.",
    pos: "left",
    src: "/inventory_dark.png",
  },
  {
    name: "Credit Ledger",
    des: "Keep a running record of every credit you give and who owes you, with automatic alerts when a payment passes its due date.",
    pos: "right",
    src: "/credit-ledger_dark.png",
  },
  {
    name: "Customer Directory",
    des: "Build a searchable directory of every customer with profiles, purchase history, credit limits, and loyalty tiers.",
    pos: "left",
    src: "/merchant-core-dark.png",
  },
  {
    name: "Calculator",
    des: "Make quick calculations right inside the app — basic arithmetic, business margin, markup, tax, and currency conversion — so you never switch apps.",
    pos: "right",
    src: "/calculator.png",
  },
  {
    name: "Security",
    des: "Keep your business data safe with secure access and role-based permissions, so only the right people can view and manage your records.",
    pos: "left",
    src: "/security.png",
  },
];

const growthFeatures = [
  {
    name: "Marketplace & Billboard Ads",
    des: "Browse shops, discover products, add to cart and check out across the marketplace — while an in-app billboard plays short video adverts for your business.",
    pos: "right",
    src: "/merchant-core-dark.png",
  },
  {
    name: "Spreadsheet Workspace",
    des: "A full Excel-style spreadsheet with workbook autosave, import/export of .xlsx and .csv files, and shareable deep links to every workbook.",
    pos: "left",
    src: "/dashboard.png",
  },
  {
    name: "Organisation Workspace",
    des: "Run a whole team on one account — Super Admins, Admins, HRM and Finance managers, and staff — each with their own role-based access.",
    pos: "right",
    src: "/merchant-core-dark.png",
  },
  {
    name: "Finance & Accounting",
    des: "Track cash flow with a general ledger, create and send invoices, manage tax obligations, and view a real-time balance sheet.",
    pos: "left",
    src: "/dashboard.png",
  },
  {
    name: "HRM & Payroll",
    des: "Manage the entire employee lifecycle — hiring, payroll runs, time and attendance, performance reviews, and benefits administration.",
    pos: "right",
    src: "/merchant-core-dark.png",
  },
  {
    name: "Notifications & Alerts",
    des: "A transparent activity feed of every sale, payment, and action — with an unread badge, per-member read state, and role-gated controls.",
    pos: "left",
    src: "/dashboard.png",
  },
];

const FeatureRow = ({ feature }: { feature: (typeof coreFeatures)[number] }) => (
  <Reveal
    className={"fig"}
    style={{ width: "100%" }}
    initial={{ opacity: 0, x: feature.pos == "right" ? 40 : -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <Image
      src={feature.src}
      alt={`${feature.name} — Merchant Core feature screenshot`}
      width={3500}
      height={3500}
      loading="lazy"
      className={feature.pos == "right" ? "img-cnt img-flip" : "img-cnt"}
    />

    <figcaption className={feature.pos == "right" ? "x des-flip" : "x"}>
      <h3 className="img-title">{feature.name}</h3>
      <p>{feature.des}</p>
    </figcaption>
  </Reveal>
);

const Feature = () => {
  return (
    <section className="feature-section" id="features">
      <h2 className="solution-title">The Complete Feature Set</h2>
      <p className="feature-intro">
        From ringing up daily sales to running payroll for an entire team,
        Merchant Core brings every tool for your business into one secure
        platform — so nothing slips through the cracks.
      </p>

      <h3 className="feature-group-title">Core Business Tools</h3>
      {coreFeatures.map((feature, key) => (
        <FeatureRow key={key} feature={feature} />
      ))}

      <h3 className="feature-group-title">Growth &amp; Organisation Features</h3>
      {growthFeatures.map((feature, key) => (
        <FeatureRow key={key} feature={feature} />
      ))}
    </section>
  );
};

export default Feature;
