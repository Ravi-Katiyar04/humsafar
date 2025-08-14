import React, { useState } from "react";

export default function DateAvailabilitySlider() {
  const dates = [
    { date: "Thu, 14 Aug", status: "Few Seats", color: "text-amber-600", active: true },
    { date: "Fri, 15 Aug", status: "Filling Fast", color: "text-orange-600" },
    { date: "Sat, 16 Aug", status: "Few Seats", color: "text-amber-600" },
    { date: "Sun, 17 Aug", status: "Filling Fast", color: "text-orange-600" },
    { date: "Mon, 18 Aug", status: "Few Seats", color: "text-amber-600" },
    { date: "Tue, 19 Aug", status: "Available", color: "text-green-600" },
    { date: "Wed, 20 Aug", status: "Available", color: "text-green-600" },
    { date: "Wed, 21 Aug", status: "Available", color: "text-green-600" },
    { date: "Sun, 22 Aug", status: "Filling Fast", color: "text-orange-600" },
    { date: "Mon, 23 Aug", status: "Few Seats", color: "text-amber-600" },
    { date: "Tue, 24 Aug", status: "Available", color: "text-green-600" },
    { date: "Wed, 25 Aug", status: "Available", color: "text-green-600" },
    { date: "Wed, 26 Aug", status: "Available", color: "text-green-600" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < dates.length - visibleCount) setStartIndex(startIndex + 1);
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden w-full mx-auto">
      
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="px-3 py-4 hover:bg-gray-100 border-r"
        disabled={startIndex === 0}
      >
        <i className="fas fa-chevron-left text-gray-600"></i>
      </button>

      {/* Dates */}
      <div className="flex flex-1 overflow-x-auto no-scrollbar">
        {dates.slice(startIndex, startIndex + visibleCount).map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center px-4 py-2 min-w-[128px] border-r cursor-pointer ${
              d.active ? "border-b-4 border-blue-500" : ""
            }`}
          >
            <span
              className={`text-sm font-medium ${
                d.active ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {d.date}
            </span>
            <span className={`text-sm font-medium mt-1 ${d.color}`}>
              {d.status}
            </span>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="px-3 py-4 hover:bg-gray-100 border-l"
        disabled={startIndex >= dates.length - visibleCount}
      >
        <i className="fas fa-chevron-right text-gray-600"></i>
      </button>
    </div>
  );
}
