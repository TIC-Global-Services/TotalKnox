"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { RefObject } from "react";

type WordRevealOptions = {
  y?: number;
  duration?: number;
  blur?: number;
  start?: string;
  delay?: number;
  once?: boolean;
  dependencies?: unknown[];
};

export function useWordReveal(
  ref: RefObject<HTMLElement | null>,
  options: WordRevealOptions = {}
) {
  const {
    y = 16,
    duration = 1.0,
    blur = 8,
    start = "top 88%",
    delay = 0,
    once = false,
    dependencies = [],
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    },
    { scope: ref, dependencies }
  );
}
