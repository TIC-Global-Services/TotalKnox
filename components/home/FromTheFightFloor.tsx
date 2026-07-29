"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useWordReveal } from "@/hooks/useWordReveal";

const articles = [
  {
    title: "The Anatomy of a\nPerfect Strike",
    image: "/home/from_the_fight_floor/the_anatomy.webp",
  },
  {
    title: "Protection\nWithout Compromise",
    image: "/home/from_the_fight_floor/protection_without_compromise.webp",
  },
  {
    title: "Choosing\nThe Right Gear",
    image: "/home/from_the_fight_floor/choosing_right_gear.webp",
  },
  {
    title: "Built Through\nRepetition",
    image: "/home/from_the_fight_floor/built_through_repetition.webp",
  },
  {
    title: "Gear That Keeps\nUp",
    image: "/home/from_the_fight_floor/gear_that_keeps.webp",
  },
  {
    title: "Training Beyond\nLimits",
    image: "/home/from_the_fight_floor/training_beyond_limits.webp",
  },
];

function ArticleCard({ title, image }: { title: string; image: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { yPercent: -12 });

  return (
    <a
      href="#"
      className="group relative flex aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[5/3]"
    >
      <div ref={ref} className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <p className="font-medium text-xl uppercase leading-tight tracking-tight md:text-2xl whitespace-pre-line">
          {title}
        </p>
      </div>
    </a>
  );
}

export default function FromTheFightFloor() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const fromRef = useRef<HTMLSpanElement>(null);
  const floorRef = useRef<HTMLSpanElement>(null);
  const sharpRef = useRef<HTMLSpanElement>(null);
  const readyRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useReveal(sectionRef, { selector: "[data-reveal-card]", stagger: 0.1 });
  useWordReveal(descRef);
  useScrambleText(fromRef);
  useScrambleText(floorRef, { delay: 0.4 });
  useScrambleText(sharpRef);
  useScrambleText(readyRef, { delay: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bone py-20 md:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/home/from_the_fight_floor/from_the_fight-BG.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="w-full px-6 md:px-10 relative">
        <h2 className="font-display font-semibold uppercase leading-tight tracking-tight text-3xl md:text-[2.125rem] lg:text-[2.5rem]">
          <span ref={fromRef} className="text-white">FROM THE FIGHT</span>{" "}
          <span ref={floorRef} className="text-crimson">FLOOR.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <div data-reveal-card key={a.title}>
              <ArticleCard title={a.title} image={a.image} />
            </div>
          ))}
        </div>
      </div>

      <div
        data-reveal-card
        className="w-full px-6 md:px-10 mt-20 md:mt-28 text-center relative"
      >
        <h2 className="font-display font-semibold uppercase leading-tight tracking-tight text-5xl md:text-5xl">
          <span ref={sharpRef} className="text-white">STAY SHARP.</span>{" "}
          <span ref={readyRef} className="text-crimson">STAY READY.</span>
        </h2>
        <p
          ref={descRef}
          className="mx-auto mt-5 max-w-3xl text-lg leading-tight text-white"
        >
          Get early access to every drop, insider gear insights, and exclusive
          releases, designed to keep you ahead, prepared, and always one step
          ahead of the game.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-2xl border border-white/30 bg-white/5 px-6 py-4 text-base uppercase tracking-[0.18em] text-white placeholder:text-white focus:border-white focus:outline-none"
          />
          <button type="submit" className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base uppercase tracking-[1] transition bg-white text-black hover:bg-white/90">
            {done ? "Subscribed" : "Stay Updated"}
          </button>
        </form>
      </div>
    </section>
  );
}
