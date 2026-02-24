"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson2() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-spooky-purple mb-6">Lesson 2: Heading Navigation</h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Heading Navigation Video Coming Soon</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Why Headings Matter</h2>
          <div className="text-gray-300 space-y-3">
            <p>Headings create the structure of a web page — think of them like a table of contents. Screen reader users rely on headings to quickly find the content they need instead of reading every word on the page.</p>
            <p>HTML has 6 heading levels: <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">H1</kbd> through <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">H6</kbd>. H1 is the most important (usually the page title), and each subsequent level represents a sub-section.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Heading Shortcuts</h2>
          <div className="space-y-2">
            <KeyboardShortcuts description="Jump to next heading" nvdaShortcut="H" voShortcut="VO+Cmd+H" />
            <KeyboardShortcuts description="Jump to previous heading" nvdaShortcut="Shift+H" voShortcut="VO+Cmd+Shift+H" />
            <KeyboardShortcuts description="Jump to next heading level 1 (1-6 work similarly)" nvdaShortcut="1" voShortcut="VO+Cmd+1" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Area</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
            <p className="text-sm text-gray-400 italic">Use heading navigation (H key or VO+Cmd+H) to jump between the headings below. Try Shift+H to go backwards.</p>

            <h3 className="text-xl font-semibold text-white mt-4">The Ground Floor</h3>
            <p>The ground floor of the old house is dimly lit by flickering candles. Shadows dance across the walls as you make your way through the entrance.</p>

            <h4 className="text-lg font-semibold text-gray-200 mt-3">The Kitchen</h4>
            <p>Pots and pans hang from rusty hooks. Something bubbles on the ancient stove, though no one has cooked here in years. A faint smell of herbs fills the air.</p>

            <h4 className="text-lg font-semibold text-gray-200 mt-3">The Dining Room</h4>
            <p>A long table stretches across the room, set for a dinner party that never happened. Dust-covered plates and tarnished silverware sit waiting for guests who will never arrive.</p>

            <h3 className="text-xl font-semibold text-white mt-4">The Upper Floor</h3>
            <p>The staircase groans under your weight as you climb to the second floor. The hallway stretches in both directions, doors lining each side.</p>

            <h4 className="text-lg font-semibold text-gray-200 mt-3">The Master Bedroom</h4>
            <p>A four-poster bed dominates the room, its curtains moth-eaten and gray. A music box on the nightstand plays a tune you almost recognize.</p>

            <h4 className="text-lg font-semibold text-gray-200 mt-3">The Study</h4>
            <p>Bookshelves line every wall, filled with leather-bound volumes. A desk sits by the window, covered in papers scrawled with strange symbols.</p>

            <h3 className="text-xl font-semibold text-white mt-4">The Basement</h3>
            <p>Stone steps lead down into darkness. The air is cold and damp. You can hear water dripping somewhere in the distance, echoing off the ancient walls.</p>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="/lessons" className="text-spooky-purple hover:text-purple-400 underline transition-colors">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    </main>
  );
}
