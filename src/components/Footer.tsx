import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Contacto: info@nubeverde.com</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-90">
              Licencia: CC BY-NC-SA
            </p>
            <p className="text-xs opacity-75 mt-1">
              © 2025 NubeVerde - Data Centers Sostenibles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
