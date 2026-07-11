"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  CheckCircle2,
  Crosshair,
  TrendingUp,
  Award,
} from "lucide-react";

export default function AccuracyGuidePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-700 via-green-600 to-teal-500 p-10 text-white shadow-2xl"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <Link
              href="/practice/study-material/rules"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              Previous Lesson
            </Link>

            <span className="mt-8 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Lesson 4 • Accuracy Guide
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Accuracy
              <br />
              Is Everything
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100">
              In SSC Typing Tests, accuracy is more valuable than raw
              speed. Learn how to reduce mistakes, build consistency,
              and maintain professional typing quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  98%
                </p>
                <span className="text-sm text-green-100">
                  Target Accuracy
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  0
                </p>
                <span className="text-sm text-green-100">
                  Avoidable Errors
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  15 Min
                </p>
                <span className="text-sm text-green-100">
                  Reading Time
                </span>
              </div>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative rounded-[34px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white">

                <Target size={60} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                Accuracy First
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Professional typists always focus on correct typing
                before increasing speed.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target className="mx-auto text-green-600" size={28} />

                  <p className="mt-2 font-bold text-slate-900">
                    Accuracy
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <TrendingUp className="mx-auto text-blue-600" size={28} />

                  <p className="mt-2 font-bold text-slate-900">
                    Progress
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Award className="mx-auto text-orange-500" size={28} />

                  <p className="mt-2 font-bold text-slate-900">
                    Success
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= LESSON OVERVIEW ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Lesson Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn why accuracy is the foundation of touch typing,
            understand common typing mistakes, discover professional
            correction techniques, and build habits that help you
            consistently achieve high scores in SSC typing tests.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Target,
              title: "Reduce Errors",
              desc: "Identify and eliminate common typing mistakes."
            },
            {
              icon: Crosshair,
              title: "Improve Focus",
              desc: "Develop concentration while typing."
            },
            {
              icon: CheckCircle2,
              title: "Correct Technique",
              desc: "Build professional typing habits."
            },
            {
              icon: TrendingUp,
              title: "Consistent Growth",
              desc: "Increase both accuracy and confidence."
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <Icon
                    className="text-green-700"
                    size={30}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </motion.section>

      {/* ================= WHY ACCURACY MATTERS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Why Accuracy?
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Accuracy Wins Exams
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Many candidates focus only on typing faster, but SSC typing
              tests reward candidates who type correctly. A slightly lower
              speed with excellent accuracy is usually better than a very
              high speed with frequent mistakes.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Consistent accuracy builds confidence, improves typing rhythm
              and naturally increases speed over time.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-teal-500 p-8 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Benefits of High Accuracy
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Higher SSC Scores
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Confidence
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Fewer Corrections
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Smooth Typing Flow
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Long-Term Speed Improvement
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= COMMON ACCURACY MISTAKES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-red-200 bg-red-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Common Mistakes
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Mistakes That Reduce Accuracy
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Even experienced typists lose marks because of these simple
            mistakes. Identifying them early helps you improve much faster.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Looking at Keyboard",
              desc: "Breaks concentration and prevents muscle memory."
            },
            {
              title: "Typing Too Fast",
              desc: "Speed without control increases mistakes."
            },
            {
              title: "Wrong Finger Usage",
              desc: "Using incorrect fingers causes inconsistency."
            },
            {
              title: "Ignoring Punctuation",
              desc: "Missing commas and periods reduces accuracy."
            },
            {
              title: "Extra Spaces",
              desc: "Multiple spaces create unnecessary errors."
            },
            {
              title: "Poor Focus",
              desc: "Losing concentration increases typing mistakes."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-red-200 bg-white p-8 transition hover:shadow-xl"
            >

              <div className="mb-5 text-5xl">
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

      {/* ================= ACCURACY VS SPEED ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Comparison
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Accuracy vs Speed
          </h2>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-3xl font-bold text-green-700">
              ✅ High Accuracy
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white p-5">
                40 WPM • 99% Accuracy
              </div>

              <div className="rounded-2xl bg-white p-5">
                Fewer Corrections
              </div>

              <div className="rounded-2xl bg-white p-5">
                Better Final Score
              </div>

              <div className="rounded-2xl bg-white p-5">
                Consistent Performance
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

            <h3 className="text-3xl font-bold text-red-700">
              ❌ High Speed Only
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white p-5">
                55 WPM • 87% Accuracy
              </div>

              <div className="rounded-2xl bg-white p-5">
                Frequent Errors
              </div>

              <div className="rounded-2xl bg-white p-5">
                Lower Overall Marks
              </div>

              <div className="rounded-2xl bg-white p-5">
                Inconsistent Typing
              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= DAILY DRILLS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-green-600 to-emerald-500 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Daily Accuracy Drills
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Practice Every Day
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">

          {[
            {
              time: "5 Min",
              title: "Home Row"
            },
            {
              time: "5 Min",
              title: "Word Practice"
            },
            {
              time: "10 Min",
              title: "Paragraph"
            },
            {
              time: "5 Min",
              title: "Review"
            },
            {
              time: "5 Min",
              title: "Mock Test"
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-4xl font-bold">
                {item.time}
              </div>

              <p className="mt-4 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= ACCURACY DRILLS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Practice Exercises
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Accuracy Building Exercises
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "the quick brown fox jumps over the lazy dog",
            "practice makes a person perfect",
            "accuracy is more important than speed",
            "government of india ministry of education",
            "typing consistently improves confidence",
            "ssc typing examination practice",
            "maintain correct finger placement",
            "focus on every single word",
          ].map((line) => (

            <div
              key={line}
              className="rounded-2xl bg-slate-900 p-6 font-mono text-lg text-green-400 shadow-lg"
            >
              {line}
            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= PROFESSIONAL TECHNIQUES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Professional Techniques
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            How Top Typists Maintain 99% Accuracy
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Professional typists follow a systematic approach instead of
            typing randomly. Their focus remains on rhythm, consistency,
            concentration and proper finger movement.
          </p>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {[
            {
              title: "Read One Word Ahead",
              desc: "Always keep your eyes one word ahead of what you're typing."
            },
            {
              title: "Maintain Constant Rhythm",
              desc: "Avoid typing in sudden bursts. A steady rhythm improves consistency."
            },
            {
              title: "Trust Muscle Memory",
              desc: "Do not think about every key. Let your fingers remember the keyboard."
            },
            {
              title: "Relax Your Hands",
              desc: "Relaxed fingers move faster and make fewer mistakes."
            },
            {
              title: "Stay Focused",
              desc: "Ignore distractions and concentrate only on the passage."
            },
            {
              title: "Review Every Mock",
              desc: "Analyze mistakes after each typing test."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-8 transition hover:border-green-500 hover:shadow-xl"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                🎯
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

      {/* ================= CONCENTRATION ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Concentration
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Build Laser Focus
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            "Remove Distractions",
            "Eyes On Screen",
            "Stay Calm",
            "Think One Word Ahead",
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-5xl">
                🧠
              </div>

              <p className="mt-5 text-lg font-semibold">
                {item}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= ERROR ANALYSIS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Error Analysis
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Learn From Every Mistake
          </h2>

        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-5 text-left">Mistake</th>

                <th className="p-5 text-left">Reason</th>

                <th className="p-5 text-left">Solution</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Wrong Letter","Finger Movement","Practice Home Row"],
                ["Missing Word","Poor Focus","Read Ahead"],
                ["Extra Space","Rushing","Slow Down"],
                ["Wrong Capital","Ignoring Passage","Observe Carefully"],
                ["Punctuation Error","Skipping Symbols","Practice Symbols"],
              ].map((row,index)=>(

                <tr
                  key={index}
                  className="border-t"
                >

                  <td className="p-5">{row[0]}</td>

                  <td className="p-5">{row[1]}</td>

                  <td className="p-5 font-semibold text-green-600">
                    {row[2]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.section>

      {/* ================= GOLDEN RULES ================= */}

      <motion.section
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        className="rounded-[34px] border border-yellow-200 bg-yellow-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Golden Rules
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Accuracy Checklist
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "Always type what you see.",
            "Never guess the next word.",
            "Don't sacrifice accuracy for speed.",
            "Avoid unnecessary Backspace.",
            "Practice every day.",
            "Review every mistake.",
            "Stay relaxed.",
            "Trust muscle memory.",
          ].map((rule)=>(

            <div
              key={rule}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >

              ✅ {rule}

            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= WEEKLY IMPROVEMENT PLAN ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-blue-200 bg-blue-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Weekly Improvement Plan
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            7-Day Accuracy Challenge
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Follow this simple routine every day to gradually improve your
            typing accuracy and build long-term consistency.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-7">

          {[
            "Day 1\nHome Row",
            "Day 2\nFinger Control",
            "Day 3\nAccuracy",
            "Day 4\nParagraphs",
            "Day 5\nPunctuation",
            "Day 6\nMock Test",
            "Day 7\nReview",
          ].map((day) => (

            <div
              key={day}
              className="rounded-3xl border border-blue-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white hover:shadow-xl"
            >

              <div className="text-lg font-bold">
                {day.split("\n")[0]}
              </div>

              <div className="mt-3 text-sm">
                {day.split("\n")[1]}
              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= ACCURACY MILESTONES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-green-200 bg-green-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Milestones
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Accuracy Progress Ladder
          </h2>

        </div>

        <div className="mt-12 space-y-6">

          {[
            {
              percent: "90%",
              level: "Beginner",
              color: "bg-red-500",
            },
            {
              percent: "94%",
              level: "Improving",
              color: "bg-orange-500",
            },
            {
              percent: "96%",
              level: "Good",
              color: "bg-yellow-500",
            },
            {
              percent: "98%",
              level: "Excellent",
              color: "bg-green-500",
            },
            {
              percent: "99%+",
              level: "SSC Ready",
              color: "bg-emerald-600",
            },
          ].map((item) => (

            <div
              key={item.percent}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.percent}
                  </h3>

                  <p className="text-slate-600">
                    {item.level}
                  </p>

                </div>

                <div
                  className={`h-5 w-40 rounded-full ${item.color}`}
                />

              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= LESSON SUMMARY ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Lesson Summary
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Remember These Points
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Accuracy is the foundation of professional typing. Build the
            habit of typing every word correctly before trying to increase
            speed. Consistent practice, proper finger placement, careful
            reading and regular mock tests will naturally improve both
            your accuracy and your typing speed.
          </p>

        </div>

      </motion.section>

      {/* ================= CTA ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 p-12 text-white shadow-2xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Ready To Improve?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Start Practicing With Maximum Accuracy
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
            Apply everything you've learned in this lesson by taking
            real SSC typing mock tests and tracking your progress after
            every attempt.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/practice"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-green-700 transition hover:scale-105"
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

      {/* ================= NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material/rules"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Previous Lesson
        </Link>

        <Link
          href="/practice/study-material/strategy"
          className="flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          Next Lesson
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}