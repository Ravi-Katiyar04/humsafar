import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrainSubway, faMoon, faBolt, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function formatMinutesToHrMin(minutes) {
  if (isNaN(minutes) || minutes < 0) return "--";

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) return `${hrs}hr ${mins}min`;
  if (hrs > 0) return `${hrs}hr`;
  return `${mins}min`;
}

export default function TrainSearchDetails({ status }) {

  return (
    <div className="shadow-md border-2 border-gray-200 rounded-md p-6 bg-white w-full my-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold">{status.train_name}</h2>
        </div>
        <div className="text-sm text-gray-500 space-x-1">
          <span className="font-semibold">Runs on:</span>
          <span className="text-black">{status.run_days.split(',').map((day, index) => (
            <span key={index} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded mr-2 mb-1 text-xs font-medium">
              {day}
            </span>
          ))}
          </span>
        </div>
      </div>

      {/* Route and Stops */}
      <div className="flex justify-between items-center mt-6">
        {/* Source */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">{status.source}</p>
          <p className="text-2xl font-semibold">{status.source}</p>
          <p className="text-sm text-gray-500">{status.source_stn_name}</p>
        </div>

        {/* Duration and Stops */}
        <div className="flex flex-col items-center text-gray-600">
          <p className="text-sm">{formatMinutesToHrMin(status.journey_time)}</p>
          <div className="w-40 h-1 bg-gray-300 my-1 rounded-full relative">
            <div className="absolute left-0 top-[-6px] w-2 h-2 bg-gray-600 rounded-full" />
            <div className="absolute right-0 top-[-6px] w-2 h-2 bg-gray-600 rounded-full" />
          </div>
          <p className="text-sm">{Number(status.stoppage_number) - 1} stops</p>
        </div>

        {/* Destination */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">{status.destination}</p>
          <p className="text-2xl font-semibold">{status.source}</p>
          <p className="text-sm text-gray-500">{status.dest_stn_name}</p>
        </div>
      </div>

      {/* Facilities */}
      <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mt-6 space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2 opacity-50">
          <FontAwesomeIcon icon={faUtensils} />
          <span>Pantry</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faMoon} className="text-indigo-500" />
          <span>Overnight</span>
        </div>
        <div className="flex items-center space-x-2 opacity-50">
          <FontAwesomeIcon icon={faBolt} />
          <span>Superfast</span>
        </div>
        <div className="flex items-center space-x-2 opacity-50">
          <FontAwesomeIcon icon={faConciergeBell} />
          <span>Catering</span>
        </div>
      </div>
    </div>
  );
}
