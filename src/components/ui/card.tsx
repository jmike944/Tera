"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  padded?: boolean;
};

export function Card({
  interactive,
  padded = true,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[color:var(--surface-card)] rounded-[var(--radius-lg)] border border-[color:var(--border)] shadow-[var(--shadow-sm)]",
        padded && "p-[var(--space-5)]",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-[var(--dur-base)] ease-[var(--ease-out)] cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] hover:border-[color:var(--border-strong)]",
        "overflow-hidden",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
