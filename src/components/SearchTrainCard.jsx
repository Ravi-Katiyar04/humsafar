import React, { useState, useEffect, use } from "react";
import { getSeatAvailability } from "@/data.js";

function formatDuration(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);

    let result = "";
    if (hours > 0) result += `${hours}hr `;
    if (minutes > 0) result += `${minutes}min`;

    return result.trim();
}

const SearchTrainCard = ({ train }) => {
    const dateStr = train?.train_date || "01-01-2025"; // Default date if not provided

    const [availability, setAvailability] = useState(getSeatAvailability()?.data);

    const [selectedClass, setSelectedClass] = useState(train?.class_type[0]);
    const [quota, setQuota] = useState("GN");
    const [trainNo, setTrainNo] = useState(train?.train_number || "");

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

    const dateFormatter = (date) => {
        const [day, month, year] = date.split("-").map(Number);
        const newdate = new Date(year, month - 1, day);
        const formattedDate = newdate.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short",
        });
        return formattedDate;
    }

    // const handleAvailabilityClick = () => {
    //     setShowAvailability(!showAvailability);
    //     const fetchTrains = async () => {
    //   try {
    //     const response = await axios.get(`/api/checkSeatAvailability?classType=${selectedClass}&src=${src}&quota=${quota}&dstn=${dstn}&trainNo=${trainNo}&date=${date}`);
    //     setResults(response.data);
    //   } catch (err) {
    //     setError("Failed to fetch trains. Please try again later.");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchTrains();

    // };

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
                        onClick={() => {
                            setSelectedClass(c);
                            setShowAvailability(true);
                        }}
                        key={i}
                        className="min-w-[160px] border rounded-lg p-2 text-start shadow-sm bg-gray-50"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div>{c}</div>
                            <div>₹ 75</div>
                        </div>
                        <p className="text-green-800 ">AVL 70</p>
                        <p className="text-green-700 text-sm ">Avaible</p>
                    </div>
                ))}
            </div>

            {/* Date Availability */}
            {showAvailability && (
                <div className="mt-4 border-t pt-4">
                    <div className="flex gap-6 overflow-x-auto pb-3">
                        {availability.availabilityClassList[0]?.availabilities.map((d, i) => (
                            <div
                                key={i}
                                className="min-w-[140px] bg-gray-50 border rounded-lg p-3 text-center shadow-sm"
                            >
                                {d.tag && (
                                    <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                                        {d.tag}
                                    </span>
                                )}
                                <p className="font-medium">{dateFormatter(d.date)}</p>
                                <p className={` font-semibold`}>{d.status}</p>
                                {d.confirmedAvailability && (
                                    <p className="text-green-700 text-xs">Available</p>
                                )}
                                <button 
                                className="bg-orange-500 text-white w-full mt-2 py-1 rounded hover:bg-orange-600"
                                onClick={() => {
                                    
                                }}
                                >
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
