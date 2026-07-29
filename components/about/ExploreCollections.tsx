"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

const items = [
  { label: "Boxing Collections", href: "#", active: true },
  { label: "Training Gear", href: "#", active: false },
  { label: "Hand Wraps", href: "#", active: false },
];

export default function ExploreCollections() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]", stagger: 0.12 });
  useParallax(imageRef, { yPercent: -15 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
        <div
          ref={imageRef}
          className="relative h-64 w-72 -rotate-6 lg:h-80 lg:w-96"
        >
          <Image
            src="/about/collection-icon.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 24rem, 18rem"
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full px-6 md:px-10 relative">
        <div data-reveal className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 text-xl uppercase tracking-tight text-black">
            <span className="inline-block h-2.5 w-2.5 bg-black" />
            Explore Collections
          </span>
        </div>

        <ul className="mx-auto max-w-4xl divide-y divide-black/15">
          {items.map((it) => (
            <li key={it.label} data-reveal>
              <a
                href={it.href}
                className={`flex items-center justify-center py-6 text-center font-display text-3xl uppercase leading-tight tracking-tight transition md:py-8 md:text-6xl ${
                  it.active
                    ? "text-black"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
