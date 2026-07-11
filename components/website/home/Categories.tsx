import Link from "next/link";
import {
  Rocket,
  Target,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function Categories() {
  const tests = [
  {
    title: "Easy Test",
    description:
      "Beginner-friendly passages with simple vocabulary.",
    icon: Rocket,
    color: "blue",
    link: "/typing/easy",
  },
  {
    title: "Moderate Test",
    description:
      "Real exam-like passages and official formatting.",
    icon: Target,
    color: "green",
    link: "/typing/moderate",
  },
  {
    title: "Hard Test",
    description:
      "Advanced passages with long sentences and symbols.",
    icon: Trophy,
    color: "orange",
    link: "/typing/hard",
  },
];
  return (
    <section className="relative overflow-hidden py-24 bg-[#050B1F]">
      <div className="absolute -top-20 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

<div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="text-center mb-16">

<span className="text-cyan-400 font-bold tracking-widest uppercase">
Practice Tests
</span>

<h2 className="mt-2 text-5xl font-black text-white">
Official Exam-Level Tests
</h2>

<p className="mt-4 text-slate-400">
Practice exactly like the real SSC typing examination.
</p>

</div>
</div>

        <div className="grid lg:grid-cols-3 gap-8">

          {tests.map((test, index) => (

           <div
  key={index}
  className="
  group
  relative
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-2xl
  p-8
  transition-all
  duration-500
  hover:-translate-y-3
  hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
"
>

  {/* Background Glow */}

  <div
    className={`
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-500

      ${
        test.color === "blue"
          ? "bg-gradient-to-br from-blue-500/10 to-transparent"
          : test.color === "green"
          ? "bg-gradient-to-br from-emerald-500/10 to-transparent"
          : "bg-gradient-to-br from-orange-500/10 to-transparent"
      }
    `}
  />

  <div className="relative z-10">

    {/* Top */}

    <div className="flex items-center gap-6">

      <div
        className={`
        h-20
        w-20
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg

        ${
          test.color === "blue"
            ? "bg-gradient-to-br from-blue-500 to-cyan-500"
            : test.color === "green"
            ? "bg-gradient-to-br from-emerald-500 to-green-600"
            : "bg-gradient-to-br from-orange-500 to-amber-500"
        }
      `}
      >

        <test.icon
          size={38}
          className="text-white"
        />

      </div>

      <div>

        <h3 className="text-3xl font-black text-white">
          {test.title}
        </h3>

        <p className="mt-2 text-slate-400 leading-7">
          {test.description}
        </p>

      </div>

    </div>

    {/* Button */}

    <Link
      href={test.link}
      className={`
      mt-8
      inline-flex
      items-center
      gap-2
      font-bold
      text-lg
      transition-all

      ${
        test.color === "blue"
          ? "text-cyan-400 hover:text-cyan-300"
          : test.color === "green"
          ? "text-emerald-400 hover:text-emerald-300"
          : "text-orange-400 hover:text-orange-300"
      }
    `}
    >
      Practice Now
      <ArrowRight size={20} />
    </Link>

  </div>

  {/* Bottom Border */}

  <div
    className={`
      absolute
      bottom-0
      left-0
      h-1
      w-full

      ${
        test.color === "blue"
          ? "bg-blue-500"
          : test.color === "green"
          ? "bg-emerald-500"
          : "bg-orange-500"
      }
    `}
  />

</div>

          ))}

        </div>

      </div>

    </section>
  );
}