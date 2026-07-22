// ─── Traducciones del portfolio ──────────────────────────────────────────────
// Añade aquí todos los textos en español e inglés.

export const translations = {
  // ── Navegación ──────────────────────────────────────────────────────────────
  nav: {
    es: [
      { id: "hero",           label: "Inicio"          },
      { id: "about",          label: "Sobre mí"         },
      { id: "experience",     label: "Experiencia"      },
      { id: "skills",         label: "Habilidades"      },
      { id: "certifications", label: "Certificaciones"  },
      { id: "projects",       label: "Proyectos"        },
      { id: "contact",        label: "Contacto"         },
    ],
    en: [
      { id: "hero",           label: "Home"           },
      { id: "about",          label: "About"          },
      { id: "experience",     label: "Experience"     },
      { id: "skills",         label: "Skills"         },
      { id: "certifications", label: "Certifications" },
      { id: "projects",       label: "Projects"       },
      { id: "contact",        label: "Contact"        },
    ],
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    es: {
      subtitle: "Ingeniero en Informática · DUOC UC",
      description:
        "Desarrollo aplicaciones web con foco en el backend: APIs REST, bases de datos relacionales y autenticación de usuarios. Trabajo con Laravel, React y Python.",
      cta_projects: "Ver proyectos",
      cta_cv:       "Descargar CV",
      cta_contact:  "Contactar",
      photo_alt:    "Foto de perfil de Andrés Morales",
    },
    en: {
      subtitle: "Computer Engineering · DUOC UC",
      description:
        "I build web applications with a focus on the backend: REST APIs, relational databases, and user authentication. I work with Laravel, React, and Python.",
      cta_projects: "View projects",
      cta_cv:       "Download CV",
      cta_contact:  "Contact me",
      photo_alt:    "Profile photo of Andrés Morales",
    },
  },

  // ── About ───────────────────────────────────────────────────────────────────
  about: {
    es: {
      headline:
        "Mi objetivo es simple: escribir código funcional, que se entienda y que sea escalable.",
      bio1:
        "Soy titulado de DUOC UC en Ingeniería en Informática, con mención en Gestión de Proyectos. Durante la carrera desarrollé plataformas cubriendo backend y frontend, diseñando APIs REST, bases de datos relacionales y módulos de autenticación.",
      bio2:
        "Complemento mi perfil técnico (Laravel, React, Django, Python) con experiencia real en Soporte Técnico (Entel), lo que fortaleció mis habilidades de análisis, resolución de incidencias y comunicación técnica con usuarios.",
      sidebar_title:    "En resumen",
      edu_title:        "Formación",
      edu_body:         "Ingeniería en Informática · DUOC UC · Mención en Gestión de Proyectos",
      interest_title:   "Área de interés",
      interest_body:    "Backend, full stack, bases de datos y arquitectura de APIs.",
      availability_title: "Disponibilidad",
      availability_body:  "Inmediata. Presencial, híbrido o remoto.",
      roles_title:      "Abierto a roles como",
      roles_body:       "Desarrollador Junior, Analista de Sistemas, DBA Junior, Soporte TI con perfil técnico.",
    },
    en: {
      headline:
        "My goal is simple: write code that works, is easy to understand, and scales well.",
      bio1:
        "I hold a degree in Computer Engineering from DUOC UC, with a focus on Project Management. During my studies I built full-stack platforms, designing REST APIs, relational databases, and authentication modules.",
      bio2:
        "I complement my technical profile (Laravel, React, Django, Python) with real-world experience in Technical Support (Entel), which strengthened my analysis, incident resolution, and technical communication skills.",
      sidebar_title:    "In brief",
      edu_title:        "Education",
      edu_body:         "Computer Engineering · DUOC UC · Project Management Specialization",
      interest_title:   "Area of interest",
      interest_body:    "Backend, full stack, databases, and API architecture.",
      availability_title: "Availability",
      availability_body:  "Immediate. On-site, hybrid, or remote.",
      roles_title:      "Open to roles such as",
      roles_body:       "Junior Developer, Systems Analyst, Junior DBA, IT Support with a technical profile.",
    },
  },

  // ── Skills ──────────────────────────────────────────────────────────────────
  skills: {
    es: {
      heading: "Habilidades técnicas",
      categories: {
        "Lenguajes":                 "Lenguajes",
        "Frameworks y Librerías":    "Frameworks y Librerías",
        "Bases de Datos":            "Bases de Datos",
        "Herramientas":              "Herramientas",
        "Arquitectura de Software":  "Arquitectura de Software",
        "Ciberseguridad":            "Ciberseguridad",
      },
      // Skill names that have translations
      skillNames: {
        "Separación de capas": "Separación de capas",
        "Diseño modular":      "Diseño modular",
        "Conceptos básicos":   "Conceptos básicos",
        "Autenticación segura":"Autenticación segura",
        "Control de acceso":   "Control de acceso",
      },
    },
    en: {
      heading: "Technical Skills",
      categories: {
        "Lenguajes":                 "Languages",
        "Frameworks y Librerías":    "Frameworks & Libraries",
        "Bases de Datos":            "Databases",
        "Herramientas":              "Tools",
        "Arquitectura de Software":  "Software Architecture",
        "Ciberseguridad":            "Cybersecurity",
      },
      skillNames: {
        "Separación de capas": "Layer Separation",
        "Diseño modular":      "Modular Design",
        "Conceptos básicos":   "Basic Concepts",
        "Autenticación segura":"Secure Authentication",
        "Control de acceso":   "Access Control",
      },
    },
  },

  // ── Projects ────────────────────────────────────────────────────────────────
  projects: {
    es: {
      heading:    "Proyectos",
      subheading: "Algunos de mis trabajos más relevantes.",
      coming_soon: "Próximamente",
    },
    en: {
      heading:    "Projects",
      subheading: "Some of my most relevant work.",
      coming_soon: "Coming Soon",
    },
  },

  // ── Project descriptions ────────────────────────────────────────────────────
  projectDescriptions: {
    CiberPyme: {
      es: "Plataforma web de diagnóstico de ciberseguridad para PYMES. Incluye checklist dinámico con puntaje por categoría, análisis automático de brechas mediante OpenAI API, generación de reportes ejecutivos en PDF, autenticación y control de acceso por roles.",
      en: "A web-based cybersecurity diagnostic platform for SMEs. Features a dynamic checklist with per-category scoring, automatic gap analysis via the OpenAI API, executive PDF report generation, and role-based access control.",
    },
    Ferremas: {
      es: "E-commerce funcional con catálogo de productos, carrito de compras y checkout. Integra una API de pasarela de pagos y la API del Banco Central para conversión de precios a USD en tiempo real.",
      en: "A functional e-commerce app with a product catalog, shopping cart, and checkout. Integrates a payment gateway API and the Chilean Central Bank API for real-time USD price conversion.",
    },
    CodigoTrauma: {
      es: "Sistema web de gestión enfocado en arquitectura limpia y separación de responsabilidades. Aplica fuertemente principios de diseño modular y el patrón MVC para asegurar que el código sea mantenible, escalable y robusto a largo plazo.",
      en: "A web management system focused on clean architecture and separation of concerns. Strongly applies modular design principles and the MVC pattern to ensure the codebase is maintainable, scalable, and robust over time.",
    },
  },

  // ── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    es: {
      heading:    "Hablemos",
      subheading: "Estoy buscando activamente mi primera oportunidad laboral. Si tienes un proyecto, una vacante o simplemente quieres conversar, escríbeme.",
      items: {
        linkedin:   { label: "LinkedIn",    description: "Conectemos profesionalmente" },
        github:     { label: "GitHub",      description: "Revisa mis proyectos"       },
        email:      { label: "Email",       description: "andresdremc@gmail.com"       },
        cv:         { label: "Currículum",  description: "Descargar en PDF"           },
      },
    },
    en: {
      heading:    "Let's Talk",
      subheading: "I'm actively looking for my first job opportunity. If you have a project, an opening, or just want to chat, reach out.",
      items: {
        linkedin:   { label: "LinkedIn",   description: "Let's connect professionally" },
        github:     { label: "GitHub",     description: "Check out my projects"        },
        email:      { label: "Email",      description: "andresdremc@gmail.com"        },
        cv:         { label: "Résumé",     description: "Download as PDF"             },
      },
    },
  },

  // ── Experience ──────────────────────────────────────────────────────────────
  experience: {
    es: { heading: "Experiencia" },
    en: { heading: "Experience" },
  },

  // ── Certifications ──────────────────────────────────────────────────────────
  certifications: {
    es: { heading: "Certificaciones", issued: "Expedido:", verified: "Verificado" },
    en: { heading: "Certifications",  issued: "Issued:",   verified: "Verified"   },
  },

  // ── Theme / Lang toggles ────────────────────────────────────────────────────
  toggles: {
    es: {
      lang_aria:  "Cambiar a inglés",
      theme_dark: "Cambiar a modo claro",
      theme_light:"Cambiar a modo oscuro",
    },
    en: {
      lang_aria:  "Switch to Spanish",
      theme_dark: "Switch to light mode",
      theme_light:"Switch to dark mode",
    },
  },
} as const;
