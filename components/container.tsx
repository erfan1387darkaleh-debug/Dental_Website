import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

/** محدوده افقی مشترک همه بخش‌ها — عرض ثابت و پدینگ واکنش‌گرا */
export function Container({ className = "", ...rest }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    />
  );
}
