'use client';

import { motion } from "framer-motion";
import { useRef } from "react";
import { TechStackCard } from "./components/TechStackCard";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { TopContent } from "./components/TopContent";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  const containerRef = useRef(null);

  const activeSections = useScrollAnimation([
    [0.1],
    [0.1],
  ]);

  const sectionVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <main className="relative h-[300vh]" ref={containerRef}>
      <div className="fixed top-0 left-0 w-full h-screen">
        <motion.section
          className="w-full h-full flex flex-col items-center justify-center"
          initial="visible"
          animate={activeSections[0] ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TopContent />
        </motion.section>

        <motion.section 
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial="hidden"
          animate={activeSections[1] ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative w-full bg-transparent dark:bg-transparent rounded-lg overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8">
                  <TechStackCard isVisible={activeSections[1]} />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}