"use client";
import { useState } from "react";
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";

export default function PlatformLocator() {
    const [train, setTrain] = useState('');
    const [station, setStation] = useState('');

    const handleSearch = () => {
        if (!train) return alert("Please enter a train name or number.");
        console.log("Searching for:", train, station);
    };

    const infoCards = [
        { label: "IRCTC Train Booking", icon: "fas fa-train", href: "/booking" },
        { label: "PNR Status Enquiry", icon: "fas fa-ticket-alt", href: "/pnr-status" },
        { label: "Train Running Status", icon: "fas fa-map-marker-alt", href: "/live-status" },
        { label: "Train Seat Availability", icon: "fas fa-chair", href: "/seat-availability" },
        { label: "Tatkal Railway Reservation", icon: "fas fa-bolt", href: "/tatkal-reservation" },
        { label: "Platform Locator", icon: "fas fa-subway", href: "/platform-locator" },
        { label: "Train Stations", icon: "fas fa-train-subway", href: "/stations" },
        { label: "IRCTC Cancellation Charges", icon: "fas fa-times-circle", href: "/cancellation-charges" },
        { label: "Vande Bharat Express Trains", icon: "fas fa-train-tram", href: "/vande-bharat" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-900 to-pink-700 py-10 text-center ">
                <h1 className="text-3xl font-semibold mb-6">Platform Locator</h1>

                <div className="bg-white rounded-md max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 items-end shadow text-left">

                    {/* Train Input */}
                    <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-2 ">Train name or number</label>
                        <input
                            type="text"
                            placeholder="Enter the train name or number"
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-b-2 focus:border-orange-500  transition-colors"
                            value={train}
                            onChange={(e) => setTrain(e.target.value)}
                        />
                    </div>

                    {/* Station Input */}
                    <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Station (optional)</label>
                        <input
                            type="text"
                            placeholder="Select Station"
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                            value={station}
                            onChange={(e) => setStation(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <div className="w-full md:w-auto ">
                        <button
                            onClick={handleSearch}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded shadow"
                        >
                            SEARCH PLATFORM
                        </button>
                    </div>
                </div>
            </div>


            {/* Breadcrumbs */}
            <div className="max-w-11/12 mx-auto px-4 mt-4 text-sm text-gray-500">
                <span className="text-orange-500">Home</span> &nbsp;»&nbsp;
                <span>Trains</span> &nbsp;»&nbsp;
                <span className="text-gray-700 font-medium">Platform Locator</span>
            </div>

            {/* Content Section */}
            <div className="max-w-11/12 mx-auto px-4 py-8 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Train Platform Locator</h2>
                <p className="mb-4">
                    Platform locator enables rail passengers to check in advance the platform on which their train is scheduled to arrive.
                    Train stations can be huge and confusing, with multiple levels and platforms, making it difficult for passengers to navigate
                    and find their way around. Each train arrives at a specific platform. A train platform locator can provide passengers with
                    the necessary information to quickly locate their platform and ensure that they board their train on time.
                </p>
                <p className="mb-4">
                    ixigo’s Platform Locator feature is easy to use and tells you the train platform number at every station along the way.
                    You just need to enter the train name or number and hit the “Search” button. This can be done even before you arrive at the railway station.
                </p>
                <p className="mb-4">
                    Train travel can be unpredictable, so ixigo’s goal is to provide you with all the details you need to make informed decisions
                    about your journey. You can be confident that you are receiving the most accurate information available with our train platform finder.
                </p>
                <p className="mb-4">
                    Our <span className="text-orange-600 font-semibold">Live Running Status</span> feature also allows you to perform a train platform number check. It provides real-time updates on the train’s exact location along with the platform number at each station throughout the journey.
                </p>
                <p className="mb-4">
                    An IRCTC platform number enquiry can also be made at railway station counters. Alternatively, you can check it beside the train timetable on the display screens at the station, but not all stations have them. Using this online feature, on the other hand, can help you save time and you can head straight to the platform where the train will be arriving.
                </p>
                <p>
                    Please keep in mind that platform numbers are subject to change at any time without notice. The revisions may not be updated immediately.
                </p>
            </div>

            <section className="max-w-11/12 mx-auto px-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">More Train Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {infoCards.map((card, idx) => (
                        <Link
                            key={idx}
                            href={card.href}
                            className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 transition px-4 py-6 rounded shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <i className={`${card.icon} text-orange-500 text-lg`}></i>
                                <span className="text-gray-800 font-medium">{card.label}</span>
                            </div>
                            <i className="fas fa-chevron-right text-gray-400 text-sm"></i>
                        </Link>
                    ))}
                </div>

                <FAQSection />
            </section>


        </div>
    );
}
