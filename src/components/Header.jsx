"use client";
import Link from "next/link";

export default function Header({ currentPath }) {
  const navLinks = [
    { href: "/", label: "IRCTC Train Booking", icon: "fa-solid fa-train" },
    { href: "/pnr-status-enquiry", label: "PNR Status", icon: "fa-solid fa-ticket" },
    { href: "/running-status", label: "Running Status", icon: "fa-solid fa-route" },
    { href: "/seat-availability", label: "Seat Availability", icon: "fa-solid fa-couch" },
    { href: "/tatkal-reservation", label: "Tatkal Ticket Booking", icon: "fa-solid fa-bolt" },
    { href: "/vande-bharat", label: "Vande Bharat Trains", icon: "fa-solid fa-train-subway" },
  ];

  return (
    <header className="py-2">
      <div className="container flex justify-between items-center">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map(({ href, label,icon }) => {
              const isActive = currentPath === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium ${
                      isActive
                        ? "text-blue-600 font-bold border-b-4 rounded-lg border-blue-600 pb-1 pointer-events-none cursor-default"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {<i className={`mr-2 ${icon}`}></i>}
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
