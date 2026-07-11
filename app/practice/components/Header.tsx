"use client";
import SearchBar from "@/components/search/SearchBar";

import { Bell, Menu, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Left Section */}

      <div className="flex items-center gap-5">

        <button className="rounded-lg p-2 transition hover:bg-slate-100">
          <Menu className="h-5 w-5 text-slate-600" />
        </button>

        <div className="relative w-[480px] max-w-full">

         <SearchBar />

         
        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-6">

        <button className="relative rounded-full p-2 transition hover:bg-slate-100">

          <Bell className="h-6 w-6 text-slate-600" />

          <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2 className="h-11 w-11 text-slate-500" />

          <div className="leading-tight">

            <h3 className="font-semibold text-slate-800">
              Demo User
            </h3>

            <p className="text-sm text-slate-500">
              SSC Aspirant
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}