"use client";
import Link from "next/link";
import Image from "next/image";
 import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import {
  Search,
  ArrowRight,
  BookOpen,
  Clock3,
  Bookmark,
  User,
  Sparkles,
   Mail,
  ShieldCheck,
  Bell,
  CheckCircle,
    TrendingUp,
  Users,
  Target,

} from "lucide-react";

const blogs = [
  {
    title: "How To Improve Typing Speed For SSC CGL",
    desc: "Learn proven techniques to increase typing speed and accuracy for SSC typing examinations.",
    date: "10 Jan 2026",
    category: "SSC CGL",
    slug: "improve-typing-speed-ssc-cgl",
    featured: true,
    image: "/blog/typing-speed.jpg",
    author: "Ankit Sharma",
    read: "8 min read",
  },
  {
    title: "Top 10 Typing Mistakes Students Make",
    desc: "Avoid common mistakes that reduce your WPM and affect your final exam performance.",
    date: "08 Jan 2026",
    category: "Typing Tips",
    slug: "typing-mistakes-students-make",
    image: "/blog/typing-mistakes.jpg",
    author: "Priya Verma",
    read: "7 min read",
  },
  {
    title: "Best Keyboard Shortcuts",
    desc: "Useful shortcuts and productivity tricks for faster typing.",
    date: "05 Jan 2026",
    category: "Productivity",
    slug: "best-keyboard-shortcuts",
    image: "/blog/keyboard-shortcuts.jpg",
    author: "Rohit Kumar",
    read: "6 min read",
  },
];

