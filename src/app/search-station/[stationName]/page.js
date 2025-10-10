"use client";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";
import MoreTrainInformation from "@/components/MoreTrainInformation";
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import SearchTrainByStation from '@/components/SearchTrainByStation';
import Link from "next/link";
import { use } from "react";
import axios from "axios";


const durationToMinutes = (arrival, departure) => {
    if (arrival === "Source" ) return "Source";
    if (departure === "Destination") return "Destination";
    const arrivalMinutes = Number(arrival.split(":")[0]) * 60 + Number(arrival.split(":")[1]);
    const departureMinutes = Number(departure.split(":")[0]) * 60 + Number(departure.split(":")[1]);
    return (departureMinutes - arrivalMinutes) / 60;
}

export default function SearchTrainByStationPage({ params }) {
    const { stationName: stationName } = use(params);
    const stationDetail= stationName.split('-')

    const [trains, setTrains] = useState([]);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);

    useState(() => {
        const fetchTrainStatus = async () => {

            setTrains([]);
            try {
                const res = await axios.get(
                    `/api/getTrainsByStation?stationCode=${stationName}`
                );
                if (res.data.status) {
                    // setTrains(...res.data.data.originating, ...res.data.data.passing, ...res.data.data.destination);
                    setTrains(res.data.data.passing);
                    
                } else {
                    setError(res.data.error);
                    setTrains([]);
                }
            } catch (err) {
                setError(err.message);
            }
        }
        fetchTrainStatus();
    }, [stationName]);



    return (
        <div className="min-h-screen bg-gray-200">

            <SearchTrainByStation />

            <div className=" w-full max-w-11/12 mx-auto my-4 text-gray-500">
                <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
                <span className="text-blue-700 ">Stations</span> &nbsp;»&nbsp;
                <span className="text-gray-700 font-medium ">{stationDetail[0]}</span>
            </div>

            {/* Content Section */}
            <main className='max-w-11/12 mx-auto  pb-8 md:flex gap-10 text-[14px] text-gray-700'>

                <div className=' w-full md:w-4/5 min-h-screen' >

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2 text-black">Trains from {stationDetail[0]} ({stationDetail[1]}) Railway Station</h2>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full mx-auto">
                            <h2 className="text-xl font-semibold mb-3">Station Details</h2>
                            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Code</span>
                                    <span className="font-medium">{stationDetail[1]}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Name</span>
                                    <span className="font-medium">{stationDetail[0]}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">State</span>
                                    <span className="font-medium">{stationDetail[2]}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-500 text-sm">Total trains</span>
                                    <span className="font-medium">
                                        <i className="fas fa-train text-blue-600 mr-1"></i>
                                        {trains?.length || 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 bg-white pb-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="min-w-[600px] w-full text-center font-semibold text-sm sm:text-base">
                                <thead>
                                    <tr className="bg-gray-300 text-black">
                                        <th className="px-4 py-3 sm:py-4">Train Name/No.</th>
                                        <th className="px-4 py-3 sm:py-4">Arrives</th>
                                        <th className="px-4 py-3 sm:py-4">Departs</th>
                                        <th className="px-4 py-3 sm:py-4">Duration</th>
                                        <th className="px-4 py-3 sm:py-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trains.slice(0, limit).map((train) => (
                                        <tr key={train.trainNo} className="hover:bg-gray-100">
                                            <td className="px-4 py-3 sm:py-4 text-blue-600">{train.trainNo} {train.trainName}</td>
                                            <td className="px-4 py-3 sm:py-4">{train.arrivalTime}</td>
                                            <td className="px-4 py-3 sm:py-4">{train.departureTime}</td>
                                            <td className="px-4 py-3 sm:py-4">{durationToMinutes(train.arrivalTime, train.departureTime)}</td>
                                            <td><button className="bg-blue-500 hover:bg-blue-700 border text-white font-bold py-2 px-4 rounded">Book Now</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center mt-4">
                            <button
                                onClick={() => setLimit(limit + 10)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-200"
                            >
                                Show More
                            </button>
                        </div>
                    </section>



                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2 text-black">Welcome to {stationDetail[0]} Railway Station, {stationDetail[2]}</h2>
                        <div className="bg-white p-4 rounded-lg shadow-md w-full mx-auto">
                            <p className="mb-4 ">The station code for this station is {stationDetail[1]}. A total of {trains?.length || 0} trains pass through {stationDetail[0]} Railway Station. Get all the information such as - Arrival, Departure, Train Number, Stops, Stoppage time, Days of Run and Timings about the trains passing through {stationDetail[0]}.</p>
                            <p className="mb-4 ">TSome of the trains that arrive at {stationDetail[0]} Railway Station are 19223 Sbib Jat Exp, 22990 Mhv Bdts Exp, 22991 Bl Bgkt Sup, 22992 Ju Bl Exp</p>
                            <p className="mb-4 ">For real-time updates and information on the running status of any train, you can check the <Link href="/live-train-status" className="text-blue-600 font-semibold">live train running status</Link> of all the trains arriving or departing from {stationDetail[0]} Railway Station. Use our advanced <Link href="/live-train-status" className="text-blue-600 font-semibold">PNR Status Prediction</Link>PNR Status Prediction feature to know about your chances of confirmation of a waitlisted train ticket. You can also search for trains to other train stations by using the complete <Link href="/live-train-status" className="text-blue-600 font-semibold">train list</Link>  for {stationDetail[0]} to find  <Link href="/live-train-status" className="text-blue-600 font-semibold">train seat availability</Link>  on different trains.</p>
                        </div>
                    </section>

                    <section className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2 text-black">Train Station Code Index</h2>
                        <p className="mb-4 ">Check out the station codes for the top 10 busiest railway stations of India:</p>
                        <table className="w-full max-w-5xl mt-6 border border-gray-400 text-[14px] text-center">
                            <thead >
                                <tr className="bg-gray-200">
                                    <th className="p-2 border border-gray-400" >Station Name</th>
                                    <th className="p-2 border border-gray-400">	City</th>
                                    <th className="p-2 border border-gray-400">Station Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-gray-400">Howrah Junction Railway Station</td>
                                    <td className="p-2 border border-gray-400">Kolkata</td>
                                    <td className="p-2 border border-gray-400">HWH</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">New Delhi Railway Station</td>
                                    <td className="p-2 border border-gray-400">New Delhi</td>
                                    <td className="p-2 border border-gray-400">NDLS</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Chhatrapati Shivaji Terminus</td>
                                    <td className="p-2 border border-gray-400">Mumbai</td>
                                    <td className="p-2 border border-gray-400">CSTM</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Kanpur Central Railway Station</td>
                                    <td className="p-2 border border-gray-400">Kanpur</td>
                                    <td className="p-2 border border-gray-400">CNB</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Patna Railway Station</td>
                                    <td className="p-2 border border-gray-400">Patna</td>
                                    <td className="p-2 border border-gray-400">PNBE</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Vijayawada Railway Station</td>
                                    <td className="p-2 border border-gray-400">Vijayawada</td>
                                    <td className="p-2 border border-gray-400">BZA</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Kalyan Junction Railway Station</td>
                                    <td className="p-2 border border-gray-400">Mumbai</td>
                                    <td className="p-2 border border-gray-400">KYN</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Prayagraj Junction Railway Station</td>
                                    <td className="p-2 border border-gray-400">Prayagraj</td>
                                    <td className="p-2 border border-gray-400">PRYJ</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Itarsi Junction Railway Station</td>
                                    <td className="p-2 border border-gray-400">Itarsi</td>
                                    <td className="p-2 border border-gray-400">ET</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-400">Vadodara Railway Station</td>
                                    <td className="p-2 border border-gray-400">Vadodara</td>
                                    <td className="p-2 border border-gray-400">BRC</td>
                                </tr>

                            </tbody>
                        </table>
                    </section>

                    <MoreTrainInformation />

                    < FAQSection />

                </div>

                <div className=' mb-4 md:w-1/5 w-full flex flex-col gap-8 min-h-screen' >
                    <RailwayInfo />
                    <TopTrainRoutes />

                </div>
            </main>

        </div>
    );
}