// ─── Experiencia Laboral ──────────────────────────────────────────────────────
// Para agregar una experiencia: añade un objeto al array.

export interface ExperienceItem {
  role:     { es: string; en: string };
  company:  string;
  type:     { es: string; en: string };
  period:   { es: string; en: string };
  duration: { es: string; en: string };
  location: { es: string; en: string };
  bullets:  { es: string; en: string }[];
  tags:     string[];
}

export const experience: ExperienceItem[] = [
  {
    role:     { es: "Desarrollador Odoo Junior Fullstack", en: "Junior Fullstack Odoo Developer" },
    company:  "Mobilize / Odoo Official Partner",
    type:     { es: "Jornada completa", en: "Full-time" },
    period:   { es: "ago. 2026 – actualidad", en: "Aug 2026 – Present" },
    duration: { es: "3 meses", en: "3 months" },
    location: {
      es: "Maipú, Región Metropolitana de Santiago, Chile · Presencial",
      en: "Maipú, Santiago Metropolitan Region, Chile · On-site",
    },
    bullets: [
      {
        es: "Desarrollo de módulos personalizados en Odoo 17, 18 y 19: modelos y ORM en Python, vistas XML/QWeb y componentes OWL.",
        en: "Custom module development across Odoo 17, 18 and 19: Python models and ORM, XML/QWeb views and OWL components.",
      },
      {
        es: "Integraciones entre Odoo y sistemas externos, ajustando flujos de datos entre plataformas.",
        en: "Integrations between Odoo and external systems, aligning data flows across platforms.",
      },
      {
        es: "QA de los desarrollos antes de entrega y pasos a producción de módulos personalizados.",
        en: "QA of the developments before delivery and production releases of custom modules.",
      },
      {
        es: "Evolución y optimización de soluciones existentes, además de nuevas funcionalidades para los retos de negocio de los clientes.",
        en: "Evolution and optimization of existing solutions, plus new features for clients' business challenges.",
      },
    ],
    tags: ["Odoo 17/18/19", "Python", "ORM", "XML", "QWeb", "OWL", "PostgreSQL", "Git", "Integraciones", "QA"],
  },
  {
    role:     { es: "Asistente Técnico", en: "Technical Assistant" },
    company:  "Entel Connect Center",
    type:     { es: "Jornada parcial", en: "Part-time" },
    period:   { es: "sept. 2024 – mar. 2026", en: "Sep 2024 – Mar 2026" },
    duration: { es: "1 año 7 meses", en: "1 year 7 months" },
    location: { es: "Chile · Remoto", en: "Chile · Remote" },
    bullets: [
      {
        es: "Atención y resolución de incidencias técnicas para clientes de servicios empresariales.",
        en: "Handling and resolving technical incidents for enterprise service clients.",
      },
      {
        es: "Diagnóstico inicial y escalamiento de problemas técnicos a niveles especializados.",
        en: "Initial diagnosis and escalation of technical issues to specialized support levels.",
      },
      {
        es: "Registro y seguimiento de tickets en sistemas de soporte.",
        en: "Logging and tracking tickets in support management systems.",
      },
      {
        es: "Comunicación directa con usuarios para resolución de problemas y continuidad operativa.",
        en: "Direct communication with users for issue resolution and operational continuity.",
      },
    ],
    tags: ["Soporte técnico", "Resolución de problemas", "Atención a usuarios", "Gestión de tickets"],
  },
];
