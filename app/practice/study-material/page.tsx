"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
  Target,
} from "lucide-react";

export default function StudyMaterialPage() {
  return (
    <div className="space-y-10">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0A4EA3] via-[#1565C0] to-[#1E88E5] text-white shadow-2xl"
      >
        <div className="grid items-center gap-10 px-10 py-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              📚 SSC Typing Learning Center
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Master Your
              <br />
              SSC Typing Skills
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Professional learning resources carefully designed to help
              SSC aspirants improve typing speed, build accuracy, master
              finger placement and prepare confidently for real typing
              examinations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/practice"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
              >
                Start Practice

                <ArrowRight size={18} />
              </Link>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur">

                <BookOpen size={20} />

                <span>50+ Learning Guides</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:block">

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-slate-900">
                Featured Learning Path
              </h3>

              <p className="mt-2 text-slate-600">
                Complete roadmap for SSC Typing preparation.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-blue-100 p-3">
                    <GraduationCap
                      className="text-blue-700"
                      size={24}
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      Beginner Friendly
                    </h4>

                    <p className="text-sm text-slate-500">
                      Learn from basics to advanced.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-green-100 p-3">
                    <Clock3
                      className="text-green-700"
                      size={24}
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      30 Minutes Daily
                    </h4>

                    <p className="text-sm text-slate-500">
                      Recommended study routine.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-orange-100 p-3">
                    <Target
                      className="text-orange-700"
                      size={24}
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      Real SSC Pattern
                    </h4>

                    <p className="text-sm text-slate-500">
                      Based on official typing tests.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= STATS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="grid gap-6 md:grid-cols-4"
      >

        {[
          {
            value: "50+",
            label: "Study Guides",
          },
          {
            value: "30+",
            label: "Typing Lessons",
          },
          {
            value: "20+",
            label: "Practice Strategies",
          },
          {
            value: "100%",
            label: "SSC Focused",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-4xl font-extrabold text-blue-700">
              {item.value}
            </div>

            <p className="mt-2 font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}

      </motion.section>

      {/* ================= LEARNING MODULES ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
>
  <div className="mb-8">

    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
      Professional Learning Modules
    </span>

    <h2 className="mt-5 text-4xl font-bold text-slate-900">
      Learn Step by Step
    </h2>

    <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
      Every module is carefully designed according to the latest SSC
      typing examination pattern. Complete them in sequence to build
      speed, improve accuracy and develop confidence for the real exam.
    </p>

  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "Typing Tips",
        description:
          "Build a strong foundation with practical techniques used by top scorers.",
        lessons: "8 Lessons",
        time: "15 min",
        level: "Beginner",
        href: "/practice/study-material/typing-tips",
        color: "bg-blue-600",
        icon: "⌨️",
      },
      {
        title: "Finger Placement",
        description:
          "Learn correct finger positioning and develop touch typing muscle memory.",
        lessons: "6 Lessons",
        time: "12 min",
        level: "Beginner",
        href: "/practice/study-material/finger-placement",
        color: "bg-cyan-600",
        icon: "🖐️",
      },
      {
        title: "Typing Rules",
        description:
          "Understand official SSC typing rules, penalties and formatting guidelines.",
        lessons: "7 Lessons",
        time: "18 min",
        level: "Intermediate",
        href: "/practice/study-material/rules",
        color: "bg-green-600",
        icon: "📘",
      },
      {
        title: "Accuracy Guide",
        description:
          "Reduce typing mistakes and increase consistency with proven exercises.",
        lessons: "9 Lessons",
        time: "20 min",
        level: "Intermediate",
        href: "/practice/study-material/accuracy-guide",
        color: "bg-orange-600",
        icon: "🎯",
      },
      {
        title: "Preparation Strategy",
        description:
          "Follow a structured roadmap to prepare for SSC typing examinations.",
        lessons: "10 Lessons",
        time: "25 min",
        level: "Advanced",
        href: "/practice/study-material/strategy",
        color: "bg-purple-600",
        icon: "🧠",
      },
      {
        title: "SSC Syllabus",
        description:
          "Latest syllabus and exam pattern for CGL, CHSL, MTS, GD, CPO and Stenographer.",
        lessons: "Updated",
        time: "2026",
        level: "Official",
        href: "/practice/study-material/syllabus",
        color: "bg-red-600",
        icon: "📄",
      },
    ].map((item) => (
      <Link key={item.title} href={item.href}>

        <div className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

          {/* Top Color */}
          <div className={`${item.color} h-2 w-full`} />

          <div className="p-7">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-slate-600">
              {item.description}
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                {item.lessons}
              </span>

              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                {item.time}
              </span>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                {item.level}
              </span>

            </div>

            {/* Button */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">

              <span className="font-semibold text-slate-700">
                Start Learning
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </div>

            </div>

          </div>

        </div>

      </Link>
    ))}

  </div>

</motion.section>
{/* ================= LEARNING ROADMAP ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm"
>

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
      Recommended Learning Journey
    </span>

    <h2 className="mt-5 text-4xl font-bold text-slate-900">
      Your Roadmap to SSC Typing Success
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
      Follow this structured learning path to build strong fundamentals,
      improve speed, master accuracy and become fully prepared for the
      official SSC Typing Test.
    </p>

  </div>

  <div className="mt-14 grid gap-8 md:grid-cols-5">

    {[
      {
        step: "01",
        title: "Typing Basics",
        desc: "Understand keyboard layout and typing fundamentals.",
      },
      {
        step: "02",
        title: "Finger Placement",
        desc: "Build muscle memory with proper finger positioning.",
      },
      {
        step: "03",
        title: "Accuracy",
        desc: "Reduce mistakes and improve consistency.",
      },
      {
        step: "04",
        title: "Speed Building",
        desc: "Increase WPM using daily structured drills.",
      },
      {
        step: "05",
        title: "Mock Tests",
        desc: "Practice official SSC-level typing tests.",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="relative text-center"
      >

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-3xl font-bold text-white shadow-lg">
          {item.step}
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</motion.section>

{/* ================= WHY CHOOSE ================= */}

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="grid gap-8 lg:grid-cols-2"
>

  <div className="rounded-[32px] bg-gradient-to-r from-[#0A4EA3] to-[#1E88E5] p-10 text-white shadow-xl">

    <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
      Why Choose Us
    </span>

    <h2 className="mt-5 text-4xl font-bold">
      Professional SSC Learning Experience
    </h2>

    <p className="mt-5 text-lg leading-8 text-blue-100">
      Every lesson is prepared according to the latest SSC typing
      examination pattern. Learn systematically and practice with
      confidence.
    </p>

  </div>

  <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

    <div className="space-y-6">

      {[
        "Official SSC Typing Pattern",
        "Structured Daily Learning Plan",
        "Step-by-Step Lessons",
        "Speed & Accuracy Techniques",
        "Real Exam Practice",
        "Latest Updated Content",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-4"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">

            <span className="text-lg font-bold text-green-700">
              ✓
            </span>

          </div>

          <span className="text-lg font-medium text-slate-700">
            {item}
          </span>

        </div>
      ))}

    </div>

  </div>

</motion.section>

{/* ================= CTA ================= */}

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-center text-white"
>

  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
    Ready to Practice?
  </span>

  <h2 className="mt-6 text-5xl font-bold">
    Start Your SSC Typing Journey Today
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
    Combine professional learning with real SSC typing tests and
    monitor your progress through detailed performance reports.
  </p>

  <Link
    href="/practice/cgl"
    className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
  >
    Start Practice
    <ArrowRight size={20} />
  </Link>

</motion.section>
{/* ================= FEATURES ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="space-y-8"
>
  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
      Why Thousands of Aspirants Choose SSC Typing Hub
    </span>

    <h2 className="mt-5 text-5xl font-bold text-slate-900">
      Learn Smarter, Practice Better
    </h2>

    <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-600">
      Our learning system combines structured study material,
      official SSC typing passages, smart analytics and real-time
      performance tracking to help you crack the SSC Typing Test
      with confidence.
    </p>

  </div>

  <div className="grid gap-8 lg:grid-cols-3">

    {[
      {
        emoji:"⚡",
        title:"Real SSC Pattern",
        desc:"Every lesson and typing passage follows the latest SSC examination pattern.",
      },
      {
        emoji:"📈",
        title:"Performance Tracking",
        desc:"Track WPM, Accuracy, Errors and Daily Progress automatically.",
      },
      {
        emoji:"🎯",
        title:"Focused Learning",
        desc:"Study only what matters for SSC typing examinations.",
      },
      {
        emoji:"🧠",
        title:"Expert Strategy",
        desc:"Preparation roadmap created for beginners and experienced aspirants.",
      },
      {
        emoji:"💻",
        title:"Unlimited Practice",
        desc:"Practice anytime with mock tests and real typing passages.",
      },
      {
        emoji:"🏆",
        title:"Exam Ready",
        desc:"Build confidence before attempting the official typing examination.",
      },
    ].map((item)=>(
      <div
        key={item.title}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >

        <div className="text-5xl">
          {item.emoji}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</motion.section>

{/* ================= STATS ================= */}

<motion.section
  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }}
  viewport={{ once:true }}
  className="rounded-[32px] bg-gradient-to-r from-[#0A4EA3] via-[#1565C0] to-[#1E88E5] p-12 text-white"
>

  <div className="grid gap-10 text-center md:grid-cols-4">

    <div>

      <h2 className="text-5xl font-bold">
        50+
      </h2>

      <p className="mt-2 text-blue-100">
        Learning Guides
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-bold">
        500+
      </h2>

      <p className="mt-2 text-blue-100">
        Practice Passages
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-bold">
        30+
      </h2>

      <p className="mt-2 text-blue-100">
        Mock Tests
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-bold">
        100%
      </h2>

      <p className="mt-2 text-blue-100">
        SSC Focused
      </p>

    </div>

  </div>

</motion.section>

{/* ================= QUOTE ================= */}

<section className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-sm">

  <blockquote className="mx-auto max-w-5xl text-center">

    <p className="text-3xl font-semibold leading-relaxed text-slate-800">
      "Typing speed alone does not guarantee success.
      Consistent accuracy, disciplined practice and
      regular mock tests are the keys to clearing
      the SSC Typing Examination."
    </p>

    <footer className="mt-8 text-lg font-medium text-blue-700">
      — SSC Typing Hub Learning Team
    </footer>

  </blockquote>

</section>

    </div>
  );
}