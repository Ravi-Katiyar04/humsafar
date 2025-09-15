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
      name: "Your App Name",
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











// "use client"
// import React, { useMemo, useState, useEffect } from "react";
// import FareSummary from "@/components/FareSummary";
// import JourneyCard from "@/components/JourneyCard";
// import MethodButton from "@/components/MethodButton";
// // import RazorpayCheckout from "@/components/RazorpayCheckout";
// import SafeBadges from "@/components/SafeBadges";
// import { useRouter } from "next/navigation"
// import {toast} from 'react-toastify';
// import axios from "axios";



// const banks = [
//   { id: "sbi", name: "State Bank of India" },
//   { id: "icici", name: "ICICI Bank" },
//   { id: "hdfc", name: "HDFC Bank" },
//   { id: "axis", name: "Axis Bank" },
//   { id: "kotak", name: "Kotak Mahindra Bank" },
// ];

// const walletOptions = [
//   { id: "amazon", name: "Amazon Pay" },
//   { id: "payzapp", name: "PayZapp" },
// ];

// const MethodKey = {
//   QR: "QR",
//   UPI: "UPI",
//   CARD: "CARD",
//   PAYLATER: "PAYLATER",
//   EMI: "EMI",
//   NETBANKING: "NETBANKING",
//   WALLETS: "WALLETS",
// };

// export default function PaymentPage() {
//    const router = useRouter();
//   const [bookingData, setBookingData] = useState(null);
//   const [method, setMethod] = useState(MethodKey.UPI);
//   const [upiId, setUpiId] = useState("");
//   const [selectedBank, setSelectedBank] = useState(banks[0].id);
//   const [wallet, setWallet] = useState(walletOptions[0].id);

//   const baseAmount = 793; // ₹
//   const upiAmount = 775; // ₹ via UPI

//   const payAmount = useMemo(() => (method === MethodKey.UPI ? upiAmount : baseAmount), [method]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get("/api/booking/get");
//         if (res.data.ok) {
//           setBookingData(res.data.bookingData)
//         }
//         else {
//           alert(res.data.error || "No booking found");
//           router.push("/");
//         }
//       } catch (err) {
//         console.error("Failed to fetch booking:", err);
//       }
//     })();

//   }, []);

//   if (!bookingData) return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600" />
//     </div>
//   );

  

//   return (
    // <div className="min-h-screen bg-gray-200  text-neutral-800">
    //   {/* Top bar (optional) */}
    //   <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
    //     <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
    //       <div className="flex items-center gap-2">
    //         <i className="fa-solid fa-train text-xl" />
    //         <span className="font-semibold">Humsafar Booking</span>
    //       </div>
    //       <div className="ml-auto text-sm text-green-700 flex items-center gap-2">
    //         <i className="fa-solid fa-shield-halved" />
    //         <span>Protected with Assured</span>
    //       </div>
    //     </div>
    //   </header>

    //   <main className="mx-auto max-w-7xl flex gap-4 px-4 py-6 sm:px-6 lg:px-8">
    //     {/* Left column: Fare summary & journey details */}
    //     <section className="space-y-4 w-2/5 lg:sticky lg:top-20 self-start">
    //       <FareSummary amount={bookingData.amount} />
    //       <JourneyCard bookingData={bookingData} />
    //       <SafeBadges />
    //     </section>

//         {/* Right column: Payment methods */}
        // <section className="w-3/5">
        //   <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

        //     <div className="flex ">

        //       <div className="bg-gray-100 w-2/5">
        //         <nav className="flex flex-col">

        //           <MethodButton
        //             icon="fa-brands fa-cc-apple-pay fa-rotate-90"
        //             label="Recommended"
        //             sub="Most popular payment method"
        //             active={method === MethodKey.QR}
        //             onClick={() => setMethod(MethodKey.QR)}
        //           />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-brands fa-cc-apple-pay fa-rotate-90"
//                     label="Pay via any UPI app"
//                     sub="Scan and pay with UPI"
//                     badge="No PG Fee"
//                     active={method === MethodKey.UPI}
//                     onClick={() => setMethod(MethodKey.UPI)}
//                   />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-regular fa-credit-card"
//                     label="Credit/Debit/ATM Card"
//                     sub="VISA, Mastercard, Amex, RuPay & more"
//                     active={method === MethodKey.CARD}
//                     onClick={() => setMethod(MethodKey.CARD)}
//                   />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-solid fa-bag-shopping"
//                     label="Pay Later & Easy EMI"
//                     sub="Buy now and Pay later options"
//                     active={method === MethodKey.PAYLATER}
//                     onClick={() => setMethod(MethodKey.PAYLATER)}
//                   />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-solid fa-chart-line"
//                     label="EMI"
//                     sub="Credit & Debit Card EMI options"
//                     active={method === MethodKey.EMI}
//                     onClick={() => setMethod(MethodKey.EMI)}
//                   />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-solid fa-globe"
//                     label="Net Banking"
//                     sub="Select from list of banks"
//                     active={method === MethodKey.NETBANKING}
//                     onClick={() => setMethod(MethodKey.NETBANKING)}
//                   />

