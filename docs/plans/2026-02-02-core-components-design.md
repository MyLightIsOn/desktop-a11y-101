# Core Component Structure Design

**Date:** February 2, 2026
**Phase:** Phase 1 - Foundation
**Purpose:** Design reusable UI components for Mystery House Desktop Edition

## Overview

This document specifies the design for 7 core components that will be used across all lesson and puzzle pages in the desktop version. These components maintain consistency with the mobile version while adapting to desktop-specific requirements (dual screen reader support, keyboard-only interaction, dark spooky theme).

## Component Architecture

### Component Hierarchy

```
App Layout
├── PuzzleFooter (used in puzzle pages)
│   ├── GhostHelper (hint button)
│   │   └── Dialog (Radix UI wrapper)
│   └── Back Link
├── PuzzleComplete (success modal)
│   ├── Confetti (celebration animation)
│   └── Dialog (Radix UI wrapper)
└── PuzzleLink (used in /start grid)
```

### Key Design Decisions

1. **Dialog Wrapper Component**: Thin wrapper around Radix UI Dialog with:
   - Proper focus trap behavior
   - Escape key handling
   - Dark theme overlay styling
   - Accessibility announcements via `aria-labelledby` and `aria-describedby`

2. **Composition Pattern**: `PuzzleFooter` composes `GhostHelper` rather than duplicating code. This keeps the hint button + back link together as a reusable unit.

3. **Controlled Components**: Components accept props like `isOpen` and `onOpenChange` rather than managing their own visibility state. This gives parent pages full control.

## Component Specifications

### 1. Dialog Wrapper (`components/ui/dialog.tsx`)

Reusable Radix UI Dialog wrapper with consistent theming.

**Interface:**
```typescript
interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: ReactNode;
  children: ReactNode;
}
```

**Features:**
- Dark overlay with blur effect (`bg-black/80 backdrop-blur-sm`)
- Content styled with spooky theme (dark background, white text, purple accents)
- Auto-focuses title on open for screen reader announcement
- Escape key closes dialog
- Click outside closes dialog
- High contrast focus indicators

**Accessibility:**
- Uses Radix UI's built-in focus trap
- `aria-labelledby` points to title
- `aria-describedby` points to description if provided
- Focus returns to trigger on close

---

### 2. Confetti Component (`components/confetti.tsx`)

Wrapper around react-confetti for celebration animations.

**Interface:**
```typescript
interface ConfettiProps {
  active: boolean;
  duration?: number; // defaults to 3000ms
}
```

