"use client";

import { useState } from "react";
import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson3Page() {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-center mb-8 text-spooky-purple">
          Lesson 3: Browse vs Focus Mode
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Browse vs Focus Mode Video Coming Soon</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Two Ways to Navigate
          </h2>
          <p className="text-gray-300 mb-4">
            Screen readers have two distinct modes for interacting with web
            content. Understanding when each mode is active is essential to
            navigating effectively.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Browse Mode (NVDA) / Web Content Mode (VoiceOver)
          </h3>
          <p className="text-gray-300 mb-4">
            This is the default mode for reading web pages. Arrow keys move
            through the content element by element. Single letter keys work as
            quick navigation shortcuts: H jumps to headings, D to landmarks, T
            to tables, and so on. This is the mode you use to explore and read.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Focus Mode (NVDA) / Form Interaction (VoiceOver)
          </h3>
          <p className="text-gray-300 mb-4">
            When you interact with form fields, buttons, or other controls, the
            screen reader switches to focus mode. In this mode, keystrokes go
            directly to the element instead of being interpreted as screen reader
            commands. Typing in a text field, for example, requires focus mode so
            that pressing &quot;H&quot; types the letter rather than jumping to a heading.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            How to Switch
          </h3>
          <p className="text-gray-300 mb-4">
            NVDA automatically switches modes when you Tab into a form field and
            back when you leave. You can also manually toggle with Insert+Space.
            VoiceOver uses VO+Shift+Down Arrow to enter interaction mode and
            VO+Shift+Up Arrow to exit. The Enter key activates links and buttons
            in both modes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Mode Shortcuts
          </h2>

          <KeyboardShortcuts
            description="Toggle browse/focus mode"
            nvdaShortcut="Insert+Space"
            voShortcut="VO+Shift+Down Arrow"
          />
          <KeyboardShortcuts
            description="Return to browse mode"
            nvdaShortcut="Escape"
            voShortcut="VO+Shift+Up Arrow"
          />
          <KeyboardShortcuts
            description="Activate link or button"
            nvdaShortcut="Enter"
            voShortcut="Enter"
          />
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Area
          </h2>
          <p className="text-gray-400 italic mb-6">
            Try reading through this area in browse mode, then interact with the
            button and form field to experience focus mode. Notice how your screen
            reader announces the mode change.
          </p>

          <p className="text-gray-300 mb-6">
            You stand in a narrow corridor between two rooms. The walls are lined
            with flickering torches, and strange symbols are carved into the
            stone floor. To proceed, you must interact with the objects you
            encounter.
          </p>

          <div className="mb-6">
            <a
              href="#"
              className="text-spooky-purple hover:text-purple-400 underline text-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              onClick={(e) => e.preventDefault()}
            >
              Click this mystery link
            </a>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setButtonPressed(!buttonPressed)}
              className="bg-spooky-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-live="polite"
            >
              {buttonPressed
                ? "The ghost has appeared!"
                : "Press this haunted button"}
            </button>
          </div>

          <p className="text-gray-300 mb-6">
            Beyond the button, the corridor continues. You can hear whispers
            echoing off the stone walls. The torches flicker more intensely as
            you move deeper into the passage.
          </p>

          <div className="mb-4">
            <label
              htmlFor="secret-message"
              className="block text-gray-300 mb-2 font-semibold"
            >
              Type a secret message
            </label>
            <input
              id="secret-message"
              type="text"
              className="w-full max-w-md bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-transparent"
              placeholder="Enter your message here..."
            />
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
