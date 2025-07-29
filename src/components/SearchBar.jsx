"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [trainNumber, setTrainNumber] = useState('');

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Enter the train number or name"
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={trainNumber}
        onChange={(e) => setTrainNumber(e.target.value)}
      />
      <Link href={`/${trainNumber}/train-running-status`} className="flex-shrink-0">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Check Live Status
        </button>
      </Link>
    </div>
  );
}



