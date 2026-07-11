import type { ContactItem } from "../types";

// ─── Items de contacto ───────────────────────────────────────────────────────
// primary: true  → botón sólido (alto contraste)
// primary: false → botón con borde
// external: true → abre en nueva pestaña con rel="noopener noreferrer"

export const contactItems: ContactItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Conectemos profesionalmente",
    href: "https://www.linkedin.com/in/andresmoralesc/",
    external: true,
    primary: true,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Revisa mis proyectos",
    href: "https://github.com/AAMoralesC",
    external: true,
    primary: false,
  },
  {
    id: "email",
    label: "Email",
    description: "andresdremc@gmail.com",
    href: "mailto:andresdremc@gmail.com",
    external: false,
    primary: false,
  },
  {
    id: "cv",
    label: "Currículum",
    description: "Descargar en PDF",
    href: "/CV_Andres_Morales.pdf",
    external: true,
    primary: true,
  },
];
