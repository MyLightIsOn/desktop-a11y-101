"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

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
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Next heading", nvda: "H", vo: "VO + Cmd + H" },
          { description: "Previous heading", nvda: "Shift + H", vo: "VO + Shift + Cmd + H" },
          { description: "Activate a heading", nvda: "Enter", vo: "VO + Space" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">Puzzle 1: The Dusty Attic</h1>

        <p className="text-gray-300 mb-4">
          You find yourself in a dark attic. The room is filled with hundreds of old items,
          but somewhere hidden among them is the key to escape.
        </p>

        {/* Decoy paragraphs before first decoy heading */}
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-a-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. This is just filler content that screen reader
            users shouldn't have to read through. Use heading navigation!
          </p>
        ))}

        {/* Decoy headings before the winning heading */}
        <div className="sr-only">
          <h2>A Dusty Old Chest</h2>
          <p>An old chest covered in cobwebs. Nothing useful inside.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-b-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. Keep searching — the real heading is nearby.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Broken Rocking Chair</h2>
          <p>The chair creaks softly on its own. Nothing here.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-c-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. The attic stretches on endlessly.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Stack of Yellowed Newspapers</h2>
          <p>Headlines from decades past. Nothing of use.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-d-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. Dust motes swirl in the dark air.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Tarnished Mirror</h2>
          <p>Your reflection stares back, distorted. This isn&apos;t it.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-e-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. Something important must be here somewhere.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Pile of Moth-Eaten Clothes</h2>
          <p>Old garments from another era. Nothing to find here.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-f-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. The air grows colder as you press deeper into the attic.
          </p>
        ))}

        {/* Hidden success heading */}
        <div className="sr-only">
          <h2 onClick={handlePuzzleComplete}>Congratulations! You found the secret heading. Activate to complete the puzzle.</h2>
        </div>

        {/* Decoy headings after the winning heading */}
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-g-${i}`} className="sr-only">
            More decoy text paragraph {i + 1}. Keep navigating by headings!
          </p>
        ))}

        <div className="sr-only">
          <h2>A Cracked Porcelain Doll</h2>
          <p>Its glass eyes follow you. Nothing here.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-h-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. The shadows deepen around you.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Locked Steamer Trunk</h2>
          <p>Bound shut with rusted iron clasps. The key is nowhere to be found.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-i-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. A floorboard groans beneath your feet.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Faded Oil Painting</h2>
          <p>A portrait of someone long forgotten. Not what you need.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-j-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. The attic holds many secrets, but not for you.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Bundle of Old Letters</h2>
          <p>Tied with a fraying ribbon. The handwriting is too faded to read.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-k-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. You&apos;ve come too far — backtrack with Shift+H.
          </p>
        ))}

        <div className="sr-only">
          <h2>A Rusted Weather Vane</h2>
          <p>Pointing in no particular direction. Nothing of use.</p>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <p key={`decoy-l-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. The way out remains hidden somewhere above.
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
