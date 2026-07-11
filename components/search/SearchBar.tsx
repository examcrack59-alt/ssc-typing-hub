"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SearchService } from "@/lib/search/search.service";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return SearchService.search(query);
  }, [query]);

  return (
    <div className="relative w-[480px] max-w-full">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tests, exams or topics..."
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
      />

      {/* Temporary Debug */}
      {query && (
        <div className="absolute left-0 right-0 top-14 rounded-xl border border-slate-200 bg-white shadow-lg">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={`${item.exam}-${item.id}`}
                className="border-b px-4 py-3 last:border-b-0"
              >
                <div className="font-medium text-slate-800">
                  {item.title}
                </div>

                <div className="text-xs text-slate-500">
                  {item.exam} • {item.category}
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-5 text-center text-sm text-slate-500">
              No Results Found
            </div>
          )}
        </div>
      )}
    </div>
  );
}