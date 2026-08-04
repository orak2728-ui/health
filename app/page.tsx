import { ContactSection } from "@/components/landing/contact-section";
import { ContentSection } from "@/components/landing/content-section";
import { CoreValuesSection } from "@/components/landing/core-values-section";
import { DoctorMessageSection } from "@/components/landing/doctor-message-section";
import { DoctorSection } from "@/components/landing/doctor-section";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar";
import { PhotographySection } from "@/components/landing/photography-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrustStatsSection } from "@/components/landing/trust-stats-section";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <FluidParticlesBackground
          particleCount={350}
          particleSize={{ min: 4, max: 9 }}
          speed={0.125}
        />
      </div>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustStatsSection />
        <DoctorSection />
        <ProblemSection />
        <CoreValuesSection />
        <ProcessSection />
        <ServicesSection />
        <ContentSection />
        <DoctorMessageSection />
        <FaqSection />
        <ContactSection />
        <PhotographySection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
