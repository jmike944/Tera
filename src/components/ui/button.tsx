"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px] gap-1.5",
  md: "h-11 px-5 text-[14px] gap-2",
  lg: "h-[52px] px-6 text-[15px] gap-2",
};

const baseClasses =
  "relative inline-flex items-center justify-center rounded-[var(--radius-pill)] font-[var(--font-body)] font-semibold tracking-[-0.005em] " +
  "transition-[transform,box-shadow,background,color] duration-[var(--dur-base)] ease-[var(--ease-out)] " +
  "outline-none focus-visible:shadow-[var(--shadow-focus)] " +
  "active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[var(--shadow-brand)] hover:shadow-[var(--shadow-lg)] " +
    "bg-[image:var(--grad-brand)] bg-[length:200%_100%] bg-left hover:bg-right",
  secondary:
    "text-[color:var(--ink-900)] bg-white border border-[color:var(--border-strong)] " +
    "hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
  ghost:
    "text-[color:var(--text-body)] hover:text-[color:var(--brand-strong)] hover:bg-[color:var(--surface-sunken)]",
  dark: "text-white bg-[color:var(--ink-900)] hover:bg-[color:var(--ink-800)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      fullWidth,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          sizes[size],
          variants[variant],
          fullWidth && "w-full",
          className,
        )}
        {...rest}
      >
        {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
        <span>{children}</span>
        {iconRight ? <span className="inline-flex shrink-0">{iconRight}</span> : null}
      </button>
    );
  },
);
