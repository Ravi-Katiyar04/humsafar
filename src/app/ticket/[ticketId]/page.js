// 'use client';
// import { useParams } from 'next/navigation';
// import { useEffect, useState, useRef } from 'react';
// import axios from 'axios'
// import { format } from "date-fns";

// function formatRailwayDate(isoString) {
//   if (!isoString) return "";
//   const date = new Date(isoString);
//   return format(date, "dd-MMM-yyyy HH:mm:ss") + " HRS";
// }


// export default function TicketPage() {
//   const { ticketId } = useParams();
//   const [ticket, setTicket] = useState(null);
//   const ticketRef = useRef();

//   useEffect(() => {
//     async function fetchTicket() {
//       try {
//         const res = await axios.get(`/api/tickets/${ticketId}`);
//         console.log("Fetched ticket:", res.data);
//         if (res.status === 200) {
//           setTicket(res.data);
//         } else {
//           console.error("Failed to fetch ticket:", res);
//         }
//       } catch (error) {
//         console.error("Error fetching ticket:", error);
//       }
//     }
//     fetchTicket();
//   }, [ticketId]);

//   const handleDownload = () => {
//     window.open(`/api/tickets/${ticketId}/pdf`, "_blank");
//   };



//   if (!ticket)
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600" />
//       </div>
//     );

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
// <div ref={ticketRef} className="bg-white border rounded-lg shadow-md p-6">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-4">
//     <div className='flex gap-2 items-center'>
//       <i className="fa-solid fa-train fa-2xl text-blue-600"></i>
//       <h1 className="text-xl font-bold">HusmSafar</h1>
//     </div>
//     <div className='flex gap-2 items-center'>
//       <i className='fa-solid fa-file fa-xl'></i>
//       <h1 className="text-xl font-bold">Electronic Reservation Slip (ERS)</h1>
//     </div>

//   </div>

//   <div className="grid grid-cols-3 gap-4 text-sm text-center border-t border-b py-4 mb-4">
//     {/* Booked From */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">Booked From</p>
//       <p>{ticket.train.srcName} ({ticket.train.srcCode})</p>
//       <p>Start Date: {ticket.train.departureDate}</p>
//     </div>

//     {/* Boarding At */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">Boarding At</p>
//       <p className='font-semibold'>{ticket.boardingInfo.boardingPoint}</p>
//       <p className='font-semibold'>Departure: {ticket.boardingInfo.boardingTime} {ticket.train.departureDate}</p>
//     </div>

//     {/* To */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">To</p>
//       <p>{ticket.train.destName} ({ticket.train.destCode})</p>
//       <p>Arrival: {ticket.train.arrivalTime} {ticket.train.arrivalDate}</p>
//     </div>
//   </div>

//   <div className="grid grid-cols-3 gap-4 text-sm text-center border-t border-b py-4 mb-4">
//     {/* Booked From */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">PNR</p>
//       <p className='font-semibold text-blue-600 text-lg'>{ticket.PRN}</p>
//       <p className="font-semibold">Quota</p>
//       <p>{ticket.train.quota}</p>
//     </div>

//     {/* Boarding At */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">Train No/Name</p>
//       <p className='font-semibold text-blue-600 text-lg'>{ticket.train.number} / {ticket.train.name}</p>
//       <p className="font-semibold">Distance</p>
//       <p>{ticket.train.distance} KM</p>
//     </div>

//     {/* To */}
//     <div className="space-y-1 flex flex-col items-center">
//       <p className="font-semibold">Class</p>
//       <p className='font-semibold text-blue-600 text-lg'>{ticket.train.class}</p>
//       <p className="font-semibold">Booking Date</p>
//       <p>{formatRailwayDate(ticket.createdAt)}</p>
//     </div>
//   </div>

//   <div className='overflow-x-auto border-t border-b py-4 mb-4'>
//     <h2 className="font-semibold mb-2 underline ">Passenger Details</h2>
//     <table className="w-full text-sm mb-4">
//       <thead className="bg-gray-100 text-left">
//         <tr>
//           <th className="px-3 py-2">Sr. No.</th>
//           <th className="px-3 py-2">Name</th>
//           <th className="px-3 py-2">Age</th>
//           <th className="px-3 py-2">Gender</th>
//           <th className="px-3 py-2">Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ticket.passengers?.map((p, idx) => (
//           <tr key={idx}>
//             <td className="px-3 py-1">{idx + 1}</td>
//             <td className="px-3 py-1">{p.fullName}</td>
//             <td className="px-3 py-1">{p.age}</td>
//             <td className="px-3 py-1">{p.gender}</td>
//             <td className="px-3 py-1">{p.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>

//   <h1 className="font-semibold ">Transection ID: {ticket.payment.paymentId}</h1>
//   <p className='mb-2'>IR recovers only 57% of the ticket fare on an average</p>
//   {/* Fare */}
//   <h1 className="font-semibold mb-2 underline">Payment Details</h1>
//   <div className="grid grid-cols-2 gap-y-2 text-sm">
//     {/* Labels column */}
//     <div className="space-y-2 font-semibold">
//       <p>Ticket Fare:</p>
//       <p>IRCTC Convenience Fee:</p>
//       <p>Insurance:</p>
//       <p>GST (18%):</p>
//       <p>Total Paid:</p>
//     </div>

//     {/* Values column */}
//     <div className="space-y-2 text-blue-600">
//       <p>₹ {ticket.fare.TicketFare}</p>
//       <p>₹ {ticket.fare.IRCTconvience}</p>
//       <p>₹ {ticket.fare.insurance}</p>
//       <p>₹ {ticket.fare.GST}</p>
//       <p>₹ {ticket.fare.totalFare}</p>
//     </div>
//   </div>

