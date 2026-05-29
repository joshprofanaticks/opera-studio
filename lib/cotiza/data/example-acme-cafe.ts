import type { CotizaData } from "../types";

/**
 * Cotización de ejemplo — Acme Café.
 *
 * Sirve como plantilla. Copia este archivo, cambia los datos, importa en
 * `data/index.ts` con su nuevo slug, y queda publicada al deploy.
 */
export const exampleCotiza: CotizaData = {
  slug: "2026-001-acme-cafe-9k2m7",
  number: "2026-001",
  date: "28 mayo 2026",
  validUntil: "27 junio 2026",

  client: {
    name: "Acme Café",
    attention: "María González",
    location: "Antigua Guatemala",
    email: "maria@acmecafe.co",
  },

  project: {
    title: "Sitio narrativo + sistema de marca",
    brief:
      "Acme Café lanza una nueva línea de cafés de especialidad y quiere un sitio que no se sienta como otro e-commerce más. La conversación inicial dejó claro que el producto está, lo que falta es una superficie que cuente la historia del origen, los productores y el método. Proponemos un sitio narrativo single-page con sección de tienda integrada, sistema de marca propio que se sostenga en empaque y digital, y tracking básico para entender qué historias convierten.",
  },

  scope: [
    {
      pillar: "operate",
      headline: "Plataforma narrativa + tienda integrada",
      items: [
        "Sitio Next.js 16 con CMS headless (Sanity)",
        "Hasta 6 secciones narrativas + página de tienda con 1 colección",
        "Integración Shopify Storefront API para inventario y checkout",
        "Optimización Core Web Vitals + accesibilidad AA",
        "Deploy en Vercel + dominio configurado",
      ],
      amount: 1800,
    },
    {
      pillar: "compose",
      headline: "Sistema de marca digital",
      items: [
        "Identidad: wordmark, paleta extendida, type system",
        "Sistema de tokens (color, type, spacing) en JSON + Tailwind",
        "Dirección de arte por sección (mood, fotografía, motion)",
        "Templates para Instagram (post, story, carrusel) — 6 plantillas",
      ],
      amount: 1200,
    },
    {
      pillar: "measure",
      headline: "Tracking + dashboard básico",
      items: [
        "GA4 + event tracking custom (scroll depth, story-views, add-to-cart)",
        "Dashboard interno con los 3 KPIs que acordemos",
        "Reporte mensual los primeros 2 meses post-lanzamiento",
      ],
      amount: 500,
    },
  ],

  total: {
    amount: 3500,
    currency: "USD",
    note: "Precio cerrado. No incluye IVA local ni licencias de terceros (Sanity, Shopify).",
  },

  timeline: "5 semanas desde kickoff hasta lanzamiento",

  payment: "50% al inicio · 50% a entrega antes del lanzamiento",

  nextSteps:
    "Si esto te hace sentido, respóndenos a este correo con un 'vamos' y arrancamos contrato + kickoff en los próximos 5 días hábiles.",

  notes: [
    "Cualquier scope no listado arriba se trata como out-of-scope. Si surgen nuevos requisitos en el camino, los cotizamos aparte y los sumamos al cierre.",
    "El cliente entrega: copy aprobado, fotografía base, accesos a Shopify y GA4. Sin esto, las semanas corren a partir de la entrega de cada bloque.",
    "Licencias de Sanity (free tier alcanza para empezar) y Shopify (a cargo del cliente) no se incluyen en este monto.",
    "Soporte post-lanzamiento: 30 días de bug fixes incluidos. Después se trabaja por retainer separado.",
  ],
};
