import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// ─── Componente: Language Toggle ─────────────────────────────────────────────
// Switch idéntico en estilo al ThemeToggle pero para ES ↔ EN.

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const isEN = language === "en";
  const t = translations.toggles[language];

  return (
    <button
      id="language-toggle"
      onClick={toggleLanguage}
      aria-label={t.lang_aria}
      title={t.lang_aria}
      className="relative w-14 h-8 flex items-center
                 bg-zinc-200 dark:bg-zinc-700
                 rounded-full p-1
                 transition-colors duration-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Thumb deslizante */}
      <div
        className={`w-6 h-6 rounded-full shadow-md z-10
                    flex items-center justify-center
                    bg-white dark:bg-zinc-900
                    transform transition-transform duration-300 ${
                      isEN ? "translate-x-6" : "translate-x-0"
                    }`}
      >
        {/* Texto ES / EN */}
        <span
          className={`text-[9px] font-bold leading-none select-none transition-colors duration-200 ${
            isEN ? "text-indigo-400" : "text-amber-500"
          }`}
        >
          {isEN ? "EN" : "ES"}
        </span>
      </div>

      {/* Labels fijos a ambos lados del track */}
      <span
        aria-hidden="true"
        className="absolute left-1.5 text-[7px] font-bold text-zinc-400 dark:text-zinc-500 select-none"
      >
        ES
      </span>
      <span
        aria-hidden="true"
        className="absolute right-1.5 text-[7px] font-bold text-zinc-400 dark:text-zinc-500 select-none"
      >
        EN
      </span>
    </button>
  );
}
