import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-henny text-center mb-4 text-spooky-purple">
          Getting Started
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Mystery House Desktop Edition teaches screen reader navigation through
          interactive lessons and spooky puzzles. Before you begin, you&apos;ll
          need a screen reader set up on your computer. Follow the instructions
          below for your operating system.
        </p>

        {/* NVDA Setup Section */}
        <section aria-labelledby="nvda-setup" className="mb-12">
          <h2
            id="nvda-setup"
            className="text-3xl font-henny text-spooky-green mb-4"
          >
            NVDA Setup (Windows)
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Download and Install
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Visit{" "}
                <a
                  href="https://www.nvaccess.org/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spooky-purple hover:text-purple-400 underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  nvaccess.org
                </a>{" "}
                to download NVDA (free and open source).
              </li>
              <li>Run the installer and follow the setup wizard.</li>
              <li>
                Launch NVDA from the Start menu or desktop shortcut. You will
                hear a welcome message when it starts.
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>NVDA Key (Insert):</strong> The Insert key is your NVDA
                modifier key. Many NVDA commands start with pressing Insert plus
                another key.
              </li>
              <li>
                <strong>Browse Mode:</strong> When you open a web page, NVDA
                enters browse mode. You can use single-letter keys like{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  H
                </kbd>{" "}
                for headings,{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  D
                </kbd>{" "}
                for landmarks, and{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  K
                </kbd>{" "}
                for links.
              </li>
              <li>
                <strong>Focus Mode:</strong> When you interact with a form field
                or button, NVDA switches to focus mode. Press{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  Escape
                </kbd>{" "}
                to return to browse mode.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Recommended Browser
            </h3>
            <p className="text-gray-300">
              Use <strong>Firefox</strong> with NVDA for the best experience.
              NVDA works best with Firefox&apos;s accessibility APIs.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-4">
            <p>NVDA Setup Video Coming Soon</p>
          </div>
        </section>

        {/* VoiceOver Setup Section */}
        <section aria-labelledby="voiceover-setup" className="mb-12">
          <h2
            id="voiceover-setup"
            className="text-3xl font-henny text-spooky-green mb-4"
          >
            VoiceOver Setup (Mac)
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Enable VoiceOver</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Press{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  Cmd+F5
                </kbd>{" "}
                to toggle VoiceOver on or off.
              </li>
              <li>
                Alternatively, go to{" "}
                <strong>System Settings &gt; Accessibility &gt; VoiceOver</strong>{" "}
                and enable it.
              </li>
              <li>
                You will hear VoiceOver announce itself when it starts.
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>VO Keys (Control+Option):</strong> Most VoiceOver
                commands use Control+Option as the modifier, often abbreviated
                as{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  VO
                </kbd>
                .
              </li>
              <li>
                <strong>VO Cursor:</strong> VoiceOver has its own cursor that
                moves independently of the keyboard focus. Use{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  VO+Right Arrow
                </kbd>{" "}
                and{" "}
                <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                  VO+Left Arrow
                </kbd>{" "}
                to move through content.
              </li>
              <li>
                <strong>Rotor (VO+U):</strong> The rotor is a powerful tool that
                lets you browse lists of headings, links, landmarks, and other
                elements on the page. Use the left and right arrow keys to
                switch categories.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Recommended Browser
            </h3>
            <p className="text-gray-300">
              Use <strong>Safari</strong> with VoiceOver for the best
              experience. Safari has the deepest integration with
              VoiceOver&apos;s accessibility features.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-4">
            <p>VoiceOver Setup Video Coming Soon</p>
          </div>
        </section>

        {/* Browser Recommendations */}
        <section aria-labelledby="browser-recommendations" className="mb-12">
          <h2
            id="browser-recommendations"
            className="text-3xl font-henny text-spooky-green mb-4"
          >
            Browser Recommendations
          </h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Windows:</strong> Firefox with NVDA
              </li>
              <li>
                <strong>Mac:</strong> Safari with VoiceOver
              </li>
              <li>
                Chrome works with both screen readers but may have minor
                inconsistencies.
              </li>
              <li>
                Avoid using Edge or other browsers, as they have not been tested
                with this game.
              </li>
            </ul>
          </div>
        </section>

        {/* How to Play */}
        <section aria-labelledby="how-to-play" className="mb-12">
          <h2
            id="how-to-play"
            className="text-3xl font-henny text-spooky-green mb-4"
          >
            How to Play
          </h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <strong>Lessons first:</strong> Start with the 5 progressive
                lessons. Each one teaches a specific screen reader navigation
                skill with practice exercises.
              </li>
              <li>
                <strong>Then try the puzzles:</strong> Each of the 6 puzzle rooms
                tests the skills you learned. The solution is hidden from
                visual users and can only be found using screen reader
                navigation.
              </li>
              <li>
                <strong>Ghost helper:</strong> If you get stuck, look for the
                ghost icon in the bottom-right corner. It is the only
                mouse-clickable element in the game and provides hints.
              </li>
              <li>
                <strong>Don&apos;t trust your eyes:</strong> The puzzles are
                designed so that looking at the screen will not help. You must
                rely entirely on what your screen reader tells you. This is the
                core principle of the game.
              </li>
              <li>
                <strong>Keyboard only:</strong> Navigate using only your
                keyboard. No mouse is needed (except for the ghost helper hint
                button).
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Reference Table */}
        <section aria-labelledby="quick-reference" className="mb-12">
          <h2
            id="quick-reference"
            className="text-3xl font-henny text-spooky-green mb-4"
          >
            Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-900 rounded-lg overflow-hidden">
              <caption className="sr-only">
                Keyboard shortcuts for NVDA and VoiceOver screen readers
              </caption>
              <thead>
                <tr className="bg-gray-800">
                  <th
                    scope="col"
                    className="text-left px-4 py-3 font-semibold text-spooky-purple"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="text-left px-4 py-3 font-semibold text-spooky-purple"
                  >
                    NVDA (Windows)
                  </th>
                  <th
                    scope="col"
                    className="text-left px-4 py-3 font-semibold text-spooky-purple"
                  >
                    VoiceOver (Mac)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-gray-300">Next heading</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      H
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+Cmd+H
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Next landmark</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      D
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+Cmd+L
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Element list</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      Insert+F7
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+U
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Next link</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      K
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+Cmd+L
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Next form field</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      F
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+Cmd+J
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Next table</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      T
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+Cmd+T
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Read all</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      Insert+Down
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      VO+A
                    </kbd>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Stop speech</td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      Ctrl
                    </kbd>
                  </td>
                  <td className="px-4 py-3">
                    <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-sm">
                      Ctrl
                    </kbd>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <nav aria-label="Page navigation" className="text-center space-x-6">
          <Link
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Back to Home
          </Link>
          <Link
            href="/lessons"
            className="bg-spooky-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Start Lessons
          </Link>
        </nav>
      </div>
    </main>
  );
}
