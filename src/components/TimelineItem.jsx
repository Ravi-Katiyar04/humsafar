import { CheckCircle, Clock } from 'lucide-react';

export default function TimelineItem({ station, time, platform, arrivedEarly, status }) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[30px] top-1.5">
        {status === 'completed' ? (
          <CheckCircle className="w-5 h-5 text-green-600" />
        ) : (
          <Clock className="w-5 h-5 text-yellow-500" />
        )}
      </div>

      {/* Content */}
      <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold text-lg text-gray-800">{station}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className="text-sm text-gray-600">
          <span>Platform: <strong>{platform}</strong></span>
        </div>
        {arrivedEarly && (
          <p className="text-green-600 text-sm mt-1 font-medium">
            Arrived {arrivedEarly} early
          </p>
        )}
      </div>
    </div>
  );
}
