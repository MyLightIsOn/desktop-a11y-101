"use client";

import Link from "next/link";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson5Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-center mb-8 text-spooky-purple">
          Lesson 5: Forms and Tables
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
          <p>🎬 Forms and Tables Video Coming Soon</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Navigating Forms
          </h2>
          <p className="text-gray-300 mb-4">
            Forms are everywhere on the web: login pages, search bars, contact
            forms. Screen readers let you jump directly to form fields and move
            between them efficiently. When you enter a form field, your screen
            reader switches to focus mode so you can type.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">
            Table Navigation
          </h3>
          <p className="text-gray-300 mb-4">
            Tables present data in rows and columns. Screen readers can navigate
            tables cell by cell, and they announce the column and row headers as
            you move. This makes it possible to understand structured data
            without seeing it. Properly marked-up tables with header cells are
            essential for this to work.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Form and Table Shortcuts
          </h2>

          <KeyboardShortcuts
            description="Jump to next form field"
            nvdaShortcut="F"
            voShortcut="VO+Cmd+J"
          />
          <KeyboardShortcuts
            description="Jump to next table"
            nvdaShortcut="T"
            voShortcut="VO+Cmd+T"
          />
          <KeyboardShortcuts
            description="Move to next table cell"
            nvdaShortcut="Ctrl+Alt+Right Arrow"
            voShortcut="VO+Right Arrow"
          />
          <KeyboardShortcuts
            description="Move to next table row"
            nvdaShortcut="Ctrl+Alt+Down Arrow"
            voShortcut="VO+Down Arrow"
          />
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Form
          </h2>
          <p className="text-gray-400 italic mb-6">
            Use F to jump between form fields, or Tab to move through them. Try
            filling out the form using only your keyboard and screen reader.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 max-w-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="favorite-room"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Favorite Room
              </label>
              <select
                id="favorite-room"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-transparent"
              >
                <option value="">Select a room</option>
                <option value="attic">Attic</option>
                <option value="library">Library</option>
                <option value="corridors">Corridors</option>
                <option value="foyer">Foyer</option>
                <option value="laboratory">Laboratory</option>
                <option value="ballroom">Ballroom</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="comments"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Comments
              </label>
              <textarea
                id="comments"
                rows={4}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-transparent"
                placeholder="Share your thoughts about the haunted house..."
              />
            </div>

            <button
              type="submit"
              className="bg-spooky-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-spooky-green">
            Practice Table
          </h2>
          <p className="text-gray-400 italic mb-6">
            Use T to jump to this table, then navigate cell by cell using
            Ctrl+Alt+Arrow keys (NVDA) or VO+Arrow keys (VoiceOver). Notice how
            your screen reader announces the column headers as you move.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="text-gray-400 mb-3 text-left font-semibold">
                Haunted Room Inventory
              </caption>
              <thead>
                <tr className="border-b border-gray-600">
                  <th
                    scope="col"
                    className="text-left py-3 px-4 text-spooky-green font-semibold"
                  >
                    Room
                  </th>
                  <th
                    scope="col"
                    className="text-left py-3 px-4 text-spooky-green font-semibold"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="text-left py-3 px-4 text-spooky-green font-semibold"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-left py-3 px-4 text-spooky-green font-semibold"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <th
                    scope="row"
                    className="text-left py-3 px-4 text-gray-300 font-medium"
                  >
                    Attic
                  </th>
                  <td className="py-3 px-4 text-gray-300">Dusty Trunk</td>
                  <td className="py-3 px-4 text-gray-300">3</td>
                  <td className="py-3 px-4 text-gray-300">Locked</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th
                    scope="row"
                    className="text-left py-3 px-4 text-gray-300 font-medium"
                  >
                    Library
                  </th>
                  <td className="py-3 px-4 text-gray-300">Enchanted Book</td>
                  <td className="py-3 px-4 text-gray-300">12</td>
                  <td className="py-3 px-4 text-gray-300">Cursed</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th
                    scope="row"
                    className="text-left py-3 px-4 text-gray-300 font-medium"
                  >
                    Foyer
                  </th>
                  <td className="py-3 px-4 text-gray-300">Ornate Mirror</td>
                  <td className="py-3 px-4 text-gray-300">1</td>
                  <td className="py-3 px-4 text-gray-300">Cracked</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th
                    scope="row"
                    className="text-left py-3 px-4 text-gray-300 font-medium"
                  >
                    Laboratory
                  </th>
                  <td className="py-3 px-4 text-gray-300">Bubbling Potion</td>
                  <td className="py-3 px-4 text-gray-300">7</td>
                  <td className="py-3 px-4 text-gray-300">Unstable</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="text-left py-3 px-4 text-gray-300 font-medium"
                  >
                    Ballroom
                  </th>
                  <td className="py-3 px-4 text-gray-300">Phantom Candelabra</td>
                  <td className="py-3 px-4 text-gray-300">5</td>
                  <td className="py-3 px-4 text-gray-300">Flickering</td>
                </tr>
              </tbody>
            </table>
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
