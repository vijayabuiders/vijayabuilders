
import EstimationDialog from "@/components/homepage/EstimationDialog";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import VendorsSection from '@/components/services/VendorsSection';
import PricingSection from "@/components/homepage/PricingSection";
import ProjectsCarousel from "@/components/homepage/ProjectsCarousel";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import CTASection from "@/components/homepage/CTASection";

const HomePage = () => {
  return (
    <div>
      {/* Estimation Dialog */}
      <EstimationDialog />
      
      {/* Hero Section */}
      <HeroSection />

      {/* 1. Services Overview */}
      <ServicesSection />

        {/* Vendors Section */}
      <VendorsSection />


      {/* 2. Pricing Plans */}
      <PricingSection />

      {/* 3. Our Works - Completed Projects Carousel */}
      <ProjectsCarousel />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
