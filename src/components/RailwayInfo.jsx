"use client";
import React from 'react';

function RailwayInfo() {
    const links = [
        { icon: 'fa-train-subway', label: 'IRCTC Train Booking', href: '/' },
        { icon: 'fa-ticket', label: 'PNR Status Enquiry', href: '/pnr-status-enquiry' },
        { icon: 'fa-chair', label: 'Train Seat Availability', href: '/seat-availability' },
        { icon: 'fa-train', label: 'Tatkal Railway Reservation', href: '/tatkal-reservation' },
    ];
    return (
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-xs mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Railway Information</h2>
            <ul className="space-y-4">
                {links.map((link, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <i className={`fas ${link.icon} text-blue-600 text-lg`} />
                        <a href={link.href} className="text-blue-600 hover:underline text-sm font-medium">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RailwayInfo;

