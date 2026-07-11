import { useTypingStore } from "@/store";

export default function Sidebar() {
  const exam = useTypingStore((state) => state.exam);
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
  
  
  const language = useTypingStore((state) => state.language);
  const duration = useTypingStore((state) => state.duration);

  
  return (
    <aside className="space-y-2">

      {/* Test Details */}
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b bg-blue-700 px-3 py-2">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide text-white">
            Test Details
          </h2>
        </div>

       <div className="space-y-2 p-2.5">

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">
              Exam
            </label>
<div className="flex h-[46px] items-center rounded-lg border border-slate-200 bg-slate-50 px-4 shadow-sm">
  <span className="text-[15px] font-semibold text-slate-900">
    {examTitle}
  </span>
</div>
            
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">
              Language
            </label>

     <div className="flex h-[46px] items-center rounded-lg border border-slate-200 bg-slate-50 px-4 shadow-sm">
  <span className="text-[15px] font-semibold text-slate-900">
    {language}
  </span>
</div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">
              Duration
            </label>

           <div className="flex h-[46px] items-center rounded-lg border border-slate-200 bg-slate-50 px-4 shadow-sm">
  <span className="text-[15px] font-semibold text-slate-900">
    {duration}
  </span>
</div>
          </div>

        </div>
      </div>

      {/* Instructions */}
      <div className="rounded-lg border bg-white shadow-sm">
       <div className="border-b bg-blue-700 px-3 py-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Instructions
          </h2>
        </div>

       <div className="p-2.5">
          <ul className="space-y-1 text-[12px] leading-4 text-slate-700">
            <li>• Type exactly as displayed in the passage.</li>
            <li>• Backspace is allowed.</li>
            <li>• Timer starts on the first key press.</li>
            <li>• Incorrect typing reduces accuracy.</li>
            <li>• Finish before the timer ends.</li>
          </ul>
        </div>
      </div>

      {/* Character Status */}
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b bg-blue-700 px-3 py-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Character Status
          </h2>
        </div>

       <div className="space-y-1.5 p-2.5 text-[12px]">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-green-500"></span>
            <span>Correct</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-red-500"></span>
            <span>Incorrect</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-blue-500"></span>
            <span>Current Position</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-slate-300"></span>
            <span>Not Typed</span>
          </div>

        </div>
      </div>

    </aside>
  );
}