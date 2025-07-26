import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, UserCheck, Shield } from "lucide-react"
import { TitleSection } from "./titleSection"

export default function Benefits() {
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
    // Add more benefits as needed
    {
      title: "Experiência Reconhecida",
      description:
        "Nossa equipe é composta por profissionais com vasta experiência em direito do trabalho, garantindo que você receba a melhor representação possível.",
      icon: <Shield className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
    {      title: "Resultados Comprovados",
      description:
        "Temos um histórico comprovado de sucesso em casos trabalhistas, com uma taxa de satisfação elevada entre nossos clientes.",
      icon: <Shield className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
    {      title: "Acessibilidade e Transparência",
      description:
        "Mantemos nossos clientes informados e envolvidos em todas as etapas do processo, garantindo que você esteja sempre ciente do andamento do seu caso.",
      icon: <Shield className="h-8 w-8 text-primary" strokeWidth={1} />,
    },
  ]

  return (
    <section id="beneficios" className="container mx-auto px-6 md:px-8 py-20 flex flex-col gap-12 rounded-t-3xl">
      <TitleSection title="Por que escolher a Mendes Advocacia" tagTitle="Benefícios" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="h-full flex flex-col items-start bg-palette-stone/10 border-none relative rounded-3xl">
            <CardHeader className="flex flex-col gap-2">
              <div>{benefit.icon}</div>
              <CardTitle className="text-xl font-medium">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-lg lg:text-xl">{benefit.description}</CardDescription>
            </CardContent>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
        ))}
      </div>
    </section>
  )
}
