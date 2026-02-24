"use client";

import { useState, useEffect, FormEvent } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";

export default function Puzzle6() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [step, setStep] = useState(1);
  const [finalWord, setFinalWord] = useState("");
  const [allowed, setAllowed] = useState(false);

  // Gate check: puzzles 1-5 must be complete
  useEffect(() => {
    try {
      for (let i = 1; i <= 5; i++) {
        if (localStorage.getItem(`puzzle_${i}_complete`) !== "true") {
          window.location.href = "/start";
          return;
        }
      }
      setAllowed(true);
    } catch {
      window.location.href = "/start";
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handlePuzzleComplete = () => {
    puzzleComplete(6, elapsedTime);
    setPuzzleSolved(true);
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (finalWord.trim()) {
      handlePuzzleComplete();
    }
  };

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Checking puzzle progress...</p>
      </main>
    );
  }

  const stepHints = [
    "The ballroom is vast... navigate by structure, not by content. Use heading navigation.",
    "Multiple areas surround you... jump between the landmarks to find the hidden one.",
    "Something requires your input... find the form and speak the final word.",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 6: The Haunted Ballroom</h1>

        <p className="text-gray-300 mb-4">
          You enter the grand ballroom — the final room of the Mystery House.
          Ghostly music fills the air and spectral dancers waltz across the floor.
          To escape, you must use everything you&apos;ve learned.
        </p>

        {/* Step indicator */}
        <div className="mb-6">
          <p className="text-spooky-green font-semibold text-lg">Step {step} of 3</p>
          <div className="flex gap-2 mt-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-3 h-3 rounded-full ${s <= step ? "bg-spooky-green" : "bg-gray-700"}`}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2 italic">{stepHints[step - 1]}</p>
        </div>

        {/* Aria-live region for step announcements */}
        <div aria-live="polite" className="sr-only">
          {step === 1 && "Step 1 of 3: Find the Conductor's Podium using heading navigation."}
          {step === 2 && "Step 2 of 3: Find the hidden area using landmark navigation."}
          {step === 3 && "Step 3 of 3: Find and complete the form to break the curse."}
        </div>

        {/* Step 1: Heading Navigation */}
        <div className={step === 1 ? "" : "hidden"}>
          <div className="sr-only">
            <p>The ballroom is enormous. Spectral dancers swirl around you, their translucent forms casting no shadows. You need to find the conductor who leads the ghostly orchestra.</p>
          </div>

          {Array.from({ length: 20 }).map((_, i) => (
            <p key={`s1-decoy-${i}`} className="sr-only">
              The ghostly dancers continue their eternal waltz. Their footsteps make no sound on the marble floor. You must find the conductor to stop the music.
            </p>
          ))}

          <div className="sr-only">
            <h3>The Crystal Chandelier</h3>
            <p>An enormous crystal chandelier hangs from the ceiling, its candles burning with blue flame. Beautiful, but not what you&apos;re looking for.</p>
          </div>

          {Array.from({ length: 15 }).map((_, i) => (
            <p key={`s1-decoy2-${i}`} className="sr-only">
              More ghostly figures glide past. The music swells and fades in waves. Keep searching for the conductor.
            </p>
          ))}

          <div className="sr-only">
            <h3>The Refreshment Table</h3>
            <p>A long table laden with ghostly delicacies. The food looks real but your hand passes right through it.</p>
          </div>

          {Array.from({ length: 10 }).map((_, i) => (
            <p key={`s1-decoy3-${i}`} className="sr-only">
              The orchestra plays on. You must find where the conductor stands to proceed.
            </p>
          ))}

          <div className="sr-only">
            <h3>The Conductor&apos;s Podium</h3>
            <p>You&apos;ve found the conductor&apos;s podium! A small raised platform at the front of the orchestra. Step onto it to take control of the music.</p>
            <button onClick={() => setStep(2)}>
              Step onto the podium
            </button>
          </div>

          {Array.from({ length: 10 }).map((_, i) => (
            <p key={`s1-decoy4-${i}`} className="sr-only">
              The music continues. Have you tried jumping between headings to find the podium faster?
            </p>
          ))}

          <div className="mt-8 text-sm text-gray-600 italic">
            Visual users: Use heading navigation to find the Conductor&apos;s Podium.
          </div>
        </div>

        {/* Step 2: Landmark Navigation */}
        <div className={step === 2 ? "" : "hidden"}>
          <p className="text-gray-300 mb-6">
            The music stops. The dancers freeze mid-step, then slowly turn to face you.
            The ballroom shifts and new areas appear around the edges of the room.
            One of them holds the key to the next step...
          </p>

          <nav aria-label="Dance Floor Gallery" className="mb-6 bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-henny text-gray-400 mb-3">Dance Floor Gallery</h2>
            <p className="text-gray-300 mb-3">Portraits of famous dancers line the walls around the main dance floor. Their eyes follow you as you pass.</p>
            <p className="text-gray-300">A velvet rope separates the gallery from the dance floor itself. Nothing useful here.</p>
          </nav>

          <aside aria-label="Musician's Alcove" className="mb-6 bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-henny text-gray-400 mb-3">Musician&apos;s Alcove</h2>
            <p className="text-gray-300 mb-3">The orchestra&apos;s instruments sit in their stands, still vibrating faintly. Sheet music is scattered across the floor.</p>
            <p className="text-gray-300">You pick up a page of music but it&apos;s written in a notation you&apos;ve never seen before.</p>
          </aside>

          <section aria-label="Grand Staircase" className="mb-6 bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-henny text-gray-400 mb-3">Grand Staircase</h2>
            <p className="text-gray-300 mb-3">A sweeping staircase leads to a balcony overlooking the ballroom. From up there, you could see everything — but the stairs seem to go on forever.</p>
            <p className="text-gray-300">You start climbing but the top never gets any closer. This isn&apos;t the way.</p>
          </section>

          {/* Hidden landmark with the solution */}
          <section aria-label="Behind the Curtain" className="sr-only">
            <h2>Behind the Curtain</h2>
            <p>You&apos;ve found a heavy velvet curtain at the far end of the ballroom. Behind it, a small antechamber reveals a ghostly figure gesturing for you to approach.</p>
            <p>The ghost points to a final challenge that lies beyond.</p>
            <button onClick={() => setStep(3)}>
              Pull back the curtain
            </button>
          </section>

          <div className="mt-8 text-sm text-gray-600 italic">
            Visual users: Use landmark navigation to find the hidden area.
          </div>
        </div>

        {/* Step 3: Form Submission */}
        <div className={step === 3 ? "" : "hidden"}>
          <p className="text-gray-300 mb-6">
            Behind the curtain, the ghost speaks in a voice like rustling leaves.
            The room grows cold. One final challenge remains before you can escape
            the Mystery House forever.
          </p>

          {Array.from({ length: 10 }).map((_, i) => (
            <p key={`s3-decoy-${i}`} className="sr-only">
              The ghostly voice echoes through the chamber. &quot;Find the form... speak the word... break the curse...&quot; The whispers swirl around you like fog.
            </p>
          ))}

          <div className="sr-only">
            <h2>The Ghostly Voice</h2>
            <p>The ghost speaks: &quot;You have proven yourself worthy. Speak any word to break the curse and escape the Mystery House forever.&quot;</p>
            <form onSubmit={handleFinalSubmit}>
              <label htmlFor="final-word">Speak the final word:</label>
              <input
                type="text"
                id="final-word"
                value={finalWord}
                onChange={(e) => setFinalWord(e.target.value)}
              />
              <button type="submit">Break the Curse</button>
            </form>
          </div>

          <div className="mt-8 text-sm text-gray-600 italic">
            Visual users: Use form navigation to find and complete the final challenge.
          </div>
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={6}
        puzzleTitle="The Haunted Ballroom"
        description={
          <>
            <strong>Congratulations!</strong> You&apos;ve mastered all screen reader navigation
            skills — <strong>headings</strong>, <strong>landmarks</strong>,{" "}
            <strong>browse/focus mode</strong>, <strong>element lists</strong>, and{" "}
            <strong>forms</strong>. You&apos;ve escaped the Mystery House!
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Use everything you&apos;ve learned. Read the structure, jump wisely, interact carefully.
            </p>
            <p className="mb-2">
              <strong>Step 1:</strong> Use heading navigation (<kbd>H</kbd> key in NVDA, <kbd>VO+Cmd+H</kbd> in VoiceOver)
            </p>
            <p className="mb-2">
              <strong>Step 2:</strong> Use landmark navigation (<kbd>D</kbd> key in NVDA, <kbd>VO+U</kbd> Rotor &gt; Landmarks in VoiceOver)
            </p>
            <p>
              <strong>Step 3:</strong> Use form navigation (<kbd>F</kbd> key in NVDA, <kbd>VO+Cmd+J</kbd> in VoiceOver)
            </p>
          </>
        }
      />
    </main>
  );
}
