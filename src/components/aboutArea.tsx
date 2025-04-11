import Image from "next/image"
import Link from "next/link"
import { TitleSection } from "./titleSection"

export const AboutArea = () => {
  return (
    <section id="sobre" className="grid grid-cols-1 md:grid-cols-2 bg-palette-secondary">
      <div className="container-x mx-auto py-20 flex flex-col gap-6 aspect-square">
        <TitleSection title="Expertise comprovada em Direito do Trabalho." tagTitle="Sobre nós" />
        <p className="text-muted-foreground">
          A Mendes Advocacia é um escritório especializado em direito do trabalho, dedicado a defender os direitos dos
          trabalhadores com soluções jurídicas personalizadas e eficazes. Com uma equipe de profissionais experientes,
          lidamos com casos das mais diversas complexidades, garantindo que seus direitos sejam protegidos em cada etapa
          do processo.
        </p>
        <Link href="#" className="uppercase text-sm underline underline-offset-4 mt-auto">
          Saiba mais
        </Link>
      </div>
      <div className="aspect-square relative">
        <Image
          className="w-full h-full object-cover object-top"
          src="/man-lawyer.jpg"
          alt="Imagem de advogados"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  )
}
