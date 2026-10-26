/**
 * کلاس‌های مشترک دکمه‌ها برای یکدستی ظاهر در کل سایت.
 * اگر جایی به دکمه جدید نیاز داشتید، اول یکی از این‌ها را امتحان کنید.
 */

/** دکمه اصلی (پررنگ) — رنگ پس‌زمینه سبزآبی تیره */
export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-800 active:bg-primary-900 dark:hover:bg-primary-600 dark:active:bg-primary-500 dark:shadow-none dark:ring-1 dark:ring-white/10";

/** دکمه دوم (کمرنگ) — حاشیه‌دار روی پس‌زمینه صفحه */
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary-300 hover:bg-tint hover:text-primary-800 dark:hover:border-primary-700 dark:hover:bg-primary-900/40 dark:hover:text-primary-200";

/** لینک متنی با فلش — برای «بیشتر بدانید» و مشابه آن */
export const btnTextLink =
  "inline-flex items-center justify-center gap-1.5 text-sm font-bold text-accent transition-colors duration-200 hover:text-accent-strong";
