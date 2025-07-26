import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Briefcase,
  Truck,
  AlertTriangle,
  Clock,
  FileText,
  Thermometer,
  ShieldAlert,
  FileSignature,
  UserX,
  Scale,
  Flame,
  Users,
} from "lucide-react"
import { TitleSection } from "./titleSection"

export default function LegalServicesCards() {
  const services = [
    {
      title: "Ações por acidente de trabalho",
      description:
        "Representamos trabalhadores que sofreram acidentes durante suas atividades laborais, buscando indenizações por danos físicos e psicológicos.",
      icon: <Briefcase className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Direitos dos motoristas caminhoneiros",
      description:
        "Representamos caminhoneiros em diversas questões trabalhistas específicas da profissão, incluindo a regulamentação da jornada de trabalho.",
      icon: <Truck className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Danos morais",
      description:
        "Ajudamos trabalhadores a buscar compensações por danos morais decorrentes de situações como assédio moral, discriminação, e condições de trabalho degradantes.",
      icon: <AlertTriangle className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Horas extras",
      description:
        "Trabalhadores em ações para garantir o pagamento correto de horas extras não remuneradas, conforme as normas trabalhistas.",
      icon: <Clock className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Análise de acerto rescisório",
      description:
        "Verificamos a correção dos valores pagos na rescisão do contrato de trabalho, incluindo verbas rescisórias, benefícios e compensações.",
      icon: <FileText className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Insalubridade",
      description:
        "Assessoramos na obtenção de adicionais de insalubridade para trabalhadores que operam em condições nocivas à saúde.",
      icon: <Thermometer className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Reversão de demissão por justa causa",
      description:
        "Auxiliamos trabalhadores que foram demitidos por justa causa de maneira indevida ou sem provas suficientes.",
      icon: <ShieldAlert className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Rescisão de contrato de trabalho",
      description:
        "Orientamos e assistimos trabalhadores durante o processo de rescisão contratual, garantindo que todos os direitos trabalhistas sejam observados.",
      icon: <FileSignature className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Assédio sexual e moral",
      description:
        "Oferecemos suporte jurídico para vítimas de assédio sexual e moral no ambiente de trabalho, buscando reparação.",
      icon: <UserX className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Equiparação salarial",
      description:
        "Auxiliamos trabalhadores que realizam funções idênticas às de outros empregados que recebem salário superior, garantindo a igualdade salarial.",
      icon: <Scale className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Periculosidade",
      description:
        "Defendemos o direito dos trabalhadores a receberem adicional de periculosidade por exercerem atividades que envolvem risco acentuado.",
      icon: <Flame className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
    {
      title: "Acúmulo de função",
      description:
        "Representamos trabalhadores que estão exercendo responsabilidades além das que foram contratadas, buscando reconhecimento e compensação adequada.",
      icon: <Users className="h-8 w-8 text-palette-mist" strokeWidth={1} />,
    },
  ]

  return (
    <section id="servicos" className="container mx-auto px-6 md:px-8 py-20 flex flex-col gap-16 bg-palette-black rounded-t-2xl">
      <TitleSection title="Como podemos te ajudar" tagTitle="Serviços" className="text-palette-mist" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="h-full flex flex-col items-start bg-transparent border border-palette-stone/20 rounded-2xl">
            <CardHeader className="flex flex-col gap-2">
              <div>{service.icon}</div>
              <CardTitle className="text-xl font-normal text-palette-mist">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-lg font-light text-palette-mist">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
