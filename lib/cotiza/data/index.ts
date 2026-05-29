import type { CotizaData } from "../types";
import { exampleCotiza } from "./example-acme-cafe";

/**
 * Registro de cotizaciones publicadas.
 *
 * Para crear una nueva:
 *   1. cp data/example-acme-cafe.ts data/2026-XXX-cliente-slug-RANDOM.ts
 *   2. Editas los datos del nuevo archivo
 *   3. Agregas su export aquí abajo
 *   4. git push → Vercel auto-deploy
 *   5. Mandas el link operastud.io/cotiza/{slug-completo} al cliente
 *
 * El slug debe terminar en algo random (4-6 chars) para que sea
 * impredecible — esa es nuestra forma de privacidad por ahora.
 */
export const cotizaciones: Record<string, CotizaData> = {
  [exampleCotiza.slug]: exampleCotiza,
};

export type CotizaSlug = keyof typeof cotizaciones;
