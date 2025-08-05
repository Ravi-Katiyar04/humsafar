
'use client';
import React, { use, useEffect, useState } from 'react';
import FAQSection from '@/components/FAQSection';
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import TrainSearchDetails from '@/components/TrainSearchDetails';
import TrainFareCalendar from '@/components/TrainFareCalendar';
import TrainScheduleTable from '@/components/TrainScheduleTable';
import MoreTrainInformation from '@/components/MoreTrainInformation';
import Link from 'next/link';
import axios from 'axios';


function formatMinutesToHrMin(minutes) {
  if (isNaN(minutes) || minutes < 0) return "--";

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) return `${hrs}hr ${mins}min`;
  if (hrs > 0) return `${hrs}hr`;
  return `${mins}min`;
}


export default function TrainStatusPage({ params }) {
  const { train: trainNumber } = use(params);

  const [trainDetails, setTrainDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTrainStatus = async () => {
      setLoading(true);
      setError(null);
      setTrainDetails(null);

      try {
        const res = await axios.get(
          `/api/liveStatusAndDetails?trainNumber=${trainNumber}`
        );
        setTrainDetails(res.data.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchTrainStatus();
  }, []);


  return (
    <main className="max-w-11/12 mx-auto min-h-screen py-8 md:flex gap-10">
      {trainDetails && (
        <>
          <div className="w-full md:w-4/5 min-h-screen text-[15px] text-gray-600">
            <p className="my-2 text-gray-600">
              Home ›› Trains ›› <span>{trainDetails
                ? `${trainDetails.train_name} - ${trainDetails.train_number}`
                : '...'}</span>
            </p>

            {trainDetails && <TrainSearchDetails status={trainDetails} />}

            <h1 className="text-2xl font-bold my-4">{trainDetails.train_number} {trainDetails.train_name} Train Information</h1>

            <p className="my-4">{trainDetails.train_name} ({trainDetails.train_number}) train runs from {trainDetails.source_stn_name} to {trainDetails.dest_stn_name}. This mail express train covers a distance of about {trainDetails.total_distance} km. The fare classes on {trainDetails.train_number} train are 2A,3A,SL. The following train ticket quotas are available on Dbrg Vivek Exp: GN,TQ,SS,LD.</p>

            {trainDetails && <TrainFareCalendar status={trainDetails} />}

            <section className=" mx-auto mt-8  overflow-hidden">
              <h2 className="text-2xl font-semibold py-4">{trainDetails.train_name} {trainDetails.train_number} Train Details</h2>
              <table className="w-full text-sm text-left bg-white shadow-md">
                <tbody>
                  <tr className="border">
                    <th className="px-6 py-3 border font-medium text-gray-700 w-1/3">Classes</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">2A, 3A, SL</td>
                  </tr>
                  <tr className="border bg-gray-50">
                    <th className="px-6 py-3 border font-medium text-gray-700">Service Days</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">
                      {Array.isArray(trainDetails.run_days)
                        ? trainDetails.run_days.join(', ')
                        : trainDetails.run_days}
                    </td>

                  </tr>
                  <tr className="border">
                    <th className="px-6 py-3 border font-medium text-gray-700">Stops</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">{trainDetails.stoppage_number}</td>
                  </tr>
                  <tr className="border bg-gray-50">
                    <th className="px-6 py-3 border font-medium text-gray-700">Duration</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">{formatMinutesToHrMin(trainDetails.journey_time)}</td>
                  </tr>
                  <tr className="border">
                    <th className="px-6 py-3 border font-medium text-gray-700">Type</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">Mail Express</td>
                  </tr>
                  <tr className='border'>
                    <th className="px-6 py-3 border font-medium text-gray-700">Pantry</th>
                    <td className="px-6 py-3 border font-semibold text-gray-900">Yes</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <h1 className="text-2xl font-bold my-4">{trainDetails.train_name} {trainDetails.train_number} Schedule, Routes & Time Table</h1>

            <p className="my-4">Train no. {trainDetails.train_number} {trainDetails.train_name} is one of the major trains on this route for travellers. It starts from {trainDetails.source_stn_name} station and ends at {trainDetails.dest_stn_name}. Due to its {trainDetails.stoppage_number} stoppage stations, the total time taken by this train is around {formatMinutesToHrMin(trainDetails.journey_time)}. You can easily <Link href="/" className='text-blue-600 cursor-pointer'>book train tickets</Link> at Humsafar for any stations between {trainDetails.source_stn_name} and {trainDetails.dest_stn_name} and enjoy amazing deals.</p>

            {trainDetails && <TrainScheduleTable status={trainDetails} />}


            <section className="mt-8">
              <MoreTrainInformation trainNumber={trainNumber} />
            </section>
            <FAQSection />

          </div>

          <div className="md:w-1/5 w-full flex flex-col mb-4 gap-8 min-h-screen">
            <RailwayInfo />
            <TopTrainRoutes />
          </div>
        </>
      )}
    </main>
  );
}