"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { useWordReveal } from "@/hooks/useWordReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const andBgRef = useRef<HTMLSpanElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal]" });
  useWordReveal(descRef);

  useGSAP(
    () => {
      const play = () => {
        gsap.killTweensOf(andBgRef.current);
        gsap.fromTo(
          andBgRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      };

      ScrollTrigger.create({
        trigger: andBgRef.current,
        start: "top 85%",
        onEnter: play,
        onEnterBack: play,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black md:aspect-auto md:min-h-[760px]">
          <Image
            src="/shared/style_and_functionality2.webp"
            alt="Female boxer training with punching bags"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-left"
          />
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden px-6 py-16 text-black transition-colors duration-500 md:px-16 md:py-24 hover:text-white">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 scale-110">
            <Image
              src="/about/style_and_functionality.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div data-reveal className="relative z-10 flex justify-center">
            <span className="font-display inline-flex items-center gap-2 text-xl uppercase tracking-tight">
              <span className="inline-block h-2.5 w-2.5 bg-current" />
              Our Vision
            </span>
          </div>

          <h2 className="relative z-10 text-center font-display text-5xl md:text-[3.375rem] uppercase leading-tight tracking-tight">
            <span>Style</span>{" "}
            <span className="relative inline-block align-baseline">
              <span
                ref={andBgRef}
                className="absolute inset-0 origin-left bg-black"
              />
              <span className="relative z-10 px-3 text-white">And</span>
            </span>
            <br />
            <span>Functionality</span>
          </h2>

          <p
            ref={descRef}
            className="relative z-10 text-left text-xl uppercase leading-tight tracking-tight"
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
