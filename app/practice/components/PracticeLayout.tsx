"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";


interface PracticeLayoutProps {
  children: ReactNode;
}

export default function PracticeLayout({
  children,
}: PracticeLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-40
          hidden
          h-screen
          w-[270px]
          border-r
          border-slate-200
          bg-[#081B3A]
          lg:block
        "
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col lg:ml-[270px]">
        {children}
      </div>
    </div>
  );
}