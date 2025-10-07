// TrainStatusDisplay.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrainSubway, faCircleCheck } from '@fortawesome/free-solid-svg-icons';



export default function TrainStatusDisplay({ status }) {
  const stations = [...status.previous_stations, ...status.upcoming_stations]|| [];
  const reachedStationCode = status?.current_station_code;
  const hasReachedDestination = status?.at_dstn;
  const reachedTime = stations.find(s => s.station_code === reachedStationCode)?.eta;

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
              // const arrivalDelayMin = calcDelay(stn.sta, stn.eta);

              const isReached = stn.station_code === reachedStationCode;

              return (
                <tr key={stn.station_code} className={isReached ? "bg-green-50 font-semibold" : ""}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTrainSubway} className="text-gray-500" />
                    <div className="flex flex-col">
                      <span>{stn.station_name}</span>
                      <span className="text-xs text-gray-400">{stn.distance_from_source} km</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {stn.eta !== "--" ? (
                      <>
                        <div>{stn.eta}</div>
                        <div className="text-xs text-gray-400">{stn.std}</div>
                      </>
                    ) : (
                      <span className="text-red-600">Source</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {stn.etd !== "--" ? (
                      <>
                        <div>{stn.etd}</div>
                        <div className="text-xs text-gray-400">{stn.std}</div>
                      </>
                    ) : (
                      <span className="text-green-600">Dest</span>
                    )}
                  </td>
                  <td className={`px-4 py-2 ${stn.arrival_delay > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {stn.arrival_delay > 0 ? `${stn.arrival_delay} min}` : "On time"}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    PF {stn.platform_number !== "-" ? stn.platform_number : "--"} / {
                      stn.halt !== "0" ? `${stn.halt} min` : "No Halt"
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

// function formatMinutesToHrMin(minutes) {
//   if (isNaN(minutes) || minutes < 0) return "--";

//   const hrs = Math.floor(minutes / 60);
//   const mins = minutes % 60;

//   if (hrs > 0 && mins > 0) return `${hrs}hr ${mins}min`;
//   if (hrs > 0) return `${hrs}hr`;
//   return `${mins}min`;
// }

