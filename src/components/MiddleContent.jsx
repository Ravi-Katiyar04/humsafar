export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">IRCTC Ticket Booking on ixigo</h1>
      <p className="mb-6">
        ixigo is one of the top-rated apps for a seamless IRCTC ticket booking experience. Book general, tatkal, premium tatkal, and more tickets easily.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">IRCTC Train Running Stats</h2>
        <table className="w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Number of Live Trains Running</td>
              <td className="p-2 border">20,046</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm mt-1">Last Updated: 2025-06-28</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Types of IRCTC Tickets Booking</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>General Booking:</strong> Reschedule RAC, waitlisted, or confirmed tickets.</li>
          <li><strong>Tatkal Booking:</strong> Open one day prior at 10 AM (AC) or 11 AM (Non-AC).</li>
          <li><strong>Premium Tatkal:</strong> Dynamic pricing; non-cancellable.</li>
          <li><strong>Unreserved Ticketing System (UTS):</strong> For short-distance unreserved travel.</li>
          <li><strong>Full Tariff Rate (FTR):</strong> Book full coaches for group travel or events.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How to Book IRCTC Train Ticket</h2>
        <ol className="list-decimal ml-5 space-y-1">
          <li>Visit ixigo and choose your departure and destination.</li>
          <li>Select date and class to find available trains.</li>
          <li>Enter passenger details and IRCTC login ID.</li>
          <li>Choose payment method and confirm your booking.</li>
          <li>Get booking confirmation instantly via SMS/email.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">IRCTC Login Help</h2>
        <h3 className="font-semibold mt-2">To Create IRCTC ID</h3>
        <ol className="list-decimal ml-5 space-y-1">
          <li>Open the ixigo app</li>
          <li>Tap on “Link your IRCTC Account”</li>
          <li>Enter mobile/email → verify OTP → done</li>
        </ol>

        <h3 className="font-semibold mt-4">Forgot IRCTC ID?</h3>
        <ol className="list-decimal ml-5 space-y-1">
          <li>Tap on “Forgot IRCTC ID” in the app</li>
          <li>Enter your registered mobile or email</li>
        </ol>

        <h3 className="font-semibold mt-4">New User?</h3>
        <p>Follow the same steps as above to register your IRCTC ID.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Train Ticket Fares</h2>
        <table className="w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Min Distance</th>
              <th className="p-2 border">Base Fare</th>
              <th className="p-2 border">Reservation</th>
              <th className="p-2 border">Superfast</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border">Second Class</td><td className="p-2 border">50 km</td><td className="p-2 border">₹30</td><td className="p-2 border">₹15</td><td className="p-2 border">₹15</td></tr>
            <tr><td className="p-2 border">Sleeper</td><td className="p-2 border">200 km</td><td className="p-2 border">₹124</td><td className="p-2 border">₹20</td><td className="p-2 border">₹30</td></tr>
            <tr><td className="p-2 border">AC Chair Car</td><td className="p-2 border">150 km</td><td className="p-2 border">₹211</td><td className="p-2 border">₹40</td><td className="p-2 border">₹45</td></tr>
            <tr><td className="p-2 border">AC 3 Tier</td><td className="p-2 border">300 km</td><td className="p-2 border">₹470</td><td className="p-2 border">₹40</td><td className="p-2 border">₹45</td></tr>
            <tr><td className="p-2 border">First Class</td><td className="p-2 border">100 km</td><td className="p-2 border">₹232</td><td className="p-2 border">₹50</td><td className="p-2 border">₹45</td></tr>
            <tr><td className="p-2 border">Executive</td><td className="p-2 border">-</td><td className="p-2 border">-</td><td className="p-2 border">₹60</td><td className="p-2 border">₹75</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">IRCTC Ticket Booking Timings</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Booking: 00:20 AM – 11:45 PM</li>
          <li>Maintenance Downtime: 11:45 PM – 12:20 AM</li>
          <li>Max Tatkal PNR Passengers: 4</li>
          <li>Senior Citizen Quota: Available</li>
          <li>Tatkal Timings: 10 AM (AC), 11 AM (Non-AC)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Top Features</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Live Train Running Status</li>
          <li>Free Cancellation and Reschedule</li>
          <li>PNR Status Checker</li>
          <li>Seat Availability Status</li>
          <li>Food on Train</li>
          <li>Travel Guarantee with Refund Assurance</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Valid ID Proofs</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Aadhaar Card</li>
          <li>Voter ID</li>
          <li>Passport</li>
          <li>Driving License</li>
          <li>PAN Card</li>
          <li>Student or Government Photo ID</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Train Types</h2>
        <p>
          IRCTC ticket bookings are available for trains like Rajdhani, Shatabdi, Vande Bharat, Duronto, Tejas, Garib Rath, Antyodaya, Jan Shatabdi and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">FAQs</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Can I change my IRCTC user ID?</strong> No, it is fixed after registration.</li>
          <li><strong>How to log in?</strong> Open ixigo, enter details, proceed with payment.</li>
          <li><strong>How many tickets per month?</strong> Up to 12 if Aadhaar linked, otherwise 6.</li>
          <li><strong>Can I cancel after train departure?</strong> No, cancellation is only before chart preparation.</li>
        </ul>
      </section>
    </main>
  );
}
