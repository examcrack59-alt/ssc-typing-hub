"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 -z-50 bg-[#030712]" />

      {/* Aurora Layer */}
      <div className="absolute inset-0 -z-40 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-44
            -top-44
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/20
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 70, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-500/20
            blur-[170px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-220px]
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-sky-500/10
            blur-[180px]
          "
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-30
          bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_35%),linear-gradient(180deg,#020617_0%,#061224_45%,#030712_100%)]
        "
      />

      {/* Premium Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Light Beams */}
      <div
        className="
          absolute
          left-1/2
          top-[-350px]
          -z-10
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-cyan-500/5
          via-cyan-400/5
          to-transparent
          blur-[130px]
        "
      />

      <div
        className="
          absolute
          right-[-180px]
          top-40
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          left-[-150px]
          bottom-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-emerald-500/10
          blur-[120px]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -35, 0],
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.25,
            }}
            className="absolute rounded-full bg-cyan-300"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
          />
        ))}

      </div>

      {/* Noise */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E')]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
        "
      />
    </>
  );
}