**Features:**
- Uses `react-confetti` library
- Custom colors: purple (#8b5cf6) and green (#10b981) to match theme
- Auto-stops after duration
- Responds to viewport size changes
- Hidden from screen readers (`aria-hidden="true"`) since purely decorative

**Implementation Notes:**
- Only renders when `active={true}`
- Uses `useWindowSize` hook from react-confetti for responsive sizing
- Particle count: ~200 for good balance of performance and effect

---

### 3. GhostHelper (`components/ghost-helper.tsx`)

Hint button with CSS-based ghost animation and dialog.

**Interface:**
```typescript
interface GhostHelperProps {
  hintTitle: string;
  hintContent: ReactNode;
}
```

**Structure:**
- Button with `className="ghost-helper"` containing ghost HTML structure
- Ghost CSS copied from mobile version (`ghost.css`)
- Uses Radix UI Dialog for hint display

**Ghost HTML Structure:**
```tsx
<button className="ghost-helper" aria-label="Get Hint">
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
```

**Styling (in globals.css):**
- Position: `fixed bottom-8 right-8 z-50`
- Transparent button background
- Focus ring: `ring-2 ring-white ring-offset-2 ring-offset-black`
- Ghost animations: `floaty` (vertical bounce) and `zoomy` (shadow pulse)

**Dialog Styling:**
- Dark theme: `bg-gray-900 text-white` (different from mobile's white background)
- "Ok" button to close: `bg-purple-600 hover:bg-purple-700`

**Accessibility:**
- Labeled as "Get Hint" for screen readers
- Fully keyboard accessible (Tab to reach, Enter/Space to activate)
- Dialog traps focus when open
- Escape closes dialog and returns focus to button

---

### 4. PuzzleComplete (`components/puzzle-complete.tsx`)

Success dialog with confetti animation.

**Interface:**
```typescript
interface PuzzleCompleteProps {
  isOpen: boolean;
  onClose: () => void;
  puzzleNumber: number;
  puzzleTitle: string;
  description: ReactNode;
  completionTime: string; // formatted like "2:34"
}
```

**Features:**
- Triggers `<Confetti active={isOpen} />` when opened
- Dialog title: "SUCCESS!" in Henny Penny font, large size (text-4xl)
- Shows puzzle title (e.g., "Puzzle 1: The Dusty Attic")
- Displays what skill was learned (description prop)
- Shows completion time
- "Continue" button navigates to `/start` using `useRouter().push()`

**Layout:**
```
┌─────────────────────────────┐
│  🎊 Confetti Animation 🎊   │
│                             │
│  SUCCESS!                   │
│                             │
│  Puzzle 1: The Dusty Attic  │
│                             │
│  You've mastered heading    │
│  navigation! You learned... │
│                             │
│  Time: 2:34                 │
│                             │
│  [ Continue ]               │
└─────────────────────────────┘
```

**Accessibility:**
- Auto-focuses on open so screen reader immediately announces success
- "SUCCESS!" announced via dialog title
- "Continue" button has clear label and focus
- Escape key closes (though Continue is primary action)

---

### 5. PuzzleFooter (`components/puzzle-footer.tsx`)

Footer combining ghost helper with navigation.

**Interface:**
```typescript
interface PuzzleFooterProps {
  hintTitle?: string;
  hintContent?: ReactNode;
  backUrl?: string; // defaults to "/start"
}
```

**Structure:**
- `<footer>` element with `fixed bottom-0 left-0 right-0` positioning
- Two child elements:
  - Back link (left side): `← Back to Puzzles`
  - GhostHelper (right side): Only renders if `hintTitle` provided
- Semi-transparent dark background: `bg-black/50 backdrop-blur-sm`
- Padding: `p-4` for spacing

**Layout:**
```
┌─────────────────────────────────────────┐
│  ← Back to Puzzles            👻 Ghost  │
└─────────────────────────────────────────┘
```

**Styling:**
- Back link: `text-white hover:text-purple-400 transition-colors`
- Flex layout: `flex justify-between items-center`
- High contrast focus indicators on both elements
- Z-index ensures it stays above puzzle content but below dialogs

**Conditional Rendering:**
- If no `hintTitle` provided, ghost helper not rendered (lessons may use this)
- If `backUrl` not provided, defaults to `/start`

---

### 6. PuzzleLink (`components/puzzle-link.tsx`)

Card component for the puzzle grid on `/start` page.

**Interface:**
```typescript
interface PuzzleLinkProps {
  puzzleNumber: number;
  title: string;
  description: string;
  locked?: boolean;
  href: string;
}
```

**Features:**
- Next.js `<Link>` wrapping entire card for full-card clickability
- Dark card with border: `bg-gray-900 border border-gray-700`
- Hover effects when unlocked: border glow, slight scale
- Lock icon 🔒 displayed when `locked={true}`

**Locked State:**
- Grayed out: `opacity-50`
- Not clickable: `pointer-events-none`
- Removed from tab order: `tabIndex={-1}`
- Screen reader announcement: "Puzzle 6 - The Haunted Ballroom. Locked. Complete puzzles 1 through 5 first."
- Uses `aria-disabled="true"` and `aria-label` with lock status

**Unlocked State:**
- Full opacity and saturation
- Hover: `border-purple-500 scale-105 transition-all`
- Cursor pointer
- Normal tab order

**Layout:**
```
┌─────────────────────────┐
│  Puzzle 1               │
│  The Dusty Attic        │
│                         │
│  Master heading         │
│  navigation through...  │
└─────────────────────────┘
```

**Accessibility:**
- Semantic `<a>` element (via Next.js Link)
- Clear focus indicator
- Lock status announced to screen readers
- Description provides context about puzzle difficulty/skill

---

## Data Flow & State Management

### Puzzle Page Integration

**Example usage in puzzle pages:**

```typescript
// app/puzzle/1/page.tsx
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

  // Completion handler
  const handlePuzzleComplete = () => {
    puzzleComplete(1, startTime, elapsedTime); // lib function
    setPuzzleSolved(true);
  };

  return (
    <>
      {/* Puzzle content with hidden completion trigger */}
      <button
        onClick={handlePuzzleComplete}
        className="sr-only"
      >
        Complete Puzzle
      </button>

      <PuzzleComplete
        isOpen={puzzleSolved}
        onClose={() => router.push('/start')}
        puzzleNumber={1}
        puzzleTitle="The Dusty Attic"
        description="You've mastered heading navigation..."
        completionTime={formatTime(elapsedTime)}
      />

      <PuzzleFooter
        hintTitle="Need a hint?"
        hintContent="Some structures are hidden from sight but not from sound. Try navigating by headings."
      />
    </>
  );
}
```

### Progress Tracking

**localStorage Structure:**
```javascript
{
  "session_id": "uuid-v4",
  "puzzle_1_complete": "true",
  "puzzle_1_time": "145", // seconds
  "puzzle_2_complete": "true",
  "puzzle_2_time": "203",
  // ... etc for all 6 puzzles
}
```

**puzzleComplete() function (`lib/puzzleComplete.js`):**
1. Generates/retrieves session_id from localStorage
2. Stores `puzzle_X_complete: "true"` and `puzzle_X_time: "seconds"`
3. Posts to `/api/completion` with analytics data
4. Handles localStorage errors gracefully (try/catch)

### Puzzle 6 Unlock Logic

**Implementation in `/start` page:**

```typescript
const isPuzzle6Unlocked = () => {
  try {
    for (let i = 1; i <= 5; i++) {
      if (localStorage.getItem(`puzzle_${i}_complete`) !== 'true') {
        return false;
      }
    }
    return true;
  } catch (e) {
    // If localStorage fails, show as locked (safe default)
    return false;
  }
};

const puzzle6Locked = !isPuzzle6Unlocked();
```

---

## Error Handling & Accessibility

### Error Handling Patterns

**1. localStorage Failures:**
```typescript
// In puzzleComplete.js
try {
  localStorage.setItem(`puzzle_${id}_complete`, 'true');
  localStorage.setItem(`puzzle_${id}_time`, elapsedTime.toString());
} catch (e) {
  console.warn('Progress tracking unavailable:', e);
  // Still allow puzzle completion, just no persistence
  return { success: true, persisted: false };
}
```

- Wrap all localStorage operations in try/catch
- Log warnings but don't block functionality
- Puzzles still completable even if tracking fails

**2. Dialog Focus Management:**
- Radix UI handles focus trap automatically
- On dialog open: focus moves to title element
- On close: focus returns to trigger element
- Escape key always available to close
- No keyboard traps possible

**3. Network Failures:**
- `/api/completion` endpoint catches backend errors
- Returns 200 even if external logging fails
- User experience unaffected by analytics issues

### Accessibility Considerations

**Screen Reader Announcements:**
- PuzzleComplete dialog auto-announces "SUCCESS!" via `aria-labelledby`
- Locked puzzles announce full status including instructions
- Ghost helper clearly labeled as "Get Hint" button
- Timer updates are silent (no live regions) to avoid announcement spam

**Focus Indicators:**
- All focusable elements: `focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black`
- Ghost button: additional glow effect on focus
- Links: underline on focus in addition to ring
- High contrast (white on black) for visibility

**Keyboard Navigation:**
- All interactive elements reachable via Tab key
- Logical tab order following visual/reading order
- Hidden puzzle elements use `sr-only` class (visible to screen readers only)
- No positive tabindex values (breaks natural order)

**ARIA Patterns:**
- Use semantic HTML first (buttons, links, headings)
- ARIA labels only when semantic HTML insufficient
- `aria-live="polite"` for dynamic announcements (if needed)
- `aria-disabled="true"` for locked puzzle cards

---

## Styling & CSS Organization

### CSS Structure in `globals.css`

```css
/* 1. Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 2. Custom font declarations */
@font-face {
  font-family: 'Geist';
  /* ... */
}

@font-face {
  font-family: 'Henny Penny';
  /* ... */
}

/* 3. Ghost animations (from mobile version ghost.css) */
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

/* ... rest of ghost structure ... */

@keyframes floaty {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes zoomy {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}

/* 4. Component-specific styles */
.ghost-helper {
  @apply fixed bottom-8 right-8 z-50;
  @apply bg-transparent border-none cursor-pointer;
  @apply focus:outline-none focus:ring-2 focus:ring-white;
  @apply focus:ring-offset-2 focus:ring-offset-black;
  @apply transition-transform hover:scale-110;
}

.ghost-background {
  @apply absolute inset-0 bg-black/30 rounded-full blur-xl -z-10;
}

/* 5. Utility classes */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden;
  @apply whitespace-nowrap border-0;
  clip: rect(0,0,0,0);
}
```

### Tailwind Theme Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        spooky: {
          purple: '#8b5cf6',
          green: '#10b981',
        }
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        henny: ['var(--font-henny-penny)'],
      }
    }
  }
}
```

### Component Styling Patterns

**Consistent Design Language:**
- Use Tailwind utilities first
- Custom CSS only for animations and complex pseudo-elements (ghost)
- Dark theme throughout: `bg-black`, `bg-gray-900`, `text-white`
- Accent colors: Purple (`#8b5cf6`) for primary actions, Green (`#10b981`) for success
- Consistent spacing scale: `p-4`, `p-6`, `gap-4`
- Border radius: `rounded-lg` for cards/dialogs, `rounded-full` for buttons

