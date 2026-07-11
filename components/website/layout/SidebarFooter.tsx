"use client";

import { UserButton } from "@clerk/nextjs";
import { Crown, Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SidebarFooter() {
  return (
    <div className="border-t border-white/10 p-4 space-y-4">
 

      {/* User */}
     <div className="flex items-center justify-center">
  <UserButton
    appearance={{
      elements: {
        avatarBox: "h-10 w-10 ring-2 ring-cyan-500/30",
      },
    }}
  />
</div>

    </div>
  );
}