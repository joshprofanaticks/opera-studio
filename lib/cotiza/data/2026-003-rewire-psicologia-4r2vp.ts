import type { CotizaData } from "../types";

export const rewirePsicologiaCotiza: CotizaData = {
  slug: "2026-003-rewire-psicologia-4r2vp",
  number: "2026-003",
  date: "29 mayo 2026",
  validUntil: "28 junio 2026",

  client: {
    name: "REWIRE Psicología",
    attention: "Verónica Hernández",
    email: "rewiregt@gmail.com",
  },

  project: {
    title: "Sitio web minimalista",
    brief:
      "REWIRE es la clínica de Verónica, enfocada en terapias de última generación, evaluaciones completas y tecnología de apoyo. Necesita un sitio informativo que cuente quién es, qué métodos usa y qué incluyen sus evaluaciones, con un tono visual minimalista que comunique seriedad clínica — no consultorio improvisado. Sobre esa base ofrecemos dos add-ons opcionales para ahorrar trabajo administrativo: agendar citas desde el sitio y cobrar consultas online.",
  },

  scope: [
    {
      pillar: "operate",
      headline: "Sitio web informativo · 5 secciones",
      items: [
        "Inicio · Sobre Verónica · Servicios · Evaluaciones · Contacto",
        "Diseño minimalista con tipografía y paleta acordadas",
        "Optimización mobile + desktop, carga rápida",
        "Formulario de contacto que llega directo a tu email",
        "Deploy en Vercel listo para conectar tu dominio",
      ],
      amount: 190,
    },
  ],

  addons: [
    {
      id: "citas",
      pillar: "compose",
      title: "Coordinación de citas",
      description:
        "Integramos Cal.com (tier gratis) con tu calendar de Google. El widget queda embebido en el sitio con la tipografía y colores de la marca — no parece widget de terceros. Confirmación automática + recordatorio 24h antes. Te ahorras la ida y vuelta de email para coordinar agenda.",
      items: [
        "Setup Cal.com + sync con tu Google Calendar",
        "Embed branded en sección Contacto del sitio",
        "Email de confirmación + recordatorio 24h antes",
      ],
      amount: 50,
    },
    {
      id: "pagos",
      pillar: "operate",
      title: "Pagos online",
      description:
        "Integramos un procesador de pagos para cobrar el depósito o la consulta completa directo desde el sitio. El cliente paga al confirmar la cita y queda registrado. Saca de la mesa el tema del pago antes de la sesión y reduce no-shows.",
      items: [
        "Setup del procesador de pagos con tu cuenta bancaria",
        "Flujo de checkout integrado con el booking de citas",
        "Confirmación automática que marca la cita como 'pagada'",
        "Dashboard simple para ver pagos recibidos",
      ],
      amount: 90,
    },
  ],

  total: {
    amount: 190,
    currency: "USD",
    note: "+ IVA. No incluye dominio (~$15/año a cargo del cliente).",
  },

  timeline: "15 días desde kickoff. Cada add-on activado suma 2-3 días.",

  payment: "50% al inicio · 50% a entrega",

  nextSteps:
    "¿Lista para iniciar? Cuéntanos cuándo tienes tiempo para un meet para conocer los detalles del requerimiento.",

  notes: [
    "Si activas Pagos, necesitamos que tengas una afiliación activa o personería jurídica como sociedad o contribuyente individual.",
    "Citas y Pagos pueden activarse después del lanzamiento si prefieres empezar simple. El costo no cambia, solo se mueve el calendario.",
    "Soporte post-lanzamiento: 30 días de bug fixes incluidos. Si activas algún add-on, su soporte también entra en esos 30 días.",
    "Cualquier scope no listado se trata como out-of-scope. Cambios o features nuevos los cotizamos aparte.",
  ],
};
