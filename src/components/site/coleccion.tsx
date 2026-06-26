import { Icon } from "@/components/ui/icon";
import { coleccion, qualityBuild } from "@/lib/models";

export function Coleccion() {
  return (
    <section
      id="coleccion"
      className="px-[var(--space-6)] py-[88px]"
      style={{ background: "var(--surface-page)" }}
    >
      <div className="mx-auto max-w-[var(--container)]">
        <div className="mb-12 max-w-[760px]">
          <div className="tera-eyebrow mb-2.5">{coleccion.eyebrow}</div>
          <h2
            className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)]"
            style={{
              fontSize: "var(--text-3xl)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {coleccion.titulo}
          </h2>
          <p
            className="mt-2 font-[var(--font-display)] font-semibold"
            style={{ fontSize: "var(--text-lg)", color: "var(--brand-strong)" }}
          >
            {coleccion.lema}
          </p>
          <p
            className="mt-4 text-[color:var(--text-body)]"
            style={{ font: "var(--type-lead)" }}
          >
            {coleccion.intro}
          </p>
          {coleccion.parrafos.map((p) => (
            <p
              key={p}
              className="mt-4 text-[16px] leading-relaxed text-[color:var(--text-body)]"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coleccion.pilares.map((p) => (
            <div
              key={p.titulo}
              className="rounded-[var(--radius-lg)] border border-[color:var(--border)] p-[var(--space-5)]"
              style={{
                background: "var(--surface-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                style={{
                  background: "var(--brand-soft)",
                  color: "var(--brand-strong)",
                }}
              >
                <Icon name={p.icon} size={24} />
              </div>
              <h4
                className="mb-2 font-[var(--font-display)] font-semibold text-[color:var(--text-strong)]"
                style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}
              >
                {p.titulo}
              </h4>
              <p className="text-[15px] leading-normal text-[color:var(--text-body)]">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityBuild() {
  return (
    <section
      id="quality-build"
      className="px-[var(--space-6)] py-[88px]"
      style={{ background: "var(--surface-card)" }}
    >
      <div className="mx-auto max-w-[var(--container)]">
        <div className="grid items-start gap-[var(--space-7)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="tera-eyebrow mb-2.5">{qualityBuild.eyebrow}</div>
            <h2
              className="font-[var(--font-display)] font-bold text-[color:var(--text-strong)]"
              style={{
                fontSize: "var(--text-3xl)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {qualityBuild.titulo}
            </h2>
            <p
              className="mt-4 text-[color:var(--text-body)]"
              style={{ font: "var(--type-lead)" }}
            >
              {qualityBuild.intro}
            </p>
            <div
              className="mt-7 inline-flex items-center gap-4 rounded-[var(--radius-lg)] px-[var(--space-5)] py-[var(--space-4)]"
              style={{ background: "var(--grad-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              <span className="font-[var(--font-display)] font-extrabold text-white text-[44px] leading-none tabular-nums">
                {qualityBuild.etapas}
              </span>
              <span className="text-[14px] font-semibold leading-tight text-white/90">
                etapas rigurosamente
                <br />
                definidas
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {qualityBuild.pilares.map((p) => (
              <div
                key={p.titulo}
                className="rounded-[var(--radius-lg)] border border-[color:var(--border)] p-[var(--space-5)]"
                style={{ background: "var(--surface-page)" }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                  style={{
                    background: "var(--brand-soft)",
                    color: "var(--brand-strong)",
                  }}
                >
                  <Icon name={p.icon} size={24} />
                </div>
                <h4
                  className="mb-2 font-[var(--font-display)] font-semibold text-[color:var(--text-strong)]"
                  style={{ fontSize: "var(--text-lg)", lineHeight: 1.3 }}
                >
                  {p.titulo}
                </h4>
                <p className="text-[14px] leading-normal text-[color:var(--text-body)]">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
