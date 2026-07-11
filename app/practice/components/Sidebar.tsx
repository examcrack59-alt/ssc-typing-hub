"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Link from "next/link";
import {
  House,
  Home,
  FileText,
  Trophy,
  History,
  BarChart3,
  BookOpen,
  Medal,
  Settings,
  Crown,
} from "lucide-react";



const menuItems = [
   {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "Dashboard",
    href: "/practice",
    icon: Home,
  },
   
  {
    title: "Mock Tests",
    href: "/practice/cgl",
    icon: Trophy,
  },
  {
  title: "Previous Tests",
  href: "/history",
  icon: History,
},
  {
    title: "Analytics",
    href: "/practice/analytics",
    icon: BarChart3,
  },
 {
  title: "Study Notes",
  href: "/practice/study-material",
  icon: BookOpen,
},
  {
    title: "Leaderboard",
    href: "/practice/leaderboard",
    icon: Medal,
  },
  {
    title: "Achievements",
    href: "/practice/achievements",
    icon: Trophy,
  },
  {
    title: "Settings",
    href: "/practice/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex h-screen w-[260px] flex-col bg-[#081B3A] text-white">

      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-3xl font-bold">
          SSC
          <span className="block text-base font-medium text-sky-400">
            Typing Hub
          </span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
className={clsx(
  "flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-white",
  "bg-gradient-to-r from-blue-600 to-blue-500",
  "shadow-[0_0_18px_rgba(59,130,246,0.30)]",
  "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
)}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Premium Card */}

      <div className="m-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-white/20 p-2">
            <Crown size={22} />
          </div>

          <div>
            <h3 className="font-semibold">Premium</h3>
            <p className="text-xs text-blue-100">
              Unlimited Practice Tests
            </p>
          </div>

        </div>

        <button className="mt-5 w-full rounded-xl bg-white py-2 font-semibold text-blue-700 transition hover:bg-slate-100">
          Upgrade
        </button>

      </div>
    </aside>
  );
}