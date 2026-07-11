"use client";

export default function DangerZone() {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
      <h2 className="text-xl font-bold text-red-700">
        Danger Zone
      </h2>

      <p className="mt-2 text-sm text-red-600">
        Reset your settings or clear your application data.
      </p>

      <button
        className="mt-5 rounded-xl bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
      >
        Reset All Settings
      </button>
    </div>
  );
}