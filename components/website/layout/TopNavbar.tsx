"use client";

import { Bell, Search, Moon, Command } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function TopNavbar() {
  return (
    <motion.header
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        flex
        h-14
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        backdrop-blur-2xl
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">

        <div>
          <h1 className="text-lg font-bold text-white">
            SSC Typing Test
          </h1>

          <p className="text-xs text-slate-400">
            Premium Practice Simulator
          </p>
        </div>

      </div>

      {/* Center Search */}
      <div className="hidden w-[340px] lg:flex">
        <div
          className="
            flex
            h-10
            w-full
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-3
          "
        >
          <Search
            size={16}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              flex-1
              bg-transparent
              text-sm
              text-white
              placeholder:text-slate-500
              outline-none
            "
          />

          <div
            className="
              flex
              items-center
              gap-1
              rounded-lg
              bg-white/5
              px-2
              py-1
              text-[10px]
              text-slate-400
            "
          >
            <Command size={10} />
            K
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            transition
            hover:bg-cyan-500/10
          "
        >
          <Moon
            size={18}
            className="text-slate-300"
          />
        </button>

        <button
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            transition
            hover:bg-cyan-500/10
          "
        >
          <Bell
            size={18}
            className="text-slate-300"
          />

          <span
            className="
              absolute
              right-2
              top-2
              h-2
              w-2
              rounded-full
              bg-cyan-400
            "
          />
        </button>

      <UserButton
  appearance={{
    elements: {
      avatarBox:
        "h-10 w-10 ring-2 ring-cyan-500/30",
    },
  }}
/>

      </div>
    </motion.header>
  );
}