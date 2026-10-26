# وب‌سایت کلینیک دندانپزشکی هدیه یوسف

وب‌سایت رسمی کلینیک دندانپزشکی «هدیه یوسف» — کاملاً فارسی، راست‌به‌چپ (RTL) و واکنش‌گرا.

## تکنولوژی‌ها

- **Next.js 16** (App Router + Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- آیکون‌ها: [lucide-react](https://lucide.dev)
- فونت: [وزیرمتن](https://github.com/rastikerdar/vazirmatn) (self-hosted در `app/fonts`)

## اجرای پروژه

```bash
npm install
npm run dev      # اجرای محیط توسعه روی http://localhost:3000
npm run build    # ساخت نسخه نهایی
npm run start    # اجرای نسخه نهایی
npm run lint     # بررسی ESLint
```

## جایگزینی اطلاعات placeholder

اطلاعات تماس و تنظیمات سایت **همه در یک فایل** متمرکز شده‌اند:

```
lib/site-config.ts
```

پیش از انتشار سایت، مقادیر زیر را در این فایل با اطلاعات واقعی جایگزین کنید
(همه بخش‌های سایت به‌صورت خودکار از این مقادیر استفاده می‌کنند):

| متغیر | توضیح |
| --- | --- |
| `PHONE_NUMBER` | شماره تلفن برای لینک `tel:` (بدون فاصله/خط تیره) |
| `PHONE_DISPLAY` | شماره‌ای که به کاربر نمایش داده می‌شود |
| `CLINIC_ADDRESS` | نشانی دقیق کلینیک |
| `INSTAGRAM_USERNAME` | نام کاربری اینستاگرام (لینک به‌صورت خودکار ساخته می‌شود) |
| `TELEGRAM_USERNAME` | نام کاربری تلگرام (لینک به‌صورت خودکار ساخته می‌شود) |
| `RUBIKA_USERNAME` | نام کاربری روبیکا (لینک به‌صورت خودکار ساخته می‌شود) |
| `SITE_URL` | دامنه نهایی سایت (برای SEO و Open Graph) |

## حالت روشن و تاریک

- دکمه تغییر تم (خورشید/ماه) در هدر سایت قرار دارد و روی دسکتاپ و موبایل کار می‌کند.
- انتخاب کاربر در `localStorage` (کلید `theme`) ذخیره می‌شود و پس از رفرش باقی می‌ماند.
- اگر کاربر انتخاب صریحی نکرده باشد، تم اولیه از تنظیمات سیستم (`prefers-color-scheme`) گرفته می‌شود و تغییرات سیستم به‌صورت زنده اعمال می‌شود.
- حالت تاریک با کلاس `dark` روی `<html>` اعمال می‌شود (واریانت `dark:` در Tailwind v4 از طریق `@custom-variant` فعال شده است). اسکریپت کوچکی در `app/layout.tsx` پیش از اولین رنگ‌آمیزی این کلاس را تنظیم می‌کند تا «فلش تم» رخ ندهد.
- رنگ‌های تم به‌صورت توکن معنایی در `app/globals.css` تعریف شده‌اند (`bg-canvas`، `bg-surface`، `bg-surface-2`، `bg-tint`، `border-line`، `border-line-strong`، `text-heading`، `text-body`، `text-muted`، `text-subtle`، `text-accent` و...)؛ برای تغییر جهت طراحی آینده کافی است مقادیر `:root` (روشن) و `.dark` (تاریک) را ویرایش کنید.

## ساختار پروژه

```
app/                  صفحات (App Router)
  page.tsx            صفحه اصلی (هیرو، خدمات، درباره ما، تماس)
  about/page.tsx      صفحه «درباره ما»
  services/page.tsx   صفحه «خدمات»
  not-found.tsx       صفحه ۴۰۴ فارسی
  layout.tsx          چیدمان اصلی (فونت، متادیتا، هدر/فوتر، JSON-LD)
  opengraph-image.tsx تصویر اشتراک‌گذاری (Open Graph) ساخته‌شده با کد
  icon.svg            آیکون سایت (favicon)
  robots.ts / sitemap.ts
components/           کامپوننت‌های قابل استفاده مجدد
  site-header.tsx     هدر + منوی موبایل (Client Component)
  theme-toggle.tsx    دکمه تغییر حالت روشن/تاریک (Client Component)
  site-footer.tsx     فوتر
  hero-section.tsx    بخش هیرو صفحه اصلی
  services-section.tsx  پیش‌نمایش خدمات در صفحه اصلی
  service-card.tsx    کارت خدمت
  about-section.tsx   پیش‌نمایش «درباره ما» در صفحه اصلی
  contact-section.tsx بخش «تماس با ما»
  cta-banner.tsx      نوار فراخوان پای صفحات
  value-card.tsx      کارت ارزش‌های کلینیک
  page-header.tsx     سرصفحه صفحات داخلی
  section-heading.tsx عنوان استاندارد بخش‌ها
  reveal.tsx          انیمیشن ملایم ظاهرشدن هنگام اسکرول
  tooth-logo.tsx      لوگوی دندان (SVG داخلی)
data/                 داده‌های محتوایی
  services.ts         فهرست خدمات (افزودن خدمت جدید = اضافه‌کردن یک آیتم)
  about.ts            ارزش‌ها و مراحل مراجعه
lib/
  site-config.ts      تنظیمات مرکزی و اطلاعات تماس (placeholderها)
  styles.ts           کلاس‌های مشترک دکمه‌ها
app/fonts/            فونت وزیرمتن (مجوز OFL در OFL.txt)
```

## گسترش‌های پیش‌رو

ساختار پروژه برای توسعه آینده آماده است:

- **نوبت‌دهی آنلاین**: بخش تماس در صفحه اصلی به‌گونه‌ای طراحی شده که بتوان یک لینک یا فرم نوبت‌دهی به آن اضافه کرد.
- **بلاگ/مقالات**: کافی است یک Route Group مثل `app/blog/` اضافه شود؛ داده‌های `data/` الگوی جداسازی محتوا از UI را نشان می‌دهند.
- **CMS یا بک‌اند**: داده‌های خدمات و اطلاعات کلینیک در فایل‌های جداگانه‌اند و به‌راحتی می‌توانند به منبع داده تبدیل شوند.
- **عکس‌های واقعی**: پنل تصویری هیرو و صفحه «درباره ما» با کامپوننت‌های ساده ساخته شده‌اند تا با عکس واقعی کلینیک (با `next/image`) جایگزین شوند.

## مجوز فونت

فونت وزیرمتن تحت مجوز [SIL Open Font License](https://github.com/rastikerdar/vazirmatn) (فایل `app/fonts/OFL.txt`) منتشر شده است.
