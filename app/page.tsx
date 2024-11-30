import Image from "next/image";
import { MagicCard } from "./components/MagicCard";
import { DATA } from "./data/resume";
import BlurIn from "@/components/ui/blur-in";
import BlurFade from "@/Reference/src/components/magicui/blur-fade";




export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <BlurFade delay={0.1} inView>
        <MagicCard />
      </BlurFade>
      <section className="max-w-3xl mx-auto">
        <BlurIn
          className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-bold tracking-[-0.02em] text-black dark:text-white"
          word={DATA.description}
        />
      </section>
    </main>
  );
}
