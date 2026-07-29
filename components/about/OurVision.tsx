"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useWordReveal } from "@/hooks/useWordReveal";

export default function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]" });
  useWordReveal(descRef);

  return (
    <section
      ref={sectionRef}
      className="bg-bone"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black md:aspect-auto md:min-h-[760px]">
          <Image
            src="/about/style-and-functionality.webp"
            alt="Female boxer training with punching bags"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-between px-6 py-16 text-ink md:px-16 md:py-24">
          <div data-reveal className="flex justify-center">
            <span className="font-display uppercase inline-flex items-center gap-2 text-xl tracking-tight text-black">
              <span className="inline-block h-2.5 w-2.5 bg-black" />
              Our Vision
            </span>
          </div>

          <h2 className="text-center font-display text-[3.375rem] uppercase leading-tight tracking-tight">
            <span>Style</span>{" "}
            <span className="inline-block bg-black px-3 align-baseline text-bone">
              And
            </span>
            <br />
            <span>Functionality</span>
          </h2>

          <p
            ref={descRef}
            className="max-w-xl text-left text-xl uppercase leading-tight tracking-tight text-black"
          >
            We design gear built for peak performance with a clean, modern
            edge. The brand was created to bridge the gap between performance
            wear and everyday use, delivering versatile pieces ready for any
            environment.
          </p>
        </div>
      </div>
    </section>
  );
}
