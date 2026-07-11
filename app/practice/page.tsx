"use client";

import PracticeLayout from "./components/PracticeLayout";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
 import RecentActivity from "./components/RecentActivity";
import StatsCards from "./components/StatsCards";
import ExamGrid from "./components/ExamGrid";
import QuickActions from "./components/QuickActions";

export default function PracticePage() {
  return (
    <PracticeLayout>
      <Header />

      <main className="space-y-8 p-8">
        {/* Hero */}
        <HeroBanner />

        {/* Stats */}
        <StatsCards />

        {/* Recent Activity */}
<RecentActivity />

        {/* Exam Grid */}
    
        <ExamGrid />

        {/* Quick Actions */}
        <QuickActions />

      </main>
    </PracticeLayout>
  );
}