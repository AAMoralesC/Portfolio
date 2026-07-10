import { motion } from "framer-motion";

const highlights: string[] = [
  "APIs REST",
  "Autenticación JWT",
  "Control de roles",
  "SQL relacional",
  "Scrum",
  "Docker",
];

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
          Desarrollo software con foco en backend, escalabilidad y estructura.
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
              Soy Ingeniero en Informática egresado, orientado al desarrollo de
              software backend y aplicaciones full stack. Me interesa construir
              soluciones bien estructuradas, seguras y mantenibles, con foco en
              rendimiento y experiencia de usuario.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              He participado en proyectos con desarrollo de APIs, modelado de
              bases de datos, autenticación, control de acceso e integración de
              frontend y backend utilizando tecnologías como Node.js, Laravel,
              React, MySQL y PostgreSQL.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              También tengo experiencia trabajando con metodologías ágiles como
              Scrum, colaborando en equipos y organizando entregas iterativas
              para desarrollar productos funcionales y alineados con objetivos
              reales.
            </p>
          </div>

          {/* Sidebar */}
          <div
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800
                       bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-7"
          >
            <p className="text-xs sm:text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
              Enfoque actual
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Especialidad
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Backend y desarrollo full stack con bases de datos
                  relacionales, autenticación y arquitectura web.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Actualmente potenciando
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Arquitectura backend, cloud, despliegue de aplicaciones y
                  desarrollo de productos escalables.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Objetivo
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Aportar como Backend o Full Stack Junior en proyectos reales y
                  seguir creciendo profesionalmente.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="mt-5 flex flex-wrap gap-2"
        >
          {highlights.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full
                         bg-zinc-100 text-zinc-700
                         dark:bg-zinc-900 dark:text-zinc-300
                         border border-zinc-200 dark:border-zinc-800"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}