"use client";

import { useMemo, useState } from "react";

import SettingsHeader from "./SettingsHeader";
import SettingsSidebar from "./SettingsSidebar";

import AppearanceSettings from "./AppearanceSettings";
 
import TestSettings from "./TestSettings";
import SoundSettings from "./SoundSettings";
import PrivacySettings from "./PrivacySettings";
import AccountSettings from "./AccountSettings";
import DangerZone from "./DangerZone";

export type SettingsSection =
  | "appearance"
  | "typing"
  | "test"
  | "sound"
  | "privacy"
  | "account";

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("appearance");

  const sections = useMemo(
    () => ({
      appearance: <AppearanceSettings />,
     
      test: <TestSettings />,
      sound: <SoundSettings />,
      privacy: <PrivacySettings />,
      account: <AccountSettings />,
    }),
    []
  );

  return (
    <main className="space-y-6">
      <SettingsHeader />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6">
            <SettingsSidebar
              activeSection={activeSection}
              onChange={setActiveSection}
            />
          </div>
        </aside>

        {/* Content */}
        <section className="space-y-6 lg:col-span-9">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            
          </div>

          <DangerZone />
        </section>
      </div>
    </main>
  );
}