import Link from "next/link";
import { ArrowLeft, MessagesSquare, Phone, ShieldCheck } from "lucide-react";
import {
  PHONE_DISPLAY,
  SITE,
  telHref,
} from "@/lib/site-config";
import { btnPrimary, btnSecondary } from "@/lib/styles";
import { ToothLogo } from "@/components/tooth-logo";
import { Container } from "@/components/container";

/** بخش هیرو صفحه اصلی — معرفی کوتاه کلینیک و فراخوان اصلی */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-canvas"
    >
      {/* شکل‌های تزئینی ملایم پس‌زمینه */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-tint blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-72 w-72 rounded-full bg-tint blur-3xl"
      />

      <Container className="relative py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* متن معرفی */}
          <div className="animate-fade-up text-center lg:text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-tint px-4 py-1.5 text-xs font-bold text-primary-800 dark:border-primary-900 dark:text-primary-200">
              <ToothLogo className="h-3.5 w-3.5" />
              {SITE.name}
            </span>
            <h1
              id="hero-heading"
              className="mt-5 text-3xl font-extrabold leading-[1.4] text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]"
            >
              سلامت و زیبایی لبخند شما،{" "}
              <span className="text-accent">اولویت ماست</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:mx-0">
              در کلینیک دندانپزشکی هدیه یوسف، سلامت دهان و دندان شما را با دقت،
              صبر و رعایت کامل اصول بهداشتی بررسی و درمان می‌کنیم؛ در فضایی
              آرام که راحتی شما در اولویت است.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/services" className={btnPrimary}>
                مشاهده خدمات
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/#contact" className={btnSecondary}>
                تماس با ما
              </Link>
            </div>

            <p className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-subtle lg:justify-start">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              برای هماهنگی نوبت تماس بگیرید:
              <a
                href={telHref}
                className="font-bold text-accent-strong transition-colors duration-200 hover:text-accent-hover hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          {/* تصویرسازی معرفی کلینیک */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-primary-100/70 sm:-inset-6 dark:bg-primary-900/30"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary-100 bg-linear-to-b from-primary-50 to-primary-100/70 dark:border-primary-900 dark:from-primary-950/70 dark:to-primary-900/25">
                <div className="flex aspect-4/3 items-center justify-center p-8">
                  <div className="flex h-44 w-44 items-center justify-center rounded-full bg-surface shadow-soft sm:h-52 sm:w-52 dark:border dark:border-line-strong">
                    <ToothLogo className="h-24 w-24 text-primary-600 sm:h-28 sm:w-28 dark:text-primary-400" />
                  </div>
                </div>

                {/* کارت‌های شناور کوچک */}
                <div className="absolute right-5 top-5 flex animate-float items-center gap-2.5 rounded-2xl bg-surface/95 px-4 py-3 shadow-soft backdrop-blur dark:border dark:border-line sm:right-7 sm:top-7">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tint text-accent">
                    <ShieldCheck className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-heading sm:text-sm">
                    رعایت کامل اصول بهداشتی
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 flex animate-float items-center gap-2.5 rounded-2xl bg-surface/95 px-4 py-3 shadow-soft backdrop-blur [animation-delay:2.5s] dark:border dark:border-line sm:bottom-7 sm:left-7">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tint text-accent">
                    <MessagesSquare
                      className="h-4.5 w-4.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-semibold text-heading sm:text-sm">
                    توضیح شفاف پیش از درمان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
