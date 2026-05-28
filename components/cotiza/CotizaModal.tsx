"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useCotiza } from "./CotizaProvider";

const projectTypes = [
  "Producto digital",
  "Identidad / sistema de marca",
  "Medición / analytics",
  "Mixto / no estoy seguro",
];

const budgets = [
  "< $500 USD",
  "$500 – $1k USD",
  "$1k – $2k USD",
  "$2k – $5k USD",
  "$5k+ USD",
  "Conversemos",
];

const timelines = [
  "Lo antes posible",
  "1 – 2 meses",
  "3 – 6 meses",
  "6+ meses",
  "Flexible",
];

const INSTAGRAM_URL = "https://www.instagram.com/operastud.io";

export function CotizaModal() {
  const { open, setOpen } = useCotiza();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open, setOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setError(
        "Formulario no configurado todavía. Intenta de nuevo en unos minutos.",
      );
      return;
    }

    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const nombre = (formData.get("nombre") as string) || "";
    const marca = (formData.get("marca") as string) || "";
    const email = (formData.get("email") as string) || "";

    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      `Cotización Opera Studio — ${marca || nombre || "Nuevo proyecto"}`,
    );
    formData.append("from_name", `Opera Studio · ${nombre || "Sitio web"}`);
    formData.append("replyto", email);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        setError(
          data.message ||
            "No se pudo enviar la cotización. Revisa los datos e intenta de nuevo.",
        );
      }
    } catch {
      setError("Error de red. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
    }, 700);
  };

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[70] bg-ink text-paper flex flex-col transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open
          ? "[clip-path:circle(150%_at_50%_100%)]"
          : "[clip-path:circle(0%_at_50%_100%)] pointer-events-none"
      }`}
      role="dialog"
      aria-label="Cotiza tu proyecto"
    >
      {/* Header — always visible at top */}
      <div className="container-page flex items-center justify-between py-5 md:py-6 shrink-0 border-b border-paper/10">
        <span className="label text-paper/50">[ 06 ] Cotización</span>
        <button
          onClick={handleClose}
          className="label text-paper transition-colors hover:text-signal"
          data-cursor="hover"
          aria-label="Cerrar"
        >
          [ Close ]
        </button>
      </div>

      {!submitted ? (
        <>
          {/* Scrollable form area */}
          <div className="container-page flex-1 overflow-y-auto pt-8 md:pt-10 pb-8">
            <h2
              className="display max-w-[18ch]"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 5rem)",
                lineHeight: "0.92",
              }}
            >
              Comencemos
              <span className="text-signal">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 text-base md:text-lg tracking-tight leading-snug">
              Cuéntanos un poco. Te respondemos en menos de 48h con próximos
              pasos: una conversación corta o una propuesta directa, según el
              tipo de proyecto.
            </p>

            <form
              ref={formRef}
              id="cotiza-form"
              onSubmit={handleSubmit}
              className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl"
            >
              {/* Honeypot — invisible for humans, bots fill it and get filtered */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <Field label="Tu nombre" name="nombre" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Marca / empresa" name="marca" />
              <Select
                label="¿Qué quieres operar?"
                name="tipo"
                options={projectTypes}
                required
              />
              <Select
                label="Presupuesto estimado"
                name="presupuesto"
                options={budgets}
                required
              />
              <Select
                label="Timeline"
                name="timeline"
                options={timelines}
                required
              />

              <div className="md:col-span-2">
                <label className="block">
                  <span className="label text-paper/50">
                    Cuéntanos en una línea
                  </span>
                  <textarea
                    name="brief"
                    rows={4}
                    required
                    placeholder="Qué necesitas, por qué, y cómo se ve un buen resultado para ti."
                    className="mt-3 w-full bg-transparent border-b border-paper/30 focus:border-signal text-paper text-lg md:text-xl py-3 outline-none resize-none transition-colors placeholder:text-paper/30"
                  />
                </label>
              </div>

              {error && (
                <div className="md:col-span-2 border border-signal/40 bg-signal/10 px-4 py-3 text-paper text-sm md:text-base">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Sticky footer — submit button always visible */}
          <div className="container-page shrink-0 border-t border-paper/10 py-4 md:py-5 bg-ink">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
              <span className="label text-paper/40 max-w-md">
                Te respondemos por correo en menos de 48h al email que nos
                dejes arriba.
              </span>
              <button
                type="submit"
                form="cotiza-form"
                disabled={submitting}
                data-cursor="hover"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-paper/30 px-6 py-3.5 hover:bg-paper hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                <span className="label">
                  {submitting ? "Enviando…" : "Enviar cotización"}
                </span>
                <span
                  className={`text-signal transition-transform ${
                    submitting ? "animate-pulse" : "group-hover:translate-x-1"
                  }`}
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="container-page flex-1 overflow-y-auto flex flex-col justify-center py-10">
          <span className="label text-paper/50">[ 06 ] Recibido</span>
          <h2
            className="display mt-6 max-w-[18ch]"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: "0.92",
            }}
          >
            Gracias
            <span className="text-signal">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg md:text-xl tracking-tight leading-snug">
            Tu cotización llegó. Te respondemos en menos de 48h al correo que
            nos dejaste. Mientras tanto, puedes{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="text-signal underline decoration-signal/40 hover:decoration-signal underline-offset-4 transition-colors"
            >
              seguirnos en Instagram ↗
            </a>
            .
          </p>
          <div className="mt-10">
            <button
              onClick={handleClose}
              className="group inline-flex items-center gap-3 rounded-full border border-paper/30 px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
              data-cursor="hover"
            >
              <span className="label">Cerrar</span>
              <span className="text-signal group-hover:translate-x-1 transition-transform">
                ↩
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label text-paper/50">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-paper/30 focus:border-signal text-paper text-lg md:text-xl py-3 outline-none transition-colors placeholder:text-paper/30"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label text-paper/50">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-3 w-full bg-transparent border-b border-paper/30 focus:border-signal text-paper text-lg md:text-xl py-3 outline-none transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='%23ff4a1f'><path d='M2 4l4 4 4-4'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "0.875rem",
          paddingRight: "1.75rem",
        }}
      >
        <option value="" disabled className="bg-ink text-paper/50">
          Selecciona —
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink text-paper">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
