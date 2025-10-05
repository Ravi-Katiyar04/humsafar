'use client';

import { Inter } from "next/font/google";
import MoreTrainInformation from "@/components/MoreTrainInformation";
const inter = Inter({ subsets: ["latin"] });


export default function Cancellation() {


  return (
    <>
      <div className="min-h-fit bg-cover bg-center text-gray-600 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/assets/train.jpg')",
        }}>
        <h1 className="text-5xl font-bold my-40 text-white">IRCTC Cancellation Charges</h1>
      </div>

      <main className={`${inter.className} p-4 max-w-11/12 mx-auto text-[14px] text-gray-600 font-serif font-semibold`}>

        <section className="py-10 px-4 flex justify-center bg-white">
          <div className=" w-full rounded shadow-md bg-white p-6 border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Cancellation Rules for Indian Railways Tickets
            </h2>
            <p className="text-gray-700  mb-4">
              To cancel a ticket and claim a refund, it is <span className="font-bold">mandatory to follow the cancellation rules</span> set by the Indian Railways:
            </p>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                E-tickets can be cancelled through the IRCTC website, Mobile App or from any online portal from where you booked your ticket, whereas counter tickets need to be cancelled at any of the PRS (Passenger Reservation System) counters.
              </li>
              <li>
                For cancellation of E-tickets booked through IRCTC, a valid mobile number and email ID registered with the ticket should be provided.
              </li>
              <li>
                Partial cancellation of tickets is allowed for some categories like family tickets, wherein cancellation can be done for individual passengers and not for the entire ticket.
              </li>
              <li>
                Online cancellation is not available for certain types of train tickets like Foreign Tourist Quota, Tatkal tickets, etc. These tickets need to be physically cancelled at a PRS counter.
              </li>
            </ul>
          </div>
        </section>

        <div className="w-full mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">IRCTC Cancellation Charges</h2>
          <p className="text-gray-700 text-center mb-6">
            Here are the detailed cancellation charges depending upon the class of travel and the time before train departure the cancellation is made:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-center">
              <thead className="bg-gray-100 text-black">
                <tr>
                  <th className="border px-4 py-2 font-semibold">Class of Travel</th>
                  <th className="border px-4 py-2 font-semibold">Cancellation Charges 48 hrs before</th>
                  <th className="border px-4 py-2 font-semibold">Cancellation Charges 12 to 48 hrs</th>
                  <th className="border px-4 py-2 font-semibold">Cancellation Charges Less than 12 hrs and up to 4 hrs</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="border px-4 py-2">AC First Class/Executive Class</td>
                  <td className="border px-4 py-2">Rs. 240</td>
                  <td className="border px-4 py-2">25% of fare, min. Rs. 240</td>
                  <td className="border px-4 py-2">50% of fare, min. Rs. 240</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">AC 2 Tier/First Class</td>
                  <td className="border px-4 py-2">Rs. 200</td>
                  <td className="border px-4 py-2">25% of fare, min. Rs. 200</td>
                  <td className="border px-4 py-2">50% of fare, min. Rs. 200</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">AC 3 Tier/AC Chair car/AC 3 Economy</td>
                  <td className="border px-4 py-2">Rs. 180</td>
                  <td className="border px-4 py-2">25% of fare, min. Rs. 180</td>
                  <td className="border px-4 py-2">50% of fare, min. Rs. 180</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Sleeper Class</td>
                  <td className="border px-4 py-2">Rs. 120</td>
                  <td className="border px-4 py-2">25% of fare, min. Rs. 120</td>
                  <td className="border px-4 py-2">50% of fare, min. Rs. 120</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Second Class</td>
                  <td className="border px-4 py-2">Rs. 60</td>
                  <td className="border px-4 py-2">25% of fare, min. Rs. 60</td>
                  <td className="border px-4 py-2">50% of fare, min. Rs. 60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <MoreTrainInformation />

        <section className="bg-white text-gray-800 py-12 px-4 md:px-8 shadow-md rounded-xlw-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Train Cancellation with Assured Flex
          </h2>

          <p className=" text-gray-700 mb-6">
            Assured Flex is one of the most amazing features of the HumSafar app that provides <span className="font-semibold">FREE CANCELLATION</span> and Reschedule on train bookings to users. So, if you are unsure of your travel plans, then no need to stress as you can still get full refunds.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Top benefits of Assured Flex?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Zero cancellation fee</li>
            <li>Refunds are initiated instantly, with no questions asked</li>
            <li>24*7 premium customer support</li>
            <li>Free Rescheduling</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            How many hours before the train departure do I need to cancel my booking to avail free cancellation?
          </h3>
          <p className="text-gray-700">
            It is advised that you cancel your booking at least four hours before the scheduled departure of the train or before the chart preparation (whichever is earlier) to get a full refund.
          </p>
        </section>


      </main>
    </>
  );
}
