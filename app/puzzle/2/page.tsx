"use client";

import { useState, useEffect, useCallback } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

interface Button {
  aria: string;
  isCorrect: boolean;
}

function shuffle(array: Button[]): Button[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateButtons(): Button[] {
  const buttons: Button[] = Array.from({ length: 9 }, () => ({
    aria: "Do Not Click Here",
    isCorrect: false,
  }));
  const correctIndex = Math.floor(Math.random() * 9);
  buttons[correctIndex] = {
    aria: "This is the correct book. Press Enter to open it.",
    isCorrect: true,
  };
  return shuffle(buttons);
}

export default function Puzzle2() {
  const [buttons, setButtons] = useState<Button[]>([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(10);

  useEffect(() => {
    setButtons(generateButtons());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (!isLockedOut) return;
    if (lockoutTimer === 0) {
      setIsLockedOut(false);
      setLockoutTimer(10);
      setButtons(generateButtons());
      return;
    }
    const timeout = setTimeout(() => setLockoutTimer((t) => t - 1), 1000);
    return () => clearTimeout(timeout);
  }, [isLockedOut, lockoutTimer]);

  const handleClick = useCallback((btn: Button) => {
    if (btn.isCorrect) {
      puzzleComplete(2, elapsedTime);
      setPuzzleSolved(true);
    } else {
      setIsLockedOut(true);
      setLockoutTimer(10);
    }
  }, [elapsedTime]);

  if (isLockedOut) {
    return (
      <div className="min-h-screen bg-red-950 text-white flex items-center justify-center flex-col text-center p-8" aria-live="assertive">
        <p className="text-2xl font-bold text-red-300 mb-4">Wrong book!</p>
        <p className="text-gray-300 mb-8">The shelves rearrange themselves. Try again in:</p>
        <p className="text-9xl font-bold text-red-400" aria-label={`${lockoutTimer} seconds`}>{lockoutTimer}</p>
        <p className="text-gray-400 mt-4">seconds...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Move between buttons", nvda: "Tab", vo: "Tab" },
          { description: "Read button label", nvda: "NVDA + Tab", vo: "VO + F2" },
          { description: "Activate a button", nvda: "Enter or Space", vo: "VO + Space" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 2: The Mysterious Library</h1>

        <p className="text-gray-300 mb-4">
          You step deeper into the library. On the central reading table sits a
          peculiar panel — nine identical buttons, each engraved with the same
          unhelpful inscription.
        </p>

        <p className="text-gray-300 mb-8">
          Only one button opens the hidden passage. Your eyes are no help here.
          You&apos;ll need to listen carefully.
        </p>

        <div className="relative grid grid-cols-3 gap-4 max-w-lg mb-8">
          <div className="absolute inset-0 z-10" aria-hidden="true" />
          {buttons.map((btn, i) => (
            <button
              key={i}
              aria-label={btn.aria}
              tabIndex={-1}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-sm text-gray-300 hover:border-purple-500 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              onClick={() => handleClick(btn)}
            >
              Click Here
            </button>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires a screen reader. All buttons look identical.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={2}
        puzzleTitle="The Mysterious Library"
        description={
          <>
            You&apos;ve learned why <strong>button labels matter</strong>! Visible text like
            &quot;Click Here&quot; is meaningless to screen reader users. A descriptive{" "}
            <code>aria-label</code> tells the user exactly what a button does.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              All the buttons look the same — but they don&apos;t sound the same.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>Tab</kbd> to move between buttons and listen
              to what your screen reader announces for each one.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>Tab</kbd> to move between buttons.
              VoiceOver will read the label of each button automatically.
            </p>
          </>
        }
      />
    </main>
  );
}
