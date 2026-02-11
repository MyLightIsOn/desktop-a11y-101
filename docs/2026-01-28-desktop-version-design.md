# Mystery House Desktop Edition - Design Document

**Date:** January 28, 2026
**Purpose:** Desktop screen reader training game teaching NVDA (Windows) and VoiceOver (Mac) keyboard navigation
**Workshop:** Designed for facilitated workshop environments

## Overview

Mystery House Desktop Edition is a sequel to the mobile screen reader training game. It teaches desktop screen reader skills (NVDA on Windows, VoiceOver on Mac) through 5 progressive lessons and 6 themed puzzle rooms. The game maintains the "don't trust your eyes" principle - puzzles can only be solved using keyboard navigation and screen reader output.

### Key Design Principles

- **Keyboard-only interaction** - No mouse required except for the ghost helper hint button
- **Dual screen reader support** - All instructions show both NVDA and VoiceOver shortcuts
- **Progressive skill building** - Each lesson teaches a concept, each puzzle reinforces it
- **Workshop-ready** - Facilitator provides verbal guidance, videos supplement
- **Same spooky theme** - Continuation of Mystery House aesthetic and ghost helper

## Architecture

### Tech Stack

- **Framework:** Next.js 16.1.4 with App Router
- **UI:** React 19, Tailwind CSS, TypeScript
- **Components:** Radix UI (dialogs)
- **Deployment:** Vercel with Vercel Analytics
- **Analytics:** Optional backend logging (same as mobile version)

### Project Structure

```
mobile-a11y-desktop/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, Analytics
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles, animations
│   ├── getting-started/
│   │   └── page.tsx              # Setup instructions & videos
│   ├── lessons/
│   │   ├── page.tsx              # Lessons hub
│   │   ├── 1/page.tsx            # Lesson 1: Basics
│   │   ├── 2/page.tsx            # Lesson 2: Headings
│   │   ├── 3/page.tsx            # Lesson 3: Browse/Focus
│   │   ├── 4/page.tsx            # Lesson 4: Quick Nav
│   │   └── 5/page.tsx            # Lesson 5: Forms/Tables
│   ├── start/
│   │   └── page.tsx              # Puzzle grid (6 cards)
│   ├── puzzle/
│   │   ├── 1/page.tsx            # Puzzle 1: Attic
│   │   ├── 2/page.tsx            # Puzzle 2: Library
│   │   ├── 3/page.tsx            # Puzzle 3: Corridors
│   │   ├── 4/page.tsx            # Puzzle 4: Foyer
│   │   ├── 5/page.tsx            # Puzzle 5: Laboratory
│   │   └── 6/page.tsx            # Puzzle 6: Ballroom
│   ├── feedback/
│   │   └── page.tsx              # Feedback form
│   └── api/
│       └── completion/
│           └── route.js          # Analytics endpoint
├── components/
│   ├── ui/
│   │   └── dialog.tsx            # Radix UI Dialog wrapper
│   ├── ghost-helper.tsx          # Hint button component
│   ├── puzzle-complete.tsx       # Success dialog
│   ├── puzzle-footer.tsx         # Footer with ghost & back link
│   ├── puzzle-link.tsx           # Puzzle card for grid
│   ├── confetti.tsx              # Celebration animation
│   └── keyboard-shortcuts.tsx    # Dual shortcut display
├── lib/
│   ├── utils.ts                  # cn(), formatTime()
│   ├── puzzleComplete.js         # Completion handler
│   └── logger.js                 # Backend API logger
└── public/
    ├── attic.webp               # Puzzle backgrounds
    ├── library.webp
    ├── corridors.webp
    ├── foyer.webp
    ├── laboratory.webp
    ├── ballroom.webp
    ├── entryway.webp
    └── videos/
        ├── nvda-setup.mp4
        └── voiceover-setup.mp4
```

### App Routes

