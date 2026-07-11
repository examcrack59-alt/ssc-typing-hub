import { Suspense } from "react";
import TypingRoot from "@/components/typing/TypingRoot";

export default function TypingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-700">
              Loading Typing Engine...
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Preparing typing test...
            </p>
          </div>
        </div>
      }
    >
      <TypingRoot />
    </Suspense>
  );
}