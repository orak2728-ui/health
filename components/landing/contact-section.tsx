import { Car, Clock, MapPin, Phone, TrainFront } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { ImagePlaceholder, TbdText } from "@/components/landing/placeholder";

export function ContactSection() {
  return (
    <section id="visit" className="scroll-mt-16 bg-brand-ivory-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">방문 · 문의</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          어떻게 찾아가나
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <InfoRow icon={MapPin} label="주소">
              {siteConfig.address ?? <TbdText>주소 확인 중</TbdText>}
            </InfoRow>
            <InfoRow icon={Phone} label="전화">
              {siteConfig.phone ? (
                <a href={`tel:${siteConfig.phone}`} data-event="click_phone" className="font-medium text-brand-navy-deep">
                  {siteConfig.phone}
                </a>
              ) : (
                <TbdText>전화번호 확인 중</TbdText>
              )}
            </InfoRow>
            <InfoRow icon={Clock} label="진료시간">
              <div className="flex flex-col gap-1">
                {siteConfig.businessHours.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-2 text-[15px]">
                    <span className="w-24 shrink-0 text-brand-ink-muted">{row.label}</span>
                    {row.hours ? (
                      <span className="font-medium text-brand-ink">{row.hours}</span>
                    ) : (
                      <TbdText>확인 중</TbdText>
                    )}
                  </div>
                ))}
              </div>
            </InfoRow>
            <InfoRow icon={Car} label="주차">
              {siteConfig.parkingInfo ?? <TbdText>주차 안내 확인 중</TbdText>}
            </InfoRow>
            <InfoRow icon={TrainFront} label="대중교통">
              {siteConfig.transitInfo ?? <TbdText>대중교통 안내 확인 중</TbdText>}
            </InfoRow>

            <a
              href={siteConfig.phone ? `tel:${siteConfig.phone}` : undefined}
              data-event="click_phone"
              aria-disabled={!siteConfig.phone}
              className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-navy-deep px-6 text-[16px] font-medium text-brand-ivory transition-colors hover:bg-brand-navy aria-disabled:pointer-events-none aria-disabled:opacity-50 sm:w-auto"
            >
              <Phone className="size-4" />
              전화로 문의하기
            </a>
          </div>

          <div>
            {siteConfig.mapUrl ? (
              <a
                href={siteConfig.mapUrl}
                data-event="click_directions"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ImagePlaceholder label="지도 연결 예정" ratio="aspect-square md:aspect-[4/5]" />
              </a>
            ) : (
              <ImagePlaceholder label="네이버 · 카카오 지도 연결 예정" ratio="aspect-square md:aspect-[4/5]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-brand-navy/10 bg-white p-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand-teal" />
      <div>
        <p className="text-[13px] font-medium text-brand-ink-muted">{label}</p>
        <div className="mt-0.5 text-[15px] text-brand-ink">{children}</div>
      </div>
    </div>
  );
}
