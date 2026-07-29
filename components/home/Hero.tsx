"use client";

import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/shared/Header";
import { useReveal } from "@/hooks/useReveal";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useWordReveal } from "@/hooks/useWordReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const builtRef = useRef<HTMLSpanElement>(null);
  const impactRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]" });
  useWordReveal(descRef);

  useScrambleText(builtRef, { delay: 0.2 });
  useScrambleText(impactRef, { delay: 0.6 });

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white"
    >
      <Image
        src="/home/hero-home.webp"
        alt="Boxer in motion"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <Header tone="light" />

      <div className="w-full  px-6 md:px-10 relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20">
        <h1
          ref={titleRef}
          className="font-display uppercase font-bold leading-tight tracking-tight text-[3.25rem] md:text-[5rem] lg:text-[6.25rem]"
        >
          <span ref={builtRef}>BUILT FOR</span>{" "}
          <span
            ref={impactRef}
            className="text-transparent [-webkit-text-stroke:1.5px_white] md:[-webkit-text-stroke-width:2px]"
          >
            IMPACT.
          </span>
        </h1>

        <p
          ref={descRef}
          className="max-w-4xl text-base leading-tight md:text-lg"
        >
          Precision-engineered combat gear for those who demand more from every
          session — training harder, moving with sharper intent, and fighting
          with smarter precision at every step.
        </p>

        <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#collections" className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-normal uppercase tracking-tight transition border border-white/80 text-white hover:bg-white hover:text-black hover:scale-105">
            Shop Collection
          </a>
          <a href="#explore" className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base tracking-tight font-normal uppercase transition bg-black text-white hover:bg-white hover:text-black hover:scale-105">
            Explore Gear
          </a>
        </div>
      </div>
    </section>
  );
}
