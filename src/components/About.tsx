import { motion } from "framer-motion";

export default function About() {
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
          Me interesa escribir código que funcione, que se entienda y que escale.
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
              Soy titulado de DUOC UC en Ingeniería en Informática, con mención en Gestión de Proyectos. Durante
              la carrera desarrollé plataformas cubriendo backend y frontend,
              diseñando APIs REST, bases de datos relacionales y módulos
              de autenticación.
            </p>

            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Complemento mi perfil técnico (Laravel, React, Django, Python) con
              experiencia real en Soporte Técnico (Entel), lo que fortaleció mis
              habilidades de análisis, resolución de incidencias y comunicación
              técnica con usuarios.
            </p>
          </div>

          {/* Sidebar */}
          <div
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800
                       bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-7"
          >
            <p className="text-xs sm:text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
              En resumen
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Formación y Certificaciones
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Informática (DUOC UC) · Scrum Master Prof.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Área de interés
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Backend, full stack, bases de datos y arquitectura de APIs.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Disponibilidad
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Inmediata. Presencial, híbrido o remoto.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Abierto a roles como
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Desarrollador Junior, Analista de Sistemas,
                  DBA Junior, Soporte TI con perfil técnico.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}