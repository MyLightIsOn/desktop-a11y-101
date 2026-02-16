"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle3() {
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
    puzzleComplete(3, elapsedTime);
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">
          Puzzle 3: The Winding Corridors
        </h1>

        <p className="text-gray-300 mb-4">
          You step through the doorway and find yourself in a vast network of
          twisting corridors. The stone walls stretch in every direction, each
          passage leading deeper into the unknown.
        </p>

        <p className="text-gray-300 mb-8">
          There are many areas to explore, but wandering aimlessly will only get
          you more lost. Find the way out before the walls close in.
        </p>

        {/* North Corridor - landmark nav */}
        <nav aria-label="North Corridor" className="mb-8 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            North Corridor
          </h2>
          <p className="text-gray-300 mb-3">
            The North Corridor stretches ahead, lined with flickering torches
            mounted in iron brackets. The flames cast dancing shadows on the
            damp stone walls. Water drips from the ceiling in a steady rhythm.
          </p>
          <p className="text-gray-300 mb-3">
            Ancient tapestries hang from the walls, their colors faded beyond
            recognition. They depict scenes of battles long forgotten, their
            warriors frozen in silent combat for eternity.
          </p>
          <p className="text-gray-300 mb-4">
            Several doors line the corridor, each marked with a different symbol.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door with a crescent moon
              </a>
            </li>
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door with a serpent carving
              </a>
            </li>
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door with iron chains
              </a>
            </li>
          </ul>
        </nav>

        {/* East Wing - landmark section */}
        <section aria-label="East Wing" className="mb-8 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            East Wing
          </h2>
          <p className="text-gray-300 mb-3">
            The East Wing opens into a wider passage. The ceiling here is vaulted
            and covered in elaborate carvings of vines and thorns. The stonework
            is older here, from a time before the rest of the house was built.
          </p>
          <p className="text-gray-300 mb-3">
            A cold draft blows through the corridor, carrying with it the scent
            of old parchment and decay. Somewhere in the distance, you hear the
            faint sound of a music box playing an eerie melody.
          </p>
          <p className="text-gray-300 mb-3">
            Portraits line the walls, their subjects staring down at you with
            hollow eyes. You could swear their gazes follow you as you move.
          </p>
          <p className="text-gray-300">
            The passage continues east, but a heavy iron gate blocks your path.
            It appears to be rusted shut.
          </p>
        </section>

        {/* West Alcove - landmark aside */}
        <aside aria-label="West Alcove" className="mb-8 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            West Alcove
          </h2>
          <p className="text-gray-300 mb-3">
            A narrow opening in the western wall leads to a small alcove. The
            space is cramped and dark, barely wide enough for one person. Cobwebs
            cling to every surface.
          </p>
          <p className="text-gray-300 mb-3">
            Shelves carved directly into the stone hold a collection of strange
            artifacts: a tarnished silver mirror, a glass jar filled with
            something murky, a stack of yellowed letters tied with black ribbon.
          </p>
          <p className="text-gray-300 mb-3">
            On the floor, scratched into the stone with something sharp, you
            can barely make out the words: &quot;The way out is not through the
            doors you can see.&quot;
          </p>
          <p className="text-gray-300">
            The alcove is a dead end. You must turn back and try another route.
          </p>
        </aside>

        {/* South Passage - landmark nav */}
        <nav aria-label="South Passage" className="mb-8 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-spooky-purple mb-4">
            South Passage
          </h2>
          <p className="text-gray-300 mb-3">
            The South Passage descends gradually, the air growing warmer and
            thicker with each step. The walls here are rough and unfinished,
            as if the builders abandoned their work partway through.
          </p>
          <p className="text-gray-300 mb-3">
            Strange markings cover the walls, painted in a substance you would
            rather not identify. They seem to form a map, but of a place that
            does not match any geography you know.
          </p>
          <p className="text-gray-300 mb-4">
            More doors appear along this passage, though they look no more
            promising than the ones in the North Corridor.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door covered in moss
              </a>
            </li>
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door with a brass knocker
              </a>
            </li>
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door that is slightly ajar
              </a>
            </li>
            <li>
              <a href="#" className="text-spooky-green hover:text-spooky-purple underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                Door with scratch marks
              </a>
            </li>
          </ul>
        </nav>

        {/* Hidden Chamber - the solution landmark, completely sr-only */}
        <section aria-label="Hidden Chamber" className="sr-only">
          <h2>The Hidden Chamber</h2>
          <p>
            Behind a section of wall that looked solid from the outside, you
            discover a hidden chamber. The air here is different, cleaner somehow,
            and a faint light emanates from the ceiling.
          </p>
          <p>
            In the center of the chamber stands an ornate archway, carved with
            symbols that pulse with a soft green light. This is the way out of
            the corridors. You found it by jumping between the major areas of
            this maze rather than wandering through every passage.
          </p>
          <button onClick={handlePuzzleComplete}>
            Enter the Hidden Chamber
          </button>
        </section>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader landmark navigation.
          Use the D key (NVDA) or the Rotor (VoiceOver) to jump between regions.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={3}
        puzzleTitle="The Winding Corridors"
        description={
          <>
            You&apos;ve mastered <strong>landmark navigation</strong>! You
            learned how to jump between page regions using the <kbd>D</kbd> key
            (NVDA) or <kbd>VO+U</kbd> to open the Rotor and select Landmarks
            (VoiceOver). Instead of reading through every line of content, you
            can now leap between major sections of a page efficiently.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Lost in a maze? Jump between major areas rather than reading every
              step. There are many corridors, but one area is completely hidden
              from sight.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>D</kbd> to jump to the next
              landmark region.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+U</kbd> to open the
              Rotor, then select Landmarks to navigate between regions.
            </p>
          </>
        }
      />
    </main>
  );
}
