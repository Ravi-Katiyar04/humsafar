"use client"
export default function TrainStatusDisplay({ status }) {
  if (!status) return null;

  return (
    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Live Train Status for {status.trainNumber} - {status.trainName}</h2>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-medium">Current Status:</span> {status.currentStatus}
      </p>
      <p className="text-gray-600 text-sm">Last Updated: {status.lastUpdated}</p>
      {/* Add more details here based on your `status` object and screenshots */}
      {status.eta && <p className="text-gray-700 mt-2"><span className="font-medium">Estimated Time of Arrival (ETA):</span> {status.eta}</p>}
      {status.platform && <p className="text-gray-700"><span className="font-medium">Expected Platform:</span> {status.platform}</p>}

      {status.halts && status.halts.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Upcoming Halts:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {status.halts.map((halt, index) => (
              <li key={index}>
                {halt.station} (Arrival: {halt.arrival}, Departure: {halt.departure})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}