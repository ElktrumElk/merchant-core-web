import Link from "next/link";
import { Play, Download, Zap } from "elk-components/icons";
import Reveal from "../animations/Reveal";
import "./downloads.css";

const storeLinks = [
  {
    href: "https://merchant-core-bay.vercel.app",
    label: "Get Started",
    icon: Zap,
    top: "Start now",
    bottom: "Free forever",
    primary: true,
  },
  {
    href: "https://merchant-core-bay.vercel.app",
    label: "Google Play",
    icon: Play,
    top: "Get it on",
    bottom: "Google Play",
  },
  {
    href: "https://merchant-core-bay.vercel.app",
    label: "App Store",
    icon: Download,
    top: "Download on the",
    bottom: "App Store",
  },
];

const Downloads = () => {
  return (
    <>
      <section className="download" id="downloads">
        <Reveal whileInView={{ opacity: 1, y: 0 }} className="rev">
          <span className="badge">Merchant Core</span>
          <h1 className="gt">Get Started for Free</h1>
        </Reveal>

        <Reveal delay={0.1} whileInView={{ opacity: 1, y: 0,  }}>
          <p className="d-des">
            Ready to get your business organised and keep track of everything get
            started for free or you can download the mobile version for more
            experience
          </p>
        </Reveal>

        <div className="store-badges">
          {storeLinks.map(({ href, label, icon: Icon, top, bottom, primary }, i) => (
            <Reveal key={label} delay={i * 0.1} style={{ width: "auto" }} whileInView={{ opacity: 1, y: 0 }}>
              <Link
                href={href}
                target="_blank"
                aria-label={label}
                className={primary ? "store-badge primary" : "store-badge"}
              >
                <Icon size={28} color="currentColor" />
                <span className="store-badge-text">
                  <span className="store-badge-top">{top}</span>
                  <span className="store-badge-bottom">{bottom}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Downloads;
