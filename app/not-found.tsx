import type { Metadata } from "next";
import Link from "next/link";
import { btnPrimary } from "@/lib/styles";
import { Container } from "@/components/container";
import { ToothLogo } from "@/components/tooth-logo";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-canvas">
      <Container className="flex flex-col items-center py-24 text-center sm:py-32">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-tint text-accent">
          <ToothLogo className="h-11 w-11" />
        </div>
        <p className="mt-6 text-5xl font-extrabold text-accent">۴۰۴</p>
        <h1 className="mt-4 text-2xl font-extrabold text-heading">
          صفحه مورد نظر پیدا نشد
        </h1>
        <p className="mt-3 max-w-md text-base leading-8 text-muted">
          به نظر می‌رسد آدرس را اشتباه وارد کرده‌اید یا این صفحه منتقل شده است.
          می‌توانید از صفحه اصلی، مسیر خود را ادامه دهید.
        </p>
        <Link href="/" className={`${btnPrimary} mt-8`}>
          بازگشت به صفحه اصلی
        </Link>
      </Container>
    </section>
  );
}
