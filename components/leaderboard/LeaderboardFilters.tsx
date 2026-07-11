"use client";

import { Search } from "lucide-react";

interface LeaderboardFiltersProps {
  activeFilter: string;
  search: string;
  onFilterChange: (filter: string) => void;
  onSearchChange: (value: string) => void;
}

const filters = [
  {
    id: "overall",
    label: "Overall",
  },
  {
    id: "weekly",
    label: "Weekly",
  },
  {
    id: "monthly",
    label: "Monthly",
  },
  {
    id: "cgl",
    label: "SSC CGL",
  },
  {
    id: "chsl",
    label: "SSC CHSL",
  },
  {
    id: "mts",
    label: "SSC MTS",
  },
];

export default function LeaderboardFilters({
  activeFilter,
  search,
  onFilterChange,
  onSearchChange,
}: LeaderboardFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Filters */}

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-blue-600 text-white shadow"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Search */}

      <div className="relative w-full lg:w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          placeholder="Search player..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}