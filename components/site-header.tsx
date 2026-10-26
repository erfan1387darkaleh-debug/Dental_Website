"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/instagram-icon";
import { RubikaIcon } from "@/components/rubika-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, Phone, Send, X } from "lucide-react";
import {
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  RUBIKA_URL,
  SITE,
  TELEGRAM_URL,
  telHref,
} from "@/lib/site-config";
import { ToothLogo } from "@/components/tooth-logo";
import { Container } from "@/components/container";

/** هدر اصلی سایت — ناوبری دسکتاپ + منوی موبایل + دسترسی سریع به تماس */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // بستن منو با کلید Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) return false; // لینک‌های داخل صفحه فعال‌سازی دائمی ندارند
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-20">
        {/* لوگو و نام کلینیک */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-300"
          aria-label={SITE.name}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-white shadow-sm">
            <ToothLogo className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-heading sm:text-lg">
              {SITE.shortName}
            </span>
            <span className="text-[11px] font-medium text-subtle">
              کلینیک دندانپزشکی
            </span>
          </span>
        </Link>

        {/* ناوبری دسکتاپ */}
        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-tint text-accent-strong"
                    : "text-muted hover:bg-surface-2 hover:text-heading"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* اقدامات سمت چپ هدر */}
        <div className="flex items-center gap-2">
          {/* دکمه تغییر حالت روشن/تاریک */}
          <ThemeToggle />

          {/* دکمه تماس با شماره — نمایش در دسکتاپ */}
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-800 dark:hover:bg-primary-600 lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          {/* دکمه تماس آیکونی — نمایش در موبایل و تبلت */}
          <a
            href={telHref}
            aria-label="تماس تلفنی با کلینیک"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white shadow-sm transition-colors duration-200 hover:bg-primary-800 dark:hover:bg-primary-600 lg:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* دکمه باز و بسته کردن منوی موبایل */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-body transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-300 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* منوی موبایل */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-xl shadow-slate-900/5 md:hidden dark:shadow-black/30"
        >
          <nav aria-label="ناوبری موبایل" className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    active
                      ? "bg-tint text-accent-strong"
                      : "text-body hover:bg-surface-2 hover:text-heading"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* دسترسی سریع به تماس و شبکه‌های اجتماعی در منوی موبایل */}
            <div className="mt-3 flex items-center gap-2 border-t border-line pt-4">
              <a
                href={telHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary-700 px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-primary-800 dark:hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                تماس با کلینیک
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام کلینیک"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-accent"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={RUBIKA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="روبیکا کلینیک"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-accent"
              >
                <RubikaIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام کلینیک"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-accent"
              >
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
