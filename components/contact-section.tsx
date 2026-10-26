import { Clock, MapPin, Phone, Send } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { RubikaIcon } from "@/components/rubika-icon";
import {
  CLINIC_ADDRESS,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  RUBIKA_URL,
  TELEGRAM_URL,
  telHref,
} from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/container";

/** بخش «تماس با ما» — اطلاعات تماس و دکمه‌های ارتباطی */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-surface-2"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="contact-heading"
          eyebrow="تماس با ما"
          title="راه‌های ارتباط با کلینیک"
          description="برای هماهنگی نوبت، مشاوره یا هر پرسش دیگری، از راه‌های زیر در دسترس هستیم."
        />

        <Reveal className="mt-10 lg:mt-12">
          <div className="rounded-3xl bg-primary-900 px-6 py-10 sm:px-10 sm:py-12 dark:bg-primary-950 dark:ring-1 dark:ring-white/10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
              {/* اطلاعات تماس */}
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  خوشحال می‌شویم صدایتان را بشنویم
                </h3>
                <p className="mt-3 text-sm leading-8 text-primary-100/90">
                  سامانه نوبت‌دهی آنلاین هنوز فعال نیست؛ برای هماهنگی نوبت، تماس
                  تلفنی سریع‌ترین راه است. پاسخ‌گویی در ساعات کاری کلینیک انجام
                  می‌شود.
                </p>

                <ul className="mt-7 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-primary-200">
                        تلفن کلینیک
                      </p>
                      <a
                        href={telHref}
                        className="mt-0.5 block text-lg font-extrabold text-white transition-colors duration-200 hover:text-primary-200"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-primary-200">
                        نشانی کلینیک
                      </p>
                      <p className="mt-0.5 text-sm leading-7 text-white">
                        {CLINIC_ADDRESS}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-primary-200">
                        ساعات کاری
                      </p>
                      <p className="mt-0.5 text-sm leading-7 text-white">
                        برای اطلاع از ساعات کاری و نوبت‌های آزاد، با کلینیک تماس
                        بگیرید.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* دکمه‌های ارتباطی */}
              <div className="flex flex-col justify-center gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-primary-900 shadow-sm transition-colors duration-200 hover:bg-primary-50"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  تماس تلفنی با کلینیک
                </a>
                <div className="grid gap-3 sm:grid-cols-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/30 px-4 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    <InstagramIcon className="h-5 w-5" aria-hidden="true" />
                    اینستاگرام
                  </a>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/30 px-4 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                    تلگرام
                  </a>
                  <a
                    href={RUBIKA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/30 px-4 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    <RubikaIcon className="h-5 w-5" aria-hidden="true" />
                    روبیکا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
