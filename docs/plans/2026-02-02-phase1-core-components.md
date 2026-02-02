# Phase 1: Core Components Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 7 reusable UI components for Mystery House Desktop Edition puzzle and lesson pages.

**Architecture:** React components using Next.js 16 App Router, Radix UI for dialogs, react-confetti for celebrations, Tailwind CSS for styling with dark spooky theme. Components follow controlled pattern (parent manages state). Ghost helper uses CSS animations from mobile version.

**Tech Stack:** Next.js 16.1.4, React 19, TypeScript, Tailwind CSS, Radix UI Dialog, react-confetti

---

## Prerequisites

**Project Setup Required:**
- Initialize Next.js 16.1.4 project with TypeScript
- Install and configure Tailwind CSS
- Set up fonts (Geist, Henny Penny)
- Configure Next.js App Router structure

**Note:** This plan assumes the Next.js project structure exists. If not, run project initialization first.

---

## Task 1: Initialize Next.js Project and Dependencies

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

### Step 1: Initialize Next.js project

```bash
npx create-next-app@16.1.4 . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

When prompted:
- Use TypeScript? Yes
- Use ESLint? Yes
- Use Tailwind CSS? Yes
- Use `src/` directory? No
- Use App Router? Yes
- Customize import alias? Yes (@/*)
- Use Turbopack? Yes

### Step 2: Install required dependencies

```bash
npm install @radix-ui/react-dialog react-confetti clsx tailwind-merge
```

Expected: Dependencies installed successfully

### Step 3: Verify installation

```bash
npm run dev
```

Expected: Dev server starts on http://localhost:3000

### Step 4: Stop dev server and commit

```bash
# Stop server with Ctrl+C
git add .
git commit -m "feat: initialize Next.js 16 project with dependencies

- Add Next.js 16.1.4 with App Router
- Install Radix UI Dialog for accessible modals
- Install react-confetti for celebration animations
- Install clsx and tailwind-merge for className utilities

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Configure Fonts and Tailwind Theme

**Files:**
- Modify: `app/layout.tsx`
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

### Step 1: Update layout with fonts

Modify `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Geist, Henny_Penny } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny-penny",
});

export const metadata: Metadata = {
  title: "Mystery House Desktop Edition",
  description: "Screen reader training game for NVDA and VoiceOver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${hennyPenny.variable} font-geist antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
```

### Step 2: Update Tailwind config with theme extensions

Modify `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spooky: {
          purple: '#8b5cf6',
          green: '#10b981',
        },
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        henny: ['var(--font-henny-penny)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### Step 3: Reset globals.css with base styles

Replace content of `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Step 4: Test font configuration

```bash
npm run dev
```

Visit http://localhost:3000 and inspect:
- Background should be black
- Text should be white
- Font should be Geist

### Step 5: Commit

```bash
git add app/layout.tsx tailwind.config.ts app/globals.css
git commit -m "feat: configure fonts and Tailwind theme

- Add Geist and Henny Penny fonts from Google Fonts
- Extend Tailwind with spooky color palette (purple, green)
- Add font family variables for easy usage
- Set dark theme defaults (black bg, white text)
- Add sr-only utility class for screen readers

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Add Ghost CSS Animations

**Files:**
- Modify: `app/globals.css`

### Step 1: Add ghost animations to globals.css

Append to `app/globals.css`:

```css
/* Ghost Helper Animations */
#spooky {
  margin: 10% auto;
  width: 80%;
  height: 80%;
  animation: floaty 2s infinite;
}

#spooky #body {
  position: relative;
  margin: 50px auto 0;
  width: 45px;
  height: 55px;
  background: #f2fbf1;
  border-top-left-radius: 22.5px;
  border-top-right-radius: 22.5px;
}

#spooky #body:before,
#spooky #body:after {
  content: "";
  position: absolute;
  top: 32.5px;
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #f2fbf1;
  animation: floaty 0.2s infinite;
}

#spooky #body:before {
  left: -4.5px;
}

#spooky #body:after {
  right: -4.5px;
}

#spooky #body #eyes {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 22.5px 0 0;
  width: 22.5px;
  height: 5px;
}

#spooky #body #eyes:before,
#spooky #body #eyes:after {
  content: "";
  display: block;
  width: 7.5px;
  height: 7.5px;
  background: #252c49;
  border-radius: 50%;
}

