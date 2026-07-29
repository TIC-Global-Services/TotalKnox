"use client";

import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

const slides = [
  {
    title: "Training Gear",
    image: "/home/collection/training_gear.webp",
    label: "Training Gear",
  },
  {
    title: "Boxing",
    image: "/shared/boxing.webp",
    label: "Boxing",
  },
  {
    title: "Hand Wraps",
    image: "/home/collection/hand_wraps.webp",
    label: "Hand Wraps",
  },
];

function ParallaxImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { yPercent: -10 });
  return (
    <div ref={ref} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export default function Collection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal-card]", stagger: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="bg-bone py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          <a
            data-reveal-card
            href="#"
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4]"
          >
            <div className="absolute inset-0">
              <ParallaxImage
                src="/home/collection/created_for.webp"
                alt=""
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
            <div className="relative pt-24 pl-6">
              <h3 className="text-3xl md:text-[2.5rem] uppercase leading-[1] tracking-tight ">
                Crafted
                <br />
                for Every
                <br />
                Combat
                <br />
                Style
              </h3>
              <span className="mt-4 inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-normal uppercase tracking-tight transition bg-white/60 text-black hover:bg-white hover:scale-105">
                Shop Collection
              </span>
            </div>
            <div className="relative"></div>
          </a>

          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <a
                key={s.title}
                data-reveal-card
                href="#"
                onMouseEnter={() => setActive(i)}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4]"
              >
                <ParallaxImage
                  src={s.image}
                  alt={s.title}
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
                <div
                  className={`absolute inset-0 transition-transform duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
                <div className="relative">
                  <h3 className="font-medium text-xl uppercase tracking-tight md:text-2xl">
                    {s.label}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>

        <div data-reveal-card className="mt-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-10 bg-crimson" : "w-6 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
