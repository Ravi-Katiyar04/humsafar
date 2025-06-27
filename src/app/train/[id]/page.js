'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function TrainDetailPage() {
  const { id } = useParams(); // Train ID from URL
  const router = useRouter();

  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [travelClass, setTravelClass] = useState('Sleeper');
  const [passengers, setPassengers] = useState([{ name: '', age: '' }]);
  const [date, setDate] = useState('');

  // Fetch train details
  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const res = await axios.get(`/api/train/${id}`);
        setTrain(res.data.train);
      } catch (err) {
        console.error('Failed to fetch train:', err);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };
    fetchTrain();
  }, [id, router]);

  const handleBooking = async () => {
    try {
      await axios.post(
        '/api/booking/create',
        {
          trainId: train._id,
          date,
          travelClass,
          passengers,
        },
        { withCredentials: true }
      );
      alert('Booking successful!');
      router.push('/user/profile');
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Booking failed. Please log in and try again.');
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: '', age: '' }]);
  };

  if (loading) return <p className="p-4">Loading train details...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        {train.name} (#{train.trainNo})
      </h1>
      <p>From: {train.source} → To: {train.destination}</p>
      <p>Available Classes: {train.classes.join(', ')}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Book Ticket</h2>

        <label className="block mb-2">
          Travel Date:
          <input
            type="date"
            className="block w-full mt-1 p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label className="block mb-2">
          Class:
          <select
            className="block w-full mt-1 p-2 border rounded"
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            {train.classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </label>

        <h3 className="mt-4 font-medium">Passengers:</h3>
        {passengers.map((p, index) => (
          <div key={index} className="flex gap-2 my-2">
            <input
              type="text"
              placeholder="Name"
              value={p.name}
              onChange={(e) =>
                handlePassengerChange(index, 'name', e.target.value)
              }
              className="flex-1 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Age"
              value={p.age}
              onChange={(e) =>
                handlePassengerChange(index, 'age', e.target.value)
              }
              className="w-24 p-2 border rounded"
            />
          </div>
        ))}

        <button
          onClick={addPassenger}
          className="mt-2 text-sm text-blue-500 underline"
        >
          + Add another passenger
        </button>

        <button
          onClick={handleBooking}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
}
