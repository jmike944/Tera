"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { PropertyCard } from "@/components/ui/property-card";
import { useContactModal } from "@/components/site/contact-context";
import { desarrollo as d, modelos } from "@/lib/models";

function SectionHead({
  eyebrow,
  title,
  center,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mb-8 text-center" : "mb-8"}>
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

export function DesarrolloHEM() {
  const { setOpen: setContact } = useContactModal();

  const scrollToModelos = () => {
    const el = document.getElementById("modelos");
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  return (
    <div>
      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 520px at 80% -10%, #E4F8FC 0%, rgba(228,248,252,0) 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[var(--container-wide)] items-center gap-[var(--space-7)] px-[var(--space-6)] py-[56px] md:grid-cols-2">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge tone="brand" variant="solid" dot>
                {d.estado}
              </Badge>
              <Badge tone="accent">{d.ciudad}</Badge>
            </div>
            <div className="tera-eyebrow mb-2.5">FRACCIONAMIENTO RESIDENCIAL</div>
            <h1
              className="mb-3.5 font-[var(--font-display)] font-extrabold text-[color:var(--ink-900)]"
              style={{
                fontSize: "clamp(40px,4.6vw,68px)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              {d.nombre}
            </h1>
            <p
              className="mb-4 font-[var(--font-display)] font-semibold"
              style={{
                fontSize: "var(--text-xl)",
                color: "var(--brand-strong)",
              }}
            >
              {d.tagline}
            </p>
            <p
              className="mb-7 max-w-[480px] text-[color:var(--text-body)]"
              style={{ font: "var(--type-lead)" }}
            >
              {d.intro}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button
                size="lg"
                onClick={scrollToModelos}
                iconRight={<Icon name="arrow-right" size={20} />}
              >
                Ver modelos
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setContact(true)}
                iconLeft={<Icon name="calendar" size={20} />}
              >
                Agenda una visita
              </Button>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{ boxShadow: "var(--shadow-xl)", aspectRatio: "4 / 3" }}
          >
            <Image
              src={d.galeria.acceso}
              alt="Acceso Hacienda El Milagro"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* características chips */}
      <section
        className="px-[var(--space-6)] py-7"
        style={{
          background: "var(--surface-card)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-[var(--container-wide)] flex-wrap justify-between gap-[var(--space-6)]">
          {d.caracteristicas.map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2.5">
              <span
                className="flex"
                style={{ color: "var(--brand)" }}
              >
                <Icon name={icon} size={20} />
              </span>
              <span className="text-[14px] font-semibold text-[color:var(--ink-900)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ubicación */}
      <section
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-page)" }}
      >
        <div className="mx-auto grid max-w-[var(--container)] items-center gap-[var(--space-7)] md:grid-cols-[1.1fr_0.9fr]">
          <div
            className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border)]"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <Image
              src={d.galeria.ubicacion}
              alt="Ubicación"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 660px"
              className="w-full h-auto"
            />
          </div>
          <div>
            <SectionHead
              eyebrow="UBICACIÓN"
              title="Estratégicamente conectado"
            />
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {d.ubicacion.map(([icon, txt]) => (
                <li key={txt} className="flex items-start gap-3.5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)]"
                    style={{
                      background: "var(--brand-soft)",
                      color: "var(--brand-strong)",
                    }}
                  >
                    <Icon name={icon} size={20} />
                  </span>
                  <span
                    className="self-center text-[color:var(--text-body)]"
                    style={{ font: "var(--type-body)" }}
                  >
                    {txt}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="mt-5 flex items-start gap-2.5 border-t border-[color:var(--border)] pt-5"
            >
              <span
                className="mt-0.5 flex"
                style={{ color: "var(--brand)" }}
              >
                <Icon name="map-pin" size={18} />
              </span>
              <span className="text-[14px] text-[color:var(--text-muted)]">
                {d.direccion}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* servicios */}
      <section
        className="px-[var(--space-6)] py-16"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="mx-auto flex max-w-[var(--container)] flex-wrap items-center gap-[var(--space-7)]">
          <div className="flex-1 min-w-[220px]">
            <div className="tera-eyebrow mb-2">INFRAESTRUCTURA</div>
            <h3
              className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)]"
              style={{ fontSize: "var(--text-2xl)", lineHeight: 1.2 }}
            >
              Servicios completos
            </h3>
          </div>
          <div className="flex flex-[2_1_420px] flex-wrap gap-2.5">
            {d.servicios.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2.5 text-[14px] font-semibold text-[color:var(--ink-900)]"
                style={{ background: "var(--surface-sunken)" }}
              >
                <span
                  className="flex"
                  style={{ color: "var(--green-500)" }}
                >
                  <Icon name="check" size={15} />
                </span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* amenidades */}
      <section
        id="amenidades"
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-page)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead
            eyebrow="AMENIDADES"
            title="Calidad, prestigio y estilo de vida"
          />
          <div className="mb-7 grid gap-3.5 sm:grid-cols-2 md:grid-cols-3">
            {d.amenidades.map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[color:var(--border)] px-[18px] py-3.5"
                style={{ background: "var(--surface-card)" }}
              >
                <span
                  className="flex shrink-0"
                  style={{ color: "var(--brand)" }}
                >
                  <Icon name={icon} size={20} />
                </span>
                <span className="text-[14px] font-medium text-[color:var(--ink-900)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="grid gap-[18px] md:grid-cols-2">
            <div
              className="overflow-hidden rounded-[var(--radius-lg)]"
              style={{ boxShadow: "var(--shadow-md)", aspectRatio: "3 / 2" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={d.galeria.juegos}
                  alt="Juegos infantiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="overflow-hidden rounded-[var(--radius-lg)]"
              style={{ boxShadow: "var(--shadow-md)", aspectRatio: "3 / 2" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={d.galeria.gym}
                  alt="Gimnasio al aire libre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* modelos */}
      <section
        id="modelos"
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="mx-auto max-w-[var(--container-wide)]">
          <SectionHead eyebrow="MODELOS DISPONIBLES" title="Encuentra tu hogar" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelos.map((m) => (
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
        </div>
      </section>

      {/* masterplan / lotes */}
      <section
        id="lotes"
        className="px-[var(--space-6)] py-20"
        style={{ background: "var(--surface-page)" }}
      >
        <div className="mx-auto max-w-[var(--container)]">
          <SectionHead eyebrow="MASTER PLAN" title="Lotes disponibles" />
          <div className="grid items-center gap-[var(--space-7)] md:grid-cols-[1.4fr_1fr]">
            <div
              className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-white"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src={d.galeria.masterplan}
                alt="Master plan Hacienda El Milagro"
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 700px"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex flex-col gap-3.5">
                {d.lotes.map((l) => (
                  <Card
                    key={l.tipo}
                    className="flex items-center gap-4 px-5 py-4"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] font-[var(--font-display)] font-extrabold text-white"
                      style={{ background: "var(--grad-brand)" }}
                    >
                      {l.tipo}
                    </span>
                    <div>
                      <div className="font-[var(--font-display)] font-bold text-[color:var(--ink-900)]">
                        {l.manzana}
                      </div>
                      <div
                        className="text-[14px]"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {l.ids}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-[color:var(--text-muted)]">
                Disponibilidad sujeta a cambios. Incluye 2ª etapa y reserva del
                propietario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contacto CTA */}
      <section
        className="px-[var(--space-6)] pb-[88px]"
        style={{ background: "var(--surface-page)" }}
      >
        <div
          className="relative mx-auto max-w-[var(--container)] overflow-hidden rounded-[var(--radius-2xl)] px-[var(--space-8)] py-14"
          style={{
            background: "var(--grad-brand)",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 h-[280px] w-[280px] rounded-full"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />
          <div className="relative flex flex-wrap items-end justify-between gap-7">
            <div>
              <h2
                className="mb-3.5 font-[var(--font-display)] font-extrabold text-white"
                style={{
                  fontSize: "var(--text-4xl)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                ¡Tu nuevo hogar te espera!
              </h2>
              <div className="flex flex-wrap gap-6 text-[16px] font-semibold text-white">
                <span className="inline-flex items-center gap-2">
                  <Icon name="phone" size={18} />
                  {d.tel} · {d.tel2}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="mail" size={18} />
                  {d.email}
                </span>
              </div>
            </div>
            <Button
              variant="dark"
              size="lg"
              onClick={() => setContact(true)}
              iconRight={<Icon name="arrow-right" size={20} />}
            >
              Agenda una visita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
