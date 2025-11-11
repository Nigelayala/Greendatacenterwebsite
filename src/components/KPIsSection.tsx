import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ReferenceLine } from "recharts";

export function KPIsSection() {
  const pueData = [
    { mes: 'Ene', actual: 1.8, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Feb', actual: 1.75, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Mar', actual: 1.65, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Abr', actual: 1.55, objetivo: 1.2, estandar: 1.67 },
    { mes: 'May', actual: 1.45, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Jun', actual: 1.35, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Jul', actual: 1.28, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Ago', actual: 1.25, objetivo: 1.2, estandar: 1.67 },
    { mes: 'Sep', actual: 1.22, objetivo: 1.2, estandar: 1.67 },
  ];

  const inversionData = [
    { categoria: 'Refrig. Líquida', inversion: 450000, ahorro: 180000 },
    { categoria: 'Renovables', inversion: 850000, ahorro: 320000 },
    { categoria: 'Optimización PUE', inversion: 120000, ahorro: 95000 },
    { categoria: 'Monitorización', inversion: 80000, ahorro: 45000 },
  ];

  return (
    <section id="kpis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Eficiencia: KPIs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Medición y análisis del rendimiento energético
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Evolución del PUE</CardTitle>
              <CardDescription>
                Progreso mensual hacia el objetivo de eficiencia (PUE = 1.2)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={pueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis domain={[1, 2]} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={1.67} stroke="#888" strokeDasharray="3 3" label="Estándar" />
                  <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-1))" strokeWidth={2} name="PUE Actual" />
                  <Line type="monotone" dataKey="objetivo" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Objetivo" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm">
                  ✅ <strong>Progreso:</strong> Reducción del 32% en PUE desde enero. 
                  Estamos cerca del objetivo óptimo de 1.2.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análisis de Inversión</CardTitle>
              <CardDescription>
                Inversión inicial vs. ahorro energético anual esperado (€)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={inversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="categoria" angle={-15} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="inversion" fill="hsl(var(--chart-3))" name="Inversión" />
                  <Bar dataKey="ahorro" fill="hsl(var(--chart-4))" name="Ahorro Anual" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm">
                  💰 <strong>ROI estimado:</strong> Recuperación de la inversión en 2.3 años 
                  con un ahorro total de €640,000/año.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
