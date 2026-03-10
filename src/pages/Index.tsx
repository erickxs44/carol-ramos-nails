import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <SpecialtiesSection />
      <GallerySection />
      <AboutSection />
      <DifferentialsSection />
      <LocationSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
