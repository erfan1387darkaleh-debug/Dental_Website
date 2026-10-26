"use client";

import { useSyncExternalStore } from "react";

/** محاسبه سال جاری با ارقام فارسی — فقط در سمت کلاینت */
const getYear = () =>
  new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false });

/** مقدار سرور — خالی، تا رندر استاتیک صفحات نامعتبر نشود */
const getServerYear = () => "";

const noopSubscribe = () => () => {};

/**
 * نمایش سال جاری در فوتر.
 * با useSyncExternalStore مقدار در سمت کلاینت محاسبه می‌شود؛ بدون رندر
 * اضافه یا ناسازگاری هیدراسیون، و سازگار با Cache Components.
 */
export function PersianYear() {
  const year = useSyncExternalStore(noopSubscribe, getYear, getServerYear);
  return <span suppressHydrationWarning>{year}</span>;
}
