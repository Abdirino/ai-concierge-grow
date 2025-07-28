import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/PainSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import OfferSection from '@/components/OfferSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import AboutSection from '@/components/AboutSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <HowItWorksSection />
      <OfferSection />
      <GuaranteeSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
