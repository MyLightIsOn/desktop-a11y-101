import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-henny text-spooky-purple mb-6">Getting Started</h1>

        <p className="text-lg text-gray-300 mb-8">
          Mystery House Desktop Edition teaches screen reader navigation through interactive
          lessons and puzzles. Before you begin, you&apos;ll need to set up a screen reader on your
          computer.
        </p>

        {/* NVDA Setup */}
        <section aria-labelledby="nvda-setup" className="mb-12">
          <h2 id="nvda-setup" className="text-3xl font-henny text-spooky-green mb-4">NVDA Setup (Windows)</h2>

          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
            <p>🎬 NVDA Setup Video Coming Soon</p>
          </div>

          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Download &amp; Install</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Visit <a href="https://www.nvaccess.org/download/" className="text-spooky-purple hover:text-purple-400 underline" target="_blank" rel="noopener noreferrer">nvaccess.org</a> to download NVDA (free)</li>
              <li>Run the installer and follow the prompts</li>
              <li>NVDA will start automatically after installation</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-6">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>NVDA Key:</strong> The <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Insert</kbd> key is your main modifier key</li>
              <li><strong>Browse Mode:</strong> For reading web content — arrow keys move through content, single letter keys (H, D, T) work as shortcuts</li>
              <li><strong>Focus Mode:</strong> For interacting with forms and buttons — keys go to the element instead of being shortcuts</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">Recommended Browser</h3>
            <p>Use <strong>Mozilla Firefox</strong> for the best NVDA experience. NVDA works best with Firefox&apos;s accessibility APIs.</p>
          </div>
        </section>

        {/* VoiceOver Setup */}
        <section aria-labelledby="vo-setup" className="mb-12">
          <h2 id="vo-setup" className="text-3xl font-henny text-spooky-green mb-4">VoiceOver Setup (Mac)</h2>

          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 my-6">
            <p>🎬 VoiceOver Setup Video Coming Soon</p>
          </div>

          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Enable VoiceOver</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Press <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Cmd</kbd> + <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">F5</kbd> to toggle VoiceOver on/off</li>
              <li>Or go to System Settings → Accessibility → VoiceOver</li>
              <li>VoiceOver will begin speaking immediately when enabled</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-6">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>VO Keys:</strong> <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Control</kbd> + <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Option</kbd> is the VoiceOver modifier (abbreviated as VO)</li>
              <li><strong>VO Cursor:</strong> VoiceOver uses its own cursor to navigate the page</li>
              <li><strong>Rotor:</strong> Press <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO</kbd> + <kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">U</kbd> to open the rotor — a powerful menu for navigating by headings, links, landmarks, and more</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">Recommended Browser</h3>
            <p>Use <strong>Safari</strong> for the best VoiceOver experience. Safari has the deepest integration with macOS accessibility features.</p>
          </div>
        </section>

        {/* Browser Recommendations */}
        <section aria-labelledby="browsers" className="mb-12">
          <h2 id="browsers" className="text-3xl font-henny text-spooky-green mb-4">Browser Recommendations</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li><strong>Windows + NVDA:</strong> Mozilla Firefox</li>
            <li><strong>Mac + VoiceOver:</strong> Safari</li>
            <li>Other browsers may work but are not officially tested</li>
          </ul>
        </section>

        {/* How to Play */}
        <section aria-labelledby="how-to-play" className="mb-12">
          <h2 id="how-to-play" className="text-3xl font-henny text-spooky-green mb-4">How to Play</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong>Lessons</strong> teach you specific screen reader navigation skills with guided instructions and practice areas.</p>
            <p><strong>Puzzles</strong> test those skills in themed rooms. Each puzzle can only be solved using the screen reader skill it teaches.</p>
            <p><strong>Ghost Helper</strong> — the floating ghost button in the bottom-right corner is the ONLY mouse-clickable element. Click it for hints when you&apos;re stuck.</p>
            <p className="text-spooky-purple font-semibold text-lg">&quot;Don&apos;t trust your eyes&quot; — puzzle solutions are hidden from visual users and can only be found with a screen reader.</p>
            <p>This game is designed for <strong>keyboard-only</strong> interaction. No mouse needed (except for the ghost helper).</p>
          </div>
        </section>

        {/* Quick Reference */}
        <section aria-labelledby="quick-ref" className="mb-12">
          <h2 id="quick-ref" className="text-3xl font-henny text-spooky-green mb-4">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">Screen reader keyboard shortcuts for NVDA and VoiceOver</caption>
              <thead>
                <tr className="border-b border-gray-700">
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">Action</th>
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">NVDA (Windows)</th>
                  <th scope="col" className="py-3 px-4 text-spooky-purple font-semibold">VoiceOver (Mac)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Next heading</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">H</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+Cmd+H</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Next landmark</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">D</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+Cmd+L</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Element list</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Insert+F7</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+U</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Next link</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">K</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+Cmd+L</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Next form field</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">F</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+Cmd+J</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Next table</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">T</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+Cmd+T</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Read all</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Insert+Down</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">VO+A</kbd></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Stop speech</td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Ctrl</kbd></td>
                  <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-700 rounded text-sm font-mono">Ctrl</kbd></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors text-center"
          >
            ← Back to Home
          </Link>
          <Link
            href="/lessons"
            className="bg-spooky-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black text-center"
          >
            Start Lessons →
          </Link>
        </div>
      </div>
    </main>
  );
}
