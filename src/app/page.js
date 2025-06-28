'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import MiddleContent from '@/components/MiddleContent';

export default function HomePage() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!source || !destination) return alert('Please enter both stations.');
    router.push(`/train/search?source=${source}&destination=${destination}`);
  };

  return (
    <>

      <div className=" bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-start">

        <div className="w-full max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">Book Your Train Tickets</h1>
            <p className="text-gray-600 text-lg mb-6">Search and book Indian Railways tickets in seconds.</p>

            {/* <Image
            src={trainImage}
            alt="Train"
            className="rounded-lg shadow-lg mb-8"
            width={720}
            height={320}
            priority
          /> */}
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="From (e.g., Delhi)"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
              <input
                type="text"
                placeholder="To (e.g., Mumbai)"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Search Trains
            </button>
          </div>
        </div>
      </div>
      <MiddleContent />
    </>
  );
}

