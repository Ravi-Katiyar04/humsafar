"use client";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";


export default function TatkalBooking() {
    const [source, setSource] = useState("Bengaluru (YPR)");
    const [destination, setDestination] = useState("Mysore (MYS)");
    const [journeyDate, setJourneyDate] = useState("01 Jul, Tue");

    const links = [
        { icon: 'fa-train-subway', label: 'IRCTC Train Booking', href: '#' },
        { icon: 'fa-ticket', label: 'PNR Status Enquiry', href: '#' },
        { icon: 'fa-chair', label: 'Train Seat Availability', href: '#' },
        { icon: 'fa-train', label: 'Tatkal Railway Reservation', href: '#' },
    ];

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


    const topRoutes = [
        { label: 'New Delhi to Ayodhya', href: '/train/new-delhi-ayodhya' },
        { label: 'Varanasi to Ayodhya', href: '/train/varanasi-ayodhya' },
        { label: 'Mumbai to Goa', href: '/train/mumbai-goa' },
        { label: 'Lucknow to Ayodhya', href: '/train/lucknow-ayodhya' },
        { label: 'New Delhi to Mumbai', href: '/train/new-delhi-mumbai' },
        { label: 'New Delhi to Goa', href: '/train/new-delhi-goa' },
        { label: 'New Delhi to Jammu', href: '/train/new-delhi-jammu' },
        { label: 'Pune to Mumbai', href: '/train/pune-mumbai' },
        { label: 'New Delhi to Haridwar', href: '/train/new-delhi-haridwar' },
        { label: 'New Delhi to Amritsar', href: '/train/new-delhi-amritsar' },
        { label: 'New Delhi to Agra', href: '/train/new-delhi-agra' },
        { label: 'Mumbai to New Delhi', href: '/train/mumbai-new-delhi' },
        { label: 'Mumbai to Pune', href: '/train/mumbai-pune' },
        { label: 'Ayodhya to Varanasi', href: '/train/ayodhya-varanasi' },
        { label: 'New Delhi to Ujjain', href: '/train/new-delhi-ujjain' },
        { label: 'Bengaluru to Ayodhya', href: '/train/bengaluru-ayodhya' },
        { label: 'New Delhi to Varanasi', href: '/train/new-delhi-varanasi' },
        { label: 'New Delhi to Chandigarh', href: '/train/new-delhi-chandigarh' },
        { label: 'New Delhi to Jaipur', href: '/train/new-delhi-jaipur' },
    ];

    const pnrStatus = [
        { code: 'CNF', desc: 'The train ticket status shows as ‘CNF’ when seats are confirmed.' },
        { code: 'RAC', desc: '	It stands for ‘Reservation Against Cancellation’ meaning the train ticket has a confirmed seat but waitlisted berth. If tickets are booked under RAC status, the allocated berth is split into two seats.' },
        { code: 'CAN', desc: 'Cancelled: the ticket has been cancelled.' },
        { code: 'WL', desc: 'Waiting List: gets confirmed only if passengers before you cancel their tickets.' },
        { code: 'GNWL', desc: 'General Waiting List: high probability of confirmation.' },
        { code: 'PQWL', desc: '‘Pooled Quota Waiting List’ status is given to passengers travelling from the origin station to a station before the last station, from an intermediate station to the destination station, or between any two intermediate stations.' },
        { code: 'RLWL', desc: '	‘Remote Location Waiting List’ refers to a ticket issued to a passenger for intermediate stations (between the origin and terminating stations). These intermediate stations are typically the most important towns along the route.' },
        { code: 'TQWL', desc: '	It refers to the ‘Tatkal Quota Waiting List,’ which applies to tatkal ticket bookings. Tickets under the Tatkal Quota are confirmed directly without going through RAC. However, during chart preparation, GNWL (General Waiting List) is given priority over TQWL (Tatkal Quota Waiting List).' },
        { code: 'NOSB', desc: 'It stands for ‘No Seat Berth,’ which indicates that the journey is permitted without a seat. This train PNR status is designated for child passengers under the age of 11 years.' }
    ];

    const handleSearch = () => {
        // Your logic here
        console.log({ source, destination, journeyDate });
    };

    return (
        <div className="min-h-screen bg-gray-200">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-900 to-pink-700 py-10 text-center">
                <h1 className="text-3xl font-semibold mb-8">Indian Railway Stations</h1>

                <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1 text-left pr-6">
                        <label className="text-xs text-gray-500 mb-1 font-semibold" htmlFor="source">STATION NAME/CODE</label>
                        <input
                            id="source"
                            type="text"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                            placeholder="Enter Station name or code"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 md:rounded-l-none md:rounded-r-lg w-full md:w-auto"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className=" w-full max-w-11/12 mx-auto my-4 text-gray-500">
                <span className="text-orange-500">Home</span> &nbsp;»&nbsp;
                <span className="text-gray-700 font-medium ">Stations</span>
            </div>

            {/* Content Section */}
            <main className='max-w-11/12 mx-auto  pb-8 md:flex gap-10 text-[14px] text-gray-700'>

                <div className=' border-b-2 w-full md:w-4/5 min-h-screen' >

                    <section className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2 text-black">Train Stations and Station Codes</h2>
                        <p className="mb-4 ">Indian Railways is undoubtedly one of the largest railway networks in the world. It connects cities, towns, and villages from all corners of India, providing an extensive connection that allows passengers to travel conveniently between different locations.</p>
                        <p className="mb-4 ">Railways not only offer convenience but are also cost-effective and easy to book. It&#39;s no wonder that travellers from across the country rely on it for their journeys.</p>
                        <p className="mb-4 ">Consequently, the list of Indian Railway stations is vast and can be overwhelming, presenting a challenge for both experienced travellers and newcomers when it comes to selecting the right train stations for their journey.</p>
                        <p className="mb-4 ">Even though the Indian Railway Enquiry Service is accessible for assistance, it can become confusing at times, particularly if you are not familiar with station codes. At such a juncture, Railway station code search becomes tough.</p>
                        <p className="mb-4 ">Acknowledging this problem, ixigo has developed a simple list of railway stations with names that not only provides data on trains between major stations but also sheds light on information about all trains operating along India&#39;s railway routes at any given time.</p>
                    </section>

                    <section className="mb-8 bg-white pb-6 rounded-lg shadow-sm border border-gray-200">
                        <table className="w-full  text-center font-semibold">
                            <thead >
                                <tr className="bg-gray-300 text-black">
                                    <th className=" px-4 py-4">Station Code</th>
                                    <th className=" px-4 py-4">Station Name</th>
                                    <th className=" px-4 py-4">City</th>
                                    <th className=" px-4 py-4">Trains Passing Through</th>

                                </tr>
                            </thead>
                            <tbody>
                                {stations.map((station) => (
                                    <tr key={station.code}>
                                        <td className=" px-4 py-4">{station.code}</td>
                                        <td className=" px-4 py-4">{station.name}</td>
                                        <td className=" px-4 py-4">{station.city}</td>
                                        <td className=" px-4 py-4">{station.trains}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="text-center align-center mt-4">
                            <button onClick={() => setLimit(limit + 10)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Show More
                            </button>
                        </div>
                    </section>


                    <section className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2 text-black">Why Do You Need a Railway Station List?</h2>
                        <p className="mb-4 ">As millions of commuters use the Railway Enquiry System daily, getting timely information can be challenging, often leading to long wait times. The Indian Railway Stations List allows you to swiftly find answers to your questions without the need for assistance.</p>
                        <p className="mb-4 ">There’s an extensive network of railway stations in India. In such a scenario, identifying the specific trains serving a particular station can be challenging. However, with a station list, you can effortlessly select trains that pass through your desired station.</p>
                        <p className="mb-4 ">When you are booking a train ticket online, it&#39;s essential to know the railway station codes for both your departure point and destination. You can conveniently access all railway station codes within the station list.</p>
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

                    < FAQSection />

                </div>

                <div className=' border-b-2 md:w-1/5 w-full flex flex-col gap-8 min-h-screen' >
                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-xs mx-auto">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Railway Information</h2>
                        <ul className="space-y-4">
                            {links.map((link, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <i className={`fas ${link.icon} text-blue-600 text-lg`} />
                                    <a href={link.href} className="text-blue-600 hover:underline text-sm font-medium">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-xs mx-auto">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Railway Information</h2>
                        <ul className="space-y-4">
                            {topRoutes.map((link, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <a href={link.href} className="text-blue-600 hover:underline text-sm font-medium">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>

        </div>
    );
}
