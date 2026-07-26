import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ease } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Componente: Proyectos (Carrusel 2 columnas) ──────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.97 }),
};

// ─── Tarjeta individual ───────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  language,
  comingSoon,
}: {
  project: (typeof projects)[number];
  index: number;
  language: string;
  comingSoon: string;
}) {
  const descs = translations.projectDescriptions;
  const projectDesc =
    (descs as Record<string, { es: string; en: string }>)[project.title]?.[language as "es" | "en"]
    ?? project.description;

  return (
    <div
      className="flex flex-col p-6 sm:p-7 rounded-2xl h-full
                 border border-zinc-200/70 dark:border-zinc-800/80
                 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md
                 shadow-md dark:shadow-[0_16px_48px_-16px_rgba(99,102,241,0.25)]
                 ring-1 ring-zinc-100/80 dark:ring-indigo-500/10"
    >
      {/* Badge "Próximamente" */}
      {!project.github && !project.demo && (
        <span className="self-start mb-3 text-[10px] font-semibold tracking-widest uppercase
                         px-2.5 py-0.5 rounded-full
                         bg-indigo-100 text-indigo-600
                         dark:bg-indigo-900/40 dark:text-indigo-400
                         border border-indigo-200 dark:border-indigo-800">
          {comingSoon}
        </span>
      )}

      {/* Número + título */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl sm:text-4xl font-black text-zinc-300 dark:text-zinc-800
                         leading-none select-none tabular-nums shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100
                       leading-tight pt-1">
          {project.title}
        </h3>
      </div>

      {/* Descripción */}
      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed flex-1 mb-5">
        {projectDesc}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full
                         bg-zinc-100 dark:bg-zinc-800
                         text-zinc-600 dark:text-zinc-400
                         border border-zinc-200 dark:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-xl
                       bg-zinc-900 text-white hover:bg-zinc-700
                       dark:bg-white dark:text-black dark:hover:bg-zinc-200
                       transition-colors duration-200"
          >
            GitHub
          </a>
        ) : (
          <span className="text-xs font-medium px-4 py-2 rounded-xl
                           bg-zinc-100 dark:bg-zinc-800
                           text-zinc-400 dark:text-zinc-600
                           border border-zinc-200 dark:border-zinc-700
                           cursor-not-allowed select-none">
            GitHub
          </span>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-xl
                       border border-zinc-300 dark:border-zinc-700
                       text-zinc-700 dark:text-zinc-300
                       hover:bg-zinc-100 dark:hover:bg-zinc-800
                       transition-colors duration-200"
          >
            Demo
          </a>
        ) : (
          <span className="text-xs font-medium px-4 py-2 rounded-xl
                           border border-zinc-200 dark:border-zinc-800
                           text-zinc-400 dark:text-zinc-600
                           cursor-not-allowed select-none">
            Demo
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Carrusel principal ───────────────────────────────────────────────────────
const Projects = () => {
  const { language } = useLanguage();
  const t = translations.projects[language];

  const pageSize   = 2;
  const totalPages = Math.ceil(projects.length / pageSize);

  const [page, setPage]           = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (p: number) => {
    setDirection(p > page ? 1 : -1);
    setPage(p);
  };
  const prev = () => goTo((page - 1 + totalPages) % totalPages);
  const next = () => goTo((page + 1) % totalPages);

  const visible = projects.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="w-full">

      {/* ── Encabezado ── */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3"
      >
        {t.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 sm:mb-10"
      >
        {t.subheading}
      </motion.p>

      {/* ── Área de tarjetas ── */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {visible.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={page * pageSize + i}
                language={language}
                comingSoon={t.coming_soon}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Controles: flechas + puntos ── */}
      <div className="flex items-center justify-between gap-4 mt-5">

        <button
          onClick={prev}
          aria-label="Página anterior"
          className="flex items-center justify-center w-10 h-10 rounded-xl
                     border border-zinc-200 dark:border-zinc-700
                     bg-white/80 dark:bg-zinc-900/60
                     text-zinc-600 dark:text-zinc-400
                     hover:border-indigo-400 hover:text-indigo-500
                     dark:hover:border-indigo-500 dark:hover:text-indigo-400
                     transition-all duration-200 backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Página ${i + 1}`}
              className={`rounded-full transition-all duration-300
                ${i === page
                  ? "w-6 h-2 bg-indigo-500 dark:bg-indigo-400"
                  : "w-2 h-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Página siguiente"
          className="flex items-center justify-center w-10 h-10 rounded-xl
                     border border-zinc-200 dark:border-zinc-700
                     bg-white/80 dark:bg-zinc-900/60
                     text-zinc-600 dark:text-zinc-400
                     hover:border-indigo-400 hover:text-indigo-500
                     dark:hover:border-indigo-500 dark:hover:text-indigo-400
                     transition-all duration-200 backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Projects;