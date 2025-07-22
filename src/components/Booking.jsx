"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Booking(prop) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!source || !destination || !journeyDate)
      return alert('Please enter source, destination, and date.');
    router.push(`/train/search?source=${source}&destination=${destination}&date=${journeyDate}`);
  };

  return (
    <div
      className="min-h-fit bg-cover bg-center flex flex-col items-center justify-start"
      style={{
        backgroundImage: "url('/assets/train.jpg')",
      }}
    >
      <div className="bg-gradient-to-r py-16 px-4 w-full max-w-7xl text-center">
        <h1 className="text-3xl font-semibold mb-8  text-white">{prop.title}</h1>

        <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-left">
            <label className="text-xs text-black font-semibold mb-1" htmlFor="source">From</label>
            <input
              id="source"
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </div>

          <div>
            <i className="fas fa-exchange-alt text-gray-600 text-lg"></i>
          </div>

          <div className="flex-1 px-4 text-left">
            <label className="text-xs text-black font-semibold mb-1" htmlFor="destination">To</label>
            <input
              id="destination"
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="flex-1 px-4 py-4 text-left">
            <label className="text-xs text-gray-500 mb-1" htmlFor="journeyDate">Departure Date</label>
            <input
              id="journeyDate"
              type="date"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold px-6 py-4 md:rounded-l-none md:rounded-r-lg w-full md:w-auto"
          >
            {prop.btntext}
          </button>
        </form>
      </div>
    </div>
  );
}
