import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// ─── Tipos ───────────────────────────────────────────────────────────────────

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// ─── Contexto ────────────────────────────────────────────────────────────────

export const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  toggleLanguage: () => {},
});

// ─── Hook de conveniencia ────────────────────────────────────────────────────

export function useLanguage() {
  return useContext(LanguageContext);
}

// ─── Provider ────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    // Actualiza el atributo lang del documento para accesibilidad y SEO
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
