"use client"
import { useState } from "react";


export default function SearchTrain() {
  const [search, setSearch] = useState("");

  const trains = [
    { number: "19037", name: "Avadh Exp", route: "Bandra Terminus (BDTS) - Barauni Jn (BJU)" },
    { number: "22503", name: "Dbrg Vivek Exp", route: "Kanyakumari (CAPE) - DIBRUGARH (DBRG)" },
    { number: "19038", name: "Avadh Express", route: "Barauni Jn (BJU) - Bandra Terminus (BDTS)" },
    { number: "11061", name: "Ltt Jaynagar Exp", route: "Lokmanyatilak T (LTT) - Jaynagar (JYG)" },
    { number: "20104", name: "Gkp Ltt Sf Exp", route: "Azamgarh (AMH) - Lokmanyatilak T (LTT)" },
    { number: "22537", name: "Kushinagar Exp", route: "Gorakhpur Jn (GKP) - Lokmanyatilak T (LTT)" },
    { number: "12321", name: "Mumbai Mail", route: "Howrah Jn (HWH) - C Shivaji Mah T (CSMT)" },
  ];

  const filteredTrains = trains.filter((train) =>
    `${train.number} ${train.name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Back Arrow and Search */}
      <div className="flex items-center mb-4">
        <i className="fas fa-arrow-left text-xl mr-2 cursor-pointer"></i>
        <input
          type="text"
          placeholder="Search trains by name or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Popular Trains */}
      <h2 className="text-xl font-semibold mb-4">Popular Trains</h2>
      <div className="bg-gray-50 rounded-lg shadow-sm divide-y divide-gray-200">
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <div key={train.number} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <i className="fas fa-train text-gray-600 text-2xl mr-4"></i>
              <div>
                <p className="font-semibold text-gray-800">{train.number} {train.name}</p>
                <p className="text-sm text-gray-500">{train.route}</p>
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
