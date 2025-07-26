'use client';

import axios from 'axios';
import Link from 'next/link';
import ProfileMenu from './ProfileMenu';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/api/me');
        console.log('Auth check response:', res.data);
        if (res.data.user) {
          setUser(res.data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);


  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
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

          {!isLoggedIn ? (
            <Link href="/login" className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100">
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="text-2xl flex items-center justify-center text-blue-700 px-3 py-1"
              >
                <i className="fas text-black text-4xl cursor-pointer fa-user-circle"></i>
                {user && (
                  <div className="text-sm text-gray-600 cursor-pointer">
                    <span className="ml-2 text-black text-xl block">Hello</span>
                    <span className="ml-2 text-black text-xl">{user.name}</span>
                  </div>
                )}
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 z-50">
                  <ProfileMenu setShowProfileMenu={setShowProfileMenu} />
                </div>

              )}
            </div>
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

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="block bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <ProfileMenu />
          )}
        </div>
      )}
    </nav>
  );
}


