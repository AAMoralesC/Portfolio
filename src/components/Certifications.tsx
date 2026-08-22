import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { containerVariants, cardVariants, ease } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// --- Componente: Certificaciones ---------------------------------------------

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function CertiProfIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#f59e0b" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function AnthropicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#c96442"
        d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.378-3.504h6.875L10.173 3.52zm-1.243 9.963L10.63 7.16l2.033 6.323H8.93z"
      />
    </svg>
  );
}

function IssuerIcon({ type, className }: { type: string; className?: string }) {
  if (type === "google")    return <GoogleIcon    className={className} />;
  if (type === "anthropic") return <AnthropicIcon className={className} />;
  return                           <CertiProfIcon className={className} />;
}

export default function Certifications() {
  const { language } = useLanguage();
  const t = translations.certifications[language];

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
        >
          {t.heading}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col p-4 rounded-xl
                         border border-zinc-200/70 dark:border-zinc-800/80
                         bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md
                         hover:-translate-y-1 hover:scale-[1.02]
                         hover:border-indigo-300 dark:hover:border-indigo-700
                         hover:shadow-lg dark:hover:shadow-[0_16px_40px_-16px_rgba(99,102,241,0.4)]
                         transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <IssuerIcon type={cert.issuerType} className="w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] font-semibold tracking-widest uppercase
                                 text-zinc-500 dark:text-zinc-400">
                  {cert.issuer}
                </span>
              </div>

              <h3 className="flex-1 text-xs sm:text-sm font-semibold leading-snug
                             text-zinc-900 dark:text-zinc-100
                             group-hover:text-indigo-500 dark:group-hover:text-indigo-400
                             transition-colors duration-300">
                {cert.name}
              </h3>

              {cert.date && (
                <p className="mt-2 text-[11px] text-zinc-400 dark:text-zinc-500">
                  {t.issued} {cert.date}
                </p>
              )}

              {cert.credentialId && (
                <p className="mt-0.5 text-[10px] font-mono text-zinc-400 dark:text-zinc-600 truncate">
                  ID: {cert.credentialId}
                </p>
              )}

              <div className="mt-2 self-start">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold
                                 tracking-wide uppercase px-2 py-0.5 rounded-full
                                 bg-emerald-100 text-emerald-700
                                 dark:bg-emerald-900/30 dark:text-emerald-400
                                 border border-emerald-200 dark:border-emerald-800">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  {t.verified}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
