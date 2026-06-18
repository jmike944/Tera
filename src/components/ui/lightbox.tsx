"use client";

import * as React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange?: (i: number) => void;
};

export function Lightbox({
  items,
  index,
  open,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const total = items.length;
  const hasMany = total > 1;
  const item = items[index];

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasMany || !onIndexChange) return;
      if (e.key === "ArrowRight") onIndexChange((index + 1) % total);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hasMany, index, total, onIndexChange, onClose]);

  if (!open || !item) return null;

  const goNext = () => onIndexChange?.((index + 1) % total);
  const goPrev = () => onIndexChange?.((index - 1 + total) % total);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[120] flex items-center justify-center animate-[fadein_var(--dur-base)_var(--ease-out)]"
      style={{
        background: "rgba(6,40,58,0.92)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      {/* Close */}
      <div className="absolute top-4 right-4 z-10">
        <IconButton
          label="Cerrar"
          variant="glass"
          size="md"
          onClick={onClose}
        >
          <Icon name="x" size={20} />
        </IconButton>
      </div>

      {/* Counter */}
      {hasMany ? (
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[12px] font-semibold text-white"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          {index + 1} / {total}
        </div>
      ) : null}

      {/* Prev / Next */}
      {hasMany ? (
        <>
          <button
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/22 backdrop-blur-md transition-colors"
          >
            <Icon name="chevron-left" size={22} />
          </button>
          <button
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/22 backdrop-blur-md transition-colors"
          >
            <Icon name="chevron-right" size={22} />
          </button>
        </>
      ) : null}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-full max-w-[min(95vw,1600px)] max-h-[88vh] flex items-center justify-center p-6"
      >
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="95vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Caption */}
      {item.caption ? (
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-[80vw] rounded-full px-4 py-2 text-center text-[13px] font-medium text-white"
          style={{ background: "rgba(255,255,255,0.1)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {item.caption}
        </div>
      ) : null}
    </div>
  );
}

/* Hook + button helper to turn any image into an expandable trigger */
export function useLightbox(items: LightboxItem[]) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const openAt = React.useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);
  const close = React.useCallback(() => setOpen(false), []);
  return {
    open,
    index,
    items,
    setIndex,
    openAt,
    close,
    bind: { items, index, open, onClose: close, onIndexChange: setIndex },
  };
}

/* "Expand" affordance pill — pair with role=button trigger */
export function ExpandHint({ className }: { className?: string }) {
  return (
    <span
      className={
        "pointer-events-none inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md " +
        (className ?? "")
      }
      style={{ background: "rgba(6,40,58,0.55)" }}
    >
      <Icon name="maximize-2" size={14} />
      Ver en grande
    </span>
  );
}
