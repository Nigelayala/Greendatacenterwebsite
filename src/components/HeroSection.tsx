import { Button } from "./ui/button";
import { Zap, Leaf } from "lucide-react";

export function HeroSection({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  return (
    <section id="inicio" className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-green-600/10 px-4 py-2 rounded-full mb-6">
          <Leaf className="w-4 h-4 text-green-600" />
          <span className="text-green-700">Sostenibilidad Digital</span>
        </div>
        
        <h1 className="mb-6">
          EFICIENCIA ENERGÉTICA EN DATA CENTERS
        </h1>
        
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descubre cómo las tecnologías verdes están transformando los centros de datos. 
          Reducimos el consumo energético hasta un 40% mediante sistemas de refrigeración 
          líquida, energías renovables y optimización continua del PUE (Power Usage Effectiveness).
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('dc-verde')}
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            <Zap className="w-4 h-4 mr-2" />
            Ver Tecnologías
          </Button>
          <Button 
            onClick={() => scrollToSection('test')}
            variant="outline" 
            size="lg"
          >
            Test de Impacto
          </Button>
        </div>
      </div>
    </section>
  );
}
