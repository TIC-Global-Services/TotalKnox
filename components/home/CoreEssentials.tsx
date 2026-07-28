"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { label: "Pro Gloves", image: "/home/core_essentials/core_essentials.webp" },
  { label: "Core Wraps", image: "/home/core_essentials/core_essentials2.webp" },
  { label: "Pro Gloves", image: "/home/signature_selections/apex_pro.webp" },
  { label: "Focus Mitts", image: "/home/signature_selections/phantom_focus.webp" },
];

export default function CoreEssentials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  const visible = [-1, 0, 1].map((o) => {
    const i = (active + o + slides.length) % slides.length;
    return { ...slides[i], index: i, offset: o };
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full px-6 md:px-10 relative">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.375em] text-crimson">Core Essentials</p>
          <h2 className="mt-4 font-display font-semibold uppercase leading-tight tracking-tight text-3xl md:text-[2.125rem]">
            THE GEAR EVERY FIGHTER STARTS WITH
            <br className="hidden md:block" /> REFINED FOR PERFORMANCE.
          </h2>
        </div>

        <div className="relative mt-14 h-[392px]">
          {visible.map((s) => {
            const isCenter = s.offset === 0;
            return (
              <div
                key={`${s.index}-${s.offset}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  width: isCenter ? "min(660px, 90vw)" : "min(420px, 50vw)",
                  height: isCenter ? "392px" : "85%",
                  zIndex: isCenter ? 30 : 10,
                  transform: `translate(calc(-50% + ${s.offset * 55}%), -50%) scale(${
                    isCenter ? 1 : 0.85
                  })`,
                  opacity: isCenter ? 1 : 0.5,
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                </div>
              </div>
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
                i === active ? "w-10 bg-crimson" : "w-6 bg-black"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
