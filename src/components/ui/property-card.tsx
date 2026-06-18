"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { ModelStatus } from "@/lib/models";

type Spec = { value: string | number; unit?: string; label: string };

type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  status: ModelStatus;
  tag?: string;
  price: string;
  specs: Spec[];
  href: string;
};

export function PropertyCard({
  image,
  title,
  location,
  status,
  tag,
  price,
  specs,
  href,
}: PropertyCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border)] overflow-hidden shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color] duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] hover:border-[color:var(--border-strong)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--surface-sunken)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge tone={status.tone} variant="solid" dot>
            {status.label}
          </Badge>
        </div>
        {tag ? (
          <div className="absolute bottom-3 right-3">
            <Badge tone="accent">{tag}</Badge>
          </div>
        ) : null}
      </div>
      <div className="p-[var(--space-5)] flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)] text-[22px] leading-none tracking-[-0.01em]">
              {title}
            </h3>
            <div className="mt-1 text-[13px] text-[color:var(--text-muted)] font-medium">
              {location}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[10px] uppercase tracking-[0.1em] text-[color:var(--text-muted)] font-bold">
              Precio
            </div>
            <div className="font-[var(--font-display)] font-extrabold text-[color:var(--text-strong)] text-[17px] tabular-nums leading-tight">
              {price}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 pt-3 border-t border-[color:var(--border)]">
          {specs.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <div className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)] text-[15px] leading-none tabular-nums">
                {s.value}
                {s.unit ? (
                  <span className="ml-0.5 text-[12px] text-[color:var(--text-muted)] font-mono font-medium">
                    {s.unit}
                  </span>
                ) : null}
              </div>
              <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--text-muted)] font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
