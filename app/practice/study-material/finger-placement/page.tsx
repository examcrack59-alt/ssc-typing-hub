"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Hand,
  Keyboard,
  Target,
  Award,
  Clock,
} from "lucide-react";

export default function FingerPlacementPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[34px] bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 p-10 text-white shadow-2xl"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <Link
              href="/practice/study-material"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur hover:bg-white/25 transition"
            >
              <ArrowLeft size={16} />
              Back to Study Material
            </Link>

            <span className="mt-8 inline-block rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-semibold">
              Lesson 2 • Finger Placement
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Master Finger
              <br />
              Placement
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Proper finger placement is the foundation of professional
              touch typing. Learn how every finger has its own
              responsibility and build muscle memory for faster,
              more accurate typing.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  10
                </p>

                <span className="text-sm text-blue-100">
                  Fingers
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  99%
                </p>

                <span className="text-sm text-blue-100">
                  Accuracy Goal
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold">
                  15 Min
                </p>

                <span className="text-sm text-blue-100">
                  Lesson
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[34px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                <Hand size={60} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                Finger Placement
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Every professional typist follows proper finger
                placement to achieve high speed and excellent
                accuracy.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Keyboard
                    className="mx-auto text-blue-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Home Row
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target
                    className="mx-auto text-green-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Accuracy
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Award
                    className="mx-auto text-orange-500"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Speed
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= QUICK OVERVIEW ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Lesson Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            In this lesson, you'll understand how professional typists
            position their fingers, why the Home Row is important,
            and how correct finger placement improves typing speed,
            reduces errors and builds long-term muscle memory.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Hand,
              title: "Hand Position",
              desc: "Correct placement of both hands on the keyboard.",
            },
            {
              icon: Keyboard,
              title: "Home Row",
              desc: "Understand the ASDF and JKL; keys.",
            },
            {
              icon: Target,
              title: "Finger Mapping",
              desc: "Know which finger presses which key.",
            },
            {
              icon: Clock,
              title: "Practice",
              desc: "Daily drills to build muscle memory.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon
                    className="text-blue-700"
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
            {/* ================= WHAT IS FINGER PLACEMENT ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Understanding the Basics
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              What is Finger Placement?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Finger placement is the technique of assigning every finger
              to specific keys on the keyboard. Professional typists never
              use random fingers. Instead, every key has a designated
              finger which improves typing speed, reduces effort and builds
              long-term muscle memory.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              When your fingers automatically know where to move, you no
              longer need to look at the keyboard. This is called
              <strong> Touch Typing</strong>, which is the preferred method
              for SSC Typing Examinations.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Benefits
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Faster Typing Speed
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Accuracy
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Less Hand Movement
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Improved Muscle Memory
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Higher SSC Exam Performance
              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= HOME ROW ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Home Row Keys
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Start Every Word From Home Row
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Your fingers should always return to the Home Row after
            pressing any key. This minimizes unnecessary hand movement and
            increases typing efficiency.
          </p>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-10">

            <h3 className="text-2xl font-bold text-blue-700">
              Left Hand
            </h3>

            <div className="mt-8 flex justify-center gap-4">

              {["A", "S", "D", "F"].map((key) => (
                <div
                  key={key}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-3xl font-bold text-white shadow-lg"
                >
                  {key}
                </div>
              ))}

            </div>

          </div>

          <div className="rounded-3xl border border-green-200 bg-green-50 p-10">

            <h3 className="text-2xl font-bold text-green-700">
              Right Hand
            </h3>

            <div className="mt-8 flex justify-center gap-4">

              {["J", "K", "L", ";"].map((key) => (
                <div
                  key={key}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-600 text-3xl font-bold text-white shadow-lg"
                >
                  {key}
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= KEYBOARD LAYOUT ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Keyboard Layout
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Understand the Keyboard
          </h2>

        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl">

          <div className="space-y-4 font-mono text-2xl tracking-widest">

            <div>Q W E R T Y U I O P</div>

            <div>A S D F G H J K L ;</div>

            <div>Z X C V B N M</div>

          </div>

          <div className="mx-auto mt-8 h-16 max-w-xl rounded-full bg-slate-700 flex items-center justify-center text-xl font-semibold">
            SPACE BAR
          </div>

        </div>

      </motion.section>
            {/* ================= LEFT & RIGHT HAND ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Finger Mapping
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Know Every Finger's Responsibility
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Professional typists assign every key to a specific finger.
            This reduces unnecessary movement and helps develop excellent
            muscle memory.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* LEFT HAND */}

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="text-3xl font-bold text-blue-700">
              👈 Left Hand
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Little Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  Q • A • Z • Tab • Caps Lock • Left Shift
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Ring Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  W • S • X
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Middle Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  E • D • C
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Index Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  R • T • F • G • V • B
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT HAND */}

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-3xl font-bold text-green-700">
              👉 Right Hand
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Index Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  Y • U • H • J • N • M
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Middle Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  I • K
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Ring Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  O • L
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-900">
                  Little Finger
                </h4>
                <p className="mt-2 text-slate-600">
                  P • ; • Enter • Backspace • Right Shift
                </p>
              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= THUMB ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-xl"
      >

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-6xl">👍</div>

          <h2 className="mt-6 text-4xl font-bold">
            Use Your Thumb For The Space Bar
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            The Space Bar should always be pressed using your thumb.
            Avoid using your index finger, as it interrupts hand movement
            and slows down your typing rhythm.
          </p>

        </div>

      </motion.section>

      {/* ================= FINGER EXERCISES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Daily Practice
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Finger Warm-Up Exercises
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Practice these simple drills every day before attempting a
            full typing test. They improve coordination and strengthen
            finger memory.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "asdf jkl;",
            "asdfg hjkl;",
            "qwer uiop",
            "zxcv nm",
            "fdsa lkjh",
            "asdf asdf jkl; jkl;",
            "the quick brown fox",
            "practice makes perfect",
          ].map((exercise) => (

            <div
              key={exercise}
              className="rounded-2xl bg-slate-900 p-6 font-mono text-xl text-green-400 shadow-lg"
            >
              {exercise}
            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= COMMON MISTAKES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-red-200 bg-red-50 p-10 shadow-sm"
      >
        <div className="text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Avoid These Mistakes
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Common Finger Placement Mistakes
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Most SSC aspirants lose speed because of incorrect finger
            movement rather than lack of practice.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Looking at Keyboard",
              desc: "Keeps you dependent on visual guidance and prevents muscle memory."
            },
            {
              title: "Using Two Fingers",
              desc: "Limits speed and causes frequent mistakes."
            },
            {
              title: "Floating Hands",
              desc: "Hands should always return to the Home Row."
            },
            {
              title: "Wrong Finger Usage",
              desc: "Each key has a designated finger responsibility."
            },
            {
              title: "Hard Key Press",
              desc: "Typing with excessive force causes fatigue."
            },
            {
              title: "Poor Wrist Position",
              desc: "Keep wrists relaxed and avoid bending them."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-red-200 bg-white p-8 transition hover:shadow-lg"
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

      {/* ================= GOLDEN RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-yellow-200 bg-yellow-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Golden Rules
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Professional Finger Placement Rules
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {[
            "Always return your fingers to the Home Row.",
            "Do not stretch one finger for every key.",
            "Use all ten fingers while typing.",
            "Press the Space Bar using your thumb.",
            "Keep wrists relaxed.",
            "Sit upright while typing.",
            "Focus on accuracy before speed.",
            "Never look at the keyboard.",
            "Practice daily for at least 30 minutes.",
            "Analyze your typing mistakes regularly.",
          ].map((rule, index) => (

            <div
              key={index}
              className="flex items-start gap-5 rounded-3xl border border-yellow-200 bg-white p-6"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-white">
                {index + 1}
              </div>

              <p className="text-lg leading-7 text-slate-700">
                {rule}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= DAILY ROUTINE ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Practice Routine
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            30 Minute Daily Schedule
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
              title: "Finger Drill"
            },
            {
              time: "10 Min",
              title: "Typing Practice"
            },
            {
              time: "5 Min",
              title: "Paragraph"
            },
            {
              time: "5 Min",
              title: "Review"
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
            {/* ================= SSC EXPERT TIPS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            SSC Expert Advice
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Tips From Successful Candidates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Candidates who consistently qualify SSC typing examinations
            follow disciplined practice routines rather than depending on
            last-minute preparation. Small improvements made every day
            produce excellent long-term results.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Practice every day.",
            "Never skip Home Row exercises.",
            "Review your mistakes after every mock.",
            "Accuracy should always come before speed.",
          ].map((tip, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                💡
              </div>

              <p className="mt-5 leading-8 text-slate-700">
                {tip}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= QUICK REVISION ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-green-200 bg-green-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Quick Revision
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Before Moving To The Next Lesson
          </h2>

        </div>

        <div className="mt-12 space-y-5">

          {[
            "✓ Home Row keys are ASDF and JKL;",
            "✓ Every finger has assigned keys.",
            "✓ Space Bar should be pressed using the thumb.",
            "✓ Return fingers to Home Row after every key.",
            "✓ Never look at the keyboard while typing.",
            "✓ Practice finger drills daily.",
            "✓ Focus on rhythm rather than force.",
            "✓ Build muscle memory through repetition.",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl bg-white p-6 text-lg shadow-sm"
            >
              {item}
            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= SUMMARY ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Lesson Summary
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Proper finger placement is the foundation of touch typing.
            Once your fingers automatically return to the Home Row and
            every finger performs its assigned responsibility, typing
            becomes faster, smoother and more accurate. Consistent
            practice transforms these movements into natural muscle
            memory, helping you perform confidently in SSC typing
            examinations.
          </p>

        </div>

      </motion.section>

      {/* ================= CTA ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-[#0A4EA3] via-[#1565C0] to-[#1E88E5] p-12 text-center text-white shadow-2xl"
      >

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
          Ready For Practice?
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Start Applying What You Learned
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Complete typing practice sessions regularly to strengthen
          finger movement, improve accuracy and increase typing speed.
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
            📝 Mock Test
          </Link>

        </div>

      </motion.section>

      {/* ================= NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material/typing-tips"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Previous Lesson
        </Link>

        <Link
          href="/practice/study-material/rules"
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Next Lesson
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}