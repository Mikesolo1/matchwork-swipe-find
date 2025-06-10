
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Demo from '../components/Demo';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
