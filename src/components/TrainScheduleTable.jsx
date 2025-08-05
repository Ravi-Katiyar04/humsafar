import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TrainScheduleTable({status}) {

  const schedule= status?.previous_stations;
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-900 font-semibold">
          <tr>
            <th className="px-4 py-3">Stn Code</th>
            <th className="px-4 py-3">Stn Name</th>
            <th className="px-4 py-3">Arrives</th>
            <th className="px-4 py-3">Departs</th>
            <th className="px-4 py-3">Stop time</th>
            <th className="px-4 py-3">Distance</th>
            <th className="px-4 py-3">Platform</th>
            <th className="px-4 py-3">Route</th>
            <th className="px-4 py-3">Day</th>
            <th className="px-4 py-3">Avg delay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {schedule.map((station, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-semibold">{station.station_code}</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer flex items-center gap-2">
                <FontAwesomeIcon icon={faTrainSubway} />
                {station.station_name}
              </td>
              <td className="px-4 py-2">{station.distance_from_source == 0 ? "Start" : station.sta}</td>
              <td className="px-4 py-2">{station.sta}</td>
              <td className="px-4 py-2">{station.halt} min</td>
              <td className="px-4 py-2">{station.distance_from_source}</td>
              <td className="px-4 py-2">{station.platform_number}</td>
              <td className="px-4 py-2">{station.route}</td>
              <td className="px-4 py-2">{Number(status.a_day) + 1}</td>
              <td className="px-4 py-2 text-gray-600">{station.delay}</td>
            </tr>
          ))}
          <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 font-semibold">{status.destination}</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer flex items-center gap-2">
                <FontAwesomeIcon icon={faTrainSubway} />
                {status.dest_stn_name}
              </td>
              <td className="px-4 py-2">{status.cur_stn_sta}</td>
              <td className="px-4 py-2">end</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">{status.distance_from_source}</td>
              <td className="px-4 py-2">{status.platform_number}</td>
              <td className="px-4 py-2">{status.route}</td>
              <td className="px-4 py-2">{Number(status.a_day) + 1}</td>
              <td className="px-4 py-2 text-gray-600">{status.delay}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
