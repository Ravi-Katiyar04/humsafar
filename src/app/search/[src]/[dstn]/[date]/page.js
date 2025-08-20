"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Booking from "@/components/Booking";
import TrainFilters from "@/components/TrainFilters";
import SortFilterBar from "@/components/SortFilterBar";
import SearchTrainCard from "@/components/SearchTrainCard";
import axios from "axios";

export default function SearchPage({ params }) {
  const { src: src } = use(params);
  const { dstn: dstn } = use(params);
  const { date: date } = use(params);

  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setResults([]);
    setLoading(true);
    setError(null);
    const fetchTrains = async () => {
      try {
        const response = await axios.get(`/api/trainBetweenStations?src=${src}&dstn=${dstn}&date=${date}`);
        setResults(response.data);
      } catch (err) {
        setError("Failed to fetch trains. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, [])



  return (
    <div className="min-h-screen bg-gray-100">
      <Booking title={""} btntext={"Search"} />
      <main>
        <div className="max-w-6xl  flex flex-col gap-4 mx-auto py-6 sm:px-6 lg:px-8">
          <TrainFilters />
          <SortFilterBar />
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-3 text-center text-gray-500">Loading...</div>
                ) : error ? (
                    <div className="col-span-3 text-center text-red-500">{error}</div>
                ) : results.length > 0 ? (
                    results.map((train) => (
                    <SearchTrainCard key={train._id} train={train} />
                    ))
                ) : (
                    <div className="col-span-3 text-center text-gray-500">No trains found.</div>
                )}
            </div> */}
          <SearchTrainCard />
        </div>
      </main>
    </div>
  );
}

