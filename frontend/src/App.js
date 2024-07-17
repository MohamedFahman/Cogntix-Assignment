import "./App.css";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import PricingSection from "./components/PricingSection";
import TemplatesSection from "./components/TemplatesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <TemplatesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
