"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Keyboard,
  Target,
  CheckCircle2,
} from "lucide-react";

export default function TypingRulesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0A4EA3] via-[#1565C0] to-[#1E88E5] p-10 text-white shadow-2xl"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <Link
              href="/practice/study-material/finger-placement"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              Previous Lesson
            </Link>

            <span className="mt-8 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Lesson 3 • Typing Rules
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Official SSC
              <br />
              Typing Rules
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Learn the official typing rules followed during SSC Typing
              Tests. Master spacing, punctuation, capitalization,
              formatting and typing discipline to maximize your score.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

                <p className="text-3xl font-bold">
                  100%
                </p>

                <span className="text-sm text-blue-100">
                  Official Rules
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
                  Lesson Time
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[34px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                <BookOpen size={60} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                SSC Typing Rules
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Following the correct typing rules helps improve
                consistency, reduce mistakes and perform confidently in
                SSC typing examinations.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Keyboard
                    className="mx-auto text-blue-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Accuracy
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <ShieldCheck
                    className="mx-auto text-green-600"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    Rules
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target
                    className="mx-auto text-orange-500"
                    size={28}
                  />

                  <p className="mt-2 font-bold text-slate-900">
                    SSC Ready
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

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Lesson Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This lesson explains the most important typing rules every
            SSC aspirant should know before attempting the official
            typing examination. Understanding these rules helps you
            reduce errors and improve your overall performance.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: ShieldCheck,
              title: "Official Rules",
              desc: "Understand SSC typing guidelines."
            },
            {
              icon: Keyboard,
              title: "Formatting",
              desc: "Learn spacing and punctuation rules."
            },
            {
              icon: Target,
              title: "Accuracy",
              desc: "Avoid common typing mistakes."
            },
            {
              icon: CheckCircle2,
              title: "Exam Tips",
              desc: "Follow best practices during the exam."
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

      {/* ================= WHAT ARE TYPING RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Understanding the Basics
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              What are Typing Rules?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Typing rules are a set of standard practices that ensure
              your typed text matches the given passage accurately.
              During SSC typing tests, following these rules is just as
              important as maintaining typing speed.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Correct spacing, punctuation, capitalization and word
              sequence directly affect your typing accuracy and final
              performance.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Why Rules Matter?
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Accuracy
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Fewer Mistakes
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Higher Confidence
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better SSC Performance
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Professional Typing Habits
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= OFFICIAL SSC GUIDELINES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Official Guidelines
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            SSC Typing Guidelines
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            These are the fundamental guidelines every SSC aspirant should
            follow during typing practice as well as in the official
            typing examination.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Follow Passage Exactly",
              desc: "Type exactly what appears on the screen without changing words."
            },
            {
              title: "Do Not Skip Words",
              desc: "Every word contributes to your overall accuracy."
            },
            {
              title: "Maintain Correct Order",
              desc: "Do not change the sequence of words."
            },
            {
              title: "Respect Punctuation",
              desc: "Type commas, periods and symbols exactly as given."
            },
            {
              title: "Keep Proper Spacing",
              desc: "Use only one space between words."
            },
            {
              title: "Stay Calm",
              desc: "Typing calmly produces better accuracy than rushing."
            }
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-500 hover:shadow-lg"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                ✓
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
            Professional Typing Rules
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {[
            "Read one word ahead while typing.",
            "Maintain a steady typing rhythm.",
            "Never look at the keyboard.",
            "Use correct finger placement.",
            "Focus on accuracy before speed.",
            "Don't panic after making mistakes.",
            "Avoid unnecessary Backspace usage.",
            "Keep your wrists relaxed.",
            "Practice consistently every day.",
            "Review mistakes after every test."
          ].map((rule, index) => (

            <div
              key={rule}
              className="flex gap-5 rounded-3xl border border-yellow-200 bg-white p-6"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 font-bold text-white">
                {index + 1}
              </div>

              <p className="text-lg leading-7 text-slate-700">
                {rule}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= COMMON VIOLATIONS ================= */}

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
            Rule Violations To Avoid
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Extra Spaces",
            "Missing Words",
            "Wrong Capital Letters",
            "Ignoring Punctuation",
            "Typing Different Words",
            "Skipping Lines",
            "Random Backspace",
            "Looking At Keyboard",
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg"
            >

              <div className="text-5xl">
                ❌
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= SPACING RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Space Rules
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Correct Space Usage
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-2xl font-bold text-green-700">
              ✅ Correct
            </h3>

            <div className="mt-8 space-y-4 font-mono text-xl">

              <div className="rounded-xl bg-white p-4">
                Government of India
              </div>

              <div className="rounded-xl bg-white p-4">
                SSC CGL Examination
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

            <h3 className="text-2xl font-bold text-red-700">
              ❌ Incorrect
            </h3>

            <div className="mt-8 space-y-4 font-mono text-xl">

              <div className="rounded-xl bg-white p-4">
                Government&nbsp;&nbsp;of India
              </div>

              <div className="rounded-xl bg-white p-4">
                SSC&nbsp;&nbsp;CGL
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= CAPITAL LETTER RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >
        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Capital Letters
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Use Capital Letters Correctly
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Capitalization should exactly match the passage. Never change
            uppercase letters into lowercase or vice versa.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-2xl font-bold text-green-700">
              ✅ Correct Examples
            </h3>

            <div className="mt-8 space-y-4 font-mono text-xl">

              <div className="rounded-xl bg-white p-4">
                Government of India
              </div>

              <div className="rounded-xl bg-white p-4">
                SSC CHSL Examination
              </div>

              <div className="rounded-xl bg-white p-4">
                New Delhi
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

            <h3 className="text-2xl font-bold text-red-700">
              ❌ Incorrect Examples
            </h3>

            <div className="mt-8 space-y-4 font-mono text-xl">

              <div className="rounded-xl bg-white p-4">
                government of india
              </div>

              <div className="rounded-xl bg-white p-4">
                ssc chsl examination
              </div>

              <div className="rounded-xl bg-white p-4">
                new delhi
              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= PUNCTUATION RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Punctuation
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Type Every Symbol Correctly
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            { symbol: ".", title: "Full Stop" },
            { symbol: ",", title: "Comma" },
            { symbol: ";", title: "Semicolon" },
            { symbol: ":", title: "Colon" },
            { symbol: "?", title: "Question Mark" },
            { symbol: "!", title: "Exclamation" },
            { symbol: "\"", title: "Quotation Marks" },
            { symbol: "'", title: "Apostrophe" },
            { symbol: "-", title: "Hyphen" },
            { symbol: "()", title: "Brackets" },
            { symbol: "/", title: "Slash" },
            { symbol: "%", title: "Percentage" },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-8 text-center transition hover:border-blue-500 hover:shadow-lg"
            >

              <div className="text-5xl font-bold text-blue-600">
                {item.symbol}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= BACKSPACE RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[34px] bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Backspace Usage
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Use Backspace Wisely
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Backspace is generally allowed in typing practice and many SSC
            typing tests, but excessive corrections reduce your typing
            rhythm and overall speed. Aim to type accurately rather than
            relying on constant corrections.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <div className="text-5xl">⌫</div>

            <h3 className="mt-5 text-2xl font-bold">
              Allowed
            </h3>

            <p className="mt-4 leading-7 text-orange-100">
              Correct mistakes when necessary.
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <div className="text-5xl">⚡</div>

            <h3 className="mt-5 text-2xl font-bold">
              Don't Overuse
            </h3>

            <p className="mt-4 leading-7 text-orange-100">
              Frequent corrections reduce WPM.
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <div className="text-5xl">🎯</div>

            <h3 className="mt-5 text-2xl font-bold">
              Focus Accuracy
            </h3>

            <p className="mt-4 leading-7 text-orange-100">
              Correct typing is always better than fast corrections.
            </p>

          </div>

        </div>

      </motion.section>

      {/* ================= NUMBERS & SYMBOLS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Numbers & Symbols
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Practice Numbers and Special Characters
          </h2>

        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-10 font-mono text-center text-2xl text-green-400 shadow-xl">

          <div>1234567890</div>

          <div className="mt-6">
            ! @ # $ % ^ & * ( )
          </div>

          <div className="mt-6">
            - _ + = / ? ; : ' "
          </div>

        </div>

      </motion.section>
            {/* ================= EXAM DAY RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Exam Day Guidelines
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Rules To Follow During SSC Typing Test
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Success in the SSC Typing Test depends not only on typing speed
            but also on discipline, concentration and following proper
            examination practices.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              icon: "🕒",
              title: "Read Instructions",
              desc: "Carefully read all instructions before starting."
            },
            {
              icon: "⌨️",
              title: "Start Calmly",
              desc: "Don't rush during the first few lines."
            },
            {
              icon: "🎯",
              title: "Maintain Accuracy",
              desc: "Correct typing is more valuable than fast typing."
            },
            {
              icon: "👀",
              title: "Eyes On Screen",
              desc: "Avoid looking at the keyboard."
            },
            {
              icon: "💺",
              title: "Maintain Posture",
              desc: "Sit comfortably and keep wrists relaxed."
            },
            {
              icon: "🏁",
              title: "Finish Strong",
              desc: "Stay focused until the timer ends."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= DO'S & DON'TS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Best Practices
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Do's & Don'ts
          </h2>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* DO */}

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-3xl font-bold text-green-700">
              ✅ Do's
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "Use proper finger placement.",
                "Maintain typing rhythm.",
                "Read one word ahead.",
                "Practice daily.",
                "Focus on accuracy.",
                "Take short breaks while practicing.",
                "Analyze your mistakes.",
                "Stay confident during the exam."
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* DON'T */}

          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

            <h3 className="text-3xl font-bold text-red-700">
              ❌ Don'ts
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "Don't panic after mistakes.",
                "Don't use random fingers.",
                "Don't look at the keyboard.",
                "Don't type too forcefully.",
                "Don't skip difficult words.",
                "Don't overuse Backspace.",
                "Don't lose concentration.",
                "Don't sacrifice accuracy for speed."
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= TIME MANAGEMENT ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Time Management
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Manage Your Time Wisely
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            {
              time: "1 Min",
              task: "Read Passage"
            },
            {
              time: "12 Min",
              task: "Type Carefully"
            },
            {
              time: "1 Min",
              task: "Stay Calm"
            },
            {
              time: "1 Min",
              task: "Finish Strong"
            },
          ].map((item) => (

            <div
              key={item.task}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-4xl font-bold">
                {item.time}
              </div>

              <p className="mt-4 text-lg">
                {item.task}
              </p>

            </div>

          ))}

        </div>

      </motion.section>

      {/* ================= PRO CHECKLIST ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-indigo-200 bg-indigo-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Final Checklist
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Before You Start Typing
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "✓ Correct finger placement",
            "✓ Comfortable sitting posture",
            "✓ Eyes focused on screen",
            "✓ Hands on Home Row",
            "✓ Calm and relaxed mindset",
            "✓ Single spacing between words",
            "✓ Correct punctuation",
            "✓ Accuracy before speed",
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
            {/* ================= SSC EXPERT TIPS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Expert Recommendations
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Tips From Successful SSC Candidates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Top performers consistently follow proper typing rules instead
            of depending only on speed. Discipline, accuracy and regular
            mock tests are the real keys to success.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Practice daily without skipping.",
            "Read every word carefully.",
            "Review every completed mock test.",
            "Improve accuracy before increasing speed.",
          ].map((tip) => (

            <div
              key={tip}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                💡
              </div>

              <p className="mt-6 leading-8 text-slate-700">
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

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Lesson Summary
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Key Takeaways
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Correct typing is not only about speed. Following official
            typing rules, maintaining proper spacing, using correct
            punctuation, respecting capital letters and practicing with
            discipline will significantly improve your overall typing
            performance. Build strong habits during practice so that they
            become natural during the actual SSC examination.
          </p>

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
            Apply These Rules in Real Typing Tests
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            The best way to remember typing rules is by applying them in
            real SSC mock tests. Practice regularly and monitor your
            progress after every session.
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

      {/* ================= LESSON NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material/finger-placement"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Previous Lesson
        </Link>

        <Link
          href="/practice/study-material/accuracy"
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Next Lesson
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}