#spooky #body #mouth {
  background: #252c49;
  margin: 8.75px auto 0;
  width: 15px;
  height: 7.5px;
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
}

#spooky #body #mouth:before {
  content: "";
  display: block;
  background: #fff;
  margin: 5px;
  width: 2.5px;
  height: 2.5px;
}

#spooky #body #feet {
  position: absolute;
  display: flex;
  bottom: -4.5px;
  width: 45px;
  height: 9px;
}

#spooky #body #feet > *,
#spooky #body #feet::before,
#spooky #body #feet::after {
  content: " ";
  width: 9px;
  height: 9px;
  background: #f2fbf1;
  border-radius: 50%;
}

#shadow {
  margin: -22.5px auto 0;
  background: #252c49;
  width: 45px;
  height: 10px;
  border-radius: 50%;
  animation: zoomy 2s infinite;
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes zoomy {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}

/* Ghost Helper Button Styles */
.ghost-helper {
  @apply fixed bottom-8 right-8 z-50;
  @apply bg-transparent border-none cursor-pointer;
  @apply focus:outline-none focus:ring-2 focus:ring-white;
  @apply focus:ring-offset-2 focus:ring-offset-black;
  @apply transition-transform hover:scale-110;
  padding: 0;
  width: 100px;
  height: 100px;
}

.ghost-background {
  @apply absolute inset-0 bg-black/30 rounded-full blur-xl -z-10;
}

#ghost-container {
  position: relative;
  width: 100%;
  height: 100%;
}
```

### Step 2: Test animations work

Create temporary test file `app/ghost-test/page.tsx`:

```typescript
export default function GhostTest() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
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
    </div>
  );
}
```

### Step 3: Verify ghost animation

```bash
npm run dev
```

Visit http://localhost:3000/ghost-test
Expected: Ghost floats up/down, shadow pulses

### Step 4: Remove test file and commit

```bash
rm -rf app/ghost-test
git add app/globals.css
git commit -m "feat: add ghost CSS animations

- Add floaty animation (vertical bounce)
- Add zoomy animation (shadow pulse)
- Define ghost body structure with CSS
- Add ghost-helper button styles
- Ported from mobile version for consistency

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create Utility Functions

**Files:**
- Create: `lib/utils.ts`

### Step 1: Create lib directory and utils file

```bash
mkdir -p lib
```

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format elapsed time in seconds to MM:SS format
 * @param seconds - Total elapsed seconds
 * @returns Formatted time string (e.g., "2:34")
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
```

### Step 2: Create test file for utils

Create `lib/__tests__/utils.test.ts`:

```typescript
import { describe, it, expect } from '@jest/globals';
import { cn, formatTime } from '../utils';

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1');
  });

  it('handles conflicting Tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles conditional classes', () => {
    expect(cn('base', true && 'truthy', false && 'falsy')).toBe('base truthy');
  });
});

describe('formatTime utility', () => {
  it('formats seconds less than a minute', () => {
    expect(formatTime(45)).toBe('0:45');
  });

  it('formats exactly one minute', () => {
    expect(formatTime(60)).toBe('1:00');
  });

  it('formats minutes and seconds', () => {
    expect(formatTime(154)).toBe('2:34');
  });

  it('pads single digit seconds', () => {
    expect(formatTime(125)).toBe('2:05');
  });

  it('handles zero seconds', () => {
    expect(formatTime(0)).toBe('0:00');
  });
});
```

### Step 3: Install Jest for testing (optional but recommended)

```bash
npm install -D jest @types/jest ts-jest @jest/globals
```

Create `jest.config.js`:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
```

### Step 4: Run tests

```bash
npx jest lib/__tests__/utils.test.ts
```

Expected: All tests pass

### Step 5: Commit

```bash
git add lib/utils.ts lib/__tests__/utils.test.ts jest.config.js package.json package-lock.json
git commit -m "feat: add utility functions with tests

- Add cn() for Tailwind class merging
- Add formatTime() for MM:SS time formatting
- Include comprehensive Jest tests
- Set up Jest testing infrastructure

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create Dialog Component (Radix UI Wrapper)

**Files:**
- Create: `components/ui/dialog.tsx`

### Step 1: Create components directory structure

```bash
mkdir -p components/ui
```

### Step 2: Create Dialog component

Create `components/ui/dialog.tsx`:

```typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
        "bg-gray-900 border border-gray-700 rounded-lg shadow-lg",
        "p-6 gap-4",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl font-semibold text-white", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-300", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

