"use client";

import { motion } from "framer-motion";

const history = [
  {
    exam: "SSC CGL",
    wpm: 43,
    accuracy: "98%",
    color: "bg-cyan-400",
  },
  {
    exam: "SSC CHSL",
    wpm: 47,
    accuracy: "97%",
    color: "bg-emerald-400",
  },
  {
    exam: "SSC Steno",
    wpm: 51,
    accuracy: "99%",
    color: "bg-violet-400",
  },
];

const bars = [30, 45, 55, 65, 82, 95, 75];

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-white/[0.04]
          p-8
          backdrop-blur-3xl
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
        "
      >
        {/* Top */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-400">
              Live Dashboard
            </p>

            <h2 className="mt-1 text-3xl font-black text-white">
              Typing Analytics
            </h2>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 border border-emerald-500/20">

            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm font-semibold text-emerald-300">
              LIVE
            </span>

          </div>

        </div>

        {/* Score */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <StatCard
            title="WPM"
            value="46"
            color="text-cyan-400"
          />

          <StatCard
            title="Accuracy"
            value="98%"
            color="text-emerald-400"
          />

          <StatCard
            title="Errors"
            value="2"
            color="text-orange-400"
          />

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="mb-3 flex justify-between">

            <span className="text-slate-400">
              Today's Progress
            </span>

            <span className="text-cyan-300">
              82%
            </span>

          </div>

          <div className="h-4 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{
                duration: 1.6,
                delay: 0.5,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-violet-500
              "
            />

          </div>

        </div>

        {/* Weekly Chart */}

        <div className="mt-12">

          <h3 className="text-lg font-bold text-white">
            Weekly WPM
          </h3>

          <div className="mt-6 flex h-44 items-end gap-3">

            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  delay: i * 0.08,
                }}
                className="
                  flex-1
                  rounded-t-2xl
                  bg-gradient-to-t
                  from-blue-600
                  via-cyan-500
                  to-cyan-300
                  shadow-[0_0_25px_rgba(34,211,238,.35)]
                "
              />
            ))}

          </div>

        </div>

        {/* History */}

        <div className="mt-12">

          <div className="flex items-center justify-between">

            <h3 className="text-lg font-bold text-white">
              Recent Tests
            </h3>

            <span className="text-cyan-300 text-sm">
              Last 3 Attempts
            </span>

          </div>

          <div className="mt-5 space-y-4">

            {history.map((item) => (

              <div
                key={item.exam}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`h-3 w-3 rounded-full ${item.color}`}
                  />

                  <div>

                    <p className="font-semibold text-white">
                      {item.exam}
                    </p>

                    <p className="text-sm text-slate-400">
                      Accuracy {item.accuracy}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-black text-cyan-400">
                    {item.wpm}
                  </p>

                  <p className="text-xs text-slate-400">
                    WPM
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-cyan-500/20
            bg-gradient-to-r
            from-cyan-500/10
            via-blue-500/10
            to-violet-500/10
            p-5
          "
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-white font-bold">
                Ready for SSC Exam
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Your typing speed is improving consistently.
              </p>

            </div>

            <div className="text-5xl">
              🚀
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        text-center
      "
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className={`mt-2 text-4xl font-black ${color}`}>
        {value}
      </h3>
    </div>
  );
}