"use client";

import { useState } from "react";

import PracticeLayout from "../components/PracticeLayout";
import Header from "../components/Header";

import TestSeriesLayout from "./components/TestSeriesLayout";
import RightSidebar from "./components/RightSidebar";
import ExamHeader from "./components/ExamHeader";
import SuggestedTestCard from "./components/SuggestedTestCard";
import TestTabs from "./components/TestTabs";
import TestList from "./components/TestList";

import type { ExamType } from "@/data/tests";

import {
  getExamTests,
  getTotalTests,
} from "@/lib/exams/getExamTests";

import { useTestProgressStore } from "@/store/testProgress.store";

interface ExamPageClientProps {
  exam: {
    name: string;
    slug: string;
  };
}

export default function ExamPageClient({
  exam,
}: ExamPageClientProps) {
  const [activeTab, setActiveTab] = useState("all");

  // -----------------------------
  // Centralized Test Data
  // -----------------------------

  const tests = getExamTests(exam.slug);
  const totalTests = getTotalTests(exam.slug);

  const tabCounts = {
    all: tests.length,

    mock: tests.filter(
      (test) => test.category === "mock"
    ).length,

    "re-exam": tests.filter(
      (test) => test.category === "re-exam"
    ).length,

    practice: tests.filter(
      (test) => test.category === "practice"
    ).length,
  };

  const filteredTests =
    activeTab === "all"
      ? tests
      : tests.filter(
          (test) => test.category === activeTab
        );

  const suggestedTest = tests[0];

  // -----------------------------
  // Progress Data
  // -----------------------------

  const completedTests = useTestProgressStore((state) =>
    state.getCompletedCount(exam.slug)
  );

  const attemptedTests = useTestProgressStore((state) =>
    state.getAttemptedCount(exam.slug)
  );

  const bestWpm = useTestProgressStore((state) =>
    state.getBestWpm(exam.slug)
  );

  const averageAccuracy = useTestProgressStore((state) =>
    state.getAverageAccuracy(exam.slug)
  );

  return (
    <PracticeLayout>
      <Header />

      <main className="min-h-screen bg-slate-100 p-8">
        <div className="mx-auto max-w-[1500px]">

          {/* Exam Header */}

          <ExamHeader
            title={exam.name}
            totalTests={totalTests}
            completedTests={completedTests}
            freeTests={2}
            users="275.8K"
            language="English"
          />

          {/* Suggested Test */}

          <div className="mt-8">
            {suggestedTest && (
              <SuggestedTestCard
                title={suggestedTest.title}
                questions={suggestedTest.questions}
                duration={`${suggestedTest.duration} Minutes`}
                language={suggestedTest.language}
                users={suggestedTest.users}
                href={`/practice/${exam.slug}/instructions?test=${suggestedTest.id}`}
              />
            )}
          </div>

          {/* Tabs */}

          <div className="mt-8">
            <TestTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              counts={tabCounts}
            />
          </div>

          {/* Test Series */}

          <TestSeriesLayout
            left={
              <TestList
                exam={exam.slug as ExamType}
                tests={filteredTests}
              />
            }
            right={<RightSidebar />}
          />
        </div>
      </main>
    </PracticeLayout>
  );
}