"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Collection() {
  const [active, setActive] = useState(0);

  return (
    <section id="collections" className="bg-bone py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="#"
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4]"
          >
            <Image
              src="/home/collection/created_for.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
            <div className="relative">
              <h3 className="text-3xl uppercase leading-tight tracking-tight md:text-[2.5rem]">
                Crafted for
                <br />
                Every Combat
                <br />
                Style
              </h3>
              <span className="mt-4 inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-normal uppercase tracking-tight transition bg-white/60 text-black hover:bg-white">
                Shop Collection
              </span>
            </div>
            <div className="relative">
              
            </div>
          </a>

          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <a
                key={s.title}
                href="#"
                onMouseEnter={() => setActive(i)}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-black p-7 text-white md:aspect-[3/4]"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className={`object-cover transition duration-700 ${
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

        <div className="mt-10 flex justify-center gap-2">
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
