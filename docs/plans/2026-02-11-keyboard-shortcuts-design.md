# KeyboardShortcuts Component Design

**Date:** 2026-02-11
**Issue:** #6 - Phase 2: Create KeyboardShortcuts component
**Status:** Design Complete

## Overview

Create a reusable component system for displaying screen reader keyboard shortcuts in lesson pages. Users select their screen reader (NVDA or VoiceOver) once via a global toggle, and all shortcut displays automatically show only the relevant shortcuts for their chosen screen reader.

## Components

### 1. ScreenReaderToggle (Global)

**Location:** `components/screen-reader-toggle.tsx`
**Placement:** Top-right corner of app layout

**Purpose:** Allow users to select their screen reader preference once, persisting the choice across all pages.

**Props:** None (self-contained)

**State:**
- Internal React state for current selection
- Syncs with localStorage on mount and on change
- Default: "nvda"

**Behavior:**
1. On mount: Read `screenReaderPreference` from localStorage (default: "nvda")
2. On toggle click: Update state + localStorage
3. Dispatch custom storage event to trigger re-renders in KeyboardShortcuts components

**Visual Design:**
- Segmented control with two buttons side-by-side
- Active button: Purple background (`bg-spooky-purple`), white text
- Inactive button: Transparent background, gray text (`text-gray-400`)
- Smooth transition on switch
- Fixed position in top-right of layout

**Accessibility:**
- `role="radiogroup"` on container
- `role="radio"` on each option
- `aria-checked` to indicate current selection
- `aria-label="Screen Reader Preference"` on container
- Keyboard accessible: Tab to focus, Arrow keys to switch, Enter/Space to activate
- High contrast focus ring

### 2. KeyboardShortcuts (Display Component)

**Location:** `components/keyboard-shortcuts.tsx`

**Purpose:** Display a single keyboard shortcut based on the user's selected screen reader preference.

**Props Interface:**
```typescript
interface KeyboardShortcutsProps {
  description: string;      // What the shortcut does
  nvdaShortcut?: string;    // NVDA shortcut (e.g., "H")
  voShortcut?: string;      // VoiceOver shortcut (e.g., "VO+Cmd+H")
}
```

**Behavior:**
1. On mount: Read `screenReaderPreference` from localStorage
2. Listen for storage events to update when toggle changes
3. Display only the relevant shortcut based on preference
4. Parse shortcut string (split on `+`) into individual `<kbd>` elements

**Display Logic:**
- If preference is "nvda" and `nvdaShortcut` exists → show NVDA shortcut
- If preference is "nvda" and `nvdaShortcut` is undefined → show "Not available in NVDA"
- Same logic for VoiceOver
- "Not available" message styled in muted gray

**Shortcut Parsing:**
- Split string on `+` character
- Trim whitespace from each part
- Render each part as a `<kbd>` element
- Insert `+` span between keys (not inside kbd)

**Example Usage:**
```tsx
<KeyboardShortcuts
  description="Navigate to next heading"
  nvdaShortcut="H"
  voShortcut="VO+Cmd+H"
/>
```

**Example Rendering (NVDA selected):**
```
Navigate to next heading
[H]
```

**Example Rendering (VoiceOver selected):**
```
Navigate to next heading
[VO]+[Cmd]+[H]
```

## Data Flow

### localStorage Key
- **Key:** `"screenReaderPreference"`
- **Values:** `"nvda"` | `"voiceover"`
- **Default:** `"nvda"` (if not set or localStorage disabled)

### Flow Diagram

```
User clicks toggle
     ↓
ScreenReaderToggle updates state
     ↓
Write to localStorage
     ↓
Dispatch storage event
     ↓
All KeyboardShortcuts components listen
     ↓
Re-read localStorage
     ↓
Update displayed shortcut
     ↓
Re-render
```

### Cross-Tab Sync
- Storage events naturally sync across browser tabs
- All lesson pages stay in sync with toggle preference
- Consistent experience across multiple tabs

### Custom Hook (Optional Utility)

```typescript
function useScreenReaderPreference(): 'nvda' | 'voiceover' {
  const [preference, setPreference] = useState<'nvda' | 'voiceover'>('nvda');

  useEffect(() => {
    // Read from localStorage on mount
    const stored = localStorage.getItem('screenReaderPreference');
    if (stored === 'nvda' || stored === 'voiceover') {
      setPreference(stored);
    }

    // Listen for changes (from toggle or other tabs)
    const handleStorageChange = () => {
      const updated = localStorage.getItem('screenReaderPreference');
      if (updated === 'nvda' || updated === 'voiceover') {
        setPreference(updated);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return preference;
}
```

Both components can use this hook for consistent behavior.

### Error Handling
- If localStorage is disabled: Fall back to "nvda" default
- Wrap localStorage access in try-catch
- No crashes, graceful degradation
- Console warning if localStorage fails

## Styling

### ScreenReaderToggle

```css
Container:
  - position: fixed
  - top: 1rem, right: 1rem
  - z-index: 40
  - display: flex
  - gap: 0
  - border-radius: 0.5rem
  - overflow: hidden

Buttons:
  - px-4 py-2
  - transition-colors
  - font-semibold
  - cursor-pointer

Active state:
  - bg-spooky-purple (#8b5cf6)
  - text-white

Inactive state:
  - bg-transparent
  - text-gray-400
  - hover:text-gray-300

Focus state:
  - ring-2 ring-white
  - ring-offset-2 ring-offset-black
```

### KeyboardShortcuts

