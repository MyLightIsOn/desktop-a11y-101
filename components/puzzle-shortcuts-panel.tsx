"use client";

import { useState, useEffect } from "react";

interface Shortcut {
  description: string;
  nvda: string;
  vo: string;
}

interface PuzzleShortcutsPanelProps {
  shortcuts: Shortcut[];
}

function renderKeys(shortcut: string) {
  const parts = shortcut.split("+").map((k) => k.trim());
  return parts.map((key, i) => (
    <span key={i}>
      <kbd className="inline-block px-2 py-0.5 border border-spooky-purple rounded bg-gray-900 text-white font-mono text-xs shadow">
        {key}
      </kbd>
      {i < parts.length - 1 && <span className="text-gray-500 mx-0.5">+</span>}
    </span>
  ));
}

export default function PuzzleShortcutsPanel({ shortcuts }: PuzzleShortcutsPanelProps) {
  const [open, setOpen] = useState(true);
  const [preference, setPreference] = useState<"nvda" | "voiceover">("nvda");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("screenReaderPreference");
      if (stored === "nvda" || stored === "voiceover") {
        setPreference(stored);
      }
    } catch {}
  }, []);

  const handlePreference = (pref: "nvda" | "voiceover") => {
    setPreference(pref);
    try {
      localStorage.setItem("screenReaderPreference", pref);
      window.dispatchEvent(new Event("storage"));
    } catch {}
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-64">
      {/* Header / toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="shortcuts-panel"
        className="w-full flex items-center justify-between bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm font-semibold hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        <span>⌨ Shortcuts</span>
        <span aria-hidden="true">{open ? "▲" : "▾"}</span>
      </button>

      {/* Panel body */}
      {open && (
        <div
          id="shortcuts-panel"
          className="mt-1 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden"
        >
          {/* NVDA / VoiceOver toggle */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => handlePreference("nvda")}
              aria-pressed={preference === "nvda"}
              className={`flex-1 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                preference === "nvda"
                  ? "bg-spooky-purple text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              NVDA
            </button>
            <button
              onClick={() => handlePreference("voiceover")}
              aria-pressed={preference === "voiceover"}
              className={`flex-1 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                preference === "voiceover"
                  ? "bg-spooky-purple text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              VoiceOver
            </button>
          </div>

          {/* Shortcut list */}
          <ul className="divide-y divide-gray-800">
            {shortcuts.map((s, i) => (
              <li key={i} className="px-4 py-3">
                <div className="text-gray-400 text-xs mb-1.5">{s.description}</div>
                <div className="flex flex-wrap gap-1">
                  {renderKeys(preference === "nvda" ? s.nvda : s.vo)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