//                   <hr className=" border-gray-400" />

//                   <MethodButton
//                     icon="fa-regular fa-wallet"
//                     label="Wallets"
//                     sub="Amazonpay & PayZapp"
//                     badge="New"
//                     active={method === MethodKey.WALLETS}
//                     onClick={() => setMethod(MethodKey.WALLETS)}
//                   />
//                 </nav>
//               </div>


//               <div className="p-4 md:p-6">
//                 {method === MethodKey.QR && (
//                   <QRBlock payAmount={bookingData.amount} upiId={upiId} setUpiId={setUpiId} />
//                 )}
//                 {method === MethodKey.UPI && <UPIBlock payAmount={bookingData.amount} upiId={upiId} setUpiId={setUpiId} />}
//                 {method === MethodKey.CARD && <CardBlock payAmount={bookingData.amount} />}
//                 {method === MethodKey.NETBANKING && (
//                   <NetBankingBlock
//                     banks={banks}
//                     selectedBank={selectedBank}
//                     setSelectedBank={setSelectedBank}
//                     payAmount={bookingData.amount}
//                   />
//                 )}
//                 {method === MethodKey.WALLETS && (
//                   <WalletBlock wallet={wallet} setWallet={setWallet} payAmount={bookingData.amount} />
//                 )}

//                 {method === MethodKey.PAYLATER && (
//                   <InfoBlock
//                     title="Pay Later & Easy EMI"
//                     lines={["Check eligibility with your provider during checkout.", "No-cost EMI may vary by bank offers."]}
//                     ctaLabel={`Continue • ₹${bookingData.amount}`}
//                   />
//                 )}

//                 {method === MethodKey.EMI && (
//                   <InfoBlock
//                     title="EMI Options"
//                     lines={["Choose tenure and interest rate on the next screen.", "EMI available on select cards only."]}
//                     ctaLabel={`Proceed • ₹${bookingData.amount}`}
//                   />
//                 )}

//               </div>
//             </div>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }


// function Pill({ children }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
//       <i className="fa-solid fa-circle-check" /> {children}
//     </span>
//   );
// }

// // function PayButton({ label, onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
// //     >
// //       {label}
// //     </button>
// //   );
// // }
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

//   return (
//     <button
//       onClick={handlePayment}
//       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       disabled={loading}
//     >
//       {loading ? "Processing..." : label}
//     </button>
//   );

// }

// // export default function RazorpayCheckout() {
// //   const [loading, setLoading] = useState(false);

// //   const loadScript = (src) => {
// //     return new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = src;
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });
// //   };

// //   const handlePayment = async () => {
// //     setLoading(true);

// //     // Load Razorpay script
// //     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
// //     if (!res) {
// //       alert("Failed to load Razorpay SDK.");
// //       return;
// //     }

// //     // Create order from backend
// //     const orderRes = await fetch("/api/payment/order", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ amount: 500 }), // ₹500 ticket
// //     });
// //     const { orderId, amount } = await orderRes.json();

// //     const options = {
// //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC for frontend
// //       amount,
// //       currency: "INR",
// //       name: "Railway Booking",
// //       description: "Train Ticket Payment",
// //       order_id: orderId,
// //       handler: async function (response) {
// //         const verifyRes = await fetch("/api/payment/verify", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(response),
// //         });
// //         const result = await verifyRes.json();
// //         if (result.success) {
// //           alert("✅ Payment Successful!");
// //         } else {
// //           alert("❌ Payment Verification Failed!");
// //         }
// //       },
// //       prefill: {
// //         name: "Ravi Katiyar",
// //         email: "ravi@example.com",
// //         contact: "9876543210",
// //       },
// //       theme: { color: "#3399cc" },
// //     };

// //     const paymentObject = new window.Razorpay(options);
// //     paymentObject.open();
// //     setLoading(false);
// //   };

// //   return (
// //     <button
// //       onClick={handlePayment}
// //       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //       disabled={loading}
// //     >
// //       {loading ? "Processing..." : "Pay ₹500"}
// //     </button>
// //   );
// // }

// function UPIBlock({ payAmount, upiId, setUpiId }) {
//   return (
//     <div className="space-y-6">

