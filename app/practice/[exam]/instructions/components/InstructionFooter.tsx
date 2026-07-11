"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface InstructionFooterProps {
  exam: string;
  accepted: boolean;
  onAcceptedChange: (value: boolean) => void;
  onNext: () => void;
}

export default function InstructionFooter({
  exam,
  accepted,
  onAcceptedChange,
  onNext,
}: InstructionFooterProps) {
  return (
    <footer className="sticky bottom-0 z-30 border-t border-slate-200 bg-white">

      <div className="flex items-center justify-between px-8 py-4">

        {/* Left */}

        <div className="flex items-center gap-6">

          <Link
  href={`/practice/${exam}`}
  className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-amber-600 hover:shadow-lg"
>
  <ArrowLeft size={18} />
  Go To Tests
</Link>

          <button
  type="button"
  onClick={() => window.history.back()}
  className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
>
  Previous
</button>

        </div>

        

        {/* Right */}

        <button
          disabled={!accepted}
          onClick={onNext}
          className={`flex items-center gap-2 rounded-lg px-8 py-3 font-semibold transition
            ${
              accepted
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed bg-slate-300 text-slate-500"
            }`}
        >
          Next

          <ArrowRight size={18} />
        </button>

      </div>

    </footer>
  );
}