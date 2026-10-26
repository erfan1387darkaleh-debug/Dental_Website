import type { ClinicValue } from "@/data/about";
import { ValueIcon } from "./value-icon";

/** کارت نمایش یکی از ارزش‌های کلینیک (راحتی، صداقت، دقت، بهداشت) */
export function ValueCard({ value }: { value: ClinicValue }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface-2 p-5 transition-colors duration-300 hover:border-primary-100 hover:bg-primary-50/60 dark:hover:border-primary-800 dark:hover:bg-tint/60">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-accent shadow-sm">
        <ValueIcon name={value.icon} />
      </div>
      <h3 className="mt-3.5 text-base font-bold text-heading">
        {value.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-muted">
        {value.description}
      </p>
    </article>
  );
}
