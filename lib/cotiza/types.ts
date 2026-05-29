/**
 * Schema de una cotización Opera Studio.
 *
 * Modelo: por proyecto, precio fijo, agrupado por pillar (operate/compose/measure).
 * Sin contratos legales — la coti es propuesta + alcance + precio. El contrato
 * se trabaja aparte cuando el cliente acepta.
 */

export type Pillar = "operate" | "compose" | "measure";

export interface ScopeSection {
  pillar: Pillar;
  /** Headline corto que resume el bloque, ej. "Plataforma + 5 secciones" */
  headline?: string;
  /** Bullets concretos de qué incluye este bloque */
  items: string[];
  /** Monto de este bloque en la moneda definida en `total.currency` */
  amount: number;
}

export interface CotizaData {
  /** Slug en URL, debe ser único e impredecible. ej. "2026-002-acme-cafe-7a3b9" */
  slug: string;
  /** Número corto para referencia humana. ej. "2026-002" */
  number: string;
  /** Fecha de emisión en formato legible. ej. "28 mayo 2026" */
  date: string;
  /** Fecha hasta la que la coti es válida. ej. "27 junio 2026" */
  validUntil: string;

  client: {
    /** Razón social o nombre comercial */
    name: string;
    /** Persona de contacto, opcional */
    attention?: string;
    /** Ciudad/país, opcional */
    location?: string;
    /** Email del contacto, opcional (no se muestra prominente, queda como meta) */
    email?: string;
  };

  project: {
    /** Título corto del proyecto. ej. "Sitio narrativo + sistema de marca" */
    title: string;
    /** 1-3 párrafos sobre lo que el cliente pidió y lo que Opera entendió */
    brief: string;
  };

  /** Bloques de alcance por pillar. Pueden omitirse los que no aplican. */
  scope: ScopeSection[];

  total: {
    amount: number;
    /** "USD", "GTQ", etc. */
    currency: string;
    /** Notas opcionales sobre el total, ej. "IVA incluido" o "+ IVA" */
    note?: string;
  };

  /** Duración estimada del proyecto. ej. "5 semanas" */
  timeline: string;

  /** Términos de pago en una línea. ej. "50% al inicio / 50% a entrega" */
  payment: string;

  /** Instrucción concreta para el siguiente paso del cliente */
  nextSteps: string;

  /** Notas opcionales al final (exclusiones, supuestos, addendums) */
  notes?: string[];
}
