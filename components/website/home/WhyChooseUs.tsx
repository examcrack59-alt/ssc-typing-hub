"use client";

import Link from "next/link";
import {
  ArrowRight,
  Trophy,
  BarChart3,
  Gauge,
  BookOpen,
  RefreshCcw,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Official SSC Pattern",
    description:
      "Practice on real SSC CGL, CHSL, MTS and other government exam level typing passages.",
    icon: Target,
    color:
      "from-blue-500 to-cyan-500",
  },
  {
    title: "Live WPM Tracking",
    description:
      "Track Gross WPM, Net WPM, Accuracy and Errors in real time while typing.",
    icon: Gauge,
    color:
      "from-green-500 to-emerald-500",
  },
  {
    title: "Detailed Analytics",
    description:
      "Understand your strengths and weaknesses through charts, history and reports.",
    icon: BarChart3,
    color:
      "from-purple-500 to-indigo-600",
  },
  {
    title: "Leaderboard",
    description:
      "Compete with thousands of aspirants and improve your national ranking.",
    icon: Trophy,
    color:
      "from-yellow-500 to-orange-500",
  },
  {
    title: "Study Notes",
    description:
      "Learn expert typing strategies and exam preparation techniques.",
    icon: BookOpen,
    color:
      "from-pink-500 to-rose-500",
  },
  {
    title: "Unlimited Practice",
    description:
      "Practice anytime without daily limits and master your typing skills.",
    icon: RefreshCcw,
    color:
      "from-cyan-500 to-blue-600",
  },
];

const stats = [
  {
    value: "12,000+",
    label: "Active Students",
  },
  {
    value: "1,500+",
    label: "Practice Passages",
  },
  {
    value: "50,000+",
    label: "Tests Completed",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2">

  <span className="text-green-600">
    ✔
  </span>

  <span className="font-semibold text-green-700">
    Trusted by 12,000+ Government Exam Aspirants
  </span>

</div>

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            ⭐ WHY CHOOSE SSC TYPING HUB
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
            Everything You Need To Crack
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              SSC Typing Exams
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Designed for SSC, CHSL, MTS, CPO, Railway and
            other Government typing exams with official
            passages, live analytics and performance
            tracking.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.slice(0, 3).map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >

                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${feature.color}
                    text-white
                    shadow-lg
                  `}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
<div className="mt-6 flex items-center justify-between">

  <span className="text-sm font-semibold text-slate-500">
    Learn More
  </span>

  <ArrowRight
    size={18}
    className="text-blue-600 transition-all duration-300 group-hover:translate-x-2"
  />

</div>
              </div>
            );
          })}
                  {/* Remaining Features */}

        {features.slice(3).map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                group
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-200
                hover:shadow-2xl
              "
            >
              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  ${feature.color}
                  text-white
                  shadow-lg
                `}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}

      </div>

      {/* Stats */}

      <div className="mt-24 rounded-[36px] bg-gradient-to-r from-slate-900 via-[#0A4EA3] to-cyan-700 p-10 shadow-2xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-5xl font-black text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-lg text-cyan-100">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Bottom CTA */}

      <div className="mt-24 text-center">

        <h3 className="text-4xl font-black text-slate-900">
          Ready To Improve Your Typing?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Join thousands of SSC aspirants who practice daily
          using official exam-level typing passages and detailed
          performance analytics.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="/practice"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-indigo-600
              px-10
              py-5
              text-lg
              font-bold
              text-white
              shadow-xl
              shadow-blue-500/30
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Start Free Practice

            <ArrowRight size={22} />
          </Link>

          <Link
            href="/practice/leaderboard"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-10
              py-5
              text-lg
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-300
              hover:text-blue-600
              hover:shadow-lg
            "
          >
            View Leaderboard

            <Trophy size={22} />
          </Link>

        </div>

      </div>
            {/* Decorative Floating Elements */}

      <div className="pointer-events-none absolute left-10 top-40 hidden h-4 w-4 animate-pulse rounded-full bg-cyan-400 lg:block" />

      <div className="pointer-events-none absolute right-16 top-60 hidden h-6 w-6 animate-bounce rounded-full bg-blue-500/60 lg:block" />

      <div className="pointer-events-none absolute bottom-32 left-1/4 hidden h-3 w-3 rounded-full bg-purple-500 lg:block" />

      <div className="pointer-events-none absolute bottom-16 right-1/3 hidden h-5 w-5 rounded-full bg-cyan-400/60 blur-sm lg:block" />

      {/* Bottom Divider */}

      <div className="mt-24 border-t border-slate-200 pt-10">

        <p className="text-center text-sm leading-7 text-slate-500">

          Trusted by thousands of SSC, CHSL, MTS, CPO, Railway
          and Government Exam aspirants across India.

        </p>

      </div>

    </div>
  </section>
  );
}