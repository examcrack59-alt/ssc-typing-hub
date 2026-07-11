"use client";

import Link from "next/link";
import { Menu, X, Keyboard } from "lucide-react";
import { useState } from "react";

 

export default function Navbar() {
  const [open, setOpen] = useState(false);
   

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              shadow-lg
              shadow-cyan-500/40
            "
            >
              <Keyboard size={22} className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-black text-white">
                SSC Typing Hub
              </h1>

              <p className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-[11px] font-bold text-transparent">
                🚀 Built By IITians
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
<Link
  href="/practice"
  className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
>
  Practice
</Link>

<Link
  href="/practice/leaderboard"
  className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
>
  Leaderboard
</Link>
            <Link
              href="/blog"
              className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              Contact
            </Link>

          </nav>

          {/* Desktop Auth */}

          <div className="hidden items-center gap-3 md:flex">
 <>
 

  <Link
    href="/practice"
    className="
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-purple-500
      px-5
      py-2.5
      font-bold
      text-white
      shadow-lg
      shadow-cyan-500/30
      transition-all
      duration-300
      hover:scale-105
    "
  >
    🚀 Start Practice
  </Link>
</>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>
            {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 p-6 text-white">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              href="/tests"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Practice Tests
            </Link>

            <Link
              href="/history"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              History
            </Link>
<Link
  href="/practice/leaderboard"
  onClick={() => setOpen(false)}
  className="hover:text-cyan-400 transition"
>
  Leaderboard
</Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Blog
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>

            <hr className="border-white/10" />

            <div className="flex flex-col gap-3">

 
<Link
  href="/premium"
  onClick={() => setOpen(false)}
  className="
    w-full
    rounded-xl
    border
    border-yellow-500/40
    bg-yellow-500/10
    py-3
    text-center
    font-semibold
    text-yellow-300
    transition
    hover:bg-yellow-500
    hover:text-black
  "
>
  ⭐ Premium
</Link>
  <Link
    href="/practice"
    onClick={() => setOpen(false)}
    className="
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-purple-500
      py-3
      text-center
      font-bold
      text-white
    "
  >
    Start Practice
  </Link>

</div>
                 

    
          </div>
        </div>
      )}
    </>
  );
}