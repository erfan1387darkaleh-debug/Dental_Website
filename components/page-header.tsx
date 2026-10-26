import { Container } from "./container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/** سرصفحه مشترک صفحات داخلی (درباره ما، خدمات) */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-primary-100/60 bg-linear-to-b from-primary-50/80 to-white dark:border-primary-900/60 dark:from-primary-950/60 dark:to-canvas">
      <Container className="py-14 text-center sm:py-16 lg:py-20">
        <p className="text-sm font-bold text-accent">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-extrabold text-heading sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
