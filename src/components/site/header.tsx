"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { useContactModal } from "./contact-context";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openDev, setOpenDev] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setOpen: setContact } = useContactModal();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-[var(--dur-base)] ease-[var(--ease-out)]"
      style={{
        background: scrolled ? "var(--surface-card-translucent)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-[var(--space-6)] py-4 max-w-[var(--container-wide)]">
        <Link
          href="/"
          aria-label="Tera Desarrollos — Inicio"
          className="flex items-center"
        >
          <Logo size={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-[var(--space-6)]">
          <div
            className="relative"
            onMouseEnter={() => setOpenDev(true)}
            onMouseLeave={() => setOpenDev(false)}
          >
            <Link
              href="/desarrollo-hem"
              className="flex items-center gap-1.5 text-[14px] font-semibold transition-colors"
              style={{
                color: openDev ? "var(--brand-strong)" : "var(--text-body)",
              }}
            >
              Desarrollos <Icon name="chevron-down" size={15} />
            </Link>
            <div
              className="absolute top-[calc(100%+10px)] left-1/2 min-w-[240px] rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface-card)] p-1.5 shadow-[var(--shadow-lg)]"
              style={{
                opacity: openDev ? 1 : 0,
                visibility: openDev ? "visible" : "hidden",
                transform: openDev
                  ? "translateX(-50%) translateY(0)"
                  : "translateX(-50%) translateY(-6px)",
                transition: "all var(--dur-fast) var(--ease-out)",
              }}
            >
              <Link
                href="/desarrollo-hem"
                className="flex items-center gap-2.5 rounded-[var(--radius-md)] px-3 py-2.5 hover:bg-[color:var(--surface-page)]"
              >
                <span className="flex text-[color:var(--brand)] shrink-0">
                  <Icon name="map-pin" size={18} />
                </span>
                <span>
                  <span className="block font-semibold text-[14px] text-[color:var(--text-strong)]">
                    Hacienda El Milagro
                  </span>
                  <span className="block text-[11px] text-[color:var(--text-muted)]">
                    Saltillo, Coahuila · Preventa
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <Link
            href="/#coleccion"
            className="text-[14px] font-semibold text-[color:var(--text-body)] hover:text-[color:var(--brand-strong)] transition-colors"
          >
            Colección
          </Link>
          <Link
            href="/#modelos"
            className="text-[14px] font-semibold text-[color:var(--text-body)] hover:text-[color:var(--brand-strong)] transition-colors"
          >
            Modelos
          </Link>
          <Link
            href="/#proceso"
            className="text-[14px] font-semibold text-[color:var(--text-body)] hover:text-[color:var(--brand-strong)] transition-colors"
          >
            Proceso
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => setContact(true)}
            iconLeft={<Icon name="calendar" size={16} />}
          >
            Agenda una visita
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] text-[color:var(--text-strong)]"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={20} />
        </button>
      </div>

      {/* mobile */}
      {mobileOpen ? (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--surface-card)]">
          <div className="px-[var(--space-6)] py-4 flex flex-col gap-3">
            <Link
              href="/desarrollo-hem"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-2 text-[15px] font-semibold text-[color:var(--text-strong)]"
            >
              <Icon name="map-pin" size={16} /> Hacienda El Milagro
            </Link>
            <Link
              href="/#coleccion"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-[15px] font-semibold text-[color:var(--text-body)]"
            >
              Colección
            </Link>
            <Link
              href="/#modelos"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-[15px] font-semibold text-[color:var(--text-body)]"
            >
              Modelos
            </Link>
            <Link
              href="/#proceso"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-[15px] font-semibold text-[color:var(--text-body)]"
            >
              Proceso
            </Link>
            <Button
              fullWidth
              onClick={() => {
                setMobileOpen(false);
                setContact(true);
              }}
              iconLeft={<Icon name="calendar" size={16} />}
            >
              Agenda una visita
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
