"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson4() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-spooky-purple mb-6">Lesson 4: Quick Navigation</h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Quick Navigation Video Coming Soon</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Navigate Faster</h2>
          <div className="text-gray-300 space-y-3">
            <p>Web pages are organized into regions called <strong>landmarks</strong> — areas like navigation, main content, and sidebars. Screen readers can jump directly between these regions.</p>
            <p><strong>Tab</strong> moves between interactive elements (links, buttons, form fields) — useful when you want to skip past text and find something clickable.</p>
            <p><strong>Element lists</strong> let you see all elements of a certain type at once — all headings, all links, all landmarks — so you can jump directly to what you need.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Navigation Shortcuts</h2>
          <div className="space-y-2">
            <KeyboardShortcuts description="Jump to next landmark" nvdaShortcut="D" voShortcut="VO+Cmd+L" />
            <KeyboardShortcuts description="Jump to previous landmark" nvdaShortcut="Shift+D" />
            <KeyboardShortcuts description="Open element list / rotor" nvdaShortcut="Insert+F7" voShortcut="VO+U" />
            <KeyboardShortcuts description="Jump to next link" nvdaShortcut="K" voShortcut="VO+Cmd+L" />
            <KeyboardShortcuts description="Jump to next interactive element" nvdaShortcut="Tab" voShortcut="Tab" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Area</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 italic">This area contains multiple landmarks. Try using D key (NVDA) or VO+U &gt; Landmarks (VoiceOver) to jump between them.</p>

            <nav aria-label="Practice Navigation" className="border border-gray-600 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Navigation Area</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Hall of Mirrors</a></li>
                <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>The Clock Tower</a></li>
                <li><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>The Wine Cellar</a></li>
              </ul>
            </nav>

            <div role="region" aria-label="Main Content Area" className="border border-gray-600 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Main Content</h3>
              <p>The main hall stretches before you, its marble floor cracked and stained with age. Portraits of the house&apos;s former residents watch from gilded frames.</p>
              <p className="mt-2"><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Examine the portraits</a></p>
              <p className="mt-2"><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Check the fireplace</a></p>
            </div>

            <aside aria-label="Side Notes" className="border border-gray-600 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Side Notes</h3>
              <p>A torn page from a journal lies on the floor. It reads: &quot;The house remembers everyone who enters. It never forgets.&quot;</p>
              <p className="mt-2"><a href="#" className="text-spooky-purple hover:text-purple-400 underline" onClick={(e) => e.preventDefault()}>Pick up the journal page</a></p>
            </aside>
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
