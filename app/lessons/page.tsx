import Link from "next/link";

const lessons = [
  { number: 1, title: "Screen Reader Basics", description: "Learn to start your screen reader, read content line by line, and control speech." },
  { number: 2, title: "Heading Navigation", description: "Jump between headings to quickly find content using H key shortcuts." },
  { number: 3, title: "Browse vs Focus Mode", description: "Understand the difference between reading content and interacting with elements." },
  { number: 4, title: "Quick Navigation", description: "Navigate by landmarks, use element lists, and jump between interactive elements." },
  { number: 5, title: "Forms and Tables", description: "Navigate form fields and table cells using screen reader shortcuts." },
];

export default function LessonsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-henny text-spooky-purple mb-4">Lessons</h1>
        <p className="text-gray-300 mb-8">
          Work through these 5 lessons to learn the screen reader skills you&apos;ll need to solve the puzzles.
          Each lesson includes practice areas to try out what you&apos;ve learned.
        </p>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.number}
              href={`/lessons/${lesson.number}`}
              className="block p-6 rounded-lg border bg-gray-900 border-gray-700 hover:border-spooky-purple transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-spooky-green font-semibold">Lesson {lesson.number}</span>
                <h2 className="text-xl font-semibold text-white">{lesson.title}</h2>
              </div>
              <p className="text-gray-300 text-sm">{lesson.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-spooky-purple hover:text-purple-400 underline transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
