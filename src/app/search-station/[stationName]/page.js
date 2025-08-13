"use client";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";
import MoreTrainInformation from "@/components/MoreTrainInformation";
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import SearchTrainByStation from '@/components/SearchTrainByStation';
import Link from "next/link";
export default function SearchTrainByStationPage() {

    const stations = [
        { code: 'SDNR', name: 'Seydunganallur', city: 'Seydunganallur', trains: 10 },
        { code: 'BSE', name: 'Badshahpur', city: 'Badshahpur', trains: 17 },
        { code: 'BSB', name: 'Varanasi Jn', city: 'Banaras', trains: 270 },
        { code: 'APD', name: 'Alipur Duar', city: 'Alipur Duar', trains: 10 },
        { code: 'BSC', name: 'Bulandshahr', city: 'Bulandshahr', trains: 12 },
        { code: 'BSP', name: 'Bilaspur Jn', city: 'Bilaspur', trains: 174 },
        { code: 'JTI', name: 'Jaithari', city: 'Jaithari', trains: 12 },
        { code: 'JTJ', name: 'Jolarpettai', city: 'Jolarpettai', trains: 187 },
        { code: 'THVM', name: 'Thivim', city: 'Goa', trains: 52 },
        { code: 'BSL', name: 'Bhusaval Jn', city: 'Bhusawal', trains: 351 },
        { code: 'GCH', name: 'Gachhipura', city: 'Gachhipura', trains: 6 },
        { code: 'APL', name: 'Appikatla', city: 'Appikatla', trains: 14 },
        { code: 'ATNR', name: 'Awatarnagar', city: 'Saran', trains: 11 },
        { code: 'JSM', name: 'Jaisalmer', city: 'Jaisalmer', trains: 19 },
        { code: 'BRS', name: 'Birsinghpur', city: 'Umaria', trains: 27 },
        { code: 'BRR', name: 'Barakar', city: 'Barakar', trains: 36 },
        { code: 'BRY', name: 'Bareilly', city: 'Bareilly', trains: 18 },
        { code: 'BRE', name: 'Bharwari', city: 'Bharwari', trains: 14 },
        { code: 'GDB', name: 'Giddarbaha', city: 'Giddarbaha', trains: 25 },
        { code: 'BRG', name: 'Bargarh', city: 'Bargarh', trains: 8 },
        { code: 'BRH', name: 'Baikunthpur Rd', city: 'Baikunthpur', trains: 8 },
        { code: 'JUC', name: 'Jalandhar City', city: 'Jalandhar', trains: 168 },
        { code: 'BRC', name: 'Vadodara Jn', city: 'Baroda', trains: 395 },
        { code: 'BRD', name: 'Bhandara Road', city: 'Bhandara', trains: 47 },
        { code: 'GDA', name: 'Godhra Jn', city: 'Godhra', trains: 85 }
    ];


    const station = {
        code: "ADI",
        name: "Ahmedabad Jn",
        city: "Ahmadabad",
        totalTrains: 573,
    };



    return (
        <div className="min-h-screen bg-gray-200">

            <SearchTrainByStation />

            <div className=" w-full max-w-11/12 mx-auto my-4 text-gray-500">
                <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
                <span className="text-blue-700 ">Stations</span> &nbsp;»&nbsp;
                <span className="text-gray-700 font-medium ">Ahmedabad Jn</span>
            </div>

            {/* Content Section */}
            <main className='max-w-11/12 mx-auto  pb-8 md:flex gap-10 text-[14px] text-gray-700'>

                <div className=' w-full md:w-4/5 min-h-screen' >

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2 text-black">Trains from Ahmedabad Jn (ADI) Railway Station</h2>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full mx-auto">
                            <h2 className="text-xl font-semibold mb-3">Station Details</h2>
                            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Code</span>
                                    <span className="font-medium">{station.code}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Name</span>
                                    <span className="font-medium">{station.name}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">City</span>
                                    <span className="font-medium">{station.city}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-500 text-sm">Total trains</span>
                                    <span className="font-medium">
                                        <i className="fas fa-train text-blue-600 mr-1"></i>
                                        {station.totalTrains}
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
                                        <th className="px-4 py-3 sm:py-4">Station Code</th>
                                        <th className="px-4 py-3 sm:py-4">Station Name</th>
                                        <th className="px-4 py-3 sm:py-4">City</th>
                                        <th className="px-4 py-3 sm:py-4">Trains Passing Through</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stations.map((station) => (
                                        <tr key={station.code} className="hover:bg-gray-100">
                                            <td className="px-4 py-3 sm:py-4">{station.code}</td>
                                            <td className="px-4 py-3 sm:py-4">{station.name}</td>
                                            <td className="px-4 py-3 sm:py-4">{station.city}</td>
                                            <td className="px-4 py-3 sm:py-4">{station.trains}</td>
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
                        <h2 className="text-2xl font-semibold mb-2 text-black">Welcome to Ahmedabad Jn Railway Station, Ahmadabad</h2>
                        <div className="bg-white p-4 rounded-lg shadow-md w-full mx-auto">
                            <p className="mb-4 ">The station code for this station is ADI. A total of 573 trains pass through Ahmedabad Jn Railway Station. Get all the information such as - Arrival, Departure, Train Number, Stops, Stoppage time, Days of Run and Timings about the trains passing through Ahmadabad.</p>
                            <p className="mb-4 ">TSome of the trains that arrive at Ahmedabad Jn Railway Station are 19223 Sbib Jat Exp, 22990 Mhv Bdts Exp, 22991 Bl Bgkt Sup, 22992 Ju Bl Exp</p>
                            <p className="mb-4 ">For real-time updates and information on the running status of any train, you can check the <Link href="/live-train-status" className="text-blue-600 font-semibold">live train running status</Link> of all the trains arriving or departing from Ahmedabad Jn Railway Station. Use our advanced <Link href="/live-train-status" className="text-blue-600 font-semibold">PNR Status Prediction</Link>PNR Status Prediction feature to know about your chances of confirmation of a waitlisted train ticket. You can also search for trains to other train stations by using the complete <Link href="/live-train-status" className="text-blue-600 font-semibold">train list</Link>  for Ahmadabad to find  <Link href="/live-train-status" className="text-blue-600 font-semibold">train seat availability</Link>  on different trains.</p>
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