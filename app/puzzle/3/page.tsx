"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

export default function Puzzle3() {
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
    puzzleComplete(3, elapsedTime);
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Next landmark / region", nvda: "D", vo: "VO + U (then Landmarks)" },
          { description: "Previous landmark", nvda: "Shift + D", vo: "VO + Shift + U" },
          { description: "Open element list / rotor", nvda: "Insert + F7", vo: "VO + U" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 3: The Winding Corridors</h1>

        <p className="text-gray-300 mb-4">
          You enter a maze of twisting corridors. Passages branch off in every direction,
          each leading to different wings of the house. Reading every wall inscription
          would take hours.
        </p>

        <p className="text-gray-300 mb-8">
          There must be a faster way to move between the major areas of this maze...
        </p>

        {/* North Corridor */}
        <nav aria-label="North Corridor" className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">North Corridor</h2>
          <p className="text-gray-300 mb-3">The north corridor stretches into darkness. Torches flicker on the walls, casting dancing shadows. Stone gargoyles perch above each doorway, their eyes seeming to follow your movement.</p>
          <p className="text-gray-300 mb-3">Ancient tapestries hang from the walls, depicting scenes of a grand feast that took place centuries ago. The fabric is moth-eaten but the images remain vivid.</p>
          <p className="text-gray-300 mb-4">Three doors line the corridor, each marked with a different symbol.</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door with the Crescent Moon</a></li>
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door with the Serpent</a></li>
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door with the Eye</a></li>
          </ul>
        </nav>

        {/* East Wing */}
        <section aria-label="East Wing" className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">East Wing</h2>
          <p className="text-gray-300 mb-3">The east wing opens into a wider passage. The ceiling is higher here, and you can hear the echo of your footsteps bouncing off distant walls.</p>
          <p className="text-gray-300 mb-3">A series of stained glass windows line one wall, but the moonlight passing through them casts strange, shifting patterns on the floor.</p>
          <p className="text-gray-300 mb-3">You notice claw marks scratched into the stone walls. Whatever made them was large and desperate to escape.</p>
          <p className="text-gray-300">At the end of the wing, a spiral staircase leads both up and down, but the steps crumble as you approach.</p>
        </section>

        {/* West Alcove */}
        <aside aria-label="West Alcove" className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">West Alcove</h2>
          <p className="text-gray-300 mb-3">A small alcove opens to the west. It&apos;s quieter here — the echoes from the main corridors fade to a murmur.</p>
          <p className="text-gray-300 mb-3">A stone bench sits against the wall, worn smooth by countless visitors. Above it, someone has scratched a message into the stone:</p>
          <blockquote className="border-l-4 border-spooky-purple pl-4 text-gray-400 italic mb-3">&quot;The chamber you seek is hidden from sight, but not from those who jump between the landmarks of this maze.&quot;</blockquote>
          <p className="text-gray-300">An old lantern sits on the bench, its flame long extinguished.</p>
        </aside>

        {/* South Passage */}
        <nav aria-label="South Passage" className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">South Passage</h2>
          <p className="text-gray-300 mb-3">The south passage is narrower than the others. The walls press in close, and you have to duck beneath low-hanging archways.</p>
          <p className="text-gray-300 mb-3">Water drips steadily from the ceiling, collecting in puddles on the uneven floor. The air smells of damp earth and old stone.</p>
          <p className="text-gray-300 mb-4">Several passages branch off from here, each disappearing into shadow.</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Follow the sound of water</a></li>
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Take the descending stairs</a></li>
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Squeeze through the narrow gap</a></li>
            <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Turn back to the main corridor</a></li>
          </ul>
        </nav>

        {/* Hidden Chamber - the solution! Only findable via landmark navigation */}
        <section aria-label="Hidden Chamber" className="sr-only">
          <h2>The Hidden Chamber</h2>
          <p>You&apos;ve found it! A hidden chamber that doesn&apos;t appear on any map. The room is small but ornate, with a single door that leads to freedom.</p>
          <p>The walls are covered in ancient runes that pulse with a soft green light. In the center of the room, a pedestal holds a golden key.</p>
          <button onClick={handlePuzzleComplete}>
            Enter the Hidden Chamber
          </button>
        </section>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader landmark navigation to find a hidden room.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={3}
        puzzleTitle="The Winding Corridors"
        description={
          <>
            You&apos;ve mastered <strong>landmark navigation</strong>! You learned how to jump
            between page regions using the <kbd>D</kbd> key (NVDA) or the Rotor landmarks
            list with <kbd>VO+U</kbd> (VoiceOver), finding areas that aren&apos;t visible on screen.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Lost in a maze? Jump between major areas rather than reading every step.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>D</kbd> to jump to the next landmark region.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+U</kbd> to open the Rotor, then select Landmarks.
            </p>
          </>
        }
      />
    </main>
  );
}
