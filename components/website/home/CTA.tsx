import Link from "next/link";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Effects */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-cyan-600" />

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          p-10
          md:p-16
          text-center
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        "
        >

          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-full
            bg-white/15
            border
            border-white/20
            text-white
            font-semibold
          "
          >
            🚀 Built For SSC, Railway & Court Aspirants
          </div>

          {/* Heading */}

          <h2
            className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            text-white
            leading-tight
          "
          >
            Ready To Improve
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              via-white
              to-blue-300
              bg-clip-text
              text-transparent
            "
            >
              Your Typing Speed?
            </span>
          </h2>

          {/* Description */}

          <p
            className="
            mt-6
            text-lg
            md:text-xl
            text-blue-100
            max-w-3xl
            mx-auto
          "
          >
            Practice with real exam-level passages, track WPM,
            improve accuracy and monitor your progress with
            detailed analytics.
          </p>

          {/* Stats */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-8
          "
          >
            <div className="flex items-center gap-2 text-white">
              <Users size={20} />
              <span>12,000+ Students</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <Trophy size={20} />
              <span>50,000+ Tests</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <Target size={20} />
              <span>95% Success Rate</span>
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
            mt-12
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
          "
          >

            <Link
              href="/practice"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-10
              py-5
              rounded-2xl
              bg-white
              text-slate-900
              font-bold
              text-lg
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
            >
              Start Free Practice
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/history"
              className="
              inline-flex
              items-center
              justify-center
              px-10
              py-5
              rounded-2xl
              border
              border-white/30
              bg-white/10
              backdrop-blur-xl
              text-white
              font-bold
              text-lg
              hover:bg-white/20
              transition-all
              duration-300
            "
            >
              View Results
            </Link>

          </div>

          {/* Trust Line */}

          <p className="mt-8 text-blue-100 text-sm">
            No Registration Required • Free Practice Tests • Instant Reports
          </p>

        </div>

      </div>

    </section>
  );
}