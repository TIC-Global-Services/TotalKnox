"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useWordReveal } from "@/hooks/useWordReveal";

type Pillar = {
  key: string;
  label: string;
  heading: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    key: "protection",
    label: "Protection",
    heading: "Protection",
    body: "Years of design, real-world impact testing, and athlete feedback shape TotalKnox protection systems. The goal is simple: absorb force, reduce injury risk, and deliver uncompromising protection that holds up under every strike and every session.",
  },
  {
    key: "performance",
    label: "Performance",
    heading: "Performance",
    body: "Engineered for speed, agility, and output. Every cut, weight, and material is refined to move with the fighter — never against them — so performance compounds with every round, every drill, every rep.",
  },
  {
    key: "endurance",
    label: "Endurance",
    heading: "Endurance",
    body: "Built to outlast the grind. Reinforced stitching, premium leathers, and resilient foams hold form and function across thousands of sessions — the gear that stays sharp long after the work is done.",
  },
];

function PillarBody({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useWordReveal(ref);
  return (
    <p
      ref={ref}
      className="mt-6 max-w-2xl text-base md:text-2xl uppercase leading-tight tracking-tight text-white"
    >
      {text}
    </p>
  );
}

export default function PillarsTabs() {
  const [active, setActive] = useState(0);
  const p = pillars[active];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal-tabs]", stagger: 0.1 });
  useScrambleText(headingRef, { delay: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white"
    >
      <Image
        src="/about/protection.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

      <div className="w-full px-6 md:px-10 relative flex min-h-screen flex-col">
        <div className="pt-10 md:pt-14">
          <ul className="flex items-center gap-6 text-base md:text-xl md:gap-10">
            {pillars.map((it, i) => (
              <li key={it.key} data-reveal-tabs className="flex items-center gap-6 md:gap-10">
                <button
                  onClick={() => setActive(i)}
                  className={`relative pb-2 uppercase transition ${
                    i === active
                      ? "text-white after:absolute after:-bottom-px after:left-0 after:right-0 after:h-px after:bg-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pb-20 md:pb-32">
          <h3
            ref={headingRef}
            className="font-display text-2xl md:text-[2.5rem] uppercase leading-tight tracking-tight"
          >
            {p.heading}
          </h3>
          <PillarBody key={p.key} text={p.body} />
        </div>
      </div>
    </section>
  );
}
