"use client"
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md py-4 sticky top-16 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">IRCTC Train Booking</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">PNR Status</Link></li>
            <li><Link href="#" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">Running Status</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Seat Availability</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tatkal Ticket Booking</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Platform Locator</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}