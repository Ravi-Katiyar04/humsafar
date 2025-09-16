import React, { useState } from "react";

export default function TrainFilters({ setFilters, filters }) {
    const [showMore, setShowMore] = useState(false);

    const classOptions = ["SL", "3A", "2A", "1A", "3E", "2S", "CC"];
    const quotaOptions = ["General", "Tatkal", "Lower Berth", "Ladies"];
    const timeRanges = [
        { label: "Early Morning", range: "00:00 - 06:00", rangekey: [0, 6] },
        { label: "Morning", range: "06:00 - 12:00", rangekey: [6, 12] },
        { label: "Mid Day", range: "12:00 - 18:00", rangekey: [12, 18] },
        { label: "Night", range: "18:00 - 24:00", rangekey: [18, 24] },
    ];

    const handleClassChange = (cls) => {
        setFilters(prev => {
            const alreadySelected = prev.classes.includes(cls);
            return {
                ...prev,
                classes: alreadySelected
                    ? prev.classes.filter(c => c !== cls)
                    : [...prev.classes, cls]
            };
        });
    };

    const handleQuotaChange = (quota) => {
        setFilters(prev => ({ ...prev, quota }));
    };

    const handleTimeRangeChange = ( range, rangekey ) => {
        setFilters(prev => ({ ...prev, timeRange: range, timerangeKey: rangekey }));
    };


    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full mx-auto">
            <div className="flex flex-col md:flex-row gap-6">

                {/* Class */}
                <div className="flex-1">
                    <h3 className="font-medium mb-2 flex items-center">
                        <i className="fas fa-chair mr-2 text-gray-600"></i> Class
                        {showMore && (
                            <label className="ml-2 text-sm text-gray-500 flex items-center">
                                <input type="checkbox" className="mr-1" /> all
                            </label>
                        )}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {classOptions.map((c) => (
                            <label key={c} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={filters.classes.includes(c)}
                                    onChange={() => handleClassChange(c)}
                                />

                                <span>{c}</span>
                            </label>
                        ))}

                    </div>
                </div>

                {/* Quota */}
                <div className="flex-1 border-l pl-4">
                    <h3 className="font-medium mb-2">
                        <i className="fas fa-ticket-alt mr-2 text-gray-600"></i> Quota
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {quotaOptions.map((q, i) => (
                            <label
                                key={i}
                                className="flex items-center space-x-2"
                                onClick={() => handleQuotaChange(q)}
                            >
                                <input type="radio" name="quota" defaultChecked={i === 0} />
                                <span>{q}</span>
                            </label>
                        ))}
                    </div>

                    {/* Availability */}
                    {showMore && (
                        <div className="mt-4">
                            <h3 className="font-medium mb-1">Availability</h3>
                            <label className="flex items-center space-x-2 text-sm text-gray-600">
                                <input type="checkbox" /> Show trains with confirmed seats
                            </label>
                        </div>
                    )}
                </div>

                {/* Departure */}
                <div className="flex-1 border-l pl-4">
                    <h3 className="font-medium mb-2">
                        <i className="fas fa-train-departure mr-2 text-gray-600"></i> Departure from
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        {timeRanges.map((t, i) => (
                            <button
                                key={i}
                                className={`border rounded-lg py-1 cursor-pointer px-2 text-sm ${filters.timerangeKey ==="departure" && filters.timeRange === t.range ? 'bg-blue-700 border-blue-700 text-white' : ''}`}
                                onClick={() => handleTimeRangeChange(t.range, "departure")}

                            >
                                <div className="font-medium">{t.range}</div>
                                <div className="text-xs">{t.label}</div>
                            </button>
                        ))}
                    </div>

                    {showMore && (
                        <>
                            <input type="range" min="0" max="24" className="w-full accent-orange-500" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>00:00</span>
                                <span>24:00</span>
                            </div>
                        </>
                    )}

                    {showMore && (
                        <div className="mt-6 border-t pt-4">
                            <h3 className="font-medium mb-2">
                                <i className="fas fa-train-arrival mr-2 text-gray-600"></i> Arrival at
                            </h3>
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                {timeRanges.map((t, i) => (
                                    <button
                                        key={i}
                                        className={`border rounded-lg py-1 cursor-pointer px-2 text-sm ${filters.timerangeKey ==="arrival" && filters.timeRange === t.range ? 'bg-blue-700 border-blue-700 text-white' : ''}`}
                                        onClick={() => handleTimeRangeChange(t.range, "arrival")}
                                    >
                                        <div className="font-medium">{t.range}</div>
                                        <div className="text-xs">{t.label}</div>
                                    </button>
                                ))}
                            </div>
                            <input type="range" min="0" max="24" className="w-full accent-orange-500" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>00:00</span>
                                <span>24:00</span>
                            </div>
                        </div>
                    )}

                    {/* Toggle More/Less */}
                    <div
                        onClick={() => setShowMore(!showMore)}
                        className="text-orange-500 text-sm font-medium mt-3 cursor-pointer flex items-center justify-end"
                    >
                        {showMore ? (
                            <>
                                LESS FILTERS <i className="fas fa-chevron-up ml-1"></i>
                            </>
                        ) : (
                            <>
                                MORE FILTERS <i className="fas fa-chevron-down ml-1"></i>
                            </>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
}
