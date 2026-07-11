"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, Play } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A4EA3] via-[#1E63D6] to-[#2F80ED] px-10 py-10 text-white shadow-xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">

         <span className="text-sm uppercase tracking-[4px] text-blue-100">
  SSC Typing Practice Platform
</span>

<h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
  Welcome to
  <br />
  SSC Typing Hub
</h1>

<p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
  Practice with real SSC typing passages, improve your speed and accuracy,
  and prepare confidently for SSC CGL, CHSL, MTS, GD, CPO and
  Stenographer examinations.
</p>

          <div className="mt-8 flex flex-wrap gap-4">

             

          </div>

        </div>

        {/* Right Card */}
        <div className="hidden lg:block">

          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl">

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">

              <Image
                src="/images/ssc-logo.png"
                alt="SSC Watermark"
                width={220}
                height={220}
              />

            </div>

            <div className="relative z-10 flex h-[320px] w-[340px] flex-col items-center justify-center">

              {/* Logo Circle */}
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl ring-8 ring-white/40">
  <Image
    src="/logos/ssc1.png"
    alt="SSC Logo"
    width={95}
    height={95}
    className="rounded-full object-cover"
    priority
  />
</div>

              {/* Performance */}
              <h2 className="mt-8 text-5xl font-extrabold text-slate-800">
                A+
              </h2>

              <h3 className="mt-2 text-4xl font-black text-[#0A4EA3]">
                98%
              </h3>

              <p className="mt-3 text-lg font-medium text-slate-500">
                Typing Performance
              </p>

              {/* Bottom Stats */}
              <div className="mt-8 flex gap-8">

                <div className="text-center">
                  <h4 className="text-2xl font-bold text-slate-800">
                    150+
                  </h4>
                  <p className="text-sm text-slate-500">
                    Tests
                  </p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div className="text-center">
                  <h4 className="text-2xl font-bold text-slate-800">
                    95 WPM
                  </h4>
                  <p className="text-sm text-slate-500">
                    Best Speed
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}