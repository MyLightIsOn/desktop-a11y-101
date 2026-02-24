"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";

export default function Puzzle2() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handlePuzzleComplete = () => {
    puzzleComplete(2, elapsedTime);
    setPuzzleSolved(true);
  };

  const decoyBooks = [
    "The Whispering Grimoire",
    "Shadows of the Forgotten",
    "The Crimson Codex",
    "Tales of the Moonlit Garden",
    "The Phantom's Ledger",
    "Echoes in the Dark",
    "The Silver Chalice Manual",
    "Forbidden Alchemy Vol. III",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 2: The Mysterious Library</h1>

        <p className="text-gray-300 mb-4">
          You step into an ancient library. Towering bookshelves stretch to the ceiling,
          filled with leather-bound volumes. Several books seem to glow with an eerie light,
          beckoning you to interact with them.
        </p>

        <p className="text-gray-300 mb-8">
          But appearances can be deceiving. Not every book wants to be grabbed — some
          secrets reveal themselves only to those who read carefully.
        </p>

        {/* Visible decoy books - tabbing through these won't solve the puzzle */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {decoyBooks.map((book, i) => (
            <button
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 hover:border-purple-500 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              onClick={() => {/* decoy - does nothing */}}
            >
              📖 {book}
            </button>
          ))}
        </div>

        {/* SR-only content - the real puzzle path */}
        <div className="sr-only">
          <p>You notice something strange as you browse the shelves. Between the glowing books, hidden in the shadows, there is a book that doesn&apos;t glow at all. It sits quietly, waiting to be discovered by those who take the time to read rather than grab.</p>
        </div>

        <div className="sr-only">
          <p>The ancient texts surrounding you whisper fragments of knowledge. &quot;Not everything of value shines,&quot; one passage reads. &quot;The wisest readers browse before they focus.&quot;</p>
        </div>

        {/* More visible decoys */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">The Reading Table</h2>
          <div className="flex gap-4">
            <button className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 hover:border-purple-500 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              📜 Open the Scroll
            </button>
            <button className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 hover:border-purple-500 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              🔮 Touch the Crystal
            </button>
          </div>
        </div>

        <div className="sr-only">
          <p>Deep within the library, past the glowing distractions, you find a shelf tucked in a dark corner. On it sits a single ancient tome, unadorned and humble.</p>
          <h3>The Ancient Tome</h3>
          <p>This book cannot be grabbed or clicked — it can only be found by those who browse through the page content. You&apos;ve found it! Press the button below to open it.</p>
          <button onClick={handlePuzzleComplete}>
            Open the Ancient Tome
          </button>
        </div>

        <div className="sr-only">
          <p>More dusty shelves line the back wall, but you&apos;ve already found what matters. The Ancient Tome holds the key to escaping this library.</p>
        </div>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires a screen reader. The solution cannot be found by clicking visible books.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={2}
        puzzleTitle="The Mysterious Library"
        description={
          <>
            You&apos;ve mastered <strong>browse vs focus mode</strong>! You learned that some
            content can only be found by browsing through the page with your screen reader,
            not by tabbing between interactive elements.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Not everything needs your focus. Some things you just read past.
            </p>
            <p className="mb-2">
              <strong>Try:</strong> Instead of pressing Tab to jump between buttons,
              use your screen reader&apos;s browse mode to read through the page content.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Use <kbd>Down Arrow</kbd> to read line by line,
              or <kbd>H</kbd> to jump to the next heading.
            </p>
            <p>
              <strong>VoiceOver:</strong> Use <kbd>VO+Right Arrow</kbd> to move through content,
              or <kbd>VO+Cmd+H</kbd> for headings.
            </p>
          </>
        }
      />
    </main>
  );
}
