import { useState } from "react";

export default function SortFilterBar({ activeSort, setActiveSort}) {
  const [onlyConfirmed, setOnlyConfirmed] = useState(false);

  const sortOptions = [
    { key: "departure", label: "DEPARTURE TIME" },
    { key: "arrival", label: "ARRIVAL TIME" },
    { key: "duration", label: "DURATION" },
    { key: "name", label: "NAME" },
  ];

  return (
    <div className="flex justify-between">
      {/* Sort Section */}
      <div className="flex items-center gap-4 flex-wrap  rounded-xl bg-white shadow-sm p-4">
        <span className="text-gray-500 font-medium">Sort by:</span>
        <div className="flex gap-6 text-gray-500 font-medium">
          {sortOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveSort(opt.key)}
              className={`cursor-pointer ${
                activeSort === opt.key
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Section */}
      <div className="flex items-center gap-4 flex-wrap  rounded-xl bg-white shadow-sm p-4">
        <span className="text-gray-500 font-medium">
          Show trains with confirmed seats
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={onlyConfirmed}
            onChange={() => setOnlyConfirmed(!onlyConfirmed)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition"></div>
        </label>
      </div>
    </div>
  );
}
