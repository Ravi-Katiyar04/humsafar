export default function JourneyCard() {
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