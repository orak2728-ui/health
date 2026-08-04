import { ArrowRight } from "lucide-react";

import { coreServices } from "@/lib/site-config";
import { TbdText } from "@/components/landing/placeholder";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 bg-brand-ivory/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">주요 진료 · 검사</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          어떤 진료를 받을 수 있나
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-brand-navy-deep">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-brand-ink-muted">
                {service.description}
              </p>
              <div className="mt-4 flex-1">
                {service.bullets.length > 0 ? (
                  <ul className="flex flex-col gap-1.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="text-[14px] text-brand-ink-muted">
                        · {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <TbdText>세부 검사 항목 확인 중</TbdText>
                )}
              </div>
              <a
                href="#visit"
                data-event="click_service_card"
                className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-brand-navy-deep"
              >
                문의하기
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
