import { useState } from "react";

export default function AddTraveller({ setAddPassengerOpen, passengers }) {
  const [traveller, setTraveller] = useState({
    fullName: "",
    age: "",
    gender: "Male",
    berthPreference: "No preference",
    nationality: "India",
  });

  const genderOptions = ["Male", "Female", "Transgender"];
  const berthOptions = [
    "No preference",
    "Lower",
    "Middle",
    "Upper",
    "Side Lower",
    "Side Upper",
  ];

  const handleChange = (field, value) => {
    setTraveller((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Traveller Saved:", traveller);
    
    setAddPassengerOpen(false);
    passengers.push(traveller);
    alert("Traveller Saved!");
  };

  return (
    <div className="max-w-md left-0 top-0 absolute h-screen  bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Add Traveller</h2>
        <button onClick={() => setAddPassengerOpen(false)}
          className="text-gray-500 text-2xl font-bold cursor-pointer">×</button>
      </div>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={traveller.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Age */}
      <input
        type="number"
        placeholder="Age"
        value={traveller.age}
        onChange={(e) => handleChange("age", e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Gender */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Gender</label>
        <div className="flex space-x-4">
          {genderOptions.map((g) => (
            <label
              key={g}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <input
                type="radio"
                checked={traveller.gender === g}
                onChange={() => handleChange("gender", g)}
                className="accent-blue-500"
              />
              <span>{g}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Berth Preference */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Berth Preference</label>
        <div className="flex flex-wrap gap-2">
          {berthOptions.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => handleChange("berthPreference", b)}
              className={`px-3 py-1 rounded-full border ${traveller.berthPreference === b
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
                }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Nationality */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Nationality</label>
        <select
          value={traveller.nationality}
          onChange={(e) => handleChange("nationality", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Note */}
      <div className="bg-gray-100 text-gray-700 text-sm p-3 rounded-lg mb-4">
        Please Note: No concession is applicable for this train. Full fare needs
        to be paid for a child
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full sticky bottom-0 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg"
      >
        Save Traveller
      </button>
    </div>
  );
}
