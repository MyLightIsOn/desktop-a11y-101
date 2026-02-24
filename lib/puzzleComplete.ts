import { logCompletion } from "./logger";

function getDeviceType(): string {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'windows';
  if (/Mac/i.test(ua)) return 'mac';
  return 'desktop';
}

export function puzzleComplete(puzzleNumber: number, timeInSeconds: number): void {
  try {
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('session_id', sessionId);
    }

    localStorage.setItem(`puzzle_${puzzleNumber}_complete`, 'true');
    localStorage.setItem(`puzzle_${puzzleNumber}_time`, String(timeInSeconds));

    logCompletion({
      session_id: sessionId,
      puzzle_number: puzzleNumber,
      time_seconds: timeInSeconds,
      device_type: getDeviceType(),
    });
  } catch (e) {
    console.warn('Could not save puzzle completion:', e);
  }
}
