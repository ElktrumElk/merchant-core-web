import "./solution.css";
import {
  ShoppingCart,
  Layers,
  Tag,
  DollarSign,
  Bell,
  Receipt,
} from "elk-components/icons";

const solutions = [
  {
    title: "Point-of-Sale Tracking",
    Icon: ShoppingCart,
    description:
      "Every sale is captured the moment it happens, so nothing slips through the cracks — cash, card, or credit.",
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
];

const Solution = () => {
  return (
    <>
      <section className="solution-section" id="solution">
        <h1 className="solution-title">Issues & Solutions</h1>

        <div className="starfield issue-card">
          <div className="is-cd-div">
            <h2>Issues arise every day</h2>
            <p>
              Issues arise every day. Outages are inevitable, but with the
              right approach, chaos isn&apos;t.
            </p>
          </div>
        </div>

        <div className="track-sol-exp">
          {solutions.map(({ title, Icon, description }, i) => (
            <div
              key={title}
              className={`sol-exp-item ${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="sol-exp-card">
                <div className="sol-exp-card-header">
                  <span className="sol-exp-card-icon">
                    <Icon size={24} color="#1a1a1a" />
                  </span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solution;
