"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson5() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-spooky-purple mb-6">Lesson 5: Forms and Tables</h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Forms and Tables Video Coming Soon</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Navigating Forms</h2>
          <div className="text-gray-300 space-y-3">
            <p>Forms contain interactive elements like text fields, checkboxes, radio buttons, and dropdown menus. Screen readers can jump between form fields directly.</p>
            <p>When you enter a form field, your screen reader switches to focus mode so your keystrokes go to the field. Press <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Escape</kbd> to return to browse mode.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Navigating Tables</h2>
          <div className="text-gray-300 space-y-3">
            <p>Tables organize data into rows and columns. Screen readers announce row and column headers as you navigate, helping you understand the data in context.</p>
            <p>Use the T key to jump to the next table, then use arrow key combinations to move between cells.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Shortcuts</h2>
          <div className="space-y-2">
            <KeyboardShortcuts description="Jump to next form field" nvdaShortcut="F" voShortcut="VO+Cmd+J" />
            <KeyboardShortcuts description="Jump to next table" nvdaShortcut="T" voShortcut="VO+Cmd+T" />
            <KeyboardShortcuts description="Move to next table cell" nvdaShortcut="Ctrl+Alt+Right Arrow" voShortcut="VO+Right Arrow" />
            <KeyboardShortcuts description="Move to next table row" nvdaShortcut="Ctrl+Alt+Down Arrow" voShortcut="VO+Down Arrow" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Form</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-gray-300">
            <p className="text-sm text-gray-400 italic mb-4">Practice navigating between form fields using F key (NVDA) or VO+Cmd+J (VoiceOver).</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="practice-name" className="block text-white font-semibold mb-1">Name</label>
                <input type="text" id="practice-name" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="practice-email" className="block text-white font-semibold mb-1">Email</label>
                <input type="email" id="practice-email" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="practice-room" className="block text-white font-semibold mb-1">Favorite Room</label>
                <select id="practice-room" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none">
                  <option value="">Select a room...</option>
                  <option value="attic">Attic</option>
                  <option value="library">Library</option>
                  <option value="corridors">Corridors</option>
                  <option value="foyer">Foyer</option>
                  <option value="laboratory">Laboratory</option>
                  <option value="ballroom">Ballroom</option>
                </select>
              </div>
              <div>
                <label htmlFor="practice-comments" className="block text-white font-semibold mb-1">Comments</label>
                <textarea id="practice-comments" rows={3} className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-spooky-purple focus:outline-none resize-y" placeholder="Any comments..." />
              </div>
              <button type="submit" className="bg-spooky-purple hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                Submit (Practice)
              </button>
            </form>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-spooky-green mb-4">Practice Table</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-gray-300">
            <p className="text-sm text-gray-400 italic mb-4">Navigate to the table with T key, then use Ctrl+Alt+Arrow keys (NVDA) or VO+Arrow keys (VoiceOver) to move between cells.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <caption className="text-lg font-semibold text-white mb-3">Haunted Room Inventory</caption>
                <thead>
                  <tr className="border-b border-gray-600">
                    <th scope="col" className="py-2 px-4 text-spooky-purple font-semibold">Room</th>
                    <th scope="col" className="py-2 px-4 text-spooky-purple font-semibold">Item</th>
                    <th scope="col" className="py-2 px-4 text-spooky-purple font-semibold">Quantity</th>
                    <th scope="col" className="py-2 px-4 text-spooky-purple font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <th scope="row" className="py-2 px-4 font-normal">Attic</th>
                    <td className="py-2 px-4">Dusty Trunk</td>
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">Locked</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <th scope="row" className="py-2 px-4 font-normal">Library</th>
                    <td className="py-2 px-4">Enchanted Book</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">Cursed</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <th scope="row" className="py-2 px-4 font-normal">Corridors</th>
                    <td className="py-2 px-4">Flickering Torch</td>
                    <td className="py-2 px-4">7</td>
                    <td className="py-2 px-4">Active</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <th scope="row" className="py-2 px-4 font-normal">Foyer</th>
                    <td className="py-2 px-4">Cracked Mirror</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Haunted</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <th scope="row" className="py-2 px-4 font-normal">Laboratory</th>
                    <td className="py-2 px-4">Bubbling Potion</td>
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">Volatile</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
