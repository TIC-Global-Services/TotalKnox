"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { RefObject } from "react";

type RevealOptions = {
  selector?: string;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function useReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  const {
    selector = "[data-reveal]",
    y = 60,
    duration = 1.2,
    delay = 0,
    stagger = 0.1,
    start = "top 85%",
    once = false,
  } = options;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(selector);
      if (!elements.length) return;

      gsap.from(elements, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    },
    { scope: containerRef }
  );
}
