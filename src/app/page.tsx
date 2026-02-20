import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OverOns } from "@/components/OverOns";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <OverOns />
        <Services />
        <Pricing />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
