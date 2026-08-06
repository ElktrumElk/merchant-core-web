import "./solution.css";
import Reveal from "../animations/Reveal";
import {
  ShoppingCart,
  Layers,
  Tag,
  DollarSign,
  Bell,
  Receipt,
  Globe,
  Columns,
  Group,
  Banknote,
  ClipboardCheck,
  Calendar,
  UserCheck,
} from "elk-components/icons";

const solutions = [
  {
    title: "Point-of-Sale Tracking",
    Icon: ShoppingCart,
    description:
      "Every sale is captured the moment it happens, so nothing slips through the cracks — cash, card, or mobile.",
  },
  {
    title: "Inventory Tracking",
    Icon: Layers,
    description:
      "Know exactly what is on your shelf in real time. Restock before you run out, so a sold-out shelf never kills another sale.",
  },
  {
    title: "Product & Pricing",
    Icon: Tag,
    description:
      "Create items and products like a real shop — name, price, and stock included. Your whole catalog lives in one place.",
  },
  {
    title: "Revenue, Sales & Profit",
    Icon: DollarSign,
    description:
      "Every sale is tallied automatically into total revenue, total sales, and real profit — no calculators, no guesswork.",
  },
  {
    title: "Credits & Due-Date Alerts",
    Icon: Bell,
    description:
      "Record every credit you give and who owes you. When a payment passes its due date, you are alerted automatically.",
  },
  {
    title: "Complete Transaction Ledger",
    Icon: Receipt,
    description:
      "Every cent in and out is recorded in one trusted trail — reconcile, audit, and understand your business fully.",
  },
  {
    title: "Customer Management",
    Icon: UserCheck,
    description:
      "Keep a searchable directory of every customer with their profile, purchase history, credit limit, and loyalty tier.",
  },
  {
    title: "Marketplace & Online Storefronts",
    Icon: Globe,
    description:
      "Open your own shop, upload your products, and sell to shoppers across the marketplace — complete with cart and checkout.",
  },
  {
    title: "Spreadsheet Workspace",
    Icon: Columns,
    description:
      "An Excel-style spreadsheet with autosave, .xlsx and .csv import/export, and shareable deep links to every workbook.",
  },
  {
    title: "Organisation Workspace & Roles",
    Icon: Group,
    description:
      "Run a whole team on one account — Super Admins, Admins, managers, and staff, each with role-based access to exactly what they need.",
  },
  {
    title: "Finance, Invoices & Tax",
    Icon: Banknote,
    description:
      "Track cash flow with a general ledger, create and send invoices, manage tax obligations, and see a live balance sheet.",
  },
  {
    title: "HRM, Payroll & Attendance",
    Icon: ClipboardCheck,
    description:
      "Manage the full employee lifecycle — hire, run payroll, log time and attendance, review performance, and administer benefits.",
  },
  {
    title: "Notifications & Activity Feed",
    Icon: Calendar,
    description:
      "Every sale, payment, and action appears in a transparent activity feed — with an unread badge so nothing goes unnoticed.",
  },
];

const Solution = () => {
  return (
    <>
      <section className="solution-section" id="solution">
        <h2 className="solution-title">Issues & Solutions</h2>

        <div className="starfield issue-card">
          <Reveal whileInView={{ opacity: 1, y: 0 }}>
            <div className="is-cd-div">
              <h3>Issues arise every day</h3>
              <p>
                Issues arise every day. Outages are inevitable, but with the
                right approach, chaos isn&apos;t.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="track-sol-exp">
          {solutions.map(({ title, Icon, description }, i) => (
            <div
              key={title}
              className={`sol-exp-item ${i % 2 === 0 ? "left" : "right"}`}
            >
              <Reveal
                className="sol-exp-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="sol-exp-card-header">
                  <span className="sol-exp-card-icon">
                    <Icon size={24} color="#1a1a1a" />
                  </span>
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solution;
