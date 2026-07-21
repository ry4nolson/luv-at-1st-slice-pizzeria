import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { TickerStrip } from "@/components/ticker-strip";
import { SlicesSection } from "@/components/slices-section";
import { PiesSection } from "@/components/pies-section";
import { FlatbreadSection } from "@/components/flatbread-section";
import { SweetsSection } from "@/components/sweets-section";
import { PattiesSection } from "@/components/patties-section";
import { VisitSection } from "@/components/visit-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--ink)]">
      <NavBar />
      <HeroSection />
      <TickerStrip />
      <SlicesSection />
      <PiesSection />
      <FlatbreadSection />
      <SweetsSection />
      <PattiesSection />
      <VisitSection />
      <SiteFooter />
    </div>
  );
}
