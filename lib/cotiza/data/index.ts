import type { CotizaData } from "../types";
import { exampleCotiza } from "./example-acme-cafe";
import { infoSiteAddonsCotiza } from "./example-info-site-addons";
import { rewirePsicologiaCotiza } from "./2026-003-rewire-psicologia-4r2vp";

/**
 * Registro de cotizaciones publicadas.
 *
 * Para crear una nueva:
 *   1. cp data/example-acme-cafe.ts data/2026-XXX-cliente-slug-RANDOM.ts
 *      — o cp example-info-site-addons.ts si tu coti tiene add-ons.
 *   2. Editas los datos del nuevo archivo
 *   3. Agregas su export aquí abajo
 *   4. git push → Vercel auto-deploy
 *   5. Mandas el link operastud.io/cotiza/{slug-completo} al cliente
 *
 * El slug debe terminar en algo random (4-6 chars) para que sea
 * impredecible — esa es nuestra forma de privacidad por ahora.
 *
 * Dos plantillas disponibles:
 *   - example-acme-cafe.ts        → coti simple, scope completo, sin add-ons
 *   - example-info-site-addons.ts → sitio base + add-ons opcionales (citas, pagos, etc.)
 */
export const cotizaciones: Record<string, CotizaData> = {
  [exampleCotiza.slug]: exampleCotiza,
  [infoSiteAddonsCotiza.slug]: infoSiteAddonsCotiza,
  [rewirePsicologiaCotiza.slug]: rewirePsicologiaCotiza,
};

export type CotizaSlug = keyof typeof cotizaciones;
