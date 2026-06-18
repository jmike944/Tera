"use client";

import * as React from "react";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { PropertyCard } from "@/components/ui/property-card";
import { Icon } from "@/components/ui/icon";
import { modelos } from "@/lib/models";

const filters: [string, string][] = [
  ["todos", "Todos los modelos"],
  ["compacto", "Hasta 200 m²"],
  ["amplio", "Más de 200 m²"],
];

export function Developments() {
  const [filter, setFilter] = React.useState<string>("todos");

  const shown = modelos.filter((m) => {
    const n = parseFloat(m.m2);
    if (filter === "todos") return true;
    if (filter === "compacto") return n < 200;
    return n >= 200;
  });

  return (
    <section
      id="modelos"
      className="px-[var(--space-6)] py-[88px]"
      style={{ background: "var(--surface-card)" }}
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="tera-eyebrow mb-2.5">
              FRACCIONAMIENTO HACIENDA EL MILAGRO · SALTILLO
            </div>
            <h2
              className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)]"
              style={{
                fontSize: "var(--text-3xl)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Modelos para construir a tu medida
            </h2>
            <Link
              href="/desarrollo-hem"
              className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--link)" }}
            >
              Conoce el desarrollo y sus amenidades{" "}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {filters.map(([id, label]) => (
              <Tag
                key={id}
                selected={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </Tag>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((m) => (
            <PropertyCard
              key={m.slug}
              image={m.render}
              title={m.nombre}
              location="Hacienda El Milagro · Saltillo"
              status={m.status}
              tag={m.chip}
              price={"Desde " + m.precioDesde}
              specs={[
                { value: m.m2, unit: "m²", label: "Construcción" },
                { value: "3", label: "Recámaras" },
                { value: "2.5", label: "Baños" },
              ]}
              href={`/modelo/${m.slug}`}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-[14px] text-[color:var(--text-muted)]">
          Precios del brochure de ventas HEM Marzo 2026. No incluyen gastos
          notariales ni escrituración · renders ilustrativos.
        </p>
      </div>
    </section>
  );
}
