"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const manifesto =
  "Creemos en software con criterio. Diseñamos sistemas, no pantallas. Construimos producto, no entregables. Cada decisión se sostiene en evidencia: lo que opera, compone y mide. Lo demás sobra.";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.035,
          ease: "none",
          scrollTrigger: {
            trigger: ".manifesto-text",
            start: "top 78%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

      gsap.from(".manifesto-label", {
        opacity: 0,
        x: -20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });

      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="manifesto"
      className="bg-sage text-paper py-32 md:py-48"
    >
      <div className="container-page">
        <div className="manifesto-label flex items-center justify-between">
          <span className="label text-paper/60">[ 02 ] Manifiesto</span>
          <span className="label text-paper/40 hidden md:inline">
            Tres verbos · Una práctica
          </span>
        </div>
        <p
          className="manifesto-text mt-12 md:mt-20 max-w-[26ch] text-paper"
          style={{
            fontSize: "clamp(1.75rem, 4.2vw, 3.75rem)",
            lineHeight: "1.12",
            letterSpacing: "-0.02em",
          }}
        >
          {manifesto.split(" ").map((word, i) => (
            <span
              key={i}
              className="manifesto-word inline-block mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