### Step 3: Test Dialog component

Create test page `app/dialog-test/page.tsx`:

```typescript
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogTest() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Dialog>
        <DialogTrigger className="bg-purple-600 text-white px-4 py-2 rounded">
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>
              This is a test of the dialog component with dark theme.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose className="bg-gray-700 text-white px-4 py-2 rounded">
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

### Step 4: Verify Dialog works

```bash
npm run dev
```

Visit http://localhost:3000/dialog-test
- Click "Open Dialog"
- Dialog should appear with dark theme
- Escape should close
- Click outside should close
- Focus should trap inside dialog

### Step 5: Remove test and commit

```bash
rm -rf app/dialog-test
git add components/ui/dialog.tsx
git commit -m "feat: create Dialog component (Radix UI wrapper)

- Wrap Radix UI Dialog primitives
- Apply dark theme styling (gray-900 bg, gray-700 border)
- Add focus trap and keyboard handling
- Include overlay with blur effect
- Export all dialog sub-components

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create Confetti Component

**Files:**
- Create: `components/confetti.tsx`

### Step 1: Create Confetti component

Create `components/confetti.tsx`:

```typescript
"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

interface ConfettiProps {
  active: boolean;
  duration?: number;
}

export default function Confetti({ active, duration = 3000 }: ConfettiProps) {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Handle window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle active state and auto-stop
  useEffect(() => {
    if (active) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  if (!isActive) return null;

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={200}
      colors={["#8b5cf6", "#10b981", "#ffffff"]}
      recycle={false}
      aria-hidden="true"
    />
  );
}
```

### Step 2: Test Confetti component

Create test page `app/confetti-test/page.tsx`:

```typescript
"use client";

import { useState } from "react";
import Confetti from "@/components/confetti";

export default function ConfettiTest() {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => setActive(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded text-xl"
      >
        Trigger Confetti
      </button>
      <Confetti active={active} />
    </div>
  );
}
```

### Step 3: Verify Confetti works

```bash
npm run dev
```

Visit http://localhost:3000/confetti-test
- Click "Trigger Confetti"
- Purple and green confetti should fall
- Should stop after 3 seconds

### Step 4: Remove test and commit

```bash
rm -rf app/confetti-test
git add components/confetti.tsx
git commit -m "feat: create Confetti celebration component

- Wrap react-confetti library
- Use spooky theme colors (purple, green, white)
- Auto-stop after duration (default 3s)
- Responsive to window size changes
- Hidden from screen readers (decorative only)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create GhostHelper Component

**Files:**
- Create: `components/ghost-helper.tsx`

### Step 1: Create GhostHelper component

Create `components/ghost-helper.tsx`:

```typescript
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
```

### Step 2: Test GhostHelper component

Create test page `app/ghost-helper-test/page.tsx`:

```typescript
import GhostHelper from "@/components/ghost-helper";

export default function GhostHelperTest() {
  return (
    <div className="min-h-screen bg-black">
      <GhostHelper
        hintTitle="Need a hint?"
        hintContent="Some structures are hidden from sight but not from sound. Try navigating by headings."
      />
    </div>
  );
}
```

### Step 3: Verify GhostHelper works

```bash
npm run dev
```

Visit http://localhost:3000/ghost-helper-test
- Ghost should float in bottom-right corner
- Click/Tab+Enter should open hint dialog
- Dialog should have purple title
- "Ok" button should close
- Escape should close

### Step 4: Remove test and commit

```bash
rm -rf app/ghost-helper-test
git add components/ghost-helper.tsx
git commit -m "feat: create GhostHelper hint button component

- Add floating ghost button with CSS animation
- Integrate Dialog for hint display
- Position fixed bottom-right
- Keyboard accessible (Tab, Enter, Escape)
- Uses spooky purple theme for dialog title
- Matches mobile version structure

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Create PuzzleComplete Component

**Files:**
- Create: `components/puzzle-complete.tsx`

