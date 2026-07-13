import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { containerVariants, cardVariants, ease } from "../lib/motion";
import type { Skill, SkillIcon } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Sub-componente: Icono SVG de tecnología ─────────────────────────────────
// colored=false → currentColor con grayscale (neutro, igual que el texto)
// colored=true  → brandColor original de la marca (se activa al hover de la tarjeta)

interface TechIconProps {
  icon: SkillIcon;
  colored: boolean;
}

function TechIcon({ icon, colored }: TechIconProps) {
  const isStroke = icon.strokeBased;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox ?? "0 0 24 24"}
      aria-hidden="true"
      className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-300"
      fill={isStroke ? "none" : (colored ? icon.brandColor : "currentColor")}
      stroke={isStroke ? (colored ? icon.brandColor : "currentColor") : "none"}
      strokeWidth={isStroke ? "2" : undefined}
      strokeLinecap={isStroke ? "round" : undefined}
      strokeLinejoin={isStroke ? "round" : undefined}
      style={
        !isStroke
          ? { filter: colored ? "none" : "grayscale(100%)" }
          : undefined
      }
    >
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

// ─── Sub-componente: Badge de skill individual ────────────────────────────────
// Recibe `colored` y `expanded` del padre (CategoryCard).
// En hover de la categoría: se expande y el icono muestra su color de marca.

interface SkillBadgeProps {
  skill: Skill;
  colored: boolean;
  expanded: boolean;
  displayName: string;
}

function SkillBadge({ skill, colored, expanded, displayName }: SkillBadgeProps) {
  return (
    <motion.span
      animate={expanded ? { scale: 1.08 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center gap-1.5
                 text-xs px-2.5 py-1 rounded-full cursor-default
                 bg-zinc-100 text-zinc-700
                 dark:bg-zinc-800 dark:text-zinc-300
                 border border-zinc-200 dark:border-zinc-700
                 transition-colors duration-200"
    >
      {skill.icon && <TechIcon icon={skill.icon} colored={colored} />}
      {displayName}
    </motion.span>
  );
}

// ─── Sub-componente: Tarjeta de categoría ─────────────────────────────────────
// Gestiona el estado hover a nivel de tarjeta y lo propaga a todos los badges.

interface CategoryCardProps {
  name: string;
  displayName: string;
  skills: Skill[];
  skillNameMap: Record<string, string>;
}

function CategoryCard({ displayName, skills, skillNameMap }: CategoryCardProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      // Desktop: hover natural
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      // Mobile: tap para activar / desactivar
      onTap={() => setActive((v) => !v)}
      className={`rounded-2xl border p-5 cursor-pointer select-none
                 transition-all duration-300
                 ${active
                   ? "border-indigo-300 dark:border-indigo-700 shadow-lg dark:shadow-[0_8px_30px_-10px_rgba(99,102,241,0.3)]"
                   : "border-zinc-200 dark:border-zinc-800"
                 }
                 bg-white/60 dark:bg-zinc-900/40`}
    >
      {/* Nombre de la categoría */}
      <p className="text-[10px] sm:text-xs font-semibold tracking-widest
                    text-indigo-500 dark:text-indigo-400 uppercase mb-3">
        {displayName}
      </p>

      {/* Badges: todos se expanden y colorean al mismo tiempo */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            colored={active}
            expanded={active}
            displayName={skillNameMap[skill.name] ?? skill.name}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Componente principal: Skills ─────────────────────────────────────────────

export default function Skills() {
  const { language } = useLanguage();
  const t = translations.skills[language];

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
        >
          {t.heading}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              displayName={
                (t.categories as Record<string, string>)[cat.name] ?? cat.name
              }
              skills={cat.skills}
              skillNameMap={t.skillNames as Record<string, string>}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
