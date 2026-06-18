"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@/components/ui/icon";
import { useContactModal } from "./contact-context";

export function ContactModal() {
  const { open, setOpen } = useContactModal();
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open) {
      setSent(false);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  };

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-[fadein_var(--dur-base)_var(--ease-out)]"
      style={{ background: "rgba(6,40,58,0.55)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[460px] rounded-[var(--radius-xl)] bg-[color:var(--surface-card)] shadow-[var(--shadow-xl)] overflow-hidden"
      >
        <div
          className="relative px-7 py-6"
          style={{ background: "var(--grad-brand)" }}
        >
          <div className="absolute top-4 right-4">
            <IconButton
              label="Cerrar"
              variant="glass"
              size="sm"
              onClick={() => setOpen(false)}
            >
              <Icon name="x" size={18} />
            </IconButton>
          </div>
          <div className="tera-eyebrow text-white/85 mb-2">
            AGENDA UNA VISITA
          </div>
          <h3
            id="contact-modal-title"
            className="font-[var(--font-display)] font-bold text-white text-[28px] leading-tight"
          >
            Hablemos de tu casa
          </h3>
        </div>
        <div className="p-7">
          {sent ? (
            <div className="text-center py-6">
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: "var(--green-50)",
                  color: "var(--green-500)",
                }}
              >
                <Icon name="check" size={32} />
              </div>
              <h4 className="font-[var(--font-display)] font-semibold text-[color:var(--ink-900)] text-xl mb-2">
                ¡Gracias!
              </h4>
              <p className="text-[14px] text-[color:var(--text-body)]">
                Un asesor te contactará en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={onSubmit}
              noValidate
            >
              <Input
                label="Nombre"
                placeholder="Tu nombre completo"
                required
                iconLeft={<Icon name="user" size={18} />}
              />
              <Input
                label="Correo"
                type="email"
                placeholder="tu@correo.com"
                required
                iconLeft={<Icon name="mail" size={18} />}
              />
              <Input
                label="Teléfono"
                placeholder="81 0000 0000"
                required
                iconLeft={<Icon name="phone" size={18} />}
              />
              <Button
                fullWidth
                size="lg"
                type="submit"
                disabled={submitting}
                iconRight={<Icon name="arrow-right" size={20} />}
              >
                {submitting ? "Enviando…" : "Solicitar contacto"}
              </Button>
              <p className="text-[12px] text-[color:var(--text-muted)] text-center">
                Al enviar aceptas nuestro aviso de privacidad.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
