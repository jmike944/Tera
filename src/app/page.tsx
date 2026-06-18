import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Developments } from "@/components/site/developments";
import { Process, CTA } from "@/components/site/process";
import { Footer } from "@/components/site/footer";
import { ContactProvider } from "@/components/site/contact-context";
import { ContactModal } from "@/components/site/contact-modal";

export default function HomePage() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <Hero />
        <Developments />
        <Process />
        <CTA />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}
