import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Symbol height in px. Defaults to 40 (header lockup). */
  size?: number;
  /** Show the "TERA / DESARROLLOS" wordmark next to the symbol. Default true. */
  wordmark?: boolean;
  /** "auto" follows current text color; "light" forces white text (on dark). */
  tone?: "auto" | "light";
  className?: string;
};

export function Logo({
  size = 40,
  wordmark = true,
  tone = "auto",
  className,
}: LogoProps) {
  const teraColor = tone === "light" ? "#ffffff" : "var(--text-strong)";
  const accentColor = tone === "light" ? "var(--tera-aqua)" : "var(--brand)";
  return (
    <span
      className={cn("inline-flex items-center gap-2.5 leading-none", className)}
      aria-label="Tera Desarrollos"
    >
      <Image
        src="/logo-tera-icon.png"
        alt=""
        width={size}
        height={Math.round(size * (672 / 702))}
        priority
        style={{
          height: size,
          width: "auto",
          display: "block",
          // crisp scaling on retina; the symbol has its own internal padding
        }}
      />
      {wordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className="font-[var(--font-display)] font-extrabold tracking-[-0.025em]"
            style={{
              color: teraColor,
              fontSize: Math.round(size * 0.62),
              lineHeight: 1,
            }}
          >
            tera
          </span>
          <span
            className="font-[var(--font-body)] font-bold uppercase"
            style={{
              color: accentColor,
              fontSize: Math.max(8, Math.round(size * 0.22)),
              letterSpacing: "0.28em",
              marginTop: Math.max(2, Math.round(size * 0.08)),
              // The wide tracking pulls the wordmark visually right; nudge back.
              marginLeft: "-0.06em",
            }}
          >
            Desarrollos
          </span>
        </span>
      ) : null}
    </span>
  );
}
