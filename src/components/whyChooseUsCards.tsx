import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, UserCheck, Shield } from "lucide-react"
import { TitleSection } from "./titleSection"

export default function WhyChooseUsCards() {
  const benefits = [
    {
      title: "Tecnologia e Inovação",
      description:
        "Utilizamos tecnologia de ponta para gerenciar casos e manter os clientes atualizados sobre o progresso dos seus processos.",
      icon: <Laptop className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
    {
      title: "Abordagem Personalizada",
      description:
        "Cada cliente recebe uma abordagem personalizada que considera as particularidades de sua situação e objetivos. Essa personalização maximiza a eficácia das soluções legais propostas.",
      icon: <UserCheck className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
    {
      title: "Suporte Integral",
      description:
        "Oferecemos suporte integral durante todo o processo judicial ou administrativo, incluindo a preparação de documentos e acompanhamento constante do caso, garantindo transparência e comunicação clara.",
      icon: <Shield className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
  ]

  return (
    <section id="beneficios" className="container-x mx-auto py-20 flex flex-col gap-20 border-b border-palette-secondary">
      <TitleSection title="Por que escolher a Mendes Advocacia" tagTitle="Benefícios" className="mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="h-full flex flex-col items-start bg-transparent border-none relative">
            <CardHeader className="flex flex-col gap-4">
              <div>{benefit.icon}</div>
              <CardTitle className="text-xl font-medium">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{benefit.description}</CardDescription>
            </CardContent>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
        ))}
      </div>
    </section>
  )
}
