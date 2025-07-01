"use client"
import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import TrainStatusDisplay from '@/components/TrainStatusDisplay';
import FAQSection from '@/components/FAQSection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

export default function Home() {
    const [trainStatus, setTrainStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const features = [
        {
            icon: 'fas fa-ticket',
            title: 'Check PNR Status of Train Tickets',
            description: 'We provide an easy way for you to check the PNR status of your train tickets because we understand how important your travel plans are. You can quickly monitor any changes to your PNR status and make adjustments if needed.',
        },
        {
            icon: 'fas fa-user',
            title: 'Passenger and Trip Details',
            description: 'You can easily access all essential passenger details and important information for your train trip, including ticket information, departure and arrival times, train routes, and more.',
        },
        {
            icon: 'fas fa-chair',
            title: 'Seat Map and Coach Position',
            description: 'Explore the detailed seat map and coach layout to find where you will be seated during your journey. With real-time updates on your PNR status, you can enjoy a seamless travel experience from start to finish.',
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Get 3x Refunds* with Travel Guarantee',
            description: 'Keep track of your PNR status live and feel free to cancel your plans whenever you need to. With our Travel Guarantee feature, you can enjoy 3x refunds, giving you the peace of mind you deserve. *T&C apply.',
        },
        {
            icon: 'fas fa-receipt',
            title: 'PNR Chart Preparation and Live Updates',
            description: 'Never miss a moment with real-time updates on your PNR chart preparation and seat confirmation chances. Whether you’re eagerly awaiting your seat details or planning your next move, we’ve got you covered every step of the way!',
        },
    ];

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


    const handleSearch = async (trainNumber) => {
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
        <div className="min-h-screen  bg-gray-100 text-gray-600  text-[14px] ">


            <Header />

            <div className="min-h-fit p-2 bg-cover bg-center flex flex-col items-center justify-start "
                style={{
                    backgroundImage: "url('/assets/train.jpg')",
                }}>
                <p className=" my-4 text-blue-50  ">Home / PNR Status</p>
                <section className="bg-white p-6 w-full max-w-7xl rounded-lg shadow-md mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">PNR Status</h1>

                    <SearchBar onSearch={handleSearch} />

                    {loading && <p className="text-center text-blue-600 mt-4">Loading train status...</p>}
                    {error && <p className="text-center text-red-600 mt-4">{error}</p>}

                    {trainStatus && <TrainStatusDisplay status={trainStatus} />}
                </section>

            </div>

            <main className='max-w-11/12 mx-auto  py-8 md:flex gap-10 '>

                <div className=' border-b-2 w-full md:w-4/5 min-h-screen' >

                    <h1 className="text-xl font-bold mb-4 text-black">Why Check PNR Status with Humsafar?</h1>
                    <div className='border-2 h-fit border-gray-300 rounded-4xl p-8 mb-6'>
                        <ul className="divide-y divide-gray-300">
                            {features.map((feature, idx) => (
                                <li key={idx} className="py-4">
                                    {/* Mobile View: Collapsible */}
                                    <div className="sm:hidden">
                                        <details className="group cursor-pointer">
                                            <summary className="flex justify-between items-start">
                                                <div className="flex items-start gap-3 text-left">
                                                    <i className={`fas ${feature.icon} text-blue-600 text-xl`} />
                                                    <h3 className="font-semibold text-md text-gray-900 group-open:text-blue-700">
                                                        {feature.title}
                                                    </h3>
                                                </div>
                                                <i className="fas fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform mt-1" />
                                            </summary>
                                            <p className="text-gray-600 mt-2 ml-7">{feature.description}</p>
                                        </details>
                                    </div>

                                    {/* Desktop View: Always Open */}
                                    <div className="hidden sm:flex items-start gap-4">
                                        <div className="text-blue-600 text-xl mt-1">
                                            <i className={`fas ${feature.icon}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>


                    </div>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-black">How to Check IRCTC PNR Status?</h2>
                        <p className="mb-2 text-[14px]">Want to check your train PNR status? Here are the different ways to check your IRCTC PNR status:</p>

                        <ul className="list-decimal ml-5 space-y-2">
                            <li><span className='font-semibold my-2 text-black  text-[16px]'>Check PNR status on the Humsafar website:</span>
                                <ol className="list-none pl-6 space-y-2">
                                    <li>
                                        <strong>Step 1:</strong>  Visit the trains page of the ixigo website and select &#39;PNR Status Enquiry&#39;.
                                    </li>
                                    <li>
                                        <strong>Step 2:</strong>  Enter your 10-digit IRCTC PNR number and click the &#39;Search&#39; button.
                                    </li>
                                    <li>
                                        <strong>Step 3:</strong>  Your PNR status will be displayed immediately.
                                    </li>
                                </ol>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>Check PNR status on the Humsafar mobile app:</span>
                                <ol className="list-none pl-6 space-y-2">
                                    <li>
                                        <strong>Step 1:</strong>  Open the ixigo Trains app and tap the &#39;PNR Status&#39; icon.
                                    </li>
                                    <li>
                                        <strong>Step 2:</strong> Enter your 10-digit PNR number and complete your PNR enquiry.
                                    </li>
                                    <li>
                                        <strong>Step 3:</strong>  Your PNR status will appear on the screen.
                                    </li>
                                </ol>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>Check PNR status through the IRCTC website:</span>
                                <ol className="list-none pl-6 space-y-2">
                                    <li>
                                        <strong>Step 1:</strong> Visit the IRCTC website and click the ‘PNR Status’ tab.
                                    </li>
                                    <li>
                                        <strong>Step 2:</strong> Select ‘PNR Enquiry’ and enter your 10-digit PNR. Press the ‘Submit’ button.
                                    </li>
                                    <li>
                                        <strong>Step 3:</strong> You’ll get the details about PNR status.
                                    </li>
                                </ol>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>PNR status check for railway tickets using the SMS service:</span>
                                <p>You can check the PNR status 10 digits for a railway ticket using Indian Railways’ SMS service. Simply send the PNR number to ‘139’, and you&#39;ll receive an instant update on the PNR status.</p>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>PNR status check for railway tickets using the railway enquiry number (Call 139):</span>
                                <p>To check your railway ticket’s PNR status, call the enquiry number ‘139’. Follow the IVR instructions, select the ‘PNR Enquiry’ option, and get your status update instantly!</p>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>PNR status check for railway tickets using the final reservation charts:</span>
                                <p>You can check the 10-digit PNR status by referring to the final reservation chart displayed at the railway station. However, this information is only available a few hours before the train&#39;s departure, which may not always be convenient.</p>
                            </li>

                            <li><span className='font-semibold my-2 text-black  text-[16px]'>Visit railway enquiry counters at the station:</span>
                                <p>If you&#39;re uncertain about your PNR status, visit the nearest railway station enquiry counters.</p>
                            </li>
                        </ul>
                    </section>


                    <section className="mb-8">
                        <h1 className="text-xl font-bold mb-4 text-black">Check PNR Status via SMS</h1>
                        <p className="my-2" >You can easily check your PNR status by messaging Indian Railways at ‘139.’ Type your 10-digit PNR (without hyphens), send it to 139, and get the latest PNR status. Alternatively, you can send the same SMS to 5676747. The updated PNR details will be sent directly to your phone inbox. Learn more about how to check PNR via SMS for hassle-free updates.</p>
                    </section>

                    <section className="mb-8">
                        <h1 className="text-xl font-bold mb-4 text-black">What does a PNR Number Generated Explain?</h1>
                        <p className="my-2" >A PNR (Passenger Name Record) contains key details about your train journey, including:</p>

                        <ul className="list-decimal ml-5 space-y-1 text-[14px]">
                            <li>Passenger Details: Name, Age, Sex, Birth Preference.</li>
                            <li>Ticket Details: Train Number, Date of Journey, Origin/Source Station, Destination Station, Boarding Station, Class, Berth, Quota.</li>
                            <li>Fare, Transaction Type and Payment Details.</li>
                            <li>The first three digits tell us from which Passenger Reservation System or PRS the ticket has been booked.</li>
                            <li>The first digit depends on the train&#39;s zone w.r.t. its starting station.</li>
                            <li>Zonal Codes:
                                <ol className="list-disc pl-5">
                                    <li>1 (SCR Secunderabad PRS)</li>
                                    <li>2, 3 (NR, NCR, NWR, NER New Delhi PRS)</li>
                                    <li>4, 5 (SR, SWR, SCR Chennai PRS)</li>
                                    <li>6, 7 (NFR, ECR, ER, ECoR, SER, SECR Calcutta PRS)</li>
                                    <li>8, 9 (CR, WCR, WR Mumbai PRS)</li>
                                </ol>
                            </li>
                            <li>The last seven digits are randomly generated numbers that provide a unique identity to the PNR number but do not convey any information about the ticket or the journey.</li>
                        </ul>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Types of IRCTC PNR Status</h2>
                        <p className="text-gray-600 mb-6">
                            Indian Railways uses abbreviations to indicate the current status of train ticket bookings. Here&#39;s a list of different types of IRCTC PNR status, their common abbreviations, and their meanings. The following is a list of common PNR status codes and what they mean:
                        </p>

                        <table className="min-w-full border  border-gray-300 ">
                            <tbody>
                                {pnrStatus.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="border px-4 py-2 font-medium">{item.code}</td>
                                        <td className="border px-4 py-2 text-gray-700">{item.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-2" >If you cannot get a confirmed ticket, <Link href="/seat-availability" className="text-blue-600 font-bold">check seat availability</Link> on other trains.</p>
                    </section>




                    <section className="mb-8">
                        <h1 className="text-xl font-bold mb-4 text-black">Check PNR Prediction and Waitlist Trends</h1>
                        <p className="my-2" >PNR prediction helps estimate the chances of your waitlisted or RAC ticket getting confirmed before your journey. It analyses historical trends and real-time data, and provides a probability score, enabling you to make informed travel decisions.</p>

                        <p className="my-2" >Waitlist (WL) Trends highlight the following four key factors that influence the chances of ticket confirmation:</p>

                        <ul className="list-decimal ml-5 space-y-1 text-[14px]">
                            <li>Initial status (waiting number on the journey date, excluding cancellations)</li>
                            <li>Final status right before the journey</li>
                            <li>Date of Journey</li>
                            <li>Number of days between booking and the journey date</li>
                        </ul>
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
