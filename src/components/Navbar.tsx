import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "../assets/MoralesDevDark.svg";
import logoDark from "../assets/MoralesDevLight.svg";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/nav";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
}

// ─── Componente: Navbar ───────────────────────────────────────────────────────

export default function Navbar({ containerRef }: Props) {
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detecta sección activa al hacer scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(link.id);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const handleMobileNav = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3" aria-label="Inicio">
          <img src={logoDark}  className="h-9 w-auto dark:hidden"       alt="MoralesDev Logo" />
          <img src={logoLight} className="h-9 w-auto hidden dark:block" alt="MoralesDev Logo" />
        </a>

        {/* ── Desktop: links + toggle ── */}
        <div className="hidden md:flex items-center gap-8 text-base relative">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              id={`nav-${link.id}`}
              className="relative pb-1.5"
            >
              <span
                className={`transition-colors duration-200 ${
                  active === link.id
                    ? "text-indigo-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.label}
              </span>

              {active === link.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-indigo-500 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* ── Mobile: toggle + hamburguesa ── */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />

          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300
                       hover:bg-zinc-100 dark:hover:bg-zinc-800
                       transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {/* Icono hamburguesa / X */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6"  x2="6"  y2="18" />
                  <line x1="6"  y1="6"  x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6"  x2="20" y2="6"  />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Menú móvil desplegable ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden
                       bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md
                       border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  id={`nav-mobile-${link.id}`}
                  onClick={handleMobileNav}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === link.id
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}