- `/` - Home page
- `/getting-started` - Screen reader setup instructions with videos
- `/lessons` - Lessons hub page
- `/lessons/1-5` - Individual lesson pages with practice areas
- `/start` - Puzzle card grid (6 themed rooms)
- `/puzzle/1-6` - Individual puzzle pages
- `/feedback` - Feedback survey page
- `/api/completion` - Analytics endpoint

## Lessons Structure

Each lesson includes:
1. Video tutorial demonstrating the concept
2. Practice area with interactive elements
3. Dual keyboard shortcuts (NVDA and VoiceOver)

### Lesson 1: Screen Reader Basics
**Concepts:**
- Turning on screen reader (NVDA: Ctrl+Alt+N, VO: Cmd+F5)
- Reading line-by-line (arrow keys)
- Reading all (NVDA: NVDA+Down Arrow, VO: VO+A)
- Stopping speech (Control key)

**Practice:** Simple page with multiple paragraphs to practice reading through

### Lesson 2: Headings Navigation
**Concepts:**
- Using H key (NVDA) or VO+Cmd+H (VoiceOver) to jump to next heading
- Shift+H to go backward
- Heading hierarchy (H1-H6)

**Practice:** Page with nested headings in various levels to navigate through

### Lesson 3: Browse vs Focus Mode
**Concepts:**
- Browse mode (reading/navigating) vs focus mode (interacting)
- Enter to activate and switch modes
- Escape to exit focus mode back to browse
- Understanding when mode switches happen

**Practice:** Mix of text, links, and buttons demonstrating mode transitions

### Lesson 4: Quick Navigation
**Concepts:**
- Tab key for interactive elements
- Landmarks navigation (D key in NVDA, VO+U for rotor on Mac)
- Links list (NVDA: Insert+F7)
- Element lists

**Practice:** Page with multiple navigation landmarks, lists of links, skip links

### Lesson 5: Forms and Tables
**Concepts:**
- Form field navigation (Tab/Shift+Tab, F/Shift+F for forms mode)
- Table navigation (T key for tables, Ctrl+Alt+Arrow keys for cells in NVDA, VO+arrows in VO)
- Understanding row/column headers

**Practice:** Sample form and data table to navigate

## Puzzles Design

Each puzzle reinforces the corresponding lesson's skill using themed "rooms" in the mystery house.

### Puzzle 1: The Dusty Attic (Headings Navigation)
**Room theme:** Dark attic filled with old trunks and cobwebs

**Mechanic:** Hidden headings scattered through decoy paragraphs. User must navigate by headings (H key) to find the success heading, avoiding the trap of arrowing through hundreds of useless paragraphs.

**Completion:** User finds and activates (Enter/Space) the final heading that says "Congratulations! Double-tap to continue"

**Hint:** "Some structures are hidden from sight but not from sound. Try navigating by headings."

### Puzzle 2: The Mysterious Library (Browse vs Focus Mode)
**Room theme:** Ancient library with enchanted books

**Mechanic:** Page with multiple interactive elements (links, buttons). Some elements are red herrings that only work in focus mode. Users must understand when to press Enter to interact vs when to just navigate with arrows.

**Completion:** Find the correct "secret book" button and activate it properly

**Hint:** "Not everything needs your focus. Some things you just read past."

### Puzzle 3: The Winding Corridors (Quick Navigation - Landmarks)
**Room theme:** Maze-like hallways with multiple rooms

**Mechanic:** Page has multiple `<nav>`, `<main>`, `<aside>` landmarks representing different corridors. User must jump between landmarks to find the correct path.

**Completion:** Navigate to the correct landmark region and activate hidden element

**Hint:** "Lost in a maze? Jump between major areas rather than reading every step."

### Puzzle 4: The Grand Foyer (Quick Navigation - Links and Element Lists)
**Room theme:** Ornate entrance hall with portraits and decorative elements

**Mechanic:** Page filled with many links and interactive elements. The visual layout is confusing/misleading, but using the links list (NVDA: Insert+F7, VO: VO+U > Links) reveals the correct link to activate.

