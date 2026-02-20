"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#over-ons", label: "Over ons" },
  { href: "#diensten", label: "Diensten" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12 lg:px-16"
        aria-label="Hoofdnavigatie"
      >
        <a
          href="#main-content"
          className="text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Barbershop Heiloo
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex" role="list">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 p-2 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul
          className="flex flex-col gap-0 border-t border-neutral-800 bg-black/90 px-6 py-4 backdrop-blur-md"
          role="list"
        >
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-3 text-sm font-medium text-neutral-300 transition-colors hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
