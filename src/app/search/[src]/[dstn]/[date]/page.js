"use client";
import React, { useState } from "react";
import Booking from "@/components/Booking";
import TrainFilters from "@/components/TrainFilters";
import DateAvailabilitySlider from "@/components/DateAvailabilitySlider";
import SearchTrainCard from "@/components/SearchTrainCard";
import Link from "next/link";
import axios from "axios";

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/search");
      setResults(response.data);
    } catch (err) {
      setError("Error fetching search results.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Booking title={""} btntext={"Search"} />
      <main>
        <div className="max-w-6xl  flex flex-col gap-4 mx-auto py-6 sm:px-6 lg:px-8">
          <TrainFilters/>
            <DateAvailabilitySlider />
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
            <SearchTrainCard/>
        </div>
      </main>
    </div>
  );
}

