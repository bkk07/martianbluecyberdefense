import { Hero } from "../components/hero/Hero";
import { CaseStudies } from "../components/sections/CaseStudies";
import { FeatureShowcase } from "../components/sections/FeatureShowcase";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Industries } from "../components/sections/Industries";
import { Resources } from "../components/sections/Resources";
import { SecurityLifecycle } from "../components/sections/SecurityLifecycle";
import { SecurityMetrics } from "../components/sections/SecurityMetrics";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";
import { WhyMartianBlue } from "../components/sections/WhyMartianBlue";

export function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <SecurityLifecycle />
      <FeatureShowcase />
      <SecurityMetrics />
      <Industries />
      <WhyMartianBlue />
      <CaseStudies />
      <Testimonials />
      <Resources />
      <FinalCTA />
    </main>
  );
}
