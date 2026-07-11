"use client";

import { useState } from "react";

const examSeries = [
  "SSC CGL Mock Test",
  "SSC CHSL Mock Test",
  "SSC MTS Mock Test",
  "SSC GD Mock Test",
  "SSC CPO Mock Test",
  "SSC STENO Mock Test",
  "SSC JE Mock Test",
  "SSC Selection Post Mock Test",
  "Railway Mock Test",
  "Banking Mock Test",
  "Delhi Police Mock Test",
  "SSC Phase XII Mock Test",
];

export default function RightSidebar() {
  const [expanded, setExpanded] = useState(false);

  const visibleSeries = expanded
    ? examSeries
    : examSeries.slice(0, 4);

  return (
    <div className="space-y-6">

      {/* Recommended */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold">
          More Test Series
        </h2>

        <div
          className={`mt-5 overflow-hidden transition-all duration-500 ${
            expanded ? "max-h-[1500px]" : "max-h-[420px]"
          }`}
        >
          <div className="space-y-5">
            {visibleSeries.map((item) => (
              <div
                key={item}
                className="border-b pb-4 last:border-none"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  42 Tests • 2 Free Tests
                </p>
              </div>
            ))}
          </div>
        </div>

        {examSeries.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 w-full rounded-xl border border-blue-500 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        )}

      </div>

      {/* Why Choose */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold">
          Why Take this Test Series?
        </h2>

        <div className="mt-6 space-y-6">

          <div>
            <h3 className="font-semibold">
              🏆 All India Rank
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Compete with thousands of SSC aspirants.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              💬 Personal Recommendation
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Practice according to your weak areas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ⭐ Latest Pattern
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Designed according to latest SSC pattern.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}