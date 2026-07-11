"use client";

import { motion } from "framer-motion";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        h-screen
        w-[200px]
        shrink-0
        overflow-hidden
        border-r
        border-white/10
        bg-[#070B16]/95
        backdrop-blur-3xl
      "
    >
      <div className="flex h-full flex-col">

        {/* Logo */}
        <SidebarHeader />

        {/* Menu */}
        <div className="min-h-0 flex-1 overflow-hidden">
          <SidebarMenu />
        </div>

        {/* Bottom */}
        <SidebarFooter />

      </div>
    </motion.aside>
  );
}