### Step 1: Create PuzzleComplete component

Create `components/puzzle-complete.tsx`:

```typescript
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
```

### Step 2: Test PuzzleComplete component

Create test page `app/puzzle-complete-test/page.tsx`:

```typescript
"use client";

import { useState } from "react";
import PuzzleComplete from "@/components/puzzle-complete";

export default function PuzzleCompleteTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded text-xl"
      >
        Trigger Success
      </button>
      <PuzzleComplete
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        puzzleNumber={1}
        puzzleTitle="The Dusty Attic"
        description="You've mastered heading navigation! You learned how to jump between headings using the H key (NVDA) and VO+Cmd+H (VoiceOver)."
        completionTime="2:34"
      />
    </div>
  );
}
```

### Step 3: Verify PuzzleComplete works

```bash
npm run dev
```

Visit http://localhost:3000/puzzle-complete-test
- Click "Trigger Success"
- Confetti should appear
- Dialog shows "SUCCESS!" in Henny Penny font
- Displays puzzle info and time
- "Continue" button present
- Can close with Escape

### Step 4: Remove test and commit

```bash
rm -rf app/puzzle-complete-test
git add components/puzzle-complete.tsx
git commit -m "feat: create PuzzleComplete success dialog

- Trigger confetti animation on open
- Display SUCCESS! in Henny Penny font
- Show puzzle title, description, completion time
- Continue button navigates to /start
- Auto-focus dialog for screen reader announcement
- Controlled component (parent manages state)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Create PuzzleFooter Component

**Files:**
- Create: `components/puzzle-footer.tsx`

### Step 1: Create PuzzleFooter component

Create `components/puzzle-footer.tsx`:

```typescript
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
```

### Step 2: Test PuzzleFooter component

Create test page `app/puzzle-footer-test/page.tsx`:

```typescript
import PuzzleFooter from "@/components/puzzle-footer";

export default function PuzzleFooterTest() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-henny text-white mb-4">Puzzle Page</h1>
        <p className="text-gray-300">
          This is a mock puzzle page to test the footer component.
        </p>
      </div>
      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent="Some structures are hidden from sight but not from sound. Try navigating by headings."
        backUrl="/start"
      />
    </div>
  );
}
```

### Step 3: Verify PuzzleFooter works

```bash
npm run dev
```

Visit http://localhost:3000/puzzle-footer-test
- Footer should be fixed at bottom
- "Back to Puzzles" link on left
- Ghost helper on right
- Semi-transparent dark background
- Both elements keyboard accessible

### Step 4: Test without ghost helper

Modify test to remove hint props:

```typescript
<PuzzleFooter backUrl="/start" />
```

Refresh page - ghost should not appear, only back link.

### Step 5: Remove test and commit

```bash
rm -rf app/puzzle-footer-test
git add components/puzzle-footer.tsx
git commit -m "feat: create PuzzleFooter composition component

- Combine back link and GhostHelper
- Fixed positioning at bottom
- Semi-transparent dark background
- Conditionally render ghost if hint provided
- Keyboard accessible navigation
- Flexible backUrl prop (defaults to /start)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Create PuzzleLink Component

**Files:**
- Create: `components/puzzle-link.tsx`

### Step 1: Create PuzzleLink component

Create `components/puzzle-link.tsx`:

```typescript
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
```

### Step 2: Test PuzzleLink component

Create test page `app/puzzle-link-test/page.tsx`:

```typescript
import PuzzleLink from "@/components/puzzle-link";

export default function PuzzleLinkTest() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny text-white mb-8">Puzzle Grid Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PuzzleLink
            puzzleNumber={1}
            title="The Dusty Attic"
            description="Master heading navigation through a dark attic filled with old trunks and cobwebs."
            href="/puzzle/1"
          />
          <PuzzleLink
            puzzleNumber={2}
            title="The Mysterious Library"
            description="Learn browse vs focus mode in an ancient library with enchanted books."
            href="/puzzle/2"
          />
          <PuzzleLink
            puzzleNumber={6}
            title="The Haunted Ballroom"
            description="Final challenge combining all learned skills in a grand ballroom."
            locked={true}
            href="/puzzle/6"
          />
        </div>
      </div>
    </div>
  );
}
```

