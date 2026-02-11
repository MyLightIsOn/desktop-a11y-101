"use client";

import { useEffect, useState } from "react";

interface KeyboardShortcutsProps {
  description: string;
  nvdaShortcut?: string;
  voShortcut?: string;
}

export default function KeyboardShortcuts({
  description,
  nvdaShortcut,
  voShortcut,
}: KeyboardShortcutsProps) {
  const [preference, setPreference] = useState<'nvda' | 'voiceover'>('nvda');

  useEffect(() => {
    // Read from localStorage
    const stored = localStorage.getItem('screenReaderPreference');
    if (stored === 'nvda' || stored === 'voiceover') {
      setPreference(stored);
    }

    // Listen for storage changes
    const handleStorageChange = () => {
      const updated = localStorage.getItem('screenReaderPreference');
      if (updated === 'nvda' || updated === 'voiceover') {
        setPreference(updated);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const shortcut = preference === 'nvda' ? nvdaShortcut : voShortcut;
  const screenReaderName = preference === 'nvda' ? 'NVDA' : 'VoiceOver';

  // Parse shortcut into individual keys
  const renderShortcut = (shortcut: string) => {
    const keys = shortcut.split('+').map(k => k.trim());
    return keys.map((key, index) => (
      <span key={index}>
        <kbd className="inline-block px-2 py-1 border-2 border-spooky-purple rounded bg-gray-900 text-white font-mono text-sm shadow-md">
          {key}
        </kbd>
        {index < keys.length - 1 && <span className="text-gray-500 mx-1">+</span>}
      </span>
    ));
  };

  return (
    <div className="block mb-4">
      <div className="text-gray-300 mb-2">{description}</div>
      {shortcut ? (
        <div>{renderShortcut(shortcut)}</div>
      ) : (
        <div className="text-gray-600 italic text-sm">Not available in {screenReaderName}</div>
      )}
    </div>
  );
}
