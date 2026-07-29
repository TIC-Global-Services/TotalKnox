"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReveal } from "@/hooks/useReveal";
import { useWordReveal } from "@/hooks/useWordReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeCreate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(leftCardRef.current, { y: -40 }, {
      y: 40,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(rightCardRef.current, { y: 40 }, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  useReveal(containerRef, { selector: "[data-reveal]", stagger: 0.15 });
  useWordReveal(descRef);

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div ref={containerRef} className="w-full px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span
              data-reveal
              className="inline-flex items-center gap-2 text-xl uppercase text-black -mt-1 md:-mt-2 font-display tracking-tight"
            >
              <span className="inline-block h-2.5 w-2.5 bg-black" />
              We Create
            </span>
          </div>
          <div className="md:col-span-9">
            <p
              ref={descRef}
              className="text-3xl md:text-[2.5rem] uppercase leading-[1] tracking-tight mt-10"
            >
              From concept to strike, from blueprint to battlefield-ready gear,
              this is what we stand for: the pursuit of uncompromising quality
              and complete equipment for every mission and every terrain.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
          <div
            ref={leftCardRef}
            className="overflow-hidden rounded-xl bg-black w-[320px] h-[500px] shrink-0 mt-10"
          >
            <Image
              src="/shared/we_create2.webp"
              alt="Hand wrap detail"
              width={320}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            ref={rightCardRef}
            className="overflow-hidden rounded-xl bg-black w-[320px] h-[500px] shrink-0"
          >
            <Image
              src="/about/we-create.webp"
              alt="Fighter in headgear"
              width={320}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
