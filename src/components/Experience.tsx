import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { ease } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Componente: Experiencia Laboral ─────────────────────────────────────────

export default function Experience() {
  const { language } = useLanguage();
  const t = translations.experience[language];

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

        <div className="mt-8 flex flex-col gap-5">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease, delay: 0.1 * idx }}
              className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800
                         bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md
                         p-6 sm:p-8 overflow-hidden
                         hover:border-indigo-300 dark:hover:border-indigo-700
                         hover:shadow-xl dark:hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.35)]
                         transition-all duration-300"
            >
              {/* Acento izquierdo */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-2xl" />

              <div className="pl-4 sm:pl-5">

                {/* Encabezado: rol + período */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {item.role[language]}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-500 dark:text-indigo-400">
                      {item.company}
                      <span className="font-normal text-zinc-500 dark:text-zinc-400">
                        {" "}· {item.type[language]}
                      </span>
                    </p>
                  </div>

                  <div className="flex-shrink-0 sm:text-right text-xs text-zinc-500 dark:text-zinc-400 space-y-0.5">
                    <p className="font-medium text-zinc-700 dark:text-zinc-300">
                      {item.period[language]}
                    </p>
                    <p>{item.duration[language]}</p>
                    <p>{item.location[language]}</p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm sm:text-base
                                 text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {bullet[language]}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
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

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
