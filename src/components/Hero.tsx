import { motion } from "framer-motion";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">

          {/* ── Foto de perfil ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="flex justify-center md:justify-end md:order-2 flex-shrink-0"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-transparent blur-2xl" />
              <img
                src={profilePhoto}
                alt="Foto de perfil de Andrés Morales"
                className="relative w-full h-full rounded-full object-cover
                           border-2 border-zinc-200 dark:border-zinc-700
                           shadow-xl ring-4 ring-white/50 dark:ring-zinc-900/50"
              />
            </div>
          </motion.div>

          {/* ── Columna de texto ── */}
          <div className="flex-1 min-w-0 md:order-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm tracking-wide text-zinc-600 dark:text-zinc-400"
            >
              Ingeniero en Informática · DUOC UC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
            >
              Andrés Morales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto md:mx-0"
            >
              Desarrollo aplicaciones web con foco en el backend:
              APIs REST, bases de datos relacionales y autenticación de usuarios.
              Trabajo con Laravel, React y Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium
                           bg-zinc-900 text-white hover:bg-zinc-800
                           dark:bg-white dark:text-black dark:hover:bg-zinc-200
                           transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="/CV_Andres_Morales.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium
                           bg-indigo-600 text-white hover:bg-indigo-500
                           dark:bg-indigo-500 dark:hover:bg-indigo-400
                           transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Descargar CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium
                           border border-zinc-300 text-zinc-800 hover:bg-zinc-100
                           dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900
                           transition-colors"
              >
                Contactar
              </a>
            </motion.div>

            {/* Badges de tecnología */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {["Laravel", "React", "MySQL", "PostgreSQL", "TypeScript", "Python"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                             bg-zinc-100 text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-300
                             border border-zinc-200 dark:border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}