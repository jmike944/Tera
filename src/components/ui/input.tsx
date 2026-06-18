"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  iconLeft?: React.ReactNode;
  hint?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, iconLeft, hint, error, className, id, ...rest }, ref) {
    const reactId = React.useId();
    const inputId = id ?? reactId;
    return (
      <label htmlFor={inputId} className="flex flex-col gap-1.5">
        {label ? (
          <span className="font-semibold text-[13px] text-[color:var(--ink-900)]">
            {label}
          </span>
        ) : null}
        <span
          className={cn(
            "flex items-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--border-strong)] bg-white pl-3 pr-1 h-11 transition-[border-color,box-shadow] duration-[var(--dur-fast)]",
            "focus-within:border-[color:var(--brand)] focus-within:shadow-[var(--shadow-focus)]",
            error && "border-[color:var(--red-500)]",
          )}
        >
          {iconLeft ? (
            <span className="text-[color:var(--text-muted)] inline-flex shrink-0">
              {iconLeft}
            </span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[color:var(--ink-900)] placeholder:text-[color:var(--neutral-400)]",
              className,
            )}
            {...rest}
          />
        </span>
        {hint && !error ? (
          <span className="text-[12px] text-[color:var(--text-muted)]">{hint}</span>
        ) : null}
        {error ? (
          <span className="text-[12px] text-[color:var(--red-500)]">{error}</span>
        ) : null}
      </label>
    );
  },
);
