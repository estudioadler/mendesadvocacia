import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TitleSection } from "./titleSection";

export const Equipe = () => {
  const advogados = [
    {
      nome: "João Silva",
      email: "joao.silva@example.com",
      linkedin: "linkedin.com/in/joaosilva",
      telefone: "(XX) XXXX-XXXX",
      area_de_trabalho: "Direito Civil",
      imgUrl: "/woman-lawyer.webp",
    },
    {
      nome: "Maria Souza",
      email: "maria.souza@example.com",
      linkedin: "linkedin.com/in/mariasouza",
      telefone: "(XX) XXXX-XXXX",
      area_de_trabalho: "Direito Penal",
      imgUrl: "/woman-lawyer.webp",
    },
    {
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@example.com",
      linkedin: "linkedin.com/in/pedrooliveira",
      telefone: "(XX) XXXX-XXXX",
      area_de_trabalho: "Direito Empresarial",
      imgUrl: "/woman-lawyer.webp",
    },
  ];

  return (
    <section>
        <div>
          <TitleSection title="Nossa equipe" tagTitle="Advogados">
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              facere sunt eos sint sequi, velit recusandae tempore, accusamus
              exercitationem esse eligendi eaque.
            </p>
          </TitleSection>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 container-x">
        {advogados.map((advogado) => (
          <Card key={advogado.nome} {...advogado} className="w-full border-none">
            <div className="relative">
                <Image
                  className="w-full h-[450px] object-cover object-center"
                  src={advogado.imgUrl}
                  alt="imagem de advogados"
                  width={5000}
                  height={5000}
                />
                <Badge variant={"default"} className="absolute bottom-4 left-4">{advogado.area_de_trabalho}</Badge>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-neutral-800">{advogado.nome}</h2>
              <p className="text-sm text-neutral-500">{advogado.email}</p>
              <p className="text-sm text-neutral-500">{advogado.telefone}</p>
            </div>
          </Card>          
        ))}
    </div>
    </section>
    
  )
};