**Completion:** User opens element list, finds the specific link by name, and activates it

**Hint:** "Too many doors to try one by one. See a list of all your options at once."

### Puzzle 5: The Alchemist's Laboratory (Forms and Tables)
**Room theme:** Dark laboratory with bubbling potions and ingredient tables

**Mechanic:** Hidden form fields within a data table. Users must navigate the table structure (T key to find table, Ctrl+Alt+arrows to move through cells) to find form inputs, then properly fill them out in focus mode.

**Completion:** Successfully navigate table, find all hidden form fields, fill them correctly, submit the form

**Hint:** "Ingredients are organized in rows and columns. Navigate the structure, not just the content."

### Puzzle 6: The Haunted Ballroom (Combined Challenge)
**Room theme:** Grand ballroom with ghosts dancing, the final challenge

**Mechanic:** Combines all previous skills - requires heading navigation to find sections, landmark jumping to reach different areas, understanding browse/focus mode for interactions, table navigation to decode a message, and form submission to complete.

**Completion:** Multi-step puzzle requiring all learned techniques in sequence

**Unlock:** Only unlocks after completing puzzles 1-5 (same localStorage check as mobile version)

**Hint:** "Use everything you've learned. Read the structure, jump wisely, interact carefully."

## Data Flow & State Management

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

**Completion Flow:**
1. Each puzzle page tracks start time with `useState` and `useEffect` interval
2. When user completes puzzle action, call `puzzleComplete(puzzleId, startTime, elapsedTime)`
3. Function stores completion flag and time in localStorage, generates/retrieves session_id
4. POST to `/api/completion` with session data, puzzle ID, timestamps, device type (Windows/Mac)
5. Optional: API route forwards to external backend at `BACKEND_URL` for analytics

**Puzzle 6 Unlock:**
- `/start` page checks localStorage on mount
- Verifies `puzzle_1_complete` through `puzzle_5_complete` all exist
- If incomplete, Puzzle 6 card shows locked state (visually grayed, screen reader announces "Locked - Complete puzzles 1-5 first")

**Navigation State:**
- No global state needed
- Each page is independent
- Users can navigate freely between lessons and completed puzzles

## Accessibility Implementation

### Keyboard-Only Interaction

**Preventing Mouse/Visual Cheating:**
All puzzle completion elements must be completely invisible and only discoverable via screen reader:

```html
<!-- Screen reader only pattern -->
<div class="sr-only">
  <h3>Congratulations! Press Enter to complete the puzzle.</h3>
</div>

<!-- Visually hidden but focusable -->
<button class="opacity-0 absolute w-0 h-0 overflow-hidden"
        aria-label="Secret completion button">
  Complete
</button>
```

**Ghost Helper Exception:**
The ghost helper button is the ONLY element that can be clicked with a mouse:
- Visible on screen (positioned bottom-right)
- Focusable via Tab key
- Activatable with Enter/Space
- Announced as "Get Hint" to screen readers
- Opens Radix UI Dialog with keyboard trap

**Tab Order Management:**
- Ensure logical tab order follows screen reader reading order
- Use `tabindex="0"` only when necessary for custom interactive elements
- Never use positive tabindex values
- Hidden puzzle elements should be in DOM but not in tab order initially

### Screen Reader Specific Considerations

**ARIA Patterns:**
- Use semantic HTML first (headings, nav, main, buttons, forms)
- Add ARIA labels only when semantic HTML isn't sufficient
- Live regions for dynamic content: `aria-live="polite"`
- Clear focus indicators for sighted keyboard users

**Browser/Screen Reader Compatibility:**
- Test primarily in Firefox + NVDA (Windows) and Safari + VoiceOver (Mac)
- Ensure interactive elements work in both browse and focus modes
- Verify Enter key activates buttons/links properly
- Test form elements properly announce labels and validation

## Visual Design & Theming

### Theme and Visual Style

