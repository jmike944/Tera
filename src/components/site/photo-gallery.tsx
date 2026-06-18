"use client";

import * as React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import {
  ExpandHint,
  Lightbox,
  useLightbox,
  type LightboxItem,
} from "@/components/ui/lightbox";

const INITIAL_VISIBLE = 12;

function buildPhotos(slug: string, count: number, modelName: string): LightboxItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/models/${slug}/photos/${n}.jpg`,
      alt: `${modelName} — foto ${i + 1}`,
      caption: `${modelName} — foto ${i + 1} de ${count}`,
    };
  });
}

export function PhotoGallery({
  slug,
  count,
  modelName,
}: {
  slug: string;
  count: number;
  modelName: string;
}) {
  const photos = React.useMemo(
    () => buildPhotos(slug, count, modelName),
    [slug, count, modelName],
  );
  const [showAll, setShowAll] = React.useState(false);
  const lb = useLightbox(photos);

  const visible = showAll ? photos : photos.slice(0, INITIAL_VISIBLE);

  return (
    <div>
      <div className="grid gap-2.5 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {visible.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => lb.openAt(i)}
            aria-label={`Ver foto ${i + 1} de ${count}`}
            className="group relative overflow-hidden rounded-[var(--radius-sm)] border border-[color:var(--border)] bg-[color:var(--surface-sunken)] cursor-zoom-in transition-shadow duration-[var(--dur-base)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-md)]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
              className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-[var(--dur-base)] group-hover:opacity-100" />
            <ExpandHint className="absolute bottom-2 right-2 opacity-0 transition-opacity duration-[var(--dur-base)] group-hover:opacity-100" />
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
            <Icon
              name={showAll ? "chevron-up" : "images"}
              size={16}
            />
            {showAll
              ? "Mostrar menos"
              : `Ver las ${count} fotos`}
          </button>
        </div>
      ) : null}

      <Lightbox {...lb.bind} />
    </div>
  );
}
