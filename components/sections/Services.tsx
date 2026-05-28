"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface Pillar {
  id: string;
  ord: string;
  title: string;
  lead: string;
  items: string[];
}

const pillars: Pillar[] = [
  {
    id: "operate",
    ord: "[ 03 / a ]",
    title: "Operate",
    lead: "Construimos el sistema que sostiene la marca día tras día.",
    items: [
      "Producto digital end-to-end",
      "E-commerce y plataformas de contenido",
      "Integraciones, automatización e infraestructura",
      "Mantenimiento y evolución continua",
    ],
  },
  {
    id: "compose",
    ord: "[ 03 / b ]",
    title: "Compose",
    lead: "Componemos lenguaje, sistema y superficie como una sola pieza.",
    items: [
      "Identidad y sistema de marca",
      "Design system y tokens",
      "Dirección de arte editorial",
      "Motion y narrativa visual",
    ],
  },
  {
    id: "measure",
    ord: "[ 03 / c ]",
    title: "Measure",
    lead: "Medimos. No publicamos lo que no podemos sostener con datos.",
    items: [
      "Analítica, tracking y atribución",
      "Investigación de usuarios",
      "Experimentación A/B y CRO",
      "Reportes y dashboards a medida",
    ],
  },
];

export function Services() {
  return (
    <section className="bg-paper text-ink">
      {pillars.map((p, i) => (
        <ServicePillar key={p.id} pillar={p} index={i} />
      ))}
    </section>
  );
}

function ServicePillar({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const bg = index % 2 === 0 ? "bg-paper" : "bg-paper-2";

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pillar-title", {
        yPercent: 105,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".pillar-lead", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".pillar-item", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillar-list", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      id={pillar.id}
      className={`${bg} border-t border-ink/10 py-28 md:py-40`}
    >
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="label text-stone">{pillar.ord}</div>
            <div className="mt-6 overflow-hidden">
              <h2
                className="pillar-title display text-ink inline-block whitespace-nowrap"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
              >
                {pillar.title}
                <span className="text-signal">.</span>
              </h2>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-end">
            <p
              className="pillar-lead max-w-[28ch] tracking-tight"
              style={{
                fontSize: "clamp(1.25rem, 2.1vw, 1.875rem)",
                lineHeight: "1.25",
              }}
            >
              {pillar.lead}
            </p>

            <ul className="pillar-list mt-12 border-t border-ink/15">
              {pillar.items.map((item, i) => (
                <li
                  key={item}
                  data-cursor="hover"
                  className="pillar-item group flex items-center justify-between border-b border-ink/15 py-5 md:py-6 transition-colors hover:bg-ink hover:text-paper px-2 -mx-2 cursor-pointer"
                >
                  <span className="label text-stone group-hover:text-paper/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 ml-6 md:ml-10 text-lg md:text-2xl tracking-tight">
                    {item}
                  </span>
                  <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-6px] group-hover:translate-x-0">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
