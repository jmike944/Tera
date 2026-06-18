import * as React from "react";
import { cn } from "@/lib/utils";

type StatProps = {
  value: string | number;
  unit?: string;
  label: string;
  className?: string;
};

export function Stat({ value, unit, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div
        className="font-[var(--font-display)] font-extrabold text-[color:var(--text-strong)] leading-none tabular-nums"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        {value}
        {unit ? (
          <span
            className="ml-1 font-mono font-medium text-[color:var(--text-muted)]"
            style={{ fontSize: "var(--text-sm)" }}
          >
            {unit}
          </span>
        ) : null}
      </div>
      <div className="font-medium text-[12px] uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
        {label}
      </div>
    </div>
  );
}
