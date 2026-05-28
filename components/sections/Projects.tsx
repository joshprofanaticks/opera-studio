"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { CotizaCTA } from "@/components/cotiza/CotizaCTA";

interface Project {
  name: string;
  category: string;
  year: string;
  image: string | null;
  bg?: string;
  span: string;
}

const projects: Project[] = [
  {
    name: "Fanaticks POS",
    category: "Producto SaaS · POS para eventos",
    year: "2025",
    image: "/projects/fanaticks-pos.jpg",
    span: "col-span-12 md:col-span-7",
  },
  {
    name: "Köln Editorial",
    category: "Identidad · Plataforma editorial",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1400&q=80",
    span: "col-span-12 md:col-span-5",
  },
  {
    name: "Hekto Energy",
    category: "Producto SaaS · Analytics",
    year: "2024",
    image: null,
    bg: "bg-sage",
    span: "col-span-12 md:col-span-5",
  },
  {
    name: "Vega Studio",
    category: "Identidad · Sitio narrativo",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=80",
    span: "col-span-12 md:col-span-7",
  },
  {
    name: "Insights V1",
    category: "Producto digital · Analytics para promotores",
    year: "2026",
    image: "/projects/insights-v1.jpg",
    span: "col-span-12 md:col-span-7",
  },
  {
    name: "Murmullo FM",
    category: "Producto audio · Streaming",
    year: "2023",
    image: null,
    bg: "bg-ink-2",
    span: "col-span-12 md:col-span-5",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        yPercent: 100,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".project-tile", {
        y: 60,
        opacity: 0,
        duration: 0.95,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".project-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="work"
      className="bg-paper text-ink py-28 md:py-40 border-t border-ink/10"
    >
      <div className="container-page mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="label text-stone">[ 04 ] Selected work</span>
          <div className="mt-6 overflow-hidden">
            <h2
              className="projects-heading display inline-block"
              style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
            >
              Trabajo<br />
              seleccionado<span className="text-signal">.</span>
            </h2>
          </div>
        </div>
        <p className="label text-stone md:max-w-xs md:text-right">
          Una muestra. La carpeta completa se entrega bajo conversación.
        </p>
      </div>

      <div className="project-grid container-page grid grid-cols-12 gap-3 md:gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href="#contact"
            data-cursor="hover"
            className={`project-tile ${p.span} group relative overflow-hidden aspect-[16/11] md:aspect-[4/3] transition-transform duration-500 hover:scale-[1.008]`}
          >
            {p.image ? (
              <>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/0" />
                <div className="absolute inset-0 bg-ink/15 mix-blend-multiply" />
              </>
            ) : (
              <div className={`absolute inset-0 ${p.bg}`} />
            )}

            <div className="relative z-10 h-full w-full p-6 md:p-10 flex flex-col justify-between text-paper">
              <div className="flex items-start justify-between">
                <span className="label">{p.category}</span>
                <span className="label">{p.year}</span>
              </div>

              <div className="flex items-end justify-between gap-4">
                <h3
                  className="display tracking-tight max-w-[12ch]"
                  style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)" }}
                >
                  {p.name}
                  <span className="text-signal">.</span>
                </h3>
                <span className="text-2xl md:text-4xl text-signal translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="container-page mt-16 md:mt-24 flex flex-col items-center gap-4">
        <span className="label text-stone">¿Listo para sumar el tuyo?</span>
        <CotizaCTA label="Cotiza tu proyecto" />
      </div>
    </section>
  );
}
