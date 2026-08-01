"use client";

import Link from "next/link";
import { useState } from "react";
import { Close, HambuggerMenu } from "elk-components/icons";
import "./header.css";

const navLinks = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Downloads", href: "#downloads" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header glass-effect ${menuOpen ? "menu-open" : ""}`}>
      <div>
        <h1>Merchant Core</h1>
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link
          className="get-started-button"
          id="get-started"
          href="https://merchant-core-bay.vercel.app"
          target="_blank"
        >
          <span>Get Started</span>
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <Close size={24} /> : <HambuggerMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
