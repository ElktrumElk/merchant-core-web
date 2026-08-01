import "./feature.css";
import Reveal from "../animations/Reveal";
import Image from "next/image";

const features = [
  {
    name: "Inventory",
    des: "Keep full records of your stock — add items, track quantities, and know exactly what is on your shelf in real time.",
    pos: 'left',
    src: '/inventory_dark.png'
  },
  {
    name: "Credit Ledger",
    des: "Keep a running record of every credit you give and who owes you, with automatic alerts when a payment passes its due date.",
    pos: 'right',
    src: '/credit-ledger_dark.png'

  },
  {
    name: "Real Time Dashboard",
    des: "Get a clear overview of your business at a glance — total revenue, sales, profit, and activity all in one place.",
    pos: 'left',
    src: '/dashboard.png'

  },
  {
    name: "Point of Sale",
    des: "Ring up sales instantly — cash, card, or credit — so every transaction is captured the moment it happens.",
    pos: 'right',
    src: '/pos_dark.png'
  },
  {
    name: "Calculator",
    des: "Make quick calculations right inside the app, so you never need to switch to a separate calculator again.",
    pos: 'left',
    src: '/calculator.png'

  },
  {
    name: "Security",
    des: "Keep your business data safe with secure access, so only the right people can view and manage your records.",
    pos: 'right',
    src: '/security.png'
  },
];

const Feature = () => {
  return (
    <>
      <section className="feature-section" id="features">
        <h1 className="solution-title">What Are The Features ?</h1>

        {features.map((feature, key) => (
          <Reveal
            key={key}
            className={"fig"}
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: feature.pos == 'right' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={feature.src} alt={feature.name} width={3500} height={3500} className={feature.pos == 'right'? "img-cnt img-flip":"img-cnt"} />

            <figcaption className={feature.pos == 'right' ? 'x des-flip': 'x'}>
              <h1 className="img-title">{feature.name}</h1>
              <p>{feature.des}</p>
            </figcaption>
          </Reveal>
        ))}
      </section>
    </>
  );
};

export default Feature;
