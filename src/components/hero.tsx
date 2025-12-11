"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full bg-[var(--background-color)]">
      <section className="flex flex-col lg:flex-row">
        {/* Texto */}
        <div className="container mx-auto w-full px-6 md:px-16 py-16 md:py-28 flex flex-col gap-8">
          <h1 className="text-[3.5rem] leading-none w-full max-w-xs md:max-w-lg text-emerald-50 uppercase">
            Sua <span className="italic font-serif">voz</span>, nossa{" "}
            <span className="italic font-serif">missão</span>.
          </h1>
          <p className="text-lg text-secondary w-64 md:w-full md:max-w-xs">
            Advocacia Trabalhista especializada em{" "}
            <span className="italic font-medium">proteger seus direitos</span> no ambiente de trabalho.
          </p>
        </div>

        {/* Imagem */}
        <div className="relative w-full overflow-hidden aspect-square md:aspect-video">
          <Image
            src="/hero-image.png"
            alt="Imagem de fundo da seção principal"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>
    </div>
  );
};
