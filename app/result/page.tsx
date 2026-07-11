"use client";

import { useResultStore } from "@/store/result.store";

import ResultHeader from "@/components/result/ResultHeader";
import ScoreCards from "@/components/result/ScoreCards";
import AccuracyRing from "@/components/result/AccuracyRing";
import StatisticsTable from "@/components/result/StatisticsTable";
import PerformanceSummary from "@/components/result/PerformanceSummary";
import RecommendationCard from "@/components/result/RecommendationCard";
import ResultActions from "@/components/result/ResultActions";

export default function ResultPage() {
  const {
    exam,
    difficulty,
    testId,
    totalTime,
    accuracy,
  } = useResultStore();

  const duration = `${Math.floor(totalTime / 60)} Min`;

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">

        <ResultHeader
          exam={exam}
          difficulty={difficulty}
          testId={testId}
          candidate="Guest User"
          duration={duration}
        />

        <ScoreCards />

        <div className="grid gap-8 xl:grid-cols-2">

          <AccuracyRing accuracy={accuracy} />

          <PerformanceSummary />

        </div>

        <StatisticsTable />

        <RecommendationCard />

        <ResultActions />

      </div>

    </main>
  );
}