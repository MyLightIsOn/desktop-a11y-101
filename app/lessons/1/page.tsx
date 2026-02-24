"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson1() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-spooky-purple mb-6">Lesson 1: Screen Reader Basics</h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Screen Reader Basics Video Coming Soon</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Starting Your Screen Reader</h2>
          <div className="text-gray-300 space-y-3">
            <p><strong>NVDA (Windows):</strong> Download free from <a href="https://www.nvaccess.org" className="text-spooky-purple hover:text-purple-400 underline" target="_blank" rel="noopener noreferrer">nvaccess.org</a>. Once installed, press <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Ctrl+Alt+N</kbd> to start NVDA.</p>
            <p><strong>VoiceOver (Mac):</strong> Press <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Cmd+F5</kbd> to toggle VoiceOver on or off. It&apos;s built into every Mac.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Essential Shortcuts</h2>
          <div className="space-y-2">
            <KeyboardShortcuts description="Read next line" nvdaShortcut="Down Arrow" voShortcut="VO+Down Arrow" />
            <KeyboardShortcuts description="Read previous line" nvdaShortcut="Up Arrow" voShortcut="VO+Up Arrow" />
            <KeyboardShortcuts description="Read all from current position" nvdaShortcut="Insert+Down Arrow" voShortcut="VO+A" />
            <KeyboardShortcuts description="Stop speech" nvdaShortcut="Ctrl" voShortcut="Ctrl" />
            <KeyboardShortcuts description="Move to next item" nvdaShortcut="Down Arrow" voShortcut="VO+Right Arrow" />
            <KeyboardShortcuts description="Move to previous item" nvdaShortcut="Up Arrow" voShortcut="VO+Left Arrow" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Area</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
            <p className="text-sm text-gray-400 italic">Try reading through the text below using your screen reader. Practice reading line by line, then try &quot;Read All&quot; to hear everything at once.</p>
            <p>The old house stood at the end of the lane, its windows dark and shuttered. No one had lived there for years, but the neighbors swore they could hear music playing on quiet nights.</p>
            <p>The front door creaked as it swung open, revealing a dusty hallway lined with faded portraits. Each face in the paintings seemed to follow you with their eyes as you walked past.</p>
            <p>A grandfather clock at the end of the hall ticked steadily, though no one had wound it in decades. Its pendulum swung back and forth in the darkness, counting time that no one cared to keep.</p>
            <p>From somewhere deep within the house, you could hear the faint sound of footsteps. They moved slowly, deliberately, as if someone — or something — was making their way toward you.</p>
            <p>The air grew cold. A whisper echoed through the hallway: &quot;Welcome to Mystery House.&quot;</p>
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
