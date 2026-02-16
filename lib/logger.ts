interface CompletionData {
  session_id: string;
  puzzle_number: number;
  time_seconds: number;
  device_type: string;
}

export async function logCompletion(data: CompletionData): Promise<void> {
  try {
    await fetch('/api/completion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    // Silently fail - analytics should never break the app
    console.warn('Analytics logging failed:', e);
  }
}
