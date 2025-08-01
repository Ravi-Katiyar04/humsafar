
'use client';
import React, {use, useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currStation, setCurrStation] = useState('');

  useEffect(() => {
    const fetchTrainStatus = async () => {
      setLoading(true);
      setError(null);
      setTrainStatus(null);

      try {
        const res = await axios.get(
          `/api/trainStatus?trainNumber=${trainNumber}&departure_date=${selectedDate}`
        );
        console.log('Train Status Response:', res.data);
        setTrainStatus(res.data);
        setCurrStation(res.data?.body?.train_status_message || '');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
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

  return (
    <main className="max-w-11/12 mx-auto py-8 md:flex gap-10">
      <div className="w-full md:w-4/5 min-h-screen text-[15px] text-gray-600">
        <h1 className="text-xl font-bold mb-4 text-black">
          {trainNumber} Train Running Status
        </h1>

        <p className="mb-6">
          <span className="block mb-4">
            Get {trainNumber} Bju Ndls Spl train live running status.{' '}
            <span className="text-blue-600">
              Bju Ndls Spl train runs from Barauni Jn (BJU) to New Delhi (NDLS)
            </span>{' '}
            on Mon, Tue, Wed, Thu, Fri, Sat, Sun. It covers 10 stations. The departure time from Barauni Jn is 08:24 and arrival at New Delhi is 11:48. The total distance covered is 1182 Km. Check real-time train running status of other trains from Barauni Jn to New Delhi. Enjoy free cancellation on{' '}
            <span className="text-blue-600">train ticket booking</span> of Bju Ndls Spl - {trainNumber}.
          </span>
        </p>

        <section className="my-8 border-2 rounded-2xl border-gray-300 pb-6">
          {loading && (
            <p className="text-center mt-4 font-semibold text-blue-600">
              Loading train status...
            </p>
          )}
          {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>}

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
            className={`flex-1 sm:flex-none px-4 py-3 rounded-md text-center border cursor-pointer min-w-[100px] ${
              isActive ? 'bg-blue-600 text-white' : 'bg-white border-gray-300'
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

