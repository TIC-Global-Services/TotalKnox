"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Shop", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Training", href: "#" },
  { label: "Our Story", href: "#" },
  { label: "Contact", href: "#" },
];

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

export default function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const text = tone === "light" ? "text-white" : "text-black";
  const sub = tone === "light" ? "text-white/70" : "text-black/60";

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${text}`}>
      <div className="w-full px-6 md:px-10 flex h-20 items-center justify-between md:h-24">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#" className="flex items-center gap-2 select-none">
          <Image
            src="/shared/nav_logo.webp"
            alt="TotalKnox"
            width={300}
            height={100}
            priority
            className={tone === "light" ? "brightness-0 invert" : ""}
          />
        </a>

        <div className="flex items-center gap-5 md:gap-6">
          <button aria-label="Account" className="hover:opacity-80">
            <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          </button>
          <button aria-label="Notifications" className="hover:opacity-80 relative">
            <Icon d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-crimson" />
          </button>
          <button aria-label="Search" className="hover:opacity-80">
            <Icon d="M21 21l-4.3-4.3M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
          </button>
          <button aria-label="Cart" className="hover:opacity-80">
            <Icon d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/95 text-white"
          onClick={() => setOpen(false)}
        >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 flex h-20 items-center justify-between md:h-24">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              Close
            </button>
          </div>
          <nav className="mx-auto w-full max-w-[1400px] px-6 md:px-10 flex flex-col gap-6 pt-12 md:gap-10">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-display text-5xl uppercase leading-none tracking-tightest md:text-7xl"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 absolute bottom-10 left-0 right-0 flex justify-between text-[11px] uppercase tracking-[0.22em] ${sub}`}>
            <span>© 2026 Totalknox</span>
            <span>Driven by nolimits</span>
          </div>
        </div>
      )}
    </header>
  );
}
