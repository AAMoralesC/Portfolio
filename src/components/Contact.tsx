import { motion } from "framer-motion";
import { contactItems } from "../data/contact";
import { ease } from "../lib/motion";

// ─── Componente: Contacto ────────────────────────────────────────────────────

export default function Contact() {
  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
      >
        Hablemos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="mt-3 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl"
      >
        Estoy buscando activamente mi primera oportunidad laboral.
        Si tienes un proyecto, una vacante o simplemente quieres
        conversar, escríbeme.
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
    </div>
  );
}