```css
Container:
  - display: block
  - margin-bottom: 1rem

Description:
  - color: text-gray-300
  - margin-bottom: 0.5rem

<kbd> elements:
  - display: inline-block
  - px-2 py-1
  - border: 2px solid #8b5cf6 (spooky-purple)
  - border-radius: 0.25rem
  - bg-gray-900
  - color: white
  - font-family: monospace
  - font-size: 0.875rem
  - box-shadow: 0 2px 4px rgba(0,0,0,0.3) (raised effect)

+ separator:
  - color: text-gray-500
  - margin: 0 0.25rem

"Not available" message:
  - color: text-gray-600
  - font-style: italic
  - font-size: 0.875rem
```

### Responsive Design

**ScreenReaderToggle:**
- Desktop: Full size, top-right
- Mobile: Slightly smaller text, stays fixed
- Consider making it slightly smaller on mobile (text-sm)

**KeyboardShortcuts:**
- Full width on all screen sizes
- Stacks naturally in lesson content
- No special responsive handling needed

## Accessibility

### ScreenReaderToggle
- `role="radiogroup"` on container
- `aria-label="Screen Reader Preference"` on container
- Each button has `role="radio"`
- Each button has `aria-checked="true"` or `"false"`
- Keyboard navigation:
  - Tab to focus the group
  - Arrow keys (Left/Right) to move between options
  - Enter or Space to select
- High contrast focus indicators (white ring)
- Clear visual distinction between selected/unselected

### KeyboardShortcuts
- Description text readable and clear
- Semantic `<kbd>` tags for keyboard shortcuts
- Screen readers announce naturally: "Navigate to next heading. Shortcut: H"
- No ARIA overrides needed (native HTML semantics sufficient)
- Keyboard shortcuts render as inline elements in reading flow
- "Not available" message clearly communicated

### General
- No animations or motion (respects prefers-reduced-motion)
- High contrast text and borders
- Focus indicators meet WCAG AAA standards
- All interactive elements keyboard accessible
- No keyboard traps

## File Structure

```
components/
  screen-reader-toggle.tsx     (new - global toggle)
  keyboard-shortcuts.tsx        (new - shortcut display)

app/
  layout.tsx                    (modify - add ScreenReaderToggle)

lib/
  hooks/
    use-screen-reader-preference.ts  (optional - shared hook)
```

## Integration with Layout

Modify `app/layout.tsx` to include the ScreenReaderToggle:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${hennyPenny.variable} font-geist antialiased bg-black text-white`}>
        <ScreenReaderToggle />
        {children}
      </body>
    </html>
  );
}
```

## Usage Example in Lesson Pages

```tsx
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

export default function Lesson1() {
  return (
    <main>
      <h1>Lesson 1: Screen Reader Basics</h1>

      <p>Learn how to navigate by headings:</p>

      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />

      <p>Practice navigating the headings below...</p>

      <KeyboardShortcuts
        description="Navigate to previous heading"
        nvdaShortcut="Shift+H"
        voShortcut="VO+Cmd+Shift+H"
      />

      {/* NVDA-only feature example */}
      <KeyboardShortcuts
        description="Open elements list"
        nvdaShortcut="Insert+F7"
        voShortcut={undefined}  // Shows "Not available in VoiceOver"
      />
    </main>
  );
}
```

## Testing Checklist

- [ ] ScreenReaderToggle renders in top-right corner
- [ ] Toggle switches between NVDA and VoiceOver
- [ ] Selection persists in localStorage
- [ ] Selection persists across page navigation
- [ ] KeyboardShortcuts displays correct shortcut based on toggle
- [ ] Shortcuts parse correctly (e.g., "VO+Cmd+H" → 3 kbd elements)
- [ ] "Not available" message shows when shortcut is undefined
- [ ] Keyboard navigation works (Tab, Arrow keys, Enter)
- [ ] Focus indicators visible and high contrast
- [ ] Screen reader announces toggle and shortcuts correctly
- [ ] Works with localStorage disabled (falls back to NVDA)
- [ ] Cross-tab sync works (change in one tab updates others)
- [ ] Visual styling matches spooky theme
- [ ] Responsive on mobile devices
- [ ] No console errors

## Implementation Notes

### Parsing Complex Shortcuts

Handle various shortcut formats:
- Single key: `"H"` → `<kbd>H</kbd>`
- Multiple keys: `"Ctrl+H"` → `<kbd>Ctrl</kbd>+<kbd>H</kbd>`
- VoiceOver keys: `"VO+Cmd+H"` → `<kbd>VO</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd>`

### localStorage Edge Cases

1. **Disabled localStorage:** Catch errors, fall back to default
2. **Invalid values:** Validate stored value, fall back to default
3. **First visit:** Initialize with "nvda" default

### Component Reusability

The KeyboardShortcuts component should be:
- Lightweight (no heavy dependencies)
- Self-contained (doesn't require parent state)
- Flexible (works anywhere in lesson content)
- Consistent (always reads from same localStorage key)

## Future Enhancements (Post-MVP)

- Add a third option for "Both" to show both shortcuts simultaneously
- Add visual icons (Windows logo for NVDA, Apple logo for VoiceOver)
- Add tooltip on hover explaining what VO keys mean
- Support for alternative formats (e.g., JAWS shortcuts if needed)
- Analytics tracking: Which screen reader do most users choose?

## Success Criteria

✅ Users can set their screen reader preference once
✅ Preference persists across all lesson pages
✅ Only relevant shortcuts displayed (reduces cognitive load)
✅ Keyboard shortcuts visually distinct and recognizable
✅ Fully keyboard accessible
✅ Screen reader compatible (announces correctly)
✅ No breaking changes to existing components
✅ Reusable across all 5 lesson pages

---

**Next Steps:**
1. Create implementation plan
2. Build ScreenReaderToggle component
3. Build KeyboardShortcuts component
4. Create optional useScreenReaderPreference hook
5. Integrate toggle into layout
6. Test with NVDA and VoiceOver
7. Document usage for future lesson pages
