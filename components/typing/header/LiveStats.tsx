"use client";

import { useEffect, useState } from "react";

import StatBox from "@/components/common/StatBox";

export default function LiveStats() {
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const time = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

  return (
    <div className="mt-6 grid grid-cols-4 gap-5">

      <StatBox
        title="Time"
        value={time}
      />

      <StatBox
        title="Speed"
        value="0 WPM"
      />

      <StatBox
        title="Accuracy"
        value="100%"
      />

      <StatBox
        title="Errors"
        value="0"
      />

    </div>
  );
}