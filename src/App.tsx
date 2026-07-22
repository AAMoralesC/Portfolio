import { useRef } from "react";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <LanguageProvider>
    <div
      ref={scrollRef}
      className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth relative
                 bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-500"
    >
      {/* Fondo con gradiente de profundidad */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 blur-3xl" />
      </div>

      {/* ThemeToggle integrado en Navbar */}
      <Navbar containerRef={scrollRef} />

      <div id="hero" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </div>

      <div id="about" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <About />
        </SectionWrapper>
      </div>

      <div id="experience" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
      </div>

      <div id="skills" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </div>

      <div id="certifications" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Certifications />
        </SectionWrapper>
      </div>

      <div id="projects" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </div>

      <div id="contact" className="snap-start min-h-screen md:h-screen">
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </div>
    </div>
    </LanguageProvider>
  );
}

export default App;