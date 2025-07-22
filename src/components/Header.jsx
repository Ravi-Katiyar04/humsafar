"use client";
import Link from "next/link";

export default function Header({ currentPath }) {
  const navLinks = [
    { href: "/", label: "IRCTC Train Booking" },
    { href: "/pnr-status-enquiry", label: "PNR Status" },
    { href: "/running-status", label: "Running Status" },
    { href: "/seat-availability", label: "Seat Availability" },
    { href: "/tatkal-reservation", label: "Tatkal Ticket Booking" },
    { href: "/vande-bharat", label: "Vande Bharat Trains" },
  ];

  return (
    <header className="bg-gray-100 shadow-md py-4 sticky top-16 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map(({ href, label }) => {
              const isActive = currentPath === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium ${
                      isActive
                        ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1 pointer-events-none cursor-default"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
