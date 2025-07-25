import { TitleSection } from "./titleSection"

export const AboutArea = () => {
  return (
    <section id="sobre" className="container mx-auto">
      <div className="flex flex-col gap-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <TitleSection title="Expertise comprovada em Direito do Trabalho." tagTitle="Sobre nós" />
        <div className="w-full">
          <p className="text-palette-stone text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed xl:text-xl xl:leading-relaxed max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
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
