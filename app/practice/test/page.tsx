import { Suspense } from "react";
import PracticeTestPageClient from "./PracticeTestPageClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
          Loading...
        </div>
      }
    >
      <PracticeTestPageClient />
    </Suspense>
  );
}