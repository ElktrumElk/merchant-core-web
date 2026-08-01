import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import path from "node:path";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import Header from "../app/components/header/Header";
import Home from "../app/page";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("in-page hash navigation", () => {
  const renderApp = () =>
    render(
      <>
        <Header />
        <Home />
      </>
    );

  it("every header nav link points to a section that exists on the page", () => {
    renderApp();

    const hashLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith("#"));

    expect(hashLinks.length).toBeGreaterThan(0);

    for (const link of hashLinks) {
      const id = link.getAttribute("href")!.slice(1);
      expect(
        document.getElementById(id),
        `missing target section with id "${id}" for link ${link.getAttribute("href")}`
      ).not.toBeNull();
    }
  });

  it("global CSS enables smooth scrolling", () => {
    const css = readFileSync(
      path.resolve(process.cwd(), "app/globals.css"),
      "utf8"
    );
    expect(css).toMatch(/scroll-behavior\s*:\s*smooth/);
  });

  it("clicking a nav link smooth-scrolls to its target section", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    renderApp();

    fireEvent.click(screen.getByRole("link", { name: "Solution" }));

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(scrollIntoView.mock.calls[0][0]).toEqual(
      expect.objectContaining({ behavior: "smooth" })
    );
  });
});
