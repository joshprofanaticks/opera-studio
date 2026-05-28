"use client";

import { useCotiza } from "./CotizaProvider";

type Variant = "default" | "compact" | "inverse";

interface CotizaCTAProps {
  label?: string;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default:
    "border border-ink/30 text-ink px-5 py-3 hover:bg-ink hover:text-paper",
  compact:
    "border border-ink/30 text-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper",
  inverse:
    "border border-paper/30 text-paper px-5 py-3 hover:bg-paper hover:text-ink",
};

export function CotizaCTA({
  label = "Cotiza tu proyecto",
  variant = "default",
  className = "",
}: CotizaCTAProps) {
  const { setOpen } = useCotiza();

  return (
    <button
      type="button"
      data-cursor="hover"
      onClick={() => setOpen(true)}
      className={`group inline-flex items-center gap-3 rounded-full transition-colors ${variantClasses[variant]} ${className}`}
    >
      <span className="label">{label}</span>
      <span className="text-signal group-hover:translate-x-1 transition-transform">
        →
      </span>
    </button>
  );
}
