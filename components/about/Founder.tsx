"use client";

import { useRef } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import { useReveal } from "@/hooks/useReveal";

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef, { selector: "[data-reveal]" });

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-screen flex items-center"
    >
      <div className="w-full px-6 md:px-10 text-center">
        <div data-reveal className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 text-sm md:text-xl uppercase tracking-tight text-black">
            <span className="inline-block h-2.5 w-2.5 bg-black" />
            A Word From the Founder
          </span>
        </div>
        <TextReveal
          text="We set out to build across every apparel category, not to spread thin, but to raise the standard in each one. Our goal is simple: master every segment we enter and deliver the best we possibly can, without compromise."
          className="font-display text-base md:text-[2.5rem] uppercase leading-[1.15] tracking-tight mx-auto max-w-4xl text-black/10"
        />
        <div data-reveal className="mt-12 flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-black text-2xl font-semibold uppercase tracking-wide text-white">
            TK
          </div>
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-black">
            Founder
          </p>
        </div>
      </div>
    </section>
  );
}
