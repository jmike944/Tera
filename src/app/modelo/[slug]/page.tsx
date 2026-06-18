import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactProvider } from "@/components/site/contact-context";
import { ContactModal } from "@/components/site/contact-modal";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { getModelo, modelos } from "@/lib/models";
import { ModelDetail } from "./model-detail";

export function generateStaticParams() {
  return modelos.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/modelo/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getModelo(slug);
  if (!m) return { title: "Modelo no encontrado" };
  return {
    title: `${m.nombre} — Hacienda El Milagro · Tera Desarrollos`,
    description: m.resumen,
  };
}

export default async function ModelPage({ params }: PageProps<"/modelo/[slug]">) {
  const { slug } = await params;
  const m = getModelo(slug);
  if (!m) notFound();
  return (
    <ContactProvider>
      <Header />
      <main>
        <ModelDetail modelo={m} />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}
