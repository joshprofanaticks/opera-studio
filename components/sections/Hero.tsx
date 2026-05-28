"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Marquee } from "@/components/ui/Marquee";

const headline = ["Software", "para marcas", "que operan", "con criterio."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay-policy safety net: try to play immediately, retry on first
  // user interaction if Chrome's autoplay gate blocks the initial attempt.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.play().catch(() => {
        // Still blocked; will be retried by interaction handlers below.
      });
    };

    tryPlay();

    const onInteract = () => {
      tryPlay();
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        yPercent: 110,
        rotate: 2,
        duration: 1.15,
        stagger: 0.09,
        ease: "expo.out",
        delay: 0.25,
      });
      gsap.from(".hero-meta", {
        opacity: 0,
        y: 18,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 1.05,
      });
      gsap.from(".hero-scroll-cue", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 1.4,
      });
      gsap.from(".hero-bg", {
        scale: 1.08,
        opacity: 0,
        duration: 2.2,
        ease: "expo.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] bg-ink text-paper overflow-hidden"
    >
      {/* Full-bleed video background */}
      <div className="hero-bg absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/hero-reel.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light ink wash to ground typography without killing the strobes */}
        <div className="absolute inset-0 bg-ink/35" />
        {/* Top + bottom soft gradients to anchor labels & marquee */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ink/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-between pt-28 md:pt-32 pb-6">
        <div className="container-page">
          <span className="hero-meta label text-paper/55">
            [ 01 ] Opera Studio — Estudio independiente · Est. 2024
          </span>
        </div>

        <div className="container-page mt-8 md:mt-0">
          <h1
            className="display text-paper"
            style={{
              fontSize: "clamp(3.5rem, 13vw, 14rem)",
              lineHeight: "0.86",
            }}
          >
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="hero-word inline-block">
                  {i === 2 ? (
                    <>
                      que{" "}
                      <em className="not-italic text-signal">operan</em>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div className="hero-meta bg-ink/70 backdrop-blur-sm">
          <Marquee
            items={["operate.", "compose.", "measure."]}
            className="border-y border-paper/15 py-5 text-paper"
            itemClassName="display text-2xl md:text-4xl"
          />
        </div>

        <div className="hero-scroll-cue container-page mt-4 flex items-center justify-between">
          <span className="label text-paper/50">
            ↓ Desplazar para conocer el método
          </span>
          <span className="label text-paper/40 hidden md:inline">
            [ 04 secciones ]
          </span>
        </div>
      </div>
    </section>
  );
}
