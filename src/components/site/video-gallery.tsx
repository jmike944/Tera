"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";

const INITIAL_VISIBLE = 12;

type VideoModalProps = {
  src: string | null;
  label: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  index: number;
  total: number;
};

function VideoModal({
  src,
  label,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: VideoModalProps) {
  React.useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose, onPrev, onNext]);

  if (!src) return null;
  const hasNav = (onPrev || onNext) && total > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[120] flex items-center justify-center animate-[fadein_var(--dur-base)_var(--ease-out)]"
      style={{
        background: "rgba(6,40,58,0.92)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-10">
        <IconButton label="Cerrar" variant="glass" size="md" onClick={onClose}>
          <Icon name="x" size={20} />
        </IconButton>
      </div>
      {hasNav ? (
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[12px] font-semibold text-white"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          {index + 1} / {total}
        </div>
      ) : null}
      {hasNav ? (
        <>
          <button
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              onPrev?.();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/22 backdrop-blur-md transition-colors"
          >
            <Icon name="chevron-left" size={22} />
          </button>
          <button
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/22 backdrop-blur-md transition-colors"
          >
            <Icon name="chevron-right" size={22} />
          </button>
        </>
      ) : null}
      {/* Player — sized to viewport while keeping the natural 9:16 portrait
          shape (all real videos in the bundle are 720x1280). */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center justify-center"
        style={{
          height: "min(88vh, 1280px)",
          aspectRatio: "9 / 16",
          maxWidth: "92vw",
        }}
      >
        <video
          key={src}
          src={src}
          controls
          autoPlay
          playsInline
          className="block h-full w-full rounded-[var(--radius-lg)] bg-black"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-[80vw] rounded-full px-4 py-2 text-center text-[13px] font-medium text-white"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </div>
    </div>
  );
}

export function VideoGallery({
  slug,
  count,
  modelName,
}: {
  slug: string;
  count: number;
  modelName: string;
}) {
  const [showAll, setShowAll] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const visible = showAll ? count : Math.min(count, INITIAL_VISIBLE);
  const visibleRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  React.useEffect(() => {
    // Pause every preview when the modal opens so audio doesn't double up.
    if (openIndex !== null) {
      visibleRefs.current.forEach((v) => v?.pause());
    }
  }, [openIndex]);

  const srcOf = (idx: number) =>
    `/models/${slug}/videos/${String(idx + 1).padStart(2, "0")}.mp4`;

  return (
    <div>
      <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {Array.from({ length: visible }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Reproducir video ${i + 1} de ${count}`}
            className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--border)] bg-black transition-shadow duration-[var(--dur-base)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-md)]"
            style={{ aspectRatio: "9 / 16", boxShadow: "var(--shadow-sm)" }}
          >
            <video
              ref={(el) => {
                visibleRefs.current[i] = el;
              }}
              // #t=0.5 forces iOS Safari / mobile WebKit to fetch the frame
              // at 0.5s so something is visible before the user taps play
              // (otherwise the thumbnail renders as a black box).
              src={`${srcOf(i)}#t=0.5`}
              preload="metadata"
              muted
              playsInline
              disablePictureInPicture
              onLoadedMetadata={(e) => {
                // Some mobile WebKits still won't render until currentTime
                // is touched. Nudge to the same fragment time.
                const v = e.currentTarget;
                if (v.currentTime < 0.5) {
                  try {
                    v.currentTime = 0.5;
                  } catch {
                    /* ignore */
                  }
                }
              }}
              className="pointer-events-none absolute inset-0 h-full w-full bg-black object-cover"
              tabIndex={-1}
            />
            {/* gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            {/* play badge */}
            <span
              className="absolute inset-0 flex items-center justify-center transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:scale-110"
              aria-hidden
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.22)", color: "#fff" }}
              >
                <Icon name="play" size={22} className="ml-0.5" />
              </span>
            </span>
            <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-mono font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {count > INITIAL_VISIBLE ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] px-5 py-2.5 text-[14px] font-semibold text-[color:var(--text-strong)] transition-colors hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)]"
          >
            <Icon name={showAll ? "chevron-up" : "play"} size={16} />
            {showAll ? "Mostrar menos" : `Ver los ${count} videos`}
          </button>
        </div>
      ) : null}

      <VideoModal
        src={openIndex === null ? null : srcOf(openIndex)}
        label={
          openIndex === null
            ? ""
            : `${modelName} — video ${openIndex + 1} de ${count}`
        }
        onClose={() => setOpenIndex(null)}
        onPrev={() =>
          setOpenIndex((i) => (i === null ? null : (i - 1 + count) % count))
        }
        onNext={() =>
          setOpenIndex((i) => (i === null ? null : (i + 1) % count))
        }
        index={openIndex ?? 0}
        total={count}
      />
    </div>
  );
}
