"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getStations } from '@/data.js';
import Header from './Header';
import axios from 'axios';

export default function Booking(prop) {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [stations, setStations] = useState(getStations().data);
  const [source, setSource] = useState('');
  const [sourceStationCode, setStationSourceCode] = useState('');
  const [destinationStationCode, setDestinationStationCode] = useState('');
  const [destination, setDestination] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [activeInput, setActiveInput] = useState(null);


  const handleSelect = (station) => {
    if (activeInput === "source") {
      setSource(`${station.name} (${station.code})`);
      setStationSourceCode(station.code);
    } else if (activeInput === "destination") {
      setDestination(`${station.name} (${station.code})`);
      setDestinationStationCode(station.code);
    }
    setActiveInput(null); // close dropdown
  };


  const handleSearch = () => {
    if (!source || !destination || !journeyDate)
      return alert('Please enter source, destination, and date.');
    router.push(`/search//${sourceStationCode}/${destinationStationCode}/${journeyDate}`);
  };

  useEffect(() => {
    const fetchTrainStatus = async () => {
      if (!query) return;
      setStations(null);

      try {
        const res = await axios.get(
          `/api/searchStation?query=${query}`
        );
        setStations(res.data.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchTrainStatus();
  }, [query])

  const handleExchange = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  }

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD (for <input type="date">)
    setJourneyDate(formattedDate);
  }, [])


  return (
    <div
      className="min-h-fit bg-cover bg-center flex flex-col items-center justify-start"
      style={{
        backgroundImage: "url('/assets/train.jpg')",
      }}
    >
      <div className="bg-gradient-to-r py-16 px-4 w-full max-w-7xl text-center">
        <h1 className="text-3xl font-semibold mb-8  text-white">{prop.title}</h1>

        <div className="bg-white rounded-lg p-4 shadow max-w-7xl mx-auto items-center">
          <Header currentPath={prop.currentPath} />
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center bg-gray-100 px-2 rounded-lg'>
            <div className="flex-1 text-left relative">

              <label className="text-xs text-black font-semibold mb-1" htmlFor="source">From</label>
              <input
                id="source"
                type="text"
                placeholder='Enter Source Station'
                className="w-full border-b-2 cursor-pointer border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
                value={source}
                onChange={(e) => setQuery(e.target.value)}
                onClick={() => setActiveInput("source")}
                required
              />
              {activeInput === "source" && (
                <div className="absolute z-10 bg-white border border-gray-300 w-full max-h-48 overflow-y-auto shadow-2xl rounded-md">
                  {stations.map((station) => (
                    <div
                      key={station.code}
                      className="px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                      onClick={() => handleSelect(station)}
                    >
                      {station.name} ({station.code})
                    </div>
                  ))}
                </div>
              )}
            </div>



            <div
              onClick={handleExchange}
              className='hidden md:block cursor-pointer'
            >
              <i className="fas fa-exchange-alt text-gray-600 text-lg"></i>
            </div>

            <div className="flex-1 px-4 text-left my-4 relative">
              <label className="text-xs text-black font-semibold mb-1" htmlFor="destination">To</label>
              <input
                id="destination"
                type="text"
                placeholder='Enter Destination Station'
                className="w-full border-b-2 cursor-pointer border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
                value={destination}
                onChange={(e) => setQuery(e.target.value)}
                onClick={() => setActiveInput("destination")}
                required
              />

              {activeInput === "destination" && (
                <div className="absolute z-10 bg-white border border-gray-300 w-full max-h-48 overflow-y-auto shadow-lg rounded-md">
                  {stations.map((station) => (
                    <div
                      key={station.code}
                      className="px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                      onClick={() => handleSelect(station)}
                    >
                      {station.name} ({station.code})
                    </div>
                  ))}
                </div>
              )}
            </div>



            <div className="flex-1 px-4 py-4 text-left">
              <label className="text-xs text-black font-semibold mb-1" htmlFor="journeyDate">Departure Date</label>
              <input
                id="journeyDate"
                type="date"
                className="w-full border-b-2 cursor-pointer border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold px-6 py-4 md:rounded-l-none md:rounded-r-lg w-full md:w-auto"
            >
              {prop.btntext}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
