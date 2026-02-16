"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle2() {
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
    puzzleComplete(2, elapsedTime);
    setPuzzleSolved(true);
  };

  const handleDecoyClick = () => {
    // Decoy books do nothing
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">
          Puzzle 2: The Mysterious Library
        </h1>

        <p className="text-gray-300 mb-4">
          You step into an ancient library. Towering bookshelves line every wall,
          stretching up into the darkness above. Thousands of leather-bound volumes
          fill the shelves, their spines cracked and faded with age.
        </p>

        <p className="text-gray-300 mb-8">
          Many books catch your eye, but only one holds the secret to escaping
          this room. Choose carefully.
        </p>

        {/* Visible decoy books - interactive elements that sighted users might try */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            Books on the Shelf
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                A History of Haunted Houses
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                A dusty volume with a cracked leather cover.
              </p>
            </button>

            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                Spirits and Specters: A Guide
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                The pages seem to glow faintly in the dark.
              </p>
            </button>

            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                The Alchemist&apos;s Cookbook
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Stained pages with strange diagrams and formulas.
              </p>
            </button>

            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                Whispers in the Walls
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                You hear faint murmuring when you touch the spine.
              </p>
            </button>

            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                Midnight Incantations
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                The words on the cover shift and rearrange themselves.
              </p>
            </button>

            <button
              onClick={handleDecoyClick}
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold text-spooky-green">
                The Phantom&apos;s Journal
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Written in a hand that trembles across the page.
              </p>
            </button>
          </div>
        </div>

        {/* sr-only atmospheric text and the real solution */}
        <div className="sr-only">
          <p>
            As you browse past the obvious books on the shelves, you notice
            something tucked behind a row of encyclopedias. It is not on display
            like the others. It is hidden, as if someone wanted it forgotten.
          </p>
        </div>

        <div className="sr-only">
          <p>
            The air grows colder near the back corner of the library. A faint
            shimmer of light escapes from between two heavy tomes. There is
            something wedged behind them.
          </p>
        </div>

        <div className="sr-only">
          <p>
            You reach behind the shelf and your fingers close around a thin,
            ancient volume. Its cover is warm to the touch, pulsing faintly
            like a heartbeat. This book is different from the others.
          </p>
        </div>

        <div className="sr-only">
          <h3>The Ancient Tome</h3>
          <p>
            This ancient tome can only be read, not grabbed. It does not appear
            on the visible shelf. You found it by browsing through the library
            rather than reaching for the obvious books. Press Enter on the
            button below to open it.
          </p>
          <button onClick={handlePuzzleComplete}>
            Open the Ancient Tome
          </button>
        </div>

        <div className="sr-only">
          <p>
            Beyond the hidden tome, the library stretches on endlessly. But you
            have already found what you need.
          </p>
        </div>

        {/* More visible decoy content */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            The Reading Table
          </h2>
          <p className="text-gray-300">
            A large oak table sits in the center of the room, illuminated by a
            single flickering candle. Several books lie open, their pages
            yellowed and brittle.
          </p>

          <button
            onClick={handleDecoyClick}
            className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <h3 className="text-lg font-semibold text-spooky-green">
              An open book on the table
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              The pages are filled with incomprehensible symbols.
            </p>
          </button>

          <button
            onClick={handleDecoyClick}
            className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left hover:border-spooky-purple transition-colors w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <h3 className="text-lg font-semibold text-spooky-green">
              A rolled-up scroll
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Sealed with black wax bearing an unfamiliar crest.
            </p>
          </button>
        </div>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires a screen reader to find the hidden
          book. The answer is not among the visible books on the shelf.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={2}
        puzzleTitle="The Mysterious Library"
        description={
          <>
            You&apos;ve mastered <strong>browse mode vs focus mode</strong>! You
            learned that not everything on a page is an interactive element. By
            browsing through the content with your screen reader instead of
            tabbing between buttons, you discovered the hidden Ancient Tome that
            sighted users could never find.
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
              Try browsing through the page content instead of tabbing between
              buttons.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Use the <kbd>Down Arrow</kbd> key to read
              through the page line by line in browse mode.
            </p>
            <p>
              <strong>VoiceOver:</strong> Use <kbd>VO+Right Arrow</kbd> to move
              through the page content item by item.
            </p>
          </>
        }
      />
    </main>
  );
}
