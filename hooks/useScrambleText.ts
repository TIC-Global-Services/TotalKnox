"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { RefObject } from "react";

type ScrambleOptions = {
  duration?: number;
  delay?: number;
  start?: string;
  trigger?: RefObject<HTMLElement | null>;
  chars?: string;
  speed?: number;
};

export function useScrambleText(
  ref: RefObject<HTMLElement | null>,
  options: ScrambleOptions = {}
) {
  const {
    duration = 1.4,
    delay = 0,
    start = "top 85%",
    trigger,
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%",
    speed = 0.3,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;
      const element = ref.current;
      const original = element.textContent ?? "";

      const play = () => {
        gsap.killTweensOf(element);
        gsap.to(element, {
          duration,
          delay,
          ease: "power2.out",
          scrambleText: {
            text: original,
            chars,
            speed,
            tweenLength: false,
          },
        });
      };

      ScrollTrigger.create({
        trigger: trigger?.current ?? element,
        start,
        onEnter: play,
        onEnterBack: play,
      });
    },
    { scope: ref }
  );
}
