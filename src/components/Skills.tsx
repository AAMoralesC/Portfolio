import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type SkillCategory = {
  name: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    name: "Lenguajes",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frameworks y Librerías",
    skills: ["Laravel", "React", "Angular", "Django"],
  },
  {
    name: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"],
  },
  {
    name: "Herramientas",
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    name: "Arquitectura de Software",
    skills: ["MVC", "REST", "Separación de capas", "Diseño modular"],
  },
  {
    name: "Ciberseguridad",
    skills: ["Conceptos básicos", "Autenticación segura", "Control de acceso", "HTTPS / TLS"],
  },
  {
    name: "Certificaciones",
    skills: ["Scrum Master Prof.", "Scrum Foundation Prof."],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Skills() {
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
          Habilidades técnicas
        </motion.h2>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800
                         bg-white/60 dark:bg-zinc-900/40 p-5
                         hover:border-indigo-300 dark:hover:border-indigo-700
                         hover:shadow-lg dark:hover:shadow-[0_8px_30px_-10px_rgba(99,102,241,0.3)]
                         transition-all duration-300"
            >
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-3">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full
                               bg-zinc-100 text-zinc-700
                               dark:bg-zinc-800 dark:text-zinc-300
                               border border-zinc-200 dark:border-zinc-700
                               transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
