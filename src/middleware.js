import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Split path into segments
  const segments = pathname.split("/").filter(Boolean);

  // Example:
  // /search/CNB/ASH/08-09-2025/15708/3A/GN  -> ["search","CNB","ASH","08-09-2025","15708","3A","GN"] (7 parts)
  // /search/KANO/BKN/2025-09-18              -> ["search","KANO","BKN","2025-09-18"] (4 parts)

  // ✅ Protect only if it's the full train detail route (7 segments)
  if (segments[0] === "search" && segments.length === 7) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next(); // valid → continue
    } catch (err) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Not protected → continue normally
  return NextResponse.next();
}

// Match all /search routes, then filter inside
export const config = {
  matcher: ["/search/:path*", "/dashboard/:path*", "/booking/:path*"],
};
