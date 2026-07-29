"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useWordReveal } from "@/hooks/useWordReveal";

const items = [
  {
    label: "Apex Pro",
    sub: "Fight Gloves",
    image: "/home/signature_selections/apex_pro.webp",
  },
  {
    label: "Core",
    sub: "Hand Wraps",
    image: "/shared/we_create2.webp",
  },
  {
    label: "Phantom",
    sub: "Focus Mitts",
    image: "/home/signature_selections/phantom_focus.webp",
  },
];

function SelectionCard({
  label,
  sub,
  image,
}: {
  label: string;
  sub: string;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { yPercent: -12 });

  return (
    <a
      href="#"
      className="group relative flex aspect-[4/2.5] overflow-hidden rounded-2xl bg-black"
    >
      <div ref={ref} className="absolute inset-0">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <p className="text-xl font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="font-medium text-xl uppercase tracking-wide">
          {sub}
        </p>
      </div>
    </a>
  );
}

export default function SignatureSelections() {
  const sectionRef = useRef<HTMLElement>(null);
  const sigRef = useRef<HTMLSpanElement>(null);
  const selRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal-card]", stagger: 0.15 });
  useWordReveal(subRef);
  useScrambleText(sigRef);
  useScrambleText(selRef, { delay: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-bone py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="text-center">
          <h2 className="font-display font-semibold uppercase leading-tight tracking-tight text-2xl md:text-5xl">
            <span ref={sigRef}>SIGNATURE</span>{" "}
            <span ref={selRef} className="text-crimson">SELECTIONS</span>
          </h2>
          <p
            ref={subRef}
            className="text-lg text-black"
          >
            Gear trusted in training and competition.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div data-reveal-card key={it.label}>
              <SelectionCard
                label={it.label}
                sub={it.sub}
                image={it.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
