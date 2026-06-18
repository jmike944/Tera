"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export function Tag({ selected, className, children, ...rest }: TagProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center h-9 px-4 rounded-[var(--radius-pill)] text-[13px] font-semibold transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)]",
        selected
          ? "bg-[color:var(--ink-900)] text-white border border-[color:var(--ink-900)] shadow-[var(--shadow-sm)]"
          : "bg-white text-[color:var(--text-body)] border border-[color:var(--border-strong)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
