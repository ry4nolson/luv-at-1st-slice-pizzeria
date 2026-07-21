import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { TickerStrip } from "@/components/ticker-strip";
import { AboutSection } from "@/components/about-section";
import { SlicesSection } from "@/components/slices-section";
import { PiesSection } from "@/components/pies-section";
import { FlatbreadSection } from "@/components/flatbread-section";
import { SweetsSection } from "@/components/sweets-section";
import { PattiesSection } from "@/components/patties-section";
import { FieldTripsSection } from "@/components/field-trips-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { VisitSection } from "@/components/visit-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--ink)]">
      <NavBar />
      <HeroSection />
      <TickerStrip />
      <AboutSection />
      <SlicesSection />
      <PiesSection />
      <FlatbreadSection />
      <SweetsSection />
      <PattiesSection />
      <FieldTripsSection />
      <TestimonialsSection />
      <FaqSection />
      <VisitSection />
      <SiteFooter />
    </div>
  );
}
