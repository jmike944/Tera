import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "brand" | "accent" | "available" | "progress" | "soon";
type Variant = "soft" | "solid" | "outline";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  variant?: Variant;
  dot?: boolean;
};

const palettes: Record<Tone, { dot: string; soft: string; solid: string }> = {
  neutral: {
    dot: "#73848F",
    soft: "bg-[color:var(--surface-sunken)] text-[color:var(--ink-900)]",
    solid: "bg-[color:var(--neutral-800)] text-white",
  },
  brand: {
    dot: "#119FD6",
    soft: "bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)]",
    solid: "bg-[image:var(--grad-brand)] text-white",
  },
  accent: {
    dot: "#D98E5A",
    soft: "bg-[#FBEEDD] text-[color:var(--clay-600)]",
    solid: "bg-[color:var(--clay-500)] text-white",
  },
  available: {
    dot: "#1F9D6B",
    soft: "bg-[color:var(--green-50)] text-[color:var(--green-500)]",
    solid: "bg-[color:var(--green-500)] text-white",
  },
  progress: {
    dot: "#E0A12E",
    soft: "bg-[color:var(--amber-50)] text-[color:var(--amber-500)]",
    solid: "bg-[color:var(--amber-500)] text-white",
  },
  soon: {
    dot: "#73848F",
    soft: "bg-[color:var(--surface-sunken)] text-[color:var(--neutral-600)]",
    solid: "bg-[color:var(--neutral-600)] text-white",
  },
};

export function Badge({
  tone = "neutral",
  variant = "soft",
  dot,
  className,
  children,
  ...rest
}: BadgeProps) {
  const palette = palettes[tone];
  const styles =
    variant === "solid"
      ? palette.solid
      : variant === "outline"
        ? "bg-transparent border border-[color:var(--border-strong)] text-[color:var(--ink-900)]"
        : palette.soft;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-2.5 py-1 text-[11px] font-bold tracking-[0.04em] uppercase",
        styles,
        className,
      )}
      {...rest}
    >
      {dot ? (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: variant === "solid" ? "rgba(255,255,255,0.85)" : palette.dot,
          }}
        />
      ) : null}
      <span className="leading-none">{children}</span>
    </span>
  );
}
