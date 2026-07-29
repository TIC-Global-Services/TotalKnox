"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useWordReveal } from "@/hooks/useWordReveal";

export default function CraftedForTheFight() {
  const sectionRef = useRef<HTMLElement>(null);
  const craftedRef = useRef<HTMLSpanElement>(null);
  const fightRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]", stagger: 0.12 });
  useWordReveal(descRef);
  useScrambleText(craftedRef);
  useScrambleText(fightRef, { delay: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-bone py-16 md:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="relative aspect-[3/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/home/crafted_for_fight.webp"
              alt="Fighter silhouette"
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="font-display font-semibold uppercase leading-tight tracking-tight text-5xl md:text-[2.5rem]">
            <span ref={craftedRef} className="text-crimson">CRAFTED</span>{" "}
            <span ref={fightRef}>FOR THE FIGHT.</span>
          </h2>
          <p
            ref={descRef}
            className="mt-6 text-lg leading-tight text-black md:text-base"
          >
            Every stitch, every layer, every detail is meticulously engineered
            to absorb impact, endure the grind, and elevate your performance
            with precision and control. Built for those who demand more from
            every session. No shortcuts. No compromises. Only relentless,
            uncompromising excellence.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold uppercase tracking-[1] transition bg-black text-white hover:bg-black mt-8"
          >
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
}
