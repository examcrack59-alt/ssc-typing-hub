"use client";
import Image from "next/image";

import {
  Share2,
  Users,
  Globe,
  Trophy,
  Target,
  BarChart3,
} from "lucide-react";

interface ExamHeaderProps {
  title: string;

  totalTests: number;

  completedTests: number;

  freeTests: number;

  users: string;

  language: string;

  attemptedTests?: number;

  bestWpm?: number;

  averageAccuracy?: number;
}

export default function ExamHeader({
  title,
  totalTests,
  completedTests,
  freeTests,
  users,
  language,
  attemptedTests = 0,
  bestWpm = 0,
  averageAccuracy = 0,
}: ExamHeaderProps) {
  const progress =
    totalTests === 0
      ? 0
      : Math.round(
          (completedTests / totalTests) * 100
        );
const examLogos: Record<string, string> = {
  "SSC CGL": "/logos/ssc1.png",
  "SSC CHSL": "/logos/ssc1.png",
  "SSC MTS": "/logos/ssc1.png",
  "SSC GD": "/logos/ssc1.png",
  "SSC CPO": "/logos/ssc1.png",
  "SSC STENOGRAPHER": "/logos/ssc1.png",
};

const logo =
  examLogos[title.toUpperCase()] ?? "/logo.png";
  return ( 
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-8 shadow-sm">
      {/* Breadcrumb */}

      <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <span>Home</span>

        <span>/</span>

        <span className="font-medium text-blue-600">
          {title}
        </span>
      </div>

      {/* Title */}

      <h1 className="text-5xl font-bold text-slate-900">
        {title}
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left */}

        <div>
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold">
              {totalTests}
            </h3>

            <span className="text-lg text-slate-600">
              Total Tests
            </span>

            <span className="rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white">
              {freeTests} FREE
            </span>
          </div>

          {/* Progress */}

          <div className="mt-6">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-sm text-slate-500">
              <span>
                {completedTests}/{totalTests}
                {" "}Completed
              </span>

              <span>{progress}%</span>
            </div>
          </div>

          <button className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium shadow-sm transition hover:bg-slate-50">
            <Share2 size={18} />

            Share
          </button>
        </div>

        {/* Center */}

        <div className="border-x border-slate-200 px-8">
          <p className="font-semibold text-blue-600">
            Performance
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <Users size={18} />

              {users}
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <Globe size={18} />

              {language}
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <BarChart3 size={18} />

              Attempted :
              <strong>{attemptedTests}</strong>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <Trophy size={18} />

              Best WPM :
              <strong>{bestWpm}</strong>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <Target size={18} />

              Avg Accuracy :
              <strong>
                {averageAccuracy}%
              </strong>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-center">
             <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl ring-8 ring-white/40">
  <Image
    src={logo}
    alt={title}
    width={95}
    height={95}
    className="rounded-full object-cover"
    priority
  />
</div>

<h3 className="mt-4 text-xl font-bold text-slate-900">
  {title}
</h3>

<p className="mt-2 text-sm text-slate-500">
  Official Typing Practice
</p>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">
                  Completion
                </p>

                <p className="mt-1 text-3xl font-bold text-blue-600">
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}