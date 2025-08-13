"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';;

const SearchTrainByStation = () => {
    const router = useRouter();
    const [sourceStation, setSourceStation] = useState("Bengaluru (YPR)");

    const handleSearch = () => {
    router.push(`/search-station/${sourceStation}`);
    }

    return (
        <div className="bg-gradient-to-r from-purple-900 to-pink-700 py-10 px-4 text-center">
            <h1 className="text-3xl font-semibold mb-8">Indian Railway Stations</h1>

            <div  className="bg-white rounded-lg p-4 shadow max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 text-left py-2 pr-6">
                    <label className="text-xs text-black mb-1 font-semibold" htmlFor="source">STATION NAME/CODE</label>
                    <input
                        id="sourceStation"
                        type="text"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors"
                        placeholder="Enter Station name or code"
                        value={sourceStation}
                        onChange={(e) => setSourceStation(e.target.value)}
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="bg-blue-700 cursor-pointer hover:bg-blue-800 text-white font-semibold px-6 my-2 py-4 md:rounded-l-none md:rounded-r-lg w-full md:w-auto"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchTrainByStation;