**Spooky Mystery House Aesthetic:**
- Dark backgrounds (black/dark grays) with atmospheric imagery
- Custom fonts: Geist (body text), Henny Penny (decorative/titles)
- Haunted house themed rooms: attic, library, corridors, foyer, laboratory, ballroom
- Background images for each puzzle room
- CSS animations for atmospheric effects (floating dust, flickering lights, animated eyes)

**Ghost Helper Design:**
- Reuse mobile ghost animation CSS
- Positioned fixed bottom-right corner
- Animated floating/bobbing effect
- Glows on hover/focus for keyboard users
- High contrast focus indicator (white outline)

**Color Palette:**
- Background: `#000000` to `#1a1a1a` (dark blacks/grays)
- Text: `#ffffff` (white for readability)
- Accents: Purple/green hues (`#8b5cf6`, `#10b981`)
- Focus indicators: Bright white or yellow (`#ffffff`, `#fbbf24`)

**Responsive Design:**
- Optimized for 1024px+ screens (desktop/laptop)
- Minimum width: 768px (tablet landscape)
- No mobile phone optimization needed

### Confetti and Celebrations

**Puzzle Completion:**
- Confetti animation (`react-confetti-boom`)
- Success dialog with "SUCCESS!" title (Henny Penny font)
- Description of what was learned
- "OK" button returns to `/start` puzzle grid
- Dialog auto-focuses for screen reader announcement

## Getting Started Page

**Content Structure:**

1. **Welcome section** - Brief intro to Mystery House Desktop Edition

2. **Screen Reader Setup Instructions:**
   - **For Windows (NVDA):**
     - Download link to nvaccess.org
     - Installation steps with screenshots
     - How to start NVDA (Ctrl+Alt+N)
     - Basic modifier key explanation (Insert or NVDA key)

   - **For Mac (VoiceOver):**
     - System Preferences > Accessibility > VoiceOver
     - Quick start: Cmd+F5
     - VO key explanation (Control+Option)
     - Safari recommendation

3. **Video Tutorials:**
   - NVDA installation and first launch
   - VoiceOver activation on Mac
   - Basic navigation demo for each screen reader
   - Videos have captions and transcripts

4. **Browser Recommendations:**
   - Firefox recommended for NVDA users
   - Safari required for VoiceOver users
   - Chrome works but Firefox preferred for NVDA

5. **How to Play:**
   - Start with lessons to learn techniques
   - Practice in the lesson playgrounds
   - Solve puzzles to test your skills
   - Keyboard only - mouse is only for ghost helper
   - Hints available via ghost button

6. **Quick Reference Card:**
   - Common keyboard shortcuts table (NVDA and VoiceOver columns)
   - Printable/downloadable PDF option

## Component Architecture

### Core Components

**`<GhostHelper>`**
```typescript
interface GhostHelperProps {
  dialogContent: {
    title: string;
    description: ReactNode;
  };
}
```
- Fixed position bottom-right
- Mouse-clickable button with ghost animation
- Opens Radix UI Dialog with hint content
- Keyboard accessible (Tab + Enter)

**`<PuzzleComplete>`**
```typescript
interface PuzzleCompleteProps {
  dialogContent: {
    puzzleNumber: number;
    description: ReactNode;
  };
  puzzleSolved: boolean;
}
```
- Auto-opens when `puzzleSolved` state becomes true
- Shows confetti animation
- Displays success message and learning description
- "OK" button returns to /start

**`<PuzzleFooter>`**
```typescript
interface PuzzleFooterProps {
  dialogContent?: {
    title: string;
    description: ReactNode;
  };
  url?: string;
}
```
- Contains GhostHelper if dialogContent provided
- Keyboard-accessible back link
- High contrast focus styles

**`<KeyboardShortcuts>`**
```typescript
interface KeyboardShortcutsProps {
  nvdaShortcut: string;
  voShortcut: string;
  description: string;
}
```
- New component for showing dual shortcuts in lessons
- Displays both NVDA and VoiceOver shortcuts side-by-side
- Screen reader accessible table or description list

