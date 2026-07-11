import type { NavLink } from "../types";

// ─── Links de navegación ────────────────────────────────────────────────────
// Para agregar una nueva sección: añade un objeto { id, label } aquí.
// El id debe coincidir con el id del div wrapper en App.tsx.

export const navLinks: NavLink[] = [
  { id: "hero",     label: "Inicio"   },
  { id: "about",    label: "Sobre mí" },
  { id: "skills",   label: "Skills"   },
  { id: "projects", label: "Proyectos"},
  { id: "contact",  label: "Contacto" },
];
