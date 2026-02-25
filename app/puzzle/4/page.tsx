"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

export default function Puzzle4() {
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
    puzzleComplete(4, elapsedTime);
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Open links list", nvda: "Insert + F7", vo: "VO + U (then Links)" },
          { description: "Next link", nvda: "K", vo: "VO + Cmd + L" },
          { description: "Previous link", nvda: "Shift + K", vo: "VO + Shift + Cmd + L" },
          { description: "Activate a link", nvda: "Enter", vo: "VO + Space" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 4: The Grand Foyer</h1>

        <p className="text-gray-300 mb-4">
          You enter the grand foyer of the Mystery House. It&apos;s an enormous entrance hall
          with doors and portraits covering every wall. There must be dozens of ways forward,
          but only one leads to escape.
        </p>

        <p className="text-gray-300 mb-8">
          Going through each door one by one would take forever. There must be a way to
          see all your options at once...
        </p>

        {/* West Wall */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">West Wall</h2>
          <p className="text-gray-300 mb-3">The west wall is covered in ornate frames and heavy wooden doors.</p>
          <div className="space-y-2">
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Portrait of Lord Blackwood</a></p>
            <p className="text-gray-400 text-sm">A stern-faced man in Victorian dress stares down at you.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Drawing Room</a></p>
            <p className="text-gray-400 text-sm">An ornate door with a brass handle, slightly ajar.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Painting of the Garden</a></p>
            <p className="text-gray-400 text-sm">A pastoral scene that seems to shift when you&apos;re not looking directly at it.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Conservatory</a></p>
            <p className="text-gray-400 text-sm">Glass panels in this door reveal overgrown plants beyond.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Statue of Lady Whitmore</a></p>
            <p className="text-gray-400 text-sm">A marble statue with outstretched hands, as if beckoning.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Music Room</a></p>
            <p className="text-gray-400 text-sm">Faint piano music drifts from behind this door.</p>
          </div>
        </div>

        {/* The hidden link - only findable via element list */}
        <div className="sr-only">
          <a href="#" onClick={(e) => { e.preventDefault(); handlePuzzleComplete(); }}>
            The Secret Passage Behind the Portrait
          </a>
        </div>

        {/* East Wall */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">East Wall</h2>
          <p className="text-gray-300 mb-3">The east wall features a grand fireplace flanked by more doors.</p>
          <div className="space-y-2">
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Portrait of the Twin Sisters</a></p>
            <p className="text-gray-400 text-sm">Two identical girls in white dresses smile eerily.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Billiard Room</a></p>
            <p className="text-gray-400 text-sm">Green felt is visible through the keyhole.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>The Grandfather Clock</a></p>
            <p className="text-gray-400 text-sm">It strikes thirteen at midnight, the locals say.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Servants&apos; Quarters</a></p>
            <p className="text-gray-400 text-sm">A plain door, unremarkable compared to the others.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Painting of the Stormy Sea</a></p>
            <p className="text-gray-400 text-sm">You can almost hear waves crashing when you stand near it.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Chapel</a></p>
            <p className="text-gray-400 text-sm">A heavy iron door with a cross above it.</p>
          </div>
        </div>

        {/* North Wall */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">North Wall</h2>
          <p className="text-gray-300 mb-3">The north wall holds the grand staircase and more portraits.</p>
          <div className="space-y-2">
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Portrait of the Founder</a></p>
            <p className="text-gray-400 text-sm">The oldest painting here, darkened with age.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>The Grand Staircase</a></p>
            <p className="text-gray-400 text-sm">A sweeping marble staircase leading to the upper floors.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Tower</a></p>
            <p className="text-gray-400 text-sm">A narrow door leading to a spiral staircase.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Suit of Armor</a></p>
            <p className="text-gray-400 text-sm">A full suit of medieval armor stands guard.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Gallery</a></p>
            <p className="text-gray-400 text-sm">More art awaits beyond this gilded door.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Portrait of the Last Duchess</a></p>
            <p className="text-gray-400 text-sm">She looks sad, as if she knows something you don&apos;t.</p>
          </div>
        </div>

        {/* South Wall */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">South Wall</h2>
          <p className="text-gray-300 mb-3">The south wall faces the main entrance.</p>
          <div className="space-y-2">
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>The Front Door</a></p>
            <p className="text-gray-400 text-sm">Locked from the inside. There&apos;s no going back.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Coat Room</a></p>
            <p className="text-gray-400 text-sm">Dozens of old coats hang inside, smelling of moth balls.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Umbrella Stand</a></p>
            <p className="text-gray-400 text-sm">A brass stand holding three black umbrellas.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Portrait of the Hound</a></p>
            <p className="text-gray-400 text-sm">A large black dog with glowing red eyes.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Door to the Kitchen</a></p>
            <p className="text-gray-400 text-sm">The smell of something cooking wafts through the cracks.</p>
            <p><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Decorative Mirror</a></p>
            <p className="text-gray-400 text-sm">Your reflection seems to move a moment after you do.</p>
          </div>
        </div>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader element list navigation. The solution is a hidden link.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={4}
        puzzleTitle="The Grand Foyer"
        description={
          <>
            You&apos;ve mastered <strong>element lists</strong>! You learned how to view all links
            on a page at once using <kbd>Insert+F7</kbd> (NVDA) or <kbd>VO+U</kbd> (VoiceOver),
            quickly finding the hidden passage among dozens of options.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Too many doors to try one by one. See a list of all your options at once.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>Insert+F7</kbd> to open the element list and view all links.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+U</kbd> to open the Rotor, then select Links.
            </p>
          </>
        }
      />
    </main>
  );
}