### Step 3: Verify PuzzleLink works

```bash
npm run dev
```

Visit http://localhost:3000/puzzle-link-test
- First two cards should be interactive (hover effects)
- Third card should be grayed out with lock icon
- Tab through cards - locked card should not be focusable
- Hover over unlocked cards - border glows purple, scales up
- Click unlocked card - navigates (will 404, that's ok)

### Step 4: Remove test and commit

```bash
rm -rf app/puzzle-link-test
git add components/puzzle-link.tsx
git commit -m "feat: create PuzzleLink card component

- Display puzzle number, title, description
- Support locked state with lock icon
- Locked cards not focusable (tabIndex=-1)
- Unlocked cards have hover effects (scale, border glow)
- Screen reader announces lock status
- Next.js Link for navigation
- Responsive card design

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Create Example Puzzle Page

**Files:**
- Create: `app/puzzle/1/page.tsx`

### Step 1: Create puzzle directory structure

```bash
mkdir -p app/puzzle/1
```

### Step 2: Create example puzzle page

Create `app/puzzle/1/page.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import PuzzleComplete from "@/components/puzzle-complete";
import PuzzleFooter from "@/components/puzzle-footer";
import { formatTime } from "@/lib/utils";

export default function Puzzle1() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handlePuzzleComplete = () => {
    setPuzzleSolved(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-henny mb-6">Puzzle 1: The Dusty Attic</h1>

        <p className="text-gray-300 mb-4">
          You find yourself in a dark attic. The room is filled with hundreds of old items,
          but somewhere hidden among them is the key to escape.
        </p>

        {/* Decoy paragraphs */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={`decoy-${i}`} className="sr-only">
            Decoy text paragraph {i + 1}. This is just filler content that screen reader
            users shouldn't have to read through. Use heading navigation!
          </p>
        ))}

        {/* Hidden success heading */}
        <div className="sr-only">
          <h3>Congratulations! You found the secret heading.</h3>
          <button
            onClick={handlePuzzleComplete}
            className="underline text-spooky-green"
          >
            Press Enter to complete the puzzle
          </button>
        </div>

        {/* More decoy paragraphs */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={`decoy-end-${i}`} className="sr-only">
            More decoy text paragraph {i + 1}. Keep navigating by headings!
          </p>
        ))}

        {/* Visual hint for sighted users (shouldn't use this!) */}
        <div className="mt-8 text-sm text-gray-600 italic">
          Visual users: This puzzle can only be solved using screen reader navigation.
          Turn on your screen reader and use heading navigation (H key or VO+Cmd+H).
        </div>
      </div>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => setPuzzleSolved(false)}
        puzzleNumber={1}
        puzzleTitle="The Dusty Attic"
        description={
          <>
            You've mastered <strong>heading navigation</strong>! You learned how to jump
            between headings using the <kbd>H</kbd> key (NVDA) and{" "}
            <kbd>VO+Cmd+H</kbd> (VoiceOver) instead of arrowing through every line of text.
          </>
        }
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent={
          <>
            <p className="mb-2">
              Some structures are hidden from sight but not from sound.
            </p>
            <p className="mb-2">
              <strong>NVDA:</strong> Press <kbd>H</kbd> to jump to the next heading.
            </p>
            <p>
              <strong>VoiceOver:</strong> Press <kbd>VO+Cmd+H</kbd> to jump to the next heading.
            </p>
          </>
        }
      />
    </main>
  );
}
```

### Step 3: Test complete puzzle flow

```bash
npm run dev
```

Visit http://localhost:3000/puzzle/1
- Turn on screen reader (NVDA or VoiceOver)
- Navigate by headings (H key or VO+Cmd+H)
- Find hidden H3 "Congratulations!"
- Press Enter on completion button
- Confetti should trigger
- Success dialog should appear
- Timer should show elapsed time
- Continue button should work
- Ghost helper should work

### Step 4: Commit

```bash
git add app/puzzle/1/page.tsx
git commit -m "feat: create example Puzzle 1 page

- Demonstrate all components working together
- Timer tracking with useEffect
- Hidden completion trigger (sr-only)
- Decoy paragraphs to enforce heading navigation
- PuzzleComplete and PuzzleFooter integration
- Full puzzle flow example for future puzzles

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Create Example Start Page (Puzzle Grid)

