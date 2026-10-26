/**
 * آیکون اینستاگرام (SVG داخلی).
 * آیکون‌های برند از lucide-react حذف شده‌اند؛ این نسخه سبک داخلی، همان
 * شکل شناخته‌شده (دوربین ساده) را با «currentColor» ارائه می‌دهد.
 */
export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