export default function BlogPage() {
  const { scrollYProgress } = useScroll();

const scaleX = useSpring(scrollYProgress, {
  stiffness: 120,
  damping: 25,
});

const [mouse, setMouse] = useState({
  x: -500,
  y: -500,
});

useEffect(() => {
  const move = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);
  return (
    <main className="min-h-screen bg-[#050B1F] text-white overflow-hidden relative">
      <motion.div
style={{ scaleX }}
className="fixed top-0 left-0 z-[9999] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
/>

<motion.div
animate={{
x:mouse.x-250,
y:mouse.y-250,
}}
transition={{
type:"spring",
stiffness:60,
damping:18,
}}
className="
pointer-events-none
fixed
z-0
w-[500px]
h-[500px]
rounded-full
bg-cyan-400/10
blur-[120px]
"
/>

      {/* Glow Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 top-40 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[170px]" />

        <div className="absolute left-1/2 bottom-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[170px]" />

      </div>

      {/* ================= HERO ================= */}

      <section className="relative pt-28 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl px-6 py-3">

            <Sparkles className="w-5 h-5 text-cyan-300"/>

            <span className="font-semibold tracking-wide text-cyan-300">

              LATEST ARTICLES

            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">

            Latest{" "}

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

              Articles

            </span>

          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-400">

            Handpicked guides and strategies to help you improve your typing speed,
            accuracy and government exam performance.

          </p>

          {/* Search */}

          <div className="mt-12 max-w-3xl">

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">

              <Search className="text-cyan-300"/>

              <input
                placeholder="Search typing articles..."
                className="ml-4 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
              />

              <button
                className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-7
                py-3
                font-semibold
                hover:scale-105
                transition
                "
              >

                Search

              </button>

            </div>

          </div>

          {/* Categories */}

          <div className="mt-10 flex flex-wrap gap-4">

            {[
              "All",
              "SSC CGL",
              "SSC CHSL",
              "Typing Tips",
              "Keyboard",
              "Accuracy",
              "Practice",
            ].map((item) => (

              <button
                key={item}
                className="
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-6
                py-3
                text-slate-300
                transition
                hover:border-cyan-400
                hover:text-cyan-300
                hover:bg-cyan-500/10
                "
              >

                {item}

              </button>

            ))}

          </div>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap gap-10">

            <div>

              <h2 className="text-4xl font-black text-cyan-300">

                100+

              </h2>

              <p className="mt-2 text-slate-400">

                Expert Articles

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-violet-300">

                50K+

              </h2>

              <p className="mt-2 text-slate-400">

                Monthly Readers

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-blue-300">

                Weekly

              </h2>

              <p className="mt-2 text-slate-400">

                Fresh Content

              </p>

            </div>

          </div>

        </div>

      </section>

    {/* ================= FEATURED ARTICLE ================= */}

<section className="relative pb-24">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="flex items-center justify-between mb-10">

      <div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">

          <BookOpen className="w-4 h-4 text-cyan-300" />

          <span className="text-cyan-300 font-semibold">

            FEATURED ARTICLE

          </span>

        </div>

        <h2 className="mt-5 text-5xl font-black">

          Editor's

          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

            {" "}Pick

          </span>

        </h2>

      </div>

      <Link

        href="/blog"

        className="hidden md:flex items-center gap-2 rounded-2xl border border-cyan-500/20 bg-white/5 px-6 py-4 hover:border-cyan-400 transition"

      >

        View All

        <ArrowRight className="w-5 h-5"/>

      </Link>

    </div>



    {/* Card */}

    <div

      className="

      group

      relative

      overflow-hidden

      rounded-[34px]

      border

      border-cyan-500/20

      bg-[#081323]

      transition-all

      duration-500

      hover:border-cyan-400/40

      hover:-translate-y-1

      hover:shadow-[0_0_70px_rgba(34,211,238,.18)]

      "

    >

      {/* Glow */}

      <div className="absolute -left-48 -top-48 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-48 -bottom-48 w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[140px]" />



      <div className="grid lg:grid-cols-[480px_1fr]">

        {/* IMAGE */}

        <div className="relative min-h-[460px] overflow-hidden">

          <Image

            src="/blog/typing-speed.jpg"

            alt="Typing Speed"

            fill

            className="object-cover transition duration-700 group-hover:scale-110"

          />



          {/* Gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#081323] via-transparent to-transparent"/>



          {/* Category */}

          <div className="absolute top-6 left-6 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/20 px-4 py-2">

            <span className="text-cyan-300 font-medium">

              SSC CGL

            </span>

          </div>



          {/* Bookmark */}

          <button className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-cyan-400 transition">

            <Bookmark className="w-5 h-5"/>

          </button>

        </div>



        {/* CONTENT */}

        <div className="relative z-10 p-12 flex flex-col justify-center">

          {/* Meta */}

          <div className="flex flex-wrap gap-5 text-slate-400 text-sm">

            <div className="flex items-center gap-2">

              <Clock3 className="w-4 h-4"/>

              8 min read

            </div>



            <div className="flex items-center gap-2">

              <User className="w-4 h-4"/>

              By Ankit Sharma

            </div>



            <div>

              10 Jan 2026

            </div>

          </div>



          {/* Title */}

          <h2 className="mt-8 text-5xl font-black leading-tight">

            How To Improve Typing Speed

            <br/>

            For SSC CGL

          </h2>



          {/* Description */}

          <p className="mt-8 text-lg leading-9 text-slate-400">

            Learn a proven roadmap used by thousands of SSC aspirants to

            improve typing speed, increase accuracy and crack government

            typing examinations with confidence.

          </p>



          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link

              href="/blog/improve-typing-speed-ssc-cgl"

              className="

              rounded-2xl

              bg-gradient-to-r

              from-cyan-500

              to-blue-600

              px-8

              py-4

              font-bold

              hover:scale-105

              transition

              "

            >

              Read Full Article →

            </Link>



            <button

              className="

              rounded-2xl

              border

              border-white/10

              bg-white/5

              px-8

              py-4

              hover:bg-white/10

              transition

              "

            >

              Save Article

            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* ================= LATEST ARTICLES ================= */}

<section className="relative pb-28">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="flex items-center justify-between mb-12">

      <div>

        <span className="text-cyan-300 font-semibold tracking-wider">

          LATEST POSTS

        </span>

        <h2 className="mt-3 text-5xl font-black">

          Explore

          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

            {" "}Articles

          </span>

        </h2>

      </div>

      <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 hover:border-cyan-400 transition">

        View All

      </button>

    </div>



    {/* Grid */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {blogs.map((blog) => (

        <article

          key={blog.slug}

          className="

          group

          flex

          flex-col

          overflow-hidden

          rounded-[28px]

          border

          border-cyan-500/15

          bg-[#081323]

          transition-all

          duration-500

          hover:-translate-y-2

          hover:border-cyan-400/50

          hover:shadow-[0_0_50px_rgba(34,211,238,.18)]

          "

        >

          {/* Image */}

          <div className="relative h-64 overflow-hidden">

            <Image

              src={blog.image}

              alt={blog.title}

              fill

              className="object-cover transition duration-700 group-hover:scale-110"

            />



            <div className="absolute inset-0 bg-gradient-to-t from-[#081323] via-transparent to-transparent"/>



            <div className="absolute top-5 left-5 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">

              {blog.category}

            </div>



            <button className="absolute top-5 right-5 w-11 h-11 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-cyan-400 transition">

              <Bookmark className="w-5 h-5"/>

            </button>

          </div>



          {/* Content */}

          <div className="flex flex-col flex-1 p-7">

            {/* Meta */}

            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">

              <div className="flex items-center gap-2">

                <Clock3 className="w-4 h-4"/>

                {blog.read}

              </div>



              <div className="flex items-center gap-2">

                <User className="w-4 h-4"/>

                {blog.author}

              </div>

            </div>



            <h3 className="mt-5 text-3xl font-black leading-tight transition group-hover:text-cyan-300">

              {blog.title}

            </h3>



            <p className="mt-5 text-slate-400 leading-8">

              {blog.desc}

            </p>



            <div className="mt-auto pt-8 flex items-center justify-between">

              <span className="text-sm text-slate-500">

                {blog.date}

              </span>



              <Link

                href={`/blog/${blog.slug}`}

                className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition-all group-hover:gap-4"

              >

                Read Article

                <ArrowRight className="w-5 h-5"/>

              </Link>

            </div>

          </div>

        </article>

      ))}

    </div>

  </div>

</section>
{/* ================= TRENDING ARTICLES ================= */}

<section className="relative py-28 overflow-hidden">

  {/* Glow */}

  <div className="absolute left-0 top-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[150px]" />

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="flex items-center justify-between mb-14">

      <div>

        <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-5 py-2">

          🔥

          <span className="text-orange-300 font-semibold">

            TRENDING NOW

          </span>

        </div>

        <h2 className="mt-5 text-5xl font-black">

          Most Popular

          <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">

            {" "}Articles

          </span>

        </h2>

      </div>

      <Link

        href="/blog"

        className="hidden lg:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 hover:border-cyan-400 transition"

      >

        Browse All

        <ArrowRight size={18} />

      </Link>

    </div>



    {/* Cards */}

    <div className="grid lg:grid-cols-3 gap-8">

      {blogs.slice(0,3).map((blog,index)=>(

        <Link

          key={blog.slug}

          href={`/blog/${blog.slug}`}

          className="group"

        >

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#081323] hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,.18)]">

            {/* Number */}

            <div className="absolute left-5 top-5 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-300 font-black text-xl">

              0{index+1}

            </div>



            {/* Image */}

            <div className="relative h-64 overflow-hidden">

              <Image

                src={blog.image}

                alt={blog.title}

                fill

                className="object-cover transition duration-700 group-hover:scale-110"

              />



              <div className="absolute inset-0 bg-gradient-to-t from-[#081323] via-black/20 to-transparent"/>

            </div>



            {/* Content */}

            <div className="p-7">

              <div className="flex items-center gap-4 text-sm text-slate-400">

                <Clock3 className="w-4 h-4"/>

                {blog.read}

              </div>



              <h3 className="mt-5 text-2xl font-black leading-tight transition group-hover:text-cyan-300">

                {blog.title}

              </h3>



              <p className="mt-4 text-slate-400 leading-7 line-clamp-3">

                {blog.desc}

              </p>



              <div className="mt-8 flex items-center justify-between">

                <span className="text-slate-500">

                  {blog.date}

                </span>



                <span className="inline-flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">

                  Read

                  <ArrowRight className="w-5 h-5"/>

                </span>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>
{/* ================= POPULAR CATEGORIES ================= */}

<section className="relative py-28">

  {/* Background Glow */}

  <div className="absolute left-0 top-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

        📂 Popular Categories

      </span>

      <h2 className="mt-6 text-5xl font-black">

        Browse By

        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

          {" "}Category

        </span>

      </h2>

      <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-8">

        Explore articles specially written for SSC, Railway, Court and
        Government Typing examinations.

      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {[
        {
          icon:"⌨️",
          title:"Typing Tips",
          count:"38 Articles",
          color:"cyan"
        },

        {
          icon:"📘",
          title:"SSC CGL",
          count:"22 Articles",
          color:"blue"
        },

        {
          icon:"🚄",
          title:"Railway",
          count:"18 Articles",
          color:"violet"
        },

        {
          icon:"⚖️",
          title:"Court Exams",
          count:"14 Articles",
          color:"emerald"
        }

      ].map((item)=>(

        <div

          key={item.title}

          className="

          group

          relative

          overflow-hidden

          rounded-[28px]

          border

          border-white/10

          bg-white/5

          backdrop-blur-xl

          p-8

          transition-all

          duration-500

          hover:-translate-y-2

          hover:border-cyan-400/40

          hover:shadow-[0_0_45px_rgba(34,211,238,.18)]

          "

        >

          {/* Glow */}

          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"/>

          {/* Icon */}

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-5xl">

            {item.icon}

          </div>

          {/* Title */}

          <h3 className="mt-8 text-2xl font-black group-hover:text-cyan-300 transition">

            {item.title}

          </h3>

          {/* Count */}

          <p className="mt-3 text-slate-400">

            {item.count}

          </p>

          {/* Line */}

          <div className="mt-8 h-px bg-gradient-to-r from-cyan-500/40 via-white/10 to-transparent"/>

          {/* Link */}

          <button

            className="

            mt-8

            inline-flex

            items-center

            gap-2

            font-semibold

            text-cyan-300

            transition-all

            group-hover:gap-4

            "

          >

            Explore

            <ArrowRight className="w-5 h-5"/>

          </button>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ================= NEWSLETTER ================= */}

<section className="relative py-28 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[220px]" />

  <div className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-[160px]" />

  <div className="max-w-6xl mx-auto px-6">

    <div
      className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-10
      md:p-16
      "
    >

      {/* Floating Glow */}

      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 grid lg:grid-cols-[1fr_430px] gap-14 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">

            <Mail className="w-4 h-4 text-cyan-300" />

            <span className="text-cyan-300 font-semibold">

              Weekly Newsletter

            </span>

          </div>

          <h2 className="mt-7 text-5xl font-black leading-tight">

            Never Miss A

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

              {" "}Typing Update

            </span>

          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-400 max-w-2xl">

            Get weekly SSC typing tips, exam strategies, keyboard shortcuts,
            practice routines and newly published articles directly in your
            inbox.

          </p>

          {/* Trust Badges */}

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">

              <ShieldCheck className="w-5 h-5 text-emerald-400" />

              <span>No Spam</span>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">

              <Bell className="w-5 h-5 text-cyan-300" />

              <span>Weekly Tips</span>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">

              <CheckCircle className="w-5 h-5 text-violet-300" />

              <span>Free Forever</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-[32px] border border-cyan-500/20 bg-[#081323] p-8">

          <div className="text-center">

            <h3 className="text-3xl font-black">

              Join 50,000+

            </h3>

            <p className="mt-3 text-slate-400">

              Students already subscribed.

            </p>

          </div>

          {/* Email */}

          <div className="mt-10">

            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-slate-500
              focus:border-cyan-400
              "
            />

            <button
              className="
              mt-5
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              py-5
              font-bold
              text-lg
              transition
              hover:scale-[1.02]
              hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
              "
            >
              Subscribe Now →
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">

              We respect your privacy. Unsubscribe anytime.

            </p>

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

              <h4 className="text-2xl font-black text-cyan-300">

                50K+

              </h4>

              <p className="mt-2 text-xs text-slate-400">

                Readers

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

              <h4 className="text-2xl font-black text-violet-300">

                120+

              </h4>

              <p className="mt-2 text-xs text-slate-400">

                Guides

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

              <h4 className="text-2xl font-black text-emerald-300">

                Weekly

              </h4>

              <p className="mt-2 text-xs text-slate-400">

                Updates

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= FINAL CTA ================= */}

<section className="relative py-32 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0">
    <motion.div
animate={{
y:[0,-25,0],
x:[0,20,0],
}}
transition={{
repeat:Infinity,
duration:10,
}}
className="absolute left-20 top-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[120px]"
/>

<motion.div
animate={{
y:[0,35,0],
x:[0,-25,0],
}}
transition={{
repeat:Infinity,
duration:13,
}}
className="absolute right-10 bottom-20 w-72 h-72 rounded-full bg-violet-500/10 blur-[120px]"
/>

    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[200px]" />

    <div className="absolute -top-32 left-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-[150px]" />

    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[150px]" />

  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div
      className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-2xl
      p-10
      md:p-16
      "
    >

      {/* Decorative Glow */}

      <div className="absolute -left-32 -top-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

            🚀 Start Today

          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">

            Master Typing.

            <br />

            Crack Every

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

              {" "}Government Exam

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-400">

            Practice daily, improve your typing speed, boost your accuracy,
            and prepare with articles written specifically for SSC, Railway,
            Court and Government typing examinations.

          </p>

        </div>

        {/* CTA Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/typing-test"
            className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-9
            py-5
            font-bold
            text-lg
            transition
            hover:scale-105
            hover:shadow-[0_0_50px_rgba(34,211,238,.35)]
            "
          >
            Start Typing Test →
          </Link>

          <Link
            href="/blog"
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-9
            py-5
            font-semibold
            hover:bg-white/10
            hover:border-cyan-400
            transition
            "
          >
            Explore Articles
          </Link>

        </div>

        {/* Live Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-cyan-400 transition">

            <TrendingUp className="mx-auto h-9 w-9 text-cyan-300" />

            <h3 className="mt-5 text-4xl font-black text-cyan-300">

              120+

            </h3>

            <p className="mt-3 text-slate-400">

              Expert Articles

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-violet-400 transition">

            <Users className="mx-auto h-9 w-9 text-violet-300" />

            <h3 className="mt-5 text-4xl font-black text-violet-300">

              50K+

            </h3>

            <p className="mt-3 text-slate-400">

              Active Readers

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-emerald-400 transition">

            <BookOpen className="mx-auto h-9 w-9 text-emerald-300" />

            <h3 className="mt-5 text-4xl font-black text-emerald-300">

              1M+

            </h3>

            <p className="mt-3 text-slate-400">

              Words Practiced

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-orange-400 transition">

            <Target className="mx-auto h-9 w-9 text-orange-300" />

            <h3 className="mt-5 text-4xl font-black text-orange-300">

              98%

            </h3>

            <p className="mt-3 text-slate-400">

              Student Satisfaction

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}