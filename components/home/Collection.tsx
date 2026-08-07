"use client";

import { useRef, useState, useEffect } from "react";
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeRef = useRef(active);
  activeRef.current = active;

  useReveal(sectionRef, { selector: "[data-reveal-card]", stagger: 0.12 });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const firstSlide = cardRefs.current[1];
      if (!firstSlide) return;
      const cardWidth = firstSlide.offsetWidth;
      const gap =
        parseFloat(getComputedStyle(slider).columnGap) ||
        parseFloat(getComputedStyle(slider).gap) ||
        0;
      const newActive = Math.round(slider.scrollLeft / (cardWidth + gap));
      if (
        newActive !== activeRef.current &&
        newActive >= 0 &&
        newActive < slides.length
      ) {
        setActive(newActive);
      }
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const card = cardRefs.current[index + 1];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="bg-bone py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10">
        <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4">
          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 md:contents md:mx-0 md:px-0"
          >
            <a
              data-reveal-card
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              href="#"
              className="group relative flex aspect-[4/5] w-[78%] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4] md:w-auto"
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
              <div className="relative pt-24 md:pl-6">
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
                  ref={(el) => {
                    cardRefs.current[i + 1] = el;
                  }}
                  href="#"
                  onMouseEnter={() => setActive(i)}
                  className="group relative flex aspect-[4/5] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4] md:w-auto"
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
        </div>

        <div data-reveal-card className="mt-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
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
