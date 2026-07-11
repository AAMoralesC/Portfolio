// ─── Tipos compartidos del portfolio ───────────────────────────────────────

export interface SkillIcon {
  /** SVG path(s) para el icono */
  paths: string[];
  /** Color de marca original (hex). Se aplica en hover. */
  brandColor: string;
  /** viewBox del SVG. Por defecto "0 0 24 24". */
  viewBox?: string;
  /** Si true, el icono usa stroke en lugar de fill (ej. iconos Lucide) */
  strokeBased?: boolean;
}

export interface Skill {
  name: string;
  icon?: SkillIcon;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
}

export interface ContactItem {
  id: string;
  label: string;
  description: string;
  href: string;
  external: boolean;
  primary: boolean;
}

export interface NavLink {
  id: string;
  label: string;
}
