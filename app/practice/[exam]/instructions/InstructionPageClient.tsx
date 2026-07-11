"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InstructionHeader from "./components/InstructionHeader";
import CandidatePanel from "./components/CandidatePanel";
import InstructionContent from "./components/InstructionContent";
import InstructionFooter from "./components/InstructionFooter";

import { getTestById } from "@/lib/exams/getExamTests";

interface InstructionPageClientProps {
  exam: string;
  test: string;
}

export default function InstructionPageClient({
  exam,
  test,
}: InstructionPageClientProps) {
  const [accepted, setAccepted] = useState(false);

  const router = useRouter();

  // Get selected test from centralized test data
  const currentTest = getTestById(exam, Number(test));

  const handleNext = () => {
    router.push(
      `/typing?exam=${exam.toLowerCase()}&id=${test}`
    );
  };

  if (!currentTest) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#eef3f8]">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-red-600">
            Test not found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            The selected typing test could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-[#eef3f8]">
      {/* Header */}

      <InstructionHeader
        testName={currentTest.title}
      />

      {/* Body */}

      <div className="flex flex-1 overflow-hidden">
        <InstructionContent
  accepted={accepted}
  onAcceptedChange={setAccepted}
/>

        <CandidatePanel
          name="Demo User"
          exam={exam.toUpperCase()}
          language={currentTest.language}
        />
      </div>

      {/* Footer */}

      <InstructionFooter
        exam={exam}
        accepted={accepted}
        onAcceptedChange={setAccepted}
        onNext={handleNext}
      />
    </div>
  );
}