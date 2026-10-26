import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site-config";

export const alt = SITE.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * فونت وزیرمتن (ذخیره‌شده در app/fonts) برای رندر متن فارسی در تصویر OG.
 * موتور رندر (satori) فرمت woff2 را نمی‌پذیرد؛ از نسخه TTF استفاده می‌کنیم.
 */
const vazirmatnBold = await readFile(
  join(process.cwd(), "app/fonts/Vazirmatn-Bold.ttf"),
);

/** تصویر پیش‌نمایش اشتراک‌گذاری در شبکه‌های اجتماعی (Open Graph) */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0fdfa",
          fontFamily: "Vazirmatn",
          direction: "rtl",
        }}
      >
        {/* لوگوی دندان */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="#0f766e"
          style={{ marginBottom: 24 }}
        >
          <path d="M12 4C9.9 4 6.5 4.9 6.5 8.3C6.5 10.4 7.1 11.7 7.6 13.6C8.1 15.7 8.4 18.6 9.2 19.9C9.7 20.7 10.8 20.5 11.1 19.6C11.5 18.4 11.5 16.4 12 16.4C12.5 16.4 12.5 18.4 12.9 19.6C13.2 20.5 14.3 20.7 14.8 19.9C15.6 18.6 15.9 15.7 16.4 13.6C16.9 11.7 17.5 10.4 17.5 8.3C17.5 4.9 14.1 4 12 4Z" />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          هدیه یوسف
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#0f766e",
            marginTop: 18,
          }}
        >
          کلینیک دندانپزشکی
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#475569",
            marginTop: 28,
          }}
        >
          مراقبت از سلامت و زیبایی لبخند شما
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Vazirmatn",
          data: vazirmatnBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
