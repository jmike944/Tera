"use client";

import * as React from "react";

type ContactCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = React.createContext<ContactCtx | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>;
}

export function useContactModal() {
  const ctx = React.useContext(Ctx);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactProvider");
  }
  return ctx;
}
