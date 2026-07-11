import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Kumar",
      role: "SSC CGL Aspirant",
      avatar: "RK",
      text: "My typing speed improved from 28 WPM to 43 WPM in just 3 weeks. The exam-like passages made a huge difference.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Priya Sharma",
      role: "SSC CHSL Aspirant",
      avatar: "PS",
      text: "The accuracy tracking helped me identify weak keys and improve consistently. Very useful for daily practice.",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Ankit Singh",
      role: "Railway Aspirant",
      avatar: "AS",
      text: "The interface feels professional and the practice sets are close to real exam difficulty levels.",
      color: "from-violet-500 to-fuchsia-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B1F] py-28">

      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-white/5 px-5 py-2 text-cyan-300 backdrop-blur-xl font-semibold">
            ⭐ Success Stories
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Loved By Thousands
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Real students. Real progress. Real success.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (

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
                hover:border-cyan-400/30
                hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]
              "
            >

              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Quote */}

              <Quote
                size={60}
                className="absolute -top-2 -right-2 text-cyan-500/10"
              />

              <div className="relative z-10">

                {/* User */}

                <div className="flex items-center gap-4">

                  <div
                    className={`h-16 w-16 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-xl font-black text-white shadow-lg`}
                  >
                    {review.avatar}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-white">
                      {review.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {review.role}
                    </p>

                  </div>

                </div>

                {/* Rating */}

                <div className="mt-6 flex gap-1 text-yellow-400 text-xl">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>

                {/* Review */}

                <p className="mt-6 text-slate-300 leading-8 italic">
                  "{review.text}"
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}