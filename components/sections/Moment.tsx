"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Moment() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".moment-image", {
        scale: 1.18,
        duration: 1.8,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".moment-caption", {
        y: 26,
        opacity: 0,
        duration: 0.95,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="container-page pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="moment-caption flex items-start justify-between">
          <span className="label text-paper/60">[ 02.5 ] En proceso</span>
          <span className="label text-paper/40 hidden md:inline">
            Studio · 2025
          </span>
        </div>
        <p
          className="moment-caption mt-10 md:mt-14 max-w-3xl tracking-tight"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
            lineHeight: "1.18",
          }}
        >
          Cada superficie es una decisión. Cada decisión, una conversación con
          el dato.{" "}
          <em className="not-italic text-signal">
            Esta es la materia con la que trabajamos.
          </em>
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2400&q=85"
          alt="Opera Studio — pieza editorial en proceso"
          fill
          sizes="100vw"
          className="moment-image object-cover"
        />
      </div>

      <div className="container-page pt-8 pb-24 md:pb-32 flex flex-wrap justify-between gap-3 label text-paper/40">
        <span>Fotografía · Opera Studio</span>
        <span>Editorial — abril 2026</span>
      </div>
    </section>
  );
}
