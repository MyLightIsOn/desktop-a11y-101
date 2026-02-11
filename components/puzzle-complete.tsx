"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Confetti from "@/components/confetti";

interface PuzzleCompleteProps {
  isOpen: boolean;
  onClose: () => void;
  puzzleNumber: number;
  puzzleTitle: string;
  description: ReactNode;
  completionTime: string;
}

export default function PuzzleComplete({
  isOpen,
  onClose,
  puzzleNumber,
  puzzleTitle,
  description,
  completionTime,
}: PuzzleCompleteProps) {
  const router = useRouter();

  const handleContinue = () => {
    onClose();
    router.push("/start");
  };

  return (
    <>
      <Confetti active={isOpen} duration={3000} />
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-4xl font-henny text-center text-spooky-green mb-4">
              SUCCESS!
            </DialogTitle>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Puzzle {puzzleNumber}: {puzzleTitle}
              </h3>
              <div className="text-gray-300">{description}</div>
              <div className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                Completion Time: <span className="font-semibold text-white">{completionTime}</span>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={handleContinue}
              className="bg-spooky-purple hover:bg-purple-700 text-white w-full py-3 rounded-lg text-lg font-semibold transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Continue
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
