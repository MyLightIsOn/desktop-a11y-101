"use client";

import { useState, useEffect, FormEvent } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";
import { puzzleComplete } from "@/lib/puzzleComplete";
import ResetButton from "@/components/reset-button";

export default function Puzzle5() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [secretIngredient, setSecretIngredient] = useState("");

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
    if (secretIngredient.trim()) {
      handlePuzzleComplete();
    }
  };

  const ingredients = [
    { name: "Dragon Scale", quantity: "3 drops", effect: "Fire resistance", container: "Glass vial" },
    { name: "Moonpetal Extract", quantity: "1 sprig", effect: "Night vision", container: "Silver flask" },
    { name: "Crushed Obsidian", quantity: "2 pinches", effect: "Shadow walking", container: "Stone mortar" },
    { name: "Spectral Dew", quantity: "5 drops", effect: "Ghost sight", container: "Crystal bottle" },
    { name: "Wraith Moss", quantity: "1 handful", effect: "Phasing", container: "Wooden box" },
    { name: "Phoenix Ash", quantity: "1 teaspoon", effect: "Regeneration", container: "Iron crucible" },
    { name: "Banshee Tear", quantity: "7 drops", effect: "Sound amplification", container: "Amber vial" },
    { name: "Void Salt", quantity: "4 grains", effect: "Teleportation", container: "Lead container" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <ResetButton />
        <h1 className="text-4xl font-henny mb-6">Puzzle 5: The Alchemist&apos;s Laboratory</h1>

        <p className="text-gray-300 mb-4">
          You descend into the alchemist&apos;s laboratory. Bubbling potions line the shelves,
          and scattered notes cover every surface. A large table in the center holds
          an ingredients log and various experimental apparatus.
        </p>

        <p className="text-gray-300 mb-8">
          To brew the escape potion, you&apos;ll need to find the secret formula hidden
          somewhere in this laboratory. The ingredients are organized in a table,
          but the real formula is hidden elsewhere...
        </p>

        {/* Visible data table */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">Ingredients Log</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-gray-900 rounded-lg">
              <caption className="text-sm text-gray-400 mb-2">Recorded potion ingredients and their properties</caption>
              <thead>
                <tr className="border-b border-gray-600">
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">Ingredient</th>
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">Quantity</th>
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">Effect</th>
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">Container</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ing, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <th scope="row" className="py-3 px-4 font-normal text-gray-300">{ing.name}</th>
                    <td className="py-3 px-4 text-gray-300">{ing.quantity}</td>
                    <td className="py-3 px-4 text-gray-300">{ing.effect}</td>
                    <td className="py-3 px-4 text-gray-300">{ing.container}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visible decoy form */}
        <div className="mb-8">
          <h2 className="text-2xl font-henny text-gray-400 mb-4">Experiment Log</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="alchemist-name" className="block text-white font-semibold mb-1">Name of Alchemist</label>
                <input type="text" id="alchemist-name" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none" placeholder="Enter name..." />
              </div>
              <div>
                <label htmlFor="potion-name" className="block text-white font-semibold mb-1">Potion Name</label>
                <input type="text" id="potion-name" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none" placeholder="Name your creation..." />
              </div>
              <div>
                <label htmlFor="experiment-notes" className="block text-white font-semibold mb-1">Experiment Notes</label>
                <textarea id="experiment-notes" rows={3} className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none resize-y" placeholder="Record your observations..." />
              </div>
              <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                Save Entry
              </button>
            </form>
          </div>
        </div>

        {/* Hidden form - the REAL solution */}
        <div className="sr-only">
          <h2>You found the hidden formula!</h2>
          <p>Tucked beneath the ingredients table, you discover a hidden compartment containing the secret escape formula. Enter any ingredient to complete the potion and escape the laboratory.</p>
          <form onSubmit={handleSecretSubmit}>
            <label htmlFor="secret-ingredient">Enter the secret ingredient to complete the potion:</label>
            <input
              type="text"
              id="secret-ingredient"
              value={secretIngredient}
              onChange={(e) => setSecretIngredient(e.target.value)}
            />
            <button type="submit">Brew the Escape Potion</button>
          </form>
        </div>

        {/* Visual hint */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle requires screen reader form and table navigation to find hidden elements.
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={5}
        puzzleTitle="The Alchemist's Laboratory"
        description={
          <>
            You&apos;ve mastered <strong>form and table navigation</strong>! You used the{" "}
            <kbd>T</kbd> key (NVDA) or <kbd>VO+Cmd+T</kbd> (VoiceOver) to find tables,
            and the <kbd>F</kbd> key (NVDA) or <kbd>VO+Cmd+J</kbd> (VoiceOver) to discover
            hidden form fields.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Ingredients are organized in rows and columns. Navigate the structure, not just the content.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>T</kbd> to find tables, then use <kbd>Ctrl+Alt+Arrow keys</kbd> to navigate cells. Press <kbd>F</kbd> to find form fields.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+Cmd+T</kbd> for tables, <kbd>VO+Arrow keys</kbd> for cells. Press <kbd>VO+Cmd+J</kbd> for form fields.
            </p>
          </>
        }
      />
    </main>
  );
}
