import { useState } from "react";
export default function FareSummary({ amount }) {
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