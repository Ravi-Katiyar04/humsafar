export default function SafeBadges() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm font-semibold text-neutral-700">100% Safe Payment Process</div>
      <p className="text-sm text-gray-500">Powered by Secure Payment System</p>
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