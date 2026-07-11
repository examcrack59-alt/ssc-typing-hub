"use client";

import {
  Palette,
  Keyboard,
  FileText,
  Volume2,
  Shield,
  User,
} from "lucide-react";

type SettingsSection =
  | "appearance"
  | "typing"
  | "test"
  | "sound"
  | "privacy"
  | "account";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onChange: (section: SettingsSection) => void;
}

const menu = [
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
  {
    id: "typing",
    label: "Typing",
    icon: Keyboard,
  },
  {
    id: "test",
    label: "Test",
    icon: FileText,
  },
  {
    id: "sound",
    label: "Sound",
    icon: Volume2,
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: Shield,
  },
  {
    id: "account",
    label: "Account",
    icon: User,
  },
] as const;

export default function SettingsSidebar({
  activeSection,
  onChange,
}: SettingsSidebarProps) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}