"use client";

import { useEffect, useState } from "react";
import PuzzleLink from "@/components/puzzle-link";

export default function StartPage() {
  const [puzzle6Unlocked, setPuzzle6Unlocked] = useState(false);

  useEffect(() => {
    // Check if puzzles 1-5 are complete
    const checkUnlocked = () => {
      try {
        for (let i = 1; i <= 5; i++) {
          if (localStorage.getItem(`puzzle_${i}_complete`) !== "true") {
            return false;
          }
        }
        return true;
      } catch (e) {
        // If localStorage fails, show as locked (safe default)
        return false;
      }
    };

    setPuzzle6Unlocked(checkUnlocked());
  }, []);

  const puzzles = [
    {
      number: 1,
      title: "The Dusty Attic",
      description: "Master heading navigation through a dark attic filled with old trunks and cobwebs.",
      href: "/puzzle/1",
    },
    {
      number: 2,
      title: "The Mysterious Library",
      description: "Learn browse vs focus mode in an ancient library with enchanted books.",
      href: "/puzzle/2",
    },
    {
      number: 3,
      title: "The Winding Corridors",
      description: "Navigate landmarks in maze-like hallways with multiple rooms.",
      href: "/puzzle/3",
    },
    {
      number: 4,
      title: "The Grand Foyer",
      description: "Use element lists in an ornate entrance hall with many doors.",
      href: "/puzzle/4",
    },
    {
      number: 5,
      title: "The Alchemist's Laboratory",
      description: "Navigate forms and tables in a dark laboratory with bubbling potions.",
      href: "/puzzle/5",
    },
    {
      number: 6,
      title: "The Haunted Ballroom",
      description: "Final challenge combining all learned skills in a grand ballroom with dancing ghosts.",
      href: "/puzzle/6",
      locked: !puzzle6Unlocked,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-henny text-center mb-4">Mystery House</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Choose a room to explore. Each puzzle teaches a different screen reader skill.
          Complete puzzles 1-5 to unlock the final challenge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {puzzles.map((puzzle) => (
            <PuzzleLink
              key={puzzle.number}
              puzzleNumber={puzzle.number}
              title={puzzle.title}
              description={puzzle.description}
              href={puzzle.href}
              locked={puzzle.locked}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
