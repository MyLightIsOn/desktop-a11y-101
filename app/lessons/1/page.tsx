"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson1Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-center mb-8 text-spooky-purple">
          Lesson 1: Screen Reader Basics
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Screen Reader Basics Video Coming Soon</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Starting Your Screen Reader
          </h2>
          <p className="text-gray-300 mb-4">
            Before you can explore the haunted house, you need to awaken your
            screen reader. Think of it as lighting a candle in the darkness.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>
              <strong>NVDA (Windows):</strong> Download for free from{" "}
              <a
                href="https://www.nvaccess.org"
                className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                nvaccess.org
              </a>
              . Once installed, press the <kbd className="inline-block px-2 py-1 border-2 border-spooky-purple rounded bg-gray-900 text-white font-mono text-sm">Insert</kbd> key
              or launch NVDA from the Start Menu.
            </li>
            <li>
              <strong>VoiceOver (Mac):</strong> Already built in. Press{" "}
              <kbd className="inline-block px-2 py-1 border-2 border-spooky-purple rounded bg-gray-900 text-white font-mono text-sm">Cmd</kbd>
              {" + "}
              <kbd className="inline-block px-2 py-1 border-2 border-spooky-purple rounded bg-gray-900 text-white font-mono text-sm">F5</kbd>
              {" "}to toggle it on and off.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Essential Shortcuts
          </h2>

          <KeyboardShortcuts
            description="Read next line"
            nvdaShortcut="Down Arrow"
            voShortcut="VO+Down Arrow"
          />
          <KeyboardShortcuts
            description="Read all from current position"
            nvdaShortcut="Insert+Down Arrow"
            voShortcut="VO+A"
          />
          <KeyboardShortcuts
            description="Stop speech"
            nvdaShortcut="Ctrl"
            voShortcut="Ctrl"
          />
          <KeyboardShortcuts
            description="Move to next item"
            nvdaShortcut="Down Arrow"
            voShortcut="VO+Right Arrow"
          />
          <KeyboardShortcuts
            description="Move to previous item"
            nvdaShortcut="Up Arrow"
            voShortcut="VO+Left Arrow"
          />
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Area
          </h2>
          <p className="text-gray-400 italic mb-6">
            Try reading through the text below using your screen reader. Practice
            reading line by line, then try &quot;Read All&quot; to hear continuous reading.
            Press Ctrl to stop speech at any time.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              The old house stands at the end of Hollow Lane, its windows dark
              and lifeless like the eyes of a sleeping beast. No one in the
              village remembers who built it, only that it has always been there,
              waiting.
            </p>
            <p>
              As you approach the front door, the hinges creak in protest. A cold
              draft spills out from within, carrying the faint scent of dust and
              forgotten memories. The floorboards groan beneath your feet as you
              step inside.
            </p>
            <p>
              The entrance hall stretches before you, cloaked in shadow. A grand
              staircase spirals upward into darkness, and from somewhere deep
              within the house, you hear the faint ticking of a clock that should
              have stopped decades ago.
            </p>
            <p>
              Cobwebs hang from the chandelier like tattered curtains. The
              wallpaper peels in long strips, revealing older layers beneath,
              each one a different shade of decay. A portrait on the wall watches
              you with eyes that seem to follow your every move.
            </p>
            <p>
              You are not alone in this house. But to find what lurks in the
              shadows, you must learn to listen. Your screen reader is your
              guide, your candle in the dark. Trust your ears, not your eyes.
            </p>
          </div>
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
