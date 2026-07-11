"use client";

import { BarChart3 } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import AnalyticsOverview from "@/components/analytics/AnalyticsOverview";
import PersonalRecords from "@/components/analytics/PersonalRecords";
import ExamPerformanceTable from "@/components/analytics/ExamPerformanceTable";
import PerformanceChart from "@/components/analytics/PerformanceChart";

import { AnalyticsService } from "@/lib/services/analytics.service";
import { useHistoryStore } from "@/store/history.store"; // 👈 apne actual path ke hisaab se

export default function AnalyticsPage() {
  const history = useHistoryStore((store) => store.history);

  const analytics = AnalyticsService.getAnalytics(history);

  return (
    <main className="space-y-8 bg-slate-50 p-6">
      <PageHeader
        title="Analytics Dashboard"
        description="Track your typing speed, accuracy and overall performance."
        icon={<BarChart3 size={24} />}
      />

      <AnalyticsOverview overview={analytics.overview} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PerformanceChart
            data={analytics.weeklyTrend}
          />
        </div>

        <PersonalRecords
          bestWPM={analytics.overview.bestWPM}
          bestAccuracy={analytics.overview.bestAccuracy}
          totalTests={analytics.overview.totalTests}
          totalPracticeTime={analytics.overview.totalPracticeTime}
        />
      </div>

      <ExamPerformanceTable
        data={analytics.examPerformance}
      />
    </main>
  );
}