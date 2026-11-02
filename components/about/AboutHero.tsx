"use client";

import { useRef } from "react";
import Header from "@/components/shared/Header";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function AboutHero() {
  const createRef = useRef<HTMLHeadingElement>(null);
  const practicalRef = useRef<HTMLSpanElement>(null);
  const apparelRef = useRef<HTMLSpanElement>(null);

  useFadeIn(createRef, { delay: 0.15 });
  useFadeIn(practicalRef, { delay: 0.35 });
  useFadeIn(apparelRef, { delay: 0.55 });

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        // poster="/about/about-hero.webp"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/banner_video.mp4" type="video/mp4" />
      </video>
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
            <span ref={practicalRef} className="inline-block">Practical and</span>
            <br />
            <span ref={apparelRef} className="inline-block">Functional Apparel.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
