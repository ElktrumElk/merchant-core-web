"use client";

import Link from "next/link";
import { useSyncExternalStore, useState } from "react";
import { Close, HambuggerMenu, Moon, Sun } from "elk-components/icons";
import "./header.css";

const navLinks = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Downloads", href: "#downloads" },
];

let themeListeners: (() => void)[] = [];

const subscribeTheme = (listener: () => void) => {
  themeListeners.push(listener);
  return () => {
    themeListeners = themeListeners.filter((l) => l !== listener);
  };
};

const getThemeSnapshot = (): "light" | "dark" =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const emitThemeChange = () => themeListeners.forEach((l) => l());

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => "dark"
  );

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    emitThemeChange();
  };

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
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

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
