"use client";

import { useState, useEffect } from "react";

export default function ScreenReaderToggle() {
  const [preference, setPreference] = useState<'nvda' | 'voiceover'>('nvda');

  useEffect(() => {
    // Read from localStorage on mount
    const stored = localStorage.getItem('screenReaderPreference');
    if (stored === 'nvda' || stored === 'voiceover') {
      setPreference(stored);
    }
  }, []);

  const handleSelect = (value: 'nvda' | 'voiceover') => {
    setPreference(value);
    localStorage.setItem('screenReaderPreference', value);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div
      role="radiogroup"
      aria-label="Screen Reader Preference"
      className="fixed top-4 right-4 z-40 flex rounded-lg overflow-hidden"
    >
      <button
        role="radio"
        aria-checked={preference === 'nvda'}
        onClick={() => handleSelect('nvda')}
        className={`px-4 py-2 font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
          preference === 'nvda'
            ? 'bg-spooky-purple text-white'
            : 'bg-transparent text-gray-400 hover:text-gray-300'
        }`}
      >
        NVDA
      </button>
      <button
        role="radio"
        aria-checked={preference === 'voiceover'}
        onClick={() => handleSelect('voiceover')}
        className={`px-4 py-2 font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
          preference === 'voiceover'
            ? 'bg-spooky-purple text-white'
            : 'bg-transparent text-gray-400 hover:text-gray-300'
        }`}
      >
        VoiceOver
      </button>
    </div>
  );
}
