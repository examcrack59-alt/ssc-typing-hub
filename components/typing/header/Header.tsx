import Image from "next/image";

import StatsCard from "@/components/common/StatsCard";
import { useTypingStore } from "@/store";
import { useFinalizeResult } from "@/hooks/useFinalizeResult";

export default function Header() {
  const { finalizeResult } = useFinalizeResult();
  const timer = useTypingStore(
  (state) => state.timer
);
const stats = useTypingStore(
  (state) => state.stats
);

const exam = useTypingStore(
  (state) => state.exam
);
const examNames: Record<string, string> = {
  cgl: "SSC CGL",
  chsl: "SSC CHSL",
  mts: "SSC MTS",
  gd: "SSC GD",
  cpo: "SSC CPO",
  stenographer: "SSC STENOGRAPHER",
};

const examTitle =
  examNames[exam?.toLowerCase()] ?? exam;
console.log("Sidebar Exam :", exam);

 
const language = useTypingStore(
  (state) => state.language
);
const minutes = Math.floor(
  timer.remainingSeconds / 60
)
  .toString()
  .padStart(2, "0");

const seconds = (
  timer.remainingSeconds % 60
)
  .toString()
  .padStart(2, "0");

const formattedTime = `${minutes}:${seconds}`;
  return (
    <header className="sticky top-0 z-50 border-b border-blue-900 bg-gradient-to-r from-[#0a3f8f] via-[#0b4ea2] to-[#1d62c4] shadow-xl">
      <div className="mx-auto flex h-[88px] max-w-[1700px] items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Logo Placeholder */}
     <div
  className="
    flex
    h-14
    w-14
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-white
    shadow-lg
    ring-4
    ring-white/20
  "
>
  <Image
    src="/logo.png"
    alt="Logo"
    width={46}
    height={46}
    className="object-contain"
    priority
  />
</div>

          <div>

           <h1 className="text-[24px] font-extrabold tracking-wide text-white">
  {examTitle}
</h1>


         <p className="mt-1 text-[14px] font-medium tracking-wide text-blue-100">
  {language} Typing Test
</p>

          </div>

        </div>

        {/* Right Stats */}
       <div className="flex items-center gap-3">

          <StatsCard
          
  title="Time Left"
  value={formattedTime}
/>
 
           
          <StatsCard
            title="Accuracy"
            value={`${stats.accuracy.toFixed(0)} %`}
          />

<button
  type="button"
  onClick={finalizeResult}
  className="
ml-2
h-[44px]
w-[160px]
rounded-md
bg-red-600
text-sm
font-semibold
text-white
transition
hover:bg-red-700
"
>
  END TEST
</button>

        </div>

      </div>
    </header>
  );
}