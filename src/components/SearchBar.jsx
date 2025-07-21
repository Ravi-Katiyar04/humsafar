"use client"
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [trainNumber, setTrainNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trainNumber.trim()) {
      onSearch(trainNumber.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Enter the train number or name"
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={trainNumber}
        onChange={(e) => setTrainNumber(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Check Live Status
      </button>
    </form>
  );
}