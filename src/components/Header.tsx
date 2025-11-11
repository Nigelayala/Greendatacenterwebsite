import { Button } from "./ui/button";

export function Header({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white">NV</span>
            </div>
            <span className="font-semibold">NubeVerde</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="hover:text-green-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('dc-verde')}
              className="hover:text-green-600 transition-colors"
            >
              DC Verde
            </button>
            <button 
              onClick={() => scrollToSection('kpis')}
              className="hover:text-green-600 transition-colors"
            >
              KPIs
            </button>
            <button 
              onClick={() => scrollToSection('test')}
              className="hover:text-green-600 transition-colors"
            >
              Test de Impacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
