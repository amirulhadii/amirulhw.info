import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { WorksShowcase } from "@/components/WorksShowcase";
import { ImpactSection } from "@/components/ImpactSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogoMarquee />
      <SelectedWorkSection />
      <WorksShowcase />
      <ImpactSection />
      <WhatIDoSection />
      <ContactSection />
    </main>
  );
};

export default Index;
