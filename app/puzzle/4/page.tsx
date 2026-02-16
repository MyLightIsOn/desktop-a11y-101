"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle4() {
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
    puzzleComplete(4, elapsedTime);
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">
          Puzzle 4: The Grand Foyer
        </h1>

        <p className="text-gray-300 mb-4">
          You enter a grand foyer, vast and echoing. The ceiling towers overhead,
          lost in darkness. Dozens of doors, portraits, and statues surround you
          on every side. The sheer number of objects is overwhelming.
        </p>

        <p className="text-gray-300 mb-8">
          One of these leads to freedom, but there are far too many to try one
          by one. You need a smarter way to find the right path.
        </p>

        {/* First group of decoy links with text between them */}
        <h2 className="text-2xl font-henny text-spooky-purple mb-4">
          The West Wall
        </h2>
        <p className="text-gray-300 mb-3">
          The west wall is dominated by a row of imposing portraits in gilded
          frames. Beneath each portrait hangs a small brass nameplate.
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of Lord Blackwood
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of Lady Ashworth
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of the Twins
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of Madame Vesper
            </a>
          </li>
        </ul>

        <p className="text-gray-300 mb-3">
          Between the portraits, heavy velvet curtains hang from ceiling to floor.
          They sway gently despite the absence of any breeze.
        </p>

        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Drawing Room
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Conservatory
            </a>
          </li>
        </ul>

        {/* Second group */}
        <h2 className="text-2xl font-henny text-spooky-purple mb-4">
          The East Wall
        </h2>
        <p className="text-gray-300 mb-3">
          The east wall features an elaborate display of weapons and armor. A
          suit of plate armor stands guard beside each doorway, their empty
          helmets seeming to track your movement.
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Armory
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Painting of the Garden
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Statue of Lady Whitmore
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Billiard Room
            </a>
          </li>
        </ul>

        <p className="text-gray-300 mb-3">
          A grandfather clock ticks loudly in the corner, its pendulum swinging
          with mechanical precision. The time it shows makes no sense.
        </p>

        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of Colonel Ashford
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Music Room
            </a>
          </li>
        </ul>

        {/* Third group */}
        <h2 className="text-2xl font-henny text-spooky-purple mb-4">
          The North Wall
        </h2>
        <p className="text-gray-300 mb-3">
          The north wall is the grandest of all, centered on a massive stone
          fireplace. The mantle is carved with faces that seem to shift when
          you look away. Above it hangs the largest portrait in the room.
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of the Founder
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Chapel
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Bust of Sir Reginald
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Wine Cellar
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Painting of the Moonlit Lake
            </a>
          </li>
        </ul>

        {/* The hidden solution link among sr-only content */}
        <div className="sr-only">
          <p>
            Behind one of the portraits, the wall feels different. There is a
            slight draft coming from behind it, and the mortar is crumbling.
            This portrait can be moved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePuzzleComplete();
            }}
          >
            The Secret Passage Behind the Portrait
          </a>
          <p>
            The portrait swings open on hidden hinges, revealing a narrow passage
            behind the wall. Cool air rushes through from beyond.
          </p>
        </div>

        {/* Fourth group */}
        <h2 className="text-2xl font-henny text-spooky-purple mb-4">
          The South Wall
        </h2>
        <p className="text-gray-300 mb-3">
          The south wall is where you entered. The door you came through has
          sealed itself shut. Several other doors and decorations line this
          wall as well.
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Servant&apos;s Quarters
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of the Housekeeper
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Kitchen
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Statue of a Weeping Angel
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Greenhouse
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Painting of the Stormy Sea
            </a>
          </li>
        </ul>

        {/* The Grand Staircase */}
        <h2 className="text-2xl font-henny text-spooky-purple mb-4">
          The Grand Staircase
        </h2>
        <p className="text-gray-300 mb-3">
          A sweeping staircase curves upward from the center of the foyer, its
          banister carved from dark wood polished to a mirror shine. The stairs
          creak ominously underfoot.
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door at the top of the stairs
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Portrait of the Family
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Stained Glass Window
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Tower
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Tapestry of the Hunt
            </a>
          </li>
          <li>
            <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
              Door to the Study
            </a>
          </li>
        </ul>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader element list
          navigation. There are too many links to check one by one. Use
          Insert+F7 (NVDA) or VO+U Rotor (VoiceOver) to view all links at once.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={4}
        puzzleTitle="The Grand Foyer"
        description={
          <>
            You&apos;ve mastered <strong>element lists</strong>! You learned how
            to use <kbd>Insert+F7</kbd> (NVDA) or the <kbd>VO+U</kbd> Rotor
            set to Links (VoiceOver) to view all links on a page at once.
            Instead of tabbing through dozens of links one by one, you can now
            quickly scan all elements of a type and jump directly to the one
            you need.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Too many doors to try one by one. See a list of all your options
              at once. One link is hidden from sight but will appear in the list.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>Insert+F7</kbd> to open the
              Elements List, then select Links to see all links on the page.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+U</kbd> to open the
              Rotor, then navigate to Links to browse all links on the page.
            </p>
          </>
        }
      />
    </main>
  );
}
