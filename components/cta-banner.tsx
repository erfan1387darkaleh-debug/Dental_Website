import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref } from "@/lib/site-config";
import { Container } from "./container";

/** نوار فراخوان پایانی صفحات داخلی — هدایت به تماس */
export function CtaBanner() {
  return (
    <Container className="pb-16 sm:pb-20 lg:pb-24">
      <div className="rounded-3xl bg-primary-700 px-6 py-10 text-center sm:px-12 sm:py-12 dark:bg-primary-900 dark:ring-1 dark:ring-white/10">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          آماده مراقبت از لبخند شما هستیم
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-primary-50">
          برای هماهنگی نوبت یا مشاوره اولیه، همین حالا با کلینیک تماس بگیرید؛
          پاسخ پرسش‌هایتان را با خوش‌وقتی می‌شنوید.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-primary-900 shadow-sm transition-colors duration-200 hover:bg-primary-50"
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            مشاهده همه راه‌های ارتباطی
          </Link>
        </div>
      </div>
    </Container>
  );
}
