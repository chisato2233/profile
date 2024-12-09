import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "../data/resume";
import { MagicCard } from "./MagicCard";
import BlurIn from "@/components/ui/blur-in";

export function TopContent() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl">
      <BlurFade delay={0.1} inView>
        <MagicCard />
      </BlurFade>
      <section className="mt-4">
        <BlurIn
          className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-bold tracking-[-0.02em] text-black dark:text-white"
          word={DATA.description}
        />
      </section>
    </div>
  );
}