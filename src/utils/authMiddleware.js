import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const PUBLIC_ROUTES = ['/login', '/signup', '/'];

export function authMiddleware(request) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Read token from cookies
  const token = request.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    // Invalid token — redirect
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    // Apply middleware to protected routes only
    '/dashboard/:path*',
    '/profile/:path*',
    '/bookings/:path*',
  ],
};

