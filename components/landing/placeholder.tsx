import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function TbdText({
  className,
  children = "정보 확인 중",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-dashed border-brand-warm-deep/50 bg-brand-warm/10 px-2.5 py-0.5 text-[0.8em] font-medium text-brand-warm-deep",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ImagePlaceholder({
  label,
  className,
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} 이미지 준비 중`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-navy/25 bg-brand-navy/5 p-6 text-center text-brand-ink-muted",
        ratio,
        className
      )}
    >
      <ImageIcon className="size-8 shrink-0 opacity-50" strokeWidth={1.5} />
      <span className="text-sm leading-snug">{label}</span>
    </div>
  );
}
