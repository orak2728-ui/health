import { Activity, FlaskConical, HeartPulse, Search } from "lucide-react";

import { coreValues } from "@/lib/site-config";

const ICONS = {
  cancer: Activity,
  chronic: HeartPulse,
  screening: Search,
  comprehensive: FlaskConical,
} as const;

export function CoreValuesSection() {
  return (
    <section className="bg-brand-ivory/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">핵심 진료 가치</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          무엇을 잘하는가
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {coreValues.map((value) => {
            const Icon = ICONS[value.id as keyof typeof ICONS];
            return (
              <div
                key={value.id}
                className="rounded-2xl border border-brand-navy/10 bg-white p-6 md:p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy-deep">
                  {value.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {value.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[15px] leading-[1.7] text-brand-ink-muted"
                    >
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-brand-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
