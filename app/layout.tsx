import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CLINIC_ADDRESS,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  RUBIKA_URL,
  SITE,
  SITE_URL,
  TELEGRAM_URL,
} from "@/lib/site-config";

/*
 * فونت فارسی «وزیرمتن» (self-hosted) — فایل در app/fonts قرار دارد و
 * در زمان ساخت بهینه و همراه سایت میزبانی می‌شود؛ هیچ درخواست خارجی
 * در زمان بازدید کاربر انجام نمی‌شود.
 */
const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | مراقبت از سلامت و زیبایی لبخند شما`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "دندانپزشکی",
    "کلینیک دندانپزشکی",
    "هدیه یوسف",
    "سلامت دهان و دندان",
    "جرم‌گیری",
    "درمان ریشه",
    "دندانپزشکی زیبایی",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.name} | مراقبت از سلامت و زیبایی لبخند شما`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | مراقبت از سلامت و زیبایی لبخند شما`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

/*
 * اسکریپت هم‌زمان با اولین رندر (pre-paint) — حالت ذخیره‌شده کاربر را
 * از localStorage می‌خواند و اگر انتخاب صریحی نباشد، از علاقه سیستم
 * (prefers-color-scheme) پیروی می‌کند؛ سپس کلاس dark را روی <html>
 * تنظیم می‌کند. اجرای آن پیش از رنگ‌آمیزی اول است و «فلش تم» ندارد.
 */
const themeScript =
  '(function(){try{var s=localStorage.getItem("theme");if(s!=="light"&&s!=="dark"){s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",s==="dark")}catch(e){}})();';

/** داده ساختاریافته (Schema.org) برای بهبود نمایش در نتایج جست‌وجو */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  description: SITE.description,
  url: SITE_URL,
  telephone: PHONE_NUMBER,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_ADDRESS,
    addressCountry: "IR",
  },
  sameAs: [INSTAGRAM_URL, TELEGRAM_URL, RUBIKA_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${vazirmatn.variable} antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-body">
        {/*
          * تنظیم تم پیش از رنگ‌آمیزی اول؛ suppressHydrationWarning روی
          * <html> تفاوت احتمالی کلاس dark بین سرور و کلاینت را بی‌اثر می‌کند.
          */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* لینک پرش برای کاربران صفحه‌کلید */}
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:right-3 focus-visible:z-100 focus-visible:rounded-full focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-bold focus-visible:text-primary-800 focus-visible:shadow-lg focus-visible:ring-1 focus-visible:ring-slate-200"
        >
          پرش به محتوای اصلی
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
