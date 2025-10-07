
'use client';
import React, { use, useEffect, useState } from 'react';
import TrainStatusDisplay from '@/components/TrainStatusDisplay';
import FAQSection from '@/components/FAQSection';
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function TrainStatusPage({ params }) {
  const { train: trainNumber } = use(params);

  const today = new Date();
  const formatDate = (date) =>
    `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getFullYear()}`;

  const getAPIDate = (date) =>
    date.toISOString().slice(0, 10).replace(/-/g, '');

  const [selectedDate, setSelectedDate] = useState(getAPIDate(today));
  const [trainStatus, setTrainStatus] = useState(null);
  const [error, setError] = useState(null);
  const [currStation, setCurrStation] = useState('');

  useEffect(() => {
    const fetchTrainStatus = async () => {
      setError(null);
      setTrainStatus(null);

      try {
        const res = await axios.get(
          `/api/liveStatusAndDetails?trainNumber=${trainNumber}&departure_date=${selectedDate}`
        );
        setTrainStatus(res.data.data);
        setCurrStation(res.data?.body?.train_status_message || '');
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrainStatus();
  }, [trainNumber, selectedDate]);

  const dateButtons = [
    {
      label: 'Yesterday',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
    },
    {
      label: 'Today',
      date: today,
    },
    {
      label: 'Tomorrow',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
  ];

  if (!trainStatus && !error) {
    return (
      <div className="flex flex-col h-screen items-center justify-center py-10">
        {/* Outer spinner ring */}
        <div className="relative w-18 h-18">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Optional loading text */}
        <p className="mt-4 text-sm font-medium text-gray-600 tracking-wide">
          Fetching live train status...
        </p>
      </div>
    );
  }

  if(error){
    return (
      <div className="flex flex-col h-screen items-center justify-center py-10">
        <p className="mt-4 text-sm font-medium text-gray-600 tracking-wide">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-11/12 mx-auto py-8 md:flex gap-10">
      {/* {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>} */}
      <div className="w-full md:w-4/5 min-h-screen text-[15px] text-gray-600">
        <h1 className="text-xl font-bold mb-4 text-black">
          {trainStatus.train_number} Train Running Status
        </h1>

        <p className="mb-6">
          <span className="block mb-4">
            Get {trainStatus.train_number} {trainStatus.train_name} train live running status.{' '}
            <span className="text-blue-600">
              {trainStatus.train_name} train runs from {trainStatus.source_stn_name} ({trainStatus.source}) to {trainStatus.dest_stn_name} ({trainStatus.destination})
            </span>{' '}
            on {trainStatus.run_days}. It covers 10 stations. The departure time from {trainStatus.source_stn_name} is 08:24 and arrival at New Delhi is 11:48. The total distance covered is {trainStatus.total_distance}Km. Check real-time train running status of other trains from {trainStatus.source_stn_name} ({trainStatus.source}) to {trainStatus.dest_stn_name} ({trainStatus.destination}). Enjoy free cancellation on{' '}
            <span className="text-blue-600">train ticket booking</span> of Bju Ndls Spl - {trainNumber}.
          </span>
        </p>

        <section className="my-8 border-2 rounded-2xl border-gray-300 pb-6">
          {/* {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>} */}

          {trainStatus && (
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-4 gap-4">
              {/* Date Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full md:w-auto">
                {dateButtons.map(({ label, date }) => {
                  const apiDate = getAPIDate(date);
                  const isActive = selectedDate === apiDate;

                  return (
                    <button
                      key={label}
                      className={`flex-1 sm:flex-none px-4 py-3 rounded-md text-center border cursor-pointer min-w-[100px] ${isActive ? 'bg-blue-600 text-white' : 'bg-white border-gray-300'
                        }`}
                      onClick={() => setSelectedDate(apiDate)}
                    >
                      <div className={`font-semibold ${isActive ? '' : 'text-gray-700'}`}>
                        {label}
                      </div>
                      <div className={`text-sm ${isActive ? '' : 'text-gray-500'}`}>
                        {formatDate(date)}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Refresh + Current Station */}
              <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                <button
                  className="flex items-center cursor-pointer gap-1 border-2 border-blue-600 rounded-md px-4 py-2 text-sm text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                  onClick={() => window.location.reload()}
                >
                  <FontAwesomeIcon icon={faRotateRight} />
                  Refresh
                </button>

                <p
                  dangerouslySetInnerHTML={{ __html: currStation }}
                  className="mt-2 text-sm text-gray-700 text-left md:text-right"
                />
              </div>
            </div>
          )}

          {trainStatus && <TrainStatusDisplay status={trainStatus} />}
        </section>

        <p className="mb-6">
          <span className="font-bold">Disclaimer:</span> This feature has no affiliation with
          IRCTC. Travellers should verify details before making decisions based on the info. Neither
          HumSafar nor IRCTC is responsible for liabilities from the use of this feature.
        </p>

        <FAQSection />
      </div>

      <div className="md:w-1/5 w-full flex flex-col mb-4 gap-8 min-h-screen">
        <RailwayInfo />
        <TopTrainRoutes />
      </div>
    </main>
  );
}

