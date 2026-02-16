"use client";

import { useState, useEffect, FormEvent } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle6() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [step, setStep] = useState(1);
  const [finalWord, setFinalWord] = useState("");
  const [allowed, setAllowed] = useState(false);

  // Check that puzzles 1-5 are complete
  useEffect(() => {
    try {
      for (let i = 1; i <= 5; i++) {
        if (localStorage.getItem(`puzzle_${i}_complete`) !== "true") {
          window.location.href = "/start";
          return;
        }
      }
      setAllowed(true);
    } catch (e) {
      window.location.href = "/start";
    }
  }, []);

  // Timer
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
    if (finalWord.trim().length > 0) {
      handlePuzzleComplete();
    }
  };

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <p className="text-gray-400">Checking progress...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6 text-spooky-purple">
          Puzzle 6: The Haunted Ballroom
        </h1>

        <p className="text-gray-300 mb-4">
          The grand double doors swing open to reveal an enormous ballroom. Dust
          motes dance in shafts of pale moonlight, and the faint echo of a
          waltz lingers in the air. This is the final room&mdash;the last
          challenge standing between you and freedom. Everything you have
          learned will be tested here.
        </p>

        {/* Step progress indicator */}
        <div className="mb-6 flex items-center gap-4">
          <p className="text-lg font-semibold text-spooky-green">
            Step {step} of 3
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-4 h-4 rounded-full border-2 ${
                  s <= step
                    ? "bg-spooky-green border-spooky-green"
                    : "bg-transparent border-gray-600"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Aria-live region for step announcements */}
        <div aria-live="polite" className="sr-only">
          {step === 1 && "Step 1 of 3: Use heading navigation to find the Conductor's Podium."}
          {step === 2 && "Step 2 of 3: Use landmark navigation to find what is behind the curtain."}
          {step === 3 && "Step 3 of 3: Find and complete the final form to break the curse."}
        </div>

        {/* Visible hint per step */}
        <div className="mb-8 text-gray-400 italic text-sm">
          {step === 1 && "The ballroom is vast... navigate by structure, not by content."}
          {step === 2 && "Multiple areas surround you... jump between them."}
          {step === 3 && "Something requires your input... find and fill it."}
        </div>

        {/* ===== STEP 1: Heading Navigation ===== */}
        {step >= 1 && (
          <div className={step === 1 ? "" : "hidden"}>
            <h2 className="text-2xl font-henny mb-4 text-spooky-green">
              The Ballroom Floor
            </h2>
            <p className="text-gray-300 mb-4">
              Ghostly figures dance across the marble floor. The room is vast,
              with many areas to explore. You must find the conductor who leads
              the phantom orchestra.
            </p>

            {/* Decoy sr-only paragraphs */}
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={`s1-decoy-${i}`} className="sr-only">
                The ghostly dancers swirl past you. Couple number {i + 1} glides
                by, their translucent forms barely visible. This is not what
                you&apos;re looking for. Navigate by headings!
              </p>
            ))}

            {/* Decoy sr-only headings */}
            <div className="sr-only">
              <h3>The Crystal Chandelier</h3>
              <p>A massive chandelier hangs overhead, its crystals dark and still. Nothing useful here.</p>
            </div>

            {Array.from({ length: 20 }).map((_, i) => (
              <p key={`s1-decoy2-${i}`} className="sr-only">
                More phantom dancers drift past. The music grows louder, then
                fades. Couple {i + 31} spins away into the shadows.
              </p>
            ))}

            <div className="sr-only">
              <h3>The Refreshment Table</h3>
              <p>Ancient goblets sit on a dusty table. The wine has long since evaporated. Nothing here.</p>
            </div>

            {Array.from({ length: 15 }).map((_, i) => (
              <p key={`s1-decoy3-${i}`} className="sr-only">
                You sense something important nearby but this isn&apos;t it.
                Paragraph {i + 51} of ghostly ambience. Keep searching the headings.
              </p>
            ))}

            {/* The real heading */}
            <div className="sr-only">
              <h3>The Conductor&apos;s Podium</h3>
              <p>
                You&apos;ve found the conductor&apos;s podium! A baton rests on
                the music stand, glowing faintly. Step onto the podium to take
                command of the phantom orchestra.
              </p>
              <button
                onClick={() => setStep(2)}
                className="underline text-spooky-green"
              >
                Step onto the podium
              </button>
            </div>

            {Array.from({ length: 20 }).map((_, i) => (
              <p key={`s1-decoy4-${i}`} className="sr-only">
                The ballroom stretches on. More ghostly figures flicker in your
                peripheral vision. Keep navigating by headings to find the podium.
              </p>
            ))}
          </div>
        )}

        {/* ===== STEP 2: Landmark Navigation ===== */}
        {step >= 2 && (
          <div className={step === 2 ? "" : "hidden"}>
            <h2 className="text-2xl font-henny mb-4 text-spooky-green">
              The Orchestra Responds
            </h2>
            <p className="text-gray-300 mb-4">
              You raise the baton and the phantom orchestra plays a haunting
              melody. The music reveals hidden areas of the ballroom that were
              invisible before. Multiple regions shimmer into existence around
              you.
            </p>

            {/* Visible decoy landmark */}
            <nav aria-label="Dance Floor Gallery" className="mb-4 p-4 border border-gray-800 rounded">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Dance Floor Gallery</h3>
              <p className="text-gray-500 text-sm">
                Portraits of long-dead dancers line this section of the wall.
                Their painted eyes seem to follow you, but there is nothing
                useful here.
              </p>
            </nav>

            <aside aria-label="Musician's Alcove" className="mb-4 p-4 border border-gray-800 rounded">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Musician&apos;s Alcove</h3>
              <p className="text-gray-500 text-sm">
                Dusty instruments rest in velvet-lined cases. A violin, a cello,
                a flute&mdash;all silent. This alcove holds nothing of value.
              </p>
            </aside>

            <section aria-label="Grand Staircase" className="mb-4 p-4 border border-gray-800 rounded">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Grand Staircase</h3>
              <p className="text-gray-500 text-sm">
                A sweeping staircase leads upward, but the upper floor has
                collapsed. There is no way through here.
              </p>
            </section>

            {/* sr-only decoy landmarks */}
            <nav aria-label="Trophy Corridor" className="sr-only">
              <p>A narrow corridor lined with trophies and awards. None of them are relevant to your escape.</p>
            </nav>

            <aside aria-label="Coat Room" className="sr-only">
              <p>Rows of dusty coats and cloaks hang in silence. Nothing hidden among them.</p>
            </aside>

            {/* The real hidden landmark */}
            <section aria-label="Behind the Curtain" className="sr-only">
              <h3>A Hidden Passage</h3>
              <p>
                Behind a heavy velvet curtain, you discover a narrow passage
                leading to a secret chamber. The air grows cold, and you hear a
                faint whisper. Pull back the curtain to continue.
              </p>
              <button
                onClick={() => setStep(3)}
                className="underline text-spooky-green"
              >
                Pull back the curtain
              </button>
            </section>

            <section aria-label="Wine Cellar Entrance" className="sr-only">
              <p>A locked door leads down to the wine cellar. The lock is rusted shut. No way through.</p>
            </section>
          </div>
        )}

        {/* ===== STEP 3: Form Submission ===== */}
        {step >= 3 && (
          <div className={step === 3 ? "" : "hidden"}>
            <h2 className="text-2xl font-henny mb-4 text-spooky-green">
              The Final Chamber
            </h2>
            <p className="text-gray-300 mb-4">
              You step through the passage into a small, cold chamber. The
              phantom music fades to silence. A single ghostly figure blocks the
              exit, waiting for you to speak the final word.
            </p>

            {/* Decoy visible content */}
            <div className="p-4 border border-gray-800 rounded mb-4">
              <p className="text-gray-500 text-sm italic">
                The ghost stares at you with hollow eyes. Its lips move but no
                sound reaches your ears. Perhaps there is another way to
                communicate...
              </p>
            </div>

            {/* sr-only decoy paragraphs */}
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={`s3-decoy-${i}`} className="sr-only">
                The chamber walls are covered in ancient inscriptions. Line {i + 1}{" "}
                reads something illegible. This is not the way. Find the form.
              </p>
            ))}

            {/* The hidden form - the real solution */}
            <div className="sr-only">
              <h3>The Ghostly Voice</h3>
              <p>
                The music stops. A ghostly voice whispers: &quot;Speak the final
                word to be free.&quot; You see an ancient inscription that
                requires your response.
              </p>
              <form onSubmit={handleFinalSubmit}>
                <label htmlFor="final-word">
                  Speak the final word
                </label>
                <input
                  id="final-word"
                  type="text"
                  value={finalWord}
                  onChange={(e) => setFinalWord(e.target.value)}
                  aria-describedby="final-hint"
                />
                <span id="final-hint">
                  Type any word and press Enter or activate the button to break the curse.
                </span>
                <button type="submit">
                  Break the Curse
                </button>
              </form>
            </div>

            {Array.from({ length: 10 }).map((_, i) => (
              <p key={`s3-decoy2-${i}`} className="sr-only">
                More inscriptions line the walls. Passage {i + 11} is
                indecipherable. The ghost waits patiently. Find the form to speak.
              </p>
            ))}
          </div>
        )}

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This is the final challenge. It requires all screen
          reader skills from previous puzzles. Use your screen reader to
          navigate through each step.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={6}
        puzzleTitle="The Haunted Ballroom"
        description={
          <>
            Congratulations! You&apos;ve mastered <strong>all screen reader
            navigation skills</strong>&mdash;headings, landmarks, browse/focus
            mode, element lists, and forms. You&apos;ve escaped the Mystery
            House! You are now equipped to navigate the web with confidence using{" "}
            <strong>NVDA</strong> and <strong>VoiceOver</strong>.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Use everything you&apos;ve learned. Read the structure, jump
              wisely, interact carefully.
            </p>
            <p className="mb-2">
              <strong>Step 1:</strong> Use heading navigation&mdash;
              <kbd>H</kbd> (NVDA) or <kbd>VO+Cmd+H</kbd> (VoiceOver).
            </p>
            <p className="mb-2">
              <strong>Step 2:</strong> Use landmark navigation&mdash;
              <kbd>D</kbd> (NVDA) or <kbd>VO+Cmd+L</kbd> (VoiceOver) to jump
              between regions.
            </p>
            <p>
              <strong>Step 3:</strong> Find and complete the form&mdash;
              <kbd>F</kbd> (NVDA) or <kbd>VO+Cmd+J</kbd> (VoiceOver) to find
              form fields.
            </p>
          </>
        }
      />
    </main>
  );
}
