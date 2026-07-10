import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-amber-500"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="4"  />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2"  y1="12" x2="4"  y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-indigo-400"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={isDark}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="relative w-14 h-8 flex items-center
                 bg-zinc-200 dark:bg-zinc-700
                 rounded-full p-1
                 transition-colors duration-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md z-10
                    flex items-center justify-center
                    bg-white dark:bg-zinc-900
                    transform transition-transform duration-300 ${
                      isDark ? "translate-x-6" : "translate-x-0"
                    }`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
}