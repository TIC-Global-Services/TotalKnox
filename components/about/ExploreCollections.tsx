"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    label: "Boxing Collections",
    href: "#",
    active: true,
    icon: "/about/collection-icons/gloves-icon.webp",
  },
  {
    label: "Training Gear",
    href: "#",
    active: false,
    icon: "/about/collection-icons/trainingGears-icon.webp",
  },
  {
    label: "Hand Wraps",
    href: "#",
    active: false,
    icon: "/about/collection-icons/handwraps-icon.webp",
  },
];

export default function ExploreCollections() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]", stagger: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
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
                className="group relative flex items-center justify-center py-6 text-center font-display text-3xl uppercase leading-tight tracking-tight text-black transition md:py-8 md:text-6xl"
              >
                <span>{it.label}</span>
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                  <div className="relative h-12 w-12 md:h-32 md:w-32">
                    <Image
                      src={it.icon}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
