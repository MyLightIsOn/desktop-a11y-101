"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState("");
  const [helpfulItem, setHelpfulItem] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [screenReader, setScreenReader] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!rating) {
      newErrors.rating = "Please select an overall experience rating.";
    }
    if (!screenReader) {
      newErrors.screenReader = "Please select which screen reader you used.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-henny text-spooky-purple mb-6">
            Thank You!
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Your feedback has been submitted. We appreciate you taking the time
            to help us improve Mystery House Desktop Edition.
          </p>
          <nav aria-label="Page navigation" className="space-x-6">
            <Link
              href="/"
              className="text-spooky-purple hover:text-purple-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Back to Home
            </Link>
            <Link
              href="/start"
              className="bg-spooky-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Play More Puzzles
            </Link>
          </nav>
        </div>
      </main>
    );
  }

  const ratingOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "poor", label: "Poor" },
  ];

  const screenReaderOptions = [
    { value: "nvda", label: "NVDA" },
    { value: "voiceover", label: "VoiceOver" },
    { value: "both", label: "Both" },
    { value: "other", label: "Other" },
  ];

  const inputBaseClasses =
    "bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black";

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-henny text-center text-spooky-purple mb-4">
          Feedback
        </h1>
        <p className="text-center text-gray-300 mb-10 max-w-xl mx-auto">
          We would love to hear about your experience with Mystery House Desktop
          Edition. Your feedback helps us improve the game for future players.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Overall Experience Rating */}
          <fieldset>
            <legend className="text-xl font-semibold mb-3">
              Overall Experience{" "}
              <span className="text-red-400" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(required)</span>
            </legend>
            <div className="space-y-2">
              {ratingOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-white"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={option.value}
                    checked={rating === option.value}
                    onChange={(e) => {
                      setRating(e.target.value);
                      if (errors.rating) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.rating;
                          return next;
                        });
                      }
                    }}
                    className="w-4 h-4 accent-spooky-purple focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    aria-required="true"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-400 text-sm mt-2" role="alert">
                {errors.rating}
              </p>
            )}
          </fieldset>

          {/* Most Helpful Lesson or Puzzle */}
          <div>
            <label
              htmlFor="helpful-item"
              className="block text-xl font-semibold mb-3"
            >
              Most Helpful Lesson or Puzzle
            </label>
            <select
              id="helpful-item"
              value={helpfulItem}
              onChange={(e) => setHelpfulItem(e.target.value)}
              className={inputBaseClasses}
            >
              <option value="">Select one (optional)</option>
              <optgroup label="Lessons">
                <option value="lesson-1">Lesson 1: Heading Navigation</option>
                <option value="lesson-2">Lesson 2: Browse vs Focus Mode</option>
                <option value="lesson-3">Lesson 3: Landmark Navigation</option>
                <option value="lesson-4">Lesson 4: Element Lists</option>
                <option value="lesson-5">Lesson 5: Forms and Tables</option>
              </optgroup>
              <optgroup label="Puzzles">
                <option value="puzzle-1">Puzzle 1: The Dusty Attic</option>
                <option value="puzzle-2">Puzzle 2: The Mysterious Library</option>
                <option value="puzzle-3">Puzzle 3: The Winding Corridors</option>
                <option value="puzzle-4">Puzzle 4: The Grand Foyer</option>
                <option value="puzzle-5">
                  Puzzle 5: The Alchemist&apos;s Laboratory
                </option>
                <option value="puzzle-6">Puzzle 6: The Haunted Ballroom</option>
              </optgroup>
            </select>
          </div>

          {/* Suggestions */}
          <div>
            <label
              htmlFor="suggestions"
              className="block text-xl font-semibold mb-3"
            >
              Suggestions for Improvement
            </label>
            <textarea
              id="suggestions"
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              rows={5}
              placeholder="What could we do better?"
              className={inputBaseClasses}
            />
          </div>

          {/* Screen Reader Used */}
          <fieldset>
            <legend className="text-xl font-semibold mb-3">
              Screen Reader Used{" "}
              <span className="text-red-400" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(required)</span>
            </legend>
            <div className="space-y-2">
              {screenReaderOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-white"
                >
                  <input
                    type="radio"
                    name="screenReader"
                    value={option.value}
                    checked={screenReader === option.value}
                    onChange={(e) => {
                      setScreenReader(e.target.value);
                      if (errors.screenReader) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.screenReader;
                          return next;
                        });
                      }
                    }}
                    className="w-4 h-4 accent-spooky-purple focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    aria-required="true"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.screenReader && (
              <p className="text-red-400 text-sm mt-2" role="alert">
                {errors.screenReader}
              </p>
            )}
          </fieldset>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-semibold mb-3"
            >
              Email for Follow-up{" "}
              <span className="text-gray-500 text-sm font-normal">
                (optional)
              </span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={inputBaseClasses}
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-spooky-purple hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Submit Feedback
            </button>
          </div>
        </form>

        {/* Navigation */}
        <nav
          aria-label="Page navigation"
          className="text-center mt-10 space-x-6"
        >
          <Link
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Back to Home
          </Link>
          <Link
            href="/start"
            className="text-spooky-green hover:text-green-400 underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Back to Puzzles
          </Link>
        </nav>
      </div>
    </main>
  );
}
