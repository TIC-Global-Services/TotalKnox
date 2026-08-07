"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = containerRef.current?.closest("section");
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".word-span", {
        color: "#000000",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: section,
          start: "top top",
          end: "+=80%",
          scrub: 0.5,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(".word-span", {
        color: "#000000",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const words = text.split(/(\s+)/);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <p className={className}>
        {words.map((word, i) => {
          if (word.trim() === "") {
            return <span key={i}>{word}</span>;
          }
          return (
            <span
              key={i}
              className="word-span text-black/10 inline-block"
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}
