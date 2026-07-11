"use client";

import type { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import clsx from "clsx";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;

  trend?: {
    value: string;
    positive?: boolean;
  };

  accent?: "blue" | "green" | "purple" | "orange" | "red";
}

const accentStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },
  purple: {
    icon: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    border: "hover:border-orange-200",
  },
  red: {
    icon: "bg-red-50 text-red-600",
    border: "hover:border-red-200",
  },
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  accent = "blue",
}: StatCardProps) {
  const style = accentStyles[accent];

  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
        style.border
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div
            className={clsx(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              style.icon
            )}
          >
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div
          className={clsx(
            "mt-5 flex items-center gap-2 text-sm font-medium",
            trend.positive
              ? "text-emerald-600"
              : "text-red-600"
          )}
        >
          {trend.positive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}

          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}