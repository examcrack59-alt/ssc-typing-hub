import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Test",
      desc: "Select Easy, Moderate or Hard typing tests based on your preparation level.",
    },
    {
      number: "02",
      title: "Start Typing",
      desc: "Practice with real exam-level passages and monitor your speed in real time.",
    },
    {
      number: "03",
      title: "Get Detailed Report",
      desc: "Analyze WPM, accuracy, mistakes and overall performance instantly.",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="
            inline-flex
            px-5
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-400
            font-semibold
          "
          >
            Simple Process
          </span>

          <h2
            className="
            mt-6
            text-5xl
            md:text-6xl
            font-black
            text-white
          "
          >
            How It Works
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
            Improve your typing speed in just three simple steps.
            Designed specially for SSC, Railway and Court exams.
          </p>

        </div>

        {/* Steps */}

        <div className="relative">

          {/* Connecting Line */}

          <div
            className="
            hidden
            lg:block
            absolute
            top-16
            left-0
            right-0
            h-1
            bg-gradient-to-r
            from-blue-500
            via-cyan-500
            to-blue-500
            opacity-30
          "
          />

          <div className="grid lg:grid-cols-3 gap-8">

            {steps.map((step) => (
              <div
                key={step.number}
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                text-center
                hover:-translate-y-3
                hover:border-cyan-500/40
                transition-all
                duration-500
              "
              >

                {/* Glow */}

                <div
                  className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  rounded-full
                  bg-cyan-500/20
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
                />

                {/* Number */}

                <div
                  className="
                  relative
                  z-10
                  w-24
                  h-24
                  mx-auto
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  font-black
                  shadow-lg
                "
                >
                  {step.number}
                </div>

                <h3
                  className="
                  mt-8
                  text-3xl
                  font-black
                  text-white
                "
                >
                  {step.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-400
                  leading-relaxed
                "
                >
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <Link
            href="/practice/cgl"
            className="
            inline-flex
            items-center
            gap-3
            px-10
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-bold
            text-lg
            shadow-xl
            shadow-blue-500/20
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Start Free Practice
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}