"use client";

import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";
import type { RefObject } from "react";

type WordRevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  delay?: number;
};

export function useWordReveal(
  ref: RefObject<HTMLElement | null>,
  options: WordRevealOptions = {}
) {
  const {
    y = 24,
    duration = 0.9,
    stagger = 0.04,
    start = "top 88%",
    delay = 0,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = new SplitText(ref.current, { type: "words" });
      const words = split.words as HTMLElement[];

      gsap.from(words, {
        y,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: ref }
  );
}