### Utility Functions

**`lib/puzzleComplete.js`**
- Handles localStorage, session_id generation
- Posts to /api/completion endpoint
- Device type detection (Windows/Mac)

**`lib/utils.ts`**
- `cn()` for className merging
- `formatTime()` for elapsed time display

## Error Handling & Edge Cases

### Error Scenarios

**Screen Reader Not Running:**
- No technical detection or blocking
- Getting Started page emphasizes screen reader requirement
- Trust users to follow instructions

**Browser Compatibility Issues:**
- Display subtle warning for unsupported browsers (IE, very old browsers)
- Recommend Firefox (NVDA) or Safari (VoiceOver) but don't block
- No warnings for Chrome/Edge

**localStorage Disabled:**
- Wrap localStorage calls in try/catch
- If fails, puzzles still work but progress doesn't persist
- Show message: "Progress tracking unavailable. You can still complete all puzzles."

**Backend Analytics Failure:**
- `/api/completion` catches errors from external backend
- Returns 200 success even if backend logging fails
- User experience unaffected

**Puzzle State Edge Cases:**
- Refresh mid-puzzle resets timer (acceptable)
- Completed puzzles can be replayed
- Corrupted localStorage worst case is progress reset

**Keyboard Trap Issues:**
- Dialogs trap focus properly using Radix UI
- Escape key always closes dialogs and returns focus
- Ghost helper and back links always accessible

## Testing Strategy

### Manual Screen Reader Testing

**NVDA Testing (Windows):**
- Test environment: Windows 10/11 with Firefox
- Verify all keyboard shortcuts (H, D, T, Insert+F7, etc.)
- Test browse mode vs focus mode transitions
- Confirm Enter activates buttons/links
- Verify form fields announce labels
- Test tab order follows logical reading order
- Confirm ghost helper accessible and dialogs trap focus

**VoiceOver Testing (Mac):**
- Test environment: macOS with Safari
- Verify VO shortcuts (VO+Cmd+H, VO+U, VO+arrows)
- Test interactive elements announce properly
- Confirm rotor shows correct element lists
- Verify form mode transitions
- Test keyboard navigation with VO keys

**Cross-Screen Reader Consistency:**
- Both screen readers can complete all puzzles
- Instructions showing both shortcuts are accurate
- Hidden elements discoverable with both screen readers
- Puzzle completion mechanics work identically

### Functional Testing Checklist

**Lesson Pages:**
- [ ] Videos load and play correctly
- [ ] Practice areas are keyboard accessible
- [ ] Both NVDA and VO shortcuts display correctly
- [ ] Navigation between lessons works

**Puzzle Pages:**
- [ ] Each puzzle completable using only keyboard
- [ ] Hidden elements not visually discoverable
- [ ] Ghost helper is mouse-clickable and keyboard-accessible
- [ ] Hints display correctly in dialog
- [ ] Completion triggers confetti and success dialog
- [ ] Progress saves to localStorage
- [ ] Timer tracks elapsed time accurately

## Deployment & Environment

### Deployment Configuration

**Hosting Platform:**
- Deploy to Vercel
- Separate GitHub repository from mobile version
- Automatic deployments on main branch push
- Preview deployments for pull requests

**Environment Variables:**
```
BACKEND_URL=http://127.0.0.1:5000
PROD_BACKEND_URL=https://mystery-house-analytics.onrender.com
```

