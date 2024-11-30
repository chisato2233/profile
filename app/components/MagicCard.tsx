import Meteors from "@/components/ui/meteors";
import { DATA } from "@/app/data/resume";

export function MagicCard() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl  ">
      <Meteors number={130} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[8vw] sm:text-[6vw] md:text-[5vw]  font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {DATA.name}'s Profile
      </span>
    </div>
  );
}
