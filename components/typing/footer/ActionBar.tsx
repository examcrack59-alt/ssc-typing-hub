"use client";
import { useState } from "react";
 
 
import SettingsModal from "@/components/typing/settings/SettingsModal";
import ActionButton from "@/components/common/ActionButton";
import { useFinalizeResult } from "@/hooks/useFinalizeResult";

 
 
export default function ActionBar() {
  const { finalizeResult } = useFinalizeResult();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
  <>
    <div className="mt-3 rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ActionButton
          title="Submit Test"
          color="green"
          onClick={finalizeResult}
        />

        <ActionButton
          title="Settings"
          color="yellow"
          onClick={() => setSettingsOpen(true)}
        />

        <ActionButton
          title="Fullscreen"
          color="blue"
          onClick={handleFullscreen}
        />

        <ActionButton
          title="End Test"
          color="red"
          onClick={finalizeResult}
        />
      </div>
    </div>

    <SettingsModal
      open={settingsOpen}
      onClose={() => setSettingsOpen(false)}
    />
  </>
);
}