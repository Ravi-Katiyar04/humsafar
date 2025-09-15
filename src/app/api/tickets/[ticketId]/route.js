// /api/tickets/[ticketId]/route.js
import connectDB from "@/lib/db";
import Ticket from "@/models/Ticket";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { ticketId } =await params;
    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return new Response(
        JSON.stringify({ error: "Ticket not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(ticket), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
