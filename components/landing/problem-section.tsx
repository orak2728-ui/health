import { problemStatements } from "@/lib/site-config";

export function ProblemSection() {
  return (
    <section className="bg-brand-ivory-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">이런 고민이 있으신가요</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          나에게 필요한 병원인지 궁금하시다면
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problemStatements.map((text) => (
            <div
              key={text}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6"
            >
              <p className="text-[16px] leading-[1.7] text-brand-ink">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
