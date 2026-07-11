"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", wpm: 28 },
  { day: "Tue", wpm: 32 },
  { day: "Wed", wpm: 35 },
  { day: "Thu", wpm: 38 },
  { day: "Fri", wpm: 41 },
  { day: "Sat", wpm: 43 },
  { day: "Sun", wpm: 45 },
];

export default function DashboardPreview() {
  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold">
            Analytics Dashboard
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Track Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Progress
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Monitor typing speed, accuracy, test history and
            performance trends with powerful analytics.
          </p>

        </div>

        {/* Dashboard Card */}

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          shadow-[0_0_60px_rgba(0,0,0,0.4)]
        "
        >

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
              <p className="text-slate-400">Current WPM</p>
              <h3 className="text-5xl font-black text-blue-400 mt-2">
                42
              </h3>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
              <p className="text-slate-400">Accuracy</p>
              <h3 className="text-5xl font-black text-green-400 mt-2">
                97%
              </h3>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <p className="text-slate-400">Errors</p>
              <h3 className="text-5xl font-black text-orange-400 mt-2">
                3
              </h3>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
              <p className="text-slate-400">Tests Taken</p>
              <h3 className="text-5xl font-black text-purple-400 mt-2">
                128
              </h3>
            </div>

          </div>

          {/* Chart */}

          <div className="mt-10 bg-slate-900/60 rounded-3xl p-6 border border-white/10">

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-2xl font-bold">
                Weekly WPM Growth
              </h3>

              <span className="text-cyan-400 font-semibold">
                +17% Improvement
              </span>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="wpm"
                  stroke="#22d3ee"
                  strokeWidth={5}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* Recent Tests */}

          <div className="mt-10">

            <h3 className="text-2xl font-bold text-white mb-5">
              Recent Tests
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
                <span className="text-slate-300">
                  SSC CGL Practice Set 1
                </span>

                <span className="text-cyan-400 font-bold">
                  41 WPM
                </span>
              </div>

              <div className="flex justify-between items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
                <span className="text-slate-300">
                  SSC CGL Practice Set 2
                </span>

                <span className="text-cyan-400 font-bold">
                  43 WPM
                </span>
              </div>

              <div className="flex justify-between items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
                <span className="text-slate-300">
                  SSC CHSL Mock Test
                </span>

                <span className="text-cyan-400 font-bold">
                  45 WPM
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}