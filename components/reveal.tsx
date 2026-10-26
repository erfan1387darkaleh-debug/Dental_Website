"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** تأخیر ظاهر شدن (میلی‌ثانیه) برای افقتی‌کردن کارت‌ها */
  delay?: number;
};

/**
 * ظاهر شدن تدریجی و ملایم محتوا هنگام ورود به دید کاربر.
 * حالت «کاهش حرکت» (prefers-reduced-motion) در فایل CSS سراسری مدیریت
 * می‌شود؛ اینجا فقط با IntersectionObserver متصل می‌شود.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={style}
      data-visible={visible}
    >
      {children}
    </div>
  );
}
