export default function MethodButton({ icon, label, sub, badge, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full border-r border-r-gray-400 items-start gap-3 px-4 py-3 text-left transitio ${active ? "bg-white border-l-4 border-r-0 border-l-blue-600" : ""
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