"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { TitleSection } from "./titleSection";
import { Quote } from "lucide-react";

// Dados dos testemunhos
const testimonials = [
  {
    quote:
      "A Mendes Advocacia transformou minha situação trabalhista. Após meses de salários atrasados, eles conseguiram resolver meu caso em apenas 3 semanas. Profissionalismo exemplar!",
    name: "Carlos Silva",
    position: "Analista Financeiro",
    rating: 5,
    initials: "CS",
  },
  {
    quote:
      "Quando fui demitido sem justa causa e sem receber meus direitos, a equipe da Mendes Advocacia me orientou com clareza e conseguiu uma indenização acima do que eu esperava.",
    name: "Mariana Oliveira",
    position: "Gerente Comercial",
    rating: 5,
    initials: "MO",
  },
  {
    quote:
      "Excelente atendimento e dedicação ao cliente. A Dra. Mendes pessoalmente acompanhou meu processo de assédio moral no ambiente de trabalho e obtivemos um resultado muito favorável.",
    name: "Paulo Rodrigues",
    position: "Professor Universitário",
    rating: 5,
    initials: "PR",
  },
  {
    quote:
      "Minha empresa contratou a Mendes Advocacia para uma consultoria preventiva e isso nos economizou muito dinheiro em possíveis processos trabalhistas. Investimento que valeu cada centavo.",
    name: "Fernanda Costa",
    position: "Diretora de RH",
    rating: 4,
    initials: "FC",
  },
  {
    quote:
      "Após 15 anos de trabalho, fui dispensado sem receber meus direitos. A equipe da Mendes Advocacia não só recuperou tudo o que me era devido, como também conseguiu uma indenização adicional.",
    name: "Roberto Almeida",
    position: "Supervisor Industrial",
    rating: 5,
    initials: "RA",
  },
  {
    quote:
      "Atendimento humanizado e resultados concretos. Resolveram minha questão de horas extras não pagas com eficiência e rapidez. Recomendo fortemente os serviços da Mendes Advocacia.",
    name: "Juliana Santos",
    position: "Enfermeira",
    rating: 5,
    initials: "JS",
  },
];

export default function Testimonial() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <section
      id="depoimentos"
      className="py-20 bg-palette-white border-b border-palette-secondary"
    >
      <div className="container-x mx-auto flex flex-col gap-12 relative">
        <TitleSection
          title="O que nossos clientes dizem"
          tagTitle="Depoimentos"
        />
        <Quote className="absolute top-24 left-6 w-8 h-8" strokeWidth={1} />

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <Card className="h-full bg-transparent border-none">
                    <CardContent className="p-6 flex flex-col h-full">
                      
                      <blockquote className="flex-grow pt-8">
                        <p className=" mb-4 italic relative z-10">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      <div className="flex items-center mt-4 pt-4 border-t-[0.5px] border-palette-secondary relative z-10">
                        <div>
                          <p className="font-semibold ">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2 bg-transparent border-palette-secondary" />
            <CarouselNext className="static transform-none mx-2 bg-transparent border-palette-secondary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
