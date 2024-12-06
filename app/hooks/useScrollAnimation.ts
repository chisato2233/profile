import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

export function useScrollAnimation(ranges: [number, number?][]) {
  const [activeSections, setActiveSections] = useState<boolean[]>([true, ...Array(ranges.length - 1).fill(false)]);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const newActiveSections = ranges.map(([start, end = 1], index) => {
        if (index === 0) {
          // 特殊处理第一个区间，从 0 到 start
          return latest >= 0 && latest <= start;
        }
        return latest > start && latest <= end;
      });
      setActiveSections(newActiveSections);
    });
  }, [scrollYProgress, ranges]);

  return activeSections;
}