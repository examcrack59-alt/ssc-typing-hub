"use client";
import { X } from "lucide-react";
import { useTypingSettingsStore } from "@/store/typingSettings.store";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsModal({
  open,
  onClose,
}: SettingsModalProps) {
  const {
    darkMode,
    setDarkMode,
  } = useTypingSettingsStore();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Typing Settings
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 p-6">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-semibold">
                Dark Mode
              </h3>

              <p className="text-sm text-slate-500">
                Enable dark theme while typing.
              </p>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative h-7 w-14 rounded-full transition ${
                darkMode
                  ? "bg-blue-600"
                  : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  darkMode
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}