import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { heroContent, siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-brand-ivory-deep/75 to-brand-ivory/75">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-[15px] font-semibold tracking-wide text-brand-teal">
            내과 전문의 최원락
          </p>
          <h1 className="font-heading text-[28px] leading-[1.35] font-semibold text-brand-navy-deep md:text-[40px] md:leading-[1.3]">
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-[1.7] text-brand-ink-muted">
            {heroContent.subcopy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy-deep px-6 text-[16px] font-medium text-brand-ivory transition-colors hover:bg-brand-navy"
            >
              진료 안내 보기
            </a>
            <a
              href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#visit"}
              data-event="click_phone"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-navy-deep/30 bg-brand-ivory px-6 text-[16px] font-medium text-brand-navy-deep transition-colors hover:bg-brand-navy/5"
            >
              <Phone className="size-4" />
              전화 문의
            </a>
            <a
              href="#visit"
              data-event="click_directions"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-navy-deep/30 bg-brand-ivory px-6 text-[16px] font-medium text-brand-navy-deep transition-colors hover:bg-brand-navy/5"
            >
              <MapPin className="size-4" />
              오시는 길
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl md:aspect-[4/5] md:max-w-none">
            <Image
              src="/images/doctor/choi-wonrak-profile.jpg"
              alt="최원락 원장 프로필 사진"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
