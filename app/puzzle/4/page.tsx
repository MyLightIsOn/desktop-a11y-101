"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";
import PuzzleShortcutsPanel from "@/components/puzzle-shortcuts-panel";

const PASSCODE = "NVDA";

export default function Puzzle4() {
  const [input, setInput] = useState("");
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (!isLockedOut) return;
    if (lockoutTimer === 0) {
      setIsLockedOut(false);
      setLockoutTimer(10);
      setInput("");
      return;
    }
    const timeout = setTimeout(() => setLockoutTimer((t) => t - 1), 1000);
    return () => clearTimeout(timeout);
  }, [isLockedOut, lockoutTimer]);

  const handleSubmit = () => {
    if (input.toUpperCase() === PASSCODE) {
      puzzleComplete(4, elapsedTime);
      setPuzzleSolved(true);
    } else {
      setIsLockedOut(true);
      setLockoutTimer(10);
      setInput("");
    }
  };

  const handleChar = (char: string) => {
    setInput((prev) => (prev.length < 4 ? prev + char : prev));
  };

  if (isLockedOut) {
    return (
      <div
        className="min-h-screen bg-red-950 text-white flex items-center justify-center flex-col text-center p-8"
        aria-live="assertive"
      >
        <p className="text-2xl font-bold text-red-300 mb-4">Wrong passcode!</p>
        <p className="text-gray-300 mb-8">
          The cabinet slams shut. Try again in:
        </p>
        <p
          className="text-9xl font-bold text-red-400"
          aria-label={`${lockoutTimer} seconds`}
        >
          {lockoutTimer}
        </p>
        <p className="text-gray-400 mt-4">seconds...</p>
      </div>
    );
  }

  const btnClass =
    "bg-gray-900 border border-gray-700 rounded-lg py-3 text-gray-300 hover:border-purple-500 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black";

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <PuzzleShortcutsPanel
        shortcuts={[
          { description: "Next table", nvda: "T", vo: "VO + Cmd + T" },
          { description: "Move between cells", nvda: "Ctrl + Alt + Arrows", vo: "VO + Arrows" },
          { description: "Enter focus / forms mode", nvda: "Enter", vo: "VO + Shift + Down" },
          { description: "Exit focus mode", nvda: "Escape", vo: "Escape" },
        ]}
      />
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 4: The Keeper&apos;s Study</h1>

        <p className="text-gray-300 mb-4">
          You find yourself in a dusty study. A heavy desk dominates the center
          of the room, its drawers worn by decades of secrets. On the wall hangs
          a locked cabinet — it requires a passcode to open.
        </p>

        <p className="text-gray-300 mb-8">
          The answers are here somewhere. You&apos;ll need to search every
          corner of the desk.
        </p>

        {/*
          Hidden table — positioned off-screen so its full dimensions are
          preserved for screen reader table navigation. sr-only collapses the
          element to 1px which can break cell-by-cell navigation.
        */}
        <table
          className="absolute left-[-9999px] top-auto"
          aria-label="The Keeper's Desk"
        >
          <caption>The Keeper&apos;s Desk — search each section carefully</caption>
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">Left</th>
              <th scope="col">Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Desktop Surface</th>
              <td>A cracked inkwell and a broken quill. Nothing useful.</td>
              <td>A folded newspaper from 1887. The headline is too faded to read.</td>
            </tr>
            <tr>
              <th scope="row">Top Drawers</th>
              <td>
                A bundle of letters tied with black ribbon, addressed to someone
                named E. Ashford.
              </td>
              <td>
                An old wax seal and a ring of skeleton keys. None of them fit
                the cabinet on the wall.
              </td>
            </tr>
            <tr>
              <th scope="row">Bottom Drawers</th>
              <td>Empty, except for a faint smell of tobacco and regret.</td>
              <td>
                A leather-bound journal, its last entry circled in red ink: the
                passcode is NVDA.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="max-w-xs">
          <p className="text-gray-300 mb-3">Enter the passcode to open the cabinet:</p>

          {/* Input display */}
          <div
            aria-live="polite"
            aria-label={`Passcode input: ${input || "empty"}`}
            className="mb-4 text-xl tracking-widest text-center bg-gray-900 border border-gray-700 rounded-lg py-3 px-4"
          >
            {input.padEnd(4, "-").split("").map((char, i) => (
              <span key={i} className="inline-block w-6 text-center">{char}</span>
            ))}
          </div>

          {/* Character buttons — 3×3 grid */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {["N", "X", "A", "B", "V", "Y", "C", "D", "Z"].map((char) => (
              <button key={char} onClick={() => handleChar(char)} className={btnClass}>
                {char}
              </button>
            ))}
          </div>

          {/* Controls row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button
              aria-label="Delete last character"
              onClick={() => setInput((prev) => prev.slice(0, -1))}
              className={btnClass}
            >
              ←
            </button>
            <button
              aria-label="Clear all input"
              onClick={() => setInput("")}
              className={btnClass}
            >
              ✕
            </button>
            <button
              aria-label={`Submit passcode${input ? ": " + input : ""}`}
              onClick={handleSubmit}
              className={btnClass}
            >
              ↵
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader table navigation. The
          passcode is hidden inside a table.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={4}
        puzzleTitle="The Keeper's Study"
        description={
          <>
            You&apos;ve mastered <strong>table navigation</strong>! Screen
            readers move through tables cell by cell using column and row
            headers as landmarks. Well-structured tables make this powerful —
            without proper headers, table data becomes an unnavigable wall of
            text.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              There&apos;s a desk in this room you can&apos;t see — but your
              screen reader can find it.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>T</kbd> to jump to the next
              table, then use <kbd>Ctrl+Alt+Arrows</kbd> to navigate between
              cells.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+Cmd+T</kbd> to find the
              table, then use <kbd>VO+Arrows</kbd> to move between cells.
            </p>
          </>
        }
      />
    </main>
  );
}
