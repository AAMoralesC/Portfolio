import { useRef } from "react";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
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

      <div id="hero" className="snap-start scroll-mt-24">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </div>

      <div id="about" className="snap-start scroll-mt-24">
        <SectionWrapper>
          <About />
        </SectionWrapper>
      </div>

      <div id="skills" className="snap-start scroll-mt-24">
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </div>

      <div id="projects" className="snap-start scroll-mt-24">
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </div>

      <div id="contact" className="snap-start scroll-mt-24">
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </div>
    </div>
  );
}

export default App;