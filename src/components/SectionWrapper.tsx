import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="md:h-full pt-20 pb-16 md:pb-6 flex items-center justify-start md:justify-center
                 px-5 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 60, scale: 0.97 }
        }
        transition={{
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}