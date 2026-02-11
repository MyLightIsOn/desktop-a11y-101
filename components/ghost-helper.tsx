"use client";

import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface GhostHelperProps {
  hintTitle: string;
  hintContent: ReactNode;
}

export default function GhostHelper({ hintTitle, hintContent }: GhostHelperProps) {
  return (
    <Dialog>
      <DialogTrigger asChild aria-label="Get Hint">
        <button className="ghost-helper">
          <div className="ghost-background"></div>
          <div id="ghost-container">
            <div id="spooky">
              <div id="body">
                <div id="eyes"></div>
                <div id="mouth"></div>
                <div id="feet">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div id="shadow"></div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-spooky-purple">{hintTitle}</DialogTitle>
          <div className="text-gray-300 mt-2">{hintContent}</div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="bg-spooky-purple hover:bg-purple-700 text-white w-full py-2 rounded transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
            Ok
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
