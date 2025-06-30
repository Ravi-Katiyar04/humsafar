'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-100 sticky top-0 z-10 text-blue-700 py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <img src="/assets/logo.svg" alt="logo" className="h-10" />
        </Link>

        <div className="space-x-4">
          <Link
            href="/"
            className={`hover:underline ${pathname === '/' ? 'underline' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/user/profile"
            className={`hover:underline ${pathname === '/user/profile' ? 'underline' : ''}`}
          >
            My Bookings
          </Link>
          <Link href="/login" className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
