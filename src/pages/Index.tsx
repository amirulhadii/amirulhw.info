import { HeroSection } from "@/components/HeroSection";
import { SummarySection } from "@/components/SummarySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ActivitiesSection />
      <Footer />
    </main>
  );
};

export default Index;
