export default function HeroStatsBar() {
  const stats = [
    {
      value: "50K+",
      label: "Tests Completed",
      color: "text-cyan-400",
      bg: "bg-cyan-500",
      glow: "from-cyan-500/20",
    },
    {
      value: "12K+",
      label: "Active Students",
      color: "text-emerald-400",
      bg: "bg-emerald-500",
      glow: "from-emerald-500/20",
    },
    {
      value: "500+",
      label: "Practice Passages",
      color: "text-violet-400",
      bg: "bg-violet-500",
      glow: "from-violet-500/20",
    },
    {
      value: "95%",
      label: "Success Rate",
      color: "text-amber-400",
      bg: "bg-amber-500",
      glow: "from-amber-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-transparent" />

      {/* Aurora */}

      <div className="absolute inset-0 -z-40 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[150px]" />

      </div>

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        -z-30
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        [background-size:70px_70px]
      "
      />

      {/* Container */}

      <div className="mx-auto max-w-7xl">

        {/* Card */}

        <div
          className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-cyan-500/10
          bg-[#08111f]/75
          backdrop-blur-3xl
          shadow-[0_30px_90px_rgba(0,0,0,.65)]
        "
        >

          {/* Inner Border */}

          <div className="absolute inset-0 rounded-[36px] border border-white/5" />

          {/* Glass Reflection */}

          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.04] via-transparent to-transparent" />

          {/* Top Gradient */}

          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />

          {/* Noise */}

          <div
            className="
            absolute
            inset-0
            opacity-[0.02]
            bg-[radial-gradient(circle,rgba(255,255,255,.12)_1px,transparent_1px)]
            [background-size:18px_18px]
          "
          />

          {/* Grid */}

          <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((item, index) => (
              <div
                key={item.label}
                className={`
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-14
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-cyan-500/[0.04]

                  ${
                    index !== stats.length - 1
                      ? "lg:border-r border-cyan-500/10"
                      : ""
                  }

                  ${
                    index < 2
                      ? "border-b lg:border-b-0 border-cyan-500/10"
                      : ""
                  }
                `}
              >
                {/* Hover Glow */}

                <div
                  className={`
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100

                    bg-gradient-to-br
                    ${item.glow}
                    via-transparent
                    to-transparent
                  `}
                />

                {/* Floating Blur */}

                <div
                  className={`
                    absolute
                    -top-24
                    -right-24
                    h-56
                    w-56
                    rounded-full
                    ${item.bg}/10
                    blur-[90px]
                    opacity-0
                    transition
                    duration-700
                    group-hover:opacity-100
                  `}
                />

                {/* Top Dot */}

                <div
                  className={`
                    absolute
                    right-6
                    top-6
                    h-2.5
                    w-2.5
                    rounded-full
                    ${item.bg}
                    shadow-lg
                  `}
                />

                {/* Number */}

                <h2
                  className={`
                    relative
                    z-10
                    text-5xl
                    lg:text-6xl
                    font-black
                    tracking-tight
                    ${item.color}
                    transition
                    duration-500
                    group-hover:scale-105
                  `}
                >
                  {item.value}
                </h2>

                {/* Label */}

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-base
                    font-medium
                    text-slate-500
                  "
                >
                  {item.label}
                </p>

                {/* Animated Bottom Line */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    transition-all
                    duration-500
                    group-hover:w-24
                    ${item.bg}
                  `}
                />

                {/* Shine */}

                <div
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                  "
                />

              </div>
            ))}

          </div>

          {/* Bottom Glow */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cyan-500/[0.03] to-transparent" />

        </div>

      </div>

    </section>
  );
}