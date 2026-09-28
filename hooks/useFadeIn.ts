"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { RefObject } from "react";

type FadeInOptions = {
  selector?: string;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  trigger?: RefObject<HTMLElement | null>;
  once?: boolean;
  dependencies?: unknown[];
};

export function useFadeIn(
  targetRef: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
) {
  const {
    selector,
    y = 28,
    duration = 1.0,
    delay = 0,
    stagger = 0.1,
    start = "top 88%",
    trigger,
    once = false,
    dependencies = [],
  } = options;

  useGSAP(
    () => {
      if (!targetRef.current) return;

      const targets = selector
        ? targetRef.current.querySelectorAll(selector)
        : targetRef.current;

      if (selector && !(targets as NodeList).length) return;

      const triggerElement = trigger?.current ?? targetRef.current;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: selector ? stagger : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerElement,
            start,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    },
    { scope: targetRef, dependencies }
  );
}
