import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { PoolsSection } from "@/components/sections/PoolsSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <PoolsSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
