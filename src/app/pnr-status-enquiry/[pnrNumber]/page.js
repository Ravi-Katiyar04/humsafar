"use client"
import { use, useEffect, useState } from 'react';
import RailwayInfo from '@/components/RailwayInfo';
import PNRDetailsCard from '@/components/PNRDetailsCard';
import ServiceTiles from '@/components/Services';
import axios from 'axios';

export default function PNRStatus({ params }) {
    const { pnrNumber: pnrNumber } = use(params);
    const [pnrData, setPNRData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [syncedTime, setSyncedTime] = useState("moments ago");


    useEffect(() => {
        const fetchPNRStatus = async () => {
            setLoading(true);
            setError(null);
            setPNRData(null);
            console.log('Fetching PNR Status for:', pnrNumber);

            try {
                const res = await axios.get(
                    `/api/pnrStatus?pnrNumber=${pnrNumber}`
                );
                console.log('PNR Status Response:', res.data.success);
                if (res.data.success) {
                    console.log(res.data)

                    setPNRData(res.data.data);
                    setLoading(false);
                    setSyncedTime("moments ago");

                } else {
                    console.error('PNR Status Error:', res.data.message);
                    setError(res.data.message || 'PNR not found or no data available.');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPNRStatus();
    }, []);

    return (
        <>
            {loading && (
                <div className="flex flex-col justify-center items-center min-h-screen bg-white animate-fade-in">
                    {/* Spinner icon with glow and scale animation */}
                    <div className="relative">

                        {/* Font Awesome spinner */}
                        <i className="fas fa-circle-notch fa-spin text-4xl text-blue-600 relative z-10"></i>
                    </div>

                    {/* Loading text */}
                    <p className="mt-4 text-gray-600 text-lg font-semibold animate-pulse">Loading...</p>
                </div>

            )}
            {error && <p className="text-center text-red-500">{error}</p>}
            {pnrData && (<main className='max-w-11/12 mx-auto min-h-screen text-gray-600  text-[14px] my-10 md:flex gap-10 '>

                <div className=' w-full md:w-4/5 min-h-screen' >

                    <div className="bg-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                PNR: {pnrNumber}
                                <i className="fas fa-pen text-gray-500 hover:text-gray-700 cursor-pointer"></i>
                            </h2>
                            <p className="text-sm text-gray-600">
                                {pnrData.chartStatus}

                            </p>
                        </div>
                        <button onClick={() => {
                            window.location.reload();
                        }}>
                            <i className="fas fa-sync-alt cursor-pointer text-lg text-gray-700 hover:text-black transition-transform duration-200 hover:rotate-90"></i>
                        </button>
                    </div>




                    <PNRDetailsCard pnrData={pnrData} />

                    <ServiceTiles />

                </div>

                <div className=' mb-4 md:w-1/5 w-full flex flex-col gap-8 min-h-screen' >
                    <RailwayInfo />

                    <div >
                        <h1 className="text-lg font-semibold text-gray-900 mb-2">Fare Details</h1>
                        <div className="bg-white border-2 border-gray-200 p-4 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Ticket Fare: {pnrData.ticketFare}
                            </h3>
                            <p className="text-sm text-gray-600">
                                Cancellation Charges: ₹60
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            )}
        </>
    );
}