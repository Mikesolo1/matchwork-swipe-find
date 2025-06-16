
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Demo from '../components/Demo';
import Roadmap from '../components/Roadmap';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Header />
      <HeroSection />
      <VideoSection />
      <HowItWorks />
      <Benefits />
      <Demo />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
