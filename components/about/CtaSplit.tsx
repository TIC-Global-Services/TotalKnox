"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useScrambleText } from "@/hooks/useScrambleText";

function Panel({
  eyebrow,
  heading,
  cta,
  image,
  alt,
}: {
  eyebrow: string;
  heading: string;
  cta: string;
  image: string;
  alt: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]" });
  useScrambleText(headingRef, { delay: 0.2 });

  return (
    <div
      ref={sectionRef}
      className="group relative aspect-[4/5] w-full overflow-hidden text-white md:aspect-auto md:min-h-[600px]"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-6 text-center py-10">
        <span
          data-reveal
          className="inline-flex items-center gap-2 text-xl uppercase tracking-tight text-white"
        >
          <span className="inline-block h-2.5 w-2.5 bg-white" />
          {eyebrow}
        </span>
        <h3
          ref={headingRef}
          className="font-display text-[2.5rem] uppercase tracking-tight"
        >
          {heading}
        </h3>
        <span className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold uppercase tracking-tight transition border border-white/40 bg-white/60 text-black hover:bg-white hover:scale-105 cursor-pointer">
          {cta}
        </span>
      </div>
    </div>
  );
}

export default function CtaSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <a href="#" className="block">
        <Panel
          eyebrow="Our Collection"
          heading="Get Inspired"
          cta="Discover"
          image="/shared/boxing.webp"
          alt="Fighter throwing a punch"
        />
      </a>
      <a href="#" className="block">
        <Panel
          eyebrow="We'd Love to Hear It From You"
          heading="Contact"
          cta="Contact Us"
          image="/contact/hero.webp"
          alt="Training scene"
        />
      </a>
    </section>
  );
}
