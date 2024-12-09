import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { TechData } from "@/app/data/tech";
import Image from "next/image";
import { motion } from "framer-motion";
import RetroGrid from "@/components/ui/retro-grid";
const TechCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-2">
      <img src={icon} alt={`${name} icon`} width={32} height={32} className="rounded-full" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <blockquote className="mt-2 text-sm dark:text-gray-300">{description}</blockquote>
        </div>
      </div>
    </figure>
  );
};

export function TechStackCard({ isVisible }: { isVisible: boolean }) {
  const firstRow = TechData.slice(0, TechData.length / 2);
  const secondRow = TechData.slice(TechData.length / 2);

  return (<>
  
      <motion.h2 
        initial={{ x: -150 }}
        animate={{ x: isVisible ? 0 : -150 }}
        transition={{
          type: "spring",
          stiffness: 200, // 弹簧刚度
          damping: 10,    // 阻尼系数
        }}
        className="text-5xl font-bold mb-10 dark:text-white"
      >
        My Skills
      </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background dark:bg-gray md:shadow-xl">
        <Marquee pauseOnHover className="w-full [--duration:20s]">
          {firstRow.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="w-full [--duration:20s]">
          {secondRow.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-gray-800"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-gray-800"></div>

      </div>
    </motion.div>

  </>);
}