**Build Configuration:**
```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

**Next.js Config:**
```typescript
const nextConfig = {
  devIndicators: false
}
```

### Analytics Integration

**Backend API Schema:**
```javascript
{
  session_id: "uuid",
  puzzle_id: "puzzle_1",
  start_time: "ISO timestamp",
  end_time: "ISO timestamp",
  device_type: "Windows" | "Mac" | "desktop"
}
```

**Device Detection:**
```javascript
function getDeviceType() {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac/i.test(ua)) return "Mac";
  return "desktop";
}
```

**Vercel Analytics:**
- Include `@vercel/analytics` in root layout
- Provides basic usage metrics (page views, user counts)

## Content Creation Requirements

### Assets Needed

**Background Images (public/):**
- `attic.webp` - Dusty attic with cobwebs, old trunks
- `library.webp` - Ancient library with bookshelves
- `corridors.webp` - Winding maze-like hallways
- `foyer.webp` - Grand entrance hall with portraits
- `laboratory.webp` - Alchemist's lab with potions
- `ballroom.webp` - Haunted ballroom with ghost shadows
- `entryway.webp` - Puzzle grid background

All images:
- WebP format for performance
- Dark/spooky aesthetic
- Fixed background compatible
- 1920px+ width for desktop displays

**Video Tutorials (public/videos/):**

**NVDA Setup Video (~2-3 minutes):**
- nvaccess.org download
- Installation walkthrough
- First launch and configuration
- Demo of Insert key modifier and arrow reading
- Captions and audio description

**VoiceOver Setup Video (~2-3 minutes):**
- System Preferences on Mac
- Enable VoiceOver in Accessibility
- Cmd+F5 quick start
- Demo of VO keys and basic navigation
- Captions and audio description

**CSS Animations:**
- Reuse from mobile version: ghost floating, eye animations, atmospheric effects

## Workshop-Specific Considerations

### Workshop Facilitation Features

**Pre-Workshop Setup:**
- Provide setup checklist for participants:
  - Install NVDA (Windows) or enable VoiceOver (Mac)
  - Use Firefox (NVDA) or Safari (VoiceOver)
  - Test screen reader on simple webpage
  - Have headphones ready

**Live Workshop Flow:**
1. Participants navigate to getting-started page
2. Facilitator verbally guides through screen reader activation
3. Participants work through Lesson 1
4. After each lesson, attempt corresponding puzzle
5. Ghost helper available for stuck participants
6. Feedback form at end

**Multiple Participant Sessions:**
- Each participant gets unique session_id in localStorage
- Shared computers should use private/incognito mode
- Analytics backend tracks multiple sessions from same IP

**Offline Capability:**
- App works fully offline after initial load
- Videos hosted reliably (Vercel or CDN)
- Pre-load site on all machines if poor WiFi

**Accessibility for Sighted Facilitator:**
- Visual layout visible while presenting
- Ghost helper visible for demonstrating hints
- Focus indicators visible for debugging
- Console logs for troubleshooting

## Implementation Phases

### Phase 1: Foundation
- Set up Next.js project with same stack as mobile
- Configure Tailwind, fonts, basic layout
- Create component structure (GhostHelper, PuzzleComplete, PuzzleFooter)
- Implement localStorage progress system

### Phase 2: Content
- Getting Started page with setup instructions
- Create 5 lesson pages with practice areas
- Add KeyboardShortcuts component for dual instructions
- Embed/link tutorial videos

### Phase 3: Puzzles
- Build 6 puzzle pages with themed rooms
- Implement puzzle mechanics (hidden elements, forms, tables)
- Add completion triggers and analytics
- Create background images for each room

### Phase 4: Polish
- Screen reader testing with NVDA and VoiceOver
- Focus indicator refinement
- Ghost animations and atmospheric CSS
- Feedback page implementation

## Summary

Mystery House Desktop Edition teaches desktop screen reader skills (NVDA and VoiceOver) through 5 progressive lessons and 6 themed puzzle rooms. The game maintains keyboard-only interaction with dual screen reader support, uses localStorage for progress tracking, and is optimized for workshop facilitation. Built with Next.js 16, React 19, and Tailwind CSS, deployed on Vercel.

The design keeps the same spooky mystery house theme and ghost helper from the mobile version while introducing desktop-specific concepts like browse vs focus mode, landmark navigation, element lists, and table navigation.
