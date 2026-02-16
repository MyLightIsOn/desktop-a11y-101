"use client";

import { useState, useEffect, FormEvent } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";

export default function Puzzle5() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [secretInput, setSecretInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handlePuzzleComplete = () => {
    puzzleComplete(5, elapsedTime);
    setPuzzleSolved(true);
  };

  const handleSecretSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (secretInput.trim().length > 0) {
      handlePuzzleComplete();
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6 text-spooky-purple">
          Puzzle 5: The Alchemist&apos;s Laboratory
        </h1>

        <p className="text-gray-300 mb-4">
          You push open a heavy iron door and step into a laboratory. Glass vials
          bubble with strange liquids, and the air smells of sulfur and burnt
          herbs. Scattered across the stone workbench are detailed logs of
          experiments&mdash;ingredients, quantities, and their effects carefully
          recorded. Somewhere in this data lies a hidden formula that could be
          your key to escape.
        </p>

        <p className="text-gray-400 mb-8 text-sm">
          The alchemist was meticulous. Every ingredient is logged in a table,
          and every experiment recorded in forms. But the real secret is hidden
          where only careful navigators will find it.
        </p>

        {/* Visible data table with proper accessibility */}
        <div className="mb-10 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <caption className="text-lg font-semibold text-spooky-green mb-3 text-left">
              Potion Ingredients Log
            </caption>
            <thead>
              <tr className="bg-gray-900">
                <th scope="col" className="border border-gray-700 px-4 py-3 text-left text-spooky-purple">
                  Ingredient
                </th>
                <th scope="col" className="border border-gray-700 px-4 py-3 text-left text-spooky-purple">
                  Quantity
                </th>
                <th scope="col" className="border border-gray-700 px-4 py-3 text-left text-spooky-purple">
                  Effect
                </th>
                <th scope="col" className="border border-gray-700 px-4 py-3 text-left text-spooky-purple">
                  Container
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Dragon Scale</td>
                <td className="border border-gray-700 px-4 py-2">3 drops</td>
                <td className="border border-gray-700 px-4 py-2">Fire resistance</td>
                <td className="border border-gray-700 px-4 py-2">Glass vial</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Moonpetal Extract</td>
                <td className="border border-gray-700 px-4 py-2">15 ml</td>
                <td className="border border-gray-700 px-4 py-2">Night vision</td>
                <td className="border border-gray-700 px-4 py-2">Ceramic flask</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Crushed Obsidian</td>
                <td className="border border-gray-700 px-4 py-2">1 pinch</td>
                <td className="border border-gray-700 px-4 py-2">Shadow cloak</td>
                <td className="border border-gray-700 px-4 py-2">Iron crucible</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Spectral Dew</td>
                <td className="border border-gray-700 px-4 py-2">7 drops</td>
                <td className="border border-gray-700 px-4 py-2">Ghost sight</td>
                <td className="border border-gray-700 px-4 py-2">Crystal phial</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Wraith Moss</td>
                <td className="border border-gray-700 px-4 py-2">2 strands</td>
                <td className="border border-gray-700 px-4 py-2">Ethereal passage</td>
                <td className="border border-gray-700 px-4 py-2">Bone jar</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Phoenix Ash</td>
                <td className="border border-gray-700 px-4 py-2">5 grams</td>
                <td className="border border-gray-700 px-4 py-2">Resurrection</td>
                <td className="border border-gray-700 px-4 py-2">Golden urn</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Banshee Tear</td>
                <td className="border border-gray-700 px-4 py-2">1 drop</td>
                <td className="border border-gray-700 px-4 py-2">Sonic scream</td>
                <td className="border border-gray-700 px-4 py-2">Silver vial</td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="border border-gray-700 px-4 py-2">Void Salt</td>
                <td className="border border-gray-700 px-4 py-2">half teaspoon</td>
                <td className="border border-gray-700 px-4 py-2">Dimensional rift</td>
                <td className="border border-gray-700 px-4 py-2">Lead box</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visible decoy form */}
        <div className="mb-10">
          <h2 className="text-2xl font-henny mb-4 text-spooky-green">
            Experiment Log Entry
          </h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label htmlFor="alchemist-name" className="block text-gray-300 mb-1">
                Name of Alchemist
              </label>
              <input
                id="alchemist-name"
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-spooky-purple"
                placeholder="Enter your name..."
              />
            </div>
            <div>
              <label htmlFor="potion-name" className="block text-gray-300 mb-1">
                Potion Name
              </label>
              <input
                id="potion-name"
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-spooky-purple"
                placeholder="Name your creation..."
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-gray-300 mb-1">
                Experiment Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-spooky-purple"
                placeholder="Record your observations..."
              />
            </div>
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Save Entry
            </button>
          </div>
        </div>

        {/* Hidden form - the REAL solution, only discoverable via screen reader */}
        <div className="sr-only">
          <h3>You found the hidden formula!</h3>
          <p>
            Deep within the alchemist&apos;s notes, you discover a secret entry.
            The formula requires one final ingredient to complete the escape potion.
            Enter any ingredient name and submit to brew the potion.
          </p>
          <form onSubmit={handleSecretSubmit}>
            <label htmlFor="secret-formula">
              Enter the secret ingredient to complete the potion
            </label>
            <input
              id="secret-formula"
              type="text"
              value={secretInput}
              onChange={(e) => setSecretInput(e.target.value)}
              aria-describedby="secret-hint"
            />
            <span id="secret-hint">Type any ingredient name and press Enter or activate the button below.</span>
            <button type="submit">
              Brew the Escape Potion
            </button>
          </form>
        </div>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader form and table
          navigation. Use your screen reader to explore the data and find hidden
          form fields.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={5}
        puzzleTitle="The Alchemist's Laboratory"
        description={
          <>
            You&apos;ve mastered <strong>forms and table navigation</strong>! You
            learned how to navigate tables using{" "}
            <kbd>T</kbd> (NVDA) or <kbd>VO+Cmd+T</kbd> (VoiceOver), explore
            cells with arrow keys, and find form fields using <kbd>F</kbd>{" "}
            (NVDA) or <kbd>VO+Cmd+J</kbd> (VoiceOver). You can now navigate
            structured data and interact with form elements like a pro.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Ingredients are organized in rows and columns. Navigate the
              structure, not just the content.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>T</kbd> to find tables, then use{" "}
              <kbd>Ctrl+Alt+Arrow keys</kbd> to navigate cells. Press{" "}
              <kbd>F</kbd> to jump to form fields.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+Cmd+T</kbd> to find
              tables, then use <kbd>VO+Arrow keys</kbd> to navigate cells. Press{" "}
              <kbd>VO+Cmd+J</kbd> to find form fields.
            </p>
          </>
        }
      />
    </main>
  );
}