**Dark Theme Palette:**
- Primary background: `bg-black` or `bg-gray-950`
- Card backgrounds: `bg-gray-900`
- Borders: `border-gray-700` or `border-gray-800`
- Text: `text-white` for primary, `text-gray-300` for secondary
- Overlays: `bg-black/80` with `backdrop-blur-sm`

---

## Implementation Checklist

### Phase 1 Tasks

- [ ] Create `components/ui/dialog.tsx` (Radix UI wrapper)
- [ ] Create `components/confetti.tsx` (react-confetti wrapper)
- [ ] Create `components/ghost-helper.tsx` (hint button with ghost animation)
- [ ] Create `components/puzzle-complete.tsx` (success dialog)
- [ ] Create `components/puzzle-footer.tsx` (ghost helper + back link)
- [ ] Create `components/puzzle-link.tsx` (puzzle card for grid)
- [ ] Add ghost CSS animations to `globals.css`
- [ ] Add component-specific styles to `globals.css`
- [ ] Create `lib/utils.ts` with `cn()` and `formatTime()`

### Dependencies to Install

```bash
npm install @radix-ui/react-dialog
npm install react-confetti
npm install clsx tailwind-merge  # for cn() utility
```

### Testing Checklist

**Keyboard Accessibility:**
- [ ] All components reachable via Tab key
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes all dialogs
- [ ] Focus indicators visible on all interactive elements
- [ ] No keyboard traps

