import type { Metadata } from "next";
import { ContactProvider } from "@/components/site/contact-context";
import { ContactModal } from "@/components/site/contact-modal";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { DesarrolloHEM } from "./desarrollo-hem-client";

export const metadata: Metadata = {
  title: "Hacienda El Milagro — Tera Desarrollos",
  description:
    "Fraccionamiento residencial en Saltillo, Coahuila. Amenidades de primer nivel, seguridad y ubicación estratégica al norponiente de Saltillo.",
};

export default function DesarrolloHEMPage() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <DesarrolloHEM />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}
