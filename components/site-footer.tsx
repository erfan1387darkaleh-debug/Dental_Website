import Link from "next/link";
import { InstagramIcon } from "@/components/instagram-icon";
import { RubikaIcon } from "@/components/rubika-icon";
import { PersianYear } from "@/components/persian-year";
import { MapPin, Phone, Send } from "lucide-react";
import {
  CLINIC_ADDRESS,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  RUBIKA_URL,
  SITE,
  TELEGRAM_URL,
  telHref,
} from "@/lib/site-config";
import { services } from "@/data/services";
import { ToothLogo } from "./tooth-logo";
import { Container } from "./container";

/** فوتر سایت — اطلاعات کلینیک، دسترسی سریع و شبکه‌های اجتماعی */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* برند و معرفی کوتاه */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-300"
              aria-label={SITE.name}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-white">
                <ToothLogo className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-extrabold text-heading">
                  {SITE.shortName}
                </span>
                <span className="text-[11px] font-medium text-subtle">
                  کلینیک دندانپزشکی
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted">
              {SITE.tagline}. در فضایی آرام و بهداشتی، برای شما و خانواده‌تان
              کناریم.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام کلینیک"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-200 hover:border-primary-300 hover:text-accent dark:hover:border-primary-800"
              >
                <InstagramIcon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام کلینیک"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-200 hover:border-primary-300 hover:text-accent dark:hover:border-primary-800"
              >
                <Send className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={RUBIKA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="روبیکا کلینیک"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-200 hover:border-primary-300 hover:text-accent dark:hover:border-primary-800"
              >
                <RubikaIcon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* دسترسی سریع */}
          <nav aria-label="دسترسی سریع">
            <h2 className="text-sm font-bold text-heading">دسترسی سریع</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* خدمات */}
          <nav aria-label="فهرست خدمات">
            <h2 className="text-sm font-bold text-heading">خدمات</h2>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-strong"
                >
                  مشاهده همه خدمات...
                </Link>
              </li>
            </ul>
          </nav>

          {/* اطلاعات تماس */}
          <div>
            <h2 className="text-sm font-bold text-heading">اطلاعات تماس</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-muted">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{CLINIC_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* نوار پایانی */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-center text-xs text-subtle sm:flex-row sm:text-start">
          <p>© <PersianYear /> {SITE.name} — تمامی حقوق محفوظ است.</p>
          <p>مراقبت از لبخند شما، افتخار ماست.</p>
        </div>
      </Container>
    </footer>
  );
}
