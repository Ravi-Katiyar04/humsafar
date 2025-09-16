import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { ticketId } = params;

  try {
    // Launch Puppeteer in serverless-friendly mode
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Render your styled ticket page directly
    await page.goto(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/${ticketId}`, {
      waitUntil: "networkidle0",
    });

    // Generate PDF with proper margins
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true, // ensures Tailwind colors and borders are included
      margin: { top: "20px", bottom: "20px", left: "15px", right: "15px" },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="ticket_${ticketId}.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF generation failed:", err);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
