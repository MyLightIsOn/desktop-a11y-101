import React, { ReactNode } from "react";
import Link from "next/link";
import GhostHelper from "@/components/ghost-helper";

interface PuzzleFooterProps {
  hintTitle?: string;
  hintContent?: ReactNode;
  backUrl?: string;
}

export default function PuzzleFooter({
  hintTitle,
  hintContent,
  backUrl = "/start",
}: PuzzleFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={backUrl}
          className="text-white hover:text-spooky-purple transition-colors underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
        >
          ← Back to Puzzles
        </Link>
        {hintTitle && hintContent && (
          <GhostHelper hintTitle={hintTitle} hintContent={hintContent} />
        )}
      </div>
    </footer>
  );
}
