import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { DataCenterSection } from "./components/DataCenterSection";
import { KPIsSection } from "./components/KPIsSection";
import { ImpactTestSection } from "./components/ImpactTestSection";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />
      
      <main className="flex-1">
        <HeroSection scrollToSection={scrollToSection} />
        <DataCenterSection />
        <KPIsSection />
        <ImpactTestSection />
      </main>
      
      <Footer />
    </div>
  );
}
