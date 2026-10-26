import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CLINIC_VALUES } from "@/data/about";
import { btnTextLink } from "@/lib/styles";
import { ValueCard } from "@/components/value-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/container";

/** پیش‌نمایش «درباره ما» در صفحه اصلی */
export function AboutSection() {
  return (
    <section aria-labelledby="about-preview-heading" className="bg-canvas">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="about-preview-heading"
              align="start"
              eyebrow="درباره ما"
              title="فضایی آرام برای مراقبت با حوصله"
            />
            <p className="mt-4 text-base leading-8 text-muted">
              کلینیک دندانپزشکی هدیه یوسف با تمرکز بر سلامت دهان و دندان بیماران
              فعالیت می‌کند؛ جایی که پیش از هر درمان، زمان کافی برای شناخت
              شرایط شما می‌گذاریم و همه گزینه‌ها را به زبان ساده توضیح می‌دهیم.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              ما معتقدیم مراجعه به دندانپزشک نباید تجربه‌ای استرس‌زا باشد؛
              برای همین، از برخورد اولیه تا پایان درمان، راحتی و آرامش شما
              برایمان مهم است.
            </p>
            <Link href="/about" className={`${btnTextLink} mt-6`}>
              بیشتر درباره ما بدانید
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CLINIC_VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 70} className="h-full">
                <ValueCard value={value} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
