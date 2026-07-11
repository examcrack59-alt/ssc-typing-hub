import {
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

export default function TrustBar() {
  const exams = [
    "SSC CGL",
    "SSC CHSL",
    "SSC MTS",
    "Railway NTPC",
    "Court Typing",
    "Bihar SSC",
    "UPSSSC",
    "State Exams",
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#050B1F]">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

<div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Heading */}

        <div className="text-center">

          <span
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
           bg-white/5
border border-cyan-500/20
text-cyan-300
backdrop-blur-xl
            font-semibold
          "
          >
            Trusted Platform
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-black
           text-white
          "
          >
            Trusted By Aspirants
          </h2>

          <p
            className="
            mt-5
            text-lg
            text-slate-400
            max-w-2xl
            mx-auto
          "
          >
            Designed specifically for SSC, Railway,
            Court and State Government typing exams.
          </p>

        </div>

        {/* Stats */}

        <div
          className="
          mt-12
          grid
          md:grid-cols-3
          gap-6
        "
        >
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          <div
           className="
rounded-3xl
border border-blue-500/30
bg-gradient-to-br from-blue-500/10 to-slate-900/80
backdrop-blur-xl
p-8
text-center
shadow-[0_0_35px_rgba(59,130,246,0.18)]
hover:scale-105
hover:border-blue-400
transition-all
duration-300
"
          >
            <Users
              size={42}
              className="mx-auto text-blue-400"
            />

           <h3 className="mt-4 text-4xl font-black text-blue-300">
              12K+
            </h3>

            <p className="text-slate-500">
              Active Students
            </p>
          </div>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          <div
           className="
rounded-3xl
border border-emerald-500/30
bg-gradient-to-br from-emerald-500/10 to-slate-900/80
backdrop-blur-xl
p-8
text-center
shadow-[0_0_35px_rgba(16,185,129,0.18)]
hover:scale-105
hover:border-emerald-400
transition-all
duration-300
"
          >
            <Trophy
  size={42}
  className="mx-auto text-emerald-400"
/>

            <h3 className="mt-4 text-4xl font-black text-emerald-300">
              50K+
            </h3>

            <p className="text-slate-500">
              Tests Completed
            </p>
          </div>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          <div
          className="
rounded-3xl
border border-amber-500/30
bg-gradient-to-br from-amber-500/10 to-slate-900/80
backdrop-blur-xl
p-8
text-center
shadow-[0_0_35px_rgba(245,158,11,0.18)]
hover:scale-105
hover:border-amber-400
transition-all
duration-300
"
          >
            <ShieldCheck
  size={42}
  className="mx-auto text-amber-400"
/>

            <h3 className="mt-4 text-4xl font-black text-amber-300">
              95%
            </h3>

            <p className="text-slate-500">
              Success Rate
            </p>
          </div>

        </div>

     {/* Moving Exam Chips */}

<div className="relative mt-16 overflow-hidden">

  <div className="flex w-max animate-marquee gap-5">

    {[...exams, ...exams].map((exam, index) => {

      const colors = [
        "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
        "from-emerald-500/20 to-green-500/20 border-emerald-400/30",
        "from-purple-500/20 to-pink-500/20 border-purple-400/30",
        "from-orange-500/20 to-red-500/20 border-orange-400/30",
        "from-yellow-500/20 to-amber-500/20 border-yellow-400/30",
        "from-indigo-500/20 to-violet-500/20 border-indigo-400/30",
      ];

      return (
        <div
          key={index}
          className={`
            group
            flex-shrink-0
            relative
            overflow-hidden
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            ${colors[index % colors.length]}
            border
            backdrop-blur-xl
            hover:scale-110
            hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
            transition-all
            duration-300
            cursor-pointer
          `}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <span className="relative z-10 font-bold text-white">
            {exam}
          </span>
        </div>
      );
    })}

  </div>

</div>
</div>

    </section>
  );
}