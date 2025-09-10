// "use client";
// import { useState } from "react";

// export default function RazorpayCheckout() {
//   const [loading, setLoading] = useState(false);

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
//       body: JSON.stringify({ amount: 500 }), // ₹500 ticket
//     });
//     const { orderId, amount } = await orderRes.json();

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC for frontend
//       amount,
//       currency: "INR",
//       name: "Railway Booking",
//       description: "Train Ticket Payment",
//       order_id: orderId,
//       handler: async function (response) {
//         const verifyRes = await fetch("/api/payment/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(response),
//         });
//         const result = await verifyRes.json();
//         if (result.success) {
//           alert("✅ Payment Successful!");
//         } else {
//           alert("❌ Payment Verification Failed!");
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

//   return (
//     <button
//       onClick={handlePayment}
//       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       disabled={loading}
//     >
//       {loading ? "Processing..." : "Pay ₹500"}
//     </button>
//   );
// }


"use client";
import { useState } from "react";

export default function RazorpayCheckout({ amount }) {
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePay = async () => {
    setLoading(true);
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay");
      return;
    }

    // Create order via API
    const res = await fetch("/api/payment/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    if (!data.orderId) {
      alert("Order creation failed");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "Humsafar Booking",
      description: "Train Ticket Payment",
      order_id: data.orderId,
      handler: (response) => {
        alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Ravi Katiyar",
        email: "ravi@example.com",
        contact: "9876543210",
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePay}
      disabled={loading}
      className="w-full rounded-xl bg-green-600 px-5 py-3 text-white shadow hover:bg-green-700"
    >
      {loading ? "Processing..." : `Pay ₹${amount} via Razorpay`}
    </button>
  );
}