**Files:**
- Create: `app/start/page.tsx`

### Step 1: Create start directory

```bash
mkdir -p app/start
```

### Step 2: Create puzzle grid page

Create `app/start/page.tsx`:

```typescript
"use client";

import { useEffect, useState } from "react";
import PuzzleLink from "@/components/puzzle-link";

export default function StartPage() {
  const [puzzle6Unlocked, setPuzzle6Unlocked] = useState(false);

  useEffect(() => {
    // Check if puzzles 1-5 are complete
    const checkUnlocked = () => {
      try {
        for (let i = 1; i <= 5; i++) {
          if (localStorage.getItem(`puzzle_${i}_complete`) !== "true") {
            return false;
          }
        }
        return true;
      } catch (e) {
        // If localStorage fails, show as locked (safe default)
        return false;
      }
    };

    setPuzzle6Unlocked(checkUnlocked());
  }, []);

  const puzzles = [
    {
      number: 1,
      title: "The Dusty Attic",
      description: "Master heading navigation through a dark attic filled with old trunks and cobwebs.",
      href: "/puzzle/1",
    },
    {
      number: 2,
      title: "The Mysterious Library",
      description: "Learn browse vs focus mode in an ancient library with enchanted books.",
      href: "/puzzle/2",
    },
    {
      number: 3,
      title: "The Winding Corridors",
      description: "Navigate landmarks in maze-like hallways with multiple rooms.",
      href: "/puzzle/3",
    },
    {
      number: 4,
      title: "The Grand Foyer",
      description: "Use element lists in an ornate entrance hall with many doors.",
      href: "/puzzle/4",
    },
    {
      number: 5,
      title: "The Alchemist's Laboratory",
      description: "Navigate forms and tables in a dark laboratory with bubbling potions.",
      href: "/puzzle/5",
    },
    {
      number: 6,
      title: "The Haunted Ballroom",
      description: "Final challenge combining all learned skills in a grand ballroom with dancing ghosts.",
      href: "/puzzle/6",
      locked: !puzzle6Unlocked,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-henny text-center mb-4">Mystery House</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Choose a room to explore. Each puzzle teaches a different screen reader skill.
          Complete puzzles 1-5 to unlock the final challenge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {puzzles.map((puzzle) => (
            <PuzzleLink
              key={puzzle.number}
              puzzleNumber={puzzle.number}
              title={puzzle.title}
              description={puzzle.description}
              href={puzzle.href}
              locked={puzzle.locked}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/"
            className="text-spooky-purple hover:text-purple-400 underline transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
```

### Step 3: Test puzzle grid

```bash
npm run dev
```

Visit http://localhost:3000/start
- 6 puzzle cards in grid layout
- First 5 unlocked and interactive
- Puzzle 6 locked (no progress yet)
- Hover effects work on unlocked cards
- Locked card has lock icon and grayed out
- Responsive grid (3 cols on desktop, 2 on tablet, 1 on mobile)

### Step 4: Test unlock logic

Open browser console:
```javascript
// Simulate completing puzzles 1-5
for (let i = 1; i <= 5; i++) {
  localStorage.setItem(`puzzle_${i}_complete`, "true");
}
```

Refresh page - Puzzle 6 should now be unlocked!

### Step 5: Commit

```bash
git add app/start/page.tsx
git commit -m "feat: create Start page with puzzle grid

- Display 6 puzzle cards in responsive grid
- Check localStorage for puzzle completion
- Unlock Puzzle 6 when puzzles 1-5 complete
- Handle localStorage errors gracefully
- Link to individual puzzle pages
- Back link to home

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Update Home Page

**Files:**
- Modify: `app/page.tsx`

### Step 1: Update home page with welcome content

Replace `app/page.tsx`:

```typescript
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
```

### Step 2: Test home page

```bash
npm run dev
```

Visit http://localhost:3000
- Welcome message with title
- Three navigation buttons
- All buttons keyboard accessible
- Links work (some will 404, that's ok)

### Step 3: Commit

```bash
git add app/page.tsx
git commit -m "feat: update home page with navigation

- Add Mystery House title in Henny Penny font
- Create three main navigation buttons
- Link to getting-started, lessons, and puzzles
- Display requirements (screen reader, keyboard)
- Centered layout with spooky theme colors

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Create Documentation

