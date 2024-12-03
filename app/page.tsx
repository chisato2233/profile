'use client';

import { motion, useScroll, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MagicCard } from "./components/MagicCard";
import { DATA } from "./data/resume";
import BlurIn from "@/components/ui/blur-in";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  const containerRef = useRef(null);
  const [isTopVisible, setIsTopVisible] = useState(true);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const topContentControls = useAnimation();
  const stackControls = useAnimation();
  
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    return scrollYProgress.on("change", (latest) => {
      if (isAnimating) return;

      if (latest > 0.1) {
        setIsAnimating(true);
        setIsTopVisible(false);
        
        Promise.all([
          topContentControls.start({ 
            opacity: 0, 
            filter: "blur(10px)", 
            transition: { 
              duration: 0.3,
              ease: "easeInOut" 
            } 
          }),
          stackControls.start({ 
            opacity: 1, 
            filter: "blur(0px)", 
            transition: { 
              duration: 0.3,
              ease: "easeInOut" 
            } 
          })
        ]).then(() => {
          timeoutId = setTimeout(() => setIsAnimating(false), 100);
        });
      } else {
        setIsAnimating(true);
        setIsTopVisible(true);
        
        Promise.all([
          topContentControls.start({ 
            opacity: 1, 
            filter: "blur(0px)", 
            transition: { 
              duration: 0.3,
              ease: "easeInOut" 
            } 
          }),
          stackControls.start({ 
            opacity: 0, 
            filter: "blur(10px)", 
            transition: { 
              duration: 0.3,
              ease: "easeInOut" 
            } 
          })
        ]).then(() => {
          timeoutId = setTimeout(() => setIsAnimating(false), 100);
        });
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scrollYProgress, topContentControls, stackControls, isAnimating]);

  return (
    <main className="relative h-[300vh]" ref={containerRef}>
      <div className="fixed top-0 left-0 w-full h-screen">
        <motion.div
          className="w-full h-full flex flex-col items-center justify-center"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          animate={topContentControls}
        >
          <div className="w-full flex flex-col max-w-3xl mx-auto">
            <BlurFade delay={0.1} inView={isTopVisible}>
              <MagicCard />
            </BlurFade>
          </div>
          <section className="max-w-3xl mx-auto mt-4">
            <BlurIn
              className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-bold tracking-[-0.02em] text-black dark:text-white"
              word={DATA.description}
            />
          </section>
        </motion.div>

        <motion.section 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={stackControls}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">技术栈</h2>
            <ul className="list-disc pl-5">
              {DATA.skills.map((tech, index) => (
                <li key={index} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </main>
  );
}