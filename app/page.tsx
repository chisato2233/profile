'use client';

import { motion, useScroll, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { TechStackCard } from "./components/TechStackCard";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { TopContent } from "./components/TopContent";


export default function Home() {
  const containerRef = useRef(null);

  const activeSections = useScrollAnimation([
    [0.1],
    [0.1],
  ])
  return (
    <main className="relative h-[300vh]" ref={containerRef}>
      <div className="fixed top-0 left-0 w-full h-screen">
        <motion.section
          className="w-full h-full flex flex-col items-center justify-center"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          animate={{
            opacity: activeSections[0] ? 1 : 0,
            filter: activeSections[0] ? "blur(0px)" : "blur(10px)",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          <TopContent />
        </motion.section>

        <motion.section 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: activeSections[1] ? 1 : 0,
            filter: activeSections[1] ? "blur(0px)" : "blur(10px)",
            backgroundColor: activeSections[1] ? "black" : "transparent",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          <div className="max-w-3xl mx-auto">
            <TechStackCard />
          </div>
        </motion.section>
      </div>
    </main>
  );
}