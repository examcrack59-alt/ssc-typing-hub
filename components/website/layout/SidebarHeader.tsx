"use client";

import Link from "next/link";
import { Keyboard } from "lucide-react";
import { motion } from "framer-motion";

export default function SidebarHeader() {
  return (
    <div className="border-b border-white/10 px-5 py-5">
      <Link href="/" className="block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-violet-600
              shadow-lg
              shadow-cyan-500/30
            "
          >
            <Keyboard
              size={22}
              className="text-white"
            />
          </div>

          <div className="min-w-0">
            <h1
              className="
                truncate
                text-lg
                font-black
                text-white
              "
            >
              SSC Typing Hub
            </h1>

            <p
              className="
                truncate
                text-[11px]
                text-cyan-300
              "
            >
              Premium Practice
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}