import { doctorInfo, doctorStory } from "@/lib/site-config";
import { LightboxImage } from "@/components/landing/lightbox-image";
import { TbdText } from "@/components/landing/placeholder";

export function DoctorSection() {
  return (
    <section id="doctor" className="scroll-mt-16 bg-brand-ivory/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">원장 소개</p>
        <h2 className="mt-2 text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          최원락 원장은 누구인가
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:gap-14">
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <LightboxImage
                src={doctorInfo.photographerNoteImage}
                alt="최원락 원장 — 《Life, Art, and Death》"
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <p className="font-heading text-xl font-semibold text-brand-navy-deep">
                {doctorInfo.name}
              </p>
              <p className="text-[15px] text-brand-ink-muted">{doctorInfo.title}</p>
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-[17px] leading-[1.7] text-brand-ink">
              {doctorInfo.introCopy}
            </p>

            <p className="mt-4 max-w-2xl text-[17px] leading-[1.7] text-brand-ink">
              {doctorInfo.photographerNote}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {doctorInfo.bioItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-brand-navy/10 bg-white p-4"
                >
                  <dt className="text-[13px] font-medium text-brand-ink-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[15px] font-medium whitespace-pre-line text-brand-ink">
                    {item.value ?? <TbdText>확인 후 공개</TbdText>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 max-w-3xl md:mt-20">
          {doctorStory.map((section) => (
            <div key={section.heading} className="mt-10 first:mt-0">
              <h3 className="font-heading text-lg font-semibold text-brand-navy-deep md:text-xl">
                {section.heading}
              </h3>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-[16px] leading-[1.8] text-brand-ink"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
