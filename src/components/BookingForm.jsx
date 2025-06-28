'use client';

import { useState } from 'react';

export default function BookingForm({ onSubmit, availableClasses = [] }) {
  const [travelClass, setTravelClass] = useState(availableClasses[0] || '');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState([{ name: '', age: '' }]);

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: '', age: '' }]);
  };

  const handleSubmit = () => {
    onSubmit({ travelClass, date, passengers });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <input
        type="date"
        className="w-full border p-2 rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={travelClass}
        onChange={(e) => setTravelClass(e.target.value)}
        className="w-full border p-2 rounded"
      >
        {availableClasses.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>

      {passengers.map((p, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            value={p.name}
            onChange={(e) => handlePassengerChange(i, 'name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="w-24 border p-2 rounded"
            value={p.age}
            onChange={(e) => handlePassengerChange(i, 'age', e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={addPassenger}
        className="text-blue-500 text-sm underline"
      >
        + Add Passenger
      </button>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Book Ticket
      </button>
    </div>
  );
}

