import React, { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/Preloader";

// Lazy-loading components naturally below the fold
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const DifferentialsSection = React.lazy(() => import("@/components/DifferentialsSection"));
const LocationSection = React.lazy(() => import("@/components/LocationSection"));
const FooterSection = React.lazy(() => import("@/components/FooterSection"));
const WhatsAppButton = React.lazy(() => import("@/components/WhatsAppButton"));

// Clean skeleton for loading states
const SectionSkeleton = () => <div className="min-h-[200px] flex items-center justify-center bg-background" />;

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Preloader />
      
      {/* Heavy above-the-fold component loads immediately */}
      <HeroSection />
      
      {/* Below the fold loads on-demand */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
        <GallerySection />
        <DifferentialsSection />
        <LocationSection />
        <FooterSection />
        <WhatsAppButton />
      </Suspense>
    </main>
  );
};

export default Index;
