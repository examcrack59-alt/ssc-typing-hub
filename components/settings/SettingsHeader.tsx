"use client";

import { RotateCcw, Save, Settings } from "lucide-react";
import { useSettingsStore } from "@/store/settings.store";

export default function SettingsHeader() {
  const reset = useSettingsStore((state) => state.reset);

  const handleSave = () => {
    // Future:
    // API save / toast notification
    alert("Settings saved successfully.");
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all settings to default?"
    );

    if (!confirmed) return;

    reset();
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Settings
              size={28}
              className="text-blue-600"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Settings
            </h1>

            <p className="mt-1 text-slate-500">
              Customize your typing experience and application preferences.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <RotateCcw size={18} />
            Reset
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}