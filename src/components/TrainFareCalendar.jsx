import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function TrainFareCalendar({ status }) {
    const stations = status.previous_stations;
    const [selectedClass, setSelectedClass] = useState('3A');
    const [source, setSource] = useState(status.source_stn_code);
    const [destination, setDestination] = useState(status.dest_stn_code);
    const [journeyQuota, setJourneyQuota] = useState('General');
    const [loading, setLoading] = useState(false);
    const [fareData, setFareData] = useState();
    const [error, setError] = useState(null);
    const [selectedFare, setSelectedFare] = useState();

    // useEffect(() => {
    //     const data =
    //         fareData?.find((fare) => fare.classType === selectedClass) || null;
    //     setSelectedFare(data);
    // }, [setSelectedClass])

    console.log(fareData)

    console.log(selectedFare)

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setFareData(null);

        try {
            const res = await axios.get(
                `/api/trainFare?trainNumber=${status.train_number}&src=${source}&dst=${destination}`
            );
            console.log(res.data);
            setFareData(res.data[journeyQuota.toLowerCase()]);
            console.log(fareData)
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="w-full mx-auto mt-10">
            {/* Header */}
            <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold mb-6">
                {status.train_name} {status.train_number} Ticket Prices
            </h2>

            {/* Dropdown Section */}
            <div className="bg-white rounded-lg p-4 shadow max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 text-left">
                    <label className="text-xs text-black font-semibold mb-1" htmlFor="source">From</label>
                    <select
                        id="source"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors bg-white"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        required
                    >
                        {stations.map((station, index) => (
                            <option key={index} value={station.station_code}>
                                {station.station_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <i className="text-3xl px-4 text-gray-600"><FontAwesomeIcon icon={faArrowCircleRight} /></i>
                </div>

                <div className="flex-1 px-4 text-left">
                    <label className="text-xs text-black font-semibold mb-1" htmlFor="destination">To</label>
                    <select
                        id="destination"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors bg-white"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    >
                        {stations.map((station, index) => (
                            <option key={index} value={station.station_code}>
                                {station.station_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex-1 px-4 py-4 text-left">
                    <label className="text-xs text-black font-semibold mb-1" htmlFor="Quota">Quota</label>
                    <select
                        id="Quota"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 transition-colors bg-white"
                        value={journeyQuota}
                        onChange={(e) => setJourneyQuota(e.target.value)}
                        required
                    >
                        <option value="General">General</option>
                        <option value="Tatkal">Tatkal</option>
                    </select>
                </div>


                <button
                    onClick={handleSearch}
                    className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold px-6 py-4 md:rounded-l-none md:rounded-r-lg w-full md:w-auto"
                >
                    Get Fare
                </button>
            </div>



            {/* Fare Breakdown Section (Replaces Calendar) */}
            <div className="mt-4 bg-white rounded shadow-md p-4">
                {loading && (
                    <div className="flex items-center justify-center h-96">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && fareData && (
                    <>
                        {/* Buttons for each classType */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            {fareData.map((fare) => (
                                <button
                                    key={fare.classType}
                                    onClick={() => setSelectedClass(fare.classType)}
                                    className={`px-4 py-2 rounded ${selectedClass === fare.classType
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {fare.classType}
                                </button>
                            ))}
                        </div>

                        {/* Fare Breakdown for selected class */}
                        {selectedFare && (
                            <div>
                                <p className="text-gray-600 mb-2">
                                    Fare Breakdown for <strong>{selectedFare.classType}</strong>:
                                </p>
                                <ul className="list-disc list-inside">
                                    {selectedFare.breakup.map((item) => (
                                        <li key={item.key} className="mb-1">
                                            {item.title}: ₹{item.cost}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-2 font-semibold">
                                    Total Fare: ₹{selectedFare.fare}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>

        </div>
    );
}


