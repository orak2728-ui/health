"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-ivory/75 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">자주 묻는 질문</p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-brand-navy-deep md:text-3xl">
          방문 전에 무엇을 알아야 하나
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  data-event="open_faq"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-11"
                >
                  <span className="text-[16px] font-medium text-brand-ink">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-brand-ink-muted transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[15px] leading-[1.7] text-brand-ink-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
