import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Forward to external backend if configured
    const backendUrl = process.env.PROD_BACKEND_URL || process.env.BACKEND_URL;
    if (backendUrl) {
      try {
        await fetch(`${backendUrl}/api/completion`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (e) {
        // Backend failure should not affect response
        console.error('Backend logging failed:', e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    // Always return 200 even on failure
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
