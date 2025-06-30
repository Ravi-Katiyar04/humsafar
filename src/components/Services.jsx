'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ServiceTiles() {
  const router = useRouter();
  const scrollRef = useRef(null);

  const services = [
    { label: 'Running Status', icon: 'fa-map-marker-alt', badge: 'Live', link: '/running-status' },
    { label: 'PNR Status Enquiry', icon: 'fa-ticket-alt', link: '/pnr-status-enquiry' },
    { label: 'Train Seat Availability', icon: 'fa-chair', link: '/seat-availability' },
    { label: 'Search By Name/Number', icon: 'fa-search', link: '/search-train' },
    { label: 'Search By Station', icon: 'fa-subway', link: '/search-station' },
    { label: 'Train Platform Locator', icon: 'fa-train-subway', link: '/platform-locator' },
    { label: 'Tatkal Railway Reservation', icon: 'fa-bolt', link: '/tatkal-reservation' },
    { label: 'Vande Bharat Express', icon: 'fa-train', link: '/vande-bharat' },
    { label: 'IRCTC Food Booking', icon: 'fa-utensils', link: '/food-booking' },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -180 : 180,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-11/12 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4 text-black">Explore More With HumSafar</h2>
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <i className="fas fa-chevron-left text-gray-700 text-lg" />
      </button>

      {/* Scrollable Box with border & shadow */}
      <div
        className="overflow-x-auto scroll-smooth scrollbar-hide scroll-snap-x rounded-2xl border border-gray-200 shadow-lg bg-white"
        ref={scrollRef}
      >
        <div className="flex px-5 py-6 w-max min-w-full">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => router.push(s.link)}
              className={`scroll-snap-start relative w-36 h-32 flex-shrink-0 flex flex-col items-center justify-center gap-2 text-center hover:bg-gray-50 transition cursor-pointer group ${
                i !== services.length - 1 ? 'border-r border-gray-300 pr-6 mr-6' : ''
              }`}
            >
              {s.badge && (
                <span className="absolute top-2 left-2 text-[10px] text-white bg-red-500 px-2 py-0.5 rounded-full">
                  {s.badge}
                </span>
              )}
              <div className="relative">
                <i className={`fas ${s.icon} text-indigo-600 text-2xl`} title={s.label} />
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {s.label}
                </div>
              </div>
              <div className="text-sm font-medium text-gray-800 px-1 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <i className="fas fa-chevron-right text-gray-700 text-lg" />
      </button>
    </div>
  );
}

