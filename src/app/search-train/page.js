"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";


export default function SearchTrain() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [trains, setTrains] = useState([{ train_number: "19037", train_name: "Avadh Exp", src_stn_name: "Bandra Terminus", src_stn_code: "BDTS", dstn_stn_name: "Barauni Jn", dstn_stn_code: "BJU" },

  { train_number: "22503", train_name: "Dbrg Vivek Exp", src_stn_name: "Kanyakumari", src_stn_code: "CAPE", dstn_stn_name: "DIBRUGARH", dstn_stn_code: "DBRG" },

  {
    train_number: "11061",
    train_name: "Ltt Jaynagar Exp",
    src_stn_name: "Lokmanyatilak T",
    src_stn_code: "LTT",
    dstn_stn_name: "Jaynagar",
    dstn_stn_code: "JYG"
  },
  {
    train_number: "20104",
    train_name: "Gkp Ltt Sf Exp",
    src_stn_name: "Azamgarh",
    src_stn_code: "AMH",
    dstn_stn_name: "Lokmanyatilak T",
    dstn_stn_code: "LTT"
  },
  {
    train_number: "22537",
    train_name: "Kushinagar Exp",
    src_stn_name: "Gorakhpur Jn",
    src_stn_code: "GKP",
    dstn_stn_name: "Lokmanyatilak T",
    dstn_stn_code: "LTT"
  },
  {
    train_number: "12321",
    train_name: "Mumbai Mail",
    src_stn_name: "Howrah Jn",
    src_stn_code: "HWH",
    dstn_stn_name: "C Shivaji Mah T",
    dstn_stn_code: "CSMT"
  }]);


  useEffect(() => {
    const fetchTrainStatus = async () => {

      try {
        const res = await axios.get(
          `/api/searchTrainQuery?query=${encodeURIComponent(query)}`);
        if (!res.data || res.data.length === 0) {
          throw new Error('Train not found or no data available.');
        }
        setTrains(res.data);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrainStatus();
  }, [setQuery, query]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Back Arrow and Search */}
      <div className="flex items-center mb-4">
        <Link href="/"><i className="fas fa-arrow-left text-xl mr-2  cursor-pointer"></i></Link>
        <input
          type="text"
          placeholder="Search trains by name or number"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 bg-white py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Popular Trains */}
      <h2 className="text-xl font-semibold mb-4">Popular Trains</h2>
      <div className="bg-white rounded-lg  shadow-sm divide-y divide-gray-200">
        {trains.length > 0 ? (
          trains.map((train) => (
            <div key={train.train_number} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                window.location.href = `/${train.train_number}/train-search-status`;
              }}
            >
              <i className="fas fa-train text-gray-600 text-2xl mr-4"></i>
              <div>
                <p className="font-semibold text-gray-800">{train.train_number} {train.train_name}</p>
                <p className="text-sm text-gray-500">{train.src_stn_name} ({train.src_stn_code}) - {train.dstn_stn_name} ({train.dstn_stn_code})</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500">No trains found.</p>
        )}
      </div>
    </div>
  );
}
