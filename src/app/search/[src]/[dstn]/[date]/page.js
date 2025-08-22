"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Booking from "@/components/Booking";
import TrainFilters from "@/components/TrainFilters";
import SortFilterBar from "@/components/SortFilterBar";
import SearchTrainCard from "@/components/SearchTrainCard";
import { getTrainData } from "@/data.js"; // Assuming this is a function that fetches train data
import axios from "axios";


export default function SearchPage({ params }) {
  const { src: src } = use(params);
  const { dstn: dstn } = use(params);
  const { date: date } = use(params);

  const [results, setResults] = useState(getTrainData()?.data || []);
  const [sortedResults, setSortedResults] = useState(getTrainData()?.data || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [activeSort, setActiveSort] = useState("departure");


  const handleSortChange = (sortKey) => {
    console.log("Sorting by:", sortKey);
    const keyMapping = {
      departure: "from_std",
      arrival: "to_sta",
      duration: "duration",
      name: "train_name",
    };

    const parseTime = (timeStr) => {
      if (!timeStr) return 0;
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
    };

    const parseDuration = (durationStr) => {
      if (!durationStr) return 0;
      const [h, m] = durationStr.split(":").map(Number);
      return h * 60 + m;
    };

    const getValue = (train, key) => {
      switch (key) {
        case "departure":
          return parseTime(train.from_std);
        case "arrival":
          return parseTime(train.to_sta);
        case "duration":
          return parseDuration(train.duration);
        case "name":
          return train.train_name.toLowerCase();
        default:
          return train[keyMapping[key]] || "";
      }
    };

    const sorted = [...results].sort((a, b) => {
      const valA = getValue(a, sortKey);
      const valB = getValue(b, sortKey);

      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });

    setSortedResults(sorted); // ⬅️ save in separate state
  };



  // useEffect(() => {
  //   setResults([]);
  //   setLoading(true);
  //   setError(null);
  //   const fetchTrains = async () => {
  //     try {
  //       const response = await axios.get(`/api/trainBetweenStations?src=${src}&dstn=${dstn}&date=${date}`);
  //       setResults(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch trains. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrains();
  // }, [])

  // const handleFilterChange = (filters) => {
  //   setLoading(true);
  //   setError(null);
  //   const fetchFilteredTrains = async () => {
  //     try {
  //       const response = await axios.get(`/api/trainBetweenStations?src=${src}&dstn=${dstn}&date=${date}&filters=${JSON.stringify(filters)}`);
  //       setResults(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch trains. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFilteredTrains();
  // };



  return (
    <div className="min-h-screen bg-gray-100">
      <Booking title={""} btntext={"Search"} />
      <main>
        <div className="max-w-6xl  flex flex-col gap-4 mx-auto py-6 sm:px-6 lg:px-8">
          <TrainFilters />
          
          <SortFilterBar onSortChange={handleSortChange} />
          {loading && <div className="text-center text-gray-500">Loading...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {sortedResults.length === 0 && !loading && !error && (
            <div className="text-center text-gray-500">No trains found for the selected route and date.</div>
          )}
          {/* {sortedResults.length > 0 && results.map((train, index) => (
            <SearchTrainCard key={index} train={train} />
          ))} */}
          {(sortedResults.length ? sortedResults : results).map((train) => (
            <SearchTrainCard key={train.train_number} train={train} />
          ))}
        </div>
      </main>
    </div>
  );
}

