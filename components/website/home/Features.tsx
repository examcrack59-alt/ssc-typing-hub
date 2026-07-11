import {
  Timer,
  Target,
  BarChart3,
  History,
  FileText,
  Trophy,
} from "lucide-react";

export default function Features() {
  const features = [
  {
    icon: Timer,
    title: "Real Time WPM",
    desc: "Track typing speed instantly while practicing.",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Accuracy Tracking",
    desc: "Monitor accuracy and reduce mistakes.",
    color: "emerald",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Detailed reports and improvement insights.",
    color: "violet",
  },
  {
    icon: History,
    title: "Test History",
    desc: "View previous attempts and compare results.",
    color: "orange",
  },
  {
    icon: FileText,
    title: "Exam-Level Passages",
    desc: "Practice with official-style typing passages.",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    desc: "Stay motivated with measurable growth.",
    color: "pink",
  },
];

return (
  <section className="relative overflow-hidden bg-[#050B1F] py-28">

    {/* Background Glow */}
    <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />
    <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[160px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_60%)]" />

    <div className="relative max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-24">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl px-6 py-3">
          <span className="text-yellow-400 text-lg">⭐</span>
          <span className="font-semibold text-cyan-300">
            Why Choose Us
          </span>
        </div>

        <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
          Everything{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            You Need
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-400">
          Powerful tools designed specifically for SSC, Railway,
          Court and Government typing examinations.
        </p>

      </div>
       </div>

{/* ================= TOP 4 CARDS ================= */}

<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

  {features.slice(0, 4).map((item, index) => {

    const Icon = item.icon;

    const colors = {
      cyan: {
        border: "border-cyan-500/20",
        icon: "text-cyan-300",
        glow: "from-cyan-500/10",
        link: "text-cyan-300",
      },
      emerald: {
        border: "border-emerald-500/20",
        icon: "text-emerald-300",
        glow: "from-emerald-500/10",
        link: "text-emerald-300",
      },
      violet: {
        border: "border-violet-500/20",
        icon: "text-violet-300",
        glow: "from-violet-500/10",
        link: "text-violet-300",
      },
      orange: {
        border: "border-orange-500/20",
        icon: "text-orange-300",
        glow: "from-orange-500/10",
        link: "text-orange-300",
      },
      blue: {
        border: "border-blue-500/20",
        icon: "text-blue-300",
        glow: "from-blue-500/10",
        link: "text-blue-300",
      },
      pink: {
        border: "border-pink-500/20",
        icon: "text-pink-300",
        glow: "from-pink-500/10",
        link: "text-pink-300",
      },
    };

    const c = colors[item.color as keyof typeof colors];

    return (
      <div
        key={index}
        className={`
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          ${c.border}
          bg-[#081325]
          p-9
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-[0_0_45px_rgba(34,211,238,.12)]
        `}
      >
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            ${c.glow}
            to-transparent
            opacity-70
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        <div className="relative z-10">

          <div
            className={`
              w-20
              h-20
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              ${c.icon}
              border
              ${c.border}
              shadow-[0_0_30px_rgba(255,255,255,.05)]
              group-hover:scale-110
              transition-all
            `}
          >
            <Icon size={40} />
          </div>

          <h3 className="mt-8 text-3xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-5 text-slate-400 leading-8">
            {item.desc}
          </p>

          <button
            className={`
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              ${c.link}
            `}
          >
            Learn More
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </button>

        </div>

      </div>
    );

  })}

</div>

{/* ================= BOTTOM 2 CARDS ================= */}

<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

  {features.slice(4).map((item, index) => {

    const Icon = item.icon;

    const colors = {
      blue: {
        border: "border-blue-500/20",
        icon: "text-blue-300",
        glow: "from-blue-500/10",
        link: "text-blue-300",
      },
      pink: {
        border: "border-pink-500/20",
        icon: "text-pink-300",
        glow: "from-pink-500/10",
        link: "text-pink-300",
      },
    };

    const c = colors[item.color as keyof typeof colors];

    return (
      <div
        key={index}
        className={`
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          ${c.border}
          bg-[#081325]
          p-9
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_0_45px_rgba(59,130,246,.12)]
        `}
      >
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            ${c.glow}
            to-transparent
            opacity-70
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        <div className="relative z-10">

          <div
            className={`
              w-20
              h-20
              rounded-3xl
              border
              ${c.border}
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              ${c.icon}
              shadow-[0_0_25px_rgba(255,255,255,.06)]
              group-hover:scale-110
              transition-all
            `}
          >
            <Icon size={40} />
          </div>

          <h3 className="mt-8 text-3xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-5 text-slate-400 leading-8">
            {item.desc}
          </p>

          <button
            className={`
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              ${c.link}
            `}
          >
            Learn More
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </button>

        </div>

      </div>
    );

  })}

</div>
{/* ================= BUILT FOR YOUR SUCCESS ================= */}

<div
  className="
    relative
    mt-16
    overflow-hidden
    rounded-[36px]
    border
    border-violet-500/20
    bg-gradient-to-r
    from-[#09152B]
    via-[#0B1128]
    to-[#120B30]
    p-8
    lg:p-12
  "
>

  {/* Background Glow */}

  <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/15 blur-[120px]" />

  <div className="absolute -right-24 bottom-0 w-80 h-80 rounded-full bg-violet-500/15 blur-[120px]" />

  <div className="relative z-10 grid lg:grid-cols-[1fr_360px] gap-10 items-center">

    {/* LEFT */}

    <div>

      <div className="flex items-center gap-6">

        <div
          className="
            w-24
            h-24
            rounded-[28px]
            border
            border-cyan-500/30
            bg-gradient-to-br
            from-cyan-500/20
            to-violet-500/20
            flex
            items-center
            justify-center
            shadow-[0_0_40px_rgba(34,211,238,.25)]
          "
        >
          <Trophy
            size={52}
            className="text-cyan-300"
          />
        </div>

        <div>

          <p className="text-cyan-300 font-semibold">
            Built For Your Success
          </p>

          <h2
            className="
              mt-2
              text-4xl
              md:text-5xl
              font-black
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-violet-400
              bg-clip-text
              text-transparent
            "
          >
            Everything In One Place
          </h2>

        </div>

      </div>

      <p
        className="
          mt-8
          text-lg
          leading-9
          text-slate-400
          max-w-2xl
        "
      >
        Practice with real exam passages, monitor WPM,
        improve accuracy, analyse mistakes and prepare for
        SSC, Railway, Court and Government typing exams
        using one modern dashboard.
      </p>

      {/* Feature Pills */}

      <div className="mt-10 flex flex-wrap gap-4">

        {[
          "Live WPM",
          "Accuracy",
          "Progress",
          "History",
          "Reports",
          "Analytics",
        ].map((item) => (

          <div
            key={item}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-xl
              px-5
              py-3
              text-cyan-300
              font-medium
            "
          >
            {item}
          </div>

        ))}

      </div>

    </div>

    {/* RIGHT */}

    <div className="relative flex justify-center">

      {/* Speed Ring */}

      <div
        className="
          absolute
          -top-6
          w-44
          h-44
          rounded-full
          border-[8px]
          border-cyan-400/20
          border-t-cyan-400
          border-r-violet-500
          rotate-45
          shadow-[0_0_70px_rgba(59,130,246,.35)]
        "
      />

        {/* Keyboard */}
      <div
        className="
          mt-12
          w-72
          rounded-3xl
          border
          border-violet-500/20
          bg-[#141A3A]
          p-5
          rotate-[-12deg]
          shadow-[0_25px_60px_rgba(0,0,0,.45)]
        "
      >
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="
                h-5
                rounded
                bg-gradient-to-b
                from-violet-500/70
                to-blue-500/60
              "
            />
          ))}
        </div>
      </div>

    </div> {/* Right */}

  </div> {/* Grid */}

</div> {/* Built For Your Success */}


</section>
);
}