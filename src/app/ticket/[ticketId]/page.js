'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TicketPage() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    async function fetchTicket() {
      const res = await fetch(`/api/tickets/${ticketId}`);
      const data = await res.json();
      setTicket(data);
    }
    fetchTicket();
  }, [ticketId]);

  if (!ticket) return <p>Loading ticket...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">🎟️ Ticket Confirmation</h1>
      <p><strong>PNR:</strong> {ticket.pnr}</p>
      <p><strong>Name:</strong> {ticket.passengerName}</p>
      <p><strong>From:</strong> {ticket.from}</p>
      <p><strong>To:</strong> {ticket.to}</p>
      <p><strong>Date:</strong> {ticket.date}</p>
      <p><strong>Class:</strong> {ticket.class}</p>
      <p><strong>Quota:</strong> {ticket.quota}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Amount Paid:</strong> ₹{ticket.amount}</p>
    </div>
  );
}
