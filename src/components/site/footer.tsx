import * as React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

const InstagramGlyph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookGlyph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    {...props}
  >
    <path d="M13.5 21v-8h2.6l.4-3.2h-3V7.7c0-.9.3-1.6 1.6-1.6H17V3.2C16.6 3.1 15.5 3 14.4 3 11.9 3 10.2 4.5 10.2 7.3v2.5H7.5V13h2.7v8h3.3z" />
  </svg>
);

const WhatsAppGlyph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    {...props}
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.58 2 2.13 6.45 2.13 11.9c0 1.74.46 3.44 1.32 4.93L2 22l5.32-1.4a9.9 9.9 0 0 0 4.71 1.2h.01c5.45 0 9.9-4.45 9.9-9.9 0-2.64-1.03-5.13-2.89-7Zm-7.02 15.22h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.16.83.84-3.08-.2-.31a8.21 8.21 0 0 1-1.26-4.34c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 8.23 8.24c0 4.54-3.69 8.22-8.2 8.22Zm4.52-6.16c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.12-.56.12-.16.25-.65.8-.79.97-.15.16-.29.18-.54.06-.25-.13-1.04-.38-1.99-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.42l-.48-.01c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02 0 1.18.87 2.33.99 2.49.13.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.23-.18-.48-.31Z" />
  </svg>
);

export function Footer() {
  const cols: [string, [string, string][]][] = [
    [
      "Hacienda El Milagro",
      [
        ["El desarrollo", "/desarrollo-hem"],
        ["Modelo Volterra", "/modelo/volterra"],
        ["Modelo Top Urban", "/modelo/topurban"],
        ["Modelo Sky Deck", "/modelo/skydeck"],
      ],
    ],
    [
      "Explora",
      [
        ["Modelos", "/#modelos"],
        ["Amenidades", "/desarrollo-hem#amenidades"],
        ["Proceso de obra", "/#proceso"],
        ["Lotes disponibles", "/desarrollo-hem#lotes"],
      ],
    ],
  ];

  const contacto: [string, string, string | null][] = [
    ["phone", "844 788 9459 · 844 788 9460", "tel:8447889459"],
    ["mail", "info@teradesarrollos.com", "mailto:info@teradesarrollos.com"],
    [
      "map-pin",
      "Blvd. Dr. José Narro Robles 4811-2, Col. Los González, Saltillo, Coahuila",
      null,
    ],
  ];

  return (
    <footer
      className="px-[var(--space-6)] pt-16 pb-8"
      style={{
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
      }}
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="grid gap-[var(--space-7)] pb-12 border-b border-white/12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <div className="mb-5">
              <Logo size={44} tone="light" />
            </div>
            <p
              className="text-[15px] leading-relaxed max-w-[300px]"
              style={{ color: "rgba(220,234,241,0.7)" }}
            >
              Construimos donde quieres vivir. Hogares a la medida con estándar
              TERA Quality Build en Saltillo, Coahuila.
            </p>
            <div className="flex gap-3 mt-6">
              {(
                [
                  {
                    id: "instagram",
                    label: "Instagram",
                    href: "https://www.instagram.com/tera_desarrollos/",
                    Glyph: InstagramGlyph,
                  },
                  {
                    id: "facebook",
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61576198045442",
                    Glyph: FacebookGlyph,
                  },
                  {
                    id: "whatsapp",
                    label: "WhatsApp",
                    href: "https://wa.me/5218443941090",
                    Glyph: WhatsAppGlyph,
                  },
                ] as const
              ).map(({ id, label, href, Glyph }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Glyph width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h5 className="font-[var(--font-display)] font-bold text-white text-[14px] mb-4">
                {h}
              </h5>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {items.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[14px] transition-colors hover:text-white"
                      style={{ color: "rgba(220,234,241,0.72)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className="font-[var(--font-display)] font-bold text-white text-[14px] mb-4">
              Contacto
            </h5>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              {contacto.map(([ic, txt, href]) => (
                <li key={txt} className="flex items-start gap-2.5">
                  <span
                    className="flex shrink-0 mt-0.5"
                    style={{ color: "var(--tera-aqua)" }}
                  >
                    <Icon name={ic} size={16} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[14px] leading-relaxed transition-colors hover:text-white"
                      style={{ color: "rgba(220,234,241,0.72)" }}
                    >
                      {txt}
                    </a>
                  ) : (
                    <span
                      className="text-[14px] leading-relaxed"
                      style={{ color: "rgba(220,234,241,0.72)" }}
                    >
                      {txt}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-between gap-3 pt-6 text-[13px]"
          style={{ color: "rgba(220,234,241,0.5)" }}
        >
          <span>
            © 2026 Tera Desarrollos. Renders ilustrativos · precios sujetos a
            cambio sin previo aviso.
          </span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </div>
    </footer>
  );
}
