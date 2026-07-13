import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ease, containerVariants, projectCardVariants } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Componente: Proyectos ───────────────────────────────────────────────────

const Projects = () => {
  const { language } = useLanguage();
  const t = translations.projects[language];
  const descs = translations.projectDescriptions;

  return (
    <div className="w-full">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
      >
        {projects.map((project) => {
          // Busca traducción de la descripción; si no existe, usa la original
          const projectDesc =
            (descs as Record<string, { es: string; en: string }>)[project.title]?.[language]
            ?? project.description;

          return (
            <motion.div
              key={project.title}
              variants={projectCardVariants}
              className="group flex flex-col p-5 sm:p-7 rounded-2xl
                  border border-zinc-200/70 dark:border-zinc-800/80
                  bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md
                  transition-all duration-500
                  hover:-translate-y-1 hover:scale-[1.02]
                  hover:bg-white dark:hover:bg-zinc-900/70
                  hover:shadow-xl dark:hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.55)]
                  hover:ring-1 hover:ring-zinc-300/50 dark:hover:ring-indigo-500/40"
            >
              {/* Badge "Próximamente / Coming Soon" si no hay links */}
              {!project.github && !project.demo && (
                <span className="self-start mb-3 text-[10px] font-semibold tracking-widest uppercase
                                 px-2 py-0.5 rounded-full
                                 bg-indigo-100 text-indigo-600
                                 dark:bg-indigo-900/40 dark:text-indigo-400
                                 border border-indigo-200 dark:border-indigo-800">
                  {t.coming_soon}
                </span>
              )}

              <h3 className="text-lg sm:text-xl font-semibold mb-2
                             group-hover:text-indigo-500 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed flex-1">
                {projectDesc}
              </p>

              {/* Tags de tecnologías */}
              {project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full
                                 bg-zinc-100 dark:bg-zinc-800
                                 text-zinc-600 dark:text-zinc-400
                                 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links: GitHub y Demo */}
              <div className="mt-5 flex gap-2.5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-4 py-2 rounded-lg
                               bg-zinc-900 text-white hover:bg-zinc-700
                               dark:bg-white dark:text-black dark:hover:bg-zinc-200
                               transition-colors"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-xs font-medium px-4 py-2 rounded-lg
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
                    className="text-xs font-medium px-4 py-2 rounded-lg
                               border border-zinc-300 dark:border-zinc-700
                               text-zinc-700 dark:text-zinc-300
                               hover:bg-zinc-100 dark:hover:bg-zinc-800
                               transition-colors"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="text-xs font-medium px-4 py-2 rounded-lg
                                   border border-zinc-200 dark:border-zinc-800
                                   text-zinc-400 dark:text-zinc-600
                                   cursor-not-allowed select-none">
                    Demo
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;