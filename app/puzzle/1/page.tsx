"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle1() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handlePuzzleComplete = () => {
    puzzleComplete(1, elapsedTime);
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">Puzzle 1: The Dusty Attic</h1>

        <p className="text-gray-300 mb-4">
          You find yourself in a dark attic. The room is filled with hundreds of old items,
          but somewhere hidden among them is the key to escape.
        </p>

        {/* Decoy paragraphs */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={`decoy-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. This is just filler content that screen reader
            users shouldn't have to read through. Use heading navigation!
          </p>
        ))}

        {/* Hidden success heading */}
        <div className="sr-only">
          <h3>Congratulations! You found the secret heading.</h3>
          <button
            onClick={handlePuzzleComplete}
            className="underline text-spooky-green"
          >
            Press Enter to complete the puzzle
          </button>
        </div>

        {/* More decoy paragraphs */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={`decoy-end-${i}`} className="sr-only">
            More decoy text paragraph {i + 1}. Keep navigating by headings!
          </p>
        ))}

        {/* Visual hint for sighted users (shouldn't use this!) */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle can only be solved using screen reader navigation.
          Turn on your screen reader and use heading navigation (H key or VO+Cmd+H).
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={1}
        puzzleTitle="The Dusty Attic"
        description={
          <>
            You've mastered <strong>heading navigation</strong>! You learned how to jump
            between headings using the <kbd>H</kbd> key (NVDA) and{" "}
            <kbd>VO+Cmd+H</kbd> (VoiceOver) instead of arrowing through every line of text.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Some structures are hidden from sight but not from sound.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>H</kbd> to jump to the next heading.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+Cmd+H</kbd> to jump to the next heading.
            </p>
          </>
        }
      />
    </main>
  );
}
