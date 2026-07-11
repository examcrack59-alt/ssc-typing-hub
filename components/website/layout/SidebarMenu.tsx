"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Keyboard,
  FileText,
  ClipboardCheck,
  Trophy,
  Clock3,
  Medal,
  Award,
  BookOpen,
  Settings,
  LucideIcon,
} from "lucide-react";

type MenuItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const menu: MenuItem[] = [
  {
    title: "Typing Test",
    href: "/practice/test",
    icon: Keyboard,
  },
  {
    title: "Practice",
    href: "/practice",
    icon: FileText,
  },
  {
    title: "Mock Test",
    href: "/mock-test",
    icon: ClipboardCheck,
  },
  {
    title: "Results",
    href: "/results",
    icon: Trophy,
  },
  {
    title: "History",
    href: "/history",
    icon: Clock3,
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: Medal,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Award,
  },
  {
    title: "Study Material",
    href: "/study-material",
    icon: BookOpen,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function SidebarMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4">
      <div className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <motion.div
              key={item.title}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                className={`
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-3
                  transition-all
                  duration-200
                  ${
                    active
                      ? "border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white shadow-lg shadow-cyan-500/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <div
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    transition
                    ${
                      active
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-white/5 group-hover:bg-cyan-500/10"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <span className="truncate text-sm font-medium">
                  {item.title}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}