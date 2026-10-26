import {
  Bone,
  Brush,
  Crown,
  GitBranch,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

/**
 * نگاشت نام آیکون هر خدمت (در data/services.ts) به آیکون Lucide.
 * برای افزودن خدمت جدید با آیکون تازه، این جدول را هم به‌روز کنید.
 */
const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  examination: Stethoscope,
  scaling: Brush,
  filling: Wrench,
  "root-canal": GitBranch,
  extraction: Bone,
  whitening: Sparkles,
  prosthesis: Crown,
  cosmetic: Smile,
  preventive: ShieldCheck,
};

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const Icon = SERVICE_ICONS[name];
  return <Icon className={className} aria-hidden="true" />;
}
