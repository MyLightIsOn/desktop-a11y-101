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
