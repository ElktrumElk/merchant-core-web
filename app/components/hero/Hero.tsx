import Image from "next/image";
import "./hero.css";
import Link from "next/link";
import { platforms } from "./Platforms";

const Hero = () => {
  return (
    <>
      <section className="hero-section starfield" id="home">
        <div className="slogan-wrapper">
          <h1 className="title">
            Business <br /> Management Made Easy
          </h1>
          <p className="description">
            Everything you need to track sales, expenses, inventory, customers,
            and business records—all in one secure platform.
          </p>

          <div className="button-cnt">

            <Link className="click button" href={'https://merchant-core-bay.vercel.app'} target="_blank">
              <span>Get Started</span>  
            </Link>

            <button className="click">
              <span>Watch Demo</span>
            </button>
          </div>


          <div className="merchant-core-img-cnt">
            <Image
              src={"/merchant-core-dark.png"}
              alt="merchant core"
              className="mer-img"
              width={"3400"}
              height={"3400"}
            />
          </div>
        </div>
        <div className="section-divider">
            <div className="marquee-track">
                {[...platforms, ...platforms].map(({ name, Icon, color }, i) => (
                    <span key={`${name}-${i}`} className="platform-item" style={{ color }}>
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
