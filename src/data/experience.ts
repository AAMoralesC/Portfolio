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
