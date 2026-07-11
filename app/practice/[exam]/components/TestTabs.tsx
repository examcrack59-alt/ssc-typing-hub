"use client";

interface TestTabsProps {
  activeTab: string;

  onTabChange: (tab: string) => void;

  counts: {
    all: number;

    mock: number;

    "re-exam": number;

    practice: number;
  };
}
   
export default function TestTabs({
  activeTab,
  onTabChange,
  counts,
}: TestTabsProps) {
  const tabs = [
  {
    id: "all",
    label: `All (${counts.all})`,
  },

  {
    id: "mock",
    label: `Mock Tests (${counts.mock})`,
  },

  {
    id: "re-exam",
    label: `Re-Exam (${counts["re-exam"]})`,
  },

  {
    id: "practice",
    label: `Practice (${counts.practice})`,
  },
];
  return (
    
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Heading */}

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-3xl font-bold text-slate-900">
  Practice Tests
</h2>

      </div>

      {/* Tabs */}

      <div className="flex overflow-x-auto">

        {tabs.map((tab) => {

          const active = activeTab === tab.id;

          return (
            
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-8 py-5 text-lg font-medium whitespace-nowrap transition

              ${
                active
                  ? "text-sky-600"
                  : "text-slate-500 hover:text-sky-600"
              }
              `}
            >

              {tab.label}

              {active && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-sky-500" />
              )}

            </button>
          );
        })}

      </div>

    </div>
  );
}