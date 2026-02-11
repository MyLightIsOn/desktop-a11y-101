# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mystery House Desktop Edition is a screen reader training game that teaches NVDA (Windows) and VoiceOver (Mac) keyboard navigation through 5 progressive lessons and 6 themed puzzle rooms. The game enforces keyboard-only interaction using the principle "don't trust your eyes" - puzzles can only be solved using screen reader output.

## Tech Stack

- **Framework:** Next.js 16.1.4 with App Router
- **UI:** React 19, TypeScript, Tailwind CSS
- **Components:** Radix UI for dialogs
- **Deployment:** Vercel with Vercel Analytics

## Commands

Once the project is initialized, these commands will be available:

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run Next.js linting
```

## Architecture

### Route Structure

The app uses Next.js App Router with the following structure:

- `/` - Home page
- `/getting-started` - Screen reader setup instructions with videos
- `/lessons` - Lessons hub
- `/lessons/[1-5]` - Individual lesson pages with practice areas
- `/start` - Puzzle card grid (6 themed rooms)
- `/puzzle/[1-6]` - Individual puzzle pages
- `/feedback` - Feedback survey
- `/api/completion` - Analytics endpoint for puzzle completion

### Key Components

**`<GhostHelper>`** - Fixed position hint button (bottom-right), the ONLY mouse-clickable element
**`<PuzzleComplete>`** - Success dialog with confetti animation
**`<PuzzleFooter>`** - Contains GhostHelper and back navigation
**`<KeyboardShortcuts>`** - Displays dual NVDA/VoiceOver keyboard shortcuts

### Progress Tracking

Uses localStorage to track puzzle completion:

```javascript
{
  "session_id": "uuid-v4",
  "puzzle_1_complete": "true",
  "puzzle_1_time": "145", // seconds
  // ... etc for all 6 puzzles
}
```

Puzzle 6 unlocks only after completing puzzles 1-5. The `/api/completion` endpoint optionally forwards to external backend at `BACKEND_URL` for analytics.

## Accessibility Requirements

This is an accessibility training app - these requirements are CRITICAL:

### Keyboard-Only Interaction

- **NO mouse required** except for the ghost helper hint button
- All puzzle completion elements must be completely invisible visually
- Hidden elements only discoverable via screen reader using patterns like:
  ```html
  <div class="sr-only">
    <h3>Congratulations! Press Enter to complete.</h3>
  </div>
  ```
- Use semantic HTML first (headings, nav, main, buttons, forms)
- Logical tab order that follows screen reader reading order
- Never use positive tabindex values

### Screen Reader Support

- Test with **Firefox + NVDA** (Windows) and **Safari + VoiceOver** (Mac)
- All lessons and puzzles must work with both screen readers
- Ensure Enter key activates buttons/links in both browse and focus modes
- Verify hidden puzzle elements are discoverable with H key, D key, T key navigation
- Use `aria-live="polite"` for dynamic content announcements

### Dual Keyboard Shortcuts

All lessons must display both NVDA and VoiceOver shortcuts:
- NVDA uses Insert/NVDA key as modifier, single-key quick navigation (H, D, T, F)
- VoiceOver uses Control+Option (VO) keys, rotor (VO+U), and different navigation patterns

## Visual Design

- Dark spooky theme with black/dark gray backgrounds (`#000000` to `#1a1a1a`)
- White text (`#ffffff`) with purple/green accents
- Custom fonts: Geist (body), Henny Penny (decorative titles)
- Background images for each puzzle room (attic, library, corridors, foyer, laboratory, ballroom)
- High contrast focus indicators (white/yellow outlines)
- Responsive for desktop/laptop (1024px+), minimum 768px width

## Development Guidelines

### When Creating Puzzles

Each puzzle teaches a specific screen reader skill:
1. **Puzzle 1 (Attic):** Heading navigation (H key)
2. **Puzzle 2 (Library):** Browse vs Focus mode
3. **Puzzle 3 (Corridors):** Landmark navigation (regions)
4. **Puzzle 4 (Foyer):** Element lists (links list)
5. **Puzzle 5 (Laboratory):** Forms and tables
6. **Puzzle 6 (Ballroom):** Combined challenge

The solution must be hidden from visual users but accessible via screen reader navigation.

### Error Handling

- Wrap localStorage calls in try/catch (may be disabled)
- `/api/completion` should return 200 even if backend logging fails
- No technical detection for screen reader presence - trust users
- Dialogs must trap focus properly and close with Escape key

### Testing Requirements

Manual testing with actual screen readers is REQUIRED:
- **NVDA Testing:** Windows 10/11 with Firefox - verify H, D, T, Insert+F7 shortcuts
- **VoiceOver Testing:** macOS with Safari - verify VO+Cmd+H, VO+U rotor navigation
- Test that both screen readers can complete all puzzles identically
- Verify hidden elements are NOT visually discoverable

## Environment Variables

```bash
BACKEND_URL=http://127.0.0.1:5000              # Development analytics backend
PROD_BACKEND_URL=https://mystery-house-analytics.onrender.com  # Production backend
```

## Critical Principles

1. **Keyboard-only**: Mouse is ONLY for ghost helper button
2. **Screen reader first**: Visual layout is secondary to screen reader experience
3. **No cheating**: Puzzle solutions must be impossible to find visually
4. **Dual support**: Every feature works with both NVDA and VoiceOver
5. **Workshop-ready**: Designed for facilitated learning environments
