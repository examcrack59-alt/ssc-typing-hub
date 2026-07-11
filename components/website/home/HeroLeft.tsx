"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  "Real Exam Passages",
  "Live WPM Tracking",
  "Detailed Analytics",
  "Instant Results",
];

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-white/[0.05]
          px-5
          py-2.5
          backdrop-blur-2xl
        "
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-semibold tracking-wide text-cyan-300">
          INDIA'S MODERN TYPING PLATFORM
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
          mt-8
          text-5xl
          md:text-7xl
          xl:text-8xl
          font-black
          leading-[0.95]
          tracking-tight
          text-white
        "
      >
        Master Every
        <br />

        <span
          className="
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-violet-400
            bg-clip-text
            text-transparent
          "
        >
          SSC Typing
        </span>

        <br />

        Test.
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-300
        "
      >
        Practice official level SSC CGL, CHSL, Stenographer,
        MTS, CPO, Railway and Court typing tests with
        real exam passages, AI-powered analytics,
        detailed reports and an ultra smooth typing
        engine designed for maximum accuracy.
      </motion.p>

      {/* Trust Card */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="
          mt-10
          flex
          items-center
          gap-5
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-6
          backdrop-blur-3xl
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            text-3xl
          "
        >
          🎓
        </div>

        <div>

          <h3 className="text-xl font-bold text-white">
            Trusted By Government Aspirants
          </h3>

          <p className="mt-2 text-slate-400">
            Premium typing experience with official
            exam level passages and detailed analysis.
          </p>

        </div>
      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="
          mt-10
          flex
          flex-wrap
          gap-3
        "
      >
        {features.map((item) => (
          <div
            key={item}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-300
              backdrop-blur-xl
              transition
              hover:border-cyan-400/30
              hover:text-cyan-300
            "
          >
            ✓ {item}
          </div>
        ))}
      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="
          mt-12
          flex
          flex-wrap
          gap-5
        "
      >
        <Link
          href="/typing/easy"
          className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-violet-500
            px-9
            py-4
            text-lg
            font-bold
            text-white
            shadow-[0_0_40px_rgba(59,130,246,.45)]
            transition
            hover:-translate-y-1
            hover:scale-[1.03]
          "
        >
          Start Typing →
        </Link>

        <Link
          href="/practice"
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-9
            py-4
            text-lg
            font-semibold
            text-white
            backdrop-blur-2xl
            transition
            hover:bg-white/[0.08]
          "
        >
          Practice Tests
        </Link>
      </motion.div>

      {/* Bottom Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="
          mt-14
          flex
          flex-wrap
          gap-10
        "
      >
        <div>
          <h2 className="text-3xl font-black text-cyan-400">
            50K+
          </h2>

          <p className="mt-1 text-slate-400">
            Tests Completed
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black text-emerald-400">
            12K+
          </h2>

          <p className="mt-1 text-slate-400">
            Active Students
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black text-violet-400">
            500+
          </h2>

          <p className="mt-1 text-slate-400">
            Exam Passages
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}