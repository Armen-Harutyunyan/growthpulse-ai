import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const cookieName = 'gp_hero_variant';
  const hasCookie = request.cookies.has(cookieName);

  if (!hasCookie) {
    // Assign variant A or B (50/50 randomly)
    const variant = Math.random() > 0.5 ? 'B' : 'A';
    
    // Create response and set cookie
    const response = NextResponse.next();
    response.cookies.set(cookieName, variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return response;
  }

  return NextResponse.next();
}

// Apply only to home page to keep analytics & static assets performant
export const config = {
  matcher: '/',
};
