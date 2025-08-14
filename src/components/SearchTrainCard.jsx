import React, { useState } from "react";

const SearchTrainCard = () => {
    const [showAvailability, setShowAvailability] = useState(false);

    const coachData = [
        { type: "SL", price: "₹180", status: "NOT AVL" },
        { type: "SL", tag: "Tatkal", status: "NOT AVL" },
        { type: "3E", tag: "Tatkal", status: "NOT AVL" },
        { type: "3A", tag: "Tatkal", status: "NOT AVL" },
        { type: "2A", tag: "Tatkal", status: "NOT AVL" },
        { type: "1A", tag: "Tatkal", status: "NOT AVL" },
        { type: "3E", price: "₹560", status: "Regret" },
        { type: "SL", tag: "Tatkal", status: "NOT AVL" },
        { type: "3E", tag: "Tatkal", status: "NOT AVL" },
        { type: "3A", tag: "Tatkal", status: "NOT AVL" },
        { type: "2A", tag: "Tatkal", status: "NOT AVL" },
        { type: "1A", tag: "Tatkal", status: "NOT AVL" },
        { type: "3E", price: "₹560", status: "Regret" },
    ];

    const dateAvailability = [
        { date: "Fri, 15 Aug", tag: "Tatkal", status: "NOT AVL", color: "text-red-500" },
        { date: "Fri, 15 Aug", status: "NOT AVL", color: "text-red-500" },
        { date: "Sun, 17 Aug", status: "WL7", sub: "Travel Guarantee", color: "text-green-600" },
        { date: "Mon, 18 Aug", status: "REGRET", color: "text-red-500" },
        { date: "Tue, 19 Aug", status: "REGRET", color: "text-red-500" },
        { date: "Thu, 21 Aug", status: "REGRET", color: "text-red-500" },
        { date: "Sun, 17 Aug", status: "WL7", sub: "Travel Guarantee", color: "text-green-600" },
        { date: "Mon, 18 Aug", status: "REGRET", color: "text-red-500" },
        { date: "Tue, 19 Aug", status: "REGRET", color: "text-red-500" },
        { date: "Thu, 21 Aug", status: "REGRET", color: "text-red-500" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full mx-auto">
            {/* Train Header */}
            <div className="flex justify-between items-center my-4 border-b pb-4">
                <div>
                    <h2 className="text-orange-500 font-semibold text-lg">
                        12369 KUMBHA EXPRESS
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Runs on: <span className="font-medium">S M T W T F S</span>{" "}
                        <span className="text-orange-500 ml-1">(12369 Running Status)</span>
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-semibold">SLN</p>
                        <p className="text-lg font-bold">04:20</p>
                        <p className="text-gray-500 text-sm">Fri, 15 Aug</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <span className="text-gray-500 text-sm">3hr</span>
                        <div className="w-24 border-t-2 border-gray-300 my-1"></div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">LKO</p>
                        <p className="text-lg font-bold">07:20</p>
                        <p className="text-gray-500 text-sm">Fri, 15 Aug</p>
                    </div>
                </div>


                <button
                    onClick={() => setShowAvailability(!showAvailability)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                >
                    {showAvailability ? "HIDE AVAILABILITY" : "SHOW AVAILABILITY"}
                </button>
            </div>

            {/* Route Info */}
            {/* <div className="flex justify-between items-center my-4 border-b pb-4">
                <div>
                    <p className="text-lg font-semibold">SLN</p>
                    <p className="text-xl font-bold">04:20</p>
                    <p className="text-gray-500 text-sm">Fri, 15 Aug</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm">3hr</span>
                    <div className="w-24 border-t-2 border-gray-300 my-1"></div>
                </div>
                <div>
                    <p className="text-lg font-semibold">LKO</p>
                    <p className="text-xl font-bold">07:20</p>
                    <p className="text-gray-500 text-sm">Fri, 15 Aug</p>
                </div>
            </div> */}

            {/* Coach Availability */}
            <div className="flex gap-3 overflow-x-auto pb-3">
                {coachData.map((c, i) => (
                    <div
                        key={i}
                        className="min-w-[100px] border rounded-lg p-3 text-center shadow-sm bg-gray-50"
                    >
                        {c.tag && (
                            <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                                {c.tag}
                            </span>
                        )}
                        <p className="font-medium mt-1">{c.type}</p>
                        {c.price && <p className="text-gray-600">{c.price}</p>}
                        <p className="text-gray-400 text-sm">{c.status}</p>
                    </div>
                ))}
            </div>

            {/* Date Availability */}
            {showAvailability && (
                <div className="mt-4 border-t pt-4">
                    <div className="flex gap-3 overflow-x-auto pb-3">
                        {dateAvailability.map((d, i) => (
                            <div
                                key={i}
                                className="min-w-[120px] bg-gray-50 border rounded-lg p-3 text-center shadow-sm"
                            >
                                {d.tag && (
                                    <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                                        {d.tag}
                                    </span>
                                )}
                                <p className="font-medium">{d.date}</p>
                                <p className={`${d.color} font-semibold`}>{d.status}</p>
                                {d.sub && (
                                    <p className="text-green-500 text-xs">{d.sub}</p>
                                )}
                                <button className="bg-orange-500 text-white w-full mt-2 py-1 rounded hover:bg-orange-600">
                                    BOOK
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchTrainCard;
