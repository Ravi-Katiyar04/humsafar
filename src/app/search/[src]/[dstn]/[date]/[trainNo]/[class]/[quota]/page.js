"use client"
import React, { useEffect, useState } from "react";
import AddTraveller from "@/components/AddTraveller";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function TrainBookingPage() {
    const [mobile, setMobile] = useState("8287710866");
    const [email, setEmail] = useState("8287710866@ixigo-dummy.com");
    const [address, setAddress] = useState("SULTANPUR Uttar Pradesh, SULTANPUR, Uttar Pradesh, 228001");
    const [insurance, setInsurance] = useState(true);
    const [addPassengerOpen, setAddPassengerOpen] = useState(true);

    const [bookingData, setBookingData] = useState({
        train: 11201,
        class: "",
        class: "SL",
        quota: "",
        passengers: [],
        paymentStatus: "",
        pnr: "",
    });

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sectionElems = document.querySelectorAll(".booking-section");
            let current = 0;

            sectionElems.forEach((sec, i) => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    current = i;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleRemovePassenger = (index) => {
        const updatedPassengers = bookingData.passengers.filter((_, i) => i !== index);
        setBookingData((prev) => ({ ...prev, passengers: updatedPassengers }));
    };

    return (
        <div className="min-h-screen relative bg-gray-100">

            {addPassengerOpen && (
                <div className="fixed inset-0 z-[9999] flex">
                    {/* Left Drawer */}
                    <div className="w-80 h-full bg-white shadow-xl p-4 overflow-y-auto">
                        <AddTraveller
                           setAddPassengerOpen={setAddPassengerOpen}
                            passengers={bookingData.passengers}
                        />
                        {/* Overlay */}
                    
                    </div>
                     
                     {/* <div className="fixed inset-0 bg-black opacity-50"></div>   */}
                </div>
            )}
            {/* Scrollable Sections */}
            <div className="max-w-4xl  mx-auto px-6 space-y-4">
                {/* Train Details */}
                <section className="booking-section sticky top-18 z-50">
                    <div className=" flex flex-col items-center bg-white">
                        <h2 className="text-lg font-bold my-1">14863 Marudhar Exp</h2>
                        <p className="text-sm text-gray-600">SL • Sun, 28 Sep</p>
                        <div className="text-white bg-green-600 block text-center w-full font-semibold text-sm mt-1">
                            Current Availability - RAC 54 / RAC 50
                        </div>
                    </div>

                </section>

                <section className="irctc-id-section">

                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold mb-4">Sign- in to your IRCTC account</h2>

                        {/* User ID input with Save button */}
                        <div className="relative mb-2">
                            <input
                                type="text"
                                placeholder="IRCTC User ID"
                                className="w-full border border-gray-300 rounded-lg py-2 pr-16 pl-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700">
                                Save
                            </button>
                        </div>

                        {/* Case sensitive note */}
                        <p className="text-xs text-gray-500 mb-4">User ID is case sensitive. Eg- ‘ABC123’ & ‘abc123’ both can be valid IDs & belong to different users</p>

                        {/* Links */}
                        <div className="flex justify-between text-sm">
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot User ID?
                            </a>
                            <div>Don’t have an account? <a href="#" className="text-blue-600 hover:underline">
                                Register
                            </a></div>
                        </div>
                    </div>

                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Boarding Details</h3>
                        <select className="w-full border p-2 rounded mt-2">
                            <option>Sultanpur - SLN (28 Sep, 19:40)</option>
                        </select>
                    </div>
                </section>

                <section className="irctc-id-section">

                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Travellers</h3>
                        <ul className="mt-2 space-y-2 border-b-2 border-gray-300 pb-2">
                            {bookingData.passengers?.map((t, idx) => (
                                <li key={idx} className="flex items-center justify-between space-x-2">

                                    <label className="flex items-center gap-2">
                                        <input className="w-6 h-6" type="checkbox" checked={insurance} onChange={() => setInsurance(!insurance)} />
                                        <span>
                                            <div className="font-semibold text-gray-800">
                                                {t.fullName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {t.gender} • {t.age} • {t.berthPreference}
                                            </div>
                                        </span>
                                    </label>

                                    <button
                                    onClick={() => handleRemovePassenger(idx)}
                                    className="text-orange-500 cursor-pointer ">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>

                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setAddPassengerOpen(true)}
                         className="text-orange-500 mt-2 flex items-center gap-2 cursor-pointer">
                            <i className="fa-solid fa-plus"></i> Add New Traveller
                        </button>
                    </div>
                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
                        <div className="space-y-2 mt-2">
                            <div className="flex items-center border p-2 rounded">
                                <i className="fa-solid fa-phone mr-2 text-gray-600"></i>
                                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="flex-1 outline-none" />
                            </div>
                            <div className="flex items-center border p-2 rounded">
                                <i className="fa-solid fa-envelope mr-2 text-gray-600"></i>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">

                        <h3 className="text-2xl font-semibold mb-4">Billing Address</h3>
                        <div className="flex items-center border p-2 rounded mt-2">
                            <i className="fa-solid fa-home mr-2 text-gray-600"></i>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="flex-1 outline-none" />
                        </div>
                    </div>
                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">

                        <h3 className="text-2xl font-semibold mb-4">Additional Preferences</h3>
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" checked={insurance} onChange={() => setInsurance(!insurance)} />
                                Travel Insurance (₹0.45/person)
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> Auto Upgradation
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> Book only If confirmed berth allotted
                            </label>
                        </div>
                    </div>
                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Free Cancellation</h3>
                        <div className="mt-2 space-y-2 border rounded p-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="cancel" defaultChecked />
                                Yes (₹35/person)
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="cancel" />
                                No
                            </label>
                        </div>
                    </div>
                </section>

                <section className="irctc-id-section">
                    <div className="w-full  bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">GST</h3>
                        <label className="flex items-center gap-2 mt-2">
                            <input type="checkbox" /> Add GST to claim tax benefits
                        </label>
                    </div>
                </section>

                {/* Payment */}
                <section className="booking-section sticky bottom-0 z-50 cursor-pointer">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                        Proceed To Pay
                    </button>
                </section>
            </div>


        </div>
    );
}
