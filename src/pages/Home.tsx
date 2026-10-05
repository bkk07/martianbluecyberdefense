import { Hero } from "../components/hero/Hero";
import { FeatureShowcase } from "../components/sections/FeatureShowcase";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Industries } from "../components/sections/Industries";
import { Resources } from "../components/sections/Resources";
import { SecurityMetrics } from "../components/sections/SecurityMetrics";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";

export function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <FeatureShowcase />
      <SecurityMetrics />
      <Industries />
      <Testimonials />
      <Resources />
      <FinalCTA />
    </main>
  );
}
