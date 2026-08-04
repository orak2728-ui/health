import { Play } from "lucide-react";

import { healthContentCards } from "@/lib/site-config";
import { ImagePlaceholder } from "@/components/landing/placeholder";

export function ContentSection() {
  return (
    <section id="content" className="scroll-mt-16 bg-brand-ivory-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">건강 콘텐츠</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          진료실에서 못 다한 건강 이야기
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {healthContentCards.map((card) => {
            const inner = (
              <>
                <div className="relative">
                  <ImagePlaceholder label="대표 이미지 · 썸네일" ratio="aspect-video" className="rounded-b-none" />
                  {card.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-11 items-center justify-center rounded-full bg-brand-navy-deep/80 text-brand-ivory">
                        <Play className="size-5" fill="currentColor" />
                      </span>
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[13px] font-medium text-brand-teal">{card.category}</p>
                  <h3 className="mt-1 font-heading text-[16px] font-semibold text-brand-navy-deep">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-brand-ink-muted">
                    {card.summary}
                  </p>
                </div>
              </>
            );

            return card.href ? (
              <a
                key={card.id}
                href={card.href}
                data-event="click_health_article"
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-white transition-shadow hover:shadow-md"
              >
                {inner}
              </a>
            ) : (
              <div
                key={card.id}
                className="overflow-hidden rounded-2xl border border-dashed border-brand-navy/20 bg-white/60"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
