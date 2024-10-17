import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language');
    const detectedLanguage = acceptLanguage?.split(',')[0] || 'en';

    const response = NextResponse.next();

    // Set the detected language in a cookie (optional)
    response.cookies.set('lang', detectedLanguage);

    return response;
}

// Define the paths this middleware should apply to
export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
};
