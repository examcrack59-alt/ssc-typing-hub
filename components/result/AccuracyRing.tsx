"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  SkipForward,
  Delete,
  Keyboard,
} from "lucide-react";

import { useResultStore } from "@/store/result.store";

interface Props {
  accuracy: number;
}

export default function AccuracyRing({
  accuracy,
}: Props) {
  const [displayAccuracy, setDisplayAccuracy] =
    useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      if (start >= accuracy) {
        start = accuracy;
        clearInterval(timer);
      }

      setDisplayAccuracy(start);
    }, 15);

    return () => clearInterval(timer);
  }, [accuracy]);

  const radius = 90;
  const stroke = 12;

  const normalizedRadius =
    radius - stroke * 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (displayAccuracy / 100) *
      circumference;

  const getStatus = () => {
    if (accuracy >= 98)
      return {
        text: "Excellent",
        color: "text-green-600",
      };

    if (accuracy >= 95)
      return {
        text: "Very Good",
        color: "text-emerald-600",
      };

    if (accuracy >= 90)
      return {
        text: "Good",
        color: "text-blue-600",
      };

    if (accuracy >= 80)
      return {
        text: "Average",
        color: "text-amber-500",
      };

    return {
      text: "Needs Improvement",
      color: "text-red-500",
    };
  };

  const status = getStatus();
  const {
  correctCharacters,
  incorrectCharacters,
  skippedCharacters,
  backspaceCount,
} = useResultStore();

const totalTypedCharacters =
  correctCharacters + incorrectCharacters;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Accuracy
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overall typing precision
          </p>
        </div>

        <span
          className={`rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold ${status.color}`}
        >
          {status.text}
        </span>

      </div>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            width={radius * 2}
            height={radius * 2}
          >
            <defs>
              <linearGradient
                id="accuracyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#2563EB"
                />

                <stop
                  offset="100%"
                  stopColor="#0A4EA3"
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur
                  stdDeviation="4"
                  result="coloredBlur"
                />

                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Ring */}

            <circle
              stroke="#E5E7EB"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Progress Ring */}

            <circle
              stroke="url(#accuracyGradient)"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              filter="url(#glow)"
              style={{
                transition:
                  "stroke-dashoffset 0.8s ease",
              }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
            />

            {/* Inner Circle */}

            <circle
              cx={radius}
              cy={radius}
              r="54"
              fill="#F8FAFC"
            />

            {/* Percentage */}

            <text
              x="50%"
              y="48%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="fill-slate-900 text-4xl font-bold"
            >
              {displayAccuracy}%
            </text>

            <text
              x="50%"
              y="64%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="fill-slate-500 text-sm"
            >
              Accuracy
            </text>

          </svg>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm text-slate-600">
          <span>Typing Quality</span>
          <span>{accuracy}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-[#0A4EA3] transition-all duration-1000"
            style={{
              width: `${accuracy}%`,
            }}
          />

        </div>
{/* Detailed Statistics */}

<div className="mt-8 border-t border-dashed pt-6">

  <div className="mb-5 flex items-center gap-2">

    <Keyboard
      size={20}
      className="text-blue-600"
    />

    <h3 className="font-bold text-slate-800">
      Detailed Statistics
    </h3>

  </div>

  <div className="space-y-3">

    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">

      <div className="flex items-center gap-3">

        <CheckCircle2
          size={20}
          className="text-green-600"
        />

        <span>Correct Characters</span>

      </div>

      <strong>{correctCharacters}</strong>

    </div>

    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">

      <div className="flex items-center gap-3">

        <XCircle
          size={20}
          className="text-red-600"
        />

        <span>Incorrect Characters</span>

      </div>

      <strong>{incorrectCharacters}</strong>

    </div>

    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">

      <div className="flex items-center gap-3">

        <SkipForward
          size={20}
          className="text-amber-600"
        />

        <span>Skipped Characters</span>

      </div>

      <strong>{skippedCharacters}</strong>

    </div>

    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">

      <div className="flex items-center gap-3">

        <Delete
          size={20}
          className="text-purple-600"
        />

        <span>Backspace Count</span>

      </div>

      <strong>{backspaceCount}</strong>

    </div>

    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">

      <div className="flex items-center gap-3">

        <Keyboard
          size={20}
          className="text-blue-600"
        />

        <span>Total Typed Characters</span>

      </div>

      <strong>{totalTypedCharacters}</strong>

    </div>

  </div>

</div>

{/* Bottom Highlight */}

<div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">

  <h3 className="text-lg font-bold text-blue-700">

    {accuracy >= 95
      ? "🎯 Great Accuracy!"
      : accuracy >= 90
      ? "👍 Good Performance!"
      : "💪 Keep Practicing!"}

  </h3>

  <p className="mt-2 text-sm leading-6 text-slate-700">

    {accuracy >= 95
      ? "You are maintaining excellent typing precision. Keep it up!"
      : accuracy >= 90
      ? "Your accuracy is good. Focus on improving speed while maintaining consistency."
      : "Practice daily and reduce typing mistakes to improve your overall score."}

  </p>

</div>
      </div>

    </div>
  );
}