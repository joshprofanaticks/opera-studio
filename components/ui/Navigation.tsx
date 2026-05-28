"use client";

import { useEffect, useState } from "react";
import { useCotiza } from "@/components/cotiza/CotizaProvider";

const links = [
  { label: "Operate", href: "#operate" },
  { label: "Compose", href: "#compose" },
  { label: "Measure", href: "#measure" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { setOpen: setCotiza } = useCotiza();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="container-page flex items-center justify-between py-6">
          <a
            href="#top"
            className="display text-xl tracking-tight text-paper"
            style={{ letterSpacing: "-0.03em" }}
          >
            operastud<span className="text-signal">.</span>io
          </a>
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => setCotiza(true)}
              data-cursor="hover"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-paper/40 px-4 py-2 transition-colors hover:bg-paper hover:text-ink"
            >
              <span className="label text-paper group-hover:text-ink">
                Cotizar
              </span>
              <span className="text-signal group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="label text-paper transition-colors hover:text-signal"
              aria-label="Open menu"
            >
              [ Menu ]
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open
            ? "[clip-path:circle(150%_at_100%_0%)]"
            : "[clip-path:circle(0%_at_100%_0%)] pointer-events-none"
        }`}
      >
        <div className="container-page flex items-center justify-between py-6">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="display text-xl tracking-tight text-paper"
            style={{ letterSpacing: "-0.03em" }}
          >
            operastud<span className="text-signal">.</span>io
          </a>
          <button
            onClick={() => setOpen(false)}
            className="label text-paper transition-colors hover:text-signal"
            aria-label="Close menu"
          >
            [ Close ]
          </button>
        </div>

        <nav className="container-page mt-12 md:mt-20 flex flex-col">
          {links.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-t border-paper/15 py-4 md:py-6 transition-colors hover:text-signal"
            >
              <span className="label text-paper/40 group-hover:text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display flex-1 ml-6 md:ml-12 text-[clamp(2.5rem,9vw,8rem)] leading-[0.9]">
                {item.label}<span className="text-signal">.</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="container-page absolute inset-x-0 bottom-8 flex justify-between label text-paper/40">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setCotiza(true);
            }}
            data-cursor="hover"
            className="hover:text-signal transition-colors"
          >
            Cotiza tu proyecto →
          </button>
          <span>Guatemala · San José</span>
        </div>
      </div>
    </>
  );
}
