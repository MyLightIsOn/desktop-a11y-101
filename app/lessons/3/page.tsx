"use client";

import { useState } from "react";
import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson3() {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-spooky-purple mb-6">Lesson 3: Browse vs Focus Mode</h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Browse vs Focus Mode Video Coming Soon</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Two Ways to Navigate</h2>
          <div className="text-gray-300 space-y-3">
            <p>Screen readers have two main modes for navigating web pages:</p>
            <p><strong>Browse Mode</strong> (NVDA) / <strong>Web Content Mode</strong> (VoiceOver): This is for reading content. You can use arrow keys to move through text and single-letter shortcuts like H, D, and T to jump between elements.</p>
            <p><strong>Focus Mode</strong> (NVDA) / <strong>Form Interaction</strong> (VoiceOver): This is for interacting with forms, buttons, and other controls. Your keystrokes go directly to the element instead of being interpreted as screen reader commands.</p>
            <p>NVDA automatically switches modes when you enter a form field or press Enter on a button. You can also manually toggle with <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Insert+Space</kbd>.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Mode Shortcuts</h2>
          <div className="space-y-2">
            <KeyboardShortcuts description="Toggle browse/focus mode" nvdaShortcut="Insert+Space" voShortcut="VO+Shift+Down Arrow" />
            <KeyboardShortcuts description="Return to browse mode" nvdaShortcut="Escape" voShortcut="VO+Shift+Up Arrow" />
            <KeyboardShortcuts description="Activate a link or button" nvdaShortcut="Enter" voShortcut="Enter" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Area</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
            <p className="text-sm text-gray-400 italic">Try reading through this area in browse mode, then interact with the button and form field to experience focus mode.</p>

            <p>The library&apos;s shelves stretch impossibly high, filled with books that whisper when you pass. Some volumes glow faintly in the darkness.</p>

            <p>
              <a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>
                Click this mystery link
              </a>
              {" "}— try navigating to it and pressing Enter.
            </p>

            <button
              onClick={() => setButtonPressed(!buttonPressed)}
              className="bg-spooky-purple hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {buttonPressed ? "The ghost has appeared! 👻" : "Press this haunted button"}
            </button>

            <p>After pressing the button, notice how your screen reader switches modes. Press Escape (NVDA) or VO+Shift+Up (VoiceOver) to return to browse mode.</p>

            <div>
              <label htmlFor="secret-message" className="block text-white font-semibold mb-2">Type a secret message:</label>
              <input
                type="text"
                id="secret-message"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none"
                placeholder="Enter your message here..."
              />
            </div>

            <p>When you tab into the text field, your screen reader enters focus mode so your keystrokes go into the field instead of being navigation commands.</p>
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
