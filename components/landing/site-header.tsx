"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "원장 소개", href: "#doctor" },
  { label: "진료 안내", href: "#services" },
  { label: "건강 정보", href: "#content" },
  { label: "오시는 길", href: "#visit" },
  { label: "사진 활동", href: "#photography" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const clinicName = siteConfig.clinicName ?? siteConfig.clinicNameFallback;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-ivory/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-8">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-brand-navy-deep md:text-xl"
        >
          {clinicName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-brand-ink transition-colors hover:text-brand-navy-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#visit"}
            data-event="click_phone"
            className="inline-flex h-11 items-center gap-1.5 rounded-lg bg-brand-navy-deep px-4 text-[15px] font-medium text-brand-ivory transition-colors hover:bg-brand-navy"
          >
            <Phone className="size-4" />
            {siteConfig.phone ?? "전화 문의"}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="flex size-11 items-center justify-center rounded-lg text-brand-navy-deep md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-brand-navy/10 bg-brand-ivory transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="모바일 메뉴">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[16px] font-medium text-brand-ink hover:bg-brand-navy/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#visit"}
            data-event="click_phone"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-brand-navy-deep px-4 text-[15px] font-medium text-brand-ivory"
          >
            <Phone className="size-4" />
            {siteConfig.phone ?? "전화 문의"}
          </a>
        </nav>
      </div>
    </header>
  );
}