//       <div className="relative mt-2">
//         <label className="mb-2 block text-sm font-semibold">Enter UPI ID Manually</label>
//         <div className="flex gap-3">
//           <input
//             value={upiId}
//             onChange={(e) => setUpiId(e.target.value)}
//             placeholder="yourname@bank"
//             className="w-full rounded-xl border px-4 py-3 outline-none focus:ring focus:ring-neutral-200"
//           />
//           <button
//             className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-orange-600"
//             onClick={() => alert(`Initiate UPI Collect for ${upiId || "<upi-id>"}`)}
//           >
//             Pay ₹{payAmount}
//           </button>
//         </div>
//       </div>

//       <Pill>Pay only ₹{payAmount} via UPI</Pill>
//     </div>
//   );
// }

// function QRBlock({ payAmount, upiId, setUpiId }) {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-4">
//         <i className="fa-solid fa-qrcode text-3xl" />
//         <div className="text-sm">
//           <div className="font-semibold">Scan & Pay with UPI</div>
//           <ol className="mt-1 list-decimal pl-4 text-neutral-600">
//             <li>Open any UPI or banking app on your phone</li>
//             <li>Scan the QR code to pay</li>
//           </ol>
//         </div>
//         <div className="ml-auto">
//           <button className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-neutral-100">
//             Generate QR
//           </button>
//         </div>
//       </div>

//       <Pill>Pay only ₹{payAmount} via UPI</Pill>

//     </div>
//   );
// }

// function CardBlock({ payAmount }) {
//   return (
//     <div className="space-y-4">
//       <div className="text-lg font-semibold">Add New Card</div>
//       <div className="grid gap-4 sm:max-w-lg">
//         <input className="rounded-xl border px-4 py-3" placeholder="Card Number" />
//         <div className="grid grid-cols-2 gap-4">
//           <input className="rounded-xl border px-4 py-3" placeholder="Exp. Date (MM/YY)" />
//           <input className="rounded-xl border px-4 py-3" placeholder="CVV" />
//         </div>
//         <div className="flex items-center gap-2 text-sm text-emerald-700">
//           <i className="fa-solid fa-circle-check" /> No PG charge with AU Bank, RBL Bank Credit card
//         </div>
//         <label className="flex items-center gap-2 text-sm">
//           <input type="checkbox" className="h-4 w-4 rounded border" defaultChecked /> Save my card for future payments.
//         </label>
//         <PayButton payAmount={payAmount} label={`Securely Pay ₹${payAmount}`} onClick={() => alert("Card payment")} />
//       </div>
//     </div>
//   );
// }

// function NetBankingBlock({ banks, selectedBank, setSelectedBank, payAmount }) {
//   return (
//     <div className="space-y-4">
//       <div className="grid gap-3">
//         {banks.map((b) => (
//           <label key={b.id} className="flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 hover:bg-neutral-50">
//             <input
//               type="radio"
//               name="bank"
//               value={b.id}
//               checked={selectedBank === b.id}
//               onChange={() => setSelectedBank(b.id)}
//               className="h-4 w-4"
//             />
//             <span className="font-medium">{b.name}</span>
//             {selectedBank === b.id && <span className="ml-auto"><PayButton payAmount={payAmount} label={`Securely Pay ₹${payAmount}`} onClick={() => alert(`NetBanking: ${b.name}`)} /></span>}
//           </label>
//         ))}
//       </div>
//       <button className="text-sm font-semibold text-orange-600 hover:underline">View All Banks</button>
//     </div>
//   );
// }

// function WalletBlock({ wallet, setWallet, payAmount }) {
//   return (
//     <div className="space-y-4">
//       {walletOptions.map((w) => (
//         <label key={w.id} className="flex items-center gap-3 rounded-xl border px-4 py-3 hover:bg-neutral-50">
//           <input
//             type="radio"
//             name="wallet"
//             value={w.id}
//             checked={wallet === w.id}
//             onChange={() => setWallet(w.id)}
//             className="h-4 w-4"
//           />
//           <span className="font-medium">{w.name}</span>
//           {wallet === w.id && <span className="ml-auto"><PayButton payAmount={payAmount} label={`Securely Pay ₹${payAmount}`} onClick={() => alert(`Wallet: ${w.name}`)} /></span>}
//         </label>
//       ))}
//     </div>
//   );
// }

// function InfoBlock({ title, lines, ctaLabel }) {
//   return (
//     <div className="space-y-4">
//       <div className="text-lg font-semibold">{title}</div>
//       <ul className="list-disc pl-6 text-sm text-neutral-600">
//         {lines.map((l, i) => (
//           <li key={i}>{l}</li>
//         ))}
//       </ul>
//       <PayButton label={ctaLabel} onClick={() => alert(title)} />
//     </div>
//   );
// }