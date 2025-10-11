import React from 'react';
import { useRouter,useState } from 'next/navigation';

const PlatformLocator = () => {
    const router = useRouter();
    const [train, setTrain] = useState('');
    const [station, setStation] = useState('');

    const handleSearch = () => {
        router.push(`/${train}/train-plateform-locator?station=${station}`);
    };

    return (
        <div className="bg-gradient-to-r from-purple-900 to-pink-700 py-10 text-center ">
            <h1 className="text-3xl font-semibold mb-6 text-white">Platform Locator</h1>

            <div className="bg-white rounded-md max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 items-end shadow text-left">

                {/* Train Input */}
                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-semibold text-black mb-2 ">Train name or number</label>
                    <input
                        type="text"
                        placeholder="Enter the train name or number"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-b-2 focus:border-blue-700 transition-colors"
                        value={train}
                        onChange={(e) => setTrain(e.target.value)}
                    />
                </div>

                {/* Station Input */}
                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-semibold text-black mb-2">Station (optional)</label>
                    <input
                        type="text"
                        placeholder="Select Station"
                        className="w-full border-b border-gray-400 focus:border-b-2 focus:outline-none focus:border-blue-700 transition-colors"
                        value={station}
                        onChange={(e) => setStation(e.target.value)}
                    />
                </div>

                {/* Button */}
                <div className="w-full md:w-auto ">
                    <button
                        onClick={handleSearch}
                        className="w-full bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold px-6 py-2 rounded shadow"
                    >
                        SEARCH PLATFORM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlatformLocator;
