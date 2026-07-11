import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPreview() {
  const blogs = [
    {
      title: "How To Improve Typing Speed For SSC CGL",
      desc: "Learn proven strategies to boost typing speed and accuracy for SSC exams.",
      date: "10 Jan 2026",
    },
    {
      title: "Top 10 Typing Mistakes Students Make",
      desc: "Avoid common mistakes that reduce your WPM and lower exam performance.",
      date: "08 Jan 2026",
    },
    {
      title: "Best Keyboard Shortcuts For Faster Typing",
      desc: "Useful shortcuts and productivity tips for efficient typing practice.",
      date: "05 Jan 2026",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">

      {/* Background Blur Effects */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-blue-100
            text-blue-700
            font-semibold
          "
          >
            Latest Updates
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
            Articles & Typing Guides
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Improve your typing speed, accuracy and exam
            performance with detailed expert-written guides.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              bg-white
              border
              border-slate-200
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
            "
            >

              {/* Top Image Area */}

              <div
                className="
                h-56
                bg-gradient-to-br
                from-blue-500
                via-cyan-500
                to-indigo-600
                relative
                overflow-hidden
              "
              >

                <div
                  className="
                  absolute
                  -top-10
                  -right-10
                  w-40
                  h-40
                  rounded-full
                  bg-white/20
                  blur-2xl
                "
                />

                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  bg-white/20
                  backdrop-blur-xl
                  px-4
                  py-2
                  rounded-full
                  text-white
                  text-sm
                  font-medium
                  flex
                  items-center
                  gap-2
                "
                >
                  <Calendar size={15} />
                  {blog.date}
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3
                  className="
                  text-2xl
                  font-black
                  text-slate-900
                  leading-snug
                "
                >
                  {blog.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {blog.desc}
                </p>

                <Link
                  href="/blog"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  text-blue-600
                  font-bold
                  group-hover:gap-4
                  transition-all
                "
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <Link
            href="/blog"
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
            hover:shadow-blue-500/40
            transition-all
            duration-300
            "
          >
            View All Articles
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}