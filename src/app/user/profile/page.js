'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ProfilePage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch bookings from API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('/api/booking/user', {
          withCredentials: true,
        });
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [router]);

  if (loading) return <p className="p-4">Loading your bookings...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Your Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-lg font-semibold">
                Train: {booking.train?.name || 'Unknown'} (#{booking.train?.trainNo})
              </h2>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Class: {booking.travelClass}</p>
              <p>Status: {booking.status}</p>
              <p>Passengers: {booking.passengers.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
