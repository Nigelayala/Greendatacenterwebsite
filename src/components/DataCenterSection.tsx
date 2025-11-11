import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gauge, Droplets, Sun } from "lucide-react";

export function DataCenterSection() {
  const technologies = [
    {
      icon: <Gauge className="w-8 h-8 text-green-600" />,
      title: "PUE Optimizado",
      description: "El PUE (Power Usage Effectiveness) mide la eficiencia energética de un data center. Nuestro objetivo es alcanzar un PUE de 1.2 o menor, reduciendo significativamente el desperdicio energético.",
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjExMzA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Data center servers"
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Refrigeración Líquida",
      description: "Los sistemas de refrigeración líquida son hasta 3000 veces más eficientes que el aire. Permiten enfriar componentes de alta densidad con un consumo energético mínimo y menor impacto ambiental.",
      image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXF1aWQlMjBjb29saW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTY1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Liquid cooling technology"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-600" />,
      title: "Energías Renovables",
      description: "Alimentamos nuestros data centers con energía 100% renovable proveniente de fuentes solares y eólicas. Esto elimina las emisiones de CO₂ y asegura un futuro sostenible para la infraestructura digital.",
      image: "https://images.unsplash.com/photo-1638068109253-272cc2f91ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdpbmQlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzYxMjE2NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Renewable energy sources"
    }
  ];

  return (
    <section id="dc-verde" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Data Center Verde</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías innovadoras para un futuro más sostenible
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <ImageWithFallback 
                  src={tech.image}
                  alt={tech.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2">{tech.icon}</div>
                <CardTitle>{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
