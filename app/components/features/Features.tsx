import Image from "next/image";
import "./feature.css";

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
          <figure key={key} className={"fig"}>
            <Image src={feature.src} className={feature.pos == 'right'? "img-cnt img-flip":"img-cnt"} alt={feature.name} width={3200} height={3200}/>

            <figcaption className={feature.pos == 'right' ? 'x des-flip': 'x'}>
              <h1 className="img-title">{feature.name}</h1>
              <p>{feature.des}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
};

export default Feature;
