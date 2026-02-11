import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PuzzleLinkProps {
  puzzleNumber: number;
  title: string;
  description: string;
  locked?: boolean;
  href: string;
}

export default function PuzzleLink({
  puzzleNumber,
  title,
  description,
  locked = false,
  href,
}: PuzzleLinkProps) {
  const content = (
    <div
      className={cn(
        "block p-6 rounded-lg border transition-all",
        "bg-gray-900 border-gray-700",
        locked
          ? "opacity-50 cursor-not-allowed"
          : "hover:border-spooky-purple hover:scale-105 cursor-pointer",
        "focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-black"
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-white">
          Puzzle {puzzleNumber}
        </h3>
        {locked && <span className="text-2xl">🔒</span>}
      </div>
      <h4 className="text-lg text-spooky-purple mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );

  if (locked) {
    return (
      <div
        aria-label={`Puzzle ${puzzleNumber} - ${title}. Locked. Complete puzzles 1 through 5 first.`}
        aria-disabled="true"
        tabIndex={-1}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`Puzzle ${puzzleNumber} - ${title}`}
      className="focus:outline-none"
    >
      {content}
    </Link>
  );
}
