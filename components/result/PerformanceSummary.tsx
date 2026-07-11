"use client";
import { useResultStore } from "@/store/result.store";
import {
  CheckCircle2,
  Target,
  Lightbulb,
} from "lucide-react";


export default function PerformanceSummary() {

  const {
    accuracy,
    netWPM,
    resultStatus,
  } = useResultStore();

  const getPerformance = () => {
   if (accuracy >= 98 && netWPM >= 45)
      return {
        grade: "A+",
        title: "Outstanding",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        ring: "bg-green-600",
        stars: 5,
        message:
          "Exceptional typing performance with near-perfect accuracy.",
      };
if (accuracy >= 95 && netWPM >= 35)
      return {
        grade: "A",
        title: "Excellent",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        ring: "bg-emerald-600",
        stars: 5,
        message:
          "Excellent performance. Maintain this consistency.",
      };

    if (accuracy >= 90 && netWPM >= 30)
      return {
        grade: "B+",
        title: "Very Good",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        ring: "bg-blue-600",
        stars: 4,
        message:
          "Very good accuracy with minor typing mistakes.",
      };

    if (accuracy >= 85 && netWPM >= 25)
      return {
        grade: "B",
        title: "Good",
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-200",
        ring: "bg-sky-600",
        stars: 4,
        message:
          "Good performance. More practice will improve speed and precision.",
      };

    if (accuracy >= 80)
      return {
        grade: "C",
        title: "Average",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        ring: "bg-amber-500",
        stars: 3,
        message:
          "Average performance. Focus on reducing typing mistakes.",
      };

    return {
      grade: "D",
      title: "Needs Improvement",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      ring: "bg-red-600",
      stars: 2,
      message:
        "Practice regularly to improve your typing accuracy.",
    };
  };
 
const readiness = Math.min(
  100,
  Math.round((netWPM / 35) * 100)
);

const suggestions = [];

if (accuracy < 95)
  suggestions.push("Improve accuracy above 95%.");

if (netWPM < 35)
  suggestions.push("Increase typing speed by 5-10 WPM.");

if (accuracy >= 95)
  suggestions.push("Excellent accuracy. Maintain consistency.");

if (netWPM >= 35)
  suggestions.push("You are close to SSC Skill Test level.");

suggestions.push("Practice daily for 15 minutes.");
  const performance = getPerformance();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Performance Rating
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overall typing assessment
          </p>
        </div>

        <div
          className={`rounded-full border px-4 py-1 text-sm font-semibold ${performance.bg} ${performance.border} ${performance.color}`}
        >
          {performance.title}
          <p className="mt-1 text-xs font-medium text-slate-500">
  {resultStatus === "PASS"
    ? "Qualified for SSC Skill Test"
    : "Needs More Practice"}
</p>
        </div>
      </div>

      {/* Grade */}

      <div className="flex flex-col items-center">

        <div
          className={`flex h-32 w-32 items-center justify-center rounded-full border-8 border-slate-100 text-6xl font-black shadow-inner ${performance.color}`}
        >
          {performance.grade}
        </div>

        {/* Stars */}

        <div className="mt-6 flex gap-1 text-3xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= performance.stars
                  ? "text-yellow-400"
                  : "text-slate-300"
              }
            >
              ★
            </span>
          ))}
        </div>

        {/* Accuracy */}

        <div className="mt-6 text-center">
          <div className="text-4xl font-bold text-slate-800">
            {accuracy}%
          </div>

          <div className="mt-1 text-sm text-slate-500">
            Accuracy Score
          </div>
        </div>

        {/* Progress */}

        <div className="mt-6 w-full">
          <div className="mb-2 flex justify-between text-sm text-slate-600">
            <span>Performance</span>
            <span>{accuracy}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`${performance.ring} h-full rounded-full transition-all duration-1000`}
              style={{
                width: `${accuracy}%`,
              }}
            />
          </div>
        </div>

        {/* Message */}

        <div
          className={`mt-8 w-full rounded-xl border p-5 ${performance.bg} ${performance.border}`}
        >
          <p
            className={`text-center text-base font-semibold ${performance.color}`}
          >
            {performance.message}
          </p>
        </div>
        {/* Today's Suggestions */}

<div className="mt-6 w-full rounded-xl border border-amber-200 bg-amber-50 p-5">

  <div className="mb-4 flex items-center gap-2">

    <Lightbulb
      size={20}
      className="text-amber-600"
    />

    <h3 className="font-bold text-amber-700">
      Today's Suggestions
    </h3>

  </div>

  <div className="space-y-3">

    {suggestions.map((item) => (
      <div
        key={item}
        className="flex items-center gap-3"
      >
        <CheckCircle2
          size={18}
          className="text-green-600"
        />

        <span className="text-sm text-slate-700">
          {item}
        </span>
      </div>
    ))}

  </div>

</div>

{/* SSC Readiness */}

<div className="mt-6 w-full rounded-xl border border-blue-200 bg-blue-50 p-5">

  <div className="mb-4 flex items-center justify-between">

    <div className="flex items-center gap-2">

      <Target
        size={20}
        className="text-blue-600"
      />

      <h3 className="font-bold text-blue-700">
        SSC Skill Test Readiness
      </h3>

    </div>

    <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
      {readiness}%
    </span>

  </div>

  <div className="h-3 overflow-hidden rounded-full bg-blue-100">

    <div
      className="h-full rounded-full bg-blue-600 transition-all duration-700"
      style={{
        width: `${readiness}%`,
      }}
    />

  </div>

  <p className="mt-4 text-sm text-slate-600">

    {readiness >= 100
      ? "Excellent! You are ready for the SSC Skill Test."
      : `You need approximately ${
          Math.max(
            0,
            35 - netWPM
          ).toFixed(1)
        } more WPM to reach the SSC qualifying benchmark.`}

  </p>

</div>
      </div>
    </div>
  );
}