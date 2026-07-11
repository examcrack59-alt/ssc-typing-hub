"use client";

import { useRouter, useSearchParams } from "next/navigation";

const difficulties = [
  {
    id: "easy",
    title: "Easy",
    tests: 10,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "moderate",
    title: "Moderate",
    tests: 10,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "hard",
    title: "Hard",
    tests: 10,
    color: "from-red-500 to-pink-600",
  },
];

export default function PracticeTestPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const exam = searchParams.get("exam") || "cgl";

  return (
    <main className="min-h-screen bg-[#050816] p-8 text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* Header */}
      <section className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-8">
        <h1 className="text-4xl font-black uppercase">
          {exam} Practice Tests
        </h1>

        <p className="mt-3 text-slate-400">
          Select Difficulty & Test Number
        </p>
      </section>

      {/* Difficulty Sections */}
      <div className="mt-10 space-y-10">
        {difficulties.map((difficulty) => (
          <section key={difficulty.id}>
            <div
              className={`inline-flex rounded-xl bg-gradient-to-r ${difficulty.color} px-5 py-2`}
            >
              <h2 className="text-xl font-bold">
                {difficulty.title}
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-5">
              {Array.from({ length: difficulty.tests }).map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    router.push(
                      `/typing?exam=${exam}&difficulty=${difficulty.id}&id=${
                        index + 1
                      }`
                    )
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <h3 className="text-2xl font-bold">
                    Test {index + 1}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Start Typing Test
                  </p>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}