'use client';

import Booking from '@/components/Booking';
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Services from '@/components/Services';

export default function HomePage() {
  

  return (
    <>
      <Booking />
      <Services />
      <main className={`${inter.className} p-4 max-w-11/12 mx-auto text-gray-600 font-serif font-semibold`}>
      <h1 className="text-xl font-bold mb-4 text-black">IRCTC Ticket Booking on HumSafar</h1>
      <p className="mb-6 text-[14px]">
        HumSafar is one of the top-rated apps for a seamless IRCTC ticket booking experience. You can book your IRCTC train tickets quickly with the HumSafar Trains app or website using IRCTC login credentials.
        As an IRCTC authorised partner, HumSafar offers ₹0 PG fee on UPI payments, exclusive offers on debit/credit cards, and Tatkal ticket booking on the app and the website.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Why Choose IRCTC Train Ticket Booking on HumSafar?</h2>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Easy and hassle-free booking experience.</li>
          <li>₹0 PG fee on UPI payments.</li>
          <li>Exclusive offers on debit/credit cards.</li>
          <li>Instant booking confirmation via SMS/email.</li>
          <li>Access to all types of IRCTC tickets including Tatkal and Premium Tatkal.</li>
          <li>Live train status, PNR status, and seat availability checks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Types of IRCTC Tickets Booking</h2>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li><strong className="text-black text-[16px] block">General Booking</strong> General ticket booking can be done easily through the ixigo website and app. It can also be booked at the Passenger Reservation System (PRS) counters. One of the key benefits of general booking is the flexibility to change your travel dates. You can reschedule waitlisted, RAC, or confirmed tickets to an earlier or later date.</li>
          <li><strong className="text-black text-[16px] block">Tatkal Booking</strong> <Link href="/tatkal-reservation" className="text-blue-600"> Tatkal ticket booking</Link>  facility enables a passenger to book a ticket one day in advance of the actual date of journey. It can be booked online at ixigo easily. Tatkal booking opens at 10 AM for AC Classes and 11 AM for Non-AC Classes one day in advance, excluding the journey date.</li>
          <li><strong className="text-black text-[16px] block">Premium Tatkal</strong>Premium Tatkal works on dynamic pricing, i.e. passengers will be charged a higher price in case of increased demand and a lower price if the demand is less. Confirmed tickets are only booked under premium tatkal quota and could not be cancelled once booked.</li>
          <li><strong className="text-black text-[16px] block">Unreserved Ticketing System (UTS)</strong> The &quot;Unreserved Ticketing System on Mobile&quot; (UTS) is an application that allows passengers to book an unreserved, paperless ticket for journeys between any two stations. This app eliminates the need for passengers to visit a ticket counter to purchase an unreserved ticket. Once a ticket is booked, passengers can collect their unreserved paperless ticket from an automatic ticket vending machine located throughout the country.</li>
          <li><strong className="text-black text-[16px] block">Full Tariff Rate (FTR)</strong>If you need to book an entire coach or train for events like tours, weddings, and parties, you can use our platform to receive discounts on Full Tariff Rate (FTR) reservations. You can register in advance, with a maximum lead time of 6 months and a minimum of 30 days. A security deposit of INR 50,000 is required for each coach booked. If you are booking a special train, you must reserve at least 18 coaches. For a smooth booking experience at an affordable price, be sure to make your reservation with us.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">How to Book IRCTC Train Ticket & Use IRCTC Login on ixigo</h2>
        <h6 className=" mb-2">Steps to Book Train Tickets Online with ixigo!</h6>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li><strong className="text-black text-[16px] block">Visit ixigo and Choose Your Destination</strong> Open the ixigo website or app, select your source and destination, and choose your journey date.</li>
          <li><strong className="text-black text-[16px] block">Select Class and Find Available Trains</strong> Choose your preferred class such as First Class, Second AC, Third AC, or Sleeper. Select the train that best suits your journey from the list of available trains.</li>
          <li><strong className="text-black text-[16px] block">Add Passenger Details and IRCTC User ID</strong>Fill in the passenger details and choose your berth preferences. Log in using your IRCTC user ID and password. Create a new IRCTC user ID, if you don&#39;t have one.</li>
          <li><strong className="text-black text-[16px] block">Choose a Payment Method and Complete Booking</strong> You can choose from several payment options and proceed to complete your train ticket booking.</li>
          <li><strong className="text-black text-[16px] block">Get a Confirmation Message</strong>You will then receive a confirmation on your registered email ID and SMS on mobile number.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Easy & Fast IRCTC Login</h2>
        <p className="mb-2 text-[14px]">With ixigo, you can register on IRCTC, navigate the next-generation IRCTC login process, reset your IRCTC password and more. You can also recover a deactivated IRCTC ID, update profile details, and easily manage your bookings.</p>
        <h4 className=" font-semibold mb-2 text-black">Create Your IRCTC Login ID and Password</h4>
        <p className=" mb-2 text-[14px]">Having an IRCTC ID and password is the first step towards your train ticket booking process. Create IRCTC login ID and password by following the below steps:</p>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Open the ixigo Trains app.</li>
          <li>Tap on the profile icon at the bottom right of the page.</li>
          <li>Now, tap on &#39;Link your IRCTC Account&#39;.</li>
          <li>You will see &#39;IRCTC username&#39;. Tap on it.</li>
          <li>A pop-up will appear. Click on &#39;Register&#39; located at the bottom right.</li>
          <li>Now, fill up the required details and proceed to get an OTP.</li>
          <li>Please enter the OTP and verify your email ID and mobile number.</li>
          <li>Your IRCTC account will be successfully created.</li>
        </ul>

        <h4 className=" font-semibold my-2 text-black">Recover Your IRCTC Login ID</h4>
        <p className=" mb-2 text-[14px]">You can easily recover your IRCTC login ID by following the below steps:</p>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Open the ixigo app.</li>
          <li>Tap on the profile icon at the bottom right of the page.</li>
          <li>Now, go to &#39;Link your IRCTC Account&#39;.</li>
          <li>Then, click on &#39;Forgot your IRCTC User ID&#39;.</li>
          <li>Enter your IRCTC registered email ID or mobile number and proceed.</li>
        </ul>

        <h4 className=" font-semibold my-2 text-black">Register as a New User on IRCTC</h4>
        <p className=" mb-2 text-[14px]">Here are the steps to register as a new user on IRCTC:</p>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Open the ixigo trains app.</li>
          <li>Tap on the profile icon at the bottom right of the page.</li>
          <li>Now, go to &#39;Link your IRCTC Account&#39;.</li>
          <li>Then, click on &#39;Register on IRCTC&#39;.</li>
          <li>Enter your details and proceed.</li>
        </ul>

        <p className=" my-6 text-black font-semibold text-[14px]">Check <Link href="/cancellation-charges" className="text-blue-600"> IRCTC cancellation charges and refund rules</Link>  here.</p>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Train Ticket Fares</h2>
        <table className="w-full border border-gray-400 text-[14px] text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-400">Class</th>
              <th className="p-2 border border-gray-400">Min Distance</th>
              <th className="p-2 border border-gray-400">Base Fare</th>
              <th className="p-2 border border-gray-400">Reservation</th>
              <th className="p-2 border border-gray-400">Superfast</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-400">Second Class</td>
              <td className="p-2 border border-gray-400">50 km</td>
              <td className="p-2 border border-gray-400">₹30</td>
              <td className="p-2 border border-gray-400">₹15</td>
              <td className="p-2 border border-gray-400">₹15</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">Sleeper Class</td>
              <td className="p-2 border border-gray-400">200 km</td>
              <td className="p-2 border border-gray-400">₹124</td>
              <td className="p-2 border border-gray-400">₹20</td>
              <td className="p-2 border border-gray-400">₹30</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">AC Chair Class</td>
              <td className="p-2 border border-gray-400">150 km</td>
              <td className="p-2 border border-gray-400">₹211</td>
              <td className="p-2 border border-gray-400">₹40</td>
              <td className="p-2 border border-gray-400">₹45</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">AC 3 Tier</td>
              <td className="p-2 border border-gray-400">300 km</td>
              <td className="p-2 border border-gray-400">₹470</td>
              <td className="p-2 border border-gray-400">₹40</td>
              <td className="p-2 border border-gray-400">₹45</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">First Class</td>
              <td className="p-2 border border-gray-400">100 km</td>
              <td className="p-2 border border-gray-400">₹232</td>
              <td className="p-2 border border-gray-400">₹50</td>
              <td className="p-2 border border-gray-400">₹45</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">Executive Class</td>
              <td className="p-2 border border-gray-400">-</td>
              <td className="p-2 border border-gray-400">-</td>
              <td className="p-2 border border-gray-400">₹60</td>
              <td className="p-2 border border-gray-400">₹75</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-black">IRCTC Train Ticket Booking Timings</h2>
        <table className="w-full border border-gray-300 text-[14px] text-left">
          <tbody>
            <tr><td className="p-2 border border-gray-300">IRCTC Train Ticket Booking Timings</td><td className="p-2 border border-gray-300">	00:20 AM to 11:45 PM</td></tr>

            <tr><td className="p-2 border border-gray-300">IRCTC website&#39;s shutdown timings for maintenance</td><td className="p-2 border border-gray-300">	11:45 PM to 12:20 AM</td></tr>

            <tr><td className="p-2 border border-gray-300">Tickets for how many passengers per PNR can be booked for IRCTC Tatkal e-tickets (including children)?</td><td className="p-2 border border-gray-300">4 Passengers (max.)</td></tr>

            <tr><td className="p-2 border border-gray-300">Senior Citizen Quota in IRCTC</td><td className="p-2 border border-gray-300">Yes</td></tr>

            <tr><td className="p-2 border border-gray-300">Senior citizen concession in IRCTC Tatkal Quota</td><td className="p-2 border border-gray-300">Not Allowed</td></tr>

            <tr><td className="p-2 border border-gray-300">IRCTC tatkal booking timings for a Non-AC berth</td><td className="p-2 border border-gray-300">	11:00 to 11:30 AM</td></tr>

            <tr><td className="p-2 border border-gray-300">IRCTC Tatkal Booking Timings For AC berth</td><td className="p-2 border border-gray-300">	10:00 to 10:30 AM</td></tr>

            <tr><td className="p-2 border border-gray-300">Maximum train ticket booking allowed per user in a month for Indian Railways reservation</td><td className="p-2 border border-gray-300">24 for users with an Aadhaar number linked and 12 for others.</td></tr>

            <tr><td className="p-2 border border-gray-300">Maximum train tickets that can be booked from one user ID in a day</td><td className="p-2 border border-gray-300">Maximum of two tickets can be booked from 1 user ID in a day.</td></tr>

          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Top Features You Must Know!</h2>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li><strong className="text-black text-[16px] block">Live Train Running Status</strong>
            Check your Train Running Status on ixigo by just adding the train number and get your train details through <Link href="/running-status" className="text-blue-600">Live Running Train Status.</Link>  
          </li>
          <li><strong className="text-black text-[16px] block">Free Cancellation & Booking Modification</strong>Get full refunds on your train ticket cancellations by choosing Assured Flex. You can also modify your booking.</li>
          <li><strong className="text-black text-[16px] block">Check PNR Status</strong> <Link href="/pnr-status-enquiry" className="text-blue-600">PNR Status</Link> allows you to check the current status of your booked ticket, letting you know if it&#39;s confirmed or not. ixigo helps you to find out the Indian Railways PNR Status Prediction with high accuracy of booked train ticket through its app or its website.</li>

          <li><strong className="text-black text-[16px] block">Seat Availability and Enquiry</strong> Use our <Link href="/seat-availability" className="text-blue-600">train seat availability</Link>    feature to find out the seat or berth availability on your train and check the lowest train ticket price. You can make online IRCTC train ticket reservations according to your preferred options - date of travel, train halt in minutes and IRCTC train route.</li>

          <li><strong className="text-black text-[16px] block">Order Food on Train</strong>Get fresh &amp; delicious meals delivered right to your seat with our <Link href="https://www.ecatering.irctc.co.in" className="text-blue-600">&#39;Order Food on Train&#39;</Link>  feature.</li>

          <li><strong className="text-black text-[16px] block">Order Food on Train</strong> <Link href="/travel-guarantee" className="text-blue-600">&#39;Travel Guarantee&#39;</Link>  by ixigo is a unique feature that ensures either a confirmed seat or a refund* if your waitlisted booking is not confirmed during chart preparation. The refund amount varies based on the selected travel mode (3X for flights, 3X for buses, or 2X for trains).

            <ul className="list-disc ml-5 space-y-1 text-[14px]">
              <p className="my-2" >The benefits are as follows:</p>

              <li>If your waitlisted ticket is not confirmed, you will either receive a confirmed ticket or a refund*.</li>
              <li>The ticket fare will be refunded to your original payment mode, while the remaining amount will be issued as a Travel Guarantee coupon.</li>
              <li>The Travel Guarantee coupon can be redeemed for your next booking across trains, flights, or buses.</li>
              <li>*T&C Apply: Refund depends on the travel mode (3X for flights, 3X for buses, and 2X for trains) in case of a waitlisted ticket.</li>

            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">IRCTC Valid ID Proof for Train Travel</h2>
        <p className="mb-2 text-[14px]">Passengers must carry a valid ID proof while travelling by train. The following documents are accepted as valid ID proof:</p>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Aadhaar Card</li>
          <li>Voter ID</li>
          <li>Passport</li>
          <li>Driving License</li>
          <li>PAN Card</li>
          <li>Photo ID issued by Central/State Government</li>
          <li>Student ID with photograph</li>
          <li>Nationalized Bank Passbook with photograph</li>
          <li>Credit Card with laminated photograph</li>
          <li>Any other photo ID card with a serial number</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Train Types</h2>
        <p className="mb-2 text-[14px]">
          IRCTC ticket bookings are available for trains like Rajdhani, Shatabdi, Vande Bharat, Duronto, Tejas, Garib Rath, Antyodaya, Jan Shatabdi and more.
        </p>
      </section>

      <section className="mb-8">

      </section>
    </main>
    </>
  );
}

