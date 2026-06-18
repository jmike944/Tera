"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { useContactModal } from "./contact-context";

export function Hero() {
  const { setOpen: setContact } = useContactModal();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--surface-page)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 520px at 78% -8%, #E4F8FC 0%, rgba(228,248,252,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[var(--container-wide)] px-[var(--space-6)] py-[72px] md:py-[88px] grid items-center gap-[var(--space-7)] md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5">
            <Badge tone="brand" dot>
              18 años construyendo en el norte
            </Badge>
          </div>
          <h1
            className="font-[var(--font-display)] font-extrabold text-[color:var(--text-strong)] m-0"
            style={{
              fontSize: "clamp(44px, 5vw, 76px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
            }}
          >
            Construimos donde
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "var(--grad-brand)",
              }}
            >
              quieres vivir.
            </span>
          </h1>
          <p
            className="mt-5 mb-8 max-w-[480px] text-[color:var(--text-body)]"
            style={{ font: "var(--type-lead)" }}
          >
            Diseñamos y edificamos tu casa a la medida — sobre tu terreno o
            dentro de nuestros desarrollos residenciales. Con un asesor, fechas
            claras y seguimiento de obra.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button
              size="lg"
              onClick={() => scrollTo("modelos")}
              iconRight={<Icon name="arrow-right" size={20} />}
            >
              Explora desarrollos
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setContact(true)}
              iconLeft={<Icon name="ruler" size={20} />}
            >
              Construye a tu medida
            </Button>
          </div>
          <div className="flex flex-wrap gap-[var(--space-7)] mt-11">
            {[
              ["12", "Desarrollos activos"],
              ["340+", "Familias en su hogar"],
              ["98%", "Entregas a tiempo"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)] text-[36px] leading-none tabular-nums">
                  {n}
                </div>
                <div className="mt-1 text-[14px] font-medium text-[color:var(--text-muted)]">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* media composite */}
        <div className="relative h-[520px] hidden md:block">
          <div
            className="absolute top-0 right-0 w-[88%] h-[420px] rounded-[var(--radius-xl)] overflow-hidden"
            style={{ boxShadow: "var(--shadow-xl)" }}
          >
            <Image
              src="/models/skydeck/render.png"
              alt="Modelo Sky Deck — Hacienda El Milagro"
              fill
              priority
              sizes="(max-width: 1200px) 50vw, 600px"
              className="object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-[280px] rounded-[var(--radius-lg)] border border-[color:var(--border)] p-[var(--space-5)]"
            style={{
              background: "var(--surface-card)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px]"
                style={{
                  background: "var(--green-50)",
                  color: "var(--green-500)",
                }}
              >
                <Icon name="hard-hat" size={20} />
              </span>
              <div>
                <div className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)] text-[14px]">
                  Avance de obra
                </div>
                <div className="text-[12px] font-medium text-[color:var(--text-muted)]">
                  Top Urban · Hacienda El Milagro
                </div>
              </div>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--surface-sunken)" }}
            >
              <div
                className="h-full"
                style={{ width: "68%", background: "var(--grad-brand)" }}
              />
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-[12px] font-semibold text-[color:var(--text-muted)]">
                Acabados
              </span>
              <span
                className="text-[12px] font-bold tabular-nums"
                style={{
                  color: "var(--brand-strong)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                68%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
