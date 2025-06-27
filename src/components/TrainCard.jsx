'use client';

import Link from 'next/link';

export default function TrainCard({ train }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-700">
        {train.name} (#{train.trainNo})
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        {train.source} → {train.destination}
      </p>
      <p className="text-sm">Available Classes: {train.classes.join(', ')}</p>

      <Link
        href={`/train/${train._id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View & Book
      </Link>
    </div>
  );
}
