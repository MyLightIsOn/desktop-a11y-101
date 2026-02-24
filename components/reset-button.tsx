"use client";

import { useRef } from "react";

export default function ResetButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    buttonRef.current?.focus();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleReset}
      className="mb-6 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 hover:border-spooky-purple hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black text-sm"
      aria-label="Reset puzzle - scroll back to the top of the page"
    >
      ↑ Reset / Start Over
    </button>
  );
}
