"use client";
import { useState } from "react";
import Booking from "@/components/Booking";
import FAQSection from "@/components/FAQSection";
import Link from 'next/link';


import {tatkalTicketPageFaq} from '@/data.js';

export default function TatkalBooking() {
    const [source, setSource] = useState("Bengaluru (YPR)");
    const [destination, setDestination] = useState("Mysore (MYS)");
    const [journeyDate, setJourneyDate] = useState("01 Jul, Tue");

    const [faqs, setFaqs] = useState(tatkalTicketPageFaq);

    const handleSearch = () => {
        // Your logic here
        console.log({ source, destination, journeyDate });
    };

    return (
        <div className="min-h-screen pb-6 bg-gray-100">
            <Booking currentPath="/tatkal-reservation" title={"Tatkal Railway Reservation"} btntext={"Search"}/>

            {/* Content Section */}
            <div className="bg-gray-100 max-w-11/12 mx-auto px-4 text-[16px]">

                <div className=" mx-auto my-4 text-gray-500">
                    <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
                    <span className="text-gray-700 font-medium ">Tatkal Railway Reservation</span>
                </div>

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">Book Tatkal Train Tickets Online</h1>
                    <p className="my-2" >You can book Tatkal tickets for a maximum of only 4 passengers per PNR. Book tickets through your IRCTC login ID online on ixigo. Check Tatkal quota seat availability for your train and ticket confirmation probability/prediction.</p>

                    <p className="my-2">Here’s how you can quickly book Tatkal tickets in a few easy steps:</p>

                    <ul className="list-disc ml-8 space-y-1">
                        <li>Log in to your IRCTC account on ixigo</li>
                        <li>Select your travel source station and destination</li>
                        <li>Choose your date of journey</li>
                        <li>Now select quota as ‘Tatkal’ and search for trains</li>
                        <li>Click on ‘Book Now’ for the preferred train from the list</li>
                        <li>Fill in the passenger’s details carefully, like Name, Age, Gender, Seat Preference, etc.</li>
                        <li>Select your payment mode, like internet banking, payment wallet, credit or debit card and pay for the ticket</li>
                        <li>Enter the OTP received on your Aadhaar-linked mobile number to proceed</li>
                        <li>Print your e-ticket</li>
                    </ul>

                    <p className="my-4">Tatkal booking is available for all classes like 3A, 2A, 1A, Sleeper and Chair Car. Tatkal ticket booking is available on payment of an extra charge on a first-come-first-served basis for all but first AC seats. Tickets are issued for the actual distance of travel, subject to the distance restriction applicable to the train. Once you have booked your tickets, you can check your PNR status. Click here for normal <Link href="/" className="text-blue-700">train ticket booking</Link>.</p>
                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">Tatkal Ticket Booking Time</h1>

                    <ul className="list-disc ml-8 space-y-2">
                        <li>For AC Classes, tatkal ticket timings are as follows:
                            <table className="w-full border my-6 max-w-3xl border-gray-400 text-[14px] text-center">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-2 border border-gray-400">Class of Travel</th>
                                        <th className="p-2 border border-gray-400">Tatkal Reservation Timing (in am)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border border-gray-400">AC 1 Tier (1A), AC 2 Tier (2A), AC 3 Tier (3A),
                                            Chair Car Coach(CC), Executive Chair (EC),
                                            AC-3 Economy (3E)</td>
                                        <td className="p-2 border border-gray-400">10:00 to 10:30 AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li>For Non-AC Classes, tatkal booking hours are as follows:
                            <table className="w-full max-w-3xl my-6 border border-gray-400 text-[14px] text-center">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-2 border border-gray-400">Class of Travel</th>
                                        <th className="p-2 border border-gray-400">Tatkal Reservation Timing (in am)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border border-gray-400">Sleeper (SL), First Class (FC), Second Seating (2S</td>
                                        <td className="p-2 border border-gray-400">11:00 to 11:30 AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>

                    <p className="mt-4">Tatkal tickets can be booked one day in advance, excluding the date of journey from the train originating station. Tatkal booking time for AC and non-AC classes is different and must be followed strictly to ensure availability.</p>
                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">Tatkal Ticket Cancellation</h1>
                    <p className="my-2" >For confirmed Tatkal tickets, there is no refund on cancellation of tickets. Waitlisted Tatkal ticket cancellation do have some deductions as per IRCTC rules. You can cancel your waiting list or RAC Tatkal tickets up to 30 minutes before the departure of the train. If waitlisted Tatkal tickets do not get confirmed or RAC, they automatically get cancelled, and the passenger gets a refund. If your train is running late by 3 hours or is cancelled by Indian Railways, you are entitled to file Ticket Deposit Receipt (TDR) for claiming a refund.</p>
                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">Tatkal Ticket Booking Rules</h1>
                    <p className="my-2" >The rules for Tatkal ticket booking are as follows:</p>

                    <ul className="list-disc ml-8 space-y-1">
                        <li>Aadhaar must be linked and verified with the IRCTC user profile to book Tatkal tickets online.</li>
                        <li>Starting 15th July 2025, Aadhaar-based OTP authentication is compulsory for Tatkal bookings online.</li>
                        <li>Confirmed Tatkal tickets can be cancelled, but no refunds are provided.</li>
                        <li>Unsold Tatkal tickets are released to passengers who are on a waiting list.</li>
                        <li>TQWL: It stands for Tatkal Quota Waiting List, when ticket booking goes beyond the Tatkal ticket availability.</li>
                        <li>General and ladies quota cannot be opted for along with Tatkal.</li>
                        <li>Tatkal reservation is also available in the Executive Class of Shatabdi Express trains.</li>
                        <li>No duplicate Tatkal tickets are issued. Duplicate Tatkal tickets can only be issued in exceptional cases on payment of the full fare, including the Tatkal charges.</li>
                        <li>Change of name is not permitted on the bookings made under the IRCTC Tatkal booking scheme.</li>
                    </ul>

                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">How to Authenticate Aadhaar in Your IRCTC Account</h1>
                    <p className="my-2" >Follow these simple steps to complete Aadhaar authentication on the IRCTC website or app:</p>

                    <ul className="list-disc ml-8 space-y-1">
                        <li><strong>Step 1:</strong> Visit the official <Link href="https://www.irctc.co.in/" target="_blank" className="text-blue-700 font-semibold">IRCTC website</Link> or open the IRCTC app. Log in using your account credentials.</li>
                        <li><strong>Step 2:</strong> Go to the ‘My Account’ section and click on ‘Authenticate User’.</li>
                        <li><strong>Step 3:</strong> Enter your Aadhaar Number or Virtual ID in the required field.</li>
                        <li><strong>Step 4:</strong> Click on ‘Verify Details’ to proceed.</li>
                        <li><strong>Step 5:</strong> You’ll receive a One-Time Password (OTP) on your Aadhaar-linked mobile number.</li>
                        <li><strong>Step 6:</strong> Enter the OTP, agree to the terms & conditions by checking the box, and click ‘Submit’ to complete the authentication.</li>
                    </ul>

                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <section className="mb-8">
                    <h1 className="text-xl font-bold my-6 text-black">Tatkal Ticket Booking Charges</h1>
                    <p className="my-2" >Tatkal ticket price varies based on class and distance, within the defined fare limits. Charges for Tatkal tickets are fixed at the rate of 10% of the basic fare for second class and 30% of the basic fare for all other classes, subject to a minimum and maximum fee.</p>

                    <table className="w-full max-w-5xl my-6 border border-gray-400 text-[14px] text-center">
                        <thead >
                            <tr className="bg-gray-200">
                                <th className="p-2 border border-gray-400" >Class of Travel</th>
                                <th className="p-2 border border-gray-400">Minimum Tatkal (in Rs.)</th>
                                <th className="p-2 border border-gray-400">Maximum Tatkal(in Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-gray-400">Reserve Second sitting (2S)</td>
                                <td className="p-2 border border-gray-400">₹10</td>
                                <td className="p-2 border border-gray-400">₹15</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-400">Sleeper</td>
                                <td className="p-2 border border-gray-400">₹100</td>
                                <td className="p-2 border border-gray-400">₹200</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-400">AC Chair Car</td>
                                <td className="p-2 border border-gray-400">₹125</td>
                                <td className="p-2 border border-gray-400">₹225</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-400">AC 3 Tier</td>
                                <td className="p-2 border border-gray-400">₹300</td>
                                <td className="p-2 border border-gray-400">₹400</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-400">AC 2 Tier</td>
                                <td className="p-2 border border-gray-400">₹400</td>
                                <td className="p-2 border border-gray-400">₹500</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-400">Executive</td>
                                <td className="p-2 border border-gray-400">₹400</td>
                                <td className="p-2 border border-gray-400">₹500</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <hr className="my-6 md:my-16 border-t-2 border-dotted border-gray-400" />

                <FAQSection faqData={faqs} />

            </div>
        </div>
    );
}
