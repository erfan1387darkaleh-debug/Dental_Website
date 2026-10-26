import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { services } from "@/data/services";
import { btnTextLink } from "@/lib/styles";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/container";

/** پیش‌نمایش خدمات در صفحه اصلی — چند خدمت منتخب + لینک صفحه کامل */
export function ServicesSection() {
  const previewServices = services.slice(0, 6);

  return (
    <section
      aria-labelledby="services-preview-heading"
      className="bg-surface-2"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="services-preview-heading"
          eyebrow="خدمات"
          title="خدمات دندانپزشکی ما"
          description="از معاینه و پیشگیری تا درمان‌های ترمیمی و زیبایی؛ طیفی از خدمات عمومی دندانپزشکی برای سلامت کامل دهان و دندان شما."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {previewServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className={btnTextLink}>
            مشاهده همه خدمات
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
