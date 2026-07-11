"use client";

import Link from "next/link";
import {
  Trophy,
  Medal,
  Target,
  Clock3,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

const milestones = [
  {
    title: "Complete Your First Typing Test",
    description: "Finish your first SSC typing test.",
    icon: CheckCircle2,
  },
  {
    title: "Reach 35 WPM",
    description: "Achieve the minimum SSC qualifying speed.",
    icon: Target,
  },
  {
    title: "Reach 95% Accuracy",
    description: "Improve your typing accuracy.",
    icon: Trophy,
  },
  {
    title: "Complete 10 Mock Tests",
    description: "Practice consistently.",
    icon: Medal,
  },
  {
    title: "Practice for 5 Hours",
    description: "Build speed through regular practice.",
    icon: Clock3,
  },
];

const rewards = [
  {
    title: "Bronze Typist",
    icon: "🥉",
  },
  {
    title: "Silver Typist",
    icon: "🥈",
  },
  {
    title: "Gold Typist",
    icon: "🥇",
  },
  {
    title: "SSC Master",
    icon: "👑",
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-white shadow-xl">

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-100">
            SSC Typing Hub
          </p>

          <h1 className="text-5xl font-bold">
            Achievements
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Complete typing tests, improve your speed and
            accuracy, unlock achievements, earn rewards and
            track your SSC typing journey.
          </p>

        </div>

        {/* Empty State */}

        <div className="rounded-3xl bg-white p-12 shadow-sm">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-5xl">
              🏆
            </div>

            <h2 className="mt-8 text-4xl font-bold text-slate-900">
              No Achievements Yet
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              You haven't completed any typing tests yet.
              Complete your first SSC typing test to unlock
              badges, rewards and performance milestones.
            </p>

            <Link
              href="/practice/cgl"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Start First Test

              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

        {/* Roadmap */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            Your Achievement Roadmap
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            {milestones.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500"
                >
                  <div className="rounded-xl bg-blue-100 p-3">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Rewards */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            Upcoming Rewards
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {rewards.map((reward) => (

              <div
                key={reward.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:border-blue-500 hover:bg-blue-50"
              >

                <div className="text-6xl">
                  {reward.icon}
                </div>

                <h4 className="mt-5 text-lg font-semibold text-slate-900">
                  {reward.title}
                </h4>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
                  <Lock size={16} />

                  Locked
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </main>
  );
}