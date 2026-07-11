"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Keyboard,
  Target,
  Clock,
  Award,
} from "lucide-react";

export default function TypingTipsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-600 p-10 text-white shadow-2xl"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Link
              href="/practice/study-material"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/25"
            >
              <ArrowLeft size={16} />
              Back to Study Material
            </Link>

            <span className="mt-8 inline-block rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-100">
              SSC Typing Preparation
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Master Typing Skills
              <br />
              For SSC Exams
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Learn professional typing techniques, increase your typing
              speed, improve accuracy and prepare confidently for SSC
              CGL, CHSL, MTS, CPO, GD and Stenographer typing tests.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">97%+</p>
                <span className="text-sm text-blue-100">
                  Accuracy Goal
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">35+</p>
                <span className="text-sm text-blue-100">
                  Professional Tips
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">15 min</p>
                <span className="text-sm text-blue-100">
                  Reading Time
                </span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[36px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl">

                <Keyboard size={56} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                Typing Tips
              </h2>

              <p className="mt-3 text-center leading-7 text-slate-600">
                Build strong typing habits with official SSC typing
                techniques used by top performers.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target
                    className="mx-auto text-blue-600"
                    size={28}
                  />

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    99%
                  </p>

                  <span className="text-xs text-slate-500">
                    Accuracy
                  </span>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Clock
                    className="mx-auto text-green-600"
                    size={28}
                  />

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    Daily
                  </p>

                  <span className="text-xs text-slate-500">
                    Practice
                  </span>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Award
                    className="mx-auto text-orange-500"
                    size={28}
                  />

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    SSC
                  </p>

                  <span className="text-xs text-slate-500">
                    Standard
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= QUICK OVERVIEW ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >
        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Course Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This guide is specially designed for SSC Typing Test aspirants.
            By completing this lesson, you'll build strong typing habits,
            improve accuracy and develop the confidence required for official
            government typing examinations.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <Keyboard className="text-blue-700" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Touch Typing
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Learn proper finger positioning and type confidently without
              looking at the keyboard.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-green-500 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
              <Target className="text-green-700" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              High Accuracy
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Discover techniques that help maintain 97–99% accuracy during
              official typing examinations.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
              <Clock className="text-orange-600" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Speed Building
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Increase words per minute using structured daily drills and
              progressive typing exercises.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
              <Award className="text-purple-700" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              SSC Ready
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Practice according to the latest SSC typing pattern with
              real-exam strategies and expert recommendations.
            </p>

          </div>

        </div>
      </motion.section>

      {/* ================= WHY TYPING MATTERS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Why Typing Matters
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Typing Is A Scoring Skill
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SSC typing tests are qualifying in nature, but they play a
              crucial role in final selection. Even a highly prepared
              candidate may fail due to poor typing speed or low accuracy.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Developing strong typing habits early helps reduce stress,
              improves confidence and allows you to complete passages within
              the allotted examination time.
            </p>

          </div>

          <div className="rounded-3xl bg-blue-600 p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Success Formula
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Learn Correct Finger Placement
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Focus On Accuracy First
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Practice Every Day
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Attempt Full Mock Tests
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Analyze Mistakes Regularly
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= GOLDEN RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Golden Rules
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            10 Rules Every SSC Aspirant Should Follow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Professional typists don't type faster because they move
            quicker—they type faster because they follow correct habits
            every single day.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {[
            "Always keep fingers on the Home Row keys.",
            "Never look at the keyboard while typing.",
            "Accuracy is more important than speed.",
            "Practice daily for at least 30 minutes.",
            "Maintain proper sitting posture.",
            "Use all ten fingers while typing.",
            "Avoid unnecessary Backspace usage.",
            "Read one word ahead while typing.",
            "Stay relaxed and don't panic.",
            "Analyze mistakes after every mock test.",
          ].map((rule, index) => (

            <div
              key={index}
              className="flex items-start gap-5 rounded-3xl border border-slate-200 p-6 transition hover:border-blue-500 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {index + 1}
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Rule {index + 1}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {rule}
                </p>

              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= COMMON MISTAKES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-red-200 bg-red-50 p-10"
      >

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Avoid These Mistakes
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Common Typing Mistakes
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Looking at Keyboard",
              desc: "Reduces muscle memory and slows typing speed."
            },
            {
              title: "Typing Too Fast",
              desc: "Leads to unnecessary errors and poor accuracy."
            },
            {
              title: "Wrong Finger Placement",
              desc: "Creates bad typing habits and limits speed."
            },
            {
              title: "Poor Sitting Posture",
              desc: "Causes wrist pain and fatigue."
            },
            {
              title: "Ignoring Accuracy",
              desc: "Speed without accuracy is useless in SSC exams."
            },
            {
              title: "Skipping Mock Tests",
              desc: "Practice tests improve confidence and consistency."
            }
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-red-200 bg-white p-8 shadow-sm"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                ❌
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= PRO TIPS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Expert Advice
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Pro Tips From Top Performers
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Practice at the same time every day.",
            "Warm up before attempting mock tests.",
            "Review every mistake after practice.",
            "Focus on consistency rather than speed."
          ].map((tip) => (

            <div
              key={tip}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur"
            >

              <div className="text-4xl">💡</div>

              <p className="mt-5 text-lg leading-8">
                {tip}
              </p>

            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= 30 DAY ROADMAP ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            30-Day Roadmap
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Become Exam Ready In 30 Days
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Follow this structured roadmap to gradually improve speed,
            accuracy and confidence before your SSC typing examination.
          </p>

        </div>

        <div className="mt-14 space-y-8">

          {[
            {
              week: "Week 1",
              color: "bg-blue-600",
              title: "Build Strong Fundamentals",
              desc:
                "Learn finger placement, keyboard familiarity, posture and touch typing basics.",
            },
            {
              week: "Week 2",
              color: "bg-green-600",
              title: "Improve Accuracy",
              desc:
                "Reduce typing mistakes and consistently maintain 95–98% accuracy.",
            },
            {
              week: "Week 3",
              color: "bg-orange-500",
              title: "Increase Speed",
              desc:
                "Practice paragraph typing and timed exercises to increase WPM.",
            },
            {
              week: "Week 4",
              color: "bg-purple-600",
              title: "Mock Test Practice",
              desc:
                "Attempt full SSC typing mock tests and analyze performance reports.",
            },
          ].map((item) => (

            <div
              key={item.week}
              className="flex flex-col gap-6 rounded-3xl border border-slate-200 p-8 transition hover:shadow-xl lg:flex-row lg:items-center"
            >

              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full text-xl font-bold text-white ${item.color}`}
              >
                {item.week}
              </div>

              <div className="flex-1">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= DAILY PRACTICE ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-green-200 bg-green-50 p-10"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Daily Routine
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Recommended Daily Practice Schedule
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

          {[
            {
              time: "5 Min",
              title: "Warm-up",
            },
            {
              time: "10 Min",
              title: "Accuracy",
            },
            {
              time: "10 Min",
              title: "Speed Drill",
            },
            {
              time: "10 Min",
              title: "Paragraph",
            },
            {
              time: "15 Min",
              title: "Mock Test",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {item.time}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= SUCCESS CHECKLIST ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-slate-900 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            Final Checklist
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Before Your SSC Typing Exam
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {[
            "✔ Memorize Home Row Keys",
            "✔ Maintain Proper Posture",
            "✔ Don't Look At Keyboard",
            "✔ Focus On Accuracy",
            "✔ Practice Full Mock Tests",
            "✔ Review Mistakes Daily",
            "✔ Improve Speed Gradually",
            "✔ Stay Calm During Exam",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl bg-white/10 p-6 text-lg backdrop-blur"
            >
              {item}
            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= FINAL SUMMARY ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm"
      >
        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Lesson Summary
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Key Takeaways
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Becoming an excellent typist is not about typing extremely fast on
            the first day. Success comes from consistent practice, proper
            finger placement, high accuracy, and regular mock tests.
            Develop good habits, analyze your mistakes and keep practicing
            every day. With patience and discipline, you can easily achieve
            the typing speed required for SSC examinations.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow">

            <div className="text-5xl">⌨️</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Practice Daily
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Even 30 minutes of focused practice every day produces
              significant improvement.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow">

            <div className="text-5xl">🎯</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Stay Accurate
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              High accuracy always comes before high speed.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow">

            <div className="text-5xl">🏆</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Be Exam Ready
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Complete mock tests regularly to build confidence before the
              official examination.
            </p>

          </div>

        </div>

      </motion.section>

      {/* ================= CTA ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0A4EA3] via-[#1565C0] to-[#1E88E5] p-12 text-white shadow-2xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Ready to Practice?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Put Your Learning Into Practice
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Continue your preparation with real SSC typing passages,
            official mock tests and detailed performance analysis.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/practice"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:scale-105"
            >
              🚀 Start Practice
            </Link>

            <Link
              href="/practice/cgl"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/20"
            >
              📝 Attempt Mock Test
            </Link>

          </div>

        </div>

      </motion.section>

      {/* ================= PAGE NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Back to Study Material
        </Link>

        <Link
          href="/practice/study-material/finger-placement"
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Next Lesson
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}
        