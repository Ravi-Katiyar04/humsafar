import React from 'react';

export default function TrainDetailsCard({
    trainNumber = '22962',
    trainName = 'Vande Bharat Exp',
    fromCode = 'ADI',
    fromTime = '06:10',
    toCode = 'MMCT',
    toTime = '11:35',
    duration = '5hr 25min',
    distance = '491 km',
    runDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onShowAvailability = () => alert('Show availability clicked'),
}) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border shadow-sm p-4 rounded-md bg-white w-full ">
            {/* Left Section */}
            <div className="flex flex-col flex-grow max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-1">
                    <span className="text-[16px] font-semibold text-blue-700">{trainNumber} {trainName}</span>
                    
                    <span> <span className="text-gray-400 pr-2 ">•</span>Runs on:
                        <span className="ml-1 font-medium  space-x-1">
                            {runDays.map((day, i) => (
                                <span key={i} className="inline-block">{day}</span>
                            ))}
                        </span>
                    </span>
                    
                    <a href="#" className="text-blue-700 hover:underline"><span className="text-gray-400 pr-2">•</span>({trainNumber} Running Status)</a>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-between mt-2">
                    {/* Source */}
                    <div className="text-center">
                        <div className="text-sm text-blue-700 font-semibold">{fromCode}</div>
                        <div className="text-lg font-bold text-black">{fromTime}</div>
                    </div>

                    {/* Middle Line */}
                    <div className="flex-1 mx-4 relative">
                        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-gray-500 text-xs">{duration}</div>
                        <div className="h-1 bg-gray-500 rounded-full" />
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-gray-500 text-xs">{distance}</div>
                    </div>

                    {/* Destination */}
                    <div className="text-center">
                        <div className="text-sm text-blue-700 font-semibold">{toCode}</div>
                        <div className="text-lg font-bold text-black">{toTime}</div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-fit p-4 sm:w-auto">
                <button
                    onClick={onShowAvailability}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded shadow-sm text-sm"
                >
                    SHOW AVAILABILITY
                </button>
            </div>
        </div>
    );
}
