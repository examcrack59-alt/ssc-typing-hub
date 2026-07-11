"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Target,
  TrendingUp,
  Brain,
  Trophy,
  Clock,
  BookOpen,
} from "lucide-react";

export default function StrategyPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-10 text-white shadow-2xl"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <Link
              href="/practice/study-material/accuracy"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              Previous Lesson
            </Link>

            <span className="mt-8 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Lesson 5 • Preparation Strategy
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Complete SSC
              <br />
              Preparation Strategy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
              A structured preparation plan helps you improve faster than
              random practice. Learn how to manage your daily routine,
              increase speed, improve accuracy and become fully prepared
              for the SSC Typing Test.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  30 Days
                </p>

                <span className="text-sm text-indigo-100">
                  Complete Roadmap
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  Daily
                </p>

                <span className="text-sm text-indigo-100">
                  Practice Plan
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  SSC
                </p>

                <span className="text-sm text-indigo-100">
                  Exam Ready
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative rounded-[34px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white">

                <Calendar size={60} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                30-Day Plan
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                A step-by-step roadmap designed to improve your typing
                performance every single day.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target
                    className="mx-auto text-indigo-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Goal
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <TrendingUp
                    className="mx-auto text-green-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Growth
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Trophy
                    className="mx-auto text-orange-500"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Success
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= OVERVIEW ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Lesson Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This lesson provides a complete preparation strategy for SSC
            Typing Tests, including daily routines, weekly milestones,
            mock test planning, revision techniques and exam-day
            preparation.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Calendar,
              title: "30-Day Plan",
              desc: "A complete roadmap for consistent improvement."
            },
            {
              icon: Clock,
              title: "Daily Routine",
              desc: "Optimize your practice schedule."
            },
            {
              icon: Brain,
              title: "Smart Practice",
              desc: "Practice efficiently instead of practicing longer."
            },
            {
              icon: BookOpen,
              title: "Mock Strategy",
              desc: "Learn how and when to attempt mock tests."
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">

                  <Icon
                    className="text-indigo-700"
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

      {/* ================= WHY STRATEGY MATTERS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Why Strategy?
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Practice Smart, Not Just Hard
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Many aspirants practice for hours without following a proper
              plan. A structured strategy helps you improve speed,
              accuracy, confidence and consistency while saving valuable
              preparation time.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              By following a planned schedule, you can identify weak
              areas, track your progress and steadily move towards your
              target typing speed.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 p-8 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Benefits of a Good Strategy
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Faster Improvement
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Accuracy
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Higher Confidence
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Less Stress
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better SSC Performance
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= 30 DAY ROADMAP ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-indigo-200 bg-indigo-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            30-Day Roadmap
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Complete Preparation Plan
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Follow this structured roadmap to gradually improve your typing
            speed, accuracy and confidence before the SSC Typing Test.
          </p>

        </div>

        <div className="mt-12 space-y-8">

          {[
            {
              week: "Week 1",
              title: "Build Strong Foundation",
              color: "bg-red-500",
              tasks: [
                "Learn Home Row Keys",
                "Improve Finger Placement",
                "Practice Slow Typing",
                "Focus on 95% Accuracy",
              ],
            },
            {
              week: "Week 2",
              title: "Develop Speed",
              color: "bg-orange-500",
              tasks: [
                "Increase WPM",
                "Daily Paragraph Practice",
                "Symbol Practice",
                "Mock Test (Alternate Days)",
              ],
            },
            {
              week: "Week 3",
              title: "Exam Simulation",
              color: "bg-blue-600",
              tasks: [
                "Daily Full Mock",
                "Analyze Mistakes",
                "Improve Weak Areas",
                "Target 98% Accuracy",
              ],
            },
            {
              week: "Week 4",
              title: "Final Revision",
              color: "bg-green-600",
              tasks: [
                "Full SSC Mock Tests",
                "Revision",
                "Time Management",
                "Exam Readiness",
              ],
            },
          ].map((week) => (

            <div
              key={week.week}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >

              <div className="flex items-center gap-5">

                <div
                  className={`h-6 w-6 rounded-full ${week.color}`}
                />

                <div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {week.week}
                  </h3>

                  <p className="text-lg text-indigo-700">
                    {week.title}
                  </p>

                </div>

              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                {week.tasks.map((task) => (

                  <div
                    key={task}
                    className="rounded-2xl bg-slate-50 p-5"
                  >
                    ✅ {task}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= DAILY ROUTINE ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Daily Routine
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            60-Minute Daily Practice Plan
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-6">

          {[
            {
              time: "10 Min",
              task: "Warm-up"
            },
            {
              time: "10 Min",
              task: "Finger Practice"
            },
            {
              time: "15 Min",
              task: "Paragraph Typing"
            },
            {
              time: "10 Min",
              task: "Speed Drill"
            },
            {
              time: "10 Min",
              task: "Mock Test"
            },
            {
              time: "5 Min",
              task: "Review"
            },
          ].map((item) => (

            <div
              key={item.task}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-3xl font-bold">
                {item.time}
              </div>

              <p className="mt-4">
                {item.task}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= WEEKLY TARGETS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Weekly Targets
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Measure Your Progress
          </h2>

        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-5 text-left">Week</th>

                <th className="p-5 text-left">Speed</th>

                <th className="p-5 text-left">Accuracy</th>

                <th className="p-5 text-left">Goal</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Week 1","25 WPM","95%","Learn Basics"],
                ["Week 2","35 WPM","96%","Build Confidence"],
                ["Week 3","40 WPM","98%","Daily Mock Tests"],
                ["Week 4","45+ WPM","99%","SSC Ready"],
              ].map((row,index)=>(

                <tr
                  key={index}
                  className="border-t"
                >

                  <td className="p-5 font-semibold">
                    {row[0]}
                  </td>

                  <td className="p-5">
                    {row[1]}
                  </td>

                  <td className="p-5 text-green-600 font-semibold">
                    {row[2]}
                  </td>

                  <td className="p-5">
                    {row[3]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.section>

      {/* ================= BEGINNER TO ADVANCED ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Growth Path
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Beginner → Advanced Journey
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            "Beginner",
            "Intermediate",
            "Advanced",
            "SSC Ready",
          ].map((level,index)=>(

            <div
              key={level}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:border-indigo-500 hover:shadow-xl"
            >

              <div className="text-5xl font-bold text-indigo-600">
                {index+1}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {level}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= SPEED GROWTH STRATEGY ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Speed Improvement
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Increase Speed Without Losing Accuracy
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Professional typists improve their speed gradually while
            maintaining high accuracy. Avoid rushing. Build speed through
            consistency.
          </p>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {[
            {
              title: "Week 1",
              desc: "Focus only on correct typing."
            },
            {
              title: "Week 2",
              desc: "Increase typing rhythm naturally."
            },
            {
              title: "Week 3",
              desc: "Daily speed drills."
            },
            {
              title: "Week 4",
              desc: "Target official SSC speed."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8"
            >

              <h3 className="text-2xl font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= ACCURACY IMPROVEMENT ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Accuracy Plan
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Daily Accuracy Growth
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            "Read Carefully",
            "Type Slowly",
            "Review Errors",
            "Repeat Practice",
          ].map((step,index)=>(

            <div
              key={step}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-5xl font-bold">
                {index+1}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= MOCK TEST STRATEGY ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Mock Test Strategy
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            When Should You Attempt Mock Tests?
          </h2>

        </div>

        <div className="mt-12 space-y-6">

          {[
            {
              title:"Week 1",
              text:"2 Mock Tests"
            },
            {
              title:"Week 2",
              text:"3 Mock Tests"
            },
            {
              title:"Week 3",
              text:"Daily Mock Test"
            },
            {
              title:"Week 4",
              text:"2 Full-Length Tests Every Day"
            },

          ].map((item)=>(

            <div
              key={item.title}
              className="flex items-center justify-between rounded-3xl border border-orange-200 bg-orange-50 p-8"
            >

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.text}
                </p>

              </div>

              <div className="text-5xl">
                📝
              </div>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= LAST 7 DAYS ================= */}

      <motion.section
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        className="rounded-[34px] border border-red-200 bg-red-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Final Revision
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Last 7 Days Before Exam
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "Attempt Full Mock Tests",
            "Avoid Learning New Techniques",
            "Review Mistakes",
            "Practice Accuracy",
            "Improve Weak Areas",
            "Sleep Properly",
            "Stay Calm",
            "Maintain Confidence",
          ].map((tip)=>(

            <div
              key={tip}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              ✅ {tip}
            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= PRODUCTIVITY TIPS ================= */}

      <motion.section
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        className="rounded-[34px] border border-yellow-200 bg-yellow-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Productivity Tips
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Study Smarter Every Day
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            "Practice at the same time daily.",
            "Remove all distractions.",
            "Keep water nearby.",
            "Use a proper keyboard.",
            "Review every mock test.",
            "Track your weekly progress.",
          ].map((tip)=>(

            <div
              key={tip}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                💡
              </div>

              <p className="mt-6 leading-7 text-slate-700">
                {tip}
              </p>

            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= SUCCESS CHECKLIST ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-emerald-200 bg-emerald-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Success Checklist
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            30-Day Preparation Checklist
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Before your SSC Typing Test, ensure you've completed each of
            these milestones. This checklist helps you stay confident and
            exam-ready.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "Practice completed for 30 consecutive days",
            "Home row keys mastered",
            "Proper finger placement learned",
            "Average accuracy above 98%",
            "Target WPM achieved",
            "Daily mock tests completed",
            "Typing posture improved",
            "Common mistakes reduced",
            "SSC typing rules revised",
            "Exam-day strategy prepared",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= PROGRESS TRACKER ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Progress Tracker
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Evaluate Your Preparation
          </h2>

        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-5 text-left">Skill</th>
                <th className="p-5 text-left">Beginner</th>
                <th className="p-5 text-left">Target</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Typing Speed","25 WPM","45+ WPM"],
                ["Accuracy","92%","98-99%"],
                ["Finger Placement","Basic","Professional"],
                ["Mock Tests","2 Weekly","Daily"],
                ["Confidence","Medium","Excellent"],
              ].map((row,index)=>(

                <tr
                  key={index}
                  className="border-t"
                >

                  <td className="p-5 font-semibold">
                    {row[0]}
                  </td>

                  <td className="p-5">
                    {row[1]}
                  </td>

                  <td className="p-5 font-semibold text-green-600">
                    {row[2]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.section>



      {/* ================= EXPERT ADVICE ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[34px] bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Expert Advice
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            What Successful Candidates Recommend
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Never skip daily practice.",
            "Accuracy always comes first.",
            "Analyse every mock test.",
            "Stay calm during the exam.",
          ].map((tip)=>(

            <div
              key={tip}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur"
            >

              <div className="text-5xl">
                🏆
              </div>

              <p className="mt-6 leading-7">
                {tip}
              </p>

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

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Lesson Summary
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Final Thoughts
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A successful SSC typing preparation strategy combines regular
            practice, proper technique, consistent mock tests and detailed
            performance analysis. Stay disciplined, follow your study plan,
            and keep improving a little every day. Small daily improvements
            lead to excellent results on the exam day.
          </p>

        </div>

      </motion.section>



      {/* ================= CTA ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-12 text-white shadow-2xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            You're Ready!
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Begin Your SSC Typing Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-indigo-100">
            Apply everything you've learned with real typing tests.
            Practice consistently, monitor your progress, and become
            fully prepared for your SSC Typing Examination.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/practice"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-700 transition hover:scale-105"
            >
              🚀 Start Practice
            </Link>

            <Link
              href="/practice/cgl"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/20"
            >
              📝 Take Mock Test
            </Link>

          </div>

        </div>

      </motion.section>



      {/* ================= NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material/accuracy"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Previous Lesson
        </Link>

        <Link
          href="/practice/study-material/syllabus"
          className="flex items-center gap-3 rounded-2xl bg-indigo-700 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-indigo-800"
        >
          Next Lesson
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}