**Files:**
- Create: `docs/components.md`

### Step 1: Create component documentation

Create `docs/components.md`:

```markdown
# Component Documentation

This document describes the 7 core components built in Phase 1.

## Component Overview

| Component | Purpose | Location |
|-----------|---------|----------|
| Dialog | Radix UI wrapper with dark theme | `components/ui/dialog.tsx` |
| Confetti | Celebration animation | `components/confetti.tsx` |
| GhostHelper | Floating hint button | `components/ghost-helper.tsx` |
| PuzzleComplete | Success dialog with confetti | `components/puzzle-complete.tsx` |
| PuzzleFooter | Footer with back link + ghost | `components/puzzle-footer.tsx` |
| PuzzleLink | Puzzle card for grid | `components/puzzle-link.tsx` |

## Usage Examples

### Dialog

```typescript
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Confetti

```typescript
import Confetti from "@/components/confetti";

<Confetti active={isSuccess} duration={3000} />
```

### GhostHelper

```typescript
import GhostHelper from "@/components/ghost-helper";

<GhostHelper
  hintTitle="Need help?"
  hintContent={<p>This is the hint text.</p>}
/>
```

### PuzzleComplete

```typescript
import PuzzleComplete from "@/components/puzzle-complete";

<PuzzleComplete
  isOpen={puzzleSolved}
  onClose={() => setPuzzleSolved(false)}
  puzzleNumber={1}
  puzzleTitle="The Dusty Attic"
  description="You learned heading navigation!"
  completionTime="2:34"
/>
```

### PuzzleFooter

```typescript
import PuzzleFooter from "@/components/puzzle-footer";

<PuzzleFooter
  hintTitle="Hint"
  hintContent="Try using headings."
  backUrl="/start"
/>
```

### PuzzleLink

```typescript
import PuzzleLink from "@/components/puzzle-link";

<PuzzleLink
  puzzleNumber={1}
  title="The Dusty Attic"
  description="Master heading navigation."
  href="/puzzle/1"
  locked={false}
/>
```

## Utilities

### cn() - Class Name Merger

```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />
```

### formatTime() - Time Formatter

```typescript
import { formatTime } from "@/lib/utils";

formatTime(154) // "2:34"
```

## Accessibility Features

- All components keyboard accessible
- Focus indicators on all interactive elements
- Dialog focus trap with Escape key support
- Screen reader announcements via ARIA
- Hidden puzzle elements use `sr-only` class
- Locked states announced to screen readers

## Testing Checklist

- [ ] Dialog opens/closes with keyboard
- [ ] Confetti triggers and auto-stops
- [ ] Ghost helper accessible via Tab + Enter
- [ ] PuzzleComplete shows success with confetti
- [ ] PuzzleFooter shows both links correctly
- [ ] PuzzleLink locked state works
- [ ] All focus indicators visible
- [ ] Screen readers announce everything correctly
```

### Step 2: Commit documentation

```bash
git add docs/components.md
git commit -m "docs: add component usage documentation

- Document all 7 core components
- Include usage examples for each
- List accessibility features
- Add testing checklist
- Reference utility functions

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Final Testing and Verification

**Files:**
- None (testing only)

### Step 1: Run development server

```bash
npm run dev
```

### Step 2: Manual testing checklist

Visit each route and verify:

