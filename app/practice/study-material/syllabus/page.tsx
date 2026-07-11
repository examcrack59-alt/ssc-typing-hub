"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  ClipboardList,
  Target,
  Award,
} from "lucide-react";

export default function SyllabusPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-2 pb-16">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-700 via-blue-700 to-indigo-700 p-10 text-white shadow-2xl"
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <Link
              href="/practice/study-material/strategy"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              Previous Lesson
            </Link>

            <span className="mt-8 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Lesson 6 • SSC Typing Syllabus
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Official SSC
              <br />
              Typing Syllabus
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Understand the complete typing syllabus, qualifying
              standards, typing requirements and skill test pattern
              for various SSC examinations.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

                <p className="text-3xl font-bold">
                  6+
                </p>

                <span className="text-sm text-blue-100">
                  SSC Exams
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

                <p className="text-3xl font-bold">
                  Official
                </p>

                <span className="text-sm text-blue-100">
                  Pattern
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

                <p className="text-3xl font-bold">
                  Updated
                </p>

                <span className="text-sm text-blue-100">
                  Guidelines
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative rounded-[34px] bg-white p-10 shadow-2xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                <BookOpen size={60} />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
                Official Syllabus
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Everything you need to know before appearing in the SSC
                Typing Skill Test.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <FileText className="mx-auto text-blue-600" size={28} />

                  <p className="mt-2 font-bold text-slate-900">
                    Pattern
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <Target className="mx-auto text-green-600" size={28} />

                  <p className="mt-2 font-bold text-slate-900">
                    Skills
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



      {/* ================= OVERVIEW ================= */}

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
            This lesson explains the official SSC typing syllabus,
            qualifying criteria, typing speed requirements, exam
            pattern and important guidelines for all major SSC
            examinations.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: ClipboardList,
              title: "Exam Pattern",
              desc: "Understand the official typing test structure.",
            },
            {
              icon: GraduationCap,
              title: "Qualification",
              desc: "Know qualifying standards and requirements.",
            },
            {
              icon: FileText,
              title: "Typing Test",
              desc: "Typing duration and speed requirements.",
            },
            {
              icon: Award,
              title: "Preparation",
              desc: "Prepare according to official standards.",
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



      {/* ================= WHY KNOW THE SYLLABUS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Why Learn the Syllabus?
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Know What You're Preparing For
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Understanding the official SSC typing syllabus helps you
              focus on the right skills. It removes confusion, saves
              preparation time and ensures that you practice according
              to the actual examination pattern.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A candidate who clearly understands the exam requirements
              can prepare more efficiently and perform confidently in
              the typing skill test.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Benefits
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Clear Preparation Plan
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Time Management
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Official Exam Understanding
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Higher Confidence
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Better Exam Performance
              </div>

            </div>

          </div>

        </div>

      </motion.section>
            {/* ================= EXAM PATTERNS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            SSC Exam Pattern
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Typing Tests Across SSC Exams
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Every SSC examination has a different typing or skill test.
            Understand the requirements before starting your preparation.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* CHSL */}

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-600 p-4 text-white">
                <FileText size={30} />
              </div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  SSC CHSL
                </h3>

                <p className="text-blue-700">
                  Typing Skill Test
                </p>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="rounded-xl bg-white p-4">
                ⏱ Duration : 10 Minutes
              </div>

              <div className="rounded-xl bg-white p-4">
                💻 English / Hindi Typing
              </div>

              <div className="rounded-xl bg-white p-4">
                🎯 Qualifying Nature
              </div>

              <div className="rounded-xl bg-white p-4">
                📄 Passage Based Typing
              </div>

            </div>

          </div>

          {/* CGL */}

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-green-600 p-4 text-white">
                <Target size={30} />
              </div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  SSC CGL
                </h3>

                <p className="text-green-700">
                  DEST
                </p>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="rounded-xl bg-white p-4">
                ⏱ 15 Minutes
              </div>

              <div className="rounded-xl bg-white p-4">
                ⌨ Data Entry Skill Test
              </div>

              <div className="rounded-xl bg-white p-4">
                🎯 Qualifying Nature
              </div>

              <div className="rounded-xl bg-white p-4">
                📊 Official Speed Requirement
              </div>

            </div>

          </div>

        </div>

      </motion.section>



      {/* ================= OTHER EXAMS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Other Exams
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Additional Typing Tests
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            {
              exam: "SSC MTS",
              detail: "Basic Typing Practice Recommended",
              color: "border-orange-300"
            },
            {
              exam: "SSC Stenographer",
              detail: "Skill Test After Written Exam",
              color: "border-purple-300"
            },
            {
              exam: "Railway Exams",
              detail: "Depends On Specific Post",
              color: "border-cyan-300"
            },
          ].map((item)=>(

            <div
              key={item.exam}
              className={`rounded-3xl border ${item.color} bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl`}
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {item.exam}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {item.detail}
              </p>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= COMPARISON TABLE ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Comparison
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            SSC Typing Test Comparison
          </h2>

        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-5 text-left">Exam</th>
                <th className="p-5 text-left">Duration</th>
                <th className="p-5 text-left">Mode</th>
                <th className="p-5 text-left">Nature</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["CHSL","10 Min","Typing","Qualifying"],
                ["CGL","15 Min","DEST","Qualifying"],
                ["Steno","Skill Test","Stenography","Qualifying"],
                ["Railway","Depends","Typing","Post Based"],
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

                  <td className="p-5">
                    {row[2]}
                  </td>

                  <td className="p-5 text-green-600 font-semibold">
                    {row[3]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.section>
            {/* ================= ENGLISH VS HINDI ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Language Options
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            English vs Hindi Typing
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            SSC allows candidates to appear in English or Hindi typing,
            depending on the examination and post. Choose the language in
            which you are most comfortable.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">

            <div className="text-5xl">🇬🇧</div>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              English Typing
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">

              <li>✔ QWERTY Keyboard Layout</li>
              <li>✔ Most Popular Choice</li>
              <li>✔ Easy Practice Resources</li>
              <li>✔ Faster Learning Curve</li>

            </ul>

          </div>

          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">

            <div className="text-5xl">🇮🇳</div>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              Hindi Typing
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">

              <li>✔ Hindi Keyboard Layout</li>
              <li>✔ Practice Required</li>
              <li>✔ Language Proficiency Needed</li>
              <li>✔ Available for Eligible Exams</li>

            </ul>

          </div>

        </div>

      </motion.section>



      {/* ================= QUALIFYING STANDARDS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Qualifying Standards
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            What SSC Evaluates
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            "Typing Speed",
            "Accuracy",
            "Formatting",
            "Time Management",
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
            >

              <div className="text-5xl">
                ⭐
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= IMPORTANT RULES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Official Guidelines
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Important Typing Rules
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "Read the passage carefully.",
            "Follow official instructions.",
            "Do not panic during typing.",
            "Avoid unnecessary corrections.",
            "Manage your time wisely.",
            "Stay focused throughout the test.",
            "Practice with official passages.",
            "Maintain proper posture.",
          ].map((rule)=>(

            <div
              key={rule}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              ✅ {rule}
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
            Common Errors During Typing Test
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            "Typing Too Fast",
            "Ignoring Accuracy",
            "Wrong Finger Placement",
            "Skipping Punctuation",
            "Too Much Backspace",
            "Poor Concentration",
          ].map((mistake)=>(

            <div
              key={mistake}
              className="rounded-3xl border border-red-200 bg-white p-8 transition hover:shadow-xl"
            >

              <div className="text-5xl">
                ❌
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {mistake}
              </h3>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= IMPORTANT NOTES ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-yellow-200 bg-yellow-50 p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Important Notes
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Before Appearing in the Exam
          </h2>

        </div>

        <div className="mt-10 space-y-5">

          {[
            "Practice using a desktop keyboard.",
            "Read the official SSC notification carefully.",
            "Revise typing rules regularly.",
            "Attempt full-length mock tests.",
            "Stay calm and confident during the examination.",
          ].map((note)=>(

            <div
              key={note}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              📌 {note}
            </div>

          ))}

        </div>

      </motion.section>
            {/* ================= FAQ ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            SSC Typing Test FAQs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            These are the most common questions asked by SSC typing
            aspirants before appearing in the skill test.
          </p>

        </div>

        <div className="mt-12 space-y-6">

          {[
            {
              q: "Is the SSC Typing Test qualifying in nature?",
              a: "Yes. In most SSC examinations the typing test is qualifying in nature. Candidates must achieve the required standard."
            },
            {
              q: "Can I choose English or Hindi typing?",
              a: "Depending on the examination notification, candidates may choose English or Hindi typing."
            },
            {
              q: "How should I prepare for the typing test?",
              a: "Practice daily with timed passages, maintain high accuracy and attempt regular mock tests."
            },
            {
              q: "Is accuracy more important than speed?",
              a: "Both are important, but maintaining high accuracy while achieving the required speed is essential."
            },
            {
              q: "Should I practice mock tests daily?",
              a: "Yes. Regular mock tests improve confidence and exam readiness."
            },
          ].map((faq) => (

            <div
              key={faq.q}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >

              <h3 className="text-xl font-bold text-slate-900">
                {faq.q}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </motion.section>



      {/* ================= EXPERT TIPS ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-10 text-white shadow-xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Expert Tips
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Advice From Successful Candidates
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Practice Every Day",
            "Never Ignore Accuracy",
            "Review Every Mock Test",
            "Stay Calm During Exam",
          ].map((tip)=>(

            <div
              key={tip}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur"
            >

              <div className="text-5xl">
                🏆
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {tip}
              </h3>

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
            One-Minute Revision
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {[
            "Understand the exam pattern.",
            "Practice official typing passages.",
            "Maintain proper finger placement.",
            "Attempt timed mock tests.",
            "Improve speed gradually.",
            "Maintain 98–99% accuracy.",
            "Revise typing rules.",
            "Stay confident on exam day.",
          ].map((item)=>(

            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              ✅ {item}
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
            Key Takeaways
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Understanding the official SSC typing syllabus helps you
            prepare according to the real examination pattern. Focus on
            speed, maintain excellent accuracy, practice with official
            style passages and revise regularly. Consistency is the key
            to success in every SSC typing examination.
          </p>

        </div>

      </motion.section>



      {/* ================= CTA ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 p-12 text-white shadow-2xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Ready to Practice?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Start Your SSC Typing Practice
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Put your preparation into action with real SSC typing
            passages, full-length mock tests and performance analytics.
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
              📝 Mock Tests
            </Link>

          </div>

        </div>

      </motion.section>



      {/* ================= NAVIGATION ================= */}

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <Link
          href="/practice/study-material/strategy"
          className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 shadow-sm transition hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Previous Lesson
        </Link>

        <Link
          href="/practice"
          className="flex items-center gap-3 rounded-2xl bg-blue-700 px-8 py-5 font-semibold text-white shadow-lg transition hover:bg-blue-800"
        >
          Go to Practice
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}