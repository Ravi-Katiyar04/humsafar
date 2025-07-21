"use client"
import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import TrainDetailsCard from '@/components/TrainDetailsCard';
import TrainStatusDisplay from '@/components/TrainStatusDisplay';
import FAQSection from '@/components/FAQSection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import MoreTrainInformation from '@/components/MoreTrainInformation';
export default function VandeBharat() {
    const [trainStatus, setTrainStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const links = [
        { icon: 'fa-train-subway', label: 'IRCTC Train Booking', href: '#' },
        { icon: 'fa-ticket', label: 'PNR Status Enquiry', href: '#' },
        { icon: 'fa-chair', label: 'Train Seat Availability', href: '#' },
        { icon: 'fa-train', label: 'Tatkal Railway Reservation', href: '#' },
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


    const [source, setSource] = useState("Bengaluru (YPR)");
    const [destination, setDestination] = useState("Mysore (MYS)");
    const [journeyDate, setJourneyDate] = useState("2024-07-01"); // Use ISO date format for input[type="date"]

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setTrainStatus(null);
        try {
            // In a real app, you'd call your backend API here
            // const response = await fetch(`/api/train-status?trainNumber=${trainNumber}`);
            // if (!response.ok) {
            //   throw new Error('Failed to fetch train status');
            // }
            // const data = await response.json();
            // setTrainStatus(data);

            // --- Mock data for demonstration ---
            setTimeout(() => {
                // For demonstration, use source or destination as trainNumber, or add a trainNumber input
                const trainNumber = '12345'; // Replace with actual logic if needed
                if (trainNumber === '12345') {
                    setTrainStatus({
                        trainNumber: '12345',
                        trainName: 'Express Superfast',
                        currentStatus: 'Running Late by 30 mins, expected arrival at Delhi Jn in 15 mins.',
                        lastUpdated: new Date().toLocaleString(),
                        eta: '2:30 PM',
                        platform: 'Platform 3',
                        halts: [
                            { station: 'Station A', arrival: '10:00 AM', departure: '10:05 AM' },
                            { station: 'Station B', arrival: '11:30 AM', departure: '11:35 AM' },
                        ],
                        // ... more detailed data as per screenshots
                    });
                } else {
                    setError('Train not found or no data available.');
                }
                setLoading(false);
            }, 1000);
            // --- End Mock data ---

        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-600  text-[14px] ">


            <Header />

            <div className="bg-gradient-to-r py-10 text-center">
                <h1 className="text-3xl font-semibold mb-8 ">Vande Bharat Express Trains</h1>

                <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1 text-left">
                        <label className="text-xs text-gray-500 mb-1" htmlFor="source">From</label>
                        <input
                            id="source"
                            type="text"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <i className="fas fa-exchange-alt text-gray-600 text-lg"></i>
                    </div>

                    <div className="flex-1 px-4 text-left">
                        <label className="text-xs text-gray-500 mb-1" htmlFor="destination">To</label>
                        <input
                            id="destination"
                            type="text"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex-1 px-4 text-left">
                        <label className="text-xs text-gray-500 mb-1" htmlFor="journeyDate">Departure Date</label>
                        <input
                            id="journeyDate"
                            type="date"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                            value={journeyDate}
                            onChange={(e) => setJourneyDate(e.target.value)}
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

            <main className='max-w-11/12 mx-auto  py-8 md:flex gap-10 '>

                <div className=' border-b-2 w-full md:w-4/5 min-h-screen' >

                    <h1 className="text-xl font-bold mb-4 text-black">Vande Bharat Express</h1>
                    <p className="mb-6 text-[14px] ">
                        <span className='mb-4 block'>The Vande Bharat Express is a semi-high-speed train service operated by the Indian Railways. Similar to the renowned Shatabdi Express, this train efficiently connects various cities across India with an operational speed of 130 km/hr. The first Vande Bharat train, also referred to as Train-18, was inaugurated by the esteemed Prime Minister of India, Shri Narendra Modi, in 2019. As of May 2024, 106 Vande Bharat Express trains are currently in service. </span>
                    </p>


                    <section className="mb-8">
                        <h1 className="text-xl font-bold mb-4 text-black">Check Train Seat Availability Online</h1>
                        <TrainDetailsCard
                        />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-black">Vande Bharat Express: Facilities & Features</h2>
                        <p className="mb-2 text-[14px]">The Vande Bharat Express is the ideal example of India&#39;s present-day rail infrastructure, consisting of modern design and luxurious features. Here are a few facilities and features you should know about -</p>
                        <ul className="list-disc ml-5 space-y-1 text-[14px]">
                            <li>The IRCTC Vande Bharat has a sleek interior similar to that of an airplane, creating a delightful ambience for passengers.</li>
                            <li>Passengers can enhance their travel experience with the flexibility of rotatable seats, making it easier to socialise or enjoy the view.</li>
                            <li>Large windows in every coach provide panoramic views, turning sightseeing into a pleasant journey with beautiful scenery.</li>
                            <li>The train&#39;s catering service is exceptional, adding to its overall appeal and ensuring passengers are well-fed during the journey.</li>
                            <li>It features additional amenities, including automatic doors, smoke alarms, surveillance systems, and odour control, ensuring safety and comfort.</li>
                            <li>Advanced toilets with bio vacuum technology and sensory taps contribute to a seamless and comfortable travel experience for passengers.</li>
                        </ul>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-black">Major Vande Bharat Train Routes</h2>
                        <ul className="list-disc ml-5 space-y-2 text-[14px]">
                            <li><strong className="text-black text-[16px] block">New Delhi–Varanasi Vande Bharat Express</strong> This was the first Vande Bharat route introduced by the Indian Railways. This semi-high-speed train runs between New Delhi and Varanasi with stops at Kanpur and Allahabad. It covers a distance of 759 km in 8 hours. For Vande Bharat tickets price for CC and EC class, please check the seat availability above.</li>
                            <li><strong className="text-black text-[16px] block">New Delhi–Shri Mata Vaishno Devi Katra Vande Bharat Express</strong> This Vande Bharat train route has stoppages at Ambala Cantt, Ludhiana, Jammu Tawi, etc. and travels from New Delhi to Katra. It is much faster than other trains and covers a distance of 655 km in just 8 hours. For Vande Bharat tickets price for CC and EC class, please check the seat availability above.</li>
                            <li><strong className="text-black text-[16px] block">Gandhinagar–Mumbai Vande Bharat Express</strong> Vande Bharat train number 20902, Gandhinagar–Mumbai Express is one of the major Vande Bharat routes across India. It covers a distance of 522 km in about 6 hours and 20 minutes. This train offers several facilities, including CCTV, vacuum bio toilets, and automatic doors, among others. For Vande Bharat tickets price for CC and EC class, please check the seat availability above.</li>
                            <li><strong className="text-black text-[16px] block">Kasaragod–Thiruvananthapuram Vande Bharat Express</strong> Vande Bharat train number 20633, Kasaragod–Thiruvananthapuram Express is one of the main routes in the Vande Bharat trains list. For Vande Bharat tickets price for CC and EC class, please check the seat availability above. This train covers a distance of 574 km in 8 hours. It stops at Ernakulam, Alleppey, Kollam and other stations.</li>
                            <li><strong className="text-black text-[16px] block">Patna–Howrah Vande Bharat Express</strong> In the list of Vande Bharat trains, Patna–Howrah Vande Bharat Express is surely one of the most popular ones. For Vande Bharat tickets price for CC and EC class, please check the seat availability above. It covers a distance of 532 km in about 6 hours and 35 minutes. This train has stops at Durgapur, Asansol, Jasidih Junction, etc.</li>
                        </ul>
                    </section>

                    <MoreTrainInformation />

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-black mb-4">Vande Bharat Express Trains Running Status</h2>
                        <div className="grid grid-cols-3 gap-2 bg-white p-2 rounded-md text-center text-orange-600 text-sm font-medium">
                            <a href="#" className="border p-2 hover:underline">22962 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">20172 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">20901 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">20902 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">22477 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">22961 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">22440 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">20834 Running Status</a>
                            <a href="#" className="border p-2 hover:underline">22415 Running Status</a>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="px-6 py-2 border border-orange-500 text-orange-600 font-semibold rounded-md hover:bg-orange-100 transition">Load More</button>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-black mb-4">Vande Bharat Express Trains Seat Availability</h2>
                        <div className="grid grid-cols-3 gap-2 bg-white p-2 rounded-md text-center text-orange-600 text-sm font-medium">
                            <a href="#" className="border p-2 hover:underline">22962 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">20172 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">20901 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">20902 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">22477 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">22961 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">22440 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">20834 Seat Availability</a>
                            <a href="#" className="border p-2 hover:underline">22415 Seat Availability</a>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="px-6 py-2 border border-orange-500 text-orange-600 font-semibold rounded-md hover:bg-orange-100 transition">Load More</button>
                        </div>
                    </section>


                    <FAQSection />
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