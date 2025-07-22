"use client"
import { useState } from 'react';
import Header from '@/components/Header';
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import FAQSection from '@/components/FAQSection';
import Booking from '@/components/Booking';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

export default function SeatAvailability() {
  const [trainStatus, setTrainStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


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
    <div className="min-h-screen  bg-gray-100 text-gray-600  text-[14px] ">


      <Header currentPath="/seat-availability" />

      <Booking title="Check Seat Availability" btntext="Check Availability" />

      <div className="max-w-11/12 mx-auto my-4 text-gray-500">
        <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
        <span className="text-gray-700 font-medium ">Check Seat Availability</span>
      </div>


      <main className='max-w-11/12 mx-auto  py-2 md:flex gap-10 '>


        <div className=' w-full md:w-4/5 min-h-screen' >
          <h1 className="text-xl font-bold mb-4 text-black">Train Seat Availability</h1>
          <p className="mb-6 text-[14px] font-semibold">
            <span className='mb-4 block'>Whenever it’s travel time, everyone seems to go in overdrive for finding out train seat availability. So beat the crowd and book your ticket as early as possible. However, booking tickets in advance is a good option only if you are sure about your travel plans. For many travellers, this is often not the case. </span>
          </p>


          <section className="mb-8">
            <h1 className="text-xl font-bold mb-4 text-black">Check Train Seat Availability Online</h1>
            <p className="my-2" >To check train seat availability, follow the steps mentioned below;</p>
            <ul className="list-disc ml-5 space-y-1 text-[14px]">
              <li>Enter your Source and destination station</li>
              <li>Choose the date of journey. In case your travel date is tomorrow, you can also opt for the <Link href="/tatkal-reservation" className='text-blue-600'>tatkal ticket booking</Link>. </li>
              <li>Enter &quot;Search Trains&quot; and the list of trains, running dates, and their seat availability will be displayed on the screen.</li>
              <li>Choose your train and preferred class from the list to complete your <Link href="/" className='text-blue-600'>train ticket booking</Link>.</li>
            </ul>
            <p className="my-2" >Once you have booked your tickets, you can use our <Link href="/running-status" className='text-blue-600'>train running status</Link>  feature to track your train location.</p>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-black">Train Seat Availability Search on App</h2>
            <p className="mb-2 text-[14px]">One of the biggest concerns of train travellers is knowing about the availability of trains and its seat on their route. With the train seat availability feature of Indian Railways on ixigo trains app, one can easily check for any train and book their tickets online.</p>
            <table className="w-full border border-gray-300 text-[14px] text-left">
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">What is the good time to get best train seat?</td>
                  <td className="p-2 border border-gray-300">Plan a trip 60 days in advance and reserve the best seat.</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">What is the option of searching train seat availability at the last minute?</td>
                  <td className="p-2 border border-gray-300">Tatkal ticket booking is the best option</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Do you need a station code to check seat availibility in the calendar?</td>
                  <td className="p-2 border border-gray-300">No need for a station code, just select the station name or enter the train number to get information of seat availibility</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Can train seat availability change at a last stage?</td>
                  <td className="p-2 border border-gray-300">Yes, It can be changed</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Train Seat Availability Status</td>
                  <td className="p-2 border border-gray-300">
                    <ul className="list-disc pl-4">
                      <li>AVAILABLE status in the green colour</li>
                      <li>RAC status in Green colour</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">What time the chart is prepared before train departure?</td>
                  <td className="p-2 border border-gray-300">One before 4 hrs of schedule departure and another 30 minutes before the schedule departure.</td>
                </tr>
              </tbody>
            </table>

            <p className="my-2 text-[14px]">Once you have booked your tickets, you can use our train running status feature to track your train location.</p>

          </section>

          <FAQSection />
        </div>

        <div className='mb-4 md:w-1/5 w-full flex flex-col gap-8 min-h-screen' >
          <RailwayInfo />
          <TopTrainRoutes />
        </div>
      </main>

    </div>
  );
}

