import { render, screen, act } from '@testing-library/react';
import KeyboardShortcuts from '../keyboard-shortcuts';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('KeyboardShortcuts', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('displays NVDA shortcut when NVDA is selected', () => {
    localStorageMock.setItem('screenReaderPreference', 'nvda');

    render(
      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />
    );

    expect(screen.getByText('Navigate to next heading')).toBeInTheDocument();
    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.queryByText('VO')).not.toBeInTheDocument();
  });

  test('displays VoiceOver shortcut when VoiceOver is selected', () => {
    localStorageMock.setItem('screenReaderPreference', 'voiceover');

    render(
      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />
    );

    expect(screen.getByText('Navigate to next heading')).toBeInTheDocument();
    expect(screen.getByText('VO')).toBeInTheDocument();
    expect(screen.getByText('Cmd')).toBeInTheDocument();
    expect(screen.getByText('H')).toBeInTheDocument();
  });

  test('shows "Not available" when shortcut does not exist for selected screen reader', () => {
    localStorageMock.setItem('screenReaderPreference', 'voiceover');

    render(
      <KeyboardShortcuts
        description="Open elements list"
        nvdaShortcut="Insert+F7"
      />
    );

    expect(screen.getByText('Open elements list')).toBeInTheDocument();
    expect(screen.getByText(/not available in voiceover/i)).toBeInTheDocument();
  });

  test('defaults to NVDA when localStorage is empty', () => {
    render(
      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />
    );

    expect(screen.getByText('Navigate to next heading')).toBeInTheDocument();
    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.queryByText('VO')).not.toBeInTheDocument();
  });

  test('updates when storage event is triggered', () => {
    localStorageMock.setItem('screenReaderPreference', 'nvda');

    const { rerender } = render(
      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />
    );

    expect(screen.getByText('H')).toBeInTheDocument();

    // Simulate toggle change
    act(() => {
      localStorageMock.setItem('screenReaderPreference', 'voiceover');
      window.dispatchEvent(new Event('storage'));
    });

    rerender(
      <KeyboardShortcuts
        description="Navigate to next heading"
        nvdaShortcut="H"
        voShortcut="VO+Cmd+H"
      />
    );

    expect(screen.getByText('VO')).toBeInTheDocument();
    expect(screen.getByText('Cmd')).toBeInTheDocument();
  });
});
