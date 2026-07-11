"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
   <section className="relative overflow-hidden min-h-screen flex items-center">
  {/* Floating Particles */}

  {/* Dotted particles */}
  <div className="absolute left-8 top-40 opacity-20 z-0">
    <div className="grid grid-cols-6 gap-3">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 bg-cyan-400 rounded-full"
        />
      ))}
    </div>
  </div>

  <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
  <div className="absolute top-40 right-32 w-4 h-4 rounded-full bg-blue-500 animate-bounce" />
<div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />

<div className="absolute top-40 right-32 w-4 h-4 rounded-full bg-blue-500 animate-bounce" />

<div className="absolute bottom-32 left-1/4 w-3 h-3 rounded-full bg-purple-400 animate-pulse" />

<div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-white animate-ping" />

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[#020617]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,191,255,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.12),transparent_40%)]" />

      <div className="absolute left-[40%] top-[45%] w-[600px] h-[180px] rotate-12 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-[90px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-white/10
              border
              border-white/20
              text-white
              backdrop-blur-xl
            "
            >
               Built For SSC & Government Exam Aspirants
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
              mt-8
              text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[0.95]
              text-white
            "
            >
              Crack Your
              <br />

              <span className="text-white">
                Typing Test
              </span>

              <br />

             <span
className="
bg-gradient-to-r
from-cyan-300
via-blue-400
to-purple-400
bg-clip-text
text-transparent
drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]
"
>
 First Try.
</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
              mt-8
              text-xl
              text-slate-300
              max-w-2xl
              leading-relaxed
            "
            >
              Practice SSC CGL, CHSL, Railway, Court and State
              Government typing exams with real exam-level
              passages, live speed tracking and detailed
              performance analytics.
            </motion.p>
            <div
  className="
  mt-8
  inline-flex
  items-center
  gap-4
  px-6
  py-4
  rounded-2xl
  border
  border-cyan-400/20
  bg-gradient-to-r
  from-cyan-500/10
  to-blue-500/10
  backdrop-blur-xl
  shadow-lg
  shadow-cyan-500/10
  "
>

  <div
    className="
    w-14
    h-14
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    flex
    items-center
    justify-center
    text-2xl
    "
  >
    🎓
  </div>

  <div>
    <p className="text-white font-extrabold text-lg">
      Built By IITian
      
    </p>
<div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-400/20">

  <span className="text-yellow-400">
    ⭐
  </span>

  <span className="text-yellow-300 font-semibold">
    Trusted By 12,000+ Aspirants
  </span>

</div>
    <p className="text-slate-300 text-sm">
      Designed For Government Exam Aspirants
    </p>
  </div>

</div>

            {/* FEATURES */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
              flex
              flex-wrap
              gap-6
              mt-8
              text-slate-300
            "
            >
              <span>✓ Real Exam Passages</span>
              <span>✓ Live WPM Tracking</span>
              <span>✓ Accuracy Reports</span>
            </motion.div>
             

 
            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-10"
            >

 

        <Link
 href="/practice"
 className="
 px-8
 py-4
 rounded-2xl
 font-semibold
 text-white
 bg-gradient-to-r
 from-blue-600
 to-cyan-500
 hover:scale-105
 transition
 shadow-xl
 shadow-blue-500/30
 border border-cyan-400/30
bg-white/[0.03]
backdrop-blur-xl
 "
>
 Practice Tests
</Link>

             <Link
 href="/history"
 className="
 px-8
 py-4
 rounded-2xl
 border
 border-white/20
 text-white
bg-white/[0.03]
border border-cyan-400/20
backdrop-blur-3xl
shadow-[0_0_60px_rgba(0,180,255,0.15)]
 backdrop-blur-xl
 hover:bg-white/10
 transition
 "
>
 View History
</Link>


            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div
              className="
rounded-[32px]
border
border-cyan-400/20
bg-white/[0.03]
backdrop-blur-3xl
p-10
shadow-[0_0_60px_rgba(0,180,255,0.15)]
"
            >

              <h3 className="text-3xl font-bold text-white">
                Performance Snapshot
              </h3>

              <div className="grid grid-cols-3 gap-5 mt-8">

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                  <h4 className="text-5xl font-black text-blue-400">
                    42
                  </h4>
                  <p className="text-slate-400 mt-2">
                    WPM
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                  <h4 className="text-5xl font-black text-green-400">
                    97%
                  </h4>
                  <p className="text-slate-400 mt-2">
                    Accuracy
                  </p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
                  <h4 className="text-5xl font-black text-orange-400">
                    3
                  </h4>
                  <p className="text-slate-400 mt-2">
                    Errors
                  </p>
                </div>

              </div>
             {/* Mini Chart */}

<div className="mt-10">

  <div className="flex items-end justify-between h-32 gap-2">

    <div className="w-full bg-blue-500 rounded-t-xl h-12 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

    <div className="w-full bg-blue-500 rounded-t-xl h-12 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

    <div className="w-full bg-blue-500 rounded-t-xl h-12 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

    <div className="w-full bg-cyan-500 rounded-t-xl h-24 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>


    <div className="w-full bg-cyan-400 rounded-t-xl h-28 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>


    <div className="w-full bg-green-400 rounded-t-xl h-32 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>


  </div>

  <p className="text-center text-slate-400 mt-3 text-sm">
    WPM Growth Trend
  </p>

</div>
              {/* Progress Bar */}

              <div className="mt-10">

                <div className="flex justify-between text-slate-400 mb-3">
                  <span>Typing Progress</span>
                  <span>+12%</span>
                </div>

                <div className="h-4 rounded-full bg-white/10 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                    }}
                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                  "
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}