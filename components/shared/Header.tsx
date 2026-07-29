"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { label: "Home", href: "/", preview: "/shared/preview/hero-preview.webp" },
  { label: "About", href: "/about", preview: "/shared/preview/about-preview.webp" },
  { label: "Equipments", href: "/equipments", preview: "/shared/preview/hero-preview.webp" },
  { label: "Contact", href: "/contact", preview: "/shared/preview/contact-preview.webp" },
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
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<SVGPathElement>(null);
  const bottomLineRef = useRef<SVGPathElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);

  const text = tone === "light" ? "text-white" : "text-black";
  const sub = tone === "light" ? "text-white/70" : "text-black/60";

  useGSAP(() => {
    if (!menuRef.current) return;

    if (open) {
      const tl = gsap.timeline();
      tl.to([topLineRef.current, bottomLineRef.current], {
        attr: { d: "M4 12h16" },
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(
          menuRef.current,
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.2"
        )
        .fromTo(
          navRef.current?.children || [],
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3"
        );
      gsap.set(menuRef.current, { pointerEvents: "auto" });
    } else {
      const tl = gsap.timeline();
      tl.to(navRef.current?.children || [], {
        y: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.04,
        ease: "power2.in",
      })
        .to(
          menuRef.current,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.5,
            ease: "power3.in",
          },
          "-=0.1"
        )
        .to(
          topLineRef.current,
          { attr: { d: "M4 7h16" }, duration: 0.4, ease: "power2.inOut" },
          "-=0.2"
        )
        .to(
          bottomLineRef.current,
          { attr: { d: "M4 17h16" }, duration: 0.4, ease: "power2.inOut" },
          "<"
        )
        .set(menuRef.current, { pointerEvents: "none" });
    }
  }, [open]);

  useGSAP(() => {
    if (!previewRef.current) return;
    xTo.current = gsap.quickTo(previewRef.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    yTo.current = gsap.quickTo(previewRef.current, "y", {
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!previewRef.current) return;
    if (activePreview) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [activePreview]);

  const handleNavMouseMove = (e: React.MouseEvent) => {
    if (xTo.current && yTo.current) {
      xTo.current(e.clientX + 40);
      yTo.current(e.clientY - 120);
    }
  };

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${text}`}>
      <div className="w-full px-6 md:px-10 flex h-20 items-center justify-between md:h-24">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path ref={topLineRef} d="M4 7h16" />
            <path d="M4 12h16" />
            <path ref={bottomLineRef} d="M4 17h16" />
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

      <div
        ref={menuRef}
        className="fixed inset-0 z-50 bg-black/95 text-white"
        style={{ clipPath: "inset(0 0 100% 0)", pointerEvents: "none" }}
      >
        <div className="w-full px-6 md:px-10 flex h-20 items-center justify-between md:h-24">
          <span className="text-xs font-semibold uppercase tracking-[0.22em]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-xs font-semibold uppercase tracking-[0.22em] cursor-pointer"
          >
            Close
          </button>
        </div>
        <nav
          ref={navRef}
          onMouseMove={handleNavMouseMove}
          className="w-full px-6 md:px-10 flex flex-col gap-6 pt-12 md:gap-10"
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setActivePreview(l.label)}
              onMouseLeave={() => setActivePreview(null)}
              onClick={() => setOpen(false)}
              className="font-display text-5xl uppercase leading-none tracking-tightest md:text-7xl cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div
          className={`w-full px-6 md:px-10 absolute bottom-10 left-0 right-0 flex justify-between text-xs uppercase tracking-[0.22em] ${sub}`}
        >
          <span>© 2026 Totalknox</span>
          <span>Driven by nolimits</span>
        </div>
      </div>

      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[180px] w-[300px] overflow-hidden rounded-2xl opacity-0"
        style={{ willChange: "transform" }}
      >
        {navLinks.map((l) => (
          <Image
            key={l.label}
            src={l.preview}
            alt=""
            fill
            sizes="300px"
            className={`object-cover transition-opacity duration-300 ${
              activePreview === l.label ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
