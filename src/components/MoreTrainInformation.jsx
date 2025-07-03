"use clint";
import Link from "next/link";


export default function MoreTrainInformation() {

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
        <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">More Train Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {infoCards.map((card, idx) => (
                    <Link
                        key={idx}
                        href={card.href}
                        className="flex items-center justify-between bg-orange-100 hover:bg-orange-200 transition px-4 py-6 rounded shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <i className={`${card.icon} text-orange-500 text-lg`}></i>
                            <span className="text-gray-800 font-medium">{card.label}</span>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400 text-sm"></i>
                    </Link>
                ))}
            </div>
        </>
    );
}