import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScreenReaderToggle from '../screen-reader-toggle';

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

describe('ScreenReaderToggle', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('renders both NVDA and VoiceOver options', () => {
    render(<ScreenReaderToggle />);

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /nvda/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /voiceover/i })).toBeInTheDocument();
  });

  test('NVDA is selected by default', () => {
    render(<ScreenReaderToggle />);

    const nvdaButton = screen.getByRole('radio', { name: /nvda/i });
    const voButton = screen.getByRole('radio', { name: /voiceover/i });

    expect(nvdaButton).toHaveAttribute('aria-checked', 'true');
    expect(voButton).toHaveAttribute('aria-checked', 'false');
  });

  test('clicking VoiceOver switches preference and saves to localStorage', async () => {
    const user = userEvent.setup();
    render(<ScreenReaderToggle />);

    const voButton = screen.getByRole('radio', { name: /voiceover/i });
    await user.click(voButton);

    expect(voButton).toHaveAttribute('aria-checked', 'true');
    expect(localStorageMock.getItem('screenReaderPreference')).toBe('voiceover');
  });

  test('reads preference from localStorage on mount', () => {
    localStorageMock.setItem('screenReaderPreference', 'voiceover');

    render(<ScreenReaderToggle />);

    const voButton = screen.getByRole('radio', { name: /voiceover/i });
    expect(voButton).toHaveAttribute('aria-checked', 'true');
  });
});