// </div>

//       {/* Download Button */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleDownload}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           ⬇️ Download Ticket (PDF)
//         </button>
//       </div>
//     </div >
//   );
// }


'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { format } from "date-fns";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function formatRailwayDate(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return format(date, "dd-MMM-yyyy HH:mm:ss") + " HRS";
}

export default function TicketPage() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const ticketRef = useRef();

  useEffect(() => {
    async function fetchTicket() {
      try {
        const res = await axios.get(`/api/tickets/${ticketId}`);
        if (res.status === 200) {
          setTicket(res.data);
        } else {
          console.error("Failed to fetch ticket:", res);
        }
      } catch (error) {
        console.error("Error fetching ticket:", error);
      }
    }
    fetchTicket();
  }, [ticketId]);


  const handleDownload = async () => {
    const element = ticketRef.current;
    if (!element) return;

    // 🩹 Step 1: Replace all oklch() with safe colors before rendering
    element.querySelectorAll("*").forEach(el => {
      const style = window.getComputedStyle(el);

      if (style.color.includes("oklch")) {
        el.style.color = "#2563eb"; // Tailwind blue-600 fallback
      }
      if (style.backgroundColor.includes("oklch")) {
        el.style.backgroundColor = "#ffffff"; // fallback white
      }
      if (style.borderColor.includes("oklch")) {
        el.style.borderColor = "#000000"; // fallback black
      }
    });

    // 🩹 Step 2: Render with html2canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // ensures clean background
    });

    const imgData = canvas.toDataURL("image/png");

    // 🩹 Step 3: Generate PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`ticket_${ticketId}.pdf`);
  };


  if (!ticket)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600" />
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Ticket Content */}
      <div ref={ticketRef} className="bg-white border rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className='flex gap-2 items-center'>
            <i className="fa-solid fa-train fa-2xl text-blue-600"></i>
            <h1 className="text-xl font-bold">HusmSafar</h1>
          </div>
          <div className='flex gap-2 items-center'>
            <i className='fa-solid fa-file fa-xl'></i>
            <h1 className="text-xl font-bold">Electronic Reservation Slip (ERS)</h1>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-center border-t border-b py-4 mb-4">
          {/* Booked From */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">Booked From</p>
            <p>{ticket.train.srcName} ({ticket.train.srcCode})</p>
            <p>Start Date: {ticket.train.departureDate}</p>
          </div>

          {/* Boarding At */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">Boarding At</p>
            <p className='font-semibold'>{ticket.boardingInfo.boardingPoint}</p>
            <p className='font-semibold'>Departure: {ticket.boardingInfo.boardingTime} {ticket.train.departureDate}</p>
          </div>

          {/* To */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">To</p>
            <p>{ticket.train.destName} ({ticket.train.destCode})</p>
            <p>Arrival: {ticket.train.arrivalTime} {ticket.train.arrivalDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-center border-t border-b py-4 mb-4">
          {/* Booked From */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">PNR</p>
            <p className='font-semibold text-blue-600 text-lg'>{ticket.PRN}</p>
            <p className="font-semibold">Quota</p>
            <p>{ticket.train.quota}</p>
          </div>

          {/* Boarding At */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">Train No/Name</p>
            <p className='font-semibold text-blue-600 text-lg'>{ticket.train.number} / {ticket.train.name}</p>
            <p className="font-semibold">Distance</p>
            <p>{ticket.train.distance} KM</p>
          </div>

          {/* To */}
          <div className="space-y-1 flex flex-col items-center">
            <p className="font-semibold">Class</p>
            <p className='font-semibold text-blue-600 text-lg'>{ticket.train.class}</p>
            <p className="font-semibold">Booking Date</p>
            <p>{formatRailwayDate(ticket.createdAt)}</p>
          </div>
        </div>

        <div className='overflow-x-auto border-t border-b py-4 mb-4'>
          <h2 className="font-semibold mb-2 underline ">Passenger Details</h2>
          <table className="w-full text-sm mb-4">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-3 py-2">Sr. No.</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Age</th>
                <th className="px-3 py-2">Gender</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {ticket.passengers?.map((p, idx) => (
                <tr key={idx}>
                  <td className="px-3 py-1">{idx + 1}</td>
                  <td className="px-3 py-1">{p.fullName}</td>
                  <td className="px-3 py-1">{p.age}</td>
                  <td className="px-3 py-1">{p.gender}</td>
                  <td className="px-3 py-1">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 className="font-semibold ">Transection ID: {ticket.payment.paymentId}</h1>
        <p className='mb-2'>IR recovers only 57% of the ticket fare on an average</p>
        {/* Fare */}
        <h1 className="font-semibold mb-2 underline">Payment Details</h1>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          {/* Labels column */}
          <div className="space-y-2 font-semibold">
            <p>Ticket Fare:</p>
            <p>IRCTC Convenience Fee:</p>
            <p>Insurance:</p>
            <p>GST (18%):</p>
            <p>Total Paid:</p>
          </div>

          {/* Values column */}
          <div className="space-y-2 text-blue-600">
            <p>₹ {ticket.fare.TicketFare}</p>
            <p>₹ {ticket.fare.IRCTconvience}</p>
            <p>₹ {ticket.fare.insurance}</p>
            <p>₹ {ticket.fare.GST}</p>
            <p>₹ {ticket.fare.totalFare}</p>
          </div>
        </div>

      </div>

      {/* Download Button (not included in PDF) */}
      <div className="text-center mt-6">
        <button
          id="downloadBtn"
          onClick={handleDownload}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ⬇️ Download Ticket (PDF)
        </button>
      </div>
    </div>
  );
}

