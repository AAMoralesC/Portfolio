import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations.about[language];

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
        >
          {t.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-6 grid gap-5 md:grid-cols-[1.4fr_0.9fr]"
        >
          {/* Bio */}
          <div
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800
                       bg-white/60 dark:bg-zinc-950/40 p-5 sm:p-7"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {t.bio1}
            </p>

            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {t.bio2}
            </p>
          </div>

          {/* Sidebar */}
          <div
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800
                       bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-7"
          >
            <p className="text-xs sm:text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
              {t.sidebar_title}
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {t.edu_title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.edu_body}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {t.interest_title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.interest_body}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {t.availability_title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.availability_body}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {t.roles_title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.roles_body}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}