"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useContactModal } from "./contact-context";

const steps: { icon: string; t: string; d: string }[] = [
  {
    icon: "map",
    t: "Elige terreno o desarrollo",
    d: "Construimos sobre tu lote o dentro de uno de nuestros desarrollos residenciales.",
  },
  {
    icon: "pencil-ruler",
    t: "Diseña tu casa",
    d: "Adaptamos un modelo a tu familia o partimos de cero con nuestro equipo de arquitectura.",
  },
  {
    icon: "hard-hat",
    t: "Construimos con seguimiento",
    d: "Avances de obra, reportes y un asesor que te acompaña en cada etapa.",
  },
  {
    icon: "key-round",
    t: "Recibe tu hogar",
    d: "Entrega en la fecha acordada, con garantía y postventa de Tera.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="px-[var(--space-6)] py-[88px]"
      style={{ background: "var(--surface-page)" }}
    >
      <div className="mx-auto max-w-[var(--container)]">
        <div className="mb-12 text-center">
          <div className="tera-eyebrow mb-2.5">CÓMO FUNCIONA</div>
          <h2
            className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)]"
            style={{ fontSize: "var(--text-3xl)", lineHeight: 1.15 }}
          >
            De la idea a las llaves, en cuatro pasos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)]"
                style={{
                  background: "var(--brand-soft)",
                  color: "var(--brand-strong)",
                }}
              >
                <Icon name={s.icon} size={26} />
              </div>
              <div
                className="mb-1.5 text-[12px] font-bold tabular-nums"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--tera-400)",
                }}
              >
                0{i + 1}
              </div>
              <h4
                className="mb-2 font-[var(--font-display)] font-semibold text-[color:var(--text-strong)]"
                style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
              >
                {s.t}
              </h4>
              <p className="text-[16px] leading-normal text-[color:var(--text-body)]">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { setOpen: setContact } = useContactModal();
  return (
    <section
      className="px-[var(--space-6)] pb-[88px]"
      style={{ background: "var(--surface-page)" }}
    >
      <div
        className="relative mx-auto max-w-[var(--container)] overflow-hidden rounded-[var(--radius-2xl)] px-[var(--space-8)] py-[64px]"
        style={{
          background: "var(--grad-brand)",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <div
          className="absolute -top-10 -right-10 h-[300px] w-[300px] rounded-full"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        <div className="relative max-w-[600px]">
          <h2
            className="mb-4 font-[var(--font-display)] font-extrabold text-white"
            style={{
              fontSize: "var(--text-4xl)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Cuéntanos cómo imaginas tu casa.
          </h2>
          <p
            className="mb-7"
            style={{ font: "var(--type-lead)", color: "rgba(255,255,255,0.9)" }}
          >
            Agenda una visita sin costo. Un asesor revisa tu terreno o te
            muestra los modelos disponibles.
          </p>
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
  );
}
