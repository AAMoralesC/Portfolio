import type { Project } from "../types";

// ─── Proyectos ───────────────────────────────────────────────────────────────
// Para agregar un proyecto: añade un objeto al array.
// github / demo: string con la URL, o null si aún no está disponible.

export const projects: Project[] = [
  {
    title: "Kutral",
    description:
      "Bot de Discord avanzado con arquitectura modular (Cogs). Integra un asistente de IA conversacional (Llama 3), sistema nativo de reproducción de música, mecánicas de experiencia (XP) y herramientas profesionales de moderación con persistencia de datos asíncrona mediante SQLite.",
    tags: ["Python", "discord.py", "IA", "Groq API", "SQLite", "Bot"],
    github: "https://github.com/AAMoralesC/Kutral",
    demo: null,
  },
  {
    title: "GitEz",
    description: "",
    tags: ["Python", "Typer", "Questionary", "Rich", "CLI"],
    github: "https://github.com/AAMoralesC/GitEz",
    demo: null,
  },
  {
    title: "CiberPyme",
    description:
      "Plataforma web de diagnóstico de ciberseguridad para PYMES. Incluye checklist dinámico con puntaje por categoría, análisis automático de brechas mediante OpenAI API, generación de reportes ejecutivos en PDF, autenticación y control de acceso por roles.",
    tags: ["Laravel", "PHP", "MySQL", "API REST", "OpenAI API", "Autenticación", "Roles"],
    github: "https://github.com/AAMoralesC/CiberPyme",
    demo: null,
  },
  {
    title: "Ferremas",
    description:
      "E-commerce funcional con catálogo de productos, carrito de compras y checkout. Integra una API de pasarela de pagos y la API del Banco Central para conversión de precios a USD en tiempo real.",
    tags: ["PHP", "Laravel", "MySQL", "API REST", "Pasarela de pagos"],
    github: "https://github.com/AAMoralesC/Ferremas",
    demo: null,
  },
  {
    title: "CodigoTrauma",
    description:
      "Sistema web de gestión enfocado en arquitectura limpia y separación de responsabilidades. Aplica fuertemente principios de diseño modular y el patrón MVC para asegurar que el código sea mantenible, escalable y robusto a largo plazo.",
    tags: ["TypeScript", "API REST", "Arquitectura de Software", "MVC"],
    github: "https://github.com/AAMoralesC/CodigoTrauma",
    demo: null,
  },
];

