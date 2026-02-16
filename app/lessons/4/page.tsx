"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson4Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-center mb-8 text-spooky-purple">
          Lesson 4: Quick Navigation
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Quick Navigation Video Coming Soon</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Navigating Faster
          </h2>
          <p className="text-gray-300 mb-4">
            Reading every element on a page one by one would take forever. Quick
            navigation lets you skip directly to the parts of a page that matter.
            There are three key techniques to master.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Tab Key
          </h3>
          <p className="text-gray-300 mb-4">
            The Tab key jumps between interactive elements: links, buttons, form
            fields, and anything else you can activate or type into. This skips
            over all the static text in between. Use Shift+Tab to move backward.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Landmark Navigation
          </h3>
          <p className="text-gray-300 mb-4">
            Web pages are divided into regions called landmarks: navigation bars,
            main content areas, sidebars, and footers. Screen readers can jump
            directly between these regions, letting you skip large sections of
            content at once.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Element Lists
          </h3>
          <p className="text-gray-300 mb-4">
            Both NVDA and VoiceOver can show you a list of all elements of a
            certain type on the page: all headings, all links, all landmarks, or
            all form fields. This gives you a bird&apos;s-eye view of the page
            structure and lets you jump directly to any element.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Quick Navigation Shortcuts
          </h2>

          <KeyboardShortcuts
            description="Jump to next landmark"
            nvdaShortcut="D"
            voShortcut="VO+Cmd+L"
          />
          <KeyboardShortcuts
            description="Jump to previous landmark"
            nvdaShortcut="Shift+D"
          />
          <KeyboardShortcuts
            description="Open element list / rotor"
            nvdaShortcut="Insert+F7"
            voShortcut="VO+U"
          />
          <KeyboardShortcuts
            description="Jump to next link"
            nvdaShortcut="K"
            voShortcut="VO+Cmd+L"
          />
          <KeyboardShortcuts
            description="Jump to next interactive element"
            nvdaShortcut="Tab"
            voShortcut="Tab"
          />
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Area
          </h2>
          <p className="text-gray-400 italic mb-6">
            The area below contains multiple landmarks with links and content.
            Try using D to jump between landmarks, K to jump between links, Tab
            to move through interactive elements, and the element list
            (Insert+F7 or VO+U) to see everything at once.
          </p>

          <nav aria-label="Practice Navigation" className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Practice Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  The Front Door
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  The Back Entrance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  The Secret Passage
                </a>
              </li>
            </ul>
          </nav>

          <div role="main" aria-label="Main Content Area" className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Main Hall
            </h3>
            <p className="text-gray-300 mb-4">
              The main hall stretches before you, its vaulted ceiling lost in
              shadow. Doors lead off in every direction, each one promising a
              different mystery. The floor is covered in a faded carpet that was
              once grand but is now threadbare and stained.
            </p>
            <p className="text-gray-300 mb-4">
              Explore the rooms using these passages:
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Enter the Drawing Room
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Descend to the Cellar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Climb to the Tower
                </a>
              </li>
            </ul>
          </div>

          <aside aria-label="Side Notes" className="bg-gray-800 border border-gray-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Side Notes
            </h3>
            <p className="text-gray-300 mb-4">
              Strange notes have been found scattered throughout the house. Their
              author is unknown, but they seem to be warnings left by a previous
              visitor.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Read the torn letter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Examine the faded map
                </a>
              </li>
            </ul>
          </aside>
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
