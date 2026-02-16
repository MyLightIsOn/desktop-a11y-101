import { logCompletion } from './logger';

/**
 * Mark a puzzle as complete in localStorage.
 * Generates a session_id (UUID) on first use.
 * Stores puzzle_X_complete = "true" and puzzle_X_time = seconds.
 * Also calls the logger to send analytics.
 */
export function puzzleComplete(puzzleNumber: number, timeInSeconds: number): void {
  try {
    // Generate session_id if not exists
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('session_id', sessionId);
    }

    localStorage.setItem(`puzzle_${puzzleNumber}_complete`, 'true');
    localStorage.setItem(`puzzle_${puzzleNumber}_time`, String(timeInSeconds));

    // Send analytics (fire-and-forget)
    logCompletion({
      session_id: sessionId,
      puzzle_number: puzzleNumber,
      time_seconds: timeInSeconds,
      device_type: getDeviceType(),
    });
  } catch (e) {
    // localStorage may be disabled
    console.warn('Could not save puzzle completion:', e);
  }
}

function getDeviceType(): string {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'windows';
  if (/Mac/i.test(ua)) return 'mac';
  return 'desktop';
}
