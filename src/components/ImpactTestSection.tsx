import { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calculator, Smartphone, Laptop, Mail, Video, Cloud, Edit2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ImpactTestSection() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<null | {
    totalCO2: number;
    equivalence: string;
    category: string;
  }>(null);
  
  // Estados para textos editables
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [title, setTitle] = useState("Test de Impacto Digital");
  const [description, setDescription] = useState("Calcula la huella de carbono de tu actividad digital");

  // Estados para los valores personalizables por el usuario
  const [emailsPerDay, setEmailsPerDay] = useState(100);
  const [streamingHours, setStreamingHours] = useState(2);
  const [socialMediaHours, setSocialMediaHours] = useState(3);
  const [cloudStorage, setCloudStorage] = useState(10);

  const handleCalculate = () => {
    setIsCalculating(true);
    setProgress(0);
    setResult(null);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Calcular el impacto basado en los valores reales del usuario
          // Factores de emisión aproximados:
          // - Email: 4g CO2 por email
          // - Streaming HD: 55g CO2 por hora
          // - Redes sociales: 18g CO2 por hora  
          // - Cloud storage: 0.2g CO2 por GB por día
          
          const emailsCO2 = emailsPerDay * 4 * 365; // gramos anuales
          const streamingCO2 = streamingHours * 55 * 365; // gramos anuales
          const socialMediaCO2 = socialMediaHours * 18 * 365; // gramos anuales
          const cloudCO2 = cloudStorage * 0.2 * 365; // gramos anuales
          
          const totalCO2Grams = emailsCO2 + streamingCO2 + socialMediaCO2 + cloudCO2;
          const totalCO2 = Math.round(totalCO2Grams / 1000); // convertir a kg
          const trees = Math.ceil(totalCO2 / 21);
          
          let category = "";
          if (totalCO2 < 200) category = "bajo";
          else if (totalCO2 < 400) category = "medio";
          else category = "alto";

          setTimeout(() => {
            setResult({
              totalCO2,
              equivalence: `${trees} árboles necesarios para compensar`,
              category
            });
            setIsCalculating(false);
          }, 300);
          
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const digitalActivities = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "emails/día", 
      value: emailsPerDay,
      onChange: setEmailsPerDay,
      unit: "emails"
    },
    { 
      icon: <Video className="w-6 h-6" />, 
      label: "streaming/día", 
      value: streamingHours,
      onChange: setStreamingHours,
      unit: "horas"
    },
    { 
      icon: <Smartphone className="w-6 h-6" />, 
      label: "redes sociales/día", 
      value: socialMediaHours,
      onChange: setSocialMediaHours,
      unit: "horas"
    },
    { 
      icon: <Cloud className="w-6 h-6" />, 
      label: "almacenamiento cloud", 
      value: cloudStorage,
      onChange: setCloudStorage,
      unit: "GB"
    },
  ];

  return (
    <section id="test" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            {isEditingTitle ? (
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                className="text-center max-w-md"
                autoFocus
              />
            ) : (
              <>
                <h2>{title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditingTitle(true)}
                  className="opacity-50 hover:opacity-100"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
          
          <div className="flex items-center justify-center gap-3">
            {isEditingDescription ? (
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => setIsEditingDescription(false)}
                className="text-center max-w-md resize-none"
                rows={2}
                autoFocus
              />
            ) : (
              <>
                <p className="text-muted-foreground">
                  {description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditingDescription(true)}
                  className="opacity-50 hover:opacity-100"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              ¿Cuál es tu impacto digital?
            </CardTitle>
            <CardDescription>
              Ajusta los valores según tu uso diario de servicios digitales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {digitalActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="text-green-600">{activity.icon}</div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.label}</p>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="0"
                        value={activity.value}
                        onChange={(e) => activity.onChange(Number(e.target.value))}
                        className="h-8 w-20"
                      />
                      <span className="text-xs text-muted-foreground">{activity.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCalculate}
                disabled={isCalculating}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Calculator className="w-4 h-4 mr-2" />
                {isCalculating ? "Calculando..." : "Calcular Mi Impacto"}
              </Button>
            </div>

            {(isCalculating || result) && (
              <div className="space-y-4">
                <Progress value={progress} className="h-3" />
                
                {result && (
                  <div className={`p-6 rounded-lg border-2 ${
                    result.category === 'bajo' 
                      ? 'bg-green-50 border-green-300' 
                      : result.category === 'medio'
                      ? 'bg-yellow-50 border-yellow-300'
                      : 'bg-red-50 border-red-300'
                  }`}>
                    <h3 className="mb-2">Resultado de tu Impacto</h3>
                    <div className="space-y-2">
                      <p>
                        <strong>Emisiones anuales estimadas:</strong> {result.totalCO2} kg CO₂
                      </p>
                      <p>
                        <strong>Equivalencia:</strong> {result.equivalence}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {result.category === 'bajo' && "¡Excelente! Tu huella digital es menor que la media. Sigue así."}
                        {result.category === 'medio' && "Tu impacto es moderado. Considera reducir el streaming en alta calidad y optimizar el uso de la nube."}
                        {result.category === 'alto' && "Tu huella digital es considerable. Te recomendamos usar data centers verdes y reducir el uso de servicios intensivos."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            💡 <strong>Tip:</strong> Los data centers verdes pueden reducir hasta un 80% las emisiones 
            asociadas a tus actividades digitales.
          </p>
        </div>
      </div>
    </section>
  );
}