**Home page (http://localhost:3000):**
- [ ] Displays welcome message
- [ ] Three navigation buttons work
- [ ] Keyboard accessible (Tab through buttons)

**Start page (http://localhost:3000/start):**
- [ ] 6 puzzle cards in grid
- [ ] Puzzle 6 locked by default
- [ ] Hover effects on unlocked cards
- [ ] Lock icon and grayed out style on locked card

**Puzzle 1 (http://localhost:3000/puzzle/1):**
- [ ] Timer counts up
- [ ] Ghost helper button visible and working
- [ ] Hint dialog opens with ghost click/Enter
- [ ] Hidden completion trigger findable with screen reader
- [ ] Completion triggers confetti and success dialog
- [ ] Success dialog shows puzzle info and time
- [ ] Continue button works

**Keyboard Navigation:**
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes all dialogs
- [ ] Focus indicators visible on all elements

**Screen Reader Testing (if available):**
- [ ] NVDA or VoiceOver announces all content
- [ ] H key navigation finds hidden heading in puzzle
- [ ] Ghost helper announced as "Get Hint"
- [ ] Success dialog auto-announces "SUCCESS!"
- [ ] Locked puzzle announces lock status

### Step 3: Build for production

```bash
npm run build
```

Expected: Build completes with no errors

### Step 4: Run production build

```bash
npm start
```

Visit http://localhost:3000 and verify everything still works.

### Step 5: Document test results

Create `docs/phase1-testing-results.md`:

```markdown
# Phase 1 Testing Results

**Date:** [Current Date]
**Tested By:** [Your Name]

## Test Environment
- Node.js version: [version]
- Browser: [browser and version]
- Screen Reader: [if tested]

## Component Tests

### Dialog ✓
- Opens/closes with keyboard
- Focus trap works
- Escape key closes
- Click outside closes

### Confetti ✓
- Triggers on success
- Auto-stops after 3 seconds
- Colors correct (purple, green, white)

### GhostHelper ✓
- Floats in bottom-right
- Animation smooth
- Dialog opens on click/Enter
- Hint content displays

### PuzzleComplete ✓
- Confetti triggers
- Success message displays
- Completion time shown
- Continue button navigates

### PuzzleFooter ✓
- Back link works
- Ghost helper renders
- Fixed at bottom
- Semi-transparent background

### PuzzleLink ✓
- Unlocked cards interactive
- Locked cards grayed out
- Hover effects work
- Lock icon displays

## Page Tests

### Home Page ✓
- Navigation buttons work
- Layout centered
- Keyboard accessible

### Start Page ✓
- 6 puzzle cards display
- Grid responsive
- Puzzle 6 locked correctly
- localStorage check works

### Puzzle 1 ✓
- Timer works
- Hidden elements findable
- Completion flow works
- All components integrate

## Accessibility Tests

- [ ] NVDA tested (if available)
- [ ] VoiceOver tested (if available)
- [x] Keyboard navigation works
- [x] Focus indicators visible
- [x] Color contrast sufficient

## Build Tests

- [x] Development build works
- [x] Production build completes
- [x] No console errors
- [x] No TypeScript errors

## Issues Found

[List any issues or notes]

## Conclusion

Phase 1 core components successfully implemented and tested.
Ready for Phase 2 (Content).
```

### Step 6: Final commit

```bash
git add docs/phase1-testing-results.md
git commit -m "docs: add Phase 1 testing results

- Document test environment
- Verify all components work
- Confirm keyboard accessibility
- Production build successful
- Phase 1 complete

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Completion Checklist

Phase 1 is complete when:

- [x] Next.js 16 project initialized with TypeScript and Tailwind
- [x] Fonts configured (Geist, Henny Penny)
- [x] Ghost CSS animations added
- [x] Utility functions created with tests
- [x] Dialog component created
- [x] Confetti component created
- [x] GhostHelper component created
- [x] PuzzleComplete component created
- [x] PuzzleFooter component created
- [x] PuzzleLink component created
- [x] Example puzzle page created
- [x] Start page with grid created
- [x] Home page updated
- [x] Documentation written
- [x] All tests pass
- [x] Production build successful

## Next Steps

After completing Phase 1:

1. **Phase 2: Content**
   - Create `/getting-started` page with setup instructions
   - Build 5 lesson pages with practice areas
   - Add KeyboardShortcuts component for dual instructions
   - Record/embed tutorial videos

2. **Phase 3: Puzzles**
   - Implement all 6 puzzle pages with mechanics
   - Add localStorage completion tracking (`lib/puzzleComplete.js`)
   - Create API endpoint for analytics
   - Add background images for each room

3. **Phase 4: Polish**
   - Comprehensive screen reader testing
   - Focus indicator refinement
   - Performance optimization
   - Feedback form implementation

---

## Summary

This implementation plan provides step-by-step instructions to build all 7 core components for Mystery House Desktop Edition. Each task includes exact file paths, complete code, testing steps, and git commits. The components use Next.js 16, React 19, Radix UI, and Tailwind CSS with a dark spooky theme. All components are keyboard accessible and work with NVDA and VoiceOver screen readers.
