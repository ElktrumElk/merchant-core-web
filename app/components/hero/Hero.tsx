import Image from "next/image";
import "./hero.css";
import Link from "next/link";
import { platforms } from "./Platforms";
import Reveal from "../animations/Reveal";

const Hero = () => {
  return (
    <>
      <section className="hero-section starfield" id="home">
        <div className="slogan-wrapper">
          <Reveal animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120, damping: 16 }}>
            <h1 className="title">
              Business <br /> Management Made Easy
            </h1>
          </Reveal>

          <Reveal delay={0.15} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120, damping: 16 }}>
            <p className="description">
              Everything you need to run a shop or growing business — point of
              sale, inventory, credit ledger, customer directory, marketplace,
              spreadsheet workspace, and team tools like finance, HR &amp;
              payroll — all in one secure platform.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="button-cnt" animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120, damping: 16 }}>
            <Link className="click button" href={'https://merchant-core-bay.vercel.app'} target="_blank">
              <span>Get Started</span>  
            </Link>

            <button className="click">
              <span>Watch Demo</span>
            </button>
          </Reveal>


          <Reveal delay={0.45} className="merchant-core-img-cnt" style={{ width: "100%", height: "auto" }} initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 90, damping: 18 }}>
            <Image
              src={"/merchant-core-dark.png"}
              alt="Merchant Core dashboard preview showing revenue, sales, and inventory at a glance"
              className="mer-img"
              width={"3400"}
              height={"3400"}
            />
          </Reveal>
        </div>
        <div className="section-divider">
            <div className="marquee-track">
                {[...platforms, ...platforms].map(({ name, Icon, color }, i) => (
                    <span key={`${name}-${i}`} className="platform-item" style={{ color }} aria-hidden={i >= platforms.length}>
                        <Icon width={30} height={30} aria-label={name} />
                        <span>{name}</span>
                    </span>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
