"use client";

import CountUp from "react-countup";
import {
  Trophy,
  Users,
  FileText,
  Target,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: 50000,
      suffix: "+",
      label: "Tests Completed",
      icon: Trophy,
      color: "cyan",
    },
    {
      value: 12000,
      suffix: "+",
      label: "Active Students",
      icon: Users,
      color: "emerald",
    },
    {
      value: 500,
      suffix: "+",
      label: "Practice Passages",
      icon: FileText,
      color: "violet",
    },
    {
      value: 95,
      suffix: "%",
      label: "Success Rate",
      icon: Target,
      color: "amber",
    },
  ];

  const colors = {
    cyan: {
      border: "border-cyan-500/20",
      bg: "from-cyan-500/10 to-transparent",
      icon: "text-cyan-400",
      number: "text-cyan-300",
      shadow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]",
      hover: "hover:border-cyan-400",
    },

    emerald: {
      border: "border-emerald-500/20",
      bg: "from-emerald-500/10 to-transparent",
      icon: "text-emerald-400",
      number: "text-emerald-300",
      shadow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
      hover: "hover:border-emerald-400",
    },

    violet: {
      border: "border-violet-500/20",
      bg: "from-violet-500/10 to-transparent",
      icon: "text-violet-400",
      number: "text-violet-300",
      shadow: "hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]",
      hover: "hover:border-violet-400",
    },

    amber: {
      border: "border-amber-500/20",
      bg: "from-amber-500/10 to-transparent",
      icon: "text-amber-400",
      number: "text-amber-300",
      shadow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
      hover: "hover:border-amber-400",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050B1F] py-24">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl text-cyan-300 font-semibold">
            📊 Platform Statistics
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Trusted By Thousands
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
            Join India's fastest growing typing practice platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((item, index) => {

            const c = colors[item.color as keyof typeof colors];
            const Icon = item.icon;

            return (

              <div
                key={index}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  ${c.border}
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  ${c.hover}
                  ${c.shadow}
                `}
              >

                {/* Gradient */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-70`}
                />

                {/* Shine */}

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

                <div className="relative z-10">

                  <div
                    className={`
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/5
                      backdrop-blur-xl
                      ${c.icon}
                    `}
                  >
                    <Icon size={32} />
                  </div>

                  <h3
                    className={`mt-6 text-5xl font-black ${c.number}`}
                  >
                    <CountUp
                      end={item.value}
                      duration={3}
                    />
                    {item.suffix}
                  </h3>

                  <p className="mt-4 text-slate-300 font-medium">
                    {item.label}
                  </p>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}