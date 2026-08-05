import { Camera, MapPin } from "lucide-react";

import {
  bipfEditions,
  bipfIntro,
  featuredPhotographyWork,
  photographyIntro,
  photographyWorks,
} from "@/lib/site-config";
import { LightboxImage } from "@/components/landing/lightbox-image";
import { ImagePlaceholder, TbdText } from "@/components/landing/placeholder";

export function PhotographySection() {
  return (
    <section id="photography" className="scroll-mt-16 bg-brand-ivory-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="flex items-center gap-2 text-[15px] font-semibold text-brand-teal">
          <Camera className="size-4" />
          사진 활동
        </p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          카메라로 담은 마을, 그리고 부모님
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-brand-ink-muted">
          {photographyIntro}
        </p>

        {featuredPhotographyWork.image && (
          <div className="mt-10 grid gap-6 rounded-2xl border border-brand-navy/10 bg-white p-6 md:grid-cols-[minmax(0,300px)_1fr] md:items-center md:gap-10 md:p-8">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl md:mx-0">
              <LightboxImage
                src={featuredPhotographyWork.image}
                alt={`${featuredPhotographyWork.title} 작품 이미지`}
                sizes="(min-width: 768px) 300px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[13px] font-medium text-brand-teal">
                {featuredPhotographyWork.type}
              </span>
              <h3 className="mt-1 font-heading text-2xl font-semibold text-brand-navy-deep">
                《{featuredPhotographyWork.title}》
              </h3>
              <p className="mt-3 text-[16px] leading-[1.8] text-brand-ink-muted">
                {featuredPhotographyWork.description ?? (
                  <TbdText>작품 소개 준비 중</TbdText>
                )}
              </p>
            </div>
          </div>
        )}

        <div className="mt-14 md:mt-20">
          <p className="text-[15px] font-semibold text-brand-teal">개인전</p>
          <h3 className="mt-2 max-w-2xl text-balance font-heading text-xl font-semibold text-brand-navy-deep md:text-2xl">
            삶을 오래 들여다본 시간들
          </h3>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {photographyWorks.map((work) => (
            <div
              key={work.id}
              className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-white"
            >
              {work.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-navy/5">
                  <LightboxImage
                    src={work.image}
                    alt={`${work.title} 작품 이미지`}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={`${work.title} 작품 이미지`}
                  ratio="aspect-[4/3]"
                  className="rounded-none"
                />
              )}
              <div className="p-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-heading text-lg font-semibold text-brand-navy-deep">
                    《{work.title}》
                  </h3>
                  <span className="text-[13px] font-medium text-brand-teal">
                    {work.type}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-[1.7] text-brand-ink-muted">
                  {work.description ?? <TbdText>작품 소개 준비 중</TbdText>}
                </p>
                <p className="mt-3 text-[13px] text-brand-ink-muted">
                  전시:{" "}
                  {work.exhibitionYear ?? <TbdText>연도 확인 중</TbdText>}
                  {work.publishYear && (
                    <>
                      {" · "}사진집 발간: {work.publishYear}
                      {work.publisher ? ` · 출판: ${work.publisher}` : ""}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-brand-navy/10 pt-12 md:mt-20">
          <p className="text-[15px] font-semibold text-brand-teal">부산국제사진제 전시기획</p>
          <h3 className="mt-2 max-w-2xl text-balance font-heading text-xl font-semibold text-brand-navy-deep md:text-2xl">
            제1회부터 제3회까지, 전시기획자로 함께한 시간
          </h3>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-brand-ink-muted">
            {bipfIntro}
          </p>

          <ol className="mt-8 flex flex-col gap-4">
            {bipfEditions.map((edition) => (
              <li
                key={edition.edition}
                className="flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-white p-5 sm:flex-row sm:items-start"
              >
                <div className="flex shrink-0 gap-3 sm:w-44 sm:flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-navy/5">
                    <LightboxImage
                      src={edition.image}
                      alt={`${edition.edition} 부산국제사진제 도록`}
                      sizes="(min-width: 640px) 176px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:mt-1">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy-deep text-[13px] font-semibold text-brand-ivory">
                      {edition.edition.replace("제", "").replace("회", "")}회
                    </span>
                    <span className="text-[14px] font-medium text-brand-ink-muted">
                      {edition.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-[16px] font-semibold text-brand-navy-deep">
                    {edition.theme}
                  </p>
                  <p className="mt-1 text-[14px] text-brand-teal">{edition.role}</p>
                  <div className="mt-2 flex flex-col gap-1 text-[13px] text-brand-ink-muted sm:flex-row sm:gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 shrink-0" />
                      {edition.venue}
                    </span>
                    <span>{edition.period}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
