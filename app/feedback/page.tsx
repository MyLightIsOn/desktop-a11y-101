"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [experience, setExperience] = useState("");
  const [mostHelpful, setMostHelpful] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [screenReader, setScreenReader] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!experience) newErrors.experience = "Please select an experience rating.";
    if (!screenReader) newErrors.screenReader = "Please select a screen reader.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main id="main-content" className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-henny text-spooky-green mb-6">Thank You!</h1>
          <p className="text-gray-300 mb-8">
            Your feedback helps us improve Mystery House Desktop Edition for future participants.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/" className="text-spooky-purple hover:text-purple-400 underline transition-colors">
              Back to Home
            </Link>
            <Link href="/start" className="text-spooky-purple hover:text-purple-400 underline transition-colors">
              Back to Puzzles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-henny text-spooky-purple mb-4">Feedback</h1>
        <p className="text-gray-300 mb-8">
          We&apos;d love to hear about your experience with Mystery House Desktop Edition.
          Your feedback helps us improve the training for future participants.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Experience Rating */}
          <fieldset>
            <legend className="text-xl font-semibold text-white mb-3">
              Overall Experience <span aria-hidden="true" className="text-red-500">*</span>
              <span className="sr-only">(required)</span>
            </legend>
            {errors.experience && (
              <p role="alert" className="text-red-400 text-sm mb-2">{errors.experience}</p>
            )}
            <div className="space-y-2">
              {["Excellent", "Good", "Fair", "Poor"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-white">
                  <input
                    type="radio"
                    name="experience"
                    value={option.toLowerCase()}
                    checked={experience === option.toLowerCase()}
                    onChange={(e) => { setExperience(e.target.value); setErrors((prev) => { const next = { ...prev }; delete next.experience; return next; }); }}
                    className="w-4 h-4 accent-spooky-purple"
                    aria-required="true"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Most Helpful */}
          <div>
            <label htmlFor="most-helpful" className="block text-xl font-semibold text-white mb-3">
              Most Helpful Lesson or Puzzle
            </label>
            <select
              id="most-helpful"
              value={mostHelpful}
              onChange={(e) => setMostHelpful(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-spooky-purple focus:outline-none"
            >
              <option value="">Select one...</option>
              <optgroup label="Lessons">
                <option value="lesson-1">Lesson 1: Screen Reader Basics</option>
                <option value="lesson-2">Lesson 2: Heading Navigation</option>
                <option value="lesson-3">Lesson 3: Browse vs Focus Mode</option>
                <option value="lesson-4">Lesson 4: Quick Navigation</option>
                <option value="lesson-5">Lesson 5: Forms and Tables</option>
              </optgroup>
              <optgroup label="Puzzles">
                <option value="puzzle-1">Puzzle 1: The Dusty Attic</option>
                <option value="puzzle-2">Puzzle 2: The Mysterious Library</option>
                <option value="puzzle-3">Puzzle 3: The Winding Corridors</option>
                <option value="puzzle-4">Puzzle 4: The Grand Foyer</option>
                <option value="puzzle-5">Puzzle 5: The Alchemist&apos;s Laboratory</option>
                <option value="puzzle-6">Puzzle 6: The Haunted Ballroom</option>
              </optgroup>
            </select>
          </div>

          {/* Suggestions */}
          <div>
            <label htmlFor="suggestions" className="block text-xl font-semibold text-white mb-3">
              Suggestions for Improvement
            </label>
            <textarea
              id="suggestions"
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              rows={4}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-spooky-purple focus:outline-none resize-y"
              placeholder="What could we do better?"
            />
          </div>

          {/* Screen Reader Used */}
          <fieldset>
            <legend className="text-xl font-semibold text-white mb-3">
              Screen Reader Used <span aria-hidden="true" className="text-red-500">*</span>
              <span className="sr-only">(required)</span>
            </legend>
            {errors.screenReader && (
              <p role="alert" className="text-red-400 text-sm mb-2">{errors.screenReader}</p>
            )}
            <div className="space-y-2">
              {["NVDA", "VoiceOver", "Both", "Other"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-white">
                  <input
                    type="radio"
                    name="screenReader"
                    value={option.toLowerCase()}
                    checked={screenReader === option.toLowerCase()}
                    onChange={(e) => { setScreenReader(e.target.value); setErrors((prev) => { const next = { ...prev }; delete next.screenReader; return next; }); }}
                    className="w-4 h-4 accent-spooky-purple"
                    aria-required="true"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xl font-semibold text-white mb-3">
              Email for Follow-up <span className="text-sm text-gray-500">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-spooky-purple focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-spooky-purple hover:bg-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Submit Feedback
          </button>
        </form>

        <div className="text-center mt-8">
          <Link href="/" className="text-spooky-purple hover:text-purple-400 underline transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
