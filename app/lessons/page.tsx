import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Screen Reader Basics",
    description:
      "Learn how to turn on your screen reader, read content, and control speech.",
    href: "/lessons/1",
  },
  {
    number: 2,
    title: "Heading Navigation",
    description:
      "Use the H key to jump between headings and understand heading hierarchy.",
    href: "/lessons/2",
  },
  {
    number: 3,
    title: "Browse vs Focus Mode",
    description:
      "Understand the difference between reading mode and interaction mode.",
    href: "/lessons/3",
  },
  {
    number: 4,
    title: "Quick Navigation",
    description:
      "Navigate by landmarks, element lists, and Tab through interactive elements.",
    href: "/lessons/4",
  },
  {
    number: 5,
    title: "Forms and Tables",
    description:
      "Learn to navigate form fields and read data tables with your screen reader.",
    href: "/lessons/5",
  },
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-henny text-center mb-4 text-spooky-purple">
          Lessons
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Work through these 5 lessons to build your screen reader skills before
          tackling the puzzle rooms. Each lesson includes keyboard shortcuts and
          a practice area.
        </p>

        <ul className="space-y-4 mb-12">
          {lessons.map((lesson) => (
            <li key={lesson.number}>
              <Link
                href={lesson.href}
                className="block bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-spooky-purple hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <h2 className="text-xl font-semibold mb-2">
                  <span className="text-spooky-green mr-2">
                    Lesson {lesson.number}:
                  </span>
                  {lesson.title}
                </h2>
                <p className="text-gray-400">{lesson.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
