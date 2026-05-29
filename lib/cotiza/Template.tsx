"use client";

import type { CotizaData, Pillar } from "./types";

const PILLAR_LABEL: Record<Pillar, string> = {
  operate: "Operate",
  compose: "Compose",
  measure: "Measure",
};

const PILLAR_META: Record<
  Pillar,
  { ord: string; title: string }
> = {
  operate: { ord: "[ a ]", title: "Operate" },
  compose: { ord: "[ b ]", title: "Compose" },
  measure: { ord: "[ c ]", title: "Measure" },
};

function formatAmount(amount: number, currency: string) {
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return `${currency === "USD" ? "$" : ""}${formatted}${
    currency !== "USD" ? ` ${currency}` : ` ${currency}`
  }`;
}

export function CotizaTemplate({ data }: { data: CotizaData }) {
  const sectionsByPillar = (
    ["operate", "compose", "measure"] as const
  ).flatMap((p) => data.scope.filter((s) => s.pillar === p));

  return (
    <article className="cotiza min-h-screen bg-paper text-ink">
      {/* Top bar — slim, brand wordmark + coti number */}
      <header className="cotiza-header border-b border-ink/10">
        <div className="cotiza-frame flex items-center justify-between py-5">
          <a
            href="/"
            className="display text-lg tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            operastud<span className="text-signal">.</span>io
          </a>
          <div className="flex items-center gap-6">
            <span className="label text-stone hidden sm:inline">
              Cotización · {data.number}
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              className="label text-ink hover:text-signal transition-colors no-print"
              data-cursor="hover"
            >
              [ Imprimir / PDF ]
            </button>
          </div>
        </div>
      </header>

      {/* Meta block — client + dates */}
      <section className="cotiza-frame pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <div className="label text-stone">Para</div>
            <h2 className="mt-3 display text-3xl md:text-5xl tracking-tight">
              {data.client.name}
              <span className="text-signal">.</span>
            </h2>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-base md:text-lg">
              {data.client.attention && (
                <span>
                  <span className="text-stone">Atn.</span>{" "}
                  {data.client.attention}
                </span>
              )}
              {data.client.location && (
                <span className="text-stone">{data.client.location}</span>
              )}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-4 md:pt-3">
            <div>
              <div className="label text-stone">Emitida</div>
              <div className="mt-2 text-base md:text-lg">{data.date}</div>
            </div>
            <div>
              <div className="label text-stone">Válida hasta</div>
              <div className="mt-2 text-base md:text-lg">{data.validUntil}</div>
            </div>
            <div className="hidden md:block">
              <div className="label text-stone">Referencia</div>
              <div className="mt-2 text-base md:text-lg font-mono">
                {data.number}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big title + project headline */}
      <section className="cotiza-frame pt-16 md:pt-24 pb-2">
        <span className="label text-stone">[ 01 ] Cotización</span>
        <h1
          className="display mt-5 tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
            lineHeight: "0.9",
          }}
        >
          {data.project.title}
          <span className="text-signal">.</span>
        </h1>
      </section>

      {/* Brief */}
      <section className="cotiza-frame pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <span className="label text-stone">[ 02 ] Brief</span>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p
              className="tracking-tight"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: "1.4",
              }}
            >
              {data.project.brief}
            </p>
          </div>
        </div>
      </section>

      {/* Scope — agrupado por pillar */}
      <section className="cotiza-frame pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-3">
            <span className="label text-stone">[ 03 ] Alcance</span>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-stone text-base md:text-lg tracking-tight max-w-2xl">
              Agrupado por los tres verbos del estudio. Cada bloque es un
              entregable cerrado con su monto.
            </p>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {sectionsByPillar.map((s, i) => (
            <div
              key={`${s.pillar}-${i}`}
              className="cotiza-scope-row grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-ink/15"
            >
              <div className="md:col-span-3">
                <div className="label text-stone">{PILLAR_META[s.pillar].ord}</div>
                <h3
                  className="display mt-3 tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
                >
                  {PILLAR_META[s.pillar].title}
                  <span className="text-signal">.</span>
                </h3>
              </div>

              <div className="md:col-span-6 md:col-start-5">
                {s.headline && (
                  <div
                    className="tracking-tight font-medium mb-3"
                    style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)" }}
                  >
                    {s.headline}
                  </div>
                )}
                <ul className="space-y-2">
                  {s.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-base md:text-lg leading-snug"
                    >
                      <span className="text-stone shrink-0 font-mono text-xs pt-1.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 md:col-start-11 md:text-right">
                <div className="label text-stone">Monto</div>
                <div
                  className="display mt-2 tracking-tight font-mono"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                >
                  {formatAmount(s.amount, data.total.currency)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons opcionales (si existen) — entre Alcance y Total */}
      {data.addons && data.addons.length > 0 && (
        <section className="cotiza-frame pt-16 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            <div className="md:col-span-3">
              <span className="label text-signal">[ + ] Add-ons</span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-stone text-base md:text-lg tracking-tight max-w-2xl">
                Servicios opcionales que puedes activar. Cada uno se cotiza
                aparte de la base. Decides cuáles antes de arrancar.
              </p>
            </div>
          </div>

          <div className="border-t border-signal/30">
            {data.addons.map((addon, i) => (
              <div
                key={addon.id}
                className="cotiza-scope-row grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-signal/30"
              >
                <div className="md:col-span-3">
                  <div className="label text-signal">
                    + {addon.tag || "Opcional"} · {PILLAR_LABEL[addon.pillar]}
                  </div>
                  <h3
                    className="display mt-3 tracking-tight"
                    style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)" }}
                  >
                    {addon.title}
                    <span className="text-signal">.</span>
                  </h3>
                </div>

                <div className="md:col-span-6 md:col-start-5">
                  <p
                    className="tracking-tight mb-4 text-stone"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                      lineHeight: "1.45",
                    }}
                  >
                    {addon.description}
                  </p>
                  <ul className="space-y-2">
                    {addon.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-base md:text-lg leading-snug"
                      >
                        <span className="text-stone shrink-0 font-mono text-xs pt-1.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 md:col-start-11 md:text-right">
                  <div className="label text-stone">Si lo activas</div>
                  <div
                    className="display mt-2 tracking-tight font-mono"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                  >
                    <span className="text-signal">+</span>
                    {formatAmount(addon.amount, data.total.currency)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Total + terms */}
      <section className="cotiza-frame pt-16 md:pt-20">
        <div className="bg-ink text-paper px-6 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-6">
              <div className="label text-paper/55">
                [ 04 ] {data.addons && data.addons.length > 0
                  ? "Total base"
                  : "Total"}
              </div>
              <div
                className="display mt-4 tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 9vw, 7rem)",
                  lineHeight: "0.9",
                }}
              >
                {formatAmount(data.total.amount, data.total.currency)}
                <span className="text-signal">.</span>
              </div>
              {data.total.note && (
                <div className="mt-3 label text-paper/55">
                  {data.total.note}
                </div>
              )}
            </div>
            <div className="md:col-span-5 md:col-start-8 grid grid-cols-1 gap-6 md:pt-4">
              <div>
                <div className="label text-paper/55">Timeline</div>
                <div className="mt-2 text-lg md:text-xl tracking-tight">
                  {data.timeline}
                </div>
              </div>
              <div>
                <div className="label text-paper/55">Pagos</div>
                <div className="mt-2 text-lg md:text-xl tracking-tight">
                  {data.payment}
                </div>
              </div>
            </div>
          </div>

          {/* Total con add-ons (si existen) */}
          {data.addons && data.addons.length > 0 && (
            <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-paper/15">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-5">
                  <div className="label text-paper/55">
                    Si activas los add-ons
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {data.addons.map((addon) => (
                      <li
                        key={addon.id}
                        className="flex justify-between items-baseline gap-4 text-base md:text-lg tracking-tight"
                      >
                        <span className="text-paper/75 truncate">
                          {addon.title}
                        </span>
                        <span className="font-mono shrink-0">
                          <span className="text-signal">+</span>
                          {formatAmount(addon.amount, data.total.currency)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-6 md:col-start-7 md:text-right">
                  <div className="label text-paper/55">Total con todo</div>
                  <div
                    className="display mt-3 tracking-tight"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      lineHeight: "0.95",
                    }}
                  >
                    {formatAmount(
                      data.total.amount +
                        data.addons.reduce((s, a) => s + a.amount, 0),
                      data.total.currency,
                    )}
                    <span className="text-signal">.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Next steps */}
      <section className="cotiza-frame pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <span className="label text-stone">[ 05 ] Siguiente paso</span>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p
              className="display tracking-tight max-w-3xl"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: "1.1",
                fontWeight: 600,
              }}
            >
              {data.nextSteps}
            </p>
          </div>
        </div>
      </section>

      {/* Notes (opcionales) */}
      {data.notes && data.notes.length > 0 && (
        <section className="cotiza-frame pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <span className="label text-stone">[ 06 ] Notas</span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <ul className="space-y-3 text-stone text-sm md:text-base leading-relaxed max-w-3xl">
                {data.notes.map((n, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-xs pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="cotiza-frame pt-20 md:pt-28 pb-12">
        <div className="border-t border-ink/15 pt-6 flex flex-wrap items-center justify-between gap-3 label text-stone">
          <span>Opera Studio · Guatemala · San José</span>
          <span>operastud.io</span>
        </div>
      </footer>
    </article>
  );
}
