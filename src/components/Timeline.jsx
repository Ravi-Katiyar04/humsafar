'use client';
import TimelineItem from './TimelineItem';
import { useState } from 'react';
import { RefreshCcw } from 'lucide-react'; // or use any refresh icon

export default function Timeline({ data, lastUpdated }) {
  const [updating, setUpdating] = useState(false);

  const handleRefresh = async () => {
    setUpdating(true);
    // TODO: Trigger parent refresh logic here
    await new Promise(res => setTimeout(res, 1000));
    setUpdating(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Updated {lastUpdated} ago
        </p>
        <button
          onClick={handleRefresh}
          disabled={updating}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <RefreshCcw className={`w-4 h-4 ${updating ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="relative border-l-4 border-blue-500 pl-6 space-y-6">
        {data.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
