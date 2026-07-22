import { motion } from "framer-motion";
import { ease } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Componente: Contacto ────────────────────────────────────────────────────

export default function Contact() {
  const { language } = useLanguage();
  const t = translations.contact[language];

  // Construye la lista de items de contacto desde las traducciones
  const contactItems = [
    {
      id: "linkedin",
      ...t.items.linkedin,
      href: "https://www.linkedin.com/in/andresmoralesc/",
      external: true,
      primary: true,
    },
    {
      id: "github",
      ...t.items.github,
      href: "https://github.com/AAMoralesC",
      external: true,
      primary: false,
    },
    {
      id: "email",
      ...t.items.email,
      href: "mailto:andresdremc@gmail.com",
      external: false,
      primary: false,
    },
    {
      id: "cv",
      ...t.items.cv,
      href: "/CV_Andres_Morales.pdf",
      external: true,
      primary: true,
    },
  ];

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
      >
        {t.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="mt-3 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl"
      >
        {t.subheading}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease, delay: 0.16 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {contactItems.map((item) => {
          // Atributos de seguridad para links externos
          const externalProps = item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          const baseClasses = "flex flex-col items-start justify-center rounded-xl px-5 py-4 text-sm font-medium transition-colors";
          const primaryClasses = "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200";
          const secondaryClasses = "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900";

          return (
            <a
              key={item.id}
              id={`contact-${item.id}`}
              href={item.href}
              {...externalProps}
              className={`${baseClasses} ${item.primary ? primaryClasses : secondaryClasses}`}
            >
              <span className="font-semibold">{item.label}</span>
              <span className={`text-xs mt-0.5 ${item.primary ? "opacity-70" : "opacity-60"}`}>
                {item.description}
              </span>
            </a>
          );
        })}
      </motion.div>

      {/* Botón volver al inicio */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease, delay: 0.28 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#hero"
          id="back-to-top"
          className="group inline-flex flex-col items-center gap-2
                     text-xs font-medium text-zinc-400 dark:text-zinc-500
                     hover:text-indigo-500 dark:hover:text-indigo-400
                     transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-10 h-10 rounded-full
                       border border-zinc-200 dark:border-zinc-700
                       group-hover:border-indigo-400 dark:group-hover:border-indigo-500
                       group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20
                       transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.div>
          <span>{language === "es" ? "Volver al inicio" : "Back to top"}</span>
        </a>
      </motion.div>
    </div>
  );
}