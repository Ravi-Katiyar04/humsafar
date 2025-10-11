"use client";
import { useState, useEffect,use } from "react";
import FAQSection from "@/components/FAQSection";
import MoreTrainInformation from "@/components/MoreTrainInformation";
import PlatformLocator from "@/components/PlatformLocator";
import axios from "axios";


export default function TrainPlatformLocator({ params }) {
    const { train: train } = use(params);
    const [trainData, setTrainData] = useState('');
    const [startDay, setStartDay] = useState('1');


    useEffect(() => {
    const fetchTrainStatus = async () => {
      setError(null);
      setTrainData(null);

      try {
        const res = await axios.get(
          `/api/liveStatusAndDetails?trainNumber=${trainNumber}&startDay=${startDay}`
        );
        setTrainData(res.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrainStatus();
  }, [train]);
    const features = [
        {
            icon: "fas fa-train",
            text: "Seamless Train Ticket Bookings",
        },
        {
            icon: "fas fa-bolt",
            text: "Free Cancellation & Instant Refunds",
        },
        {
            icon: "fas fa-location-dot",
            text: "Live Train Status with Delay Prediction",
        },
        {
            icon: "fas fa-handshake",
            text: "IRCTC Authorised Partner",
        },
    ];


    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <PlatformLocator/>

            {/* Breadcrumbs */}
            <div className="max-w-11/12 mx-auto px-4 mt-4 text-sm text-gray-500">
                <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
                <span className="text-blue-700">Platform Locator</span>&nbsp;»&nbsp;
                <span className="text-gray-700 font-medium ">{trainData.train_name} - {trainData.train_number}</span>
            </div>

            {/* Content Section */}
            <div className="max-w-11/12 mx-auto px-4 py-8 text-gray-800">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="bg-white shadow-md rounded-lg p-5 w-full mx-auto border border-gray-200">
                        {/* Top Row */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded">
                                    3.5
                                </span>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {trainData.train_name} {trainData.train_number} Train
                                </h2>
                            </div>
                            <span className="text-orange-500 text-sm font-medium cursor-pointer hover:underline">
                                View Running Status
                            </span>
                        </div>

                        {/* Sub Row - Days */}
                        <div className="mt-1 text-sm text-gray-500 flex space-x-1">
                            <span>Runs on:</span>
                            <span className="font-semibold">{trainData.run_days}</span>
                        </div>

                        <hr className="my-3" />

                        {/* Train Timings */}
                        <div className="flex justify-between items-center">
                            {/* Start */}
                            <div className="text-center">
                                <p className="text-2xl font-bold">{trainData.source}</p>
                                <p className="text-2xl font-bold">11:30</p>
                                <p className="text-gray-600 text-sm">{trainData.source_stn_name}</p>
                            </div>

                            {/* Duration */}
                            <div className="text-center text-gray-500">
                                <p className="text-sm">38hr 30min</p>
                                <div className="flex items-center justify-center space-x-2 my-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                    <span className="w-20 border-t border-gray-400"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                </div>
                                <p className="text-xs">{[...trainData?.previous_stations,...trainData?.upcoming_stations].length()} Stops</p>
                            </div>

                            {/* End */}
                            <div className="text-center">
                                <p className="text-2xl font-bold">{trainData.destination}</p>
                                <p className="text-2xl font-bold">02:00</p>
                                <p className="text-gray-600 text-sm">{trainData.dest_stn_name}</p>
                            </div>
                        </div>

                        <hr className="my-3" />

                        {/* Facilities */}
                        <div className="flex flex-wrap gap-5 text-gray-500 text-sm">
                            <div className="flex items-center space-x-2 opacity-50">
                                <i className="fas fa-utensils"></i>
                                <span>Pantry</span>
                            </div>
                            <div className="flex items-center space-x-2 opacity-50">
                                <i className="fas fa-bolt"></i>
                                <span>Superfast</span>
                            </div>
                            <div className="flex items-center space-x-2 text-indigo-600">
                                <i className="fas fa-moon"></i>
                                <span>Overnight</span>
                            </div>
                            <div className="flex items-center space-x-2 opacity-50">
                                <i className="fas fa-concierge-bell"></i>
                                <span>Catering</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 max-w-md border border-gray-200">
                        <h2 className="font-bold text-gray-800 mb-5">
                            Why book Train Tickets with HumSafar?
                        </h2>
                        <ul className="space-y-2">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-3">
                                    <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <span className="text-gray-700 text-sm">{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow border my-10 border-gray-200">
                    <table className="min-w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-gray-700">Station</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Platform</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Arrives</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Halt</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Departs</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Day</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...trainData?.previous_stations,...trainData?.upcoming_stations].map((station, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="px-6 py-4 flex items-center space-x-3">
                                        {/* Timeline dot */}
                                        <div className="relative flex flex-col items-center mr-3">
                                            <i className="fas fa-circle text-orange-500 text-xs"></i>
                                            
                                        </div>
                                        <span>{station.station_code}-{station.station_name}</span>
                                    </td>
                                    <td className="px-6 py-4">{station.platform_number}</td>
                                    <td className="px-6 py-4">{station.sta}</td>
                                    <td className="px-6 py-4">{station.halt}</td>
                                    <td className="px-6 py-4">{station.std}</td>
                                    <td className="px-6 py-4">{station.a_day}</td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-1 border border-orange-500 text-orange-500 rounded hover:bg-orange-50">
                                            BOOK
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <section className="max-w-11/12 mx-auto px-4 mb-8">
                <MoreTrainInformation />

                <FAQSection />
            </section>

        </div>
    );
}