**Screen Reader Testing:**
- [ ] NVDA (Windows + Firefox): Test all components announce correctly
- [ ] VoiceOver (Mac + Safari): Test all components announce correctly
- [ ] Dialog titles auto-announce on open
- [ ] Locked puzzles announce lock status
- [ ] Ghost helper clearly identified

**Visual Testing:**
- [ ] Dark theme consistent across all components
- [ ] Ghost animation smooth (floaty + zoomy)
- [ ] Confetti colors match theme (purple + green)
- [ ] Focus indicators high contrast
- [ ] Cards hover effects work

**Error Scenarios:**
- [ ] localStorage disabled: components still work
- [ ] Network failure: completion still functions
- [ ] Dialog close returns focus properly

---

## Next Steps

After completing Phase 1 components:

1. **Phase 2: Content** - Use these components in lesson pages
2. **Phase 3: Puzzles** - Integrate into puzzle pages with completion logic
3. **Phase 4: Polish** - Comprehensive screen reader testing and refinement

## References

- Mobile version: `ghost.css` and `ghost-helper.tsx` (already provided)
- Design document: `docs/2026-01-28-desktop-version-design.md`
- Radix UI Dialog: https://www.radix-ui.com/primitives/docs/components/dialog
- react-confetti: https://www.npmjs.com/package/react-confetti
