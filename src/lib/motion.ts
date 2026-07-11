// ─── Constantes de animación compartidas ────────────────────────────────────
// Centraliza ease y variants usados en Skills, Projects y SectionWrapper.

import type { Variants } from "framer-motion";

/** Custom cubic-bezier para transiciones suaves tipo "ease out expo" */
export const ease = [0.22, 1, 0.36, 1] as const;

/** Contenedor stagger: los hijos aparecen en cascada */
export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Card individual: sube desde abajo con fade */
export const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/** Variante para proyectos (desplazamiento mayor) */
export const projectCardVariants: Variants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/** Heading principal de sección */
export const headingVariants: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
