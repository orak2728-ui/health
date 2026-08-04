import { trustStats } from "@/lib/site-config";
import { TbdText } from "@/components/landing/placeholder";

export function TrustStatsSection() {
  return (
    <section className="border-y border-brand-navy/10 bg-brand-navy-deep/75">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 md:px-8 md:py-14">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex items-baseline justify-center gap-1 font-heading text-3xl font-semibold text-brand-ivory md:text-4xl">
              {stat.value ? (
                <>
                  {stat.value}
                  <span className="text-lg font-medium text-brand-ivory/80 md:text-xl">
                    {stat.suffix}
                  </span>
                </>
              ) : (
                <TbdText className="border-brand-ivory/40 bg-brand-ivory/10 text-brand-ivory">
                  {stat.suffix} 확인 중
                </TbdText>
              )}
            </div>
            <p className="mt-2 text-[15px] text-brand-ivory/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
