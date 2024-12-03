"use client";

import Meteors from "@/components/ui/meteors";
import { DATA } from "@/app/data/resume";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MagicCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 生成不规则图形的路径
  const blobPath = `
    M 25 25
    C 15 10, 35 10, 25 25
    C 40 15, 40 35, 25 25
    C 35 40, 15 40, 25 25
    C 10 35, 10 15, 25 25
  `;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInCard = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );

        if (isInCard) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePosition({ x, y });
          if (!isHovering) setIsHovering(true);
        } else {
          if (isHovering) setIsHovering(false);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div
      ref={cardRef}
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl cursor-pointer"
    >
      {/* Meteors 层 */}
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={130} />
      </div>

      {/* 内容层 */}
      <span className="relative pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[8vw] sm:text-[6vw] md:text-[5vw] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {DATA.name}&apos;s Profile
      </span>

      {/* 反色圆形 */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute mix-blend-difference w-[50px] h-[50px] rounded-full bg-white pointer-events-none"
            style={{
              left: mousePosition.x - 25, // 确保圆心对齐
              top: mousePosition.y - 25,  // 确保圆心对齐
              opacity: isHovering ? 1 : 0
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}