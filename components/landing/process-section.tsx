import {
  ClipboardList,
  MessageSquareText,
  RefreshCw,
  Stethoscope,
  TestTube,
} from "lucide-react";

import { processSteps } from "@/lib/site-config";

const ICONS = [ClipboardList, TestTube, MessageSquareText, Stethoscope, RefreshCw];

export function ProcessSection() {
  return (
    <section className="bg-brand-ivory-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">진료 과정</p>
        <h2 className="mt-2 max-w-2xl text-balance font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          어떻게 관리하는가
        </h2>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = ICONS[index];
            return (
              <li
                key={step.title}
                className="rounded-2xl border border-brand-navy/10 bg-white p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-navy-deep text-[13px] font-semibold text-brand-ivory">
                    {index + 1}
                  </span>
                  <Icon className="size-5 text-brand-teal" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 font-heading text-[16px] font-semibold text-brand-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-brand-ink-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
