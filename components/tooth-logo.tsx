/**
 * لوگوی دندان (SVG سبک‌وزن داخلی) — در هدر، فوتر، هیرو و آیکون سایت استفاده می‌شود.
 * رنگ با «currentColor» کنترل می‌شود.
 */
export function ToothLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 4C9.9 4 6.5 4.9 6.5 8.3C6.5 10.4 7.1 11.7 7.6 13.6C8.1 15.7 8.4 18.6 9.2 19.9C9.7 20.7 10.8 20.5 11.1 19.6C11.5 18.4 11.5 16.4 12 16.4C12.5 16.4 12.5 18.4 12.9 19.6C13.2 20.5 14.3 20.7 14.8 19.9C15.6 18.6 15.9 15.7 16.4 13.6C16.9 11.7 17.5 10.4 17.5 8.3C17.5 4.9 14.1 4 12 4Z" />
    </svg>
  );
}
