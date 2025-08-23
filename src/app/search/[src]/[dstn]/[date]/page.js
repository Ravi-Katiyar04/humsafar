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
  const [filterResult, setFilterResult] = useState(getTrainData()?.data || [])
  const [sortedResults, setSortedResults] = useState(filterResult || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [activeSort, setActiveSort] = useState("departure");
  const [filters, setFilters] = useState({
    classes: [],
    quota: "",
    timeRange: ""
  });

  const toMinutes = (timeStr) => {
    if (!timeStr || typeof timeStr !== "string") return Number.POSITIVE_INFINITY; // missing times go to bottom
    const [h = 0, m = 0] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const toDurationMinutes = (durationStr) => {
    if (!durationStr || typeof durationStr !== "string") return Number.POSITIVE_INFINITY;
    const parts = durationStr.split(":").map(Number);
    // support "H:MM" or "HH:MM" (and gracefully handle "D:HH:MM" if it ever appears)
    if (parts.length === 3) {
      const [d = 0, h = 0, m = 0] = parts;
      return d * 24 * 60 + h * 60 + m;
    }
    const [h = 0, m = 0] = parts;
    return h * 60 + m;
  };

  // Sorting effect
  useEffect(() => {
    const sorted = [...filterResult].sort((a, b) => {
      switch (activeSort) {
        case "departure":
          return toMinutes(a.from_std) - toMinutes(b.from_std);
        case "arrival":
          return toMinutes(a.to_sta) - toMinutes(b.to_sta);
        case "duration":
          return toDurationMinutes(a.duration) - toDurationMinutes(b.duration);
        case "name":
          return (a.train_name || "").localeCompare(b.train_name || "");
        default:
          return 0;
      }
    });

    setSortedResults(sorted);
  }, [filterResult, activeSort]);




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

  useEffect(() => {
    let filtered = [...results];

    if (filters.classes.length > 0) {
      filtered = filtered.filter(train =>
        train.class_type?.some(cls => filters.classes.includes(cls))
      );
    }

    if (filters.quota) {
      filtered = filtered.filter(train =>
        train.quota?.some(q => q.code === filters.quota)
      );
    }

    if (filters.timeRange) {

      const [startStr, endStr] = filters.timeRange.split(" - ");
      const [startHour, startMinute] = startStr.split(":").map(Number);
      const [endHour, endMinute] = endStr.split(":").map(Number);

      const startTotalMinutes = startHour * 60 + startMinute;
      const endTotalMinutes = endHour * 60 + endMinute;



      filtered = filtered.filter(train => {
        const [depHour, depMinute] = train.from_std.split(":").map(Number);
        const depTotalMinutes = depHour * 60 + depMinute;

        // 🔑 Check for overnight range (end < start)
        if (endTotalMinutes < startTotalMinutes) {
          // e.g. 18:00 - 06:00
          return (
            depTotalMinutes >= startTotalMinutes || depTotalMinutes <= endTotalMinutes
          );
        }

        // Normal case
        return (
          depTotalMinutes >= startTotalMinutes && depTotalMinutes <= endTotalMinutes
        );
      });
    }


    setFilterResult(filtered);
  }, [filters, results]);


  return (
    <div className="min-h-screen bg-gray-100">
      <Booking title={""} btntext={"Search"} />
      <main>
        <div className="max-w-6xl  flex flex-col gap-4 mx-auto py-6 sm:px-6 lg:px-8">
          <TrainFilters filters={filters} setFilters={setFilters} />

          <SortFilterBar activeSort={activeSort} setActiveSort={setActiveSort} />
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

