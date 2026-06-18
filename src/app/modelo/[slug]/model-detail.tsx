"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Stat } from "@/components/ui/stat";
import { useContactModal } from "@/components/site/contact-context";
import { modelos, type ModeloFull } from "@/lib/models";

function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <div className="tera-eyebrow mb-2.5">{eyebrow}</div>
      <h2
        className="font-[var(--font-display)] font-bold text-[color:var(--ink-900)]"
        style={{
          fontSize: "var(--text-3xl)",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 py-2">
      <span
        className="mt-0.5 flex shrink-0"
        style={{ color: "var(--green-500)" }}
      >
        <Icon name="check" size={16} />
      </span>
      <span className="text-[14px] font-medium text-[color:var(--text-body)] leading-snug">
        {children}
      </span>
    </li>
  );
}

function ProgramItem({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <li className="flex items-start gap-3 border-b border-[color:var(--border)] py-2.5">
      <span
        className="mt-0.5 flex shrink-0"
        style={{ color: "var(--brand)" }}
      >
        <Icon name={icon} size={18} />
      </span>
      <span
        className="flex-1 text-[color:var(--text-body)]"
        style={{ font: "var(--type-body)" }}
      >
        {label}
      </span>
    </li>
  );
}

export function ModelDetail({ modelo: m }: { modelo: ModeloFull }) {
  const { setOpen: setContact } = useContactModal();
  const others = modelos.filter((x) => x.slug !== m.slug);

  return (
    <div>
      {/* breadcrumb */}
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--space-6)] pt-5">
        <div className="flex items-center gap-2 text-[14px] text-[color:var(--text-muted)]">
          <Link href="/" className="hover:text-[color:var(--brand-strong)]">
            Inicio
          </Link>
          <Icon name="chevron-right" size={14} />
          <Link
            href="/desarrollo-hem"
            className="hover:text-[color:var(--brand-strong)]"
          >
            Hacienda El Milagro
          </Link>
          <Icon name="chevron-right" size={14} />
          <span className="font-semibold text-[color:var(--ink-900)]">
            {m.nombre}
          </span>
        </div>
      </div>

      {/* hero */}
      <section className="mx-auto grid max-w-[var(--container-wide)] items-center gap-[var(--space-7)] px-[var(--space-6)] py-7 pb-14 md:grid-cols-[1.15fr_0.85fr]">
        <div
          className="relative overflow-hidden rounded-[var(--radius-xl)]"
          style={{
            boxShadow: "var(--shadow-xl)",
            background: "var(--surface-sunken)",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src={m.render}
            alt={`Render ${m.nombre}`}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <div className="mb-3.5 flex flex-wrap gap-2">
            <Badge tone={m.status.tone} variant="solid" dot>
              {m.status.label}
            </Badge>
            <Badge tone="accent">{m.etiqueta}</Badge>
          </div>
          <div className="tera-eyebrow mb-2">
            {m.fraccionamiento} · {m.ciudad}
          </div>
          <h1
            className="mb-4 font-[var(--font-display)] font-extrabold text-[color:var(--ink-900)]"
            style={{
              fontSize: "var(--text-5xl)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            {m.nombre}
          </h1>
          <p
            className="mb-6 text-[color:var(--text-body)]"
            style={{ font: "var(--type-lead)" }}
          >
            {m.resumen}
          </p>
          <div className="mb-5 grid grid-cols-2 gap-[var(--space-6)] border-y border-[color:var(--border)] py-4 sm:grid-cols-4">
            <Stat value={m.m2} unit="m²" label="Construcción" />
            <Stat value={m.recamaras} label="Recámaras" />
            <Stat value={m.banos} label="Baños" />
            <Stat value={m.niveles} label="Niveles" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                Precio desde
              </div>
              <div
                className="font-[var(--font-display)] font-extrabold text-[color:var(--ink-900)] tabular-nums"
                style={{
                  fontSize: "var(--text-4xl)",
                  lineHeight: 1,
                }}
              >
                {m.precioDesde}
                <span
                  className="ml-1.5 font-medium"
                  style={{
                    fontSize: "var(--text-md)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  MXN
                </span>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => setContact(true)}
              iconRight={<Icon name="arrow-right" size={20} />}
            >
              Agenda una visita
            </Button>
          </div>
        </div>
      </section>

      {/* planos y programa */}
      <section
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead eyebrow="DISTRIBUCIÓN" title="Planos y programa" />
          {[
            {
              label: "Planta baja",
              badge: "Nivel 1",
              img: `/models/${m.slug}/plano-pb.png`,
              items: m.plantaBaja,
            },
            {
              label: "Planta alta",
              badge: "Nivel 2",
              img: `/models/${m.slug}/plano-pa.png`,
              items: m.plantaAlta,
            },
          ].map((lvl, idx) => (
            <div
              key={lvl.label}
              className={
                "grid items-center gap-[var(--space-7)] md:grid-cols-[0.85fr_1.15fr] " +
                (idx
                  ? "mt-[var(--space-7)] border-t border-[color:var(--border)] pt-[var(--space-7)]"
                  : "")
              }
            >
              <figure className="m-0">
                <div
                  className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-white p-3.5"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <Image
                    src={lvl.img}
                    alt={`${lvl.label} — ${m.nombre}`}
                    width={900}
                    height={700}
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] font-semibold text-[color:var(--text-muted)]">
                  Plano · {lvl.label.toLowerCase()}
                </figcaption>
              </figure>
              <div>
                <div className="mb-2 flex items-center gap-2.5">
                  <h3
                    className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                    style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                  >
                    {lvl.label}
                  </h3>
                  <Badge tone="brand">{lvl.badge}</Badge>
                </div>
                <ul className="m-0 grid list-none gap-x-[var(--space-6)] p-0 sm:grid-cols-2">
                  {lvl.items.map(([icon, label]) => (
                    <ProgramItem key={label} icon={icon} label={label} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* galería */}
      <section
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-page)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead
            eyebrow="OBRA Y ACABADOS"
            title="Así se ve por dentro y por fuera"
          />
          <div
            className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border)]"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <Image
              src={m.galeria}
              alt={`Galería ${m.nombre}`}
              width={1600}
              height={1000}
              sizes="(max-width: 1280px) 100vw, 1100px"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3.5 text-[14px] text-[color:var(--text-muted)]">
            Fotografías de obra de un ejemplar construido del modelo {m.nombre}.
          </p>
        </div>
      </section>

      {/* Quality Build */}
      <section
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead
            eyebrow="TERA QUALITY BUILD"
            title="Todo lo que incluye tu construcción"
          />
          <div className="grid gap-[var(--space-6)] md:grid-cols-3">
            <Card>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex" style={{ color: "var(--brand)" }}>
                  <Icon name="shield-check" size={22} />
                </span>
                <h4
                  className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                  style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                >
                  Construcción
                </h4>
              </div>
              <ul className="m-0 list-none p-0">
                {m.quality.map((q) => (
                  <Check key={q}>{q}</Check>
                ))}
              </ul>
            </Card>
            <Card>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex" style={{ color: "var(--brand)" }}>
                  <Icon name="sparkles" size={22} />
                </span>
                <h4
                  className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                  style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                >
                  Acabados de alta gama
                </h4>
              </div>
              <ul className="m-0 list-none p-0">
                {m.acabados.map((a) => (
                  <Check key={a}>{a}</Check>
                ))}
              </ul>
            </Card>
            <Card>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex" style={{ color: "var(--brand)" }}>
                  <Icon name="plug-zap" size={22} />
                </span>
                <h4
                  className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                  style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                >
                  Equipamiento
                </h4>
              </div>
              <ul className="m-0 list-none p-0">
                {m.equipamiento.map((e) => (
                  <Check key={e}>{e}</Check>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* precios y disponibilidad */}
      <section
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-page)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead
            eyebrow="PRECIOS Y DISPONIBILIDAD"
            title="Elige cómo adquirirla"
          />
          <div className="grid items-stretch gap-[var(--space-6)] md:grid-cols-2">
            {m.entregaInmediata ? (
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className="flex"
                    style={{ color: "var(--green-500)" }}
                  >
                    <Icon name="key-round" size={22} />
                  </span>
                  <h4
                    className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                    style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                  >
                    Entrega inmediata
                  </h4>
                </div>
                {m.entregaInmediata.map((o, i) => (
                  <div
                    key={o.tipo}
                    className={
                      "flex items-baseline justify-between py-3.5 " +
                      (i ? "border-t border-[color:var(--border)]" : "")
                    }
                  >
                    <span
                      className="text-[color:var(--text-body)]"
                      style={{ font: "var(--type-body)" }}
                    >
                      {o.tipo}
                    </span>
                    <span
                      className="font-[var(--font-display)] font-bold tabular-nums text-[color:var(--ink-900)]"
                      style={{ fontSize: "var(--text-xl)" }}
                    >
                      {o.precio}
                    </span>
                  </div>
                ))}
                <div className="flex-1" />
                <Button
                  fullWidth
                  onClick={() => setContact(true)}
                  className="mt-4"
                  iconRight={<Icon name="arrow-right" size={18} />}
                >
                  Agenda una visita
                </Button>
              </Card>
            ) : null}
            {m.construccion ? (
              <Card
                className="flex flex-col border-0"
                style={{ background: "var(--ink-900)" }}
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className="flex"
                    style={{ color: "var(--tera-aqua)" }}
                  >
                    <Icon name="hard-hat" size={22} />
                  </span>
                  <h4
                    className="font-[var(--font-display)] font-semibold text-white"
                    style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                  >
                    Por construcción
                  </h4>
                </div>
                <div className="flex items-baseline justify-between py-3.5">
                  <span
                    style={{
                      font: "var(--type-body)",
                      color: "rgba(220,234,241,0.8)",
                    }}
                  >
                    Precio por m²
                  </span>
                  <span
                    className="font-semibold tabular-nums text-white"
                    style={{
                      fontSize: "var(--text-lg)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {m.construccion.precioM2}
                  </span>
                </div>
                <div
                  className="flex items-baseline justify-between py-3.5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span
                    style={{
                      font: "var(--type-body)",
                      color: "rgba(220,234,241,0.8)",
                    }}
                  >
                    Precio total ({m.m2} m²)
                  </span>
                  <span
                    className="font-[var(--font-display)] font-bold tabular-nums text-white"
                    style={{ fontSize: "var(--text-2xl)", lineHeight: 1.2 }}
                  >
                    {m.construccion.total}
                  </span>
                </div>
                <div className="flex-1" />
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => setContact(true)}
                  className="mt-4"
                  iconRight={<Icon name="calendar" size={18} />}
                >
                  Solicitar cotización
                </Button>
              </Card>
            ) : null}
          </div>
          <p className="mt-5 max-w-[720px] text-[11px] leading-relaxed text-[color:var(--text-muted)]">
            {m.notas}
          </p>
        </div>
      </section>

      {/* otros modelos */}
      <section
        className="px-[var(--space-6)] py-[72px]"
        style={{
          background: "var(--surface-card)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead eyebrow="HACIENDA EL MILAGRO" title="Otros modelos" />
          <div className="grid gap-[var(--space-6)] md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/modelo/${o.slug}`}
                className="block"
              >
                <Card
                  interactive
                  padded={false}
                  className="flex items-stretch"
                >
                  <div className="relative h-full w-[200px] shrink-0 overflow-hidden">
                    <Image
                      src={o.render}
                      alt={o.nombre}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1.5 p-[var(--space-5)]">
                    <div>
                      <Badge tone={o.status.tone} dot>
                        {o.status.label}
                      </Badge>
                    </div>
                    <h4
                      className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
                      style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
                    >
                      {o.nombre}
                    </h4>
                    <div className="text-[14px] text-[color:var(--text-muted)]">
                      {o.m2} m² · desde {o.precioDesde} MXN
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
