import React, { useState, useEffect, use } from "react";

function formatDuration(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);

    let result = "";
    if (hours > 0) result += `${hours}hr `;
    if (minutes > 0) result += `${minutes}min`;

    return result.trim();
}

const data ={
    "status": true,
    "message": "Success",
    "timestamp": 1755760292656,
    "data": {
        "trainCode": "12420",
        "availabilityClassList": [
            {
                "reservationClass": "2S",
                "charges": {
                    "totalCollectibleAmount": 92.7,
                    "baseFare": 45,
                    "superfastCharge": 15,
                    "fuelAmount": 0,
                    "totalConcession": 0,
                    "tatkalFare": 0,
                    "serviceTax": 0,
                    "otherCharge": 0,
                    "cateringCharge": 0,
                    "reservationCharge": 15,
                    "totalFare": 75,
                    "travelInsuranceCharge": 0,
                    "travelInsuranceServiceTax": 0,
                    "wpServiceCharge": 15,
                    "wpServiceTax": 2.7,
                    "dynamicFare": 0
                },
                "availabilities": [
                    {
                        "date": "2025-09-09",
                        "status": "AVAILABLE-180",
                        "type": "CNF",
                        "confirmedAvailability": true
                    },
                    {
                        "date": "2025-09-10",
                        "status": "AVAILABLE-177",
                        "type": "CNF",
                        "confirmedAvailability": true
                    },
                    {
                        "date": "2025-09-11",
                        "status": "AVAILABLE-177",
                        "type": "CNF",
                        "confirmedAvailability": true
                    },
                    {
                        "date": "2025-09-12",
                        "status": "AVAILABLE-173",
                        "type": "CNF",
                        "confirmedAvailability": true
                    },
                    {
                        "date": "2025-09-13",
                        "status": "AVAILABLE-164",
                        "type": "CNF",
                        "confirmedAvailability": true
                    },
                    {
                        "date": "2025-09-14",
                        "status": "AVAILABLE-178",
                        "type": "CNF",
                        "confirmedAvailability": true
                    }
                ]
            }
        ]
    }
}

const SearchTrainCard = ({ train }) => {
    const dateStr = train?.train_date || "01-01-2025"; // Default date if not provided

    const [selectedClass, setSelectedClass] = useState(train?.class_type[0]);
    const [availability, setAvailability] = useState(data.availabilityClassList);
    const [selectedDate, setSelectedDate] = useState(dateStr);

    const [showAvailability, setShowAvailability] = useState(false);

    const [formattedDate, setFormattedDate] = useState("");
    const [formattedArrivalDate, setFormattedArrivalDate] = useState("");

    useEffect(() => {
        const [day, month, year] = dateStr.split("-").map(Number);
        const date = new Date(year, month - 1, day);
        setFormattedDate(date.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short",
        }));
    }, [dateStr]);

    useEffect(() => {
        if (train) {
            const [day, month, year] = dateStr.split("-").map(Number);
            const [hours, minutes] = train.from_std.split(":").map(Number);
             const [durHours, durMinutes] = train.duration.split(":").map(Number);
             const departure = new Date(year, month - 1, day, hours, minutes);
             departure.setHours(departure.getHours() + durHours);
             departure.setMinutes(departure.getMinutes() + durMinutes);
            setFormattedArrivalDate(departure.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
            }));
        }
    }, [train]);

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

    if (!train) return null;
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full mx-auto">
            {/* Train Header */}
            <div className="flex justify-between items-center my-4 border-b pb-4">
                <div>
                    <h2 className="text-orange-500 font-semibold text-lg">
                        {train.train_number}  {train.train_name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Runs on: {train.run_days.join(", ")}
                        <span className="text-orange-500 ml-1">({train.train_number} Running Status)</span>
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-semibold">{train.from}</p>
                        <p className="text-lg font-bold">{train.from_std}</p>
                        <p className="text-gray-500 text-sm">{formattedDate}</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <span className="text-gray-500 text-sm">{formatDuration(train.duration)}</span>
                        <div className="w-24 border-t-2 border-gray-300 my-1"></div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{train.to}</p>
                        <p className="text-lg font-bold">{train.to_sta}</p>
                        <p className="text-gray-500 text-sm">{formattedArrivalDate}</p>
                    </div>
                </div>


                <button
                    onClick={() => setShowAvailability(!showAvailability)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                >
                    {showAvailability ? "HIDE AVAILABILITY" : "SHOW AVAILABILITY"}
                </button>
            </div>


            {/* Coach Availability */}
            <div className="flex gap-3 overflow-x-auto pb-3">
                {train.class_type.map((c, i) => (
                    <div
                        key={i}
                        className="min-w-[160px] border rounded-lg p-2 text-start shadow-sm bg-gray-50"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div>{c}</div>
                            <div>₹ 444</div>
                        </div>
                        <p className="text-green-800 ">AVL 70</p>
                        <p className="text-green-700 text-sm ">Avaible</p>
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
