"use client";

import { useState, useEffect, useCallback } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

interface Portrait {
  order: number;
  label: string;
  altText: string;
  initialRotation: string;
}

const PORTRAITS: Portrait[] = [
  {
    order: 0,
    label: "Portrait of the Butler",
    altText:
      'A gaunt butler in formal dress, standing at rigid attention. Scratched into the back of the frame: "I am the number before all others — the origin of every count, the start of every story. Fix me in that order."',
    initialRotation: "rotate-[8deg]",
  },
  {
    order: 1,
    label: "Portrait of the Lady",
    altText:
      'An elegant woman in mourning dress, her gaze averted. A note folded behind the canvas reads: "Twice the first, half of four. I follow only one. Fix me in that order."',
    initialRotation: "-rotate-[6deg]",
  },
  {
    order: 2,
    label: "Portrait of the Children",
    altText:
      'Three children seated on a staircase, each holding a candle. Ink scrawled on the back: "A trilogy, a trident, a tricorn hat. We are three. Fix me in that order."',
    initialRotation: "rotate-[11deg]",
  },
  {
    order: 3,
    label: "Portrait of the Patriarch",
    altText:
      'An elderly man in a wingback chair, four hounds resting at his feet. Dust has been cleared from the back to reveal: "Four seasons, four walls, four corners of this room. I am last. Fix me in that order."',
    initialRotation: "-rotate-[9deg]",
  },
];

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Puzzle3() {
  const [portraits, setPortraits] = useState<Portrait[]>([]);
  const [nextToFix, setNextToFix] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(10);

  useEffect(() => {
    setPortraits(shuffle(PORTRAITS));
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
      setNextToFix(0);
      return;
    }
    const timeout = setTimeout(() => setLockoutTimer((t) => t - 1), 1000);
    return () => clearTimeout(timeout);
  }, [isLockedOut, lockoutTimer]);

  const handleActivate = useCallback(
    (portrait: Portrait) => {
      if (portrait.order === nextToFix) {
        const newNext = nextToFix + 1;
        setNextToFix(newNext);
        if (newNext === 4) {
          puzzleComplete(3, elapsedTime);
          setPuzzleSolved(true);
        }
      } else {
        setIsLockedOut(true);
        setLockoutTimer(10);
        setNextToFix(0);
      }
    },
    [nextToFix, elapsedTime]
  );

  if (isLockedOut) {
    return (
      <div
        className="min-h-screen bg-red-950 text-white flex items-center justify-center flex-col text-center p-8"
        aria-live="assertive"
      >
        <p className="text-2xl font-bold text-red-300 mb-4">Wrong order!</p>
        <p className="text-gray-300 mb-8">
          The portraits swing back to crooked. Try again in:
        </p>
        <p
          className="text-9xl font-bold text-red-400"
          aria-label={`${lockoutTimer} seconds`}
        >
          {lockoutTimer}
        </p>
        <p className="text-gray-400 mt-4">seconds...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Next image", nvda: "G", vo: "VO + Cmd + G" },
          { description: "Previous image", nvda: "Shift + G", vo: "VO + Shift + Cmd + G" },
          { description: "Activate an image", nvda: "Enter or Space", vo: "VO + Space" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 3: The Forgotten Gallery</h1>

        <p className="text-gray-300 mb-4">
          You enter a cold, windowless gallery. Four portraits hang on the
          walls, each tilted at an unsettling angle. Something about them feels
          unfinished — like they&apos;re waiting to be set right.
        </p>
        <p className="text-gray-300 mb-8">
          Each portrait hides a message where only a careful listener can find
          it. Fix them in the right order to unlock the passage beyond.
        </p>

        <div className="relative grid grid-cols-2 gap-8 max-w-2xl mb-8">
          {/* Mouse blocker overlay */}
          <div className="absolute inset-0 z-10" aria-hidden="true" />

          {portraits.map((portrait) => {
            const isFixed = portrait.order < nextToFix;
            return (
              <button
                key={portrait.order}
                tabIndex={-1}
                aria-label={portrait.altText}
                onClick={() => handleActivate(portrait)}
                className={`
                  transition-transform duration-700 ease-in-out focus:outline-none
                  ${isFixed ? "rotate-0" : portrait.initialRotation}
                `}
              >
                <div className="border-4 border-amber-900 bg-stone-800 aspect-[3/4] flex items-center justify-center shadow-2xl relative">
                  <div className="absolute inset-2 border border-amber-800/30" />
                  <div className="text-center p-4">
                    <div className="text-6xl mb-4 opacity-20">🖼</div>
                    <p className="text-amber-200/40 text-xs font-serif italic">
                      {portrait.label}
                    </p>
                  </div>
                  {isFixed && (
                    <div
                      className="absolute top-2 right-2 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 text-sm text-gray-600 italic">
          Visual users: This puzzle requires a screen reader. Listen to the alt
          text of each portrait to find the correct order.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={3}
        puzzleTitle="The Forgotten Gallery"
        description={
          <>
            You&apos;ve learned why <strong>alt text matters</strong>! Images
            carry meaning that sighted users see at a glance. Descriptive alt
            text makes that same meaning available to screen reader users —
            without it, the image is an invisible wall.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              The portraits are trying to tell you something — but only through
              your screen reader.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>G</kbd> to jump to the next
              image and hear its description. Press <kbd>Enter</kbd> or{" "}
              <kbd>Space</kbd> to activate it.
            </p>
            <p>
              <strong>VoiceOver:</strong> Use <kbd>VO+Cmd+G</kbd> to move
              between images. Press <kbd>VO+Space</kbd> to activate.
            </p>
          </>
        }
      />
    </main>
  );
}
