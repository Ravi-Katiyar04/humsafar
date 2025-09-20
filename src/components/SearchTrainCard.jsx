import React, { useState, useEffect, use } from "react";
import { getSeatAvailability,getFareDetails } from "@/data.js";
import { useRouter } from "next/navigation";
import { format, add } from "date-fns"; // date-fns for date manipulation used to remove hydaration error in Next.js
import axios from "axios";


function formatDuration(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);



    let result = "";
    if (hours > 0) result += `${hours}hr `;
    if (minutes > 0) result += `${minutes}min`;

    return result.trim();
}
function formatDate(inputDate) {
  // inputDate expected format: YYYY-MM-DD
  const [year, month, day] = inputDate.split("-");
  return `${day}-${month}-${year}`;
}
function getFormattedDate(dateStr, from_std, duration) {
    if (!dateStr) return "";

    const [day, month, year] = dateStr.split("-").map(Number);

    // If no departure time or duration, just return base date
    if (!from_std || !duration) {
        const baseDate = new Date(year, month - 1, day);
        return format(baseDate, "EEE, dd MMM");
    }

    const [hours, minutes] = from_std.split(":").map(Number);
    const [durHours, durMinutes] = duration.split(":").map(Number);

    // Departure date with time
    let departure = new Date(year, month - 1, day, hours, minutes);

    // Add journey duration
    const arrival = add(departure, { hours: durHours, minutes: durMinutes });

    // Format consistently (SSR-safe)
    return format(arrival, "EEE, dd MMM");
}


const SearchTrainCard = ({ train }) => {
    const router = useRouter();
    const dateStr = train?.train_date || "01-01-2025"; // Default date if not provided
    // const ticketPrice = 100; // Static price for demonstration

    const [availability, setAvailability] = useState(getSeatAvailability()?.data);
    const [ticketFare, setTicketFare] = useState(getFareDetails()?.data);

    const [selectedClass, setSelectedClass] = useState(train?.class_type[0]);
    const [quota, setQuota] = useState("GN");
    const [trainNo, setTrainNo] = useState(train?.train_number || "");

    const [selectedDate, setSelectedDate] = useState(dateStr);

    const [showAvailability, setShowAvailability] = useState(false);



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



    const handleBook = async (d) => {

        const { data } = await axios.post("/api/booking/createBooking", {
            train,
            ticketPrice: ticketFare.general.find((cls) => cls.classType === selectedClass)?.fare,
            availability:availability.availabilityClassList[0]?.availabilities.find((avl) => avl.date === d.date)?.status || "AVAILABLE-180",
            selectedClass,
            quota,
            duration: formatDuration(train.duration),
            formattedDate: getFormattedDate(d.date, d.from_std, d.duration),
            formattedArrivalDate: getFormattedDate(d.date, train.from_std, train.duration),
            bookingDate: d.date
        });
        if (data.ok) {
            // cookie is set by server; now navigate to passenger page
            // Adjust the passenger page route as per your routing scheme
            router.push(`/search/${train.from}/${train.to}/${train.train_date}/${train.train_number}/${selectedClass}/${quota}`);
        } else {
            alert(data.error || "Error creating booking");
        }
    };

    if (!train)
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600" />
            </div>
        );

    return (
        <div className="bg-white rounded-xl shadow-md w-full mx-auto">
            {/* Train Header */}
            <div className="flex justify-between items-center p-4 border-b pb-4">
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
                        <p className="text-gray-500 text-sm">{getFormattedDate(dateStr, "", "")}</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <span className="text-gray-500 text-sm">{formatDuration(train.duration)}</span>
                        <div className="w-24 border-t-2 border-gray-300 my-1"></div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{train.to}</p>
                        <p className="text-lg font-bold">{train.to_sta}</p>
                        <p className="text-gray-500 text-sm">{getFormattedDate(dateStr, train.from_std, train.duration)}</p>
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
            <div className="flex gap-3 relative overflow-x-auto py-2 px-4">
                {train.class_type.map((c, i) => (
                    <div
                        onClick={() => {
                            setSelectedClass(c);
                            setShowAvailability(true);
                        }}
                        key={i}
                        className={`min-w-[140px] m-2 border cursor-pointer rounded-lg p-2 text-start text-sm shadow-sm relative ${showAvailability && selectedClass === c ? "bg-blue-50 border-blue-600" : ""}`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div>{c}</div>
                            <div> ₹ 
                                {ticketFare.general.find((cls) => cls.classType === c)?.fare || "N/A"}
                            </div>
                        </div>
                        <p className="text-green-800">AVL 70</p>
                        <p className="text-green-700">Available</p>

                        {/* Triangle below the card */}

                        {showAvailability && selectedClass === c && (
                            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-blue-600 absolute bottom-[-12px] right-1/2 translate-x-1/2"></div>
                        )}

                    </div>
                ))}
            </div>

            {/* Date Availability */}
            {showAvailability && (
                <div className="mt-4 bg-blue-100 pt-4 pl-6">
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {availability.availabilityClassList[0]?.availabilities.map((d, i) => (

                            <div
                                key={i}
                                className="min-w-[140px] bg-gray-50 border border-orange-600 rounded-lg text-center text-sm shadow-sm"
                            >
                                <div className="py-2 px-3">
                                    {d.tag && (
                                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                                            {d.tag}
                                        </span>
                                    )}
                                    <p className="font-medium">{getFormattedDate(formatDate(d.date),"", "")}</p>
                                    <p className={` font-semibold`}>{d.status}</p>
                                    {d.confirmedAvailability && (
                                        <p className="text-green-700 text-xs">Available</p>
                                    )}
                                </div>
                                <button
                                    className="bg-orange-500 cursor-pointer text-white w-full mt-2 py-1 rounded-b-lg hover:bg-orange-600"
                                    onClick={() => handleBook(d)}
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
