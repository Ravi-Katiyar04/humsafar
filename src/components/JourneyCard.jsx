export default function JourneyCard({bookingData}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg">
      <div className="mb-3 flex items-center gap-2 text-neutral-700">
        <i className="fa-solid fa-train" />
        <span className="font-semibold">{bookingData.train.number} {bookingData.train.name}</span>
        <span className="ml-auto rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
          AVAILABLE‑170
        </span>
      </div>

      <div className="text-2xl font-bold tracking-wide">{bookingData.train.srcCode} 08:30 – {bookingData.train.destCode} 13:45</div>
      <div className="mt-1 text-sm text-neutral-600">Fri, 05 Sep • {bookingData.train.class} • {bookingData.train.quota}</div>

      <div className="mt-4 flex items-start gap-2 text-sm text-neutral-600">
        <i className="fa-regular fa-circle-question mt-0.5" />
        <span>Berth/coach numbers are assigned by the Indian Railways</span>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold">Travellers</div>
        {bookingData?.passengers.map((p, i) => (
          <div key={i} className="mt-2 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full font-bold bg-gray-200 text-center leading-8">{p.fullName[0].toUpperCase()}</div> 
            <div className="text-sm font-semibold">{p.fullName}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-neutral-700">
        <i className="fa-solid fa-circle-check text-indigo-600" />
        <span>Authorised IRCTC Partner</span>
      </div>
    </div>
  );
}