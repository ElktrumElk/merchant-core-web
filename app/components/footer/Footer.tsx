import "./footer.css";
import Reveal from "../animations/Reveal";

const REPO_URL = "https://github.com/ElktrumElk/merchant-core-web";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
);

const team = [
  {
    name: "Elkanah Cole",
    github: "https://github.com/ElktrumElk",
    x: "https://x.com/ElktrumElk",
  },
  {
    name: "Favour Macurlay",
    github: "https://github.com/favmaclegend-ops",
    x: 'https://x.com/favmaclegend'
  },
];

const navLinks = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Downloads", href: "#downloads" },
  { label: "User Guide", href: "/guides" },
  { label: "Source Code", href: REPO_URL },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Reveal className="footer-grid" style={{ width: "100%" }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="footer-brand">
            <h2>Merchant Core</h2>
            <p>Business Management Made Easy</p>
            <p className="footer-desc">
              Track sales, expenses, inventory, customers, and business records
              — all in one secure platform.
            </p>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="repo-link">
              <GitHubIcon />
              <span>github.com/ElktrumElk/merchant-core-web</span>
            </a>
          </div>

          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-team">
            <h3>Built by</h3>
            <ul>
              {team.map((member) => (
                <li key={member.name} className="team-member">
                  <span className="team-name">{member.name}</span>
                  <span className="team-links">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                      <GitHubIcon />
                    </a>
                    {member.x && (
                      <a href={member.x} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on X`}>
                        <XIcon />
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Merchant Core. All rights reserved.
          </p>
          <p>
            X (Twitter) coming soon.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
