"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { useCotiza } from "@/components/cotiza/CotizaProvider";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { setOpen: setCotiza } = useCotiza();

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-word", {
        yPercent: 110,
        rotate: 2,
        duration: 1.1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".contact-meta", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-ink text-paper pt-28 md:pt-40 pb-10"
    >
      <div className="container-page">
        <div className="contact-meta flex items-center justify-between">
          <span className="label text-paper/50">[ 05 ] Trabajemos</span>
          <span className="label text-paper/40 hidden md:inline">
            Aceptamos 4 proyectos por trimestre
          </span>
        </div>

        <h2
          className="display mt-12 md:mt-16 text-paper"
          style={{
            fontSize: "clamp(3rem, 10vw, 9.5rem)",
            lineHeight: "0.88",
          }}
        >
          <span className="block overflow-hidden">
            <span className="contact-word inline-block">Cuéntanos</span>
          </span>
          <span className="block overflow-hidden">
            <span className="contact-word inline-block">qué quieres</span>
          </span>
          <span className="block overflow-hidden">
            <span className="contact-word inline-block">
              <em className="not-italic text-signal">operar.</em>
            </span>
          </span>
        </h2>

        <div className="contact-meta mt-16 md:mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <div className="label text-paper/40 mb-3">
              Abre el formulario en 1 click
            </div>
            <MagneticButton
              onClick={() => setCotiza(true)}
              ariaLabel="Abrir formulario de cotización"
              className="display text-paper hover:text-signal transition-colors leading-tight"
            >
              <span
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
                className="inline-flex items-center gap-3 md:gap-6"
              >
                Cotiza tu proyecto
                <span className="text-signal">→</span>
              </span>
            </MagneticButton>
            <p className="mt-6 max-w-md text-paper/50 text-sm md:text-base tracking-tight leading-snug">
              Toda la comunicación inicial pasa por el formulario. Te
              respondemos en menos de 48h al correo que nos dejes.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-8 md:gap-10 md:pt-6">
            <div>
              <div className="label text-paper/40">Estudio</div>
              <div className="mt-2 text-lg md:text-xl tracking-tight">
                Guatemala · San José
              </div>
            </div>
            <div>
              <div className="label text-paper/40">Síguenos</div>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-lg md:text-xl tracking-tight">
                <a
                  href="#"
                  className="hover:text-signal transition-colors"
                  data-cursor="hover"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 md:mt-40">
        <Marquee
          items={["operate.", "compose.", "measure."]}
          className="border-y border-paper/15 py-6 text-paper"
          itemClassName="display text-3xl md:text-5xl"
          separator={<span className="text-signal mx-6 md:mx-10">●</span>}
        />
      </div>

      <div className="container-page mt-10 flex flex-wrap items-center justify-between gap-2 label text-paper/40">
        <span>© Opera Studio 2026 · Todos los derechos reservados</span>
        <span>Hecho con criterio desde Guatemala · San José</span>
      </div>
    </section>
  );
}
