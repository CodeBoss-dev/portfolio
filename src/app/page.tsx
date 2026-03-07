import { ZoomIntro } from "@/components/home/ZoomIntro";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { FeaturedSystems } from "@/components/home/FeaturedSystems";
import { AICaseStudies } from "@/components/home/AICaseStudies";
import { VersatilityBridge } from "@/components/home/VersatilityBridge";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <ZoomIntro />
      <ImpactMetrics />
      <FeaturedSystems />
      <AICaseStudies />
      <VersatilityBridge />
      <ContactCTA />
    </>
  );
}
