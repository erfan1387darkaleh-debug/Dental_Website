/**
 * آیکون روبیکا (SVG داخلی).
 * آیکون‌های برند از lucide-react حذف شده‌اند؛ این نسخه سبک داخلی، نشان
 * «R» داخل کادر گرد (مشابه نشان روبیکا) را با «currentColor» ارائه می‌دهد.
 */
export function RubikaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <path d="M9 17V7h3.4a2.4 2.4 0 1 1 0 4.8H9" />
      <path d="M12.6 11.8 15.2 17" />
    </svg>
  );
}
