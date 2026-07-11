"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Trophy,
  Gauge,
  Target,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import type { AnalyticsOverview as AnalyticsOverviewType } from "@/lib/services/analytics.service";
import StatCard from "@/components/ui/StatCard";

interface AnalyticsOverviewProps {
  overview: AnalyticsOverviewType;
}

type CardItem = {
  title: string;
  value: string | number;
  subtitle: string;
  accent: "blue" | "green" | "purple" | "orange" | "red";
  icon: LucideIcon;
};

export default function AnalyticsOverview({
  overview,
}: AnalyticsOverviewProps) {
  const cards: CardItem[] = [
    {
      title: "Total Tests",
      value: overview.totalTests,
      subtitle: "Completed Tests",
      accent: "blue",
      icon: BarChart3,
    },
    {
      title: "Best WPM",
      value: overview.bestWPM,
      subtitle: "Personal Best",
      accent: "purple",
      icon: Trophy,
    },
    {
      title: "Average WPM",
      value: overview.averageWPM,
      subtitle: "Overall Speed",
      accent: "blue",
      icon: Gauge,
    },
    {
      title: "Best Accuracy",
      value: `${overview.bestAccuracy}%`,
      subtitle: "Highest Accuracy",
      accent: "green",
      icon: Target,
    },
    {
      title: "Average Accuracy",
      value: `${overview.averageAccuracy}%`,
      subtitle: "Overall Accuracy",
      accent: "green",
      icon: CheckCircle2,
    },
    {
      title: "Pass Rate",
      value: `${overview.passRate}%`,
      subtitle: "Tests Passed",
      accent: "orange",
      icon: CheckCircle2,
    },
    {
      title: "Practice Time",
      value: `${overview.totalPracticeTime} min`,
      subtitle: "Total Practice Time",
      accent: "red",
      icon: Clock3,
    },
  ];

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Performance Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your overall typing performance at a glance.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <StatCard
                title={card.title}
                value={card.value}
                subtitle={card.subtitle}
                accent={card.accent}
                icon={<Icon size={22} />}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}