"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";

type Pref = "light" | "system" | "dark";

const STORAGE_KEY = "tera-theme";

function resolveTheme(pref: Pref): "light" | "dark" {
  if (pref === "light" || pref === "dark") return pref;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(pref: Pref) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", resolveTheme(pref));
}

const options: { value: Pref; label: string; icon: string }[] = [
  { value: "light", label: "Modo claro", icon: "sun" },
  { value: "system", label: "Tema del sistema", icon: "monitor" },
  { value: "dark", label: "Modo oscuro", icon: "moon" },
];

export function ThemeSwitcher() {
  const [pref, setPref] = React.useState<Pref>("system");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Pref | null) ?? "system";
    setPref(stored);
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (pref !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);

  const choose = (next: Pref) => {
    setPref(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <div
      className="fixed bottom-5 left-5 z-[90] flex items-center gap-1 rounded-[var(--radius-pill)] border p-1"
      style={{
        background: "var(--surface-card-translucent)",
        borderColor: "var(--border)",
        backdropFilter: "saturate(180%) blur(14px)",
        boxShadow: "var(--shadow-lg)",
      }}
      role="group"
      aria-label="Apariencia"
    >
      {options.map((o) => {
        const active = mounted && pref === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => choose(o.value)}
            aria-label={o.label}
            aria-pressed={active}
            title={o.label}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] outline-none focus-visible:shadow-[var(--shadow-focus)]"
            style={{
              background: active ? "var(--grad-brand)" : "transparent",
              color: active ? "#ffffff" : "var(--text-muted)",
            }}
          >
            <Icon name={o.icon} size={16} />
          </button>
        );
      })}
    </div>
  );
}
