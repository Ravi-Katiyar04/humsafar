'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulate login status (replace with real logic later)
  const isLoggedIn = false;

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav className="bg-blue-100 sticky top-0 z-10 text-blue-700 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <img src="/assets/logo.svg" alt="logo" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 items-center">
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
          {isLoggedIn ? (
            <Link href="/signup" className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100">
              Signup
            </Link>
          ) : (
            <Link href="/login" className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-2 bg-blue-50 border-t border-blue-200">
          <Link
            href="/"
            className={`block hover:underline ${pathname === '/' ? 'underline' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/user/profile"
            className={`block hover:underline ${pathname === '/user/profile' ? 'underline' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            My Bookings
          </Link>
          {isLoggedIn ? (
            <Link
              href="/signup"
              className="block bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          ) : (
            <Link
              href="/login"
              className="block bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

