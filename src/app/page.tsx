import { AnimateSection } from "@/components/AnimateSection";
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
        <AnimateSection>
          <Hero />
        </AnimateSection>
        <AnimateSection>
          <OverOns />
        </AnimateSection>
        <AnimateSection>
          <Services />
        </AnimateSection>
        <AnimateSection>
          <Pricing />
        </AnimateSection>
        <AnimateSection>
          <Team />
        </AnimateSection>
        <AnimateSection>
          <Reviews />
        </AnimateSection>
        <AnimateSection>
          <Contact />
        </AnimateSection>
      </main>
      <Footer />
    </>
  );
}
