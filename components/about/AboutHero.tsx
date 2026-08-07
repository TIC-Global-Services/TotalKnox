"use client";

import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/shared/Header";
import { useScrambleText } from "@/hooks/useScrambleText";

export default function AboutHero() {
  const createRef = useRef<HTMLHeadingElement>(null);
  const practicalRef = useRef<HTMLHeadingElement>(null);
  const apparelRef = useRef<HTMLHeadingElement>(null);

  useScrambleText(createRef, { delay: 0.3 });
  useScrambleText(practicalRef, { delay: 0.7 });
  useScrambleText(apparelRef, { delay: 1.0 });

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white">
      <Image
        src="/about/about-hero.webp"
        alt="Fighter in action"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <Header tone="light" />

      <div className="w-full px-6 md:px-10 relative z-10 flex h-full flex-col">
        <div className="mt-auto pb-14 md:pb-32 grid grid-cols-1 md:grid-cols-1 items-end gap-y-48 md:gap-y-6 md:gap-x-10">
          <h2
            ref={createRef}
            className="font-display text-4xl md:text-[4.375rem] uppercase tracking-tight text-white"
          >
            We create
          </h2>
          <h2 className="font-display text-4xl md:text-[4.375rem] uppercase leading-tight tracking-tight text-white text-right md:text-right">
            <span ref={practicalRef}>Practical and</span>
            <br />
            <span ref={apparelRef}>Functional Apparel.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
