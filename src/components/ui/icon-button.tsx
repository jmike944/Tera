"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: Variant;
  size?: Size;
};

const sizes: Record<Size, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-[color:var(--ink-900)] text-white hover:bg-[color:var(--ink-800)]",
  ghost:
    "bg-transparent text-[color:var(--text-body)] hover:bg-[color:var(--surface-sunken)] hover:text-[color:var(--brand-strong)]",
  glass:
    "bg-white/12 text-white hover:bg-white/22 backdrop-blur-md",
};

export function IconButton({
  label,
  variant = "ghost",
  size = "md",
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors duration-[var(--dur-fast)] outline-none focus-visible:shadow-[var(--shadow-focus)]",
        sizes[size],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
