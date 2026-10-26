type SectionHeadingProps = {
  /** شناسه برای اتصال aria-labelledby بخش به عنوان */
  id: string;
  /** برچسب کوچک بالای عنوان (مثل «خدمات») */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
};

/** عنوان استاندارد بخش‌ها — برچسب کوچک، تیتر و توضیح کوتاه */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold text-accent">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="mt-2 text-2xl font-extrabold text-heading sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-8 text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
