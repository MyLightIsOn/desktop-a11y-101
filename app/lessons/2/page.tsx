"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson2Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-center mb-8 text-spooky-purple">
          Lesson 2: Heading Navigation
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Heading Navigation Video Coming Soon</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Why Headings Matter
          </h2>
          <p className="text-gray-300 mb-4">
            Headings (H1 through H6) create a hierarchy that screen reader users
            rely on to understand and navigate page structure. Think of headings
            like a table of contents: H1 is the page title, H2s are major
            sections, H3s are subsections, and so on.
          </p>
          <p className="text-gray-300 mb-4">
            Sighted users can scan a page visually to find the section they want.
            Screen reader users do the same thing by jumping between headings.
            This is one of the most common and powerful navigation techniques.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Heading Shortcuts
          </h2>

          <KeyboardShortcuts
            description="Jump to next heading"
            nvdaShortcut="H"
            voShortcut="VO+Cmd+H"
          />
          <KeyboardShortcuts
            description="Jump to previous heading"
            nvdaShortcut="Shift+H"
            voShortcut="VO+Cmd+Shift+H"
          />
          <KeyboardShortcuts
            description="Jump to next heading level 1 (1-6 work similarly)"
            nvdaShortcut="1"
            voShortcut="VO+Cmd+1"
          />
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Area
          </h2>
          <p className="text-gray-400 italic mb-6">
            Use your screen reader&apos;s heading navigation to jump between the
            headings below. Try pressing H to move forward, Shift+H to move
            backward, and number keys (1-4) to jump to specific heading levels.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            The Ground Floor
          </h3>
          <p className="text-gray-300 mb-6">
            The ground floor is shrouded in dust and silence. Faded portraits
            line the hallway, their subjects watching you with hollow eyes. The
            air is thick with the smell of old wood and something else, something
            you cannot quite name.
          </p>

          <h4 className="text-lg font-semibold mb-2 text-gray-200">
            The Kitchen
          </h4>
          <p className="text-gray-300 mb-6">
            Rusted pots hang from hooks above a cold stove. The pantry door
            swings open on its own, revealing shelves of jars filled with
            unidentifiable substances. A single chair sits at the table, pulled
            back as if someone just stood up.
          </p>

          <h4 className="text-lg font-semibold mb-2 text-gray-200">
            The Dining Room
          </h4>
          <p className="text-gray-300 mb-6">
            A long table stretches across the room, set for a feast that never
            came. Candelabras stand unlit at each end, their wax dripped into
            pale stalactites. The chandelier overhead sways gently, though there
            is no breeze.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            The Upper Floor
          </h3>
          <p className="text-gray-300 mb-6">
            The staircase groans with each step as you ascend. The wallpaper up
            here is darker, stained by time and something that might be water,
            or might be something worse. Doors line both sides of the corridor.
          </p>

          <h4 className="text-lg font-semibold mb-2 text-gray-200">
            The Master Bedroom
          </h4>
          <p className="text-gray-300 mb-6">
            A four-poster bed dominates the room, its curtains drawn. The
            vanity mirror is cracked in a pattern that almost looks like a face.
            A music box on the nightstand plays a tune you almost recognize, but
            it is slightly wrong.
          </p>

          <h4 className="text-lg font-semibold mb-2 text-gray-200">
            The Study
          </h4>
          <p className="text-gray-300 mb-6">
            Books are scattered across the desk and floor, their pages open to
            passages about things best left unread. A typewriter sits on the
            desk, and as you lean close, you notice a single word typed
            repeatedly across the page: &quot;LISTEN.&quot;
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            The Basement
          </h3>
          <p className="text-gray-300 mb-6">
            Below the house lies the basement, where the darkness is absolute.
            The stone walls are damp to the touch, and your footsteps echo in
            ways that suggest the space is far larger than it should be. Something
            scratches in the far corner, just beyond the reach of your
            understanding.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/lessons"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            &larr; Back to Lessons
          </Link>
        </div>
      </div>
    </main>
  );
}
