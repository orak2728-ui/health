import { doctorInfo, doctorMessage } from "@/lib/site-config";

export function DoctorMessageSection() {
  return (
    <section className="bg-brand-navy-deep/75 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="text-[15px] font-semibold text-brand-teal">원장 메시지</p>
        <blockquote className="mt-4 text-balance font-heading text-xl leading-[1.6] font-medium text-brand-ivory md:text-2xl">
          “{doctorMessage}”
        </blockquote>
        <p className="mt-6 text-[15px] text-brand-ivory/70">
          {doctorInfo.name} · {doctorInfo.title}
        </p>
      </div>
    </section>
  );
}
