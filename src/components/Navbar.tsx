"use client";

import React from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero", mobileOnly: false },
  { label: "About", href: "#about", mobileOnly: false },
  { label: "Experience", href: "#experience", mobileOnly: false },
  { label: "Projects", href: "#projects", mobileOnly: false },
  { label: "Skills", href: "#skills", mobileOnly: false },
  { label: "Contact", href: "#contact", mobileOnly: true },
];

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className="glass-panel max-w-full overflow-x-auto rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-stone-800 shadow-md no-scrollbar border border-amber-300/40"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm transition-colors whitespace-nowrap ${
              item.mobileOnly ? "sm:hidden" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
