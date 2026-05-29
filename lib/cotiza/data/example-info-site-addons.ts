import type { CotizaData } from "../types";

/**
 * Ejemplo de cotización con add-ons.
 *
 * Caso de uso: sitio informativo simple + dos servicios opcionales
 * (coordinación de citas y pagos online). Cliente decide cuáles activa
 * antes del kickoff. Cada add-on se cotiza aparte del total base.
 *
 * Sirve como plantilla para cualquier coti tipo "sitio sencillo + extras":
 * coaches, clínicas, consultores, abogados, freelancers de servicios.
 */
export const infoSiteAddonsCotiza: CotizaData = {
  slug: "2026-002-norte-coaching-7b3pa",
  number: "2026-002",
  date: "28 mayo 2026",
  validUntil: "27 junio 2026",

  client: {
    name: "Norte Coaching",
    attention: "Andrés Vega",
    location: "Ciudad de Guatemala",
    email: "andres@nortecoaching.gt",
  },

  project: {
    title: "Sitio informativo + presencia digital",
    brief:
      "Andrés viene haciendo coaching ejecutivo desde hace 4 años y opera mayormente por referido. Ahora quiere una superficie web que cuente quién es, qué método usa y muestre testimonios de clientes anteriores, para que cuando alguien lo busca después de oír su nombre, tenga algo serio que ver. La base es un sitio simple de 5 secciones. Encima de eso ofrecemos dos add-ons opcionales: agendar citas directo desde el sitio, y cobrar el depósito de la primera sesión online — ambos servicios que le ahorran trabajo administrativo si los activa.",
  },

  scope: [
    {
      pillar: "operate",
      headline: "Sitio Next.js · 5 secciones",
      items: [
        "Hero · Sobre · Método · Testimonios · Contacto",
        "CMS ligero (Sanity free tier) para que Andrés edite copy y testimonios sin tocar código",
        "Deploy en Vercel + dominio configurado",
        "Optimización Core Web Vitals + accesibilidad básica AA",
      ],
      amount: 600,
    },
    {
      pillar: "compose",
      headline: "Identidad ligera + dirección de arte",
      items: [
        "Type system + paleta · documento de 1 página",
        "Dirección de fotografía (mood, qué pedirle al fotógrafo)",
        "Templates Instagram (3): post, story, carrusel",
      ],
      amount: 300,
    },
    {
      pillar: "measure",
      headline: "Tracking básico",
      items: [
        "GA4 + meta tags Open Graph",
        "Goal tracking en formulario de contacto",
      ],
      amount: 100,
    },
  ],

  addons: [
    {
      id: "citas",
      pillar: "compose",
      title: "Coordinación de citas",
      description:
        "Integramos Cal.com (gratis hasta 1 usuario) con tu calendar de Google. El widget queda embebido en el sitio con la tipografía y colores de la marca — no parece widget de terceros. Confirmación automática + recordatorio 24h antes. Te ahorras la ida y vuelta de email para coordinar agenda.",
      items: [
        "Setup Cal.com + sync con tu Google Calendar",
        "Embed branded en sección Contacto del sitio",
        "Email de confirmación + recordatorio 24h antes",
        "Reglas de disponibilidad (días/horas que decidas)",
      ],
      amount: 400,
    },
    {
      id: "pagos",
      pillar: "operate",
      title: "Pagos online",
      description:
        "Stripe integrado para cobrar el depósito de la primera sesión (o el pago completo, como decidas) directo desde el sitio. Cliente paga al confirmar la cita y queda registrado. Saca de la mesa el tema del pago antes de la sesión y reduce no-shows.",
      items: [
        "Cuenta Stripe configurada con tu cuenta bancaria (GTQ y USD)",
        "Flujo de checkout integrado con el booking de citas",
        "Webhook que marca la cita como 'pagada' automáticamente",
        "Dashboard simple para ver pagos recibidos",
        "Cobramos en USD con conversión automática a GTQ en tu cuenta",
      ],
      amount: 600,
    },
  ],

  total: {
    amount: 1000,
    currency: "USD",
    note: "Total base. No incluye licencias de terceros (Sanity, Cal.com, Stripe) que tienen tiers gratis suficientes para empezar.",
  },

  timeline:
    "Base: 2 semanas desde kickoff. Cada add-on activado suma 3-5 días.",

  payment: "50% al inicio · 50% a entrega",

  nextSteps:
    "Decidí cuáles add-ons quieres activar y respóndenos a este correo con 'vamos + activamos [los que elijas]'. Arrancamos contrato + kickoff en los próximos 5 días hábiles.",

  notes: [
    "Si activas Pagos, necesitamos que tengas cuenta bancaria empresarial habilitada para depositar (Stripe Guatemala lo requiere). Si aún no la tienes, te recomendamos hacer ese trámite en paralelo al desarrollo.",
    "Citas y Pagos pueden activarse después del lanzamiento si prefieres empezar simple. El costo no cambia, solo se mueve el calendario.",
    "Soporte post-lanzamiento: 30 días de bug fixes incluidos en la base. Si activas algún add-on, su soporte también entra en esos 30 días.",
    "Cualquier scope no listado se trata como out-of-scope. Cambios o features nuevos los cotizamos aparte.",
  ],
};
