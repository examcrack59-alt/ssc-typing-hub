"use client";

import Link from "next/link";
import {
  Pencil,
  Timer,
  FileText,
 Type,
  CalendarDays,
} from "lucide-react";

const actions = [
  {
    title: "Custom Test",
    subtitle: "Create custom typing test",
    href: "/practice/custom",
    icon: Pencil,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Time Challenge",
    subtitle: "Test your speed",
    href: "/practice/time-challenge",
    icon: Timer,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Word Challenge",
    subtitle: "Practice specific words",
    href: "/practice/word-challenge",
    icon: Type,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Paragraph Test",
    subtitle: "Practice with paragraphs",
    href: "/practice/paragraph",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Daily Challenge",
    subtitle: "Complete daily target",
    href: "/practice/daily",
    icon: CalendarDays,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Access your favourite typing tools instantly.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={22} />
              </div>

              <div>

                <h3 className="font-semibold text-slate-800 transition group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.subtitle}
                </p>

              </div>

            </Link>
          );
        })}
      </div>
    </section>
  );
}