// components/PNRDetailsCard.jsx

import "@fortawesome/fontawesome-free/css/all.min.css";

function formatJourneyDateTime(dateString) {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
    });

    const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return { formattedDate, formattedTime };
}

 function getJourneyDurationStr(departureString, arrivalString) {
  const departure = new Date(departureString);
  const arrival = new Date(arrivalString);

  const diffMs = arrival - departure;

  if (isNaN(diffMs) || diffMs < 0) {
    return "00h 00m";
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minutes = String(totalMinutes % 60).padStart(2, "0");

  return `${hours}h ${minutes}m`;
}






export default function PNRDetailsCard({ pnrData }) {

    console.log('PNR Details Card Data:', pnrData.passengerList[0].currentCoachId);


    return (
        <div className="bg-white rounded-2xl shadow p-6 my-6 mx-auto border border-gray-200">
            {/* Train Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">{pnrData.trainName}</h2>
                    <p className="text-sm text-gray-600">{pnrData.journeyClass} • {pnrData.quota}</p>
                </div>

                <div className="flex gap-3 mt-1">
                    <button className="border border-blue-500 cursor-pointer text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-orange-50 transition" onClick={() => {
                        window.location.href = `/${pnrData.trainNumber}/train-running-status`;
                    }}>
                        {pnrData.trainNumber} Running Status
                    </button>
                    <button className="border border-blue-500 cursor-pointer text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-orange-50 transition">
                        {pnrData.trainNumber} Train Schedule
                    </button>
                </div>
            </div>

            {/* Journey Info */}
            <div className="flex justify-between items-center mt-6">
                {/* Source */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">{formatJourneyDateTime(pnrData.dateOfJourney).formattedDate}</p>
                    <p className="text-2xl font-semibold text-gray-800">{formatJourneyDateTime(pnrData.dateOfJourney).formattedTime}</p>
                    {/* <p className="text-sm text-gray-500">Thu, 07 Aug</p>
          <p className="text-2xl font-semibold text-gray-800">15:55</p> */}
                    <p className="text-lg font-medium text-gray-700">{pnrData.boardingPoint}</p>
                    <p className="text-sm text-gray-500">Lucknow Ne</p>
                    <p className="text-xs text-gray-400">Exp. Platform No. 2</p>
                </div>

                {/* Duration */}
                <div className="text-center text-gray-600">
                    <div className="text-sm font-medium">{getJourneyDurationStr(pnrData.dateOfJourney, pnrData.arrivalDate)}</div>
                    <div className="w-36 h-px bg-gray-300 my-1 mx-auto"></div>
                </div>

                {/* Destination */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">{formatJourneyDateTime(pnrData.arrivalDate).formattedDate}</p>
                    <p className="text-2xl font-semibold text-gray-800">{formatJourneyDateTime(pnrData.arrivalDate).formattedTime}</p>
                    {/* <p className="text-sm text-gray-500">Thu, 07 Aug</p>
          <p className="text-2xl font-semibold text-gray-800">19:18</p> */}
                    <p className="text-lg font-medium text-gray-700">{pnrData.destinationStation}</p>
                    <p className="text-sm text-gray-500">Etawah Jn</p>
                    <p className="text-xs text-gray-400">Exp. Platform No. 2</p>
                </div>
            </div>

            {/* Passenger Table */}
            <div className="mt-6 bg-gray-50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 text-sm text-gray-600 font-semibold border-b px-4 py-2">
                    <div>Passenger Name</div>
                    <div className="text-center">Current Status</div>
                    <div className="text-right">Coach/ Seat/ Berth</div>
                </div>
                {pnrData.passengerList.map((passenger, index) => (
                    <div key={index} className="grid grid-cols-3 text-sm text-gray-800 px-4 py-3">
                        <div className="font-medium">Passenger {passenger.passengerSerialNumber}</div>
                        <div className="text-center text-green-600 font-semibold">{passenger.currentStatus === 'CNF' ? 'Confirmed' : 'Not Confirmed'}</div>
                        <div className="text-right font-semibold text-green-700">{passenger.currentBerthNo === 0 ? 'CNF' : `${passenger.currentCoachId}, ${passenger.currentBerthNo} `}</div>
                    </div>
                ))}

            </div>


            {/* Disclaimer */}
            <div className="mt-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded text-sm text-gray-700">
                <p className="font-semibold mb-2">Disclaimer</p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>
                        Train timings and status are subject to change without prior notice.
                    </li>
                    <li>
                        Please verify them with Indian Railways before boarding. The confirmation chances,
                        cancellation charges, platform numbers and berth types are projections alone and ixigo
                        does not take responsibility if the predictions are not accurate.
                    </li>
                    <li>
                        The user will get full refund of cancellation if the train is delayed by more than 3
                        hrs, subject to the condition that the cancellation is done prior to the departure time.
                    </li>
                </ol>
            </div>
        </div>
    );
}


// function getJourneyDuration(departureString, arrivalString) {
//     const departure = new Date(departureString);
//     const arrival = new Date(arrivalString);

//     const diffMs = arrival - departure;

//     if (isNaN(diffMs) || diffMs < 0) {
//         return { hours: "00", minutes: "00" }; // fallback for invalid dates
//     }

//     const totalMinutes = Math.floor(diffMs / (1000 * 60));
//     const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
//     const minutes = String(totalMinutes % 60).padStart(2, "0");

//     return { hours, minutes }; // or `${hours}h ${minutes}m` if you want a string
// }