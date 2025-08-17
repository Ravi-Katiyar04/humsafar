"use client"
import React, { useMemo, useState } from "react";


const banks = [
  { id: "sbi", name: "State Bank of India" },
  { id: "icici", name: "ICICI Bank" },
  { id: "hdfc", name: "HDFC Bank" },
  { id: "axis", name: "Axis Bank" },
  { id: "kotak", name: "Kotak Mahindra Bank" },
];

const walletOptions = [
  { id: "amazon", name: "Amazon Pay" },
  { id: "payzapp", name: "PayZapp" },
];

const MethodKey = {
  QR: "QR",
  UPI: "UPI",
  CARD: "CARD",
  PAYLATER: "PAYLATER",
  EMI: "EMI",
  NETBANKING: "NETBANKING",
  WALLETS: "WALLETS",
};

export default function PaymentPage() {
  const [method, setMethod] = useState(MethodKey.UPI);
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState(banks[0].id);
  const [wallet, setWallet] = useState(walletOptions[0].id);

  const baseAmount = 793; // ₹
  const upiAmount = 775; // ₹ via UPI

  const payAmount = useMemo(() => (method === MethodKey.UPI ? upiAmount : baseAmount), [method]);

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

      <main className="mx-auto max-w-7xl flex gap-4 px-4 py-6 sm:px-6 lg:px-8">
        {/* Left column: Fare summary & journey details */}
        <section className="space-y-4 w-2/5 lg:sticky lg:top-20 self-start">
          <FareSummary amount={baseAmount} />
          <JourneyCard />
          <SafeBadges />
        </section>

        {/* Right column: Payment methods */}
        <section className="w-3/5">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="flex ">
              {/* Methods list */}
              <div className="bg-gray-100 w-2/5">
                <nav className="flex flex-col">

                  <MethodButton
                    icon="fa-brands fa-cc-apple-pay fa-rotate-90"
                    label="Recommended"
                    sub="Most popular payment method"
                    active={method === MethodKey.QR}
                    onClick={() => setMethod(MethodKey.QR)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-brands fa-cc-apple-pay fa-rotate-90"
                    label="Pay via any UPI app"
                    sub="Scan and pay with UPI"
                    badge="No PG Fee"
                    active={method === MethodKey.UPI}
                    onClick={() => setMethod(MethodKey.UPI)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-regular fa-credit-card"
                    label="Credit/Debit/ATM Card"
                    sub="VISA, Mastercard, Amex, RuPay & more"
                    active={method === MethodKey.CARD}
                    onClick={() => setMethod(MethodKey.CARD)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-solid fa-bag-shopping"
                    label="Pay Later & Easy EMI"
                    sub="Buy now and Pay later options"
                    active={method === MethodKey.PAYLATER}
                    onClick={() => setMethod(MethodKey.PAYLATER)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-solid fa-chart-line"
                    label="EMI"
                    sub="Credit & Debit Card EMI options"
                    active={method === MethodKey.EMI}
                    onClick={() => setMethod(MethodKey.EMI)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-solid fa-globe"
                    label="Net Banking"
                    sub="Select from list of banks"
                    active={method === MethodKey.NETBANKING}
                    onClick={() => setMethod(MethodKey.NETBANKING)}
                  />

                  <hr className=" border-gray-400" />

                  <MethodButton
                    icon="fa-regular fa-wallet"
                    label="Wallets"
                    sub="Amazonpay & PayZapp"
                    badge="New"
                    active={method === MethodKey.WALLETS}
                    onClick={() => setMethod(MethodKey.WALLETS)}
                  />
                </nav>
              </div>

              {/* Method detail panel */}
              <div className="p-4 md:p-6">
                {method === MethodKey.QR && (
                  <QRBlock payAmount={payAmount} upiId={upiId} setUpiId={setUpiId} />
                )}
                {method === MethodKey.UPI && <UPIBlock payAmount={upiAmount} upiId={upiId} setUpiId={setUpiId} />}
                {method === MethodKey.CARD && <CardBlock payAmount={baseAmount} />}
                {method === MethodKey.NETBANKING && (
                  <NetBankingBlock
                    banks={banks}
                    selectedBank={selectedBank}
                    setSelectedBank={setSelectedBank}
                    payAmount={baseAmount}
                  />
                )}
                {method === MethodKey.WALLETS && (
                  <WalletBlock wallet={wallet} setWallet={setWallet} payAmount={baseAmount} />
                )}

                {method === MethodKey.PAYLATER && (
                  <InfoBlock
                    title="Pay Later & Easy EMI"
                    lines={["Check eligibility with your provider during checkout.", "No-cost EMI may vary by bank offers."]}
                    ctaLabel={`Continue • ₹${baseAmount}`}
                  />
                )}

                {method === MethodKey.EMI && (
                  <InfoBlock
                    title="EMI Options"
                    lines={["Choose tenure and interest rate on the next screen.", "EMI available on select cards only."]}
                    ctaLabel={`Proceed • ₹${baseAmount}`}
                  />
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FareSummary({ amount }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl bg-white shadow-lg">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between px-5 py-4"
        aria-expanded={open}
      >
        <div className="text-2xl font-bold">Fare Summary</div>
        <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-neutral-500`} />
      </button>
      <div className={`${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-300 ease-in-out`}> 
        <div className="overflow-hidden">
          <div className="border-t px-5 pb-5">
            <div className="mt-4 flex items-center gap-2 text-green-700">
              <i className="fa-solid fa-shield-halved" />
              <div>
                <div className="text-sm font-semibold">Amount To Be Paid</div>
                <div className="text-2xl font-bold">₹{amount}</div>
                <div className="text-xs">Protected with Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyCard() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg">
      <div className="mb-3 flex items-center gap-2 text-neutral-700">
        <i className="fa-solid fa-train" />
        <span className="font-semibold">19670 Humsafar Express</span>
        <span className="ml-auto rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
          AVAILABLE‑170
        </span>
      </div>

      <div className="text-2xl font-bold tracking-wide">SLN 08:30 – CNB 13:45</div>
      <div className="mt-1 text-sm text-neutral-600">Fri, 05 Sep • 3A • General</div>

      <div className="mt-4 flex items-start gap-2 text-sm text-neutral-600">
        <i className="fa-regular fa-circle-question mt-0.5" />
        <span>Berth/coach numbers are assigned by the Indian Railways</span>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold">Travellers</div>
        <div className="text-sm">1. ravi</div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-neutral-700">
        <i className="fa-solid fa-circle-check text-indigo-600" />
        <span>Authorised IRCTC Partner</span>
      </div>
    </div>
  );
}

function SafeBadges() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm font-semibold text-neutral-700">100% Safe Payment Process</div>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-neutral-500">
        <i className="fa-brands fa-cc-visa text-2xl" title="Verified by Visa" />
        <i className="fa-brands fa-cc-amex text-2xl" title="Amex SafeKey" />
        <i className="fa-brands fa-cc-mastercard text-2xl" title="Mastercard SecureCode" />
        <span className="text-xs">RuPay</span>
        <span className="text-xs">PCI DSS</span>
      </div>
    </div>
  );
}

function MethodButton({ icon, label, sub, badge, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full border-r border-r-gray-400 items-start gap-3 px-4 py-3 text-left transitio ${
        active ? "bg-white border-l-4 border-r-0 border-l-blue-600" : ""
      }`}
      aria-pressed={active}
    >
      <i className={`${icon} mt-1 text-lg`} />
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="truncate text-xl">{label}</span>
        </div>
        {sub && <div className="text-sm text-neutral-500">{sub}</div>}
        {badge && (
            <div className={`rounded-full w-fit px-2 py-1 mt-1 text-[10px] bg-green-600 text-white font-semibold`}>{badge}</div>
          )}
      </div>
    </button>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      <i className="fa-solid fa-circle-check" /> {children}
    </span>
  );
}

function PayButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
    >
      {label}
    </button>
  );
}

function UPIBlock({ payAmount, upiId, setUpiId }) {
  return (
    <div className="space-y-6">
        
      <div className="relative mt-2">
        <label className="mb-2 block text-sm font-semibold">Enter UPI ID Manually</label>
        <div className="flex gap-3">
          <input
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="yourname@bank"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring focus:ring-neutral-200"
          />
          <button
            className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-orange-600"
            onClick={() => alert(`Initiate UPI Collect for ${upiId || "<upi-id>"}`)}
          >
            Pay ₹{payAmount}
          </button>
        </div>
      </div>

      <Pill>Pay only ₹{payAmount} via UPI</Pill>
    </div>
  );
}

function QRBlock({ payAmount, upiId, setUpiId }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-4">
        <i className="fa-solid fa-qrcode text-3xl" />
        <div className="text-sm">
          <div className="font-semibold">Scan & Pay with UPI</div>
          <ol className="mt-1 list-decimal pl-4 text-neutral-600">
            <li>Open any UPI or banking app on your phone</li>
            <li>Scan the QR code to pay</li>
          </ol>
        </div>
        <div className="ml-auto">
          <button className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-neutral-100">
            Generate QR
          </button>
        </div>
      </div>

      <Pill>Pay only ₹{payAmount} via UPI</Pill>

    </div>
  );
}

function CardBlock({ payAmount }) {
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold">Add New Card</div>
      <div className="grid gap-4 sm:max-w-lg">
        <input className="rounded-xl border px-4 py-3" placeholder="Card Number" />
        <div className="grid grid-cols-2 gap-4">
          <input className="rounded-xl border px-4 py-3" placeholder="Exp. Date (MM/YY)" />
          <input className="rounded-xl border px-4 py-3" placeholder="CVV" />
        </div>
        <div className="flex items-center gap-2 text-sm text-emerald-700">
          <i className="fa-solid fa-circle-check" /> No PG charge with AU Bank, RBL Bank Credit card
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="h-4 w-4 rounded border" defaultChecked /> Save my card for future payments.
        </label>
        <PayButton label={`Securely Pay ₹${payAmount}`} onClick={() => alert("Card payment")}/>
      </div>
    </div>
  );
}

function NetBankingBlock({ banks, selectedBank, setSelectedBank, payAmount }) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {banks.map((b) => (
          <label key={b.id} className="flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 hover:bg-neutral-50">
            <input
              type="radio"
              name="bank"
              value={b.id}
              checked={selectedBank === b.id}
              onChange={() => setSelectedBank(b.id)}
              className="h-4 w-4"
            />
            <span className="font-medium">{b.name}</span>
            {selectedBank === b.id && <span className="ml-auto"><PayButton label={`Securely Pay ₹${payAmount}`} onClick={() => alert(`NetBanking: ${b.name}`)} /></span>}
          </label>
        ))}
      </div>
      <button className="text-sm font-semibold text-orange-600 hover:underline">View All Banks</button>
    </div>
  );
}

function WalletBlock({ wallet, setWallet, payAmount }) {
  return (
    <div className="space-y-4">
      {walletOptions.map((w) => (
        <label key={w.id} className="flex items-center gap-3 rounded-xl border px-4 py-3 hover:bg-neutral-50">
          <input
            type="radio"
            name="wallet"
            value={w.id}
            checked={wallet === w.id}
            onChange={() => setWallet(w.id)}
            className="h-4 w-4"
          />
          <span className="font-medium">{w.name}</span>
          {wallet === w.id && <span className="ml-auto"><PayButton label={`Securely Pay ₹${payAmount}`} onClick={() => alert(`Wallet: ${w.name}`)} /></span>}
        </label>
      ))}
    </div>
  );
}

function InfoBlock({ title, lines, ctaLabel }) {
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold">{title}</div>
      <ul className="list-disc pl-6 text-sm text-neutral-600">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <PayButton label={ctaLabel} onClick={() => alert(title)} />
    </div>
  );
}