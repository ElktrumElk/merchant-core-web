import "./about.css";
import Reveal from "../animations/Reveal";

const audience = [
  {
    title: "Small Business Owners",
    des: "Shopkeepers, retailers, and market vendors who want a simple, dependable way to run daily operations — no accounting degree required.",
  },
  {
    title: "Growing Startups",
    des: "Founders who need real-time numbers on sales, stock, and cash flow so every decision is backed by data, not guesswork.",
  },
  {
    title: "Teams & Growing Organisations",
    des: "Businesses that need more than one login — with Super Admins, Admins, HRM and Finance managers, and staff working in one shared workspace.",
  },
  {
    title: "Done With Paper & Spreadsheets",
    des: "Businesses still tracking who owes them in notebooks and memory. Merchant Core brings every record into one trusted place.",
  },
];

const reasons = [
  {
    title: "Never Lose Another Sale",
    des: "Every transaction is captured the instant it happens — cash, card, or mobile — so nothing slips through the cracks.",
  },
  {
    title: "Always Know Who Owes You",
    des: "Credits and due dates are tracked automatically, with alerts before debts go stale or turn into losses.",
  },
  {
    title: "Run a Team Without Chaos",
    des: "Role-based organisation workspaces, payroll, attendance, and a transparent activity feed keep a whole team aligned.",
  },
  {
    title: "Make Smarter Decisions",
    des: "Real revenue, profit, and stock data at your fingertips means you restock on time and plan with confidence.",
  },
];

const About = () => {
  return (
    <section className="about-section aurora" id="about">
      <Reveal whileInView={{ opacity: 1, y: 0 }}>
        <span className="badge">About Merchant Core</span>
        <h2 className="about-title">Why Merchant Core?</h2>
      </Reveal>

      <Reveal delay={0.1} whileInView={{ opacity: 1, y: 0 }}>
        <p className="about-intro">
          Merchant Core is more than a point-of-sale app. It is the one place
          where your sales, stock, credits, and records come together — replacing
          the notebook, the calculator, and the worry. Built for businesses that
          want clarity without complexity, it turns everyday chaos into a clear,
          real-time picture of what is happening in your shop.
        </p>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-card" whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="about-card-title">Who Is It For?</h3>
          <ul className="about-list">
            {audience.map((item) => (
              <li key={item.title} className="about-list-item">
                <strong>{item.title}</strong>
                <p>{item.des}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="about-card" whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="about-card-title">Why It Matters</h3>
          <ul className="about-list">
            {reasons.map((item) => (
              <li key={item.title} className="about-list-item">
                <strong>{item.title}</strong>
                <p>{item.des}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
