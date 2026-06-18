"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
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
        background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-[var(--space-6)] py-4 max-w-[var(--container-wide)]">
        <Link href="/" aria-label="Tera Desarrollos — Inicio" className="flex items-center">
          <Image
            src="/logo-tera-full.png"
            alt="Tera Desarrollos"
            width={168}
            height={42}
            priority
            style={{ height: 42, width: "auto" }}
          />
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
              className="absolute top-[calc(100%+10px)] left-1/2 min-w-[240px] rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-white p-1.5 shadow-[var(--shadow-lg)]"
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
                  <span className="block font-semibold text-[14px] text-[color:var(--ink-900)]">
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
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[color:var(--border-strong)] text-[color:var(--ink-900)]"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={20} />
        </button>
      </div>

      {/* mobile */}
      {mobileOpen ? (
        <div className="md:hidden border-t border-[color:var(--border)] bg-white">
          <div className="px-[var(--space-6)] py-4 flex flex-col gap-3">
            <Link
              href="/desarrollo-hem"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-2 text-[15px] font-semibold text-[color:var(--ink-900)]"
            >
              <Icon name="map-pin" size={16} /> Hacienda El Milagro
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
