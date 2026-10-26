import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/container";
import { services } from "@/data/services";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "خدمات دندانپزشکی",
  description: `فهرست خدمات ${SITE.name}؛ از معاینه، جرم‌گیری و ترمیم تا درمان ریشه، روکش و پروتز و خدمات زیبایی دندان.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="خدمات"
        title="خدمات دندانپزشکی کلینیک"
        description="هر خدمت با معاینه دقیق شروع می‌شود و با توضیح شفاف مراحل و هزینه‌ها پیش می‌رود؛ تا با خیال راحت تصمیم بگیرید."
      />

      {/* فهرست کامل خدمات */}
      <section aria-labelledby="services-heading">
        <Container className="py-16 sm:py-20">
          <h2 id="services-heading" className="sr-only">
            فهرست خدمات
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 60} className="h-full">
                <ServiceCard service={service} showPoints />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-sm leading-7 text-subtle">
            اگر خدمت مورد نیازتان در فهرست نیست، با کلینیک تماس بگیرید تا
            درباره شرایط شما راهنمایی‌تان کنیم.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
