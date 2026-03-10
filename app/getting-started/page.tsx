import Link from "next/link";

export default function GettingStartedPage() {
  return (
      <main className="relative min-h-screen text-white flex items-center justify-center p-8 max-w-300 mx-auto" style={{ backgroundImage: "url('images/door.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative max-w-3xl text-center">
          <h1 className="text-6xl font-henny mb-6 text-spooky-purple spooky-font">
            Welcome
          </h1>
          <div className="flex flex-col gap-4 justify-center mb-12">
            <Link
                href="/getting-started"
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Practice
            </Link>
            <Link
                href="/getting-started"
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Enter
            </Link>
          </div>

          <div className="text-sm text-gray-100">
            <p className="mb-2">🎧 Screen reader required</p>
            <p>⌨️ Keyboard only - no mouse needed (except for hints)</p>
          </div>
        </div>
      </main>
  );
}
