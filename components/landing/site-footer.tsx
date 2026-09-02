import { legalDisclaimer, siteConfig } from "@/lib/site-config";
import { TbdText } from "@/components/landing/placeholder";

export function SiteFooter() {
  const clinicName = siteConfig.clinicName ?? siteConfig.clinicNameFallback;

  return (
    <footer className="bg-brand-navy-deep/75 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <p className="max-w-3xl text-[13px] leading-[1.7] text-brand-ivory/60">
          {legalDisclaimer}
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-brand-ivory/10 pt-6 text-[13px] text-brand-ivory/60">
          <p className="font-medium text-brand-ivory/80">{clinicName}</p>
          <p>
            {siteConfig.address ?? <TbdText className="border-brand-ivory/30 bg-transparent text-brand-ivory/60">주소 확인 중</TbdText>}
            {" · "}
            {siteConfig.phone ?? <TbdText className="border-brand-ivory/30 bg-transparent text-brand-ivory/60">전화번호 확인 중</TbdText>}
          </p>
          {siteConfig.socials.blog && (
            <p>
              <a
                href={siteConfig.socials.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-ivory/30 underline-offset-2 hover:text-brand-ivory/80"
              >
                블로그 바로가기
              </a>
            </p>
          )}
          <p className="mt-2 text-[12px] text-brand-ivory/40">
            © {new Date().getFullYear()} {clinicName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
