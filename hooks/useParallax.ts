"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { RefObject } from "react";

type ParallaxOptions = {
  yPercent?: number;
  scale?: boolean;
};

export function useParallax(
  imageRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {}
) {
  const { yPercent = -15, scale = true } = options;

  useGSAP(
    () => {
      if (!imageRef.current) return;

      if (scale) {
        gsap.set(imageRef.current, { scale: 1.15 });
      }

      gsap.to(imageRef.current, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: imageRef }
  );
}
