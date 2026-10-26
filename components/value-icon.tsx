import {
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ClinicValueIcon } from "@/data/about";

/** نگاشت آیکون‌های بخش «ارزش‌های ما» */
const VALUE_ICONS: Record<ClinicValueIcon, LucideIcon> = {
  comfort: HeartHandshake,
  honesty: MessagesSquare,
  quality: Target,
  hygiene: ShieldCheck,
};

type ValueIconProps = {
  name: ClinicValueIcon;
  className?: string;
};

export function ValueIcon({ name, className = "h-5 w-5" }: ValueIconProps) {
  const Icon = VALUE_ICONS[name];
  return <Icon className={className} aria-hidden="true" />;
}
