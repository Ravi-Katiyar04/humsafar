// TrainStatusDisplay.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrainSubway, faCircleCheck } from '@fortawesome/free-solid-svg-icons';



export default function TrainStatusDisplay({ status }) {
  const stations = status?.body?.stations || [];
  const reachedStationCode = status?.body?.current_station;
  const hasReachedDestination = status?.body?.terminated;
  const reachedTime = stations.find(s => s.stationCode === reachedStationCode)?.actual_arrival_time;

  return (
    <div className="bg-white overflow-hidden ">
      <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
        <div className="text-green-700 font-semibold text-sm">
          {hasReachedDestination && (
            <>
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-green-600" />
              Arrived {reachedTime ? `at ${reachedTime}` : ``}
            </>
          )}
        </div>
        
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">Station</th>
              <th className="px-4 py-2">Arrival</th>
              <th className="px-4 py-2">Departure</th>
              <th className="px-4 py-2">Delay</th>
              <th className="px-4 py-2">PF/Halt</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((stn, idx) => {
              const arrivalDelayMin = calcDelay(stn.arrivalTime, stn.actual_arrival_time);

              const isReached = stn.stationCode === reachedStationCode;

              return (
                <tr key={stn.stationCode} className={isReached ? "bg-green-50 font-semibold" : ""}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTrainSubway} className="text-gray-500" />
                    <div className="flex flex-col">
                      <span>{stn.stationName}</span>
                      <span className="text-xs text-gray-400">{stn.distance} km</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {stn.actual_arrival_time !== "--" ? (
                      <>
                        <div>{formatTime(stn.actual_arrival_time)}</div>
                        <div className="text-xs text-gray-400">{stn.arrivalTime}</div>
                      </>
                    ) : (
                      <span className="text-red-600">Source</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {stn.actual_departure_time !== "--" ? (
                      <>
                        <div>{formatTime(stn.actual_departure_time)}</div>
                        <div className="text-xs text-gray-400">{stn.departureTime}</div>
                      </>
                    ) : (
                      <span className="text-green-600">Dest</span>
                    )}
                  </td>
                  <td className={`px-4 py-2 ${arrivalDelayMin > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {arrivalDelayMin > 0 ? `${formatMinutesToHrMin(arrivalDelayMin)}` : "On time"}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    PF {stn.expected_platform !== "-" ? stn.expected_platform : "--"} / {
                      stn.haltTime !== "0" ? `${stn.haltTime} min` : "No Halt"
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper functions
function formatTime(time) {
  return time?.length === 4 ? `${time.slice(0, 2)}:${time.slice(2)}` : time;
}

function calcDelay(scheduled, actual) {
  if (!scheduled || !actual || scheduled === "--" || actual === "--") return 0;

  const sMin = toMinutes(scheduled);
  const aMin = toMinutes(actual);

  console.log(`Scheduled: ${scheduled}, Actual: ${actual}, sMin: ${sMin}, aMin: ${aMin}`);
  
  if (isNaN(sMin) || isNaN(aMin)) return 0;

  return aMin - sMin;
}

function toMinutes(time) {
  if (!time || typeof time !== "string") return NaN;

  let hours = 0, minutes = 0;

  if (time.includes(":")) {
    // Format: "HH:mm"
    const [h, m] = time.split(":");
    hours = parseInt(h, 10);
    minutes = parseInt(m, 10);
  } else if (time.length === 4) {
    // Format: "HHmm"
    hours = parseInt(time.slice(0, 2), 10);
    minutes = parseInt(time.slice(2), 10);
  } else {
    return NaN; // unknown format
  }

  return hours * 60 + minutes;
}

function formatMinutesToHrMin(minutes) {
  if (isNaN(minutes) || minutes < 0) return "--";

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) return `${hrs}hr ${mins}min`;
  if (hrs > 0) return `${hrs}hr`;
  return `${mins}min`;
}

