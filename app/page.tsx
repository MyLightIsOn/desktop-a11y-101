import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-henny mb-6 text-spooky-purple">
          Mystery House
        </h1>
        <h2 className="text-2xl mb-4 text-gray-300">Desktop Edition</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Learn screen reader navigation through 5 progressive lessons and 6 spooky puzzles.
          Master NVDA (Windows) and VoiceOver (Mac) keyboard skills to escape the haunted house.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/getting-started"
            className="bg-spooky-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Getting Started
          </Link>
          <Link
            href="/lessons"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Lessons
          </Link>
          <Link
            href="/start"
            className="bg-spooky-green hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Start Puzzles
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p className="mb-2">🎧 Screen reader required</p>
          <p>⌨️ Keyboard only - no mouse needed (except for hints)</p>
        </div>
      </div>
    </main>
  );
}
