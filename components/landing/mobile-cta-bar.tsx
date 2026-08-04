import { MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-navy/10 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#visit"}
        data-event="click_phone"
        className="flex h-14 flex-1 items-center justify-center gap-1.5 text-[15px] font-medium text-brand-navy-deep"
      >
        <Phone className="size-4" />
        전화
      </a>
      <div className="w-px bg-brand-navy/10" />
      <a
        href={siteConfig.mapUrl ?? "#visit"}
        data-event="click_directions"
        target={siteConfig.mapUrl ? "_blank" : undefined}
        rel={siteConfig.mapUrl ? "noopener noreferrer" : undefined}
        className="flex h-14 flex-1 items-center justify-center gap-1.5 text-[15px] font-medium text-brand-navy-deep"
      >
        <MapPin className="size-4" />
        길찾기
      </a>
    </div>
  );
}
