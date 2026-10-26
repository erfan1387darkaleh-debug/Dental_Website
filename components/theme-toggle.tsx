"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

/** کلید ذخیره انتخاب تم کاربر در localStorage */
const STORAGE_KEY = "theme";

/**
 * دکمه تغییر حالت روشن/تاریک.
 *
 * - وضعیت واقعی تم روی <html> (کلاس dark) نگه داشته می‌شود و هر دو آیکون
 *   همیشه رندر می‌شوند؛ نمایش/پنهان‌سازی فقط با CSS انجام می‌شود، بنابراین
 *   خروجی سرور و کلاینت همیشه یکسان است و hydration mismatch رخ نمی‌دهد.
 * - انتخاب کاربر در localStorage ذخیره می‌شود و پس از رفرش باقی می‌ماند.
 * - تا وقتی کاربر انتخاب صریحی نکرده، تغییر تم سیستم به‌صورت زنده اعمال می‌شود.
 * - گذار نرم تغییر تم با کلاس گذرایی theme-anim (در globals.css) انجام می‌شود.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // پیروی زنده از تم سیستم، تا زمانی که کاربر انتخاب صریحی ذخیره نکرده است
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        // localStorage در دسترس نیست؛ فقط به تم سیستم واکنش نشان بده
      }
      if (stored) return;
      document.documentElement.classList.toggle("dark", media.matches);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ذخیره‌سازی ممکن نشد؛ تم فقط برای همین بازه اعمال می‌شود
    }

    // گذار نرم و کوتاه فقط هنگام تعامل کاربر
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 300);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="تغییر حالت روشن/تاریک"
      aria-label="تغییر حالت روشن/تاریک سایت"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-body transition-colors duration-200 hover:bg-surface-2 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-300 ${className}`}
    >
      {/* ماه — در حالت روشن دیده می‌شود (مقصد تغییر) */}
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
      {/* خورشید — در حالت تاریک دیده می‌شود (مقصد تغییر) */}
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
    </button>
  );
}
