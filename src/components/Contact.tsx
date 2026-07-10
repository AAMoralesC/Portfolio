import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const contactItems = [
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Conectemos profesionalmente",
    href: "https://www.linkedin.com/in/andresmoralesc/",
    external: true,
    primary: true,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Revisa mi código",
    href: "https://github.com/AAMoralesC",
    external: true,
    primary: false,
  },
  {
    id: "email",
    label: "Email",
    description: "andresdremc@gmail.com",
    href: "mailto:andresdremc@gmail.com",
    external: false,
    primary: false,
  },
];

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
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="mt-3 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl"
      >
        ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades?
        Escríbeme, estoy disponible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease, delay: 0.16 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {contactItems.map((item) =>
          item.primary ? (
            <a
              key={item.id}
              id={`contact-${item.id}`}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex flex-col items-start justify-center
                         rounded-xl px-5 py-4 text-sm font-medium
                         bg-zinc-900 text-white hover:bg-zinc-800
                         dark:bg-white dark:text-black dark:hover:bg-zinc-200
                         transition-colors"
            >
              <span className="font-semibold">{item.label}</span>
              <span className="text-xs mt-0.5 opacity-70">{item.description}</span>
            </a>
          ) : (
            <a
              key={item.id}
              id={`contact-${item.id}`}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex flex-col items-start justify-center
                         rounded-xl px-5 py-4 text-sm font-medium
                         border border-zinc-300 text-zinc-800 hover:bg-zinc-100
                         dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900
                         transition-colors"
            >
              <span className="font-semibold">{item.label}</span>
              <span className="text-xs mt-0.5 opacity-60">{item.description}</span>
            </a>
          )
        )}
      </motion.div>
    </div>
  );
}