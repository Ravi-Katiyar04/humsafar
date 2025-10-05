"use client";
import { useEffect, useState } from "react";
import FareSummary from "@/components/FareSummary";
import JourneyCard from "@/components/JourneyCard";
import SafeBadges from "@/components/SafeBadges";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PaymentPage() {
  const [bookingData, setBookingData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/booking/get");
        if (res.data.ok) {
          setBookingData(res.data.bookingData)
        }
        else {
          alert(res.data.error || "No booking found");
          router.push("/");
        }
      } catch (err) {
        console.error("Failed to fetch booking:", err);
      }
    })();

  }, []);

  // function PayButton({ label, onClick, payAmount }) {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     setLoading(true);

//     // Load Razorpay script
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
//     if (!res) {
//       alert("Failed to load Razorpay SDK.");
//       return;
//     }

//     // Create order from backend
//     const orderRes = await fetch("/api/payment/order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: payAmount }),
//     });
//     const { orderId, amount } = await orderRes.json();

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC for frontend
//       amount,
//       currency: "INR",
//       name: "Railway Booking",
//       description: "Train Ticket Payment",
//       order_id: orderId,
//       // handler: async function (response) {
//       //   const verifyRes = await fetch("/api/payment/verify", {
//       //     method: "POST",
//       //     headers: { "Content-Type": "application/json" },
//       //     body: JSON.stringify(response),
//       //   });
//       //   const result = await verifyRes.json();
//       //   if (result.success) {
//       //     alert("✅ Payment Successful!");
//       //     router.push('/payment/success');
//       //   } else {
//       //     alert("❌ Payment Verification Failed!");
//       //   }
//       // },
//       handler: async function (response) {
//         const verifyRes = await fetch("/api/payment/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(response),
//         });
//         const result = await verifyRes.json();
//         console.log("Verification Result:", result);
//         if (result.success) {
//           // alert("✅ Payment Successful!");
//           toast.success('Payment Successful!');
//           router.push(`/ticket/${result.ticketId}`); // ✅ Redirect to ticket page
//         } else {
//           // alert("❌ Payment Verification Failed!");
//           toast.error('Payment Verification Failed!');
//         }
//       },
//       prefill: {
//         name: "Ravi Katiyar",
//         email: "ravi@example.com",
//         contact: "9876543210",
//       },
//       theme: { color: "#3399cc" },
//     };



//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//     setLoading(false);
//   };

  const handlePay = async () => {
    // Create order
    const orderRes = await fetch("/api/payment/order", { method: "POST" });
    const orderData = await orderRes.json();
    if (!orderRes.ok) {
      alert(orderData.error || "Unable to create order");
      return;
    }

    const order = orderData.order;
    // Load Razorpay script if not loaded
    if (!window.Razorpay) {
      await new Promise((resolve) => {
        const s = document.createElement("script");
        s.src = "https://checkout.razorpay.com/v1/checkout.js";
        s.onload = resolve;
        document.body.appendChild(s);
      });
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ensure this is defined
      amount: order.amount,
      currency: order.currency,
      name: "Humsafar",
      description: "Train ticket",
      order_id: order.id,
      handler: async function (response) {
        // response contains razorpay_payment_id, razorpay_order_id, razorpay_signature
        const verifyRes = await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const verifyData = await verifyRes.json();
        if (verifyRes.ok) {
          // success
          router.push(`/ticket/${verifyData.ticketId}`);
        } else {
          alert(verifyData.error || "Payment verification failed");
        }
      },
      prefill: {
        name: bookingData?.passengers[0].fullName || "Ravi Katiyar",
        email: bookingData?.contact.mobile || "ravi@example.com",
        contact:bookingData?.contact.email || "9876543210",
      },
      theme: { color: "#1976d2" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!bookingData) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600" />
    </div>
  );
  return (
      <div className="min-h-screen bg-gray-200  text-neutral-800">
      {/* Top bar (optional) */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-train text-xl" />
            <span className="font-semibold">Humsafar Booking</span>
          </div>
          <div className="ml-auto text-sm text-green-700 flex items-center gap-2">
            <i className="fa-solid fa-shield-halved" />
            <span>Protected with Assured</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Left column: Fare summary & journey details */}
        <section className="space-y-6 w-full lg:w-3/5 lg:sticky lg:top-20 self-start">
          <FareSummary amount={bookingData.amount} />
          <JourneyCard bookingData={bookingData} />
        </section>

        {/* Right column: Payment */}
        <section className="w-full lg:w-2/5">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 shadow-xl p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Complete Your Booking</h2>
            <p className="text-gray-600 mb-8 text-center">
              Secure payment gateway – your information is safe with us.
            </p>
            <button
              onClick={handlePay}
              className="w-full max-w-sm px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Pay ₹{bookingData.amount}
            </button>
            <div className="my-4"><SafeBadges /></div>
          </div>
        </section>
      </main>
    </div>
  );
}

