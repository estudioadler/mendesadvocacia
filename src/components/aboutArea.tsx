import { TitleSection } from "./titleSection"

export const AboutArea = () => {
  return (
    <section id="sobre" className="container mx-auto px-6 md:px-8">
      <div className="flex flex-col gap-8 py-20">
        <TitleSection title="Expertise comprovada em Direito do Trabalho." tagTitle="Sobre nós" />
        <div className="w-full">
          <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            A <span className="font-medium text-palette-graphite">Mendes Advocacia</span> é um escritório especializado
            em direito do trabalho, dedicado a defender os direitos dos trabalhadores com soluções jurídicas
            personalizadas e eficazes. Com uma equipe de profissionais experientes, lidamos com casos das mais diversas
            complexidades, garantindo que seus direitos sejam protegidos em cada etapa do processo.
          </p>
        </div>
      </div>
    </